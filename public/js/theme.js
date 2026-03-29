function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  document.querySelectorAll('.theme-toggle').forEach(b => b.textContent = next === 'light' ? '\u2600\uFE0F' : '\uD83C\uDF19');
  localStorage.setItem('claw-theme', next);
}
(function () {
  const s = localStorage.getItem('claw-theme');
  if (s) {
    document.documentElement.setAttribute('data-theme', s);
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.theme-toggle').forEach(b => b.textContent = s === 'light' ? '\u2600\uFE0F' : '\uD83C\uDF19');
    });
  }
})();
const obs = new IntersectionObserver(e => {
  e.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .06, rootMargin: '0px 0px -40px 0px' });
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-right');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }
});
