// BuildMySite Agent — Unit Tests
// Run: node tests/agent.test.js

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the agent source and extract testable parts
const agentSource = readFileSync(join(__dirname, '..', 'api', 'agent.js'), 'utf-8');

// We can't import ESM serverless functions directly, so we'll eval the parts we need
const testModule = new Function(`
  ${agentSource.split('// ---- Vercel handler')[0]}
  return { APPROVED_MODELS, COSTS, calcCost, TOOLS, buildSystemPrompt, buildInitialPrompt, validatePath, isAgentRateLimited, PROTECTED_PATHS, MAX_FILE_SIZE };
`)();

const { APPROVED_MODELS, COSTS, calcCost, TOOLS, buildSystemPrompt, buildInitialPrompt, validatePath, isAgentRateLimited, PROTECTED_PATHS, MAX_FILE_SIZE } = testModule;

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

console.log('\n=== BuildMySite Agent Tests ===\n');

// --- Model validation ---
console.log('Model Validation:');

test('claude-opus-4-6 is approved', () => {
  assert(APPROVED_MODELS['claude-opus-4-6'], 'should be approved');
  assert(APPROVED_MODELS['claude-opus-4-6'].provider === 'anthropic');
});

test('claude-sonnet-4-6 is approved', () => {
  assert(APPROVED_MODELS['claude-sonnet-4-6'], 'should be approved');
  assert(APPROVED_MODELS['claude-sonnet-4-6'].provider === 'anthropic');
});

test('gpt-5.2 is approved', () => {
  assert(APPROVED_MODELS['gpt-5.2'], 'should be approved');
  assert(APPROVED_MODELS['gpt-5.2'].provider === 'openai');
});

test('gemini-3.1-pro is approved', () => {
  assert(APPROVED_MODELS['gemini-3.1-pro'], 'should be approved');
  assert(APPROVED_MODELS['gemini-3.1-pro'].provider === 'google');
});

test('unapproved model is rejected', () => {
  assert(!APPROVED_MODELS['gpt-3.5-turbo'], 'should not be approved');
  assert(!APPROVED_MODELS['claude-haiku'], 'should not be approved');
});

// --- Cost calculation ---
console.log('\nCost Calculation:');

test('calcCost returns correct value for Claude Sonnet', () => {
  const cost = calcCost('claude-sonnet-4-6', 1000, 500);
  // (1000 * 3.00 + 500 * 15.00) / 1_000_000 = (3000 + 7500) / 1_000_000 = 0.0105
  assert(Math.abs(cost - 0.0105) < 0.0001, `Expected ~0.0105, got ${cost}`);
});

test('calcCost returns 0 for unknown model', () => {
  const cost = calcCost('unknown-model', 1000, 500);
  assert(cost === 0, `Expected 0, got ${cost}`);
});

// --- Tools ---
console.log('\nTool Definitions:');

test('has exactly 4 tools', () => {
  assert(TOOLS.length === 4, `Expected 4 tools, got ${TOOLS.length}`);
});

test('tools have correct names', () => {
  const names = TOOLS.map(t => t.name).sort();
  assert(JSON.stringify(names) === JSON.stringify(['delete_file', 'list_files', 'read_file', 'write_file']),
    `Unexpected tool names: ${names}`);
});

test('write_file requires path, content, commit_message', () => {
  const tool = TOOLS.find(t => t.name === 'write_file');
  const required = tool.parameters.required.sort();
  assert(JSON.stringify(required) === JSON.stringify(['commit_message', 'content', 'path']),
    `Unexpected required params: ${required}`);
});

// --- System Prompt (Build Mode) ---
console.log('\nSystem Prompt (Build Mode):');

test('build mode includes build instructions', () => {
  const prompt = buildSystemPrompt({ name: 'Test Bakery' }, 'build');
  assert(prompt.includes('Build Mode'), 'should include Build Mode header');
  assert(prompt.includes('Step 1'), 'should include step-by-step instructions');
  assert(prompt.includes('Step 2'), 'should include colour customisation step');
  assert(prompt.includes('Step 3'), 'should include page planning step');
  assert(prompt.includes('Step 4'), 'should include build step');
  assert(prompt.includes('Step 5'), 'should include summary step');
});

test('build mode includes colour customisation guidance', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('--color-primary'), 'should reference CSS variables to override');
  assert(prompt.includes('--color-accent'), 'should reference accent variable');
  assert(prompt.includes(':root'), 'should mention :root block for overrides');
});

test('build mode includes page planning guidance', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('index.html'), 'should include home page');
  assert(prompt.includes('contact.html'), 'should include contact page');
  assert(prompt.includes('about.html'), 'should mention about as optional');
  assert(prompt.includes('services.html'), 'should mention services as optional');
  assert(prompt.includes('menu.html'), 'should mention menu for restaurants');
  assert(prompt.includes('3-5 pages'), 'should recommend 3-5 pages');
});

test('build mode includes content rules', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('Lorem ipsum'), 'should explicitly forbid Lorem ipsum');
  assert(prompt.includes('copywriter'), 'should mention writing like a copywriter');
  assert(prompt.includes('do NOT invent fake reviews'), 'should forbid fake testimonials');
});

test('build mode includes nav template', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('nav__brand'), 'should include nav template');
  assert(prompt.includes('nav__toggle'), 'should include mobile toggle in nav template');
  assert(prompt.includes('nav__link--active'), 'should reference active link class');
});

test('build mode includes footer template', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('footer__brand'), 'should include footer template');
  assert(prompt.includes('footer__badge'), 'should include BuildMySite badge');
  assert(prompt.includes('eonriskservices.com/buildmysite'), 'should include BuildMySite URL in footer');
});

test('build mode includes contact form template', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('/api/contact'), 'should reference contact API endpoint');
  assert(prompt.includes('contact-form'), 'should include form ID');
});

// --- System Prompt (Modify Mode) ---
console.log('\nSystem Prompt (Modify Mode):');

test('modify mode includes modify instructions', () => {
  const prompt = buildSystemPrompt({}, 'modify');
  assert(prompt.includes('Modify Mode'), 'should include Modify Mode header');
  assert(prompt.includes('targeted edits'), 'should encourage targeted edits');
  assert(!prompt.includes('Build Mode'), 'should NOT include Build Mode section');
});

test('modify mode is the default', () => {
  const prompt = buildSystemPrompt({});
  assert(prompt.includes('Modify Mode'), 'default should be modify mode');
  assert(!prompt.includes('Build Mode'), 'default should NOT include Build Mode');
});

// --- System Prompt (Shared) ---
console.log('\nSystem Prompt (Shared):');

test('includes business info when provided', () => {
  const prompt = buildSystemPrompt({ name: 'Test Bakery', email: 'test@bakery.com' }, 'build');
  assert(prompt.includes('Test Bakery'), 'should include business name');
  assert(prompt.includes('test@bakery.com'), 'should include email');
});

test('handles empty business info', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('BuildMySite'), 'should still include BuildMySite');
  assert(prompt.includes('No business information provided'), 'should show placeholder for empty info');
});

test('lists protected files', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('api/agent.js'), 'should protect agent.js');
  assert(prompt.includes('admin.html'), 'should protect admin.html');
  assert(prompt.includes('vercel.json'), 'should protect vercel.json');
});

test('does not include placeholder images warning', () => {
  const prompt = buildSystemPrompt({}, 'build');
  assert(prompt.includes('Do NOT generate placeholder images'), 'should warn against placeholder images');
});

// --- Initial Build Prompt ---
console.log('\nInitial Build Prompt:');

test('constructs prompt from business info', () => {
  const prompt = buildInitialPrompt({
    name: 'Dublin Bakery',
    description: 'Artisan bakery in Dublin 8',
    email: 'hello@dublinbakery.ie',
    phone: '+353 1 234 5678'
  });
  assert(prompt.includes('Dublin Bakery'), 'should include business name');
  assert(prompt.includes('Artisan bakery'), 'should include description');
  assert(prompt.includes('hello@dublinbakery.ie'), 'should include email');
  assert(prompt.includes('+353 1 234 5678'), 'should include phone');
  assert(prompt.includes('Build a complete website'), 'should start with build instruction');
  assert(prompt.includes('Go.'), 'should end with action trigger');
});

test('omits empty fields', () => {
  const prompt = buildInitialPrompt({ name: 'Test Co' });
  assert(prompt.includes('Test Co'), 'should include name');
  assert(!prompt.includes('Description:'), 'should not include empty description label');
  assert(!prompt.includes('Phone:'), 'should not include empty phone label');
});

test('includes all provided fields', () => {
  const prompt = buildInitialPrompt({
    name: 'Test',
    description: 'Desc',
    type: 'restaurant',
    email: 'a@b.com',
    phone: '123',
    address: '456 St',
    hours: '9-5',
    extra: 'We also cater'
  });
  assert(prompt.includes('Business type: restaurant'), 'should include type');
  assert(prompt.includes('Address: 456 St'), 'should include address');
  assert(prompt.includes('Opening hours: 9-5'), 'should include hours');
  assert(prompt.includes('Additional info: We also cater'), 'should include extra');
});

// --- Path Security ---
console.log('\nPath Security:');

test('rejects path traversal with ../', () => {
  let threw = false;
  try { validatePath('../etc/passwd'); } catch { threw = true; }
  assert(threw, 'should reject ../');
});

test('rejects absolute paths', () => {
  let threw = false;
  try { validatePath('/etc/passwd'); } catch { threw = true; }
  assert(threw, 'should reject absolute path');
});

test('rejects backslash paths', () => {
  let threw = false;
  try { validatePath('\\windows\\system32'); } catch { threw = true; }
  assert(threw, 'should reject backslash path');
});

test('allows normal paths', () => {
  let threw = false;
  try { validatePath('index.html'); } catch { threw = true; }
  assert(!threw, 'should allow index.html');
  try { validatePath('css/style.css'); } catch { threw = true; }
  assert(!threw, 'should allow css/style.css');
});

test('protects agent.js from modification', () => {
  let threw = false;
  try { validatePath('api/agent.js'); } catch { threw = true; }
  assert(threw, 'should reject api/agent.js');
});

test('protects admin.html from modification', () => {
  let threw = false;
  try { validatePath('admin.html'); } catch { threw = true; }
  assert(threw, 'should reject admin.html');
});

test('protects vercel.json from modification', () => {
  let threw = false;
  try { validatePath('vercel.json'); } catch { threw = true; }
  assert(threw, 'should reject vercel.json');
});

test('protects .env from modification', () => {
  let threw = false;
  try { validatePath('.env'); } catch { threw = true; }
  assert(threw, 'should reject .env');
});

test('rejects empty path', () => {
  let threw = false;
  try { validatePath(''); } catch { threw = true; }
  assert(threw, 'should reject empty path');
});

// --- Rate Limiting ---
console.log('\nAgent Rate Limiting:');

test('allows first request', () => {
  assert(!isAgentRateLimited('test-ip-1'), 'first request should be allowed');
});

test('blocks after rate limit exceeded', () => {
  const ip = 'test-ip-2';
  for (let i = 0; i < 10; i++) {
    isAgentRateLimited(ip);
  }
  assert(isAgentRateLimited(ip), '11th request should be blocked');
});

// --- File Size Limit ---
console.log('\nFile Size Limits:');

test('MAX_FILE_SIZE is 500KB', () => {
  assert(MAX_FILE_SIZE === 500_000, `Expected 500000, got ${MAX_FILE_SIZE}`);
});

// --- Protected Paths ---
console.log('\nProtected Paths:');

test('PROTECTED_PATHS includes critical files', () => {
  assert(PROTECTED_PATHS.includes('api/agent.js'), 'should protect agent.js');
  assert(PROTECTED_PATHS.includes('admin.html'), 'should protect admin.html');
  assert(PROTECTED_PATHS.includes('package.json'), 'should protect package.json');
  assert(PROTECTED_PATHS.includes('.env'), 'should protect .env');
});

// --- Summary ---
console.log(`\n=== Results: ${passed} passed, ${failed} failed ===\n`);
process.exit(failed > 0 ? 1 : 0);
