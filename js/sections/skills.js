PF.sections.skills = function () {
  const e = PF.el;
  const cards = PF.content.skills.map(function (s) {
    return e("div", { "class": "card" }, [
      e("span", { "class": "pill " + s.category, text: PF.ui(s.category) }),
      e("h3", { text: PF.t(s.title) }),
      e("ul", { "class": "sk" }, s.items.map(function (i) { return e("li", { text: PF.t(i) }); }))
    ]);
  });
  return PF.section("skills", "skills", [e("div", { "class": "grid" }, cards)]);
};
