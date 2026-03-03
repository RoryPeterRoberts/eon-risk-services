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

export async function pushSiteKit(token, repo, onProgress) {
  if (!SITE_KIT_FILES) throw new Error('Site kit files not loaded. Call setSiteKitFiles() first.');

  const files = Object.entries(SITE_KIT_FILES);
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

// ---- AI API Key Validation ----------------------------------

const APPROVED_MODELS = {
  'gemini-2.5-flash':  { provider: 'google' },
  'gemini-3.0-flash':  { provider: 'google' },
  'gemini-3.1-pro':    { provider: 'google' },
  'claude-sonnet-4-6': { provider: 'anthropic' },
  'claude-opus-4-6':   { provider: 'anthropic' },
  'gpt-5.2':           { provider: 'openai' },
};

export async function validateAIKey(apiKey, model) {
  const config = APPROVED_MODELS[model];
  if (!config) return { valid: false, error: `Model "${model}" is not approved` };

  try {
    if (config.provider === 'anthropic') {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          model,
          max_tokens: 10,
          messages: [{ role: 'user', content: 'Say OK' }]
        })
      });
      if (r.status === 401) return { valid: false, error: 'Invalid API key' };
      if (r.status === 404 || r.status === 400) {
        const data = await r.json();
        if (data.error?.message?.includes('model')) return { valid: false, error: `Model "${model}" not available on this key` };
      }
      return { valid: r.ok || r.status === 400, provider: 'anthropic', model };
    }

    if (config.provider === 'openai') {
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          max_tokens: 10,
          messages: [{ role: 'user', content: 'Say OK' }]
        })
      });
      if (r.status === 401) return { valid: false, error: 'Invalid API key' };
      return { valid: r.ok, provider: 'openai', model };
    }

    if (config.provider === 'google') {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          max_tokens: 10,
          messages: [{ role: 'user', content: 'Say OK' }]
        })
      });
      if (r.status === 401 || r.status === 403) return { valid: false, error: 'Invalid API key' };
      return { valid: r.ok, provider: 'google', model };
    }

    return { valid: false, error: 'Unknown provider' };
  } catch (e) {
    return { valid: false, error: e.message };
  }
}

// ---- Trigger Initial Build ----------------------------------

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
