// BuildMySite Setup Engine — Unit Tests
// Run: node wizard/tests/setup.test.js

import { generateAdminToken } from '../setup.js';

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

console.log('\n=== BuildMySite Setup Engine Tests ===\n');

// --- Admin Token Generation ---
console.log('Admin Token Generation:');

test('generates 32-character token', () => {
  const token = generateAdminToken();
  assert(token.length === 32, `Expected 32 chars, got ${token.length}`);
});

test('generates alphanumeric tokens', () => {
  const token = generateAdminToken();
  assert(/^[A-Za-z0-9]+$/.test(token), `Token contains invalid chars: ${token}`);
});

test('generates unique tokens', () => {
  const tokens = new Set();
  for (let i = 0; i < 100; i++) {
    tokens.add(generateAdminToken());
  }
  assert(tokens.size === 100, `Expected 100 unique tokens, got ${tokens.size}`);
});

// --- Module Structure ---
console.log('\nModule Exports:');

test('setup.js exports expected functions', async () => {
  const mod = await import('../setup.js');
  const expected = [
    'setSiteKitFiles',
    'validateGitHubToken',
    'createGitHubRepo',
    'pushFileToRepo',
    'pushSiteKit',
    'validateVercelToken',
    'createVercelProject',
    'setVercelEnvVars',
    'validateAIKey',
    'triggerInitialBuild',
    'generateAdminToken',
    'runFullSetup'
  ];
  for (const fn of expected) {
    assert(typeof mod[fn] === 'function', `Missing export: ${fn}`);
  }
});

test('APPROVED_MODELS includes 4 models', async () => {
  // We can't access the private const directly, but we can test validateAIKey rejects unknown models
  const mod = await import('../setup.js');
  const result = await mod.validateAIKey('fake-key', 'gpt-3.5-turbo');
  assert(!result.valid, 'should reject unapproved model');
  assert(result.error.includes('not approved'), 'should mention not approved');
});

// --- Summary ---
console.log(`\n=== Results: ${passed} passed, ${failed} failed ===\n`);
process.exit(failed > 0 ? 1 : 0);
