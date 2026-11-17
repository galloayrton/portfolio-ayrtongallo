/* Smooth, adjustable scrolling for in-page links (the navbar links).
   Speed comes from "scrollDuration" in js/content/site.js. Browsers don't let CSS change
   the speed of scroll-behavior: smooth, so this animates the scroll itself. */
PF.scroll = (function () {
  let raf = 0;

  /* easeInOutCubic: starts gently, speeds up, slows down at the end. */
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  function to(targetY) {
    cancelAnimationFrame(raf);
    const startY = window.scrollY, dist = targetY - startY;
    const dur = PF.content.site.scrollDuration;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!dur || reduce || Math.abs(dist) < 2) { window.scrollTo(0, targetY); return; }
    const t0 = performance.now();
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      window.scrollTo(0, startY + dist * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
    })(t0);
  }

  document.addEventListener("click", function (e) {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    e.preventDefault();
    const nav = document.querySelector("nav");
    to(target.getBoundingClientRect().top + window.scrollY - (nav ? nav.offsetHeight : 0));
    try { history.replaceState(null, "", "#" + id); } catch (err) {}
  });

  /* If the visitor scrolls by hand mid-animation, stop animating. */
  ["wheel", "touchstart", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, function () { cancelAnimationFrame(raf); }, { passive: true });
  });

  return { to: to };
})();
