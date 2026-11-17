PF.sections.contact = function () {
  const e = PF.el, l = PF.content.links;
  const buttons = [
    PF.button(l.email, "mailto:" + l.email, "email", true),
    PF.button("GitHub", l.github, "github"),
    PF.button("LinkedIn", l.linkedin, "linkedin")
  ];
  const cv = PF.t(l.resume);                       // résumé for the current language
  if (cv) buttons.push(PF.button(PF.ui("resume"), cv));
  return PF.section("contact", "contact", [
    e("p", { "class": "lead", text: PF.t(PF.content.profile.contact) }),
    e("div", { "class": "btns" }, buttons)
  ]);
};
