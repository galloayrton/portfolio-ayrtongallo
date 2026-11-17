/* Projects with All / Electrical / Data filter buttons. */
PF.sections.projects = function () {
  const e = PF.el;
  const bar = e("div", { "class": "filters" });
  const grid = e("div", { "class": "grid" });

  function card(p) {
    const kids = p.kinds.map(function (k) { return e("span", { "class": "pill " + k, text: PF.ui(k) }); });
    kids.push(e("h3", { text: PF.t(p.title) }), e("p", { text: PF.t(p.description) }), e("div", { "class": "stack", text: p.stack.join(" · ") }));
    if (p.link) kids.push(e("a", { "class": "more", href: p.link, text: PF.ui("view") }));
    return e("article", { "class": "card" }, kids);
  }

  function draw() {
    bar.replaceChildren.apply(bar, ["all", "ee", "data"].map(function (f) {
      const b = e("button", { type: "button", text: PF.ui(f) });
      if (f === PF.state.filter) b.className = "on";
      b.addEventListener("click", function () { PF.state.filter = f; draw(); });
      return b;
    }));
    grid.replaceChildren.apply(grid, PF.content.projects
      .filter(function (p) { return PF.state.filter === "all" || p.kinds.indexOf(PF.state.filter) > -1; })
      .map(card));
    if (PF.newTabLinks) PF.newTabLinks();
  }
  draw();
  return PF.section("projects", "projects", [bar, grid]);
};
