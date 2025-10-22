document.getElementById('themeSwitcher').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
function viewProject(projectId) {
  // You can redirect to a separate HTML page or open a modal
  alert(`Opening ${projectId} viewer...`);
  // Example: window.location.href = `${projectId}.html`;
}
// Scroll-triggered animation for elements with .fade-in
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

fadeInElements.forEach(el => {
  observer.observe(el);
});
// Contact form submission (basic simulation)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const status = document.getElementById('formStatus');

  if (!name || !email || !message) {
    status.textContent = 'Please fill out all fields.';
    status.style.color = 'crimson';
    return;
  }

  // Simulated submission
  status.textContent = 'Sending...';
  status.style.color = '#6b3fa0';

  setTimeout(() => {
    status.textContent = 'Thank you! Your message has been sent.';
    this.reset();
  }, 1200);
});
// Optional: Smooth scroll for footer navigation links
document.querySelectorAll('.footer-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

