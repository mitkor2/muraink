// MuraInk — minimal client JS

// dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// collapse nav background as the user scrolls
const nav = document.getElementById('nav');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.boxShadow = y > 12 ? '0 6px 18px rgba(11,11,15,.06)' : 'none';
  lastY = y;
}, { passive: true });

// reveal sections on scroll for a tiny touch of motion
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  }
}, { threshold: .12 });

document.querySelectorAll('.section').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});

// soft-fail if user prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.section').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.transition = 'none';
  });
}
