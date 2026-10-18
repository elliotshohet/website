"""Build the site's searchable, one-page resume PDF from shared content."""

import json
from io import BytesIO
from pathlib import Path
from xml.sax.saxutils import escape

import reportlab
from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "elliot-shohet-resume.pdf"
MARGIN = 42
# SimpleDocTemplate frames also reserve six points of padding on each side.
PAGE_WIDTH = letter[0] - 2 * MARGIN - 12
INK = colors.HexColor("#17221d")
GREEN = colors.HexColor("#254b3b")
MUTED = colors.HexColor("#536159")
RULE = colors.HexColor("#cbd5ce")

# Use native fonts when available, with a portable bundled fallback.
FONT_PAIRS = [
    (Path("/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"),
     Path("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf")),
    (Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
     Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")),
    (Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
     Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")),
    (Path(reportlab.__file__).parent / "fonts/Vera.ttf",
     Path(reportlab.__file__).parent / "fonts/VeraBd.ttf"),
]
regular, bold = next(pair for pair in FONT_PAIRS if all(path.is_file() for path in pair))
pdfmetrics.registerFont(TTFont("ResumeSans", str(regular)))
pdfmetrics.registerFont(TTFont("ResumeSans-Bold", str(bold)))
pdfmetrics.registerFontFamily(
    "ResumeSans", normal="ResumeSans", bold="ResumeSans-Bold",
    italic="ResumeSans", boldItalic="ResumeSans-Bold",
)

STYLES = {
    "name": ParagraphStyle("Name", fontName="ResumeSans-Bold", fontSize=25, leading=28, textColor=GREEN),
    "title": ParagraphStyle("Title", fontName="ResumeSans", fontSize=11.5, leading=16, spaceAfter=5, textColor=INK),
    "contact": ParagraphStyle("Contact", fontName="ResumeSans", fontSize=8.3, leading=11.5, textColor=MUTED),
    "section": ParagraphStyle("Section", fontName="ResumeSans-Bold", fontSize=9.2, leading=11.5, textColor=GREEN),
    "body": ParagraphStyle("Body", fontName="ResumeSans", fontSize=10, leading=12.5, textColor=INK),
    "skill_label": ParagraphStyle("SkillLabel", fontName="ResumeSans-Bold", fontSize=8.7, leading=11.5, textColor=GREEN),
    "skill_value": ParagraphStyle("SkillValue", fontName="ResumeSans", fontSize=9.2, leading=11.5, textColor=INK),
    "role": ParagraphStyle("Role", fontName="ResumeSans", fontSize=9.7, leading=13, textColor=INK),
    "date": ParagraphStyle("Date", fontName="ResumeSans", fontSize=9, leading=13, alignment=TA_RIGHT, textColor=MUTED),
    "bullet": ParagraphStyle("Bullet", fontName="ResumeSans", fontSize=10, leading=12.5, leftIndent=10, firstLineIndent=0, bulletIndent=0, bulletFontName="ResumeSans", bulletFontSize=7.5, spaceAfter=1.5, textColor=INK),
}

# Keep the complete skills taxonomy aligned with the website.
SKILL_GROUPS = [(group["title"], group["skills"])
                for group in json.loads((ROOT / "lib" / "skills.json").read_text())]

EXPERIENCE = json.loads((ROOT / "lib" / "experience.json").read_text())

PROFILE = 'Full-stack engineer building AI products across mobile, web, and backend services. Combines hands-on TypeScript, React, Next.js, and PostgreSQL development with experience in LLM tool calling, payment infrastructure, and leading small engineering teams.'


def paragraph(text, style="body"):
    return Paragraph(text, STYLES[style])


def section(title):
    return [
        Spacer(1, 4),
        paragraph(title, "section"),
        Spacer(1, 3),
        HRFlowable(width="100%", thickness=0.5, color=RULE),
        Spacer(1, 4),
    ]


def aligned_row(left, right):
    table = Table([[left, right]], colWidths=[PAGE_WIDTH - 130, 130], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return table


def skills_table():
    # A consistent label column keeps long lists aligned and readable.
    rows = [[paragraph(escape(title), "skill_label"),
             paragraph(escape(", ".join(skills)), "skill_value")]
            for title, skills in SKILL_GROUPS]
    table = Table(rows, colWidths=[102, PAGE_WIDTH - 102], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, -1), 9),
        ("RIGHTPADDING", (1, 0), (1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
    ]))
    return table


def role(company, title, date, bullets, first=False):
    header = aligned_row(
        paragraph(
            f'<font color="#254b3b"><b>{escape(company)}</b></font>'
            f'&nbsp;&nbsp;&nbsp;<font color="#536159" size="9.2">{escape(title)}</font>',
            "role",
        ),
        paragraph(escape(date), "date"),
    )
    header.setStyle(TableStyle([
        ("TOPPADDING", (0, 0), (-1, -1), 3.5),
        *([] if first else [("LINEABOVE", (0, 0), (-1, 0), 0.35, colors.HexColor("#e0e6e2"))]),
    ]))
    return KeepTogether([
        header, Spacer(1, 1),
        *[Paragraph(escape(bullet), STYLES["bullet"], bulletText="•") for bullet in bullets],
    ])


def build_resume():
    flow = [
        paragraph("ELLIOT SHOHET", "name"),
        paragraph("Full-stack Engineer | AI Product Engineering", "title"),
        paragraph('Remote US / Los Angeles hybrid  |  <link href="tel:+18184452786">818-445-2786</link>  |  <link href="mailto:elliot.shohet@gmail.com">elliot.shohet@gmail.com</link>', "contact"),
        paragraph('<link href="https://elliotshohet.com">elliotshohet.com</link>  |  <link href="https://github.com/elliotshohet">github.com/elliotshohet</link>  |  <link href="https://linkedin.com/in/elliotshohet">linkedin.com/in/elliotshohet</link>', "contact"),
        *section("PROFILE"), paragraph(escape(PROFILE)),
        *section("PROFESSIONAL EXPERIENCE"),
        *[role(experience["name"], experience["role"], experience["period"],
               experience["bullets"], first=index == 0)
          for index, experience in enumerate(EXPERIENCE)],
        *section("PROJECTS"),
        aligned_row(
            paragraph('<b>Freecoda</b> | AI coding assistant', "role"),
            paragraph('<link href="https://freecoda.com">freecoda.com</link>', "date"),
        ),
        Paragraph("Built a TypeScript coding assistant spanning terminal, Electron, and Next.js; implemented reviewed edits, command approvals, and transactional PostgreSQL reservations for hosted model usage.", STYLES["bullet"], bulletText="•"),
        *section("TECHNICAL SKILLS"), skills_table(),
        *section("EDUCATION"),
        aligned_row(
            paragraph("<b>University of California, Davis</b> | B.S. Computer Science", "role"),
            paragraph("2012 - 2017", "date"),
        ),
    ]
    buffer = BytesIO()

    def reject_extra_page(canvas, document):
        raise ValueError("Resume exceeds one page; shorten the content before publishing.")

    SimpleDocTemplate(
        buffer, pagesize=letter, leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=28, bottomMargin=28,
        title="Elliot Shohet - Full-stack Engineer", author="Elliot Shohet",
    ).build(flow, onLaterPages=reject_extra_page)
    OUTPUT.write_bytes(buffer.getvalue())


if __name__ == "__main__":
    build_resume()
