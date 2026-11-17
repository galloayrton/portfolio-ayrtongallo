PF.sections.contact = function () {
  const e = PF.el, l = PF.content.links;
  return PF.section("contact", "contact", [
    e("p", { "class": "lead", text: PF.t(PF.content.profile.contact) }),
    e("div", { "class": "btns" }, [
      PF.button(l.email, "mailto:" + l.email, "email", true),
      PF.button("GitHub", l.github, "github"),
      PF.button("LinkedIn", l.linkedin, "linkedin"),
      PF.button(PF.ui("resume"), l.resume)
    ])
  ]);
};
