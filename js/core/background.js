/* Electrical background: a mesh of nodes and lines, like a power grid or circuit board.
   Small pulses of "current" travel along the lines, and the mesh energizes near the mouse.
   The glow and pulses are dimmed behind text so reading stays easy.
   Settings live in js/content/site.js under "background". */
PF.background = (function () {
  let canvas, ctx, layer, lctx, C, dpr = 1, w, h, cols, rows, raf = 0, last = 0, rects = [], dirty = true, pulses = [];
  const m = { x: -9999, y: -9999, tx: -9999, ty: -9999, k: 0, tk: 0 };  // smoothed mouse position, glow strength
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;   // touch screens
  const TEXT = "h1,h2,h3,p,li,small,b,.tag,.btn,.pill,.stack,.filters button,footer .wrap";
  const PAD = 8;   // extra space around text that also stays calm (px)

  function cfg() {
    return Object.assign({ enabled: true, spacing: 32, radius: 170, dot: 1.2, textShield: 0.06, density: 0.5, pulses: 22, speed: 3 }, PF.content.site.background);
  }
  function palette() {
    return PF.theme.isDark()
      ? { base: [148, 160, 178], energy: [255, 184, 92], dot: 0.22, line: 0.09 }
      : { base: [91, 100, 114], energy: [217, 115, 13], dot: 0.3, line: 0.12 };
  }
  function rgba(c, a) { return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  function mix(a, b, t) { return [Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t), Math.round(a[2] + (b[2] - a[2]) * t)]; }

  /* The mesh is generated from a fixed formula, so it looks the same on every redraw and resize. */
  function rnd(i, j, s) { const x = Math.sin(i * 127.1 + j * 311.7 + s * 74.7) * 43758.5453; return x - Math.floor(x); }
  function hasH(i, j) { return i >= 0 && i + 1 < cols && j >= 0 && j < rows && rnd(i, j, 1) < C.density; }
  function hasV(i, j) { return i >= 0 && i < cols && j >= 0 && j + 1 < rows && rnd(i, j, 2) < C.density; }
  function junction(i, j) { return rnd(i, j, 3) < 0.07; }   // a few larger nodes, like substations
  function options(i, j) {
    const o = [];
    if (hasH(i, j)) o.push([1, 0]);
    if (hasH(i - 1, j)) o.push([-1, 0]);
    if (hasV(i, j)) o.push([0, 1]);
    if (hasV(i, j - 1)) o.push([0, -1]);
    return o;
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

  /* The resting mesh (lines and nodes) is drawn once into an offscreen layer. */
  function buildLayer() {
    const P = palette(), s = C.spacing;
    layer.width = canvas.width; layer.height = canvas.height;
    lctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (C.density > 0) {
      lctx.strokeStyle = rgba(P.base, P.line);
      lctx.lineWidth = 1;
      lctx.beginPath();
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const x = s * (i + 0.5), y = s * (j + 0.5);
        if (hasH(i, j)) { lctx.moveTo(x, y); lctx.lineTo(x + s, y); }
        if (hasV(i, j)) { lctx.moveTo(x, y); lctx.lineTo(x, y + s); }
      }
      lctx.stroke();
    }
    lctx.fillStyle = rgba(P.base, P.dot);
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      lctx.beginPath();
      lctx.arc(s * (i + 0.5), s * (j + 0.5), C.dot * (junction(i, j) ? 1.9 : 1), 0, 6.2832);
      lctx.fill();
    }
  }

  /* Glow strength (0 to 1) at a point: strongest at the mouse, calmed behind text. */
  function glowAt(x, y) {
    const dx = x - m.x, dy = y - m.y, d2 = dx * dx + dy * dy, r = C.radius;
    if (d2 >= r * r) return 0;
    let t = 1 - Math.sqrt(d2) / r;
    t = t * t * (3 - 2 * t) * m.k;
    if (t > 0.004 && overText(x, y)) t *= C.textShield;
    return t;
  }
  function drawGlow(P) {
    if (m.k < 0.004) return;
    const s = C.spacing, r = C.radius;
    const i0 = Math.max(0, Math.floor((m.x - r) / s - 1)), i1 = Math.min(cols - 1, Math.ceil((m.x + r) / s));
    const j0 = Math.max(0, Math.floor((m.y - r) / s - 1)), j1 = Math.min(rows - 1, Math.ceil((m.y + r) / s));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = s * (i + 0.5), y = s * (j + 0.5);
      if (hasH(i, j)) { const t = glowAt(x + s / 2, y); if (t > 0.004) { ctx.strokeStyle = rgba(P.energy, Math.min(1, t * 0.9)); ctx.lineWidth = 1 + t * 0.8; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + s, y); ctx.stroke(); } }
      if (hasV(i, j)) { const t = glowAt(x, y + s / 2); if (t > 0.004) { ctx.strokeStyle = rgba(P.energy, Math.min(1, t * 0.9)); ctx.lineWidth = 1 + t * 0.8; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + s); ctx.stroke(); } }
      const t = glowAt(x, y);
      if (t > 0.004) {
        ctx.fillStyle = rgba(mix(P.base, P.energy, t), P.dot + t * 0.75);
        ctx.beginPath();
        ctx.arc(x, y, C.dot * (junction(i, j) ? 1.9 : 1) + t * 1.6, 0, 6.2832);
        ctx.fill();
      }
    }
  }

  /* Pulses of current that random-walk along the lines. */
  function spawn() {
    for (let n = 0; n < 40; n++) {
      const i = (Math.random() * cols) | 0, j = (Math.random() * rows) | 0, o = options(i, j);
      if (o.length) { const d = o[(Math.random() * o.length) | 0]; return { i: i, j: j, di: d[0], dj: d[1], p: Math.random() }; }
    }
    return null;
  }
  function initPulses() {
    pulses = [];
    const n = C.pulses > 0 && C.density > 0 && !reduce ? Math.max(6, Math.round(C.pulses * w * h / 1296000)) : 0;
    for (let k = 0; k < n; k++) { const p = spawn(); if (p) pulses.push(p); }
  }
  function step(p, dt) {
    p.p += C.speed * dt;
    while (p.p >= 1) {
      p.p -= 1; p.i += p.di; p.j += p.dj;
      let o = options(p.i, p.j).filter(function (d) { return !(d[0] === -p.di && d[1] === -p.dj); });
      if (!o.length) o = options(p.i, p.j);                 // dead end: turn around
      if (!o.length) { const q = spawn(); if (q) { p.i = q.i; p.j = q.j; p.di = q.di; p.dj = q.dj; p.p = 0; } return; }
      const d = o[(Math.random() * o.length) | 0]; p.di = d[0]; p.dj = d[1];
    }
  }
  function drawPulse(p, P) {
    const s = C.spacing;
    const x = s * (p.i + 0.5) + p.di * s * p.p, y = s * (p.j + 0.5) + p.dj * s * p.p;
    const t0 = Math.max(0, p.p - 0.7);
    const tx = s * (p.i + 0.5) + p.di * s * t0, ty = s * (p.j + 0.5) + p.dj * s * t0;
    const a = overText(x, y) ? C.textShield : 1;            // calm behind text
    ctx.strokeStyle = rgba(P.energy, 0.35 * a); ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = rgba(P.energy, 0.18 * a); ctx.beginPath(); ctx.arc(x, y, 5, 0, 6.2832); ctx.fill();
    ctx.fillStyle = rgba(P.energy, 0.9 * a); ctx.beginPath(); ctx.arc(x, y, 1.8, 0, 6.2832); ctx.fill();
  }

  function frame(now) {
    raf = 0;
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    const f = reduce ? 1 : 0.18;
    m.x += (m.tx - m.x) * f; m.y += (m.ty - m.y) * f; m.k += (m.tk - m.k) * (reduce ? 1 : 0.12);
    if (dirty) collect();
    const P = palette();
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(layer, 0, 0, w, h);
    drawGlow(P);
    if (!reduce) pulses.forEach(function (p) { step(p, dt); drawPulse(p, P); });
    const moving = Math.abs(m.tx - m.x) > 0.5 || Math.abs(m.ty - m.y) > 0.5 || Math.abs(m.tk - m.k) > 0.01;
    if (!reduce || moving) raf = requestAnimationFrame(frame);   // with reduced motion, only animate while the mouse moves
  }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  function resize() {
    C = cfg();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    // Phones: size for the tallest view, so the address bar hiding while scrolling never forces a redraw
    h = coarse ? Math.max(window.innerHeight, window.screen.height || 0) : window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / C.spacing) + 1; rows = Math.ceil(h / C.spacing) + 1;
    buildLayer(); initPulses(); dirty = true; kick();
  }

  /* Call after the page content changes (language switch, etc.) so text is re-measured. */
  function refresh() { dirty = true; if (ctx) kick(); }

  function start() {
    if (!cfg().enabled || canvas) return;
    canvas = document.createElement("canvas");
    canvas.id = "bg";
    canvas.setAttribute("aria-hidden", "true");
    document.body.insertBefore(canvas, document.body.firstChild);
    ctx = canvas.getContext("2d");
    layer = document.createElement("canvas");
    lctx = layer.getContext("2d");

    const move = function (e) {
      if (m.k < 0.02) { m.x = m.tx = e.clientX; m.y = m.ty = e.clientY; }
      m.tx = e.clientX; m.ty = e.clientY; m.tk = 1; kick();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });   // a tap lights the mesh on touch screens
    window.addEventListener("pointerup", function (e) { if (e.pointerType === "touch") { m.tk = 0; kick(); } });
    document.documentElement.addEventListener("mouseleave", function () { m.tk = 0; kick(); });
    window.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("load", refresh);
    window.addEventListener("resize", function () { if (coarse && window.innerWidth === w) return; resize(); });
    new MutationObserver(function () { buildLayer(); kick(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    resize();
  }

  return { start: start, refresh: refresh };
})();
