/* Animated background: a grid of gray dots that light up near the mouse.
   Settings live in js/content/site.js under "background". */
PF.background = (function () {
  let canvas, ctx, w, h, raf = 0;
  const m = { x: -9999, y: -9999, tx: -9999, ty: -9999, k: 0, tk: 0 };  // smoothed mouse position, glow strength
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function cfg() { return Object.assign({ enabled: true, spacing: 28, radius: 170, dot: 1.1 }, PF.content.site.background); }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw() {
    const c = cfg(), dark = PF.theme.isDark();
    const base = dark ? [148, 160, 178] : [91, 100, 114];   // resting dot colour
    const lit = dark ? [255, 255, 255] : [20, 24, 31];       // colour near the mouse
    const a0 = dark ? 0.22 : 0.3, a1 = dark ? 0.75 : 0.65;   // resting / extra glow opacity
    const rest = "rgba(" + base.join(",") + "," + a0 + ")";
    const s = c.spacing, r = c.radius;
    ctx.clearRect(0, 0, w, h);
    for (let y = s / 2; y < h + s; y += s) {
      for (let x = s / 2; x < w + s; x += s) {
        const dx = x - m.x, dy = y - m.y, d2 = dx * dx + dy * dy;
        let t = 0;
        if (d2 < r * r) { t = 1 - Math.sqrt(d2) / r; t = t * t * (3 - 2 * t) * m.k; }
        if (t > 0.004) {
          const col = base.map(function (v, i) { return Math.round(v + (lit[i] - v) * t); });
          ctx.fillStyle = "rgba(" + col.join(",") + "," + (a0 + t * a1) + ")";
        } else ctx.fillStyle = rest;
        ctx.beginPath();
        ctx.arc(x, y, c.dot + t * 1.6, 0, 6.2832);
        ctx.fill();
      }
    }
  }

  function tick() {
    const f = reduce ? 1 : 0.18;
    m.x += (m.tx - m.x) * f; m.y += (m.ty - m.y) * f; m.k += (m.tk - m.k) * (reduce ? 1 : 0.12);
    draw();
    const moving = Math.abs(m.tx - m.x) > 0.5 || Math.abs(m.ty - m.y) > 0.5 || Math.abs(m.tk - m.k) > 0.01;
    raf = moving ? requestAnimationFrame(tick) : 0;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }

  function start() {
    if (!cfg().enabled || canvas) return;
    canvas = document.createElement("canvas");
    canvas.id = "bg";
    canvas.setAttribute("aria-hidden", "true");
    document.body.insertBefore(canvas, document.body.firstChild);
    ctx = canvas.getContext("2d");

    window.addEventListener("pointermove", function (e) {
      if (m.k < 0.02) { m.x = m.tx = e.clientX; m.y = m.ty = e.clientY; }
      m.tx = e.clientX; m.ty = e.clientY; m.tk = 1; kick();
    }, { passive: true });
    window.addEventListener("pointerup", function (e) { if (e.pointerType === "touch") { m.tk = 0; kick(); } });
    document.documentElement.addEventListener("mouseleave", function () { m.tk = 0; kick(); });
    window.addEventListener("resize", resize);
    new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    resize();
  }

  return { start: start };
})();
