/* About paragraphs plus the highlight numbers. */
PF.sections.about = function () {
  const e = PF.el, p = PF.content.profile;
  const paras = (Array.isArray(p.about) ? p.about : [p.about]).map(function (t) {
    return e("p", { "class": "lead", text: PF.t(t) });
  });
  const stats = (p.highlights || []).map(function (h) {
    return e("div", { "class": "stat" }, [e("b", { text: h.value }), e("span", { text: PF.t(h.label) })]);
  });
  if (stats.length) paras.push(e("div", { "class": "stats" }, stats));
  return PF.section("about", "about", paras);
};
