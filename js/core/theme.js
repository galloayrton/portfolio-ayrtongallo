/* Light/dark theme. First visit uses site.defaultTheme ("dark", "light" or "system");
   after the visitor picks one with the button, their choice is remembered. */
PF.theme = (function () {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");

  function isDark() {
    const a = root.getAttribute("data-theme");
    return a ? a === "dark" : mq.matches;
  }
  function init() {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    const pick = (saved === "dark" || saved === "light") ? saved : PF.content.site.defaultTheme;
    if (pick === "dark" || pick === "light") root.setAttribute("data-theme", pick);
  }
  if (mq.addEventListener) mq.addEventListener("change", function () { if (PF.render) PF.render(); });

  return {
    init: init,
    isDark: isDark,
    icon: function () { return isDark() ? PF.icons.sun : PF.icons.moon; },
    toggle: function () {
      const next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    }
  };
})();
