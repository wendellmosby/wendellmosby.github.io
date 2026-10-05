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

// Curated visual history: more than two decades of public-facing work.
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
      <div class="career-map" aria-label="Career history highlights">
        <div class="career-map-intro">
          <span class="career-map-kicker">20+ Years</span>
          <h3>One through-line: people, ideas, and community.</h3>
          <p>Different roles. Different rooms. The same instinct to connect people and turn ideas into action.</p>
        </div>
        <div class="career-map-grid">
          <div><span>01</span><strong>Civic Leadership</strong><small>Boards, public service & community voice</small></div>
          <div><span>02</span><strong>Youth Development</strong><small>Mentoring, learning & opportunity</small></div>
          <div><span>03</span><strong>Technology</strong><small>Digital access, innovation & hackathons</small></div>
          <div><span>04</span><strong>Public Engagement</strong><small>Speaking, panels, media & convening</small></div>
          <div><span>05</span><strong>Nonprofit Leadership</strong><small>Programs, strategy & community impact</small></div>
          <div><span>06</span><strong>Education</strong><small>Classroom practice, AI literacy & civics</small></div>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .career-in-motion { background: #f3efe5; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .career-history-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 48px; align-items: center; }
    .career-history-copy > p:not(.eyebrow) { color: var(--muted-ink); font-size: 1.05rem; }
    .career-tags { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
    .career-tags span { padding: 8px 12px; border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,.68); font-size: .84rem; font-weight: 800; }
    .career-map { background: linear-gradient(145deg, #101828, #14213d); color: white; border-radius: 28px; padding: 32px; box-shadow: var(--shadow); overflow: hidden; }
    .career-map-intro { max-width: 620px; margin-bottom: 26px; }
    .career-map-kicker { display: inline-block; color: #f4b241; font-weight: 900; text-transform: uppercase; letter-spacing: .14em; font-size: .78rem; margin-bottom: 12px; }
    .career-map h3 { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3vw, 2.8rem); line-height: 1.05; }
    .career-map-intro p { color: rgba(255,255,255,.72); margin-bottom: 0; }
    .career-map-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .career-map-grid div { min-height: 140px; border: 1px solid rgba(255,255,255,.14); border-radius: 18px; padding: 18px; background: rgba(255,255,255,.06); display: flex; flex-direction: column; }
    .career-map-grid span { color: #f4b241; font-weight: 900; font-size: .78rem; letter-spacing: .12em; margin-bottom: auto; }
    .career-map-grid strong { font-size: 1.05rem; margin-top: 20px; }
    .career-map-grid small { color: rgba(255,255,255,.66); line-height: 1.35; margin-top: 5px; }
    @media (max-width: 920px) { .career-history-grid { grid-template-columns: 1fr; } }
    @media (max-width: 620px) { .career-map { padding: 22px; } .career-map-grid { grid-template-columns: 1fr; } .career-map-grid div { min-height: 120px; } }
  `;
  document.head.appendChild(style);
  aboutSection.insertAdjacentElement('afterend', careerSection);
}
