#!/usr/bin/env python3
"""
Generate the CRO Executive Overview PDF.
Branded, concise, Board-quality document.

Usage:
    python build_cro_overview.py
"""

import os
from weasyprint import HTML, CSS
from weasyprint.text.fonts import FontConfiguration

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
WEBSITE_DIR = os.path.dirname(SCRIPT_DIR)
IMG_DIR = os.path.join(WEBSITE_DIR, "img")
OUTPUT_FILE = os.path.join(SCRIPT_DIR, "CRO_Executive_Overview.pdf")

# --- Brand colors ---
NAVY = "#1B2A4A"
NAVY_LIGHT = "#243558"
GOLD = "#C5A55A"
GOLD_LIGHT = "#D4BA7A"
GOLD_DARK = "#A8893E"
TEAL = "#2A7F7F"
TEAL_LIGHT = "#E8F4F4"
OFFWHITE = "#F8F7F4"
TEXT = "#2C2C2C"
TEXT_LIGHT = "#5A5A5A"
TEXT_MUTED = "#8A8A8A"
BORDER = "#E2E0DC"


def logo_uri():
    for name in ["logo-transparent.png", "logo.png"]:
        p = os.path.join(IMG_DIR, name)
        if os.path.exists(p):
            return f"file://{p}"
    return ""


def build_css():
    return f"""
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

@page {{
    size: A4;
    margin: 25mm 22mm 25mm 22mm;

    @bottom-right {{
        content: counter(page);
        font-family: 'Inter', sans-serif;
        font-size: 8pt;
        color: {TEXT_MUTED};
    }}

    @bottom-left {{
        content: "EON Risk Services — CRO Executive Overview";
        font-family: 'Inter', sans-serif;
        font-size: 7pt;
        color: {TEXT_MUTED};
    }}
}}

@page :first {{
    margin: 0;
    @bottom-left {{ content: none; }}
    @bottom-right {{ content: none; }}
}}

/* Reset */
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 10pt;
    line-height: 1.65;
    color: {TEXT};
}}
h1, h2, h3, h4 {{
    font-family: 'Playfair Display', Georgia, serif;
    color: {NAVY};
    line-height: 1.25;
}}
h2 {{
    font-size: 18pt;
    margin-bottom: 12pt;
    padding-bottom: 6pt;
    border-bottom: 2px solid {GOLD};
}}
h3 {{
    font-size: 13pt;
    margin-top: 16pt;
    margin-bottom: 8pt;
}}
h4 {{
    font-family: 'Inter', sans-serif;
    font-size: 10pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: {TEAL};
    margin-top: 14pt;
    margin-bottom: 6pt;
}}
p {{
    margin-bottom: 8pt;
}}
strong {{
    color: {NAVY};
}}
a {{
    color: {TEAL};
    text-decoration: none;
}}

/* --- COVER PAGE --- */
.cover {{
    width: 210mm;
    height: 297mm;
    background: {NAVY};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40mm 35mm;
    page-break-after: always;
    position: relative;
}}
.cover::before {{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 140mm;
    height: 140mm;
    background: radial-gradient(circle at top right, rgba(197,165,90,0.08) 0%, transparent 70%);
}}
.cover-logo {{
    width: 140px;
    margin-bottom: 30mm;
    opacity: 0.9;
}}
.cover-eyebrow {{
    font-family: 'Inter', sans-serif;
    font-size: 9pt;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: {GOLD_LIGHT};
    margin-bottom: 8mm;
}}
.cover h1 {{
    font-size: 32pt;
    color: white;
    margin-bottom: 6mm;
    line-height: 1.15;
}}
.cover-subtitle {{
    font-family: 'Playfair Display', serif;
    font-size: 15pt;
    color: rgba(255,255,255,0.65);
    margin-bottom: 20mm;
}}
.cover-meta {{
    font-size: 9pt;
    color: rgba(255,255,255,0.45);
    line-height: 1.8;
}}
.cover-meta strong {{
    color: rgba(255,255,255,0.7);
}}
.cover-bar {{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4mm;
    background: {GOLD};
}}

/* --- SECTIONS --- */
.section {{
    page-break-before: always;
}}
.section:first-of-type {{
    page-break-before: auto;
}}
.section--flow {{
    page-break-before: auto;
}}
.section-eyebrow {{
    font-family: 'Inter', sans-serif;
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: {GOLD_DARK};
    margin-bottom: 4pt;
}}

/* --- PULL QUOTE --- */
.pullquote {{
    border-left: 3pt solid {GOLD};
    margin: 14pt 0;
    padding: 10pt 16pt;
    background: {OFFWHITE};
    border-radius: 0 4pt 4pt 0;
    page-break-inside: avoid;
}}
.pullquote p {{
    font-style: italic;
    color: {TEXT_LIGHT};
    font-size: 10.5pt;
    margin-bottom: 0;
}}

/* --- STAT GRID --- */
.stat-grid {{
    display: flex;
    gap: 12pt;
    margin: 16pt 0;
}}
.stat-box {{
    flex: 1;
    text-align: center;
    padding: 14pt 8pt;
    background: {OFFWHITE};
    border-radius: 6pt;
    border: 0.5pt solid {BORDER};
}}
.stat-value {{
    font-family: 'Playfair Display', serif;
    font-size: 22pt;
    font-weight: 700;
    color: {NAVY};
}}
.stat-label {{
    font-size: 7.5pt;
    color: {TEXT_MUTED};
    margin-top: 2pt;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}}

/* --- COMPARISON TABLE --- */
table.comparison {{
    width: 100%;
    border-collapse: collapse;
    margin: 12pt 0;
    font-size: 9pt;
}}
table.comparison th {{
    text-align: left;
    padding: 8pt 10pt;
    font-family: 'Inter', sans-serif;
    font-size: 7.5pt;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: {NAVY};
    border-bottom: 2pt solid {NAVY};
}}
table.comparison td {{
    padding: 7pt 10pt;
    border-bottom: 0.5pt solid {BORDER};
    vertical-align: top;
}}
table.comparison td:first-child {{
    color: {TEXT_MUTED};
    width: 42%;
}}
table.comparison td:last-child {{
    color: {TEXT};
    font-weight: 500;
}}

/* --- PHASE GRID --- */
.phase-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10pt;
    margin: 14pt 0;
}}
.phase-card {{
    padding: 12pt 14pt;
    border: 0.5pt solid {BORDER};
    border-radius: 6pt;
    background: white;
    page-break-inside: avoid;
}}
.phase-num {{
    font-family: 'Playfair Display', serif;
    font-size: 18pt;
    font-weight: 700;
    color: {GOLD};
    float: left;
    margin-right: 8pt;
    line-height: 1;
}}
.phase-title {{
    font-family: 'Playfair Display', serif;
    font-size: 11pt;
    font-weight: 600;
    color: {NAVY};
    margin-bottom: 4pt;
}}
.phase-text {{
    font-size: 8.5pt;
    color: {TEXT_LIGHT};
    line-height: 1.5;
    clear: both;
}}

/* --- CHECKLIST --- */
ul.checklist {{
    list-style: none;
    margin: 10pt 0;
    padding: 0;
}}
ul.checklist li {{
    padding: 4pt 0 4pt 16pt;
    position: relative;
    font-size: 9.5pt;
}}
ul.checklist li::before {{
    content: '\\2713';
    position: absolute;
    left: 0;
    color: {TEAL};
    font-weight: 700;
    font-size: 9pt;
}}

/* --- REG BADGES --- */
.reg-badges {{
    display: flex;
    flex-wrap: wrap;
    gap: 6pt;
    margin: 12pt 0;
}}
.reg-badge {{
    padding: 4pt 10pt;
    background: {OFFWHITE};
    border: 0.5pt solid {BORDER};
    border-radius: 3pt;
    font-size: 8pt;
    font-weight: 600;
    color: {NAVY};
}}

/* --- IMPLEMENTATION TABLE --- */
table.impl {{
    width: 100%;
    border-collapse: collapse;
    margin: 12pt 0;
    font-size: 9pt;
}}
table.impl th {{
    text-align: left;
    padding: 8pt 10pt;
    font-family: 'Inter', sans-serif;
    font-size: 7.5pt;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: white;
    background: {NAVY};
}}
table.impl td {{
    padding: 7pt 10pt;
    border-bottom: 0.5pt solid {BORDER};
    vertical-align: top;
}}
table.impl tr:nth-child(even) td {{
    background: {OFFWHITE};
}}

/* --- CASE STUDY BOX --- */
.case-box {{
    padding: 12pt 14pt;
    border: 0.5pt solid {BORDER};
    border-radius: 6pt;
    background: white;
    margin-bottom: 10pt;
    page-break-inside: avoid;
}}
.case-box-header {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4pt;
}}
.case-name {{
    font-family: 'Playfair Display', serif;
    font-size: 11pt;
    font-weight: 600;
    color: {NAVY};
}}
.case-loss {{
    font-size: 9pt;
    font-weight: 700;
    color: {GOLD_DARK};
}}
.case-text {{
    font-size: 9pt;
    color: {TEXT_LIGHT};
    line-height: 1.55;
}}

/* --- CTA BOX --- */
.cta-box {{
    background: {NAVY};
    color: white;
    padding: 20pt 24pt;
    border-radius: 8pt;
    margin-top: 16pt;
    text-align: center;
    page-break-inside: avoid;
}}
.cta-box h3 {{
    color: white;
    font-size: 14pt;
    margin-bottom: 8pt;
}}
.cta-box p {{
    color: rgba(255,255,255,0.7);
    font-size: 10pt;
    margin-bottom: 12pt;
}}
.cta-box .url {{
    display: inline-block;
    padding: 8pt 20pt;
    background: {TEAL};
    color: white;
    border-radius: 4pt;
    font-weight: 600;
    font-size: 10pt;
    margin: 4pt;
}}

/* --- TWO COLUMN --- */
.two-col {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16pt;
    margin: 12pt 0;
}}

/* --- TOOLKIT CARD --- */
.toolkit-card {{
    padding: 12pt 14pt;
    border-left: 3pt solid {TEAL};
    background: {OFFWHITE};
    border-radius: 0 6pt 6pt 0;
    margin-bottom: 10pt;
    page-break-inside: avoid;
}}
.toolkit-card-title {{
    font-family: 'Playfair Display', serif;
    font-size: 11pt;
    font-weight: 600;
    color: {NAVY};
    margin-bottom: 4pt;
}}
.toolkit-card-text {{
    font-size: 8.5pt;
    color: {TEXT_LIGHT};
    line-height: 1.5;
}}

/* --- DIVIDER --- */
.gold-divider {{
    height: 2pt;
    background: {GOLD};
    margin: 16pt 0;
    border: none;
}}
"""


def build_html():
    logo = logo_uri()
    return f"""<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body>

<!-- ===================== COVER ===================== -->
<div class="cover">
    <img src="{logo}" class="cover-logo" alt="EON Risk Services">
    <div class="cover-eyebrow">Executive Overview for Chief Risk Officers</div>
    <h1>Bank Risk Identification</h1>
    <div class="cover-subtitle">The Complete Methodology</div>
    <div class="cover-meta">
        <strong>Rory Roberts, FRM</strong><br>
        CEO, EON Risk Services Ltd<br>
        Former Global Head of Risk Identification<br>
        <br>
        eonriskservices.com &nbsp;&bull;&nbsp; February 2026
    </div>
    <div class="cover-bar"></div>
</div>


<!-- ===================== THE PROBLEM ===================== -->
<div class="section">
    <div class="section-eyebrow">The Problem</div>
    <h2>Most Banks Cannot Explain How They Identify Their Risks</h2>

    <p>Ask any CRO: "Show me, step by step, how your institution identifies its material risks." In most banks, the answer is a workshop that runs once a year, produces a heat map that looks the same as last year's, and feeds into a risk register that no one uses for decision-making.</p>

    <p>Regulators have noticed. Examination after examination finds the same structural gaps: no formal methodology, no reconciliation between top-down and bottom-up views, no process for identifying <em>new</em> risks between annual cycles, and no audit trail showing how the institution arrived at its risk universe.</p>

    <div class="pullquote">
        <p>"Effective risk identification requires a formal, documented process that is more than a periodic workshop. It requires dual-track identification, mandatory reconciliation, and continuous reassessment."</p>
    </div>

    <p>The consequences of weak risk identification are not theoretical. They are visible in the loss record of the global banking industry.</p>

    <div class="stat-grid">
        <div class="stat-box">
            <div class="stat-value">179</div>
            <div class="stat-label">Bank failures analysed</div>
        </div>
        <div class="stat-box">
            <div class="stat-value">$2.3T</div>
            <div class="stat-label">Aggregate losses</div>
        </div>
        <div class="stat-box">
            <div class="stat-value">10</div>
            <div class="stat-label">Recurring failure modes</div>
        </div>
        <div class="stat-box">
            <div class="stat-value">6</div>
            <div class="stat-label">Decades of evidence</div>
        </div>
    </div>

    <p>We analysed 179 bank failures from the 1970s to 2024 and found that in virtually every case, the risk was identifiable <em>before</em> the loss materialised. The institution either never identified it, identified it but scored it too low, or identified it once and never re-assessed it as conditions changed. The failure was in the process.</p>
</div>


<!-- ===================== THE EVIDENCE ===================== -->
<div class="section">
    <div class="section-eyebrow">The Evidence</div>
    <h2>Three Cases That Illustrate the Pattern</h2>

    <p>These are not outliers. They are typical. The same structural weaknesses appear across institutions of every size, jurisdiction, and business model.</p>

    <div class="case-box">
        <div class="case-box-header">
            <span class="case-name">Silicon Valley Bank (2023)</span>
            <span class="case-loss">$209B in assets</span>
        </div>
        <p class="case-text"><strong>Failure mode: Complacency and risk re-assessment failure.</strong> Interest rate risk was on SVB's risk register. It had been there for years. But the risk identification process never asked whether the controls around it were still adequate as the rate environment changed. The risk was identified; the process for re-assessing it was not.</p>
    </div>

    <div class="case-box">
        <div class="case-box-header">
            <span class="case-name">Credit Suisse / Archegos (2021)</span>
            <span class="case-loss">$5.5B loss</span>
        </div>
        <p class="case-text"><strong>Failure mode: Reconciliation failure.</strong> The prime brokerage unit assessed counterparty risk. Risk management assessed market risk. Nobody asked: what happens when the same client creates concentrated exposure across both? The top-down and bottom-up views were never reconciled. An enterprise portfolio view would have caught the cross-counterparty concentration.</p>
    </div>

    <div class="case-box">
        <div class="case-box-header">
            <span class="case-name">Wells Fargo (2016)</span>
            <span class="case-loss">$3B+ in fines and remediation</span>
        </div>
        <p class="case-text"><strong>Failure mode: Cultural suppression.</strong> Conduct risk was identifiable through whistleblower complaints, internal audit findings, and customer data. But the risk identification process had no channel for frontline signals to reach the enterprise risk register. The process was designed to look up, not down.</p>
    </div>

    <p style="margin-top: 14pt;">In all three cases, a structured dual-track identification process with mandatory reconciliation, four-dimensional scoring, and quarterly re-identification would have surfaced the risk before the loss materialised. Not because the methodology is prescient &mdash; but because it forces the institution to ask the questions it would rather not ask.</p>
</div>


<!-- ===================== THE GAP ===================== -->
<div class="section">
    <div class="section-eyebrow">The Gap</div>
    <h2>What Most Banks Do vs. What This Methodology Does</h2>

    <p>This is not a marginal improvement to existing practice. It addresses ten structural weaknesses that appear in the majority of bank risk identification processes today.</p>

    <table class="comparison">
        <thead>
            <tr>
                <th>Common Practice</th>
                <th>This Methodology</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Top-down identification only (annual workshop)</td><td>Dual-track: top-down SWIFT workshops + standardised bottom-up templates from every business unit</td></tr>
            <tr><td>No reconciliation between views</td><td>Mandatory reconciliation with formal gap analysis (blind spots, scope gaps, assessment gaps)</td></tr>
            <tr><td>2D scoring (impact &times; likelihood)</td><td>4D scoring: impact, likelihood, vulnerability, speed of onset</td></tr>
            <tr><td>Single-dimension impact (financial only)</td><td>Multi-dimensional impact: financial, regulatory, reputational, customer/operational</td></tr>
            <tr><td>Risk scores with no confidence context</td><td>Data quality / confidence rating on every assessment</td></tr>
            <tr><td>Static annual register</td><td>Living inventory with quarterly re-identification (not just re-assessment)</td></tr>
            <tr><td>Disconnected from capital planning</td><td>Explicit ICAAP / ILAAP / CCAR integration with stress scenario mapping</td></tr>
            <tr><td>No emerging risk process</td><td>Delphi Method for 3&ndash;5 year horizon scanning</td></tr>
            <tr><td>Risk interaction ignored</td><td>Bow-tie analysis, interaction matrices, concentration assessment</td></tr>
            <tr><td>Process never independently validated</td><td>Annual seven-area internal audit programme over the process itself</td></tr>
        </tbody>
    </table>
</div>


<!-- ===================== THE METHODOLOGY ===================== -->
<div class="section">
    <div class="section-eyebrow">The Methodology</div>
    <h2>Six Phases from Foundation to Continuous Improvement</h2>

    <p>Each phase builds on the last. Skip one and the process fails under regulatory scrutiny. The full methodology is documented across 16 chapters with 242 regulatory citations.</p>

    <div class="phase-grid">
        <div class="phase-card">
            <div class="phase-num">1</div>
            <div class="phase-title">Foundation Setting</div>
            <div class="phase-text">Risk taxonomy (L1/L2/L3), regulatory mapping across jurisdictions, PESTLE analysis, internal environment assessment (seven COSO elements), risk criteria calibration, and scoring methodology design.</div>
        </div>
        <div class="phase-card">
            <div class="phase-num">2</div>
            <div class="phase-title">Dual-Track Identification</div>
            <div class="phase-text">Top-down: SWIFT workshops with pre-assessment and Delphi panels. Bottom-up: standardised 11-field templates with 10 specialist sub-processes (RCSA, Conduct, Cyber, AML, Third-Party, Model Risk). Mandatory reconciliation between tracks.</div>
        </div>
        <div class="phase-card">
            <div class="phase-num">3</div>
            <div class="phase-title">Assessment &amp; Prioritisation</div>
            <div class="phase-text">Four-dimensional scoring (impact, likelihood, vulnerability, speed of onset). Multi-dimensional impact. Data quality ratings. Inherent and residual risk with control effectiveness. Bow-tie analysis for material risks.</div>
        </div>
        <div class="phase-card">
            <div class="phase-num">4</div>
            <div class="phase-title">Documentation</div>
            <div class="phase-text">Living risk inventory (14 fields per risk). One-page risk profiles for material risks. Full audit trail on every change, score, and decision. Assumption register and disagreement log.</div>
        </div>
        <div class="phase-card">
            <div class="phase-num">5</div>
            <div class="phase-title">Integration</div>
            <div class="phase-text">Direct linkage to ICAAP/ILAAP/CCAR stress scenarios. Board Risk Committee reporting (principal risk report). Strategic planning integration. Regulatory vs economic gap analysis. Pillar 3 disclosures.</div>
        </div>
        <div class="phase-card">
            <div class="phase-num">6</div>
            <div class="phase-title">Ongoing Cycle</div>
            <div class="phase-text">Quarterly re-identification (per Fed SR 15-18). Annual full cycle from scratch. Event-driven triggers (six categories). Internal audit assurance. Process KPIs and continual improvement. Five-level training programme.</div>
        </div>
    </div>
</div>


<!-- ===================== REGULATORY ALIGNMENT ===================== -->
<div class="section">
    <div class="section-eyebrow">Regulatory Alignment</div>
    <h2>Mapped to 16 Regulatory Frameworks</h2>

    <p>Every phase of the methodology is traceable to specific regulatory requirements. The toolkit includes a full regulatory traceability matrix showing which methodology step addresses which requirement.</p>

    <div class="reg-badges">
        <span class="reg-badge">BCBS Corporate Governance</span>
        <span class="reg-badge">BCBS 239</span>
        <span class="reg-badge">BIS PSMOR</span>
        <span class="reg-badge">PRA SS31/15</span>
        <span class="reg-badge">PRA Step-in Risk</span>
        <span class="reg-badge">Fed SR 15-18</span>
        <span class="reg-badge">OCC Heightened Standards</span>
        <span class="reg-badge">FCA Conduct Risk</span>
        <span class="reg-badge">EBA Internal Governance</span>
        <span class="reg-badge">EBA ESG Guidelines</span>
        <span class="reg-badge">ECB Climate Guide</span>
        <span class="reg-badge">EBA ICT / DORA</span>
        <span class="reg-badge">EBA Outsourcing</span>
        <span class="reg-badge">AMLD6</span>
        <span class="reg-badge">ISO 31000:2018</span>
        <span class="reg-badge">COSO ERM 2017</span>
    </div>

    <h3>Key Regulatory Requirements Addressed</h3>

    <table class="impl">
        <thead>
            <tr>
                <th>Requirement</th>
                <th>Source</th>
                <th>Methodology Response</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Formal risk identification process</td><td>BCBS Principle 7</td><td>Six-phase documented methodology with audit trail</td></tr>
            <tr><td>Quarterly re-identification</td><td>Fed SR 15-18</td><td>Phase 6: quarterly cycle with event-driven triggers</td></tr>
            <tr><td>Board oversight of risk appetite</td><td>PRA SS31/15</td><td>Phase 5: principal risk report with appetite status</td></tr>
            <tr><td>Climate risk as transmission channel</td><td>ECB Climate Guide</td><td>Phase 1: integrated into existing taxonomy, not standalone</td></tr>
            <tr><td>ICT risk assessment</td><td>EBA / DORA</td><td>Phase 2: specialist sub-process for cyber/ICT risk</td></tr>
            <tr><td>Capital adequacy linkage</td><td>PRA / Fed / ECB</td><td>Phase 5: explicit ICAAP/ILAAP stress scenario mapping</td></tr>
            <tr><td>Independent validation</td><td>BCBS, PRA</td><td>Phase 6: seven-area internal audit programme</td></tr>
        </tbody>
    </table>
</div>


<!-- ===================== IMPLEMENTATION ===================== -->
<div class="section">
    <div class="section-eyebrow">Implementation</div>
    <h2>How Long, How Many People, How Much</h2>

    <p>The methodology is designed for implementation without external consultants. The toolkit provides every template, worked example, and step-by-step instruction. That said, institutions with compressed timelines or limited internal capacity may benefit from expert support.</p>

    <h3>Three Operating Modes</h3>

    <table class="impl">
        <thead>
            <tr>
                <th>Mode</th>
                <th>Duration</th>
                <th>Core Team</th>
                <th>BU Involvement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>First-time build</strong><br><span style="font-size:8pt;color:{TEXT_MUTED}">Process does not exist</span></td>
                <td>30 weeks</td>
                <td>2&ndash;3 FTE</td>
                <td>6&ndash;10 coordinators<br>(1&ndash;2 days/week)</td>
            </tr>
            <tr>
                <td><strong>Annual full cycle</strong><br><span style="font-size:8pt;color:{TEXT_MUTED}">Process is established</span></td>
                <td>12 weeks</td>
                <td>1&ndash;2 FTE</td>
                <td>6&ndash;10 coordinators<br>(1 week each)</td>
            </tr>
            <tr>
                <td><strong>Quarterly refresh</strong><br><span style="font-size:8pt;color:{TEXT_MUTED}">Between annual cycles</span></td>
                <td>10 working days</td>
                <td>1 FTE</td>
                <td>Brief check-in<br>(1 hour each)</td>
            </tr>
        </tbody>
    </table>

    <h3>Core Team Roles</h3>

    <table class="impl">
        <thead>
            <tr>
                <th>Role</th>
                <th>Commitment</th>
                <th>Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr><td><strong>Executive Sponsor</strong> (CRO)</td><td>2&ndash;3 hrs/week</td><td>Remove blockers, sign off methodology, present to Board</td></tr>
            <tr><td><strong>Risk Identification Lead</strong></td><td>Full-time</td><td>Own the process: design, build, facilitate, report</td></tr>
            <tr><td><strong>Methodology Analyst</strong></td><td>Full-time (build phase)</td><td>Taxonomy design, scoring calibration, data analysis</td></tr>
            <tr><td><strong>BU Risk Coordinators</strong></td><td>Part-time (during cycle)</td><td>Complete bottom-up templates, attend workshops, own BU risk content</td></tr>
            <tr><td><strong>Regulatory Liaison</strong></td><td>1 day/week</td><td>Regulatory mapping, traceability, supervisory alignment</td></tr>
        </tbody>
    </table>

    <p><strong>For mid-tier banks:</strong> The Risk Identification Lead typically doubles as the Methodology Analyst. The BU Risk Coordinators are not new hires &mdash; they are existing risk managers who take on identification as part of their annual responsibilities. The incremental headcount cost of the first-time build is typically one to two FTE for 30 weeks.</p>
</div>


<!-- ===================== THE TOOLKIT ===================== -->
<div class="section">
    <div class="section-eyebrow">The Toolkit</div>
    <h2>Everything Your Team Needs &mdash; Free</h2>

    <p>The full methodology is available as a free toolkit. No paywall, no sales qualification, no trial period. Your team can download it today and begin implementation.</p>

    <div class="toolkit-card">
        <div class="toolkit-card-title">The Book (PDF, 200+ pages)</div>
        <div class="toolkit-card-text">16 chapters covering the full six-phase methodology. 242 regulatory citations. 179 bank failures analysed. Aligned to ISO 31000, COSO ERM, BCBS, PRA, Fed, ECB, and 10 more frameworks.</div>
    </div>

    <div class="toolkit-card">
        <div class="toolkit-card-title">Template Pack (Excel, 31 tabs)</div>
        <div class="toolkit-card-text">Every artifact from the methodology: risk taxonomy, PESTLE assessment, SWIFT prompt matrix, bottom-up template, scoring worksheets, interaction matrix, bow-tie template, KRI dashboard, Board report template, and 20 more. Pre-built with formulas, dropdowns, conditional formatting, and worked examples.</div>
    </div>

    <div class="toolkit-card">
        <div class="toolkit-card-title">AI Prompt Library (30 prompts)</div>
        <div class="toolkit-card-text">Copy-paste prompts for Microsoft Copilot or any enterprise AI. Generates methodology artifacts with institution-specific placeholders. Organised by methodology phase.</div>
    </div>

    <div class="toolkit-card">
        <div class="toolkit-card-title">Implementation Playbook (Web)</div>
        <div class="toolkit-card-text">Step-by-step operational plans for all three modes: first-time build (30 weeks), annual cycle (12 weeks), and quarterly refresh (10 days). Task lists, decision gates, deliverable checklists, and template references.</div>
    </div>

    <h4>Why Free?</h4>
    <p>Risk identification is a process every bank needs but very few have built rigorously. Putting the methodology behind a paywall means fewer banks adopt it. We would rather every bank in the world used this methodology &mdash; and a few of them called us when they needed help implementing it.</p>
</div>


<!-- ===================== NEXT STEPS ===================== -->
<div class="section section--flow">
    <div class="section-eyebrow">Next Steps</div>
    <h2>Three Ways to Start</h2>

    <h3>1. Score Your Current Process</h3>
    <p>Take the free 10-minute self-assessment. It scores your institution's risk identification process across the six methodology phases and identifies your largest gaps. No registration required.</p>
    <p><strong>eonriskservices.com/assessment</strong></p>

    <hr class="gold-divider">

    <h3>2. Download the Toolkit</h3>
    <p>Get the complete methodology: the book, the 31-tab template pack, the AI prompt library, and the Copilot agent definition. Enter your email and receive immediate access.</p>
    <p><strong>eonriskservices.com/toolkit</strong></p>

    <hr class="gold-divider">

    <h3>3. Talk to Us About Implementation</h3>
    <p>If your institution needs to build or substantially improve its risk identification process on a compressed timeline, we offer three consulting engagements:</p>
    <ul class="checklist">
        <li><strong>Gap Assessment</strong> (2&ndash;3 weeks) &mdash; Independent assessment of your current process against the full methodology, with a prioritised remediation roadmap</li>
        <li><strong>Full Implementation</strong> (6&ndash;9 months) &mdash; We work alongside your team to build the process from foundation to first Board report</li>
        <li><strong>Audit Readiness</strong> (4&ndash;6 weeks) &mdash; Prepare your risk identification process for regulatory examination or internal audit</li>
    </ul>
    <p><strong>eonriskservices.com/consulting</strong></p>

    <div class="cta-box">
        <h3>Ready to Start?</h3>
        <p>Download the toolkit, score your process, or contact us directly.</p>
        <span class="url">eonriskservices.com/toolkit</span>
        <span class="url">eonriskservices.com/assessment</span>
    </div>

    <div style="margin-top: 20pt; text-align: center; font-size: 9pt; color: {TEXT_MUTED};">
        <p><strong style="color: {NAVY};">EON Risk Services Ltd</strong><br>
        Dublin, Ireland<br>
        rory@eonriskservices.com &nbsp;&bull;&nbsp; eonriskservices.com<br>
        <br>
        &copy; 2026 EON Risk Services Ltd. All rights reserved.</p>
    </div>
</div>

</body>
</html>"""


def main():
    print("Building CRO Executive Overview PDF...")
    font_config = FontConfiguration()
    css = CSS(string=build_css(), font_config=font_config)
    html_content = build_html()

    html = HTML(string=html_content, base_url=SCRIPT_DIR)
    html.write_pdf(OUTPUT_FILE, stylesheets=[css], font_config=font_config)

    size_kb = os.path.getsize(OUTPUT_FILE) / 1024
    print(f"Written: {OUTPUT_FILE}")
    print(f"Size: {size_kb:.0f} KB")


if __name__ == "__main__":
    main()
