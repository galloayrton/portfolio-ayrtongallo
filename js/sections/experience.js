/* Work experience timeline with bullet points. */
PF.sections.experience = function () {
  const e = PF.el;
  const items = PF.content.experience.map(function (x) {
    return e("div", {}, [
      e("b", { text: PF.t(x.role) + " · " + x.company }),
      e("small", { text: PF.t(x.dates) }),
      e("ul", {}, x.bullets.map(function (b) { return e("li", { text: PF.t(b) }); }))
    ]);
  });
  return PF.section("experience", "experience", [e("div", { "class": "tl" }, items)]);
};
