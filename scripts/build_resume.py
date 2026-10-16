"""Build the site's searchable, one-page resume PDF."""

import json
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
    "section": ParagraphStyle("Section", fontName="ResumeSans-Bold", fontSize=9.2, leading=12, textColor=GREEN),
    "body": ParagraphStyle("Body", fontName="ResumeSans", fontSize=9.5, leading=12.5, textColor=INK),
    "skill_label": ParagraphStyle("SkillLabel", fontName="ResumeSans-Bold", fontSize=8.7, leading=11.5, textColor=GREEN),
    "skill_value": ParagraphStyle("SkillValue", fontName="ResumeSans", fontSize=9.2, leading=12, textColor=INK),
    "role": ParagraphStyle("Role", fontName="ResumeSans", fontSize=9.7, leading=13, textColor=INK),
    "date": ParagraphStyle("Date", fontName="ResumeSans", fontSize=9, leading=13, alignment=TA_RIGHT, textColor=MUTED),
    "bullet": ParagraphStyle("Bullet", fontName="ResumeSans", fontSize=9.4, leading=12.2, leftIndent=9, firstLineIndent=0, bulletIndent=0, bulletFontName="ResumeSans", bulletFontSize=7.5, spaceAfter=2.5, textColor=INK),
}

# Shared taxonomy; omit Cloud Storage from the résumé to keep Cloud on one line.
SKILL_GROUPS = [(group["title"], [skill for skill in group["skills"]
                                 if skill != "Google Cloud Storage"])
                for group in json.loads((ROOT / "lib" / "skills.json").read_text())]

EXPERIENCE = [['Burn',
  'Senior Full-stack Engineer',
  'Oct 2022 - Present',
  ['Own React Native/Expo mobile, Next.js web, and PostgreSQL/Prisma backend engineering in a '
   'TypeScript monorepo; implemented native Google sign-in bridges in Swift and Kotlin.',
   'Built streaming OpenAI-powered LLM chat with persistent history and health-data tool calling; used '
   'transactional leases, recorded tool outcomes, and rate limits to guard concurrent replies and '
   'repeated writes after retries.',
   'Exposed health tools to ChatGPT through an OAuth-protected MCP server with scoped consent and '
   'encrypted tokens; fetched Google Health metrics concurrently with timeouts and partial '
   'results.',
   'Implemented direct Apple App Store and Google Play subscription verification with account '
   'binding, product and status checks, and store-environment validation.',
   'Standardized development with Docker Compose for PostgreSQL, migrations, Next.js, Expo/Metro, '
   'and Android builds; added release preflight checks and regression coverage.',
   'Optimized meal photos with Sharp resizing and compression; enforced upload and decoded-pixel '
   'limits.']],
 ["Nifty's (acquired by MoonPay)",
  'Full-stack Engineer',
  'May 2021 - Oct 2022',
  ['Engineered Solidity smart contracts supporting 100,000+ NFT mints across Ethereum and Palm.',
   'Automated contract deployment and verification across staging and production for repeatable '
   'releases.']],
 ['Hypernet Labs',
  'Full-stack Engineer',
  'Feb 2019 - Feb 2020',
  ['Architected layer-two ERC20 payment settlement infrastructure scaling to 25 '
   'transactions/second.',
   'Built a modular SDK with dependency injection and CI/CD automation; managed a small '
   'engineering team and technical roadmaps.']],
 ['i2Chain, Inc',
  'Full-stack Engineer',
  'Sep 2018 - Feb 2019',
  ['Delivered Electron/React/Redux desktop software and Node.js identity-based access controls, '
   'operated a production geth node cluster, and developed AWS Lambda services.']],
 ['Ooma, Inc.',
  'Software Engineering Intern',
  'Jun 2017 - Sep 2017',
  ['Containerized applications with Docker Swarm and profiled performance across a million-line '
   'Java codebase.']],
 ['Weebly',
  'Software Engineering Intern',
  'Jun 2015 - Sep 2015',
  ['Generated API clients in 13 languages and delivered REST endpoints with automated checks.']]]

PROFILE = 'Senior full-stack engineer building AI-powered web and mobile products with TypeScript, React, Next.js, Node.js, and PostgreSQL. Owns product delivery across interfaces, backend services, LLM integrations, identity, data, and DevOps.'


def paragraph(text, style="body"):
    return Paragraph(text, STYLES[style])


def section(title):
    return [
        Spacer(1, 6),
        paragraph(title, "section"),
        Spacer(1, 3),
        HRFlowable(width="100%", thickness=0.5, color=RULE),
        Spacer(1, 5),
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
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
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
        paragraph("Senior Full-Stack Engineer", "title"),
        paragraph("Remote US / Los Angeles hybrid  |  818-445-2786  |  elliot.shohet@gmail.com", "contact"),
        paragraph('<link href="https://elliotshohet.com">elliotshohet.com</link>  |  <link href="https://github.com/elliotshohet">github.com/elliotshohet</link>  |  <link href="https://linkedin.com/in/elliotshohet">linkedin.com/in/elliotshohet</link>', "contact"),
        *section("PROFILE"), paragraph(escape(PROFILE)),
        *section("TECHNICAL SKILLS"), skills_table(),
        *section("PROFESSIONAL EXPERIENCE"),
        *[role(*experience, first=index == 0) for index, experience in enumerate(EXPERIENCE)],
        *section("EDUCATION"),
        aligned_row(
            paragraph("<b>University of California, Davis</b> | B.S. Computer Science", "role"),
            paragraph("2012 - 2017", "date"),
        ),
    ]
    SimpleDocTemplate(
        str(OUTPUT), pagesize=letter, leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=28, bottomMargin=28,
        title="Elliot Shohet - Senior Full-Stack Engineer", author="Elliot Shohet",
    ).build(flow)


if __name__ == "__main__":
    build_resume()
