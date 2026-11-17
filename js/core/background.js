/* Animated background: a grid of gray dots that light up near the mouse.
   The glow is dimmed wherever it would sit behind text, so reading stays easy.
   Settings live in js/content/site.js under "background". */
PF.background = (function () {
  let canvas, ctx, w, h, raf = 0, rects = [], dirty = true;
  const m = { x: -9999, y: -9999, tx: -9999, ty: -9999, k: 0, tk: 0 };  // smoothed mouse position, glow strength
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TEXT = "h1,h2,h3,p,li,small,b,.tag,.btn,.pill,.stack,.filters button,footer .wrap";
  const PAD = 8;   // extra space around text that also stays calm (px)

  function cfg() {
    return Object.assign({ enabled: true, spacing: 28, radius: 170, dot: 1.1, textShield: 0.06 }, PF.content.site.background);
  }

  /* Measure where text currently sits on screen (one box per line of text). */
  function collect() {
    rects = [];
    const range = document.createRange();
    document.querySelectorAll(TEXT).forEach(function (el) {
      range.selectNodeContents(el);
      const list = range.getClientRects();
      for (let i = 0; i < list.length; i++) {
        const r = list[i];
        if (r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < h) rects.push([r.left - PAD, r.top - PAD, r.right + PAD, r.bottom + PAD]);
      }
    });
    dirty = false;
  }
  function overText(x, y) {
    for (let i = 0; i < rects.length; i++) {
      const r = rects[i];
      if (x >= r[0] && x <= r[2] && y >= r[1] && y <= r[3]) return true;
    }
    return false;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dirty = true;
    draw();
  }

  function draw() {
    if (dirty) collect();
    const c = cfg(), dark = PF.theme.isDark();
    const base = dark ? [148, 160, 178] : [91, 100, 114];   // resting dot colour
    const lit = dark ? [255, 255, 255] : [20, 24, 31];       // colour near the mouse
    const a0 = dark ? 0.22 : 0.3, a1 = dark ? 0.6 : 0.5;     // resting / extra glow opacity
    const rest = "rgba(" + base.join(",") + "," + a0 + ")";
    const s = c.spacing, r = c.radius;
    ctx.clearRect(0, 0, w, h);
    for (let y = s / 2; y < h + s; y += s) {
      for (let x = s / 2; x < w + s; x += s) {
        const dx = x - m.x, dy = y - m.y, d2 = dx * dx + dy * dy;
        let t = 0;
        if (d2 < r * r) {
          t = 1 - Math.sqrt(d2) / r; t = t * t * (3 - 2 * t) * m.k;
          if (t > 0.004 && overText(x, y)) t *= c.textShield;   // calm the glow behind text
        }
        if (t > 0.004) {
          const col = base.map(function (v, i) { return Math.round(v + (lit[i] - v) * t); });
          ctx.fillStyle = "rgba(" + col.join(",") + "," + (a0 + t * a1) + ")";
        } else ctx.fillStyle = rest;
        ctx.beginPath();
        ctx.arc(x, y, c.dot + t * 1.4, 0, 6.2832);
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

  /* Call after the page content changes (language switch, etc.) so text is re-measured. */
  function refresh() { dirty = true; if (ctx) kick(); }

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
    window.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("load", refresh);
    window.addEventListener("resize", resize);
    new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    resize();
  }

  return { start: start, refresh: refresh };
})();
