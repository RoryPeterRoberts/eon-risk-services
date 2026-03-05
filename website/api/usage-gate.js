// Usage Gate — metered access for BuildMySite AI edits
// POST { githubRepo, action: 'check' | 'increment' }
// Returns: { allowed, tier, used, limit, remaining, upgradeUrl }
// Returns 402 when free-tier limit exceeded
// Principle: FAIL OPEN — if anything breaks, let the request through

const { supabase } = require('./_lib/supabase');

const FREE_LIMIT = 5;
const UPGRADE_BASE = 'https://www.eonriskservices.com/api/create-checkout';

function currentMonth() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { githubRepo, action } = req.body || {};
  if (!githubRepo || !action) {
    return res.status(400).json({ error: 'githubRepo and action required' });
  }
  if (!['check', 'increment'].includes(action)) {
    return res.status(400).json({ error: 'action must be check or increment' });
  }

  try {
    // Upsert site on first contact
    const { data: site, error: siteErr } = await supabase
      .from('sites')
      .upsert({ github_repo: githubRepo }, { onConflict: 'github_repo', ignoreDuplicates: true })
      .select('id, tier, email')
      .single();

    if (siteErr) {
      // If upsert didn't return data (ignoreDuplicates), fetch explicitly
      const { data: existing, error: fetchErr } = await supabase
        .from('sites')
        .select('id, tier, email')
        .eq('github_repo', githubRepo)
        .single();

      if (fetchErr || !existing) {
        // FAIL OPEN
        console.error('Usage gate: cannot find/create site', siteErr, fetchErr);
        return res.status(200).json({ allowed: true, tier: 'unknown', used: 0, limit: FREE_LIMIT, remaining: FREE_LIMIT });
      }
      return handleGate(res, existing, githubRepo, action);
    }

    return handleGate(res, site, githubRepo, action);
  } catch (err) {
    // FAIL OPEN
    console.error('Usage gate error:', err);
    return res.status(200).json({ allowed: true, tier: 'error', used: 0, limit: FREE_LIMIT, remaining: FREE_LIMIT });
  }
};

async function handleGate(res, site, githubRepo, action) {
  const month = currentMonth();
  const upgradeUrl = `${UPGRADE_BASE}?repo=${encodeURIComponent(githubRepo)}`;

  // Pro and lifetime users get unlimited
  if (site.tier === 'pro' || site.tier === 'lifetime') {
    if (action === 'increment') {
      // Still track usage for analytics, but don't enforce
      await incrementUsage(site.id, month);
    }
    return res.status(200).json({
      allowed: true,
      tier: site.tier,
      used: -1,
      limit: -1,
      remaining: -1,
      upgradeUrl
    });
  }

  // Free tier — check/enforce limit
  const { data: usage } = await supabase
    .from('usage')
    .select('edit_count')
    .eq('site_id', site.id)
    .eq('month', month)
    .single();

  const used = usage?.edit_count || 0;

  if (action === 'check') {
    return res.status(200).json({
      allowed: used < FREE_LIMIT,
      tier: 'free',
      used,
      limit: FREE_LIMIT,
      remaining: Math.max(0, FREE_LIMIT - used),
      upgradeUrl
    });
  }

  // action === 'increment'
  if (used >= FREE_LIMIT) {
    return res.status(402).json({
      allowed: false,
      tier: 'free',
      used,
      limit: FREE_LIMIT,
      remaining: 0,
      upgradeUrl,
      error: `Free plan limit reached (${FREE_LIMIT} edits/month). Upgrade to Pro for unlimited edits.`
    });
  }

  // Increment counter
  const newCount = await incrementUsage(site.id, month);

  return res.status(200).json({
    allowed: true,
    tier: 'free',
    used: newCount,
    limit: FREE_LIMIT,
    remaining: Math.max(0, FREE_LIMIT - newCount),
    upgradeUrl
  });
}

async function incrementUsage(siteId, month) {
  // Atomic increment via Postgres function — handles insert-or-update in one call
  const { data, error } = await supabase.rpc('increment_usage', {
    p_site_id: siteId,
    p_month: month
  });

  if (error) {
    console.error('increment_usage RPC error:', error);
    return 1; // fail open
  }

  return data;
}
