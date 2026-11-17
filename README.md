# Portfolio

Open `index.html` in a browser, or upload the whole folder to any static host (GitHub Pages, Netlify, Vercel).

## Where to edit
All content lives in `js/content/`. The HTML contains no text.

| File | What it controls |
|---|---|
| `profile.js` | Name, navbar logo, headline, intro, about text |
| `links.js` | GitHub, LinkedIn, email, résumé |
| `skills.js` | Skill groups and items |
| `projects.js` | Projects (copy a block to add one) |
| `education.js` | Education and experience timeline |
| `ui.js` | Menu, headings and button labels |
| `site.js` | Which sections show, and in what order |

Text that changes with the language is written `T("English", "Español")`.

## Structure
- `js/core/`: helpers, icons, theme toggle
- `js/sections/`: one file per section (nav, hero, about, skills, projects, education, contact, footer)
- `js/main.js`: builds the page
- `css/styles.css`: all styling

To add a new section, create `js/sections/<id>.js`, add its `<script>` tag to `index.html`, and list `{ id: "<id>" }` in `js/content/site.js`.
