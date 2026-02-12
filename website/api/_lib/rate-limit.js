// In-memory rate limiter: 5 requests per minute per IP
// Resets naturally as serverless function instances recycle

const hits = new Map();
const WINDOW_MS = 60 * 1000;
const MAX_HITS = 5;

function rateLimit(req) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.headers['x-real-ip']
    || 'unknown';

  const now = Date.now();
  const record = hits.get(ip);

  if (!record || now - record.start > WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    return { allowed: true, ip };
  }

  record.count++;

  if (record.count > MAX_HITS) {
    return { allowed: false, ip };
  }

  return { allowed: true, ip };
}

// Periodic cleanup to prevent memory leaks in long-lived instances
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of hits) {
    if (now - record.start > WINDOW_MS) {
      hits.delete(ip);
    }
  }
}, 5 * 60 * 1000);

module.exports = { rateLimit };
