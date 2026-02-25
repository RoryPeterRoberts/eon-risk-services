/* ============================================================
   EON Risk Services — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Nav Toggle --- */
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('active');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
    });
    // Close on link click
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Navbar scroll effect --- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Active nav link --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  /* --- Accordion --- */
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion__item');
      const content = item.querySelector('.accordion__content');
      const isOpen = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.accordion__item.active').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.accordion__content').style.maxHeight = null;
        }
      });

      // Toggle this one
      item.classList.toggle('active');
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  /* --- Filter Tabs --- */
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('.filter-tabs');
      group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('filter-tab--active'));
      tab.classList.add('filter-tab--active');

      const filter = tab.dataset.filter;
      const cards = document.querySelectorAll('[data-category]');
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Contact form --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      btn.style.opacity = '0.7';

      // Get Turnstile token
      const turnstileResponse = document.querySelector('#contact-form [name="cf-turnstile-response"]');
      if (!turnstileResponse || !turnstileResponse.value) {
        btn.textContent = 'Please complete the verification';
        btn.disabled = false;
        btn.style.opacity = '1';
        setTimeout(() => { btn.textContent = originalText; }, 3000);
        return;
      }

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            organisation: document.getElementById('organisation').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            website: document.getElementById('website') ? document.getElementById('website').value : '',
            'cf-turnstile-response': turnstileResponse.value
          })
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to send');
        }

        btn.textContent = 'Sent — Thank you';
        if (typeof turnstile !== 'undefined') turnstile.reset('#contact-form .cf-turnstile');
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.opacity = '1';
          contactForm.reset();
        }, 3000);

      } catch (err) {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
        btn.style.opacity = '1';
        setTimeout(() => { btn.textContent = originalText; }, 3000);
      }
    });
  }

  /* --- Toolkit form --- */
  const toolkitForm = document.getElementById('toolkit-form');
  if (toolkitForm) {
    toolkitForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = toolkitForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      btn.style.opacity = '0.7';

      // Get Turnstile token
      const tkTurnstile = document.querySelector('#toolkit-form [name="cf-turnstile-response"]');
      if (!tkTurnstile || !tkTurnstile.value) {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        let errEl = toolkitForm.querySelector('.toolkit-form__error');
        if (!errEl) {
          errEl = document.createElement('p');
          errEl.className = 'toolkit-form__error';
          errEl.style.cssText = 'color:#C0392B; font-size:0.9rem; margin-top:12px; text-align:center;';
          btn.parentNode.insertBefore(errEl, btn.nextSibling);
        }
        errEl.textContent = 'Please complete the verification.';
        return;
      }

      try {
        const res = await fetch('/api/toolkit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: document.getElementById('tk-name').value,
            email: document.getElementById('tk-email').value,
            organisation: document.getElementById('tk-org').value,
            role: document.getElementById('tk-role').value,
            website: document.getElementById('tk-website').value,
            'cf-turnstile-response': tkTurnstile.value
          })
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to send');
        }

        // Show success state
        toolkitForm.style.display = 'none';
        document.getElementById('toolkit-success').style.display = 'block';

      } catch (err) {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        // Show inline error
        let errEl = toolkitForm.querySelector('.toolkit-form__error');
        if (!errEl) {
          errEl = document.createElement('p');
          errEl.className = 'toolkit-form__error';
          errEl.style.cssText = 'color:#C0392B; font-size:0.9rem; margin-top:12px; text-align:center;';
          btn.parentNode.insertBefore(errEl, btn.nextSibling);
        }
        errEl.textContent = err.message || 'Something went wrong. Please try again.';
      }
    });
  }
});
