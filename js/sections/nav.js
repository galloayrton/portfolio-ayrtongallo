/* Top navigation: logo, section links, language flags and theme button. */
PF.sections.nav = function () {
  const e = PF.el;
  const links = PF.content.site.sections.map(function (s) { return e("a", { href: "#" + s.id, text: PF.ui(s.id) }); });

  const langs = [["en", PF.icons.flagEn, "English"], ["es", PF.icons.flagEs, "Español"]].map(function (l) {
    const on = PF.state.lang === l[0];
    const b = e("button", { "class": "ib flag" + (on ? " on" : ""), type: "button", title: l[2], "aria-label": l[2], "aria-pressed": String(on) });
    b.innerHTML = l[1];
    b.addEventListener("click", function () { if (PF.state.lang !== l[0]) PF.setLang(l[0]); });
    return b;
  });

  const theme = e("button", { "class": "ib", type: "button", "aria-label": PF.ui("themeLabel") });
  theme.innerHTML = PF.theme.icon();
  theme.addEventListener("click", function () { PF.theme.toggle(); theme.innerHTML = PF.theme.icon(); });

  return e("nav", {}, [e("div", { "class": "wrap" }, [
    e("b", { text: PF.content.profile.logo }),
    e("div", { "class": "r" }, [e("span", { "class": "nl" }, links), e("span", { "class": "ctl" }, langs.concat([theme]))])
  ])]);
};
