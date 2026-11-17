/* About text plus the highlight numbers. */
PF.sections.about = function () {
  const e = PF.el, p = PF.content.profile;
  const stats = (p.highlights || []).map(function (h) {
    return e("div", { "class": "stat" }, [e("b", { text: h.value }), e("span", { text: PF.t(h.label) })]);
  });
  const kids = [e("p", { "class": "lead", text: PF.t(p.about) })];
  if (stats.length) kids.push(e("div", { "class": "stats" }, stats));
  return PF.section("about", "about", kids);
};
