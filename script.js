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

// Curated visual history: selected moments from more than two decades of public-facing work.
const aboutSection = document.querySelector('#about');
if (aboutSection && !document.querySelector('#career-in-motion')) {
  const careerSection = document.createElement('section');
  careerSection.className = 'section career-in-motion';
  careerSection.id = 'career-in-motion';
  careerSection.innerHTML = `
    <div class="container career-history-grid">
      <div class="career-history-copy">
        <p class="eyebrow">Career in Motion</p>
        <h2>The current chapter has a long runway behind it.</h2>
        <p>Long before the classroom, Wendell was speaking, convening, building, organizing, mentoring young people, working in technology and civic spaces, and helping move community ideas into action.</p>
        <p>These selected moments reflect more than two decades across civic leadership, youth development, technology, public engagement, nonprofit work, media, and community building.</p>
        <div class="career-tags" aria-label="Career themes">
          <span>Speaker</span><span>Builder</span><span>Convener</span><span>Educator</span><span>Community Leader</span>
        </div>
      </div>
      <figure class="career-history-figure">
        <img src="/career-in-motion.jpg" alt="Selected career moments from Wendell Mosby's speaking, civic leadership, youth technology, community dialogue, media, and public engagement work" loading="lazy">
        <figcaption>Selected moments from civic, technology, youth-development, media, and community work.</figcaption>
      </figure>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .career-in-motion { background: #f3efe5; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .career-history-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 48px; align-items: center; }
    .career-history-copy > p:not(.eyebrow) { color: var(--muted-ink); font-size: 1.05rem; }
    .career-history-figure { margin: 0; background: white; border: 1px solid var(--line); border-radius: 24px; padding: 12px; box-shadow: var(--shadow); }
    .career-history-figure img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 16px; }
    .career-history-figure figcaption { padding: 10px 4px 2px; color: var(--soft-ink); font-size: .82rem; }
    .career-tags { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
    .career-tags span { padding: 8px 12px; border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,.68); font-size: .84rem; font-weight: 800; }
    @media (max-width: 920px) { .career-history-grid { grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(style);
  aboutSection.insertAdjacentElement('afterend', careerSection);
}
