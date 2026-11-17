/* Builds the page from the content files. Nothing to edit here. */
(function () {
  const app = document.getElementById("app");
  const S = PF.sections, site = PF.content.site;

  /* External links open in a new tab; in-page (#) and mailto: links stay put. */
  PF.newTabLinks = function () {
    document.querySelectorAll("a[href]").forEach(function (a) {
      const h = a.getAttribute("href");
      if (h.charAt(0) === "#" || h.indexOf("mailto:") === 0) { a.removeAttribute("target"); a.removeAttribute("rel"); }
      else { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    });
  };

  PF.render = function () {
    const y = window.scrollY;
    document.documentElement.lang = PF.state.lang;
    document.title = PF.t(PF.content.profile.pageTitle);
    const main = PF.el("main", { "class": "wrap" }, [S.hero()].concat(site.sections.map(function (s) { return S[s.id](); })));
    app.replaceChildren(S.nav(), main, S.footer());
    PF.newTabLinks();
    window.scrollTo(0, y);
  };

  PF.setLang = function (l) {
    PF.state.lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    PF.render();
  };

  /* Initial language: saved choice, then site.defaultLang, then the browser language. */
  let lang = site.defaultLang;
  try { const s = localStorage.getItem("lang"); if (s === "en" || s === "es") lang = s; } catch (e) {}
  if (lang !== "en" && lang !== "es") lang = (navigator.language || "").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  PF.state.lang = lang;
  PF.theme.init();
  PF.render();
  if (PF.background) PF.background.start();
})();
