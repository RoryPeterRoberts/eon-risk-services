// Input validation and sanitisation

function sanitise(str) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, 1000);
}

function isValidEmail(email) {
  // RFC 5322 simplified — good enough for form validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function validateToolkit(body) {
  const errors = [];
  const name = sanitise(body.name);
  const email = sanitise(body.email);
  const organisation = sanitise(body.organisation);
  const role = sanitise(body.role);

  if (!name) errors.push('Name is required');
  if (!email) errors.push('Email is required');
  else if (!isValidEmail(email)) errors.push('Invalid email address');

  return {
    valid: errors.length === 0,
    errors,
    data: { name, email, organisation, role }
  };
}

function validateContact(body) {
  const errors = [];
  const name = sanitise(body.name);
  const email = sanitise(body.email);
  const organisation = sanitise(body.organisation);
  const subject_category = sanitise(body.subject);
  const message = sanitise(body.message);

  if (!name) errors.push('Name is required');
  if (!email) errors.push('Email is required');
  else if (!isValidEmail(email)) errors.push('Invalid email address');
  if (!message) errors.push('Message is required');

  return {
    valid: errors.length === 0,
    errors,
    data: { name, email, organisation, subject_category, message }
  };
}

module.exports = { validateToolkit, validateContact, sanitise };
