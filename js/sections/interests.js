/* Interests: one card for data, one for electrical engineering. */
PF.sections.interests = function () {
  const e = PF.el;
  const cards = PF.content.interests.map(function (i) {
    return e("div", { "class": "card" }, [
      e("span", { "class": "pill " + i.category, text: PF.ui(i.category) }),
      e("h3", { text: PF.t(i.title) }),
      e("p", { text: PF.t(i.text) }),
      e("ul", { "class": "sk" }, i.tags.map(function (t) { return e("li", { text: PF.t(t) }); }))
    ]);
  });
  return PF.section("interests", "interests", [e("div", { "class": "grid" }, cards)]);
};
