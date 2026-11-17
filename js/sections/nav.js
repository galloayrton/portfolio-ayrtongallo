/* Top navigation: logo, section links, language and theme buttons. */
PF.sections.nav = function () {
  const e = PF.el;
  const links = PF.content.site.sections.map(function (s) { return e("a", { href: "#" + s.id, text: PF.ui(s.id) }); });

  const lang = e("button", { "class": "ib", type: "button", "aria-label": PF.ui("langLabel"), text: PF.state.lang === "en" ? "ES" : "EN" });
  lang.addEventListener("click", function () { PF.setLang(PF.state.lang === "en" ? "es" : "en"); });

  const theme = e("button", { "class": "ib", type: "button", "aria-label": PF.ui("themeLabel") });
  theme.innerHTML = PF.theme.icon();
  theme.addEventListener("click", function () { PF.theme.toggle(); theme.innerHTML = PF.theme.icon(); });

  return e("nav", {}, [e("div", { "class": "wrap" }, [
    e("b", { text: PF.content.profile.logo }),
    e("div", { "class": "r" }, [e("span", { "class": "nl" }, links), e("span", { "class": "ctl" }, [lang, theme])])
  ])]);
};
