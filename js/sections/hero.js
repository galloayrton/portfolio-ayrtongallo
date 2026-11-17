/* Hero: tag, headline, intro and the two main buttons. */
PF.sections.hero = function () {
  const e = PF.el, p = PF.content.profile, l = PF.content.links;
  const h1 = e("h1", {}, p.headline.map(function (s) {
    return s.cls ? e("span", { "class": s.cls, text: PF.t(s.text) }) : PF.t(s.text);
  }));
  return e("header", { "class": "hero" }, [
    e("div", { "class": "tag", text: PF.t(p.tag) }),
    h1,
    e("p", { "class": "lead", text: PF.t(p.lead) }),
    e("div", { "class": "btns" }, [PF.button(PF.ui("work"), l.github, "github", true), PF.button(PF.ui("touch"), l.linkedin, "linkedin")])
  ]);
};
