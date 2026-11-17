/* SITE STRUCTURE: which sections appear, and in what order.
   Each id must have a matching file in js/sections/. Remove a line to hide a section.
   "title" is optional: the key in ui.js to use as the heading (defaults to the id). */
PF.content.site = {
  sections: [
    { id: "about" },
    { id: "skills" },
    { id: "projects" },
    { id: "education", title: "eduTitle" },
    { id: "contact" }
  ],
  defaultLang: "auto",    // "en", "es", or "auto" (uses the visitor’s browser language)
  defaultTheme: "dark",   // "dark", "light", or "system" (first visit only; the toggle button overrides it)
  scrollDuration: 1200,   // milliseconds for navbar scrolling: 600 = quick, 1200 = relaxed, 2000 = slow, 0 = instant

  // Dotted background that lights up near the mouse
  background: {
    enabled: true,        // false removes it
    spacing: 28,          // pixels between dots
    radius: 170,          // size of the glow around the mouse
    dot: 1.1              // resting dot size
  }
};
