// ============================================================
// BUILDMYSITE — Conversational Setup Agent
// A state machine that drives the chat-based setup flow.
// Runs locally in the user's browser — no server needed.
// Imports: setup.js (API helpers), discover.js (AI discovery),
//          site-kit-bundle.js (files to push to GitHub)
// ============================================================

import {
  startGitHubDeviceFlow, pollGitHubToken,
  validateGitHubToken, createGitHubRepo, pushSiteKit, setSiteKitFiles,
  validateVercelToken, createVercelProject, setVercelEnvVars, triggerVercelDeploy,
  setupAIEnvVars, triggerSteppedBuild, generateAdminToken, addCustomDomain,
  generateImage, pushImageToRepo
} from './setup.js';
import { discoverBusiness } from './discover.js';
import { SITE_KIT_FILES } from './site-kit-bundle.js';

// Load site-kit files into the setup module
setSiteKitFiles(SITE_KIT_FILES);

// ---- OS detection ----
function detectOS() {
  const p = navigator.platform || '';
  const ua = navigator.userAgent || '';
  if (p.startsWith('Mac') || /Macintosh/.test(ua)) return 'mac';
  if (p.startsWith('Win') || /Windows/.test(ua))    return 'windows';
  return 'linux';
}

// ---- State definitions ----
const STATES = {
  // Phase A: Welcome
  WELCOME:          'WELCOME',

  // Phase B: GitHub
  GITHUB_INTRO:     'GITHUB_INTRO',
  GITHUB_TOKEN:     'GITHUB_TOKEN',
  GITHUB_VALIDATE:  'GITHUB_VALIDATE',

  // Phase C: Vercel
  VERCEL_INTRO:     'VERCEL_INTRO',
  VERCEL_TOKEN:     'VERCEL_TOKEN',
  VERCEL_VALIDATE:  'VERCEL_VALIDATE',

  // Phase D: Discovery
  BIZ_NAME:         'BIZ_NAME',
  BIZ_DISCOVER:     'BIZ_DISCOVER',
  BIZ_REVIEW:       'BIZ_REVIEW',

  // Phase E: Page Selection
  PAGE_SELECT:      'PAGE_SELECT',

  // Phase F: Build
  BUILD_CONFIRM:    'BUILD_CONFIRM',
  BUILD_RUNNING:    'BUILD_RUNNING',
  BUILD_COMPLETE:   'BUILD_COMPLETE',

  // Phase G: Image Upload (optional)
  IMAGE_UPLOAD:     'IMAGE_UPLOAD',

  // Phase H: Domain (optional)
  DOMAIN_PROMPT:    'DOMAIN_PROMPT',
};

// ---- localStorage persistence ----
const STORAGE_KEY = 'buildmysite_state';

function saveState(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

// ---- SetupAgent class ----
export class SetupAgent {
  constructor(ui) {
    this.ui = ui;
    this.state = STATES.WELCOME;
    this.os = detectOS();

    // Collected data
    this.githubToken = null;
    this.githubLogin = null;
    this.vercelToken = null;
    this.vercelUsername = null;
    this.businessName = null;
    this.businessLocation = null;
    this.businessInfo = null;
    this.selectedPages = null;
    this.repoName = null;
    this.projectId = null;
    this.projectSlug = null;
    this.siteUrl = null;
    this.adminToken = null;
    this.repoUrl = null;
  }

  // Persist current progress
  _save() {
    saveState({
      githubToken: this.githubToken, githubLogin: this.githubLogin,
      vercelToken: this.vercelToken, vercelUsername: this.vercelUsername,
      businessInfo: this.businessInfo, repoName: this.repoName,
      selectedPages: this.selectedPages,
    });
  }

  // Restore from localStorage
  _restore(saved) {
    this.githubToken = saved.githubToken;
    this.githubLogin = saved.githubLogin;
    this.vercelToken = saved.vercelToken;
    this.vercelUsername = saved.vercelUsername;
    this.businessInfo = saved.businessInfo;
    this.repoName = saved.repoName;
    this.selectedPages = saved.selectedPages;
  }

  // Figure out which state to resume from based on saved data
  _resumeState(saved) {
    if (saved.selectedPages && saved.businessInfo && saved.vercelToken && saved.githubToken) return STATES.BUILD_CONFIRM;
    if (saved.businessInfo && saved.vercelToken && saved.githubToken) return STATES.PAGE_SELECT;
    if (saved.vercelToken && saved.githubToken) return STATES.BIZ_NAME;
    if (saved.githubToken) return STATES.VERCEL_INTRO;
    return null;
  }

  // Start the conversation
  async start() {
    const saved = loadState();
    if (saved && saved.githubToken) {
      // We have saved progress — offer to resume
      const resumeState = this._resumeState(saved);
      if (resumeState) {
        const parts = [];
        if (saved.githubLogin) parts.push(`GitHub: @${saved.githubLogin}`);
        if (saved.vercelUsername) parts.push(`Vercel: ${saved.vercelUsername}`);
        if (saved.businessInfo) parts.push(`Business: ${saved.businessInfo.name}`);

        this.ui.addMessage('agent', `Welcome back! I have your previous progress saved:\n\n**${parts.join(' · ')}**\n\nWant to pick up where you left off, or start fresh?`);

        this.ui.addButtons([
          { label: 'Continue', action: 'resume' },
          { label: 'Start fresh', action: 'start-fresh' },
        ]);

        this.ui.onAction = async (action) => {
          if (action === 'resume') {
            this._restore(saved);
            // Show progress pips for completed steps
            let step = 0;
            if (this.githubToken) step = 1;
            if (this.vercelToken) step = 2;
            if (this.businessInfo) step = 3;
            if (this.selectedPages) step = 4;
            this.ui.updateProgress(step);
            await this.enter(resumeState);
          } else {
            clearState();
            await this.enter(STATES.WELCOME);
          }
        };
        return;
      }
    }
    await this.enter(STATES.WELCOME);
  }

  // Main state handler — called on user input or button clicks
  async handleInput(value) {
    switch (this.state) {
      case STATES.GITHUB_TOKEN:
        return; // Device flow — no text input needed
      case STATES.VERCEL_TOKEN:
        return this.enter(STATES.VERCEL_VALIDATE, value);
      case STATES.BIZ_NAME:
        return this.enter(STATES.BIZ_DISCOVER, value);
      case STATES.BIZ_REVIEW:
        // User confirmed — proceed to page selection
        return this.enter(STATES.PAGE_SELECT);
      case STATES.DOMAIN_PROMPT:
        return this.handleDomain(value);
      default:
        break;
    }
  }

  // Handle button actions
  async handleAction(action, data) {
    switch (action) {
      case 'confirm-build':
        return this.enter(STATES.BUILD_RUNNING);
      case 'edit-info':
        return this.doEditForm();
      case 'save-edits':
        return this.doSaveEdits(data);
      case 'confirm-info':
        return this.enter(STATES.PAGE_SELECT);
      case 'skip-domain':
        this.ui.addMessage('agent', "No problem. You can add a custom domain anytime from Vercel's dashboard. Enjoy your new website!");
        return;
      case 'confirm-pages':
        return this.enter(STATES.BUILD_CONFIRM);
      case 'add-domain':
        return this.enter(STATES.DOMAIN_PROMPT);
      case 'skip-images':
        this.ui.addMessage('agent', "No problem! You can add images later from the admin panel. Let's wrap up.");
        return this.enter(STATES.DOMAIN_PROMPT);
      case 'upload-images':
        return this.doImageUploadProcess();
      case 'generate-images':
        return this.doGenerateImages();
      default:
        break;
    }
  }

  // Enter a new state
  async enter(newState, input) {
    this.state = newState;

    switch (newState) {
      case STATES.WELCOME:
        return this.doWelcome();
      case STATES.GITHUB_INTRO:
        return this.doGitHubIntro();
      case STATES.GITHUB_TOKEN:
        return this.doGitHubToken();
      case STATES.GITHUB_VALIDATE:
        return this.doGitHubValidate(input);
      case STATES.VERCEL_INTRO:
        return this.doVercelIntro();
      case STATES.VERCEL_TOKEN:
        return this.doVercelToken();
      case STATES.VERCEL_VALIDATE:
        return this.doVercelValidate(input);
      case STATES.BIZ_NAME:
        return this.doBizName();
      case STATES.BIZ_DISCOVER:
        return this.doBizDiscover(input);
      case STATES.BIZ_REVIEW:
        return this.doBizReview();
      case STATES.PAGE_SELECT:
        return this.doPageSelect();
      case STATES.BUILD_CONFIRM:
        return this.doBuildConfirm();
      case STATES.BUILD_RUNNING:
        return this.doBuildRunning();
      case STATES.BUILD_COMPLETE:
        return this.doBuildComplete();
      case STATES.IMAGE_UPLOAD:
        return this.doImageUpload();
      case STATES.DOMAIN_PROMPT:
        return this.doDomainPrompt();
    }
  }

  // ================================================================
  // Phase A: Welcome
  // ================================================================

  doWelcome() {
    this.ui.addMessage('agent', `Hey! I'm your setup assistant. I'll get your website live in about 10 minutes.

I just need two things from you: a GitHub account (to store your code) and a Vercel account (to host your site for free). The AI is included — no API key needed.`);

    this.ui.addButtons([
      { label: "Let's go!", action: 'start-setup' },
    ]);

    this.ui.onAction = async (action) => {
      await this.enter(STATES.GITHUB_INTRO);
    };
  }

  // ================================================================
  // Phase B: GitHub
  // ================================================================

  doGitHubIntro() {
    const signupUrl = 'https://github.com/signup';
    this.ui.addMessage('agent', `Next: GitHub. This is where your website's code lives — your own repository, under your control.

Do you already have a GitHub account?`);

    this.ui.addButtons([
      { label: 'Yes, I have GitHub', action: 'has-github' },
      { label: 'No, I need to sign up', action: 'no-github', url: signupUrl },
    ]);

    this.ui.onAction = async (action) => {
      if (action === 'has-github' || action === 'no-github') {
        if (action === 'no-github') {
          this.ui.addMessage('agent', `No problem — sign up at <a href="${signupUrl}" target="_blank" rel="noopener">github.com/signup</a> (it's free). Come back here when you're done.`);
        }
        await this.enter(STATES.GITHUB_TOKEN);
      }
    };
  }

  async doGitHubToken() {
    this.ui.setInputVisible(false);
    this.ui.addMessage('agent', 'Starting GitHub connection...', true);

    try {
      const flow = await startGitHubDeviceFlow();
      this._deviceCode = flow.device_code;

      this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Connect your GitHub account</div>
<p>Click the button below — it will open GitHub in a new tab.</p>
<p>When GitHub asks for a code, enter: <strong style="font-size:1.3em;letter-spacing:0.1em;user-select:all">${flow.user_code}</strong></p>
<p>Then click <strong>"Authorize"</strong>.</p>
<p class="chat-hint">I'll detect it automatically once you've approved.</p>
</div>`, true);

      this.ui.addButtons([
        { label: 'Connect GitHub', action: 'open-github-auth', url: flow.verification_uri },
      ]);

      this.ui.onAction = async (action) => {
        if (action === 'open-github-auth') {
          this.ui.addMessage('agent', `Waiting for you to authorise on GitHub...`, true);
          await this.enter(STATES.GITHUB_VALIDATE);
        }
      };
    } catch (err) {
      this.ui.addMessage('agent', `Couldn't start GitHub connection: ${err.message}. Let's try again.`);
      this.ui.addButtons([
        { label: 'Try again', action: 'retry-github' },
      ]);
      this.ui.onAction = async (action) => {
        if (action === 'retry-github') await this.enter(STATES.GITHUB_TOKEN);
      };
    }
  }

  async doGitHubValidate() {
    try {
      const token = await pollGitHubToken(this._deviceCode);

      const result = await validateGitHubToken(token);
      if (!result.valid) {
        this.ui.addMessage('agent', `Got a token but it didn't validate: ${result.error || 'unknown error'}. Let's try again.`);
        this.ui.addButtons([
          { label: 'Try again', action: 'retry-github' },
        ]);
        this.ui.onAction = async (action) => {
          if (action === 'retry-github') await this.enter(STATES.GITHUB_TOKEN);
        };
        return;
      }

      this.githubToken = token;
      this.githubLogin = result.login;
      this._save();

      this.ui.addMessage('agent', `Connected to GitHub as <strong>@${result.login}</strong>. Your code will live under your account.`);
      this.ui.updateProgress(1);

      // Prompt to install Vercel GitHub App
      const vercelAppUrl = 'https://github.com/apps/vercel';
      this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">One more GitHub step</div>
<p>Vercel needs permission to read your GitHub repos so it can auto-deploy your site. Click below to install the Vercel app on your GitHub account.</p>
<p class="chat-hint">On the GitHub page, click <strong>"Install"</strong> and allow access to <strong>all repositories</strong> (or select the one we'll create). Then come back here.</p>
</div>`, true);

      this.ui.addButtons([
        { label: 'Install Vercel on GitHub', action: 'install-vercel-app', url: vercelAppUrl },
        { label: 'Already installed', action: 'vercel-app-done' },
      ]);

      this.ui.onAction = async (action) => {
        if (action === 'install-vercel-app' || action === 'vercel-app-done') {
          if (action === 'install-vercel-app') {
            this.ui.addMessage('agent', `Once you've clicked <strong>Install</strong> on GitHub, come back here.`);
            this.ui.addButtons([
              { label: 'Done — continue', action: 'vercel-app-done' },
            ]);
            return;
          }
          await this.enter(STATES.VERCEL_INTRO);
        }
      };
    } catch (err) {
      this.ui.addMessage('agent', `GitHub authorisation timed out or was denied. No worries — let's try again.`);
      this.ui.addButtons([
        { label: 'Try again', action: 'retry-github' },
      ]);
      this.ui.onAction = async (action) => {
        if (action === 'retry-github') await this.enter(STATES.GITHUB_TOKEN);
      };
    }
  }

  // ================================================================
  // Phase C: Vercel
  // ================================================================

  doVercelIntro() {
    const signupUrl = 'https://vercel.com/signup';
    this.ui.addMessage('agent', `Last connection: Vercel. This hosts your website for free — global CDN, SSL, the works.

The easiest way: sign up with your GitHub account (one click).`);

    this.ui.addButtons([
      { label: 'I have Vercel', action: 'has-vercel' },
      { label: 'Sign up with GitHub', action: 'no-vercel', url: signupUrl },
    ]);

    this.ui.onAction = async (action) => {
      if (action === 'has-vercel' || action === 'no-vercel') {
        if (action === 'no-vercel') {
          this.ui.addMessage('agent', `Head to <a href="${signupUrl}" target="_blank" rel="noopener">vercel.com/signup</a> and click "Continue with GitHub". Done in 30 seconds.`);
        }
        await this.enter(STATES.VERCEL_TOKEN);
      }
    };
  }

  doVercelToken() {
    const tokenUrl = 'https://vercel.com/account/tokens';

    this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Create a Vercel token</div>
<ol class="chat-steps">
<li>Go to <a href="${tokenUrl}" target="_blank" rel="noopener">vercel.com/account/tokens</a></li>
<li>Click <strong>"Create"</strong></li>
<li>Name it <strong>"BuildMySite"</strong>, scope: Full Account</li>
<li>Copy the token and paste it below</li>
</ol>
</div>`, true);

    this.ui.setInputVisible(true, 'Paste your Vercel token here...');
    this.state = STATES.VERCEL_TOKEN;
  }

  async doVercelValidate(token) {
    if (!token || !token.trim()) return;
    token = token.trim();

    this.ui.setInputVisible(false);
    this.ui.addMessage('agent', 'Checking your Vercel token...', true);

    const result = await validateVercelToken(token);
    if (!result.valid) {
      this.ui.addMessage('agent', `That token didn't work: ${result.error || 'invalid'}. Try creating a new one.`);
      this.ui.setInputVisible(true, 'Paste your Vercel token here...');
      this.state = STATES.VERCEL_TOKEN;
      return;
    }

    this.vercelToken = token;
    this.vercelUsername = result.username || result.name;
    this._save();

    this.ui.addMessage('agent', `Vercel connected as <strong>${this.vercelUsername}</strong>. Both connections are set up!`);
    this.ui.updateProgress(2);

    await this.enter(STATES.BIZ_NAME);
  }

  // ================================================================
  // Phase D: Business Discovery
  // ================================================================

  doBizName() {
    this.ui.addMessage('agent', `Now the fun part. Tell me about your business — what's it called, and where is it? Something like "Murphy's Bakery, Cork" or "Joe's Plumbing, Dublin 12".`);
    this.ui.setInputVisible(true, "e.g. Murphy's Bakery, Cork");
    this.state = STATES.BIZ_NAME;
  }

  async doBizDiscover(input) {
    if (!input || !input.trim()) return;
    input = input.trim();

    // Parse business name and optional location
    const parts = input.split(',').map(s => s.trim());
    this.businessName = parts[0];
    this.businessLocation = parts.slice(1).join(', ') || null;

    this.ui.setInputVisible(false);
    this.ui.addMessage('agent', `Searching for <strong>${this.businessName}</strong>${this.businessLocation ? ` in ${this.businessLocation}` : ''}...`, true);

    try {
      this.businessInfo = await discoverBusiness(
        this.businessName,
        this.businessLocation
      );
    } catch (err) {
      console.error('Discovery failed:', err);
      this.businessInfo = { name: this.businessName, found: false, _error: err.message };
    }

    if (this.businessInfo.found === false) {
      this.businessInfo = this.businessInfo || {};
      this.businessInfo.name = this.businessName;
      const errDetail = this.businessInfo._error ? ` <span style="font-size:0.8rem;color:var(--text-light)">(${this.businessInfo._error})</span>` : '';
      this.ui.addMessage('agent', `I couldn't find details online for "${this.businessName}".${errDetail} You can try again with more detail (e.g. add the town or what you do), or continue and fill in details manually.`);
      this.ui.addButtons([
        { label: 'Try again', action: 'retry-discover' },
        { label: 'Continue without', action: 'skip-discover' },
      ]);
      this.ui.onAction = async (action) => {
        if (action === 'retry-discover') {
          this.ui.addMessage('agent', 'Tell me the business name again — try adding the location or a short description, like "Red Books Wexford, independent bookshop".');
          this.ui.setInputVisible(true, 'Business name and details...');
          this.state = STATES.BIZ_NAME;
        } else {
          // Generate repo slug from extracted name (not raw input)
          const slugName = (this.businessInfo && this.businessInfo.name) || this.businessName || 'my-website';
          this.repoName = slugName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50).replace(/-$/, '') || 'my-website';
          this._save();
          await this.enter(STATES.BIZ_REVIEW);
        }
      };
      return;
    }

    // Generate repo slug from extracted name (not raw input)
    const slugName = (this.businessInfo && this.businessInfo.name) || this.businessName || 'my-website';
    this.repoName = slugName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50).replace(/-$/, '') || 'my-website';
    this._save();

    await this.enter(STATES.BIZ_REVIEW);
  }

  doBizReview() {
    const info = this.businessInfo;
    const fields = [];
    if (info.name)        fields.push(['Name', info.name]);
    if (info.type)        fields.push(['Type', info.type]);
    if (info.description) fields.push(['Description', info.description]);
    if (info.address)     fields.push(['Address', info.address]);
    if (info.phone)       fields.push(['Phone', info.phone]);
    if (info.email)       fields.push(['Email', info.email]);
    if (info.hours)       fields.push(['Hours', info.hours]);
    if (info.tagline)     fields.push(['Tagline', info.tagline]);
    if (info.services && info.services.length) {
      const svc = Array.isArray(info.services) ? info.services.join(', ') : info.services;
      fields.push(['Services', svc]);
    }

    let html = '<div class="chat-card"><div class="chat-card__title">Here\'s what I found</div>';
    if (fields.length === 0 || (fields.length === 1 && fields[0][0] === 'Name')) {
      html += '<p>I\'ll need you to fill in the details. The AI will use whatever you provide to write your website.</p>';
    }
    for (const [label, value] of fields) {
      html += `<div class="chat-card__row"><span class="chat-card__label">${label}</span><span class="chat-card__value">${value}</span></div>`;
    }
    html += `<div class="chat-card__row"><span class="chat-card__label">URL</span><span class="chat-card__value">${this.repoName}.vercel.app</span></div>`;
    html += '</div>';

    this.ui.addMessage('agent', html, true);
    this.ui.addMessage('agent', 'Does this look right? I can build your site with this, or you can tell me what to change.');

    this.ui.updateProgress(3);

    this.ui.addButtons([
      { label: 'Looks good — build it!', action: 'confirm-info' },
      { label: 'Let me edit this', action: 'edit-info' },
    ]);

    this.ui.onAction = async (action) => {
      await this.handleAction(action);
    };
  }

  doEditForm() {
    const info = this.businessInfo || {};
    const fields = [
      { key: 'name',        label: 'Name',        value: info.name || '' },
      { key: 'type',        label: 'Type',        value: info.type || '' },
      { key: 'description', label: 'Description', value: info.description || '', textarea: true },
      { key: 'address',     label: 'Address',     value: info.address || '' },
      { key: 'phone',       label: 'Phone',       value: info.phone || '' },
      { key: 'email',       label: 'Email',       value: info.email || '' },
      { key: 'hours',       label: 'Hours',       value: info.hours || '' },
      { key: 'tagline',     label: 'Tagline',     value: info.tagline || '' },
      { key: 'services',    label: 'Services',    value: Array.isArray(info.services) ? info.services.join(', ') : (info.services || '') },
    ];

    let html = '<div class="chat-card"><div class="chat-card__title">Edit your business info</div>';
    html += '<div class="edit-form" id="biz-edit-form">';
    for (const f of fields) {
      if (f.textarea) {
        html += `<div class="edit-field"><label>${f.label}</label><textarea data-key="${f.key}" rows="3">${f.value}</textarea></div>`;
      } else {
        html += `<div class="edit-field"><label>${f.label}</label><input type="text" data-key="${f.key}" value="${f.value.replace(/"/g, '&quot;')}"></div>`;
      }
    }
    html += '</div></div>';

    this.ui.addMessage('agent', html, true);

    this.ui.addButtons([
      { label: 'Save changes', action: 'save-edits' },
    ]);

    this.ui.onAction = async (action) => {
      await this.handleAction(action);
    };
  }

  doSaveEdits() {
    const form = document.getElementById('biz-edit-form');
    if (form) {
      const inputs = form.querySelectorAll('input[data-key], textarea[data-key]');
      inputs.forEach(el => {
        const key = el.dataset.key;
        let val = el.value.trim();
        if (key === 'services') {
          val = val ? val.split(',').map(s => s.trim()).filter(Boolean) : [];
        }
        this.businessInfo[key] = val;
      });
    }
    // Regenerate repo name from the (possibly edited) business name
    const name = this.businessInfo.name || this.businessName || 'my-website';
    this.repoName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50).replace(/-$/, '') || 'my-website';
    this._save();
    this.ui.addMessage('agent', 'Updated! Here\'s the revised info:');
    return this.doBizReview();
  }

  // ================================================================
  // Phase E: Page Selection
  // ================================================================

  doPageSelect() {
    const bizType = (this.businessInfo && this.businessInfo.type || '').toLowerCase();

    // Smart defaults based on business type
    const isFood = /restaurant|cafe|bakery|bistro|pub|bar|coffee|pizza|takeaway|diner|kitchen|food|catering/i.test(bizType);
    const isVisual = /restaurant|venue|photographer|photography|salon|beauty|florist|architect|interior|gallery|hotel|b&b|guesthouse/i.test(bizType);

    const pages = [
      { id: 'home',         label: 'Home',          locked: true,  checked: true },
      { id: 'about',        label: 'About',         locked: false, checked: true },
      { id: 'services',     label: 'Services',      locked: false, checked: true },
      { id: 'contact',      label: 'Contact',       locked: true,  checked: true },
      { id: 'gallery',      label: 'Gallery',       locked: false, checked: isVisual },
      { id: 'menu',         label: 'Menu / Pricing', locked: false, checked: isFood },
      { id: 'testimonials', label: 'Testimonials',  locked: false, checked: false },
      { id: 'faq',          label: 'FAQ',           locked: false, checked: false },
    ];

    let html = '<div class="chat-card"><div class="chat-card__title">Choose your pages</div>';
    html += '<p style="font-size:0.88rem;color:var(--text-light);margin-bottom:12px">Select which pages to include on your site. Home and Contact are always included.</p>';
    html += '<div class="page-checklist" id="page-checklist">';
    for (const p of pages) {
      const checked = p.checked ? 'checked' : '';
      const disabled = p.locked ? 'disabled' : '';
      html += `<label class="page-check">
        <input type="checkbox" value="${p.id}" ${checked} ${disabled}>
        <span class="page-check__label">${p.label}</span>
      </label>`;
    }
    html += '</div></div>';

    this.ui.addMessage('agent', html, true);

    this.ui.addButtons([
      { label: 'Confirm pages', action: 'confirm-pages' },
    ]);

    this.ui.onAction = async (action) => {
      // Read checked pages from the DOM
      const checkboxes = document.querySelectorAll('#page-checklist input[type="checkbox"]');
      const selected = [];
      checkboxes.forEach(cb => { if (cb.checked) selected.push(cb.value); });
      this.selectedPages = selected;
      this._save();
      this.ui.updateProgress(4);
      await this.handleAction(action);
    };
  }

  // ================================================================
  // Phase F: Build
  // ================================================================

  doBuildConfirm() {
    const hasImageGen = true; // AI images always available — EON provides the key
    this.ui.addMessage('agent', `Ready to build <strong>${this.businessInfo.name || this.businessName}</strong>'s website. Here's what I'll do:

1. Create a GitHub repo: <code>${this.githubLogin}/${this.repoName}</code>
2. Push the website engine (HTML, CSS, JS, API)
3. Create a Vercel project linked to the repo
4. Set up all environment variables
5. Wait for deployment
6. Tell the AI to write your personalised site content

This takes 2-5 minutes. Ready?`);

    if (hasImageGen) {
      this.ui.addButtons([
        { label: 'Build with AI images', action: 'confirm-build-images' },
        { label: 'Build without images', action: 'confirm-build' },
      ]);
    } else {
      this.ui.addButtons([
        { label: 'Build it!', action: 'confirm-build' },
      ]);
    }

    this.ui.onAction = async (action) => {
      if (action === 'confirm-build-images') {
        this._generateImages = true;
        return this.enter(STATES.BUILD_RUNNING);
      }
      this._generateImages = false;
      await this.handleAction(action);
    };
  }

  async doBuildRunning() {
    this.ui.setInputVisible(false);
    const steps = [
      { id: 'github_repo',    label: 'Create GitHub repository' },
      { id: 'push_files',     label: 'Push website files' },
    ];
    if (this._generateImages) {
      steps.push({ id: 'gen_images', label: 'Generate logo & hero image' });
    }
    steps.push(
      { id: 'vercel_project', label: 'Create Vercel project' },
      { id: 'env_vars',       label: 'Configure environment' },
      { id: 'deploy',         label: 'Deploy to Vercel' },
      { id: 'ai_build',       label: 'AI builds your website' },
    );
    this.ui.addProgress(steps);

    try {
      // Step 1: Create GitHub repo
      this.ui.setBuildStep('github_repo', 'running', 'Creating repository...');
      const { repo, url } = await createGitHubRepo(this.githubToken, this.repoName);
      this.repoUrl = url;
      this.ui.setBuildStep('github_repo', 'done', repo);

      await new Promise(r => setTimeout(r, 3000));

      // Step 2: Push site kit
      this.ui.setBuildStep('push_files', 'running', 'Uploading website files...');
      await pushSiteKit(this.githubToken, repo, (done, total, file) => {
        this.ui.setBuildStep('push_files', 'running', `${done}/${total} files`);
      });
      this.ui.setBuildStep('push_files', 'done', 'All files pushed');

      // Step 2b: Generate images (if opted in)
      if (this._generateImages) {
        this.ui.setBuildStep('gen_images', 'running', 'Generating logo...');
        try {
          const info = this.businessInfo || {};
          const name = info.name || 'the business';
          const type = info.type || 'business';
          const location = info.address || '';

          const logoPrompt = `Create a simple, modern, professional logo icon for "${name}", a ${type}. Clean minimal design, flat style, white background, no text, suitable for a website navigation bar. Square format.`;
          const logoBase64 = await generateImage(logoPrompt);
          await pushImageToRepo(this.githubToken, repo, 'images/logo.png', logoBase64, 'Add AI-generated logo');

          this.ui.setBuildStep('gen_images', 'running', 'Generating hero banner...');
          const heroPrompt = `Create a professional, high-quality hero banner photograph for "${name}", a ${type}${location ? ` in ${location}` : ''}. Wide landscape composition, warm and inviting, suitable as a website hero section background image. No text overlay.`;
          const heroBase64 = await generateImage(heroPrompt);
          await pushImageToRepo(this.githubToken, repo, 'images/hero.png', heroBase64, 'Add AI-generated hero banner');

          // Set URLs in businessInfo so the AI build naturally uses them
          this.businessInfo.logo_url = '/images/logo.png';
          this.businessInfo.hero_url = '/images/hero.png';
          this.ui.setBuildStep('gen_images', 'done', 'Logo & hero generated');

          // Show image previews in the chat
          this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Your AI-generated images</div>
<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap">
  <div style="text-align:center">
    <img src="data:image/png;base64,${logoBase64}" alt="Generated logo" style="width:80px;height:80px;border-radius:8px;border:1px solid var(--border)">
    <div style="font-size:0.8rem;color:var(--text-light);margin-top:4px">Logo</div>
  </div>
  <div style="text-align:center;flex:1;min-width:200px">
    <img src="data:image/png;base64,${heroBase64}" alt="Generated hero" style="width:100%;max-width:400px;border-radius:8px;border:1px solid var(--border)">
    <div style="font-size:0.8rem;color:var(--text-light);margin-top:4px">Hero banner</div>
  </div>
</div>
</div>`, true);
        } catch (imgErr) {
          this.ui.setBuildStep('gen_images', 'error', imgErr.message || 'Skipped — you can add images later');
        }
      }

      // Step 3: Create Vercel project
      this.ui.setBuildStep('vercel_project', 'running', 'Creating Vercel project...');
      this.projectSlug = this.repoName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
      const { projectId } = await createVercelProject(this.vercelToken, this.projectSlug, repo);
      this.projectId = projectId;
      this.ui.setBuildStep('vercel_project', 'done', this.projectSlug);

      // Step 4: Set env vars
      this.ui.setBuildStep('env_vars', 'running', 'Setting environment variables...');
      this.adminToken = generateAdminToken();
      // AI key is set via EON proxy (key never leaves server)
      await setupAIEnvVars(this.vercelToken, this.projectId);
      await setVercelEnvVars(this.vercelToken, this.projectId, [
        { key: 'GITHUB_TOKEN',  value: this.githubToken },
        { key: 'GITHUB_REPO',   value: repo },
        { key: 'GITHUB_BRANCH', value: 'main' },
        { key: 'ADMIN_TOKEN',   value: this.adminToken },
        { key: 'CONTACT_EMAIL', value: this.businessInfo.email || '' },
      ]);
      this.ui.setBuildStep('env_vars', 'done', 'Environment configured');

      // Step 5: Trigger and wait for deployment
      this.ui.setBuildStep('deploy', 'running', 'Triggering Vercel deployment...');
      this.siteUrl = `https://${this.projectSlug}.vercel.app`;
      try {
        const deployResult = await triggerVercelDeploy(this.vercelToken, this.projectSlug, repo);
        this.ui.setBuildStep('deploy', 'running', 'Deployment triggered, waiting for it to go live...');

        // Poll for deployment readiness (up to 3 minutes)
        let deployed = false;
        for (let i = 0; i < 36; i++) {
          await new Promise(r => setTimeout(r, 5000));
          try {
            const r = await fetch(this.siteUrl, { method: 'HEAD' });
            if (r.ok || r.status === 404) {
              // 404 is fine — means Vercel is serving the project, just no index yet
              deployed = true;
              break;
            }
          } catch {}
          this.ui.setBuildStep('deploy', 'running', `Waiting for deployment... (${(i + 1) * 5}s)`);
        }
        this.ui.setBuildStep('deploy', deployed ? 'done' : 'error',
          deployed ? `Live at ${this.siteUrl}` : 'Deployment may still be in progress');
      } catch (deployErr) {
        // Deployment trigger failed — fall back to waiting for auto-deploy
        this.ui.setBuildStep('deploy', 'running', 'Waiting for auto-deployment...');
        let deployed = false;
        for (let i = 0; i < 36; i++) {
          await new Promise(r => setTimeout(r, 5000));
          try {
            const r = await fetch(this.siteUrl, { method: 'HEAD' });
            if (r.ok || r.status === 404) { deployed = true; break; }
          } catch {}
          this.ui.setBuildStep('deploy', 'running', `Waiting... (${(i + 1) * 5}s)`);
        }
        this.ui.setBuildStep('deploy', deployed ? 'done' : 'error',
          deployed ? `Live at ${this.siteUrl}` : 'Deployment may still be in progress');
      }

      // Give Vercel a moment to fully propagate before hitting the API.
      // If we generated images, the rate limit needs a longer cooldown —
      // the image calls + deploy time may not add up to a full 60s window.
      if (this._generateImages) {
        this.ui.setBuildStep('ai_build', 'running', 'Waiting for rate limit to reset...');
        await new Promise(r => setTimeout(r, 60000));
      } else {
        await new Promise(r => setTimeout(r, 5000));
      }

      // Step 6: AI builds the site (stepped — one page at a time to stay under 60s)
      this.ui.setBuildStep('ai_build', 'running', 'AI is writing your website...');
      try {
        await triggerSteppedBuild(this.siteUrl, this.adminToken, this.businessInfo, (step, total, label) => {
          if (step < total) {
            this.ui.setBuildStep('ai_build', 'running', `${label} (${step + 1}/${total})...`);
          } else {
            this.ui.setBuildStep('ai_build', 'done', 'Website built!');
          }
        }, this.selectedPages);
      } catch (buildErr) {
        this.ui.setBuildStep('ai_build', 'error', buildErr.message || 'Build can be retried from admin panel');
      }

      await this.enter(STATES.BUILD_COMPLETE);

    } catch (err) {
      this.ui.addMessage('agent', `Something went wrong: <strong>${err.message}</strong>`);
      this.ui.addButtons([
        { label: 'Retry build', action: 'retry-build' },
        { label: 'Start fresh', action: 'start-fresh' },
      ]);
      this.ui.onAction = async (action) => {
        if (action === 'retry-build') {
          await this.enter(STATES.BUILD_CONFIRM);
        } else {
          clearState();
          location.reload();
        }
      };
    }
  }

  async doBuildComplete() {
    clearState();
    this.ui.updateProgress(5);

    this.ui.addMessage('agent', `<div class="chat-card chat-card--success">
<div class="chat-card__title">Your website is live!</div>
<div class="chat-card__row">
  <span class="chat-card__label">Website</span>
  <span class="chat-card__value"><a href="${this.siteUrl}" target="_blank" rel="noopener">${this.siteUrl}</a></span>
</div>
<div class="chat-card__row">
  <span class="chat-card__label">Admin</span>
  <span class="chat-card__value"><a href="${this.siteUrl}/admin.html" target="_blank" rel="noopener">${this.siteUrl}/admin.html</a></span>
</div>
<div class="chat-card__row">
  <span class="chat-card__label">Code</span>
  <span class="chat-card__value"><a href="${this.repoUrl}" target="_blank" rel="noopener">${this.repoUrl}</a></span>
</div>
<div class="chat-card__row">
  <span class="chat-card__label">Admin Token</span>
  <span class="chat-card__value"><code class="chat-token">${this.adminToken}</code> <button class="copy-btn" onclick="navigator.clipboard.writeText('${this.adminToken}');this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)" title="Copy token">Copy</button></span>
</div>
<p class="chat-hint" style="margin-top:12px">Save your admin token — you'll need it to log into the admin panel and make changes.</p>
</div>`, true);

    // Next-steps onboarding card
    this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">What's next?</div>
<ol class="chat-steps">
<li><strong>Save your admin token</strong> (above) — you'll need it every time you sign in</li>
<li><strong>Go to your admin panel</strong> — this is where you make changes to your site</li>
<li><strong>Sign in with your admin token</strong></li>
<li><strong>Tell the AI what you'd like to change</strong> — new content, colours, images, pages</li>
</ol>
</div>`, true);

    // If images were already generated during build, skip to domain
    if (this._generateImages) {
      this.ui.addButtons([
        { label: 'Open Admin Panel', action: 'open-admin', url: `${this.siteUrl}/admin.html` },
        { label: 'Add a custom domain', action: 'add-domain' },
        { label: "I'm done!", action: 'skip-domain' },
      ]);
      this.ui.onAction = async (action) => {
        if (action === 'add-domain') return this.enter(STATES.DOMAIN_PROMPT);
        if (action === 'skip-domain') return this.handleAction(action);
      };
    } else {
      this.ui.addButtons([
        { label: 'Open Admin Panel', action: 'open-admin', url: `${this.siteUrl}/admin.html` },
      ]);
      await this.enter(STATES.IMAGE_UPLOAD);
    }
  }

  // ================================================================
  // Phase G: Image Upload (optional)
  // ================================================================

  doImageUpload() {
    this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Add your images (optional)</div>
<p style="font-size:0.88rem;color:var(--text-light);margin-bottom:12px">Upload a logo and hero image to personalise your site. You can skip this and add images later from the admin panel.</p>
<div class="image-upload-group" id="image-upload-group">
  <div class="image-upload-field">
    <label class="image-upload-label">Logo</label>
    <input type="file" id="upload-logo" accept="image/*" class="image-upload-input">
    <div class="image-upload-hint">Square or horizontal, PNG or SVG preferred</div>
  </div>
  <div class="image-upload-field">
    <label class="image-upload-label">Hero Image</label>
    <input type="file" id="upload-hero" accept="image/*" class="image-upload-input">
    <div class="image-upload-hint">Wide landscape image, at least 1200px wide</div>
  </div>
</div>
<div id="upload-status" style="margin-top:8px"></div>
</div>`, true);

    const buttons = [];
    buttons.push({ label: 'Generate with AI', action: 'generate-images' });
    buttons.push({ label: 'Upload images', action: 'upload-images' });
    buttons.push({ label: 'Skip for now', action: 'skip-images' });
    this.ui.addButtons(buttons);

    this.ui.onAction = async (action) => {
      await this.handleAction(action);
    };
  }

  async doImageUploadProcess() {
    const logoInput = document.getElementById('upload-logo');
    const heroInput = document.getElementById('upload-hero');
    const statusEl = document.getElementById('upload-status');

    const logoFile = logoInput && logoInput.files[0];
    const heroFile = heroInput && heroInput.files[0];

    if (!logoFile && !heroFile) {
      this.ui.addMessage('agent', "No files selected. You can add images later from the admin panel.");
      return this.enter(STATES.DOMAIN_PROMPT);
    }

    if (statusEl) statusEl.innerHTML = '<span style="color:var(--gold)">Uploading...</span>';

    try {
      const uploadFile = async (file, type) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
        const r = await fetch(`${this.siteUrl}/api/upload`, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${this.adminToken}` },
          body: formData
        });
        if (!r.ok) throw new Error(`Upload failed: ${r.status}`);
        return r.json();
      };

      const results = [];
      if (logoFile) {
        results.push(await uploadFile(logoFile, 'logo'));
      }
      if (heroFile) {
        results.push(await uploadFile(heroFile, 'hero'));
      }

      if (statusEl) statusEl.innerHTML = '<span style="color:#2E7D32">Uploaded! Applying to your site...</span>';

      // Tell the agent to apply the images
      const imageUrls = results.map(r => `${r.type}: ${r.url}`).join('\n');
      try {
        const applyMsg = `Images have been uploaded. Apply them to the site:\n${imageUrls}\n\nFor the logo: update the nav__brand in index.html (and all other pages) to include an <img> tag before the text.\nFor the hero: add a background-image style to the .hero section in css/style.css in the AI-GENERATED section.\nKeep all CSS classes and structure intact.`;
        await fetch(`${this.siteUrl}/api/agent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.adminToken}`
          },
          body: JSON.stringify({ mode: 'modify', message: applyMsg, businessInfo: this.businessInfo })
        });
      } catch {}

      this.ui.addMessage('agent', 'Images uploaded and applied to your site!');
    } catch (err) {
      this.ui.addMessage('agent', `Image upload ran into an issue: ${err.message}. No worries — you can add images later from the admin panel.`);
    }

    await this.enter(STATES.DOMAIN_PROMPT);
  }

  async doGenerateImages() {
    const info = this.businessInfo || {};
    const name = info.name || 'the business';
    const type = info.type || 'business';
    const location = info.address || '';

    this.ui.addMessage('agent', 'Generating your logo...', true);

    try {
      const logoPrompt = `Create a simple, modern, professional logo icon for "${name}", a ${type}. Clean minimal design, flat style, white background, no text, suitable for a website navigation bar. Square format.`;
      const logoBase64 = await generateImage(logoPrompt);

      this.ui.addMessage('agent', 'Logo done. Generating hero banner...', true);

      const heroPrompt = `Create a professional, high-quality hero banner photograph for "${name}", a ${type}${location ? ` in ${location}` : ''}. Wide landscape composition, warm and inviting, suitable as a website hero section background image. No text overlay.`;
      const heroBase64 = await generateImage(heroPrompt);

      this.ui.addMessage('agent', 'Images generated. Pushing to your site...', true);

      // Push images to GitHub repo
      const repo = `${this.githubLogin}/${this.repoName}`;
      await pushImageToRepo(this.githubToken, repo, 'images/logo.png', logoBase64, 'Add AI-generated logo');
      await pushImageToRepo(this.githubToken, repo, 'images/hero.png', heroBase64, 'Add AI-generated hero banner');

      // Tell the agent to apply the images
      this.ui.addMessage('agent', 'Applying images to your site...', true);
      try {
        const applyMsg = `Images have been added to the repo. Apply them to the site:
- Logo: /images/logo.png
- Hero: /images/hero.png

For the logo: update the nav__brand in index.html (and all other pages) to include an <img src="/images/logo.png" alt="${name}" style="height:36px;margin-right:8px;vertical-align:middle"> before the text.
For the hero: add a background-image style to the .hero section in css/style.css in the AI-GENERATED section: background-image: url('/images/hero.png'); background-size: cover; background-position: center;
Keep all CSS classes and structure intact.`;
        await fetch(`${this.siteUrl}/api/agent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.adminToken}`
          },
          body: JSON.stringify({ mode: 'modify', message: applyMsg, businessInfo: this.businessInfo })
        });
      } catch {}

      this.ui.addMessage('agent', 'Images generated and applied to your site!');
    } catch (err) {
      this.ui.addMessage('agent', `Image generation ran into an issue: ${err.message}. No worries — you can add images later from the admin panel.`);
    }

    await this.enter(STATES.DOMAIN_PROMPT);
  }

  // ================================================================
  // Phase H: Domain (optional)
  // ================================================================

  doDomainPrompt() {
    this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Custom domain</div>
<p>Already have a domain? Type it below.</p>
<p>Need one? We recommend <a href="https://www.blacknight.com" target="_blank" rel="noopener"><strong>Blacknight</strong></a> for .ie or <a href="https://www.namecheap.com" target="_blank" rel="noopener"><strong>Namecheap</strong></a> for .com (around EUR 10/year).</p>
</div>`, true);

    this.ui.setInputVisible(true, 'e.g. mybusiness.ie');
    this.state = STATES.DOMAIN_PROMPT;

    this.ui.addButtons([
      { label: "Skip — I'll use .vercel.app", action: 'skip-domain' },
    ]);

    this.ui.onAction = async (action) => {
      await this.handleAction(action);
    };
  }

  async handleDomain(input) {
    if (!input || !input.trim()) return;
    const domain = input.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/+$/, '');

    this.ui.setInputVisible(false);
    this.ui.addMessage('agent', `Connecting <strong>${domain}</strong> to your Vercel project...`, true);

    try {
      await addCustomDomain(this.vercelToken, this.projectId, domain);

      this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Domain connected! Now update your DNS.</div>
<p>Go to your domain registrar's DNS settings and add these records:</p>
<table class="chat-dns-table">
<tr><th>Type</th><th>Name</th><th>Value</th></tr>
<tr><td>A</td><td>@</td><td><code>76.76.21.21</code></td></tr>
<tr><td>CNAME</td><td>www</td><td><code>cname.vercel-dns.com</code></td></tr>
</table>
<p class="chat-hint">DNS takes 5-30 minutes to propagate (sometimes up to 48 hours). Once it does, your site will be live at <strong>${domain}</strong> with free SSL.</p>
</div>`, true);

      // Registrar-specific instructions
      this.ui.addMessage('agent', 'Where did you buy your domain? I\'ll show you exactly where to add the DNS records.');

      this.ui.addButtons([
        { label: 'Namecheap', action: 'dns-namecheap' },
        { label: 'GoDaddy', action: 'dns-godaddy' },
        { label: 'Cloudflare', action: 'dns-cloudflare' },
        { label: 'Blacknight', action: 'dns-blacknight' },
      ]);

      this.ui.onAction = async (action) => {
        this._showDnsInstructions(action);
      };

    } catch (err) {
      this.ui.addMessage('agent', `Couldn't add the domain: ${err.message}. You can add it manually from <a href="https://vercel.com/dashboard" target="_blank" rel="noopener">Vercel's dashboard</a>.`);
    }
  }

  _showDnsInstructions(registrar) {
    const instructions = {
      'dns-namecheap': `<div class="chat-card">
<div class="chat-card__title">Namecheap DNS setup</div>
<ol class="chat-steps">
<li>Log in to <a href="https://www.namecheap.com" target="_blank" rel="noopener">namecheap.com</a></li>
<li>Go to <strong>Domain List</strong> and click <strong>Manage</strong> next to your domain</li>
<li>Click the <strong>Advanced DNS</strong> tab</li>
<li>Delete any existing A records or CNAME records for @ and www</li>
<li>Add a new <strong>A Record</strong>: Host = <code>@</code>, Value = <code>76.76.21.21</code></li>
<li>Add a new <strong>CNAME Record</strong>: Host = <code>www</code>, Value = <code>cname.vercel-dns.com</code></li>
<li>Save changes</li>
</ol>
</div>`,
      'dns-godaddy': `<div class="chat-card">
<div class="chat-card__title">GoDaddy DNS setup</div>
<ol class="chat-steps">
<li>Log in to <a href="https://www.godaddy.com" target="_blank" rel="noopener">godaddy.com</a></li>
<li>Go to <strong>My Products</strong> and find your domain</li>
<li>Click <strong>DNS</strong> (or Manage DNS)</li>
<li>Edit the <strong>A record</strong> for @ — change the value to <code>76.76.21.21</code></li>
<li>Edit or add a <strong>CNAME record</strong> for www — set the value to <code>cname.vercel-dns.com</code></li>
<li>Save</li>
</ol>
</div>`,
      'dns-cloudflare': `<div class="chat-card">
<div class="chat-card__title">Cloudflare DNS setup</div>
<ol class="chat-steps">
<li>Log in to <a href="https://dash.cloudflare.com" target="_blank" rel="noopener">dash.cloudflare.com</a></li>
<li>Select your domain</li>
<li>Go to <strong>DNS</strong> in the sidebar</li>
<li>Add an <strong>A record</strong>: Name = <code>@</code>, IPv4 = <code>76.76.21.21</code>, Proxy = <strong>DNS only</strong> (grey cloud)</li>
<li>Add a <strong>CNAME record</strong>: Name = <code>www</code>, Target = <code>cname.vercel-dns.com</code>, Proxy = <strong>DNS only</strong> (grey cloud)</li>
<li>Important: set both records to <strong>DNS only</strong> (not Proxied) so Vercel SSL works</li>
</ol>
</div>`,
      'dns-blacknight': `<div class="chat-card">
<div class="chat-card__title">Blacknight DNS setup</div>
<ol class="chat-steps">
<li>Log in to <a href="https://cp.blacknight.com" target="_blank" rel="noopener">cp.blacknight.com</a></li>
<li>Go to <strong>DNS</strong> &gt; <strong>Zone Editor</strong></li>
<li>Select your domain</li>
<li>Add an <strong>A record</strong>: Name = <code>@</code>, Value = <code>76.76.21.21</code></li>
<li>Add a <strong>CNAME record</strong>: Name = <code>www</code>, Value = <code>cname.vercel-dns.com</code></li>
<li>Save changes</li>
</ol>
</div>`,
    };

    const html = instructions[registrar] || `<div class="chat-card">
<div class="chat-card__title">Generic DNS setup</div>
<ol class="chat-steps">
<li>Log in to your domain registrar</li>
<li>Find the DNS settings for your domain</li>
<li>Add an <strong>A record</strong>: Name = <code>@</code>, Value = <code>76.76.21.21</code></li>
<li>Add a <strong>CNAME record</strong>: Name = <code>www</code>, Value = <code>cname.vercel-dns.com</code></li>
<li>Save changes</li>
</ol>
</div>`;

    this.ui.addMessage('agent', html, true);
    this.ui.addMessage('agent', 'That\'s it! Your site will be live on your domain once DNS propagates (usually 5-30 minutes). Enjoy your new website!');
  }
}
