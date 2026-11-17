/* Core helpers. Loaded first: creates the PF namespace and the T() translation helper. */
window.PF = { content: {}, sections: {}, state: { lang: "en", filter: "all" } };

/* T("English", "Español") marks text that changes with the language. */
function T(en, es) { return { en: en, es: es }; }

/* PF.t(x): text in the current language (plain strings pass through). PF.ui(key): interface string. */
PF.t = function (v) { return (v && typeof v === "object") ? (v[PF.state.lang] || v.en) : v; };
PF.ui = function (key) { return PF.t(PF.content.ui[key]); };

/* PF.el(tag, attributes, children). Use text: "..." for safe text content. */
PF.el = function (tag, props, kids) {
  const n = document.createElement(tag);
  Object.keys(props || {}).forEach(function (k) {
    if (k === "text") n.textContent = props[k]; else n.setAttribute(k, props[k]);
  });
  (kids || []).forEach(function (c) { n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
  return n;
};

/* A page section with its heading. */
PF.section = function (id, titleKey, kids) {
  return PF.el("section", { id: id }, [PF.el("h2", { text: PF.ui(titleKey) })].concat(kids));
};

/* A link styled as a button, with an optional icon from PF.icons. */
PF.button = function (label, href, icon, primary) {
  const a = PF.el("a", { "class": "btn" + (primary ? " p" : ""), href: href });
  if (icon) a.insertAdjacentHTML("beforeend", PF.icons[icon]);
  a.appendChild(document.createTextNode(label));
  return a;
};
