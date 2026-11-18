PF.sections.contact = function () {
  const e = PF.el, l = PF.content.links, p = PF.content.profile;
  const buttons = [
    PF.button(l.email, "mailto:" + l.email, "email", true),
    PF.button("GitHub", l.github, "github"),
    PF.button("LinkedIn", l.linkedin, "linkedin")
  ];
  [[l.resume.en, "resumeEn"], [l.resume.es, "resumeEs"]].forEach(function (r) {   // both résumés, whatever the page language
    if (r[0]) buttons.push(PF.button(PF.ui(r[1]), r[0]));
  });
  return PF.section("contact", "contact", [
    e("p", { "class": "lead", text: PF.t(p.contact) }),
    e("div", { "class": "btns" }, buttons),
    e("p", { "class": "tag", text: PF.t(p.location) })
  ]);
};
