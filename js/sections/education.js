PF.sections.education = function () {
  const e = PF.el;
  const items = PF.content.education.map(function (x) {
    const kids = [e("b", { text: PF.t(x.title) }), e("small", { text: PF.t(x.meta) })];
    if (PF.t(x.text)) kids.push(e("br"), PF.t(x.text));
    return e("div", {}, kids);
  });
  return PF.section("education", "education", [e("div", { "class": "tl" }, items)]);
};
