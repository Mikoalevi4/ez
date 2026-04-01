/* ══════════════════════════════════════
   ENGLISHzONE — main.js
   ══════════════════════════════════════ */

// ── Анімація появи елементів при скролі ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 120);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
