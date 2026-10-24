"""Build the portfolio's one-page resume with RenderCV from shared site data."""

import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "elliot-shohet-resume.pdf"


def build_resume():
    experience = json.loads((ROOT / "lib" / "experience.json").read_text())
    skills = json.loads((ROOT / "lib" / "skills.json").read_text())

    # Keep the PDF aligned with the most relevant, verified site experience.
    bullet_indices = {"burn": (0, 1, 2, 3), "niftys": (0, 1), "hypernet": (0, 1, 2), "i2chain": (0,)}
    roles = [
        {
            "company": job["name"],
            "position": job["role"],
            "date": job["period"].replace(" - ", " – "),
            "highlights": [job["bullets"][index] for index in bullet_indices[job["slug"]]],
        }
        for job in experience
    ]
    skill_labels = {
        "Large language models (LLMs)": "LLMs",
        "Model Context Protocol (MCP)": "MCP",
    }
    skill_rows = [
        {"label": group["title"], "details": ", ".join(
            skill_labels.get(skill, skill)
            for skill in group["skills"]
        )}
        for group in skills
    ]

    resume = {
        "cv": {
            "name": "Elliot Shohet",
            "headline": "Full-stack Engineer",
            "location": "Los Angeles, CA",
            "email": "elliot.shohet@gmail.com",
            "phone": "+1-818-445-2786",
            "website": "https://elliotshohet.com",
            "social_networks": [
                {"network": "GitHub", "username": "elliotshohet"},
                {"network": "LinkedIn", "username": "elliotshohet"},
            ],
            "sections": {
                "profile": [
                    "Full-stack Engineer taking 0→1 web, mobile, and desktop products from idea to production. "
                    "Owns architecture and releases across interfaces, APIs, and data; "
                    "has led small engineering teams. Builds practical AI coaching and agent workflows "
                    "with a focus on reliable, efficient model usage."
                ],
                "experience": roles,
                "Skills": skill_rows,
                "projects": [
                    {
                        "name": "[Freecoda](https://freecoda.com) · [GitHub](https://github.com/elliotshohet/freecoda)",
                        "summary": "Built an open-source AI agent for conversations and project work, with a shared TypeScript core, Electron desktop app, Next.js service, and terminal CLI. Implemented workspace-scoped file tools, separate edit and command approvals, and encrypted conversation sync across clients. Built transactional PostgreSQL usage reservations and settlement to enforce user allowances and a global spending cap.",
                    }
                ],
                "education": [
                    {
                        "institution": "University of California, Davis",
                        "area": "Computer Science",
                        "degree": "BS",
                        "date": "2012 – 2017",
                    }
                ],
            },
        },
        "design": {
            "theme": "engineeringclassic",
            "page": {
                "size": "us-letter",
                "top_margin": "0.50in",
                "bottom_margin": "0.50in",
                "left_margin": "0.64in",
                "right_margin": "0.64in",
                "show_footer": False,
                "show_top_note": False,
            },
            "colors": {
                "body": "#293833",
                "name": "#173934",
                "headline": "#52645f",
                "connections": "#52645f",
                "section_titles": "#173934",
                "links": "#176e5c",
            },
            "typography": {
                "alignment": "left",
                "line_spacing": "0.56em",
                "font_family": "Lato",
                "font_size": {
                    "body": "10pt",
                    "name": "28pt",
                    "headline": "11pt",
                    "connections": "8.5pt",
                    "section_titles": "10.5pt",
                },
                "bold": {"name": True, "section_titles": True},
            },
            "header": {
                "alignment": "left",
                "space_below_name": "0.20cm",
                "space_below_headline": "0.24cm",
                "space_below_connections": "0.40cm",
                "connections": {
                    "show_icons": True,
                    "display_urls_instead_of_usernames": False,
                    "space_between_connections": "0.30cm",
                },
            },
            "section_titles": {
                "type": "with_partial_line",
                "line_thickness": "0.35pt",
                "space_above": "0.32cm",
                "space_below": "0.20cm",
            },
            "sections": {
                "space_between_regular_entries": "0.75em",
                "space_between_text_based_entries": "0.16em",
            },
            "entries": {
                "side_space": "0cm",
                "highlights": {"space_above": "0.12cm", "space_between_items": "0.08cm"},
            },
            "templates": {
                "experience_entry": {
                    "main_column": "**COMPANY** | POSITION\nSUMMARY\nHIGHLIGHTS",
                    "date_and_location_column": "DATE",
                },
            },
        },
        "settings": {
            "render_command": {"output_folder": "rendercv_output", "dont_generate_markdown": True, "dont_generate_html": True, "dont_generate_png": True},
            "pdf_title": "Elliot Shohet - Full-stack Engineer",
        },
    }

    with tempfile.TemporaryDirectory(prefix="elliot-resume-") as temp_dir:
        temp = Path(temp_dir)
        source = temp / "Elliot_Shohet_CV.yaml"
        # JSON is valid YAML and keeps this generator on one canonical data path.
        source.write_text(json.dumps(resume, ensure_ascii=False, indent=2))
        subprocess.run([sys.executable, "-m", "rendercv", "render", str(source)], cwd=temp, check=True)
        rendered = temp / "rendercv_output" / "Elliot_Shohet_CV.pdf"
        if len(PdfReader(rendered).pages) != 1:
            raise ValueError("Resume exceeds one page; shorten the selected content before publishing.")
        shutil.copyfile(rendered, OUTPUT)


if __name__ == "__main__":
    build_resume()
