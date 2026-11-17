/* SITE STRUCTURE: which sections appear, and in what order.
   Each id must have a matching file in js/sections/. Remove a line to hide a section.
   "title" is optional: the key in ui.js to use as the heading (defaults to the id). */
PF.content.site = {
  sections: [
    { id: "about" },
    { id: "experience" },
    { id: "skills" },
    { id: "interests" },
    { id: "projects" },
    { id: "education" },
    { id: "contact" }
  ],
  defaultLang: "auto",    // "en", "es", or "auto" (uses the visitor’s browser language)
  defaultTheme: "dark",   // "dark", "light", or "system" (first visit only; the toggle button overrides it)
  scrollDuration: 1200,   // milliseconds for navbar scrolling: 600 = quick, 1200 = relaxed, 2000 = slow, 0 = instant

  // Electrical background: a mesh of lines and nodes with pulses of current, energized near the mouse
  background: {
    enabled: true,        // false removes it
    spacing: 32,          // pixels between nodes
    radius: 170,          // size of the glow around the mouse
    dot: 1.2,             // node size
    density: 0.5,         // how many lines connect the nodes: 0 = none (just dots), 1 = full grid
    pulses: 22,           // number of traveling pulses on a large screen: 0 = none
    speed: 3,             // pulse speed (lines per second)
    textShield: 0.06      // glow strength behind text: 0 = none, 0.06 = barely visible, 1 = no shielding
  }
};
