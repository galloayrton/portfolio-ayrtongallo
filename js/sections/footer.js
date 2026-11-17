PF.sections.footer = function () {
  return PF.el("footer", {}, [PF.el("div", { "class": "wrap", text: "© " + new Date().getFullYear() + " " + PF.content.profile.name })]);
};
