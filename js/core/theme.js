/* Light/dark theme. Follows the device until the visitor picks one; the choice is remembered. */
PF.theme = (function () {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) {}
  function isDark() {
    const a = root.getAttribute("data-theme");
    return a ? a === "dark" : mq.matches;
  }
  if (mq.addEventListener) mq.addEventListener("change", function () { if (PF.render) PF.render(); });
  return {
    icon: function () { return isDark() ? PF.icons.sun : PF.icons.moon; },
    toggle: function () {
      const next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    }
  };
})();
