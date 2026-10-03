const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

links.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Link every Ready Gary card on the main page to its permanent landing page.
document.querySelectorAll('article').forEach((article) => {
  const heading = article.querySelector('h3');
  if (!heading || heading.textContent.trim() !== 'Ready Gary') return;

  const status = article.querySelector('.project-status');
  if (!status) return;

  const link = document.createElement('a');
  link.href = '/ready-gary/';
  link.textContent = 'Explore Ready Gary →';
  link.className = status.closest('#writing') ? 'button secondary' : '';
  status.replaceWith(link);
});
