// ============================================================
// BUILDMYSITE — Conversational Setup Agent
// A state machine that drives the chat-based setup flow.
// Runs locally in the user's browser — no server needed.
// Imports: setup.js (API helpers), discover.js (AI discovery),
//          site-kit-bundle.js (files to push to GitHub)
// ============================================================

import {
  validateGitHubToken, createGitHubRepo, pushSiteKit, setSiteKitFiles,
  validateVercelToken, createVercelProject, setVercelEnvVars, triggerVercelDeploy,
  validateAIKey, triggerSteppedBuild, generateAdminToken, addCustomDomain
} from './setup.js';
import { discoverBusiness } from './discover.js';
import { SITE_KIT_FILES } from './site-kit-bundle.js';

// Load site-kit files into the setup module
setSiteKitFiles(SITE_KIT_FILES);

// ---- AI provider detection from key prefix ----
function detectProvider(apiKey) {
  if (!apiKey) return null;
  if (apiKey.startsWith('AIza'))    return { provider: 'google',    model: 'gemini-2.5-flash' };
  if (apiKey.startsWith('sk-ant-')) return { provider: 'anthropic', model: 'claude-sonnet-4-6' };
  if (apiKey.startsWith('sk-'))     return { provider: 'openai',    model: 'gpt-5.2' };
  return null;
}

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
  // Phase A: AI Key
  WELCOME:          'WELCOME',
  AI_KEY_VALIDATE:  'AI_KEY_VALIDATE',

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

  // Phase E: Build
  BUILD_CONFIRM:    'BUILD_CONFIRM',
  BUILD_RUNNING:    'BUILD_RUNNING',
  BUILD_COMPLETE:   'BUILD_COMPLETE',

  // Phase F: Domain (optional)
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
    this.aiKey = null;
    this.aiProvider = null;
    this.aiModel = null;
    this.githubToken = null;
    this.githubLogin = null;
    this.vercelToken = null;
    this.vercelUsername = null;
    this.businessName = null;
    this.businessLocation = null;
    this.businessInfo = null;
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
      aiKey: this.aiKey, aiProvider: this.aiProvider, aiModel: this.aiModel,
      githubToken: this.githubToken, githubLogin: this.githubLogin,
      vercelToken: this.vercelToken, vercelUsername: this.vercelUsername,
      businessInfo: this.businessInfo, repoName: this.repoName,
    });
  }

  // Restore from localStorage
  _restore(saved) {
    this.aiKey = saved.aiKey;
    this.aiProvider = saved.aiProvider;
    this.aiModel = saved.aiModel;
    this.githubToken = saved.githubToken;
    this.githubLogin = saved.githubLogin;
    this.vercelToken = saved.vercelToken;
    this.vercelUsername = saved.vercelUsername;
    this.businessInfo = saved.businessInfo;
    this.repoName = saved.repoName;
  }

  // Figure out which state to resume from based on saved data
  _resumeState(saved) {
    if (saved.businessInfo && saved.vercelToken && saved.githubToken && saved.aiKey) return STATES.BUILD_CONFIRM;
    if (saved.vercelToken && saved.githubToken && saved.aiKey) return STATES.BIZ_NAME;
    if (saved.githubToken && saved.aiKey) return STATES.VERCEL_INTRO;
    if (saved.aiKey) return STATES.GITHUB_INTRO;
    return null;
  }

  // Start the conversation
  async start() {
    const saved = loadState();
    if (saved && saved.aiKey) {
      // We have saved progress — offer to resume
      const resumeState = this._resumeState(saved);
      if (resumeState) {
        const parts = [];
        if (saved.aiProvider) parts.push(`AI: ${saved.aiProvider}`);
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
            if (this.aiKey) step = 1;
            if (this.githubToken) step = 2;
            if (this.vercelToken) step = 3;
            if (this.businessInfo) step = 4;
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
      case STATES.WELCOME:
        return this.enter(STATES.AI_KEY_VALIDATE, value);
      case STATES.AI_KEY_VALIDATE:
        return this.enter(STATES.AI_KEY_VALIDATE, value);
      case STATES.GITHUB_TOKEN:
        return this.enter(STATES.GITHUB_VALIDATE, value);
      case STATES.VERCEL_TOKEN:
        return this.enter(STATES.VERCEL_VALIDATE, value);
      case STATES.BIZ_NAME:
        return this.enter(STATES.BIZ_DISCOVER, value);
      case STATES.BIZ_REVIEW:
        // User confirmed — proceed to build
        return this.enter(STATES.BUILD_CONFIRM);
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
        return this.enter(STATES.BIZ_NAME);
      case 'confirm-info':
        return this.enter(STATES.BUILD_CONFIRM);
      case 'skip-domain':
        this.ui.addMessage('agent', "No problem. You can add a custom domain anytime from Vercel's dashboard. Enjoy your new website!");
        return;
      case 'add-domain':
        return this.enter(STATES.DOMAIN_PROMPT);
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
      case STATES.AI_KEY_VALIDATE:
        return this.doAIKeyValidate(input);
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
      case STATES.BUILD_CONFIRM:
        return this.doBuildConfirm();
      case STATES.BUILD_RUNNING:
        return this.doBuildRunning();
      case STATES.BUILD_COMPLETE:
        return this.doBuildComplete();
      case STATES.DOMAIN_PROMPT:
        return this.doDomainPrompt();
    }
  }

  // ================================================================
  // Phase A: AI Key
  // ================================================================

  doWelcome() {
    this.ui.addMessage('agent', `Hey! I'm your setup assistant. I'll get your website live in about 10 minutes.

First things first — I need an AI API key. This powers the brain that builds your site. The easiest (and free) option is Google Gemini.`);

    this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Get a free Gemini API key</div>
<ol class="chat-steps">
<li>Go to <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a></li>
<li>Sign in with your Google account</li>
<li>Click <strong>"Create API key"</strong></li>
<li>Copy the key and paste it below</li>
</ol>
<p class="chat-hint">Already have an Anthropic or OpenAI key? That works too — just paste it.</p>
</div>`, true);

    this.ui.setInputVisible(true, 'Paste your AI API key here...');
  }

  async doAIKeyValidate(key) {
    if (!key || !key.trim()) return;
    key = key.trim();

    const detected = detectProvider(key);
    if (!detected) {
      this.ui.addMessage('agent', "I don't recognise that key format. It should start with `AIza` (Google), `sk-ant-` (Anthropic), or `sk-` (OpenAI). Try again?");
      return;
    }

    this.ui.setInputVisible(false);
    this.ui.addMessage('agent', `Detected <strong>${detected.provider}</strong> key. Validating...`, true);

    const result = await validateAIKey(key, detected.model);
    if (!result.valid) {
      this.ui.addMessage('agent', `That key didn't work: ${result.error || 'validation failed'}. Double-check it and try again.`);
      this.ui.setInputVisible(true, 'Paste your AI API key here...');
      return;
    }

    this.aiKey = key;
    this.aiProvider = detected.provider;
    this.aiModel = detected.model;
    this._save();

    this.ui.addMessage('agent', `AI key validated. Using <strong>${detected.model}</strong>. Nice one.`);
    this.ui.updateProgress(1);

    await this.enter(STATES.GITHUB_INTRO);
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
          this.ui.addMessage('agent', `No problem — sign up at <a href="${signupUrl}" target="_blank" rel="noopener">github.com/signup</a> (it's free). Come back here when you're done.

Once you have an account, I'll need a personal access token. Let me show you how.`);
        }
        await this.enter(STATES.GITHUB_TOKEN);
      }
    };
  }

  doGitHubToken() {
    const os = this.os;
    const tokenUrl = 'https://github.com/settings/tokens/new?scopes=repo&description=BuildMySite';

    this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Create a GitHub token</div>
<ol class="chat-steps">
<li>Go to <a href="${tokenUrl}" target="_blank" rel="noopener">github.com/settings/tokens</a> — this link pre-fills the settings</li>
<li>Set expiration to <strong>90 days</strong> (or "No expiration")</li>
<li>Click <strong>"Generate token"</strong> at the bottom</li>
<li>Copy the token (starts with <code>ghp_</code>) and paste it below</li>
</ol>
<p class="chat-hint">This token lets me create a repo and push your website files. You can revoke it anytime.</p>
</div>`, true);

    this.ui.setInputVisible(true, 'Paste your GitHub token here (ghp_...)');
    this.state = STATES.GITHUB_TOKEN;
  }

  async doGitHubValidate(token) {
    if (!token || !token.trim()) return;
    token = token.trim();

    this.ui.setInputVisible(false);
    this.ui.addMessage('agent', 'Checking your GitHub token...', true);

    const result = await validateGitHubToken(token);
    if (!result.valid) {
      this.ui.addMessage('agent', `That token didn't work: ${result.error || 'invalid'}. Make sure you copied the full token (starts with <code>ghp_</code>).`);
      this.ui.setInputVisible(true, 'Paste your GitHub token here (ghp_...)');
      this.state = STATES.GITHUB_TOKEN;
      return;
    }

    this.githubToken = token;
    this.githubLogin = result.login;
    this._save();

    this.ui.addMessage('agent', `Connected to GitHub as <strong>@${result.login}</strong>. Your code will live under your account.`);
    this.ui.updateProgress(2);

    await this.enter(STATES.VERCEL_INTRO);
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

    this.ui.addMessage('agent', `Vercel connected as <strong>${this.vercelUsername}</strong>. All three connections are set up!`);
    this.ui.updateProgress(3);

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
        this.businessLocation,
        this.aiKey,
        this.aiModel
      );
    } catch (err) {
      this.businessInfo = { name: this.businessName, found: false };
    }

    if (this.businessInfo.found === false) {
      this.businessInfo = this.businessInfo || {};
      this.businessInfo.name = this.businessName;
      this.ui.addMessage('agent', `I couldn't find details online for "${this.businessName}". You can try again with more detail (e.g. add the town or what you do), or continue and fill in details manually.`);
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
          // Generate repo slug and continue
          this.repoName = this.businessName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'my-website';
          this._save();
          await this.enter(STATES.BIZ_REVIEW);
        }
      };
      return;
    }

    // Generate repo slug
    this.repoName = this.businessName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'my-website';
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

    this.ui.updateProgress(4);

    this.ui.addButtons([
      { label: 'Looks good — build it!', action: 'confirm-info' },
      { label: 'Let me edit this', action: 'edit-info' },
    ]);

    this.ui.onAction = async (action) => {
      await this.handleAction(action);
    };
  }

  // ================================================================
  // Phase E: Build
  // ================================================================

  doBuildConfirm() {
    this.ui.addMessage('agent', `Ready to build <strong>${this.businessInfo.name || this.businessName}</strong>'s website. Here's what I'll do:

1. Create a GitHub repo: <code>${this.githubLogin}/${this.repoName}</code>
2. Push the website engine (HTML, CSS, JS, API)
3. Create a Vercel project linked to the repo
4. Set up all environment variables
5. Wait for deployment
6. Tell the AI to write your personalised site content

This takes 2-5 minutes. Ready?`);

    this.ui.addButtons([
      { label: 'Build it!', action: 'confirm-build' },
    ]);

    this.ui.onAction = async (action) => {
      await this.handleAction(action);
    };
  }

  async doBuildRunning() {
    this.ui.setInputVisible(false);
    this.ui.addProgress([
      { id: 'github_repo',    label: 'Create GitHub repository' },
      { id: 'push_files',     label: 'Push website files' },
      { id: 'vercel_project', label: 'Create Vercel project' },
      { id: 'env_vars',       label: 'Configure environment' },
      { id: 'deploy',         label: 'Deploy to Vercel' },
      { id: 'ai_build',       label: 'AI builds your website' },
    ]);

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

      // Step 3: Create Vercel project
      this.ui.setBuildStep('vercel_project', 'running', 'Creating Vercel project...');
      this.projectSlug = this.repoName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
      const { projectId } = await createVercelProject(this.vercelToken, this.projectSlug, repo);
      this.projectId = projectId;
      this.ui.setBuildStep('vercel_project', 'done', this.projectSlug);

      // Step 4: Set env vars
      this.ui.setBuildStep('env_vars', 'running', 'Setting environment variables...');
      this.adminToken = generateAdminToken();
      await setVercelEnvVars(this.vercelToken, this.projectId, [
        { key: 'AI_API_KEY',    value: this.aiKey },
        { key: 'AI_MODEL',      value: this.aiModel },
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

      // Give Vercel a moment to fully propagate before hitting the API
      await new Promise(r => setTimeout(r, 5000));

      // Step 6: AI builds the site (stepped — one page at a time to stay under 60s)
      this.ui.setBuildStep('ai_build', 'running', 'AI is writing your website...');
      try {
        await triggerSteppedBuild(this.siteUrl, this.adminToken, this.businessInfo, (step, total, label) => {
          if (step < total) {
            this.ui.setBuildStep('ai_build', 'running', `${label} (${step + 1}/${total})...`);
          } else {
            this.ui.setBuildStep('ai_build', 'done', 'Website built!');
          }
        });
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

    this.ui.addMessage('agent', 'Want to connect your own domain (like mybusiness.ie)?');

    this.ui.addButtons([
      { label: 'Yes, add a domain', action: 'add-domain' },
      { label: "No, I'm happy with .vercel.app", action: 'skip-domain' },
    ]);

    this.ui.onAction = async (action) => {
      await this.handleAction(action);
    };
  }

  // ================================================================
  // Phase F: Domain (optional)
  // ================================================================

  doDomainPrompt() {
    this.ui.addMessage('agent', `<div class="chat-card">
<div class="chat-card__title">Connect your domain</div>
<p>Buy a domain from one of these registrars (around EUR 10/year):</p>
<ul class="chat-steps">
<li><a href="https://www.blacknight.com" target="_blank" rel="noopener"><strong>Blacknight</strong></a> — best for .ie domains</li>
<li><a href="https://www.namecheap.com" target="_blank" rel="noopener"><strong>Namecheap</strong></a> — best for .com domains</li>
</ul>
<p>Once you have a domain, type it below (e.g. <code>mybusiness.ie</code>).</p>
</div>`, true);

    this.ui.setInputVisible(true, 'mybusiness.ie');
    this.state = STATES.DOMAIN_PROMPT;
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

    } catch (err) {
      this.ui.addMessage('agent', `Couldn't add the domain: ${err.message}. You can add it manually from <a href="https://vercel.com/dashboard" target="_blank" rel="noopener">Vercel's dashboard</a>.`);
    }
  }
}
