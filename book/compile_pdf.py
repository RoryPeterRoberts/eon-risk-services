#!/usr/bin/env python3
"""
Compile sanitized book chapters into a polished PDF.
Styled to match EON Risk Services website branding.

Usage:
    python compile_pdf.py [--source sanitized|raw] [--output filename.pdf]
"""

import argparse
import os
import re
import markdown
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

BOOK_DIR = os.path.dirname(os.path.abspath(__file__))
SANITIZED_DIR = os.path.join(BOOK_DIR, "sanitized")
RAW_DIR = BOOK_DIR
WEBSITE_DIR = os.path.join(os.path.dirname(BOOK_DIR), "website")
IMG_DIR = os.path.join(WEBSITE_DIR, "img")
OUTPUT_DIR = os.path.join(BOOK_DIR, "output")

BOOK_TITLE = "Bank Risk Identification"
BOOK_SUBTITLE = "The Complete Methodology"
AUTHOR_NAME = "Rory Roberts, FRM"
AUTHOR_CREDENTIALS = (
    "Former Global Head of Risk Identification | "
    "20+ Years in Banking & Insurance Risk"
)

# --- Colors from website ---
NAVY = "#1B2A4A"
NAVY_LIGHT = "#243558"
NAVY_DARK = "#121D33"
GOLD = "#C5A55A"
GOLD_LIGHT = "#D4BA7A"
GOLD_DARK = "#A8893E"
TEAL = "#2A7F7F"
TEAL_DARK = "#1F6363"
TEAL_LIGHT = "#E8F4F4"
OFFWHITE = "#F8F7F4"
TEXT_COLOR = "#2C2C2C"
TEXT_LIGHT = "#5A5A5A"
TEXT_MUTED = "#8A8A8A"
BORDER = "#E2E0DC"


def get_logo_dark_bg_uri():
    """Get white-on-navy logo for dark backgrounds (cover, colophon)."""
    logo_path = os.path.join(IMG_DIR, "logo-navy.png")
    if not os.path.exists(logo_path):
        logo_path = os.path.join(IMG_DIR, "logo.png")
    return f"file://{logo_path}"


def get_logo_light_bg_uri():
    """Get black logo on transparent background for light pages."""
    logo_path = os.path.join(IMG_DIR, "logo-transparent.png")
    if not os.path.exists(logo_path):
        logo_path = os.path.join(IMG_DIR, "logo.png")
    return f"file://{logo_path}"


def build_css():
    """Build the complete CSS stylesheet for the book."""
    return f"""
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

/* ============================================
   PAGE SETUP
   ============================================ */

@page {{
    size: A4;
    margin: 30mm 25mm 28mm 30mm;

    @top-center {{
        content: string(chapter-title);
        font-family: 'Inter', sans-serif;
        font-size: 8pt;
        font-weight: 500;
        color: {TEXT_MUTED};
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding-bottom: 8mm;
        border-bottom: 0.5pt solid {BORDER};
    }}

    @bottom-center {{
        content: counter(page);
        font-family: 'Inter', sans-serif;
        font-size: 9pt;
        font-weight: 500;
        color: {TEXT_LIGHT};
    }}

    @bottom-left {{
        content: "{BOOK_TITLE}";
        font-family: 'Inter', sans-serif;
        font-size: 7.5pt;
        font-weight: 400;
        color: {TEXT_MUTED};
        letter-spacing: 0.03em;
    }}
}}

@page :first {{
    margin: 0;
    @top-center {{ content: none; }}
    @bottom-center {{ content: none; }}
    @bottom-left {{ content: none; }}
}}

@page cover {{
    margin: 0;
    @top-center {{ content: none; }}
    @bottom-center {{ content: none; }}
    @bottom-left {{ content: none; }}
}}

@page toc {{
    @top-center {{ content: none; }}
    @bottom-left {{ content: none; }}
}}

@page half-title {{
    margin: 0;
    @top-center {{ content: none; }}
    @bottom-center {{ content: none; }}
    @bottom-left {{ content: none; }}
}}

@page chapter-start {{
    @top-center {{ content: none; }}
}}

/* ============================================
   BASE TYPOGRAPHY
   ============================================ */

* {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}}

html {{
    font-size: 11pt;
}}

body {{
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: {TEXT_COLOR};
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
}}

/* ============================================
   COVER PAGE
   ============================================ */

.cover {{
    page: cover;
    page-break-after: always;
    width: 210mm;
    height: 297mm;
    background: {NAVY};
    text-align: center;
    position: relative;
    overflow: hidden;
    padding-top: 80mm;
}}

.cover::before {{
    content: '';
    position: absolute;
    top: -15%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(197,165,90,0.08) 0%, transparent 70%);
    border-radius: 50%;
}}

.cover::after {{
    content: '';
    position: absolute;
    bottom: -10%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(42,127,127,0.06) 0%, transparent 70%);
    border-radius: 50%;
}}

.cover-logo {{
    width: 200px;
    height: auto;
    margin: 0 auto 40px auto;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 8px;
}}

.cover-rule {{
    width: 60px;
    height: 2px;
    background: {GOLD};
    margin: 0 auto 40px auto;
    display: block;
    position: relative;
    z-index: 1;
}}

.cover-title {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 36pt;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1.2;
    margin: 0 auto 12px auto;
    letter-spacing: -0.01em;
    position: relative;
    z-index: 1;
}}

.cover-subtitle {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18pt;
    font-weight: 400;
    font-style: italic;
    color: {GOLD_LIGHT};
    margin: 0 auto 50px auto;
    position: relative;
    z-index: 1;
}}

.cover-author {{
    font-family: 'Inter', sans-serif;
    font-size: 12pt;
    font-weight: 600;
    color: rgba(255,255,255,0.85);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 auto 8px auto;
    position: relative;
    z-index: 1;
}}

.cover-credentials {{
    font-family: 'Inter', sans-serif;
    font-size: 8.5pt;
    font-weight: 400;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.04em;
    max-width: 300px;
    margin: 0 auto;
    line-height: 1.5;
    position: relative;
    z-index: 1;
}}

.cover-bottom {{
    position: absolute;
    bottom: 30mm;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
}}

.cover-brand {{
    font-family: 'Inter', sans-serif;
    font-size: 8pt;
    font-weight: 500;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.15em;
    text-transform: uppercase;
}}

/* ============================================
   HALF-TITLE PAGE
   ============================================ */

.half-title {{
    page: half-title;
    page-break-after: always;
    width: 210mm;
    height: 297mm;
    background: {OFFWHITE};
    text-align: center;
    padding-top: 100mm;
}}

.half-title h1 {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 28pt;
    font-weight: 600;
    color: {NAVY};
    line-height: 1.3;
    margin-bottom: 16px;
}}

.half-title .subtitle {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 14pt;
    font-weight: 400;
    font-style: italic;
    color: {GOLD_DARK};
}}

.half-title .ht-rule {{
    width: 40px;
    height: 1.5px;
    background: {GOLD};
    margin: 30px auto 30px auto;
    display: block;
}}

.half-title .author {{
    font-family: 'Inter', sans-serif;
    font-size: 11pt;
    font-weight: 500;
    color: {TEXT_LIGHT};
}}

/* ============================================
   TABLE OF CONTENTS
   ============================================ */

.toc {{
    page: toc;
    page-break-after: always;
    padding: 0;
}}

.toc-header {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22pt;
    font-weight: 600;
    color: {NAVY};
    margin-bottom: 8px;
    string-set: chapter-title "";
}}

.toc-rule {{
    width: 40px;
    height: 1.5px;
    background: {GOLD};
    margin-bottom: 36px;
}}

.toc-list {{
    list-style: none;
    padding: 0;
    margin: 0;
}}

.toc-item {{
    display: flex;
    align-items: baseline;
    padding: 10px 0;
    border-bottom: 1px solid {BORDER};
}}

.toc-item:last-child {{
    border-bottom: none;
}}

.toc-number {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 13pt;
    font-weight: 600;
    color: {GOLD_DARK};
    min-width: 40px;
    flex-shrink: 0;
}}

.toc-title {{
    font-family: 'Inter', sans-serif;
    font-size: 10.5pt;
    font-weight: 500;
    color: {NAVY};
    flex-grow: 1;
}}

.toc-page {{
    font-family: 'Inter', sans-serif;
    font-size: 10pt;
    font-weight: 400;
    color: {TEXT_MUTED};
    min-width: 30px;
    text-align: right;
    flex-shrink: 0;
}}

.toc-section {{
    margin-top: 24px;
    margin-bottom: 8px;
}}

.toc-section-label {{
    font-family: 'Inter', sans-serif;
    font-size: 8pt;
    font-weight: 600;
    color: {TEAL};
    letter-spacing: 0.12em;
    text-transform: uppercase;
}}

/* ============================================
   CHAPTER HEADINGS
   ============================================ */

.chapter {{
    page-break-before: always;
    page: chapter-start;
}}

.chapter:first-of-type {{
    page-break-before: auto;
}}

h1 {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 24pt;
    font-weight: 700;
    color: {NAVY};
    line-height: 1.25;
    margin-top: 20mm;
    margin-bottom: 6mm;
    string-set: chapter-title content();
    page-break-after: avoid;
}}

h1 .chapter-label {{
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 9pt;
    font-weight: 600;
    color: {GOLD_DARK};
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 10px;
}}

.chapter h1::after {{
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: {GOLD};
    margin-top: 14px;
}}

h2 {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 16pt;
    font-weight: 600;
    color: {NAVY};
    line-height: 1.3;
    margin-top: 28pt;
    margin-bottom: 12pt;
    page-break-after: avoid;
}}

h3 {{
    font-family: 'Inter', sans-serif;
    font-size: 12pt;
    font-weight: 600;
    color: {TEAL_DARK};
    line-height: 1.4;
    margin-top: 22pt;
    margin-bottom: 8pt;
    page-break-after: avoid;
}}

h4 {{
    font-family: 'Inter', sans-serif;
    font-size: 11pt;
    font-weight: 600;
    color: {NAVY_LIGHT};
    margin-top: 16pt;
    margin-bottom: 6pt;
    page-break-after: avoid;
}}

/* ============================================
   BODY TEXT
   ============================================ */

p {{
    font-size: 10.5pt;
    line-height: 1.75;
    margin-bottom: 10pt;
    text-align: justify;
    hyphens: auto;
    orphans: 3;
    widows: 3;
}}

strong {{
    font-weight: 600;
    color: {NAVY};
}}

em {{
    font-style: italic;
    color: {TEXT_COLOR};
}}

/* ============================================
   CASE STUDY CALLOUTS
   ============================================ */

/* Pattern/What was missing blocks */
p strong:first-child {{
    color: {NAVY};
}}

.callout-pattern,
.callout-missing {{
    margin: 14pt 0;
    padding: 14pt 18pt;
    border-radius: 4px;
    page-break-inside: avoid;
}}

.callout-pattern {{
    background: {OFFWHITE};
    border-left: 3px solid {GOLD};
}}

.callout-missing {{
    background: {TEAL_LIGHT};
    border-left: 3px solid {TEAL};
}}

/* ============================================
   BLOCKQUOTES
   ============================================ */

blockquote {{
    margin: 16pt 0;
    padding: 14pt 20pt;
    border-left: 3px solid {GOLD};
    background: {OFFWHITE};
    border-radius: 0 4px 4px 0;
    page-break-inside: avoid;
}}

blockquote p {{
    font-style: italic;
    font-size: 10.5pt;
    color: {TEXT_LIGHT};
    margin-bottom: 0;
}}

/* ============================================
   LISTS
   ============================================ */

ul, ol {{
    margin: 10pt 0;
    padding-left: 22pt;
}}

li {{
    font-size: 10.5pt;
    line-height: 1.7;
    margin-bottom: 5pt;
}}

li::marker {{
    color: {TEAL};
    font-weight: 600;
}}

/* ============================================
   TABLES
   ============================================ */

table {{
    width: 100%;
    border-collapse: collapse;
    margin: 16pt 0;
    font-size: 9.5pt;
    page-break-inside: auto;
}}

thead {{
    display: table-header-group;
    background: {NAVY};
}}

th {{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
    padding: 10pt 12pt;
    text-align: left;
    font-size: 9pt;
    letter-spacing: 0.03em;
}}

td {{
    padding: 9pt 12pt;
    border-bottom: 1px solid {BORDER};
    vertical-align: top;
}}

tr:nth-child(even) {{
    background: rgba(248, 247, 244, 0.5);
}}

/* ============================================
   HORIZONTAL RULES (Section Dividers)
   ============================================ */

hr {{
    border: none;
    height: 1px;
    background: {BORDER};
    margin: 24pt 0;
}}

/* ============================================
   SPECIAL ELEMENTS
   ============================================ */

/* Opening paragraph styling (no drop cap — WeasyPrint float rendering unreliable) */
.chapter > p:first-of-type {{
    font-size: 11pt;
    line-height: 1.75;
}}

/* Code/monospace (for any technical references) */
code {{
    font-family: 'Courier New', monospace;
    font-size: 9.5pt;
    background: {OFFWHITE};
    padding: 1pt 4pt;
    border-radius: 2pt;
    color: {TEAL_DARK};
}}

/* ============================================
   FOOTNOTES & REFERENCES
   ============================================ */

.footnote {{
    font-size: 8.5pt;
    color: {TEXT_MUTED};
    line-height: 1.5;
}}

/* ============================================
   PRINT UTILITIES
   ============================================ */

.page-break {{
    page-break-after: always;
}}

.no-break {{
    page-break-inside: avoid;
}}

.text-center {{
    text-align: center;
}}

/* Prevent awkward breaks */
h2 + p, h3 + p, h4 + p {{
    page-break-before: avoid;
}}

/* ============================================
   ABOUT THE AUTHOR (back matter)
   ============================================ */

.about-author {{
    page-break-before: always;
    padding-top: 20mm;
}}

.about-author h2 {{
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18pt;
    color: {NAVY};
    margin-bottom: 16pt;
}}

.about-author p {{
    font-size: 10.5pt;
    line-height: 1.8;
}}

/* ============================================
   COLOPHON (final page)
   ============================================ */

.colophon {{
    page: cover;
    page-break-before: always;
    width: 210mm;
    height: 297mm;
    background: {NAVY_DARK};
    text-align: center;
    padding-top: 120mm;
}}

.colophon-logo {{
    width: 140px;
    height: auto;
    opacity: 0.7;
    margin: 0 auto 24px auto;
    display: block;
    border-radius: 6px;
}}

.colophon-text {{
    font-family: 'Inter', sans-serif;
    font-size: 8pt;
    color: rgba(255,255,255,0.4);
    line-height: 1.8;
    max-width: 250px;
    margin: 0 auto;
}}

.colophon-text strong {{
    color: rgba(255,255,255,0.6);
    font-weight: 500;
}}
"""


def extract_chapter_number(filename):
    """Extract chapter number from filename like chapter_01.md."""
    match = re.search(r"chapter_(\d+)", filename)
    return int(match.group(1)) if match else 0


def extract_chapter_title(md_content):
    """Extract the H1 title from markdown content."""
    match = re.match(r"^#\s+(.+)", md_content.strip())
    if match:
        title = match.group(1)
        # Remove "Chapter X: " prefix if present
        title = re.sub(r"^Chapter\s+\d+:\s*", "", title)
        return title
    return "Untitled"


def process_chapter_markdown(md_content, chapter_num):
    """Process a single chapter's markdown into styled HTML."""

    lines = md_content.strip().split("\n")

    # Pre-process: only transform H1 to include chapter label
    processed_lines = []
    h1_found = False

    for line in lines:
        # Transform the H1
        if line.startswith("# ") and not h1_found:
            h1_found = True
            title = line[2:].strip()
            # Check if title already includes "Chapter X:"
            if re.match(r"Chapter\s+\d+:", title):
                clean_title = re.sub(r"^Chapter\s+\d+:\s*", "", title)
                processed_lines.append(
                    f'# <span class="chapter-label">Chapter {chapter_num}</span>'
                    f"{clean_title}"
                )
            else:
                processed_lines.append(
                    f'# <span class="chapter-label">Chapter {chapter_num}</span>'
                    f"{title}"
                )
            continue

        processed_lines.append(line)

    processed_md = "\n".join(processed_lines)

    # Convert to HTML first — let markdown handle ALL formatting
    html = markdown.markdown(
        processed_md,
        extensions=["tables", "smarty", "attr_list"],
        output_format="html5",
    )

    # Post-process: wrap callout paragraphs in styled divs
    html = re.sub(
        r"<p><strong>The pattern:</strong>(.*?)</p>",
        r'<div class="callout-pattern"><p><strong>The pattern:</strong>\1</p></div>',
        html,
        flags=re.DOTALL,
    )
    html = re.sub(
        r"<p><strong>What was missing:</strong>(.*?)</p>",
        r'<div class="callout-missing"><p><strong>What was missing:</strong>\1</p></div>',
        html,
        flags=re.DOTALL,
    )

    return f'<div class="chapter" id="chapter-{chapter_num}">\n{html}\n</div>'


def build_cover_html():
    """Build the cover page HTML."""
    logo_uri = get_logo_dark_bg_uri()
    return f"""
<div class="cover">
    <img src="{logo_uri}" class="cover-logo" alt="EON Risk Services">
    <div class="cover-rule"></div>
    <div class="cover-title">{BOOK_TITLE}</div>
    <div class="cover-subtitle">{BOOK_SUBTITLE}</div>
    <div class="cover-author">{AUTHOR_NAME}</div>
    <div class="cover-credentials">{AUTHOR_CREDENTIALS}</div>
    <div class="cover-bottom">
        <div class="cover-brand">EON Risk Services</div>
    </div>
</div>
"""


def build_half_title_html():
    """Build the half-title page."""
    return f"""
<div class="half-title">
    <h1>{BOOK_TITLE}</h1>
    <div class="subtitle">{BOOK_SUBTITLE}</div>
    <div class="ht-rule"></div>
    <div class="author">{AUTHOR_NAME}</div>
</div>
"""


def build_toc_html(chapters):
    """Build the table of contents."""
    items = ""
    for num, title in chapters:
        items += f"""
        <li class="toc-item">
            <span class="toc-number">{num}</span>
            <span class="toc-title">{title}</span>
        </li>"""

    return f"""
<div class="toc">
    <h2 class="toc-header">Contents</h2>
    <div class="toc-rule"></div>
    <ul class="toc-list">
        {items}
    </ul>
</div>
"""


def build_colophon_html():
    """Build the final colophon/back cover page."""
    logo_uri = get_logo_dark_bg_uri()
    return f"""
<div class="colophon">
    <img src="{logo_uri}" class="colophon-logo" alt="EON Risk Services">
    <div class="colophon-text">
        <strong>EON Risk Services Ltd</strong><br>
        Dublin, Ireland<br><br>
        &copy; 2025 Rory Roberts. All rights reserved.<br>
        No part of this publication may be reproduced without
        the prior written permission of the author.
    </div>
</div>
"""


def compile_book(source="sanitized", output_filename=None):
    """Main compilation function."""

    source_dir = SANITIZED_DIR if source == "sanitized" else RAW_DIR

    if not os.path.exists(source_dir):
        print(f"Error: Source directory not found: {source_dir}")
        return

    # Collect chapter files
    chapter_files = sorted(
        [f for f in os.listdir(source_dir) if re.match(r"chapter_\d+\.md", f)],
        key=extract_chapter_number,
    )

    if not chapter_files:
        print(f"Error: No chapter files found in {source_dir}")
        return

    print(f"Found {len(chapter_files)} chapters in {source_dir}")

    # Process each chapter
    chapters_html = []
    toc_entries = []

    for filename in chapter_files:
        chapter_num = extract_chapter_number(filename)
        filepath = os.path.join(source_dir, filename)

        with open(filepath, "r", encoding="utf-8") as f:
            md_content = f.read()

        title = extract_chapter_title(md_content)
        toc_entries.append((chapter_num, title))

        chapter_html = process_chapter_markdown(md_content, chapter_num)
        chapters_html.append(chapter_html)

        print(f"  Processed Chapter {chapter_num}: {title}")

    # Assemble full document
    full_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{BOOK_TITLE}: {BOOK_SUBTITLE}</title>
</head>
<body>
    {build_cover_html()}
    {build_half_title_html()}
    {build_toc_html(toc_entries)}
    {''.join(chapters_html)}
    {build_colophon_html()}
</body>
</html>"""

    # Output
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    if output_filename is None:
        output_filename = f"Bank_Risk_Identification_{'Sanitized' if source == 'sanitized' else 'Full'}.pdf"

    output_path = os.path.join(OUTPUT_DIR, output_filename)

    # Also save the intermediate HTML for debugging
    html_path = os.path.join(OUTPUT_DIR, output_filename.replace(".pdf", ".html"))
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(full_html)
    print(f"\n  HTML saved: {html_path}")

    # Generate PDF
    print(f"\n  Generating PDF...")
    font_config = FontConfiguration()
    css = CSS(string=build_css(), font_config=font_config)
    html_doc = HTML(string=full_html, base_url=BOOK_DIR)
    html_doc.write_pdf(output_path, stylesheets=[css], font_config=font_config)

    file_size = os.path.getsize(output_path)
    size_mb = file_size / (1024 * 1024)
    print(f"  PDF generated: {output_path} ({size_mb:.1f} MB)")

    return output_path


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Compile book chapters into a styled PDF"
    )
    parser.add_argument(
        "--source",
        choices=["sanitized", "raw"],
        default="sanitized",
        help="Use sanitized or raw chapter files (default: sanitized)",
    )
    parser.add_argument(
        "--output",
        default=None,
        help="Output PDF filename (default: auto-generated)",
    )
    args = parser.parse_args()

    compile_book(source=args.source, output_filename=args.output)
