#!/usr/bin/env node
// ============================================================
// BuildMySite — Setup HTML Builder
// Reads the source modules (setup.js, discover.js, site-kit-bundle.js,
// setup-agent.js) and inlines them into setup.html so it works from
// file:// without ES module imports.
// Usage: node scripts/build-setup.js
// Output: dist/setup.html (self-contained, works from file://)
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const WIZARD = path.join(ROOT, 'wizard');
const DIST = path.join(ROOT, 'dist');

// Read source files
const setupJs = fs.readFileSync(path.join(WIZARD, 'setup.js'), 'utf8');
const discoverJs = fs.readFileSync(path.join(WIZARD, 'discover.js'), 'utf8');
const bundleJs = fs.readFileSync(path.join(WIZARD, 'site-kit-bundle.js'), 'utf8');
const agentJs = fs.readFileSync(path.join(WIZARD, 'setup-agent.js'), 'utf8');
const setupHtml = fs.readFileSync(path.join(ROOT, 'setup.html'), 'utf8');

// Strip import/export statements from each file
function stripModuleSyntax(code) {
  return code
    // Remove import lines
    .replace(/^import\s+\{[^}]*\}\s+from\s+['"][^'"]+['"];?\s*$/gm, '')
    .replace(/^import\s+['"][^'"]+['"];?\s*$/gm, '')
    // Remove 'export ' prefix from declarations (keep the declaration)
    .replace(/^export\s+(function|async function|class|const|let|var)\s/gm, '$1 ')
    // Remove 'export default'
    .replace(/^export\s+default\s+/gm, '')
    // Remove standalone export lines like 'export { foo, bar }'
    .replace(/^export\s+\{[^}]*\};?\s*$/gm, '');
}

// Escape </script> inside JS strings so it doesn't break the inline script tag
function escapeScriptClose(code) {
  return code.replace(/<\/script>/gi, '<\\/script>');
}

// Process each file
const cleanSetup = escapeScriptClose(stripModuleSyntax(setupJs));
const cleanDiscover = escapeScriptClose(stripModuleSyntax(discoverJs));
const cleanBundle = escapeScriptClose(stripModuleSyntax(bundleJs))
  // The bundle declares 'const SITE_KIT_FILES = {...}' but setup.js already has
  // 'let SITE_KIT_FILES = null'. Convert to assignment to avoid redeclaration.
  .replace(/^const SITE_KIT_FILES\s*=/m, 'SITE_KIT_FILES =');

// For setup-agent.js, also remove the setSiteKitFiles call since we'll do it after all scripts load
let cleanAgent = escapeScriptClose(stripModuleSyntax(agentJs))
  .replace(/^setSiteKitFiles\(SITE_KIT_FILES\);?\s*$/gm, '');

// Build the inline script
const inlineScript = `<script>
// ============================================================
// BuildMySite — Self-contained setup (inlined for file:// support)
// Source: scripts/build-setup.js
// ============================================================

(function() {
'use strict';

// ---- setup.js (API helpers) ----
${cleanSetup}

// ---- discover.js (AI discovery) ----
${cleanDiscover}

// ---- site-kit-bundle.js (files to push) ----
${cleanBundle}

// Load site-kit files
setSiteKitFiles(SITE_KIT_FILES);

// ---- setup-agent.js (state machine) ----
${cleanAgent}

${getUIAndBootCode()}

})();
</script>`;

function getUIAndBootCode() {
  // Extract just the UI wiring code from the original setup.html <script type="module"> block
  // We need to reproduce the SVG icons, UI object, and boot logic
  return `
    // ---- SVG icons for build steps ----
    const SVG = {
      pending: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',
      running: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07l-2.83 2.83M9.76 14.24l-2.83 2.83m0-10.14l2.83 2.83m4.48 4.48l2.83 2.83"/></svg>',
      done: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
      error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C62828" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6m0-6l6 6"/></svg>',
    };

    // ---- DOM refs ----
    const messagesEl = document.getElementById('messages');
    const inputArea = document.getElementById('input-area');
    const inputField = document.getElementById('input-field');
    const sendBtn = document.getElementById('send-btn');
    const progressFill = document.getElementById('progress-fill');
    const stepPips = document.querySelectorAll('.step-pip');

    // ---- Scroll to bottom ----
    function scrollBottom() {
      requestAnimationFrame(function() {
        messagesEl.scrollTop = messagesEl.scrollHeight;
      });
    }

    // ---- UI interface for the agent ----
    const ui = {
      addMessage: function(role, html, isRich) {
        var div = document.createElement('div');
        div.className = 'msg msg--' + role;
        if (isRich) {
          div.innerHTML = html;
        } else {
          var paras = html.split('\\n\\n').filter(Boolean);
          div.innerHTML = paras.map(function(p) { return '<p>' + p.replace(/\\n/g, '<br>') + '</p>'; }).join('');
        }
        messagesEl.appendChild(div);
        scrollBottom();
      },

      addButtons: function(buttons) {
        var wrap = document.createElement('div');
        wrap.className = 'msg-buttons';
        buttons.forEach(function(btn) {
          var el = document.createElement('button');
          el.className = 'msg-btn' + (buttons.indexOf(btn) === 0 ? ' msg-btn--primary' : '');
          el.textContent = btn.label;
          el.addEventListener('click', function() {
            wrap.querySelectorAll('.msg-btn').forEach(function(b) { b.disabled = true; b.style.opacity = '0.5'; });
            if (btn.url) window.open(btn.url, '_blank', 'noopener');
            ui.addMessage('user', btn.label);
            if (ui.onAction) ui.onAction(btn.action, btn);
          });
          wrap.appendChild(el);
        });
        messagesEl.appendChild(wrap);
        scrollBottom();
      },

      addProgress: function(steps) {
        var wrap = document.createElement('div');
        wrap.className = 'build-progress';
        wrap.id = 'build-progress';
        steps.forEach(function(step) {
          wrap.innerHTML += '<div class="build-step" data-build="' + step.id + '">' +
            '<div class="build-step__icon build-step__icon--pending">' + SVG.pending + '</div>' +
            '<div><div class="build-step__text">' + step.label + '</div>' +
            '<div class="build-step__detail" data-detail="' + step.id + '"></div></div></div>';
        });
        messagesEl.appendChild(wrap);
        scrollBottom();
      },

      setBuildStep: function(stepId, status, detail) {
        var row = document.querySelector('[data-build="' + stepId + '"]');
        if (!row) return;
        var icon = row.querySelector('.build-step__icon');
        icon.className = 'build-step__icon build-step__icon--' + status;
        icon.innerHTML = SVG[status] || SVG.pending;
        if (detail) {
          var detailEl = row.querySelector('[data-detail="' + stepId + '"]');
          if (detailEl) detailEl.textContent = detail;
        }
        scrollBottom();
      },

      setInputVisible: function(visible, placeholder) {
        if (visible) {
          inputArea.classList.add('input-area--visible');
          if (placeholder) inputField.placeholder = placeholder;
          inputField.value = '';
          inputField.focus();
        } else {
          inputArea.classList.remove('input-area--visible');
        }
      },

      updateProgress: function(completedStep) {
        var pct = Math.round((completedStep / 5) * 100);
        progressFill.style.width = pct + '%';
        stepPips.forEach(function(pip) {
          var n = parseInt(pip.dataset.step);
          pip.classList.remove('step-pip--active', 'step-pip--done');
          if (n < completedStep + 1) pip.classList.add('step-pip--done');
          else if (n === completedStep + 1) pip.classList.add('step-pip--active');
        });
      },

      onAction: null,
    };

    // ---- Wire up agent ----
    var agent = new SetupAgent(ui);

    function sendInput() {
      var value = inputField.value.trim();
      if (!value) return;
      ui.addMessage('user', value);
      inputField.value = '';
      agent.handleInput(value);
    }

    sendBtn.addEventListener('click', sendInput);
    inputField.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') sendInput();
    });

    // ---- Start ----
    agent.start();
`;
}

// Replace the <script type="module">...</script> block in setup.html
const outputHtml = setupHtml.replace(
  /<script type="module">[\s\S]*?<\/script>/,
  inlineScript
);

// Write output
fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'setup.html'), outputHtml);

const size = (fs.statSync(path.join(DIST, 'setup.html')).size / 1024).toFixed(0);
console.log(`Built dist/setup.html (${size}KB)`);
