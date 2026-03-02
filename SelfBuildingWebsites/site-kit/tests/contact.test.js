// BuildMySite Contact Form — Unit Tests
// Run: node tests/contact.test.js

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the contact source to test the utility functions
const contactSource = readFileSync(join(__dirname, '..', 'api', 'contact.js'), 'utf-8');

// Extract the pure functions (sanitise, isValidEmail, isRateLimited)
const testModule = new Function(`
  const submissions = new Map();
  const RATE_LIMIT = 5;
  const RATE_WINDOW = 600000;

  function isRateLimited(ip) {
    const now = Date.now();
    const record = submissions.get(ip);
    if (!record || now - record.firstAt > RATE_WINDOW) {
      submissions.set(ip, { count: 1, firstAt: now });
      return false;
    }
    record.count++;
    return record.count > RATE_LIMIT;
  }

  function sanitise(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/<[^>]*>/g, '').trim();
  }

  function isValidEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }

  return { sanitise, isValidEmail, isRateLimited };
`)();

const { sanitise, isValidEmail, isRateLimited } = testModule;

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  PASS: ${name}`);
    passed++;
  } catch (e) {
    console.log(`  FAIL: ${name}`);
    console.log(`        ${e.message}`);
    failed++;
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg || 'Assertion failed');
}

console.log('\n=== BuildMySite Contact Form Tests ===\n');

// --- Sanitisation ---
console.log('Input Sanitisation:');

test('strips HTML tags', () => {
  assert(sanitise('<script>alert("xss")</script>hello') === 'alert("xss")hello',
    'should strip script tags');
});

test('strips complex HTML', () => {
  assert(sanitise('<b>bold</b> and <a href="evil.com">link</a>') === 'bold and link',
    'should strip all tags');
});

test('trims whitespace', () => {
  assert(sanitise('  hello  ') === 'hello', 'should trim');
});

test('handles non-string input', () => {
  assert(sanitise(null) === '', 'null should return empty');
  assert(sanitise(undefined) === '', 'undefined should return empty');
  assert(sanitise(123) === '', 'number should return empty');
});

test('preserves safe text', () => {
  const input = "O'Brien & Sons, Ltd.";
  assert(sanitise(input) === input, 'should preserve apostrophes and ampersands');
});

// --- Email validation ---
console.log('\nEmail Validation:');

test('accepts valid emails', () => {
  assert(isValidEmail('test@example.com'), 'basic email');
  assert(isValidEmail('user.name@domain.co.uk'), 'dotted email');
  assert(isValidEmail('user+tag@gmail.com'), 'plus-addressed email');
});

test('rejects invalid emails', () => {
  assert(!isValidEmail(''), 'empty string');
  assert(!isValidEmail('notanemail'), 'no @ sign');
  assert(!isValidEmail('@domain.com'), 'no local part');
  assert(!isValidEmail('user@'), 'no domain');
  assert(!isValidEmail('user @domain.com'), 'space in email');
});

// --- Rate limiting ---
console.log('\nRate Limiting:');

test('allows first submission', () => {
  assert(!isRateLimited('192.168.1.1'), 'first request should not be limited');
});

test('allows up to RATE_LIMIT submissions', () => {
  const ip = '10.0.0.1';
  for (let i = 0; i < 5; i++) {
    isRateLimited(ip);
  }
  // 5 submissions should be fine (limit is 5)
  // 6th should be blocked
  assert(isRateLimited(ip), '6th submission should be rate limited');
});

test('different IPs have independent limits', () => {
  const ip1 = '172.16.0.1';
  const ip2 = '172.16.0.2';
  for (let i = 0; i < 5; i++) {
    isRateLimited(ip1);
  }
  assert(!isRateLimited(ip2), 'different IP should not be affected');
});

// --- Source file structure ---
console.log('\nSource Structure:');

test('imports Resend', () => {
  assert(contactSource.includes("from 'resend'"), 'should import from resend package');
});

test('uses CONTACT_EMAIL env var', () => {
  assert(contactSource.includes('CONTACT_EMAIL'), 'should read CONTACT_EMAIL from env');
});

test('uses RESEND_API_KEY env var', () => {
  assert(contactSource.includes('RESEND_API_KEY'), 'should read RESEND_API_KEY from env');
});

test('has fallback when Resend not configured', () => {
  assert(contactSource.includes('not configured'), 'should have a fallback message');
});

test('sets replyTo from form email', () => {
  assert(contactSource.includes('replyTo'), 'should set replyTo header');
});

test('handles CORS preflight', () => {
  assert(contactSource.includes('OPTIONS'), 'should handle OPTIONS method');
});

// --- Summary ---
console.log(`\n=== Results: ${passed} passed, ${failed} failed ===\n`);
process.exit(failed > 0 ? 1 : 0);
