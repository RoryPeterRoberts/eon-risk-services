// ============================================================
// BUILDMYSITE — API-Driven Setup Engine
// Runs client-side in the wizard. Creates the user's GitHub repo,
// Vercel project, pushes the site kit, sets env vars, triggers
// the initial AI build.
// All API calls use the user's own tokens — nothing touches EON.
// ============================================================

// ---- Site Kit file manifest ---------------------------------
// These are the files pushed to the user's new repo.
// Contents are loaded at build time from the site-kit directory.
// The wizard will inline these as a JS object.
// This module expects SITE_KIT_FILES to be set before use.
let SITE_KIT_FILES = null;

export function setSiteKitFiles(files) {
  SITE_KIT_FILES = files;
}

// ---- GitHub API helpers -------------------------------------

async function githubApi(path, token, options = {}) {
  const r = await fetch(`https://api.github.com${path}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`GitHub API ${r.status}: ${text}`);
  }
  return r.json();
}

// ---- GitHub Device Flow ------------------------------------

export async function startGitHubDeviceFlow() {
  const r = await fetch('https://www.eonriskservices.com/api/github-device-code', { method: 'POST' });
  const data = await r.json();
  if (!r.ok || data.error) throw new Error(data.error_description || data.error || 'Failed to start device flow');
  return data; // { device_code, user_code, verification_uri, expires_in, interval }
}

export function pollGitHubToken(deviceCode, interval = 5) {
  return new Promise((resolve, reject) => {
    const poll = async () => {
      try {
        const r = await fetch('https://www.eonriskservices.com/api/github-poll', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ device_code: deviceCode }),
        });
        const data = await r.json();

        if (data.access_token) {
          resolve(data.access_token);
          return;
        }

        if (data.error === 'authorization_pending') {
          setTimeout(poll, interval * 1000);
          return;
        }

        if (data.error === 'slow_down') {
          interval += 5;
          setTimeout(poll, interval * 1000);
          return;
        }

        // expired_token, access_denied, or other error
        reject(new Error(data.error_description || data.error || 'Authorization failed'));
      } catch (err) {
        reject(err);
      }
    };
    poll();
  });
}

export async function validateGitHubToken(token) {
  try {
    const user = await githubApi('/user', token);
    return { valid: true, login: user.login, name: user.name };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

export async function createGitHubRepo(token, repoName) {
  const data = await githubApi('/user/repos', token, {
    method: 'POST',
    body: JSON.stringify({
      name: repoName,
      description: 'My website, built with BuildMySite',
      private: false,
      auto_init: false
    })
  });
  return { owner: data.owner.login, repo: data.full_name, url: data.html_url };
}

export async function pushFileToRepo(token, repo, path, content, message) {
  // Check if file exists (to get SHA for update)
  let sha = null;
  try {
    const existing = await githubApi(`/repos/${repo}/contents/${path}`, token);
    sha = existing.sha;
  } catch {}

  const body = {
    message,
    content: btoa(unescape(encodeURIComponent(content))),
    branch: 'main'
  };
  if (sha) body.sha = sha;

  return githubApi(`/repos/${repo}/contents/${path}`, token, {
    method: 'PUT',
    body: JSON.stringify(body)
  });
}

export async function pushSiteKit(token, repo, onProgress, selectedPages) {
  if (!SITE_KIT_FILES) throw new Error('Site kit files not loaded. Call setSiteKitFiles() first.');

  // Optional page templates that should only be pushed if the user selected them
  const optionalTemplates = {
    'gallery.html': 'gallery',
    'menu.html': 'menu',
    'testimonials.html': 'testimonials',
    'faq.html': 'faq',
  };

  const allFiles = Object.entries(SITE_KIT_FILES);
  // Filter out unselected page templates
  const files = selectedPages
    ? allFiles.filter(([path]) => {
        const pageId = optionalTemplates[path];
        return !pageId || selectedPages.includes(pageId);
      })
    : allFiles;

  let pushed = 0;
  for (const [path, content] of files) {
    await pushFileToRepo(token, repo, path, content, `Add ${path}`);
    pushed++;
    if (onProgress) onProgress(pushed, files.length, path);
  }

  return { pushed, total: files.length };
}

// ---- Vercel API helpers -------------------------------------

async function vercelApi(path, token, options = {}) {
  const r = await fetch(`https://api.vercel.com${path}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Vercel API ${r.status}: ${text}`);
  }
  return r.json();
}

export async function validateVercelToken(token) {
  try {
    const user = await vercelApi('/v2/user', token);
    return { valid: true, username: user.user.username, name: user.user.name };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

export async function createVercelProject(vercelToken, projectName, githubRepo) {
  const data = await vercelApi('/v10/projects', vercelToken, {
    method: 'POST',
    body: JSON.stringify({
      name: projectName,
      framework: null,
      gitRepository: {
        type: 'github',
        repo: githubRepo
      }
    })
  });
  return { projectId: data.id, name: data.name };
}

export async function setVercelEnvVars(vercelToken, projectId, envVars) {
  // envVars: array of { key, value, target: ['production', 'preview'] }
  for (const env of envVars) {
    await vercelApi(`/v10/projects/${projectId}/env`, vercelToken, {
      method: 'POST',
      body: JSON.stringify({
        key: env.key,
        value: env.value,
        type: 'encrypted',
        target: env.target || ['production', 'preview']
      })
    });
  }
  return { set: envVars.length };
}

export async function triggerVercelDeploy(vercelToken, projectName, githubRepo) {
  // Trigger a deployment via the Vercel API when auto-deploy doesn't fire
  // (e.g. when the GitHub App doesn't have access to a newly created repo)
  const data = await vercelApi('/v13/deployments', vercelToken, {
    method: 'POST',
    body: JSON.stringify({
      name: projectName,
      project: projectName,
      gitSource: {
        type: 'github',
        repo: githubRepo.split('/')[1],
        org: githubRepo.split('/')[0],
        ref: 'main'
      },
      target: 'production'
    })
  });
  return { deploymentId: data.id, url: data.url, readyState: data.readyState };
}

// ---- AI Image Generation (via EON proxy) --------------------

export async function generateImage(prompt, aspectRatio) {
  const MAX_RETRIES = 3;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const body = { prompt };
    if (aspectRatio) body.aspectRatio = aspectRatio;
    const r = await fetch('https://www.eonriskservices.com/api/ai-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (r.status === 429 && attempt < MAX_RETRIES) {
      const data = await r.json().catch(() => ({}));
      const delay = (data.retryDelay || 60) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
      continue;
    }
    if (!r.ok) {
      const data = await r.json().catch(() => ({}));
      throw new Error(data.error || `Image generation failed: ${r.status}`);
    }
    const data = await r.json();
    return data.data; // base64 PNG
  }
}

// ---- AI Environment Setup (via EON proxy) -------------------

export async function setupAIEnvVars(vercelToken, projectId) {
  const r = await fetch('https://www.eonriskservices.com/api/ai-env', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ vercelToken, projectId })
  });
  if (!r.ok) {
    const data = await r.json().catch(() => ({}));
    throw new Error(data.error || `AI env setup failed: ${r.status}`);
  }
  return r.json();
}

export async function pushImageToRepo(token, repo, path, base64Data, message) {
  let sha = null;
  try {
    const existing = await githubApi(`/repos/${repo}/contents/${path}`, token);
    sha = existing.sha;
  } catch {}

  const body = {
    message,
    content: base64Data, // already base64-encoded
    branch: 'main'
  };
  if (sha) body.sha = sha;

  return githubApi(`/repos/${repo}/contents/${path}`, token, {
    method: 'PUT',
    body: JSON.stringify(body)
  });
}

// ---- Trigger Initial Build (stepped) ------------------------
// Breaks the build into multiple small requests, each under 60s,
// so it works on Vercel's hobby plan (60s function timeout).

function buildBusinessBlock(info) {
  const parts = [];
  if (info.name)        parts.push(`Business name: ${info.name}`);
  if (info.description) parts.push(`Description: ${info.description}`);
  if (info.type)        parts.push(`Type: ${info.type}`);
  if (info.email)       parts.push(`Email: ${info.email}`);
  if (info.phone)       parts.push(`Phone: ${info.phone}`);
  if (info.address)     parts.push(`Address: ${info.address}`);
  if (info.hours)       parts.push(`Hours: ${info.hours}`);
  if (info.services)    parts.push(`Services: ${Array.isArray(info.services) ? info.services.join(', ') : info.services}`);
  if (info.tagline)     parts.push(`Tagline: ${info.tagline}`);
  if (info.tone)        parts.push(`Brand tone: ${info.tone}`);
  if (info.logo_url)    parts.push(`Logo image: ${info.logo_url}`);
  if (info.hero_url)    parts.push(`Hero/banner image: ${info.hero_url}`);
  return parts.join('\n');
}

async function agentCall(siteUrl, adminToken, message, businessInfo, onRetry) {
  const MAX_RETRIES = 3;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const r = await fetch(`${siteUrl}/api/agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`
      },
      body: JSON.stringify({ mode: 'modify', message, businessInfo })
    });
    if (r.status === 429 && attempt < MAX_RETRIES) {
      const data = await r.json().catch(() => ({}));
      const delay = (data.retryDelay || 60) * 1000;
      if (onRetry) onRetry(attempt + 1, Math.round(delay / 1000));
      await new Promise(resolve => setTimeout(resolve, delay));
      continue;
    }
    if (!r.ok) {
      const data = await r.json().catch(() => ({}));
      const errMsg = data.error || `Agent call failed: ${r.status}`;
      // Detect rate limit errors wrapped by the agent (Gemini 429 returned as 500)
      if (attempt < MAX_RETRIES && /429|rate.?limit|RESOURCE_EXHAUSTED|quota/i.test(errMsg)) {
        const delayMatch = errMsg.match(/retry\s*in\s*(\d+)/i);
        const delay = (delayMatch ? parseInt(delayMatch[1], 10) : 60) * 1000;
        if (onRetry) onRetry(attempt + 1, Math.round(delay / 1000));
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw new Error(errMsg);
    }
    return r.json();
  }
}

// ---- Page prompt registry (keyed by page ID) ----
// Each entry generates an agent prompt for building that page.
// The 'css' entry always runs first; others run per selectedPages.

function getPagePrompts(biz, selectedPages) {
  // Build nav link instructions from selectedPages so AI only links to pages that exist
  const pageLabels = { home: 'Home', about: 'About', services: 'Services', contact: 'Contact', gallery: 'Gallery', menu: 'Menu', testimonials: 'Testimonials', faq: 'FAQ' };
  const navPages = (selectedPages || ['home', 'contact', 'about']).map(id => pageLabels[id] || id);
  const navInstruction = `The nav must include ONLY links to these pages: ${navPages.join(', ')}. Contact should use nav__link--cta class. Do NOT add links to any other pages.`;

  // Image instructions (conditional — only if images were generated)
  const hasLogo = biz.includes('Logo image:');
  const hasHero = biz.includes('Hero/banner image:');
  const logoInstruction = hasLogo
    ? '- Keep the <img src="/images/logo.png"> in the nav__brand element — update only its alt text to match the business name'
    : '- Remove the <img> from nav__brand if present (no logo was generated)';
  const heroInstruction = hasHero
    ? '- Keep the hero--image class and background-image style on the hero section — the hero image is already set'
    : '- Remove hero--image class and background-image style from the hero section (no hero image was generated)';

  // Common rules for all template-based pages (pages that already exist)
  const templateRules = `RULES:
- Keep every CSS class name exactly as-is
- Keep all <svg> icons exactly as-is
- Keep <script src="js/main.js"> and <link rel="stylesheet" href="css/style.css">
${logoInstruction}
- ${navInstruction}
- Update text content: business name, descriptions, service details, footer text
- Update the footer copyright year and business name
- Write the COMPLETE updated file`;

  return {
    css: {
      label: 'Customising design',
      message: `Read css/style.css. At the very bottom there is a section marked "AI-GENERATED STYLES BELOW THIS LINE". Add a new :root block there that overrides --color-primary, --color-accent, --color-highlight with colours that suit this business type. Keep ALL existing CSS above that line exactly as-is. Write the complete file back.\n\nBusiness:\n${biz}`
    },
    home: {
      label: 'Building home page',
      message: `Read the existing index.html. It is a WORKING template — the HTML structure and CSS classes are ALREADY correct.\n\n${templateRules}\n${heroInstruction}\n- You may add or remove <div class="card">...</div> blocks in the services grid to match the business (copy the existing card structure)\n\nBusiness:\n${biz}`
    },
    contact: {
      label: 'Building contact page',
      message: `Read the existing contact.html. It is a WORKING template — the HTML structure, CSS classes, form action, and JavaScript are ALREADY correct.\n\n${templateRules}\n- Keep the form action="/api/contact" and all form JavaScript exactly as-is\n- Update contact details: email, phone, address\n\nBusiness:\n${biz}`
    },
    about: {
      label: 'Building about page',
      message: `Read index.html to see the exact nav structure and CSS classes. Then create about.html that uses the SAME structure.\n\nRULES:\n- Use the exact same <nav class="nav"> block from index.html, but add nav__link--active class to the About link\n- ${navInstruction}\n- Use the same <footer class="footer"> block from index.html\n- Use these CSS classes for content: section, container, text-center, eyebrow, container-narrow, lead\n- Link to css/style.css and js/main.js\n- Write warm, authentic copy about this business — their story, values, and what makes them special\n- Write the COMPLETE file\n\nBusiness:\n${biz}`
    },
    services: {
      label: 'Building services page',
      message: `Read index.html to see the exact nav structure, CSS classes, and card layout. Then create services.html as a standalone page.\n\nRULES:\n- Use the exact same <nav class="nav"> block from index.html, but add nav__link--active class to the Services link\n- ${navInstruction}\n- Use the same <footer class="footer"> block from index.html\n- Use hero--compact class on the hero section\n- Use grid grid-3 with card, card__icon, card__title, card__text for each service\n- Link to css/style.css and js/main.js\n- Write detailed descriptions for each service this business offers\n- Write the COMPLETE file\n\nBusiness:\n${biz}`
    },
    gallery: {
      label: 'Building gallery page',
      message: `Read the existing gallery.html. It is a WORKING template — the HTML structure and CSS classes are ALREADY correct.\n\n${templateRules}\n- You may add or remove gallery-item blocks as appropriate (keep the SVG placeholder in each)\n\nBusiness:\n${biz}`
    },
    menu: {
      label: 'Building menu page',
      message: `Read the existing menu.html. It is a WORKING template — the HTML structure and CSS classes are ALREADY correct.\n\n${templateRules}\n- You may add or remove menu-category and menu-item blocks as appropriate for this business\n- Use realistic prices in EUR for an Irish business\n\nBusiness:\n${biz}`
    },
    testimonials: {
      label: 'Building testimonials page',
      message: `Read the existing testimonials.html. It is a WORKING template — the HTML structure and CSS classes are ALREADY correct.\n\n${templateRules}\n- Write realistic, believable testimonials with Irish names\n- You may add or remove testimonial-card blocks (keep them in a grid-2)\n\nBusiness:\n${biz}`
    },
    faq: {
      label: 'Building FAQ page',
      message: `Read the existing faq.html. It is a WORKING template — the HTML structure and CSS classes are ALREADY correct.\n\n${templateRules}\n- Keep the <details>/<summary> structure exactly as-is\n- Write relevant FAQs for this specific type of business\n- Keep the first <details> element open (has the "open" attribute)\n- You may add or remove faq-item blocks as appropriate\n\nBusiness:\n${biz}`
    },
  };
}

export async function triggerSteppedBuild(siteUrl, adminToken, businessInfo, onStep, selectedPages) {
  const biz = buildBusinessBlock(businessInfo);
  const pageIds = selectedPages || ['home', 'contact', 'about'];
  const prompts = getPagePrompts(biz, pageIds);

  // Build the step list: always CSS first, then selected pages
  const steps = [prompts.css];
  for (const id of pageIds) {
    if (prompts[id]) steps.push(prompts[id]);
  }

  const results = [];
  for (let i = 0; i < steps.length; i++) {
    if (onStep) onStep(i, steps.length, steps[i].label);
    const onRetry = (attempt, delaySec) => {
      if (onStep) onStep(i, steps.length, `Rate limited — waiting ${delaySec}s (retry ${attempt}/3)...`);
    };
    const result = await agentCall(siteUrl, adminToken, steps[i].message, businessInfo, onRetry);
    results.push(result);
    // Brief pause between steps to let Vercel settle
    if (i < steps.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  if (onStep) onStep(steps.length, steps.length, 'Done');
  return results;
}

// Legacy single-call build (for Vercel Pro / longer timeouts)
export async function triggerInitialBuild(siteUrl, adminToken, businessInfo) {
  const r = await fetch(`${siteUrl}/api/agent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminToken}`
    },
    body: JSON.stringify({
      mode: 'build',
      businessInfo
    })
  });

  if (!r.ok) {
    const data = await r.json().catch(() => ({}));
    throw new Error(data.error || `Build failed: ${r.status}`);
  }

  return r.json();
}

// ---- Generate Admin Token -----------------------------------

export function generateAdminToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  const arr = new Uint8Array(32);
  crypto.getRandomValues(arr);
  for (let i = 0; i < 32; i++) {
    token += chars[arr[i] % chars.length];
  }
  return token;
}

// ---- Full Setup Orchestrator --------------------------------

export async function runFullSetup(config, onStep) {
  const {
    githubToken,
    vercelToken,
    aiApiKey,
    aiModel,
    businessInfo,
    repoName
  } = config;

  const report = (step, status, detail) => {
    if (onStep) onStep({ step, status, detail });
  };

  // Step 1: Create GitHub repo
  report('github_repo', 'running', 'Creating GitHub repository...');
  const { repo, url: repoUrl } = await createGitHubRepo(githubToken, repoName);
  report('github_repo', 'done', `Created ${repo}`);

  // Step 2: Push site kit files
  report('push_files', 'running', 'Pushing website files...');
  await pushSiteKit(githubToken, repo, (done, total, file) => {
    report('push_files', 'running', `Pushing ${file} (${done}/${total})`);
  });
  report('push_files', 'done', 'All files pushed');

  // Step 3: Create Vercel project linked to GitHub
  report('vercel_project', 'running', 'Creating Vercel project...');
  const projectSlug = repoName.toLowerCase().replace(/[^a-z0-9-]/g, '-');
  const { projectId } = await createVercelProject(vercelToken, projectSlug, repo);
  report('vercel_project', 'done', `Project "${projectSlug}" created`);

  // Step 4: Generate admin token and set env vars
  report('env_vars', 'running', 'Configuring environment...');
  const adminToken = generateAdminToken();
  await setVercelEnvVars(vercelToken, projectId, [
    { key: 'AI_API_KEY', value: aiApiKey },
    { key: 'AI_MODEL', value: aiModel },
    { key: 'GITHUB_TOKEN', value: githubToken },
    { key: 'GITHUB_REPO', value: repo },
    { key: 'ADMIN_TOKEN', value: adminToken },
    { key: 'CONTACT_EMAIL', value: businessInfo.email || '' },
  ]);
  report('env_vars', 'done', 'Environment configured');

  // Step 5: Wait for Vercel deployment
  report('deploy', 'running', 'Waiting for deployment...');
  const siteUrl = `https://${projectSlug}.vercel.app`;
  // Poll for deployment (Vercel auto-deploys on GitHub push)
  let deployed = false;
  for (let i = 0; i < 30; i++) {
    try {
      const r = await fetch(siteUrl, { method: 'HEAD' });
      if (r.ok || r.status === 404) { deployed = true; break; }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  if (!deployed) throw new Error('Deployment timed out');
  report('deploy', 'done', `Live at ${siteUrl}`);

  // Step 6: Trigger the AI to build the personalised site
  report('ai_build', 'running', 'AI is building your website...');
  const buildResult = await triggerInitialBuild(siteUrl, adminToken, businessInfo);
  report('ai_build', 'done', 'Website built!');

  return {
    siteUrl,
    adminUrl: `${siteUrl}/admin.html`,
    adminToken,
    repoUrl,
    buildResult
  };
}

// ---- Domain Management -----------------------------------------

export async function addCustomDomain(vercelToken, projectId, domain) {
  return vercelApi(`/v10/projects/${projectId}/domains`, vercelToken, {
    method: 'POST',
    body: JSON.stringify({ name: domain })
  });
}
