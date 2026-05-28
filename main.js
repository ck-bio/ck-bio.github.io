/* ── THEME ── */
const html = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);
themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ── MOBILE MENU ── */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuScrollY = 0;
function openMenu() {
  menuScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${menuScrollY}px`;
  document.body.style.width = '100%';
  mobileMenu.classList.add('open');
  menuBtn.classList.add('open');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.setAttribute('aria-label', 'Close menu');
}
function closeMenu() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, menuScrollY);
  mobileMenu.classList.remove('open');
  menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Open menu');
}
menuBtn.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(); }, { passive: true });


/* ── HERO FOCUS SYSTEM ── */
const heroBgImg = document.querySelector('.hero-bg img');
const heroEl    = document.querySelector('.hero');
let blurLevel = 10;
let targetBlur = 10;
let idleTimer  = null;
let rafId      = null;
function animateBlur() {
  const diff = targetBlur - blurLevel;
  if (Math.abs(diff) < 0.05) {
    blurLevel = targetBlur;
    heroBgImg.style.filter = `blur(${blurLevel}px)`;
    rafId = null;
    return;
  }
  const speed = targetBlur < blurLevel ? 0.18 : 0.08;
  blurLevel += diff * speed;
  heroBgImg.style.filter = `blur(${blurLevel.toFixed(2)}px)`;
  rafId = requestAnimationFrame(animateBlur);
}

function setTarget(px) {
  targetBlur = px;
  if (!rafId) rafId = requestAnimationFrame(animateBlur);
}

function scheduleIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => setTarget(10), 2000);
}

heroBgImg.style.filter = `blur(10px)`;

// ── any activity focuses, idle blurs ──
let lastActivity = 0;
function onActivity() { setTarget(0); scheduleIdle(); }
function onMouseMove() {
  const now = Date.now();
  if (now - lastActivity < 100) return;
  lastActivity = now;
  onActivity();
}
window.addEventListener('scroll',     onActivity,   { passive: true });
window.addEventListener('touchstart', onActivity,   { passive: true });
window.addEventListener('mousemove',  onMouseMove,  { passive: true });
window.addEventListener('keydown',    onActivity,   { passive: true });


/* ── SCROLL TOP ── */
const scrollBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => scrollBtn.classList.toggle('visible', window.scrollY > 300), { passive: true });
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
