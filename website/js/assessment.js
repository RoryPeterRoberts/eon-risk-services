/* ============================================================
   EON Risk Services — Self-Assessment Tool
   ============================================================ */

const AssessmentData = {
  sections: [
    {
      id: 'governance',
      title: 'Governance & Roles',
      questions: [
        {
          id: 'gov1',
          text: 'Is there a named individual (not a committee) accountable for the risk identification process end-to-end?',
          options: [
            { label: 'Yes, formally appointed with documented responsibilities', score: 3 },
            { label: 'Informal or shared responsibility', score: 1 },
            { label: 'No — it falls to whoever is available', score: 0 }
          ]
        },
        {
          id: 'gov2',
          text: 'Do front line business units have explicit accountability for identifying risks in their own activities (not just the risk function)?',
          options: [
            { label: 'Yes, documented in role descriptions and performance objectives', score: 3 },
            { label: 'Expected but not formalised', score: 1 },
            { label: 'No — risk identification is the risk function\'s job', score: 0 }
          ]
        },
        {
          id: 'gov3',
          text: 'Does every identified risk have a named individual risk owner (not a committee or function)?',
          options: [
            { label: 'Yes, for all material risks with clear escalation paths', score: 3 },
            { label: 'For some risks, but many are owned by committees or functions', score: 1 },
            { label: 'No — risks are owned by the risk committee', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'foundation',
      title: 'Context & Foundation Setting',
      questions: [
        {
          id: 'fnd1',
          text: 'Is the external environment formally assessed before each identification cycle (e.g. PESTLE or equivalent structured framework)?',
          options: [
            { label: 'Yes, using a structured framework with documented outputs', score: 3 },
            { label: 'Informally discussed but not formally documented', score: 1 },
            { label: 'No formal external context assessment', score: 0 }
          ]
        },
        {
          id: 'fnd2',
          text: 'Is the internal environment — risk culture, tone at the top, organisational structure — formally assessed as an input to identification?',
          options: [
            { label: 'Yes, a structured internal environment assessment is conducted', score: 3 },
            { label: 'Partially — some cultural factors are considered informally', score: 1 },
            { label: 'No — we start directly with risk identification', score: 0 }
          ]
        },
        {
          id: 'fnd3',
          text: 'Are formal risk criteria (impact scales, likelihood scales, materiality threshold) defined and approved before identification begins?',
          options: [
            { label: 'Yes, approved by the CRO/Board Risk Committee before each cycle', score: 3 },
            { label: 'Scales exist but are not formally re-approved each cycle', score: 2 },
            { label: 'No formally defined criteria', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'topdown',
      title: 'Top-Down Identification',
      questions: [
        {
          id: 'td1',
          text: 'Are top-down risk identification workshops conducted with senior management using a structured facilitation technique (e.g. SWIFT, structured brainstorming)?',
          options: [
            { label: 'Yes, with structured facilitation, prepared guide words, and documented outputs', score: 3 },
            { label: 'Workshops happen but are unstructured discussions', score: 1 },
            { label: 'No formal top-down workshops — senior management reviews the bottom-up output', score: 0 }
          ]
        },
        {
          id: 'td2',
          text: 'Do workshop participants submit independent risk assessments before the workshop (to avoid groupthink)?',
          options: [
            { label: 'Yes, pre-workshop assessments are standard practice', score: 3 },
            { label: 'Sometimes, but not consistently', score: 1 },
            { label: 'No — all identification happens in the room', score: 0 }
          ]
        },
        {
          id: 'td3',
          text: 'Is there a dedicated process for identifying emerging risks beyond the normal planning horizon (e.g. Delphi method, horizon scanning)?',
          options: [
            { label: 'Yes, a formal emerging risk process with defined time horizon (3-5 years)', score: 3 },
            { label: 'Emerging risks are discussed but no formal process exists', score: 1 },
            { label: 'No — we focus only on known, current risks', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'bottomup',
      title: 'Bottom-Up Identification',
      questions: [
        {
          id: 'bu1',
          text: 'Do all business units complete a standardised risk self-assessment using a common template?',
          options: [
            { label: 'Yes, standardised template used across all units with common taxonomy', score: 3 },
            { label: 'Templates exist but vary across business units', score: 1 },
            { label: 'No standardised bottom-up process', score: 0 }
          ]
        },
        {
          id: 'bu2',
          text: 'Are specialist risk identification sub-processes (RCSA, conduct risk, ICT/cyber, AML/CFT, third-party, model risk, etc.) formally integrated into the central inventory?',
          options: [
            { label: 'Yes, specialist processes use the common taxonomy and feed the central inventory', score: 3 },
            { label: 'Specialist processes exist but are disconnected from the central inventory', score: 1 },
            { label: 'No formal specialist sub-processes', score: 0 }
          ]
        },
        {
          id: 'bu3',
          text: 'Is there a formal reconciliation process between top-down and bottom-up outputs?',
          options: [
            { label: 'Yes, with gap analysis, challenge sessions, and documented iteration', score: 3 },
            { label: 'Informal comparison but no structured reconciliation', score: 1 },
            { label: 'No — we do either top-down or bottom-up, not both', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'assessment_method',
      title: 'Assessment Methodology',
      questions: [
        {
          id: 'am1',
          text: 'How many dimensions does your risk scoring methodology use?',
          options: [
            { label: 'Three or more dimensions (e.g. impact, likelihood, vulnerability, speed of onset)', score: 3 },
            { label: 'Two dimensions (impact and likelihood)', score: 1 },
            { label: 'Single dimension or no formal scoring', score: 0 }
          ]
        },
        {
          id: 'am2',
          text: 'Does impact scoring assess multiple consequence types (financial, regulatory, reputational, operational)?',
          options: [
            { label: 'Yes, all four consequence dimensions are assessed for every risk', score: 3 },
            { label: 'Financial impact is primary; others are considered informally', score: 1 },
            { label: 'Only financial impact is assessed', score: 0 }
          ]
        },
        {
          id: 'am3',
          text: 'Does every risk assessment include a data quality or confidence rating?',
          options: [
            { label: 'Yes, every score has a documented confidence rating', score: 3 },
            { label: 'For some risks, but not consistently applied', score: 1 },
            { label: 'No — scores are presented without confidence context', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation & Inventory',
      questions: [
        {
          id: 'doc1',
          text: 'Is there a central risk inventory that serves as a single source of truth for all identified risks?',
          options: [
            { label: 'Yes, a living inventory updated in real time with full audit trail', score: 3 },
            { label: 'A risk register exists but is updated periodically (e.g. quarterly or annually)', score: 2 },
            { label: 'Multiple spreadsheets or no central register', score: 0 }
          ]
        },
        {
          id: 'doc2',
          text: 'Do material risks have documented risk profiles including drivers, controls, KRIs, scenario linkage, and enterprise interactions?',
          options: [
            { label: 'Yes, comprehensive one-page profiles for all material risks', score: 3 },
            { label: 'Basic descriptions exist but lack depth (no KRIs, no scenario linkage)', score: 1 },
            { label: 'Risks are listed with a description only', score: 0 }
          ]
        },
        {
          id: 'doc3',
          text: 'Is the risk identification methodology itself formally documented and available to all participants?',
          options: [
            { label: 'Yes, a comprehensive process document exists and is distributed', score: 3 },
            { label: 'Partial documentation or only known to the risk function', score: 1 },
            { label: 'No formal methodology document', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'integration',
      title: 'Integration (Capital, Strategy, Board)',
      questions: [
        {
          id: 'int1',
          text: 'Is each material risk explicitly mapped to one or more ICAAP/ILAAP/CCAR stress scenarios?',
          options: [
            { label: 'Yes, direct linkage between risk inventory and scenario design', score: 3 },
            { label: 'Some linkage exists but not comprehensive', score: 1 },
            { label: 'Risk inventory and capital planning are separate processes', score: 0 }
          ]
        },
        {
          id: 'int2',
          text: 'Does the Board Risk Committee receive a principal risk report that includes trend direction, KRI status, and data quality distribution?',
          options: [
            { label: 'Yes, a comprehensive report including all these elements', score: 3 },
            { label: 'A risk report exists but lacks some of these elements', score: 2 },
            { label: 'The Board receives limited or ad hoc risk information', score: 0 }
          ]
        },
        {
          id: 'int3',
          text: 'Does the risk identification output feed into strategic planning and new product/market approval processes?',
          options: [
            { label: 'Yes, formally integrated into both processes', score: 3 },
            { label: 'Informally considered but not a formal input', score: 1 },
            { label: 'No linkage between risk identification and strategic planning', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'cycle',
      title: 'Ongoing Cycle',
      questions: [
        {
          id: 'cyc1',
          text: 'How frequently is risk identification (not just re-assessment of existing risks) conducted?',
          options: [
            { label: 'Quarterly re-identification with annual full re-identification from scratch', score: 3 },
            { label: 'Annual identification with quarterly re-assessment of existing risks', score: 2 },
            { label: 'Annual only or less frequent', score: 0 }
          ]
        },
        {
          id: 'cyc2',
          text: 'Are there defined triggers for event-driven risk identification updates (e.g. loss events, M&A, regulatory changes)?',
          options: [
            { label: 'Yes, documented triggers with defined escalation and response procedures', score: 3 },
            { label: 'Ad hoc updates happen but triggers are not formally defined', score: 1 },
            { label: 'No event-driven process — updates wait for the next cycle', score: 0 }
          ]
        },
        {
          id: 'cyc3',
          text: 'Does internal audit provide independent assurance over the risk identification process itself (not just the risks)?',
          options: [
            { label: 'Yes, annual internal audit review of the process methodology and execution', score: 3 },
            { label: 'Internal audit reviews the risk register but not the identification process', score: 1 },
            { label: 'No internal audit coverage of the risk identification process', score: 0 }
          ]
        }
      ]
    },
    {
      id: 'tech',
      title: 'Technology, Data & Training',
      questions: [
        {
          id: 'tech1',
          text: 'Is technology (AI/ML, NLP, anomaly detection) used to support risk identification?',
          options: [
            { label: 'Yes, actively deployed for emerging risk signals, pattern detection, or automation', score: 3 },
            { label: 'Exploring or piloting technology solutions', score: 2 },
            { label: 'No technology beyond spreadsheets and email', score: 0 }
          ]
        },
        {
          id: 'tech2',
          text: 'Is there a formal data management infrastructure supporting risk identification (data governance, quality controls, integration)?',
          options: [
            { label: 'Yes, formal data governance with quality controls and integrated data sources', score: 3 },
            { label: 'Some data management exists but with known gaps', score: 1 },
            { label: 'No formal data management for risk identification', score: 0 }
          ]
        },
        {
          id: 'tech3',
          text: 'Is there a formal training programme for risk identification covering Board, risk function, business units, and front-line staff?',
          options: [
            { label: 'Yes, role-specific training with annual calibration exercises', score: 3 },
            { label: 'Some training exists but not comprehensive or role-specific', score: 1 },
            { label: 'No formal training on risk identification', score: 0 }
          ]
        }
      ]
    }
  ]
};

const MaturityLevels = [
  { min: 0,  max: 20, level: 'Initial',     desc: 'Ad hoc or non-existent. No documented process. Significant regulatory risk.' },
  { min: 21, max: 40, level: 'Developing',   desc: 'Some elements exist but significant gaps remain. A regulator would identify material weaknesses.' },
  { min: 41, max: 60, level: 'Established',  desc: 'A formal process exists but lacks depth, consistency, or integration. Room for substantial improvement.' },
  { min: 61, max: 80, level: 'Advanced',     desc: 'Comprehensive process with minor gaps. Regulator-ready. Exceeds most peer institutions.' },
  { min: 81, max: 100, level: 'Leading',     desc: 'Best-in-class. Exceeds regulatory expectations across all dimensions.' }
];

class Assessment {
  constructor() {
    this.currentSection = 0;
    this.answers = {};
    this.container = document.getElementById('assessment-app');
    if (this.container) this.render();
  }

  get totalSections() { return AssessmentData.sections.length; }
  get maxScore() { return AssessmentData.sections.reduce((sum, s) => sum + s.questions.length * 3, 0); }

  render() {
    this.container.innerHTML = this.buildSection(this.currentSection);
    this.bindEvents();
    window.scrollTo({ top: this.container.offsetTop - 100, behavior: 'smooth' });
  }

  buildSection(index) {
    const section = AssessmentData.sections[index];
    const progress = ((index) / this.totalSections) * 100;

    let html = `
      <div class="assessment-progress">
        <div class="assessment-progress__bar" style="width: ${progress}%"></div>
      </div>
      <p class="assessment-progress__label">Section ${index + 1} of ${this.totalSections}: ${section.title}</p>
    `;

    section.questions.forEach((q, qi) => {
      const savedAnswer = this.answers[q.id];
      html += `
        <div class="assessment-question">
          <p class="assessment-question__text">${q.text}</p>
          ${q.options.map((opt, oi) => `
            <div class="assessment-option">
              <input type="radio" name="${q.id}" id="${q.id}_${oi}" value="${opt.score}" ${savedAnswer == opt.score ? 'checked' : ''}>
              <label for="${q.id}_${oi}">${opt.label}</label>
            </div>
          `).join('')}
        </div>
      `;
    });

    html += `
      <div style="display: flex; justify-content: space-between; margin-top: 32px;">
        ${index > 0 ? '<button class="btn btn-outline btn-sm" id="prev-btn">&larr; Previous</button>' : '<div></div>'}
        ${index < this.totalSections - 1
          ? '<button class="btn btn-primary" id="next-btn">Next Section &rarr;</button>'
          : '<button class="btn btn-gold btn-lg" id="finish-btn">See Your Results &rarr;</button>'
        }
      </div>
    `;

    return html;
  }

  bindEvents() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');

    if (prevBtn) prevBtn.addEventListener('click', () => this.prevSection());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSection());
    if (finishBtn) finishBtn.addEventListener('click', () => this.showResults());

    // Save answers on radio change
    this.container.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.answers[e.target.name] = parseInt(e.target.value);
      });
    });
  }

  saveCurrentAnswers() {
    const section = AssessmentData.sections[this.currentSection];
    section.questions.forEach(q => {
      const selected = this.container.querySelector(`input[name="${q.id}"]:checked`);
      if (selected) this.answers[q.id] = parseInt(selected.value);
    });
  }

  allCurrentAnswered() {
    const section = AssessmentData.sections[this.currentSection];
    return section.questions.every(q => this.answers[q.id] !== undefined);
  }

  nextSection() {
    this.saveCurrentAnswers();
    if (!this.allCurrentAnswered()) {
      // Highlight unanswered
      const section = AssessmentData.sections[this.currentSection];
      section.questions.forEach(q => {
        if (this.answers[q.id] === undefined) {
          const questionEl = this.container.querySelector(`input[name="${q.id}"]`).closest('.assessment-question');
          questionEl.style.background = 'rgba(192, 57, 43, 0.05)';
          questionEl.style.borderRadius = '8px';
          questionEl.style.padding = '24px 16px';
        }
      });
      return;
    }
    this.currentSection++;
    this.render();
  }

  prevSection() {
    this.saveCurrentAnswers();
    this.currentSection--;
    this.render();
  }

  calculateResults() {
    const sectionScores = AssessmentData.sections.map(section => {
      const maxSectionScore = section.questions.length * 3;
      const actualScore = section.questions.reduce((sum, q) => sum + (this.answers[q.id] || 0), 0);
      return {
        id: section.id,
        title: section.title,
        score: actualScore,
        max: maxSectionScore,
        pct: Math.round((actualScore / maxSectionScore) * 100)
      };
    });

    const totalScore = sectionScores.reduce((sum, s) => sum + s.score, 0);
    const totalMax = sectionScores.reduce((sum, s) => sum + s.max, 0);
    const totalPct = Math.round((totalScore / totalMax) * 100);

    const maturity = MaturityLevels.find(m => totalPct >= m.min && totalPct <= m.max) || MaturityLevels[0];

    // Find top 3 gaps (lowest scoring sections)
    const gaps = [...sectionScores].sort((a, b) => a.pct - b.pct).slice(0, 3);

    // Gap descriptions
    const gapMessages = {
      governance: 'Governance gaps: risk ownership is unclear and front line accountability is missing',
      foundation: 'No formal context-setting: external environment and risk culture are not assessed before identification',
      topdown: 'Top-down identification is weak: no structured workshops, no pre-workshop assessment, no emerging risk process',
      bottomup: 'Bottom-up identification lacks structure: no standardised templates, specialist processes not integrated, no reconciliation',
      assessment_method: 'Assessment methodology is basic: limited scoring dimensions, no multi-dimensional impact, no data quality ratings',
      documentation: 'Documentation is insufficient: no living inventory, no risk profiles, no formal process document',
      integration: 'Risk identification is disconnected from capital planning, strategic planning, and Board reporting',
      cycle: 'No ongoing cycle: annual-only identification, no event-driven triggers, no internal audit assurance',
      tech: 'Technology, data management, and training are underdeveloped'
    };

    return { sectionScores, totalScore, totalMax, totalPct, maturity, gaps, gapMessages };
  }

  showResults() {
    this.saveCurrentAnswers();
    if (!this.allCurrentAnswered()) {
      this.nextSection(); // Reuse validation highlight
      return;
    }

    const results = this.calculateResults();

    let html = `
      <div class="result-score">
        <p class="eyebrow" style="color: var(--gold-light);">Your Score</p>
        <div class="result-score__number">${results.totalPct}</div>
        <div class="result-score__label">${results.maturity.level}</div>
        <p class="result-score__desc">${results.maturity.desc}</p>
      </div>

      <h3 style="margin-bottom: 24px;">Section Scores</h3>
    `;

    results.sectionScores.forEach(s => {
      let fillClass = '';
      if (s.pct <= 33) fillClass = 'result-bar__fill--low';
      else if (s.pct <= 66) fillClass = 'result-bar__fill--mid';
      else fillClass = 'result-bar__fill--high';

      html += `
        <div class="result-bar">
          <div class="result-bar__label">${s.title}</div>
          <div class="result-bar__track">
            <div class="result-bar__fill ${fillClass}" style="width: ${s.pct}%"></div>
          </div>
          <div class="result-bar__value">${s.pct}%</div>
        </div>
      `;
    });

    html += `
      <div class="result-gaps" style="margin-top: 40px;">
        <h3 style="margin-bottom: 16px;">Your Top 3 Gaps</h3>
    `;

    results.gaps.forEach((gap, i) => {
      html += `
        <div class="result-gaps__item">
          <div class="result-gaps__num">${i + 1}</div>
          <div class="result-gaps__text">
            <strong>${gap.title}</strong> (${gap.pct}%) &mdash; ${results.gapMessages[gap.id]}
          </div>
        </div>
      `;
    });

    html += `</div>`;

    html += `
      <div class="email-capture">
        <h3>Get the Full Gap Report</h3>
        <p>Enter your email to receive a detailed PDF gap report with specific recommendations for each area.</p>
        <form class="form-inline" onsubmit="event.preventDefault(); this.querySelector('button').textContent='Sent — check your inbox'; this.querySelector('button').disabled=true;">
          <input type="email" class="form-input" placeholder="Your email address" required>
          <button type="submit" class="btn btn-primary">Send Report</button>
        </form>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">No spam. Unsubscribe any time.</p>
      </div>

      <div style="margin-top: 40px; text-align: center;">
        <h3>What To Do About Your Gaps</h3>
        <p class="text-light" style="margin-bottom: 24px;">Depending on where you are, here's the best next step:</p>
        <div class="btn-group" style="justify-content: center;">
          <a href="book.html" class="btn btn-outline">Get the Book</a>
          <a href="course.html" class="btn btn-primary">Take the Course</a>
          <a href="consulting.html" class="btn btn-gold">Talk to Rory</a>
        </div>
      </div>

      <div style="margin-top: 32px; text-align: center;">
        <button class="btn btn-sm" style="background: none; color: var(--text-muted); border: 1px solid var(--border);" onclick="location.reload()">Retake Assessment</button>
      </div>
    `;

    this.container.innerHTML = html;
    window.scrollTo({ top: this.container.offsetTop - 100, behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Assessment();
});
