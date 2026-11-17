# Portfolio

Open `index.html` in a browser, or upload the whole folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Where to edit
All content lives in `js/content/`. The HTML contains no text.

| File | What it controls |
|---|---|
| `profile.js` | Navbar logo, headline, intro, about text, highlight numbers, page title |
| `links.js` | GitHub, LinkedIn, email, résumé PDFs (one per language) |
| `experience.js` | Work experience with bullet points |
| `skills.js` | Skill groups and items |
| `interests.js` | Interest cards (data, electrical engineering) |
| `projects.js` | Projects (copy a block to add one) |
| `education.js` | Education timeline (add courses and certifications here) |
| `ui.js` | Menu, headings and button labels |
| `site.js` | Sections and their order, default theme, scroll speed, electrical background |

Text that changes with the language is written `T("English", "Español")`.
Résumés: put `resume-en.pdf` and `resume-es.pdf` in the `resume/` folder.

## Structure
- `js/core/`: helpers, icons (including the language flags), theme toggle, scrolling, background
- `js/sections/`: one file per section
- `js/main.js`: builds the page
- `css/styles.css`: all styling

To add a new section, create `js/sections/<id>.js`, add its `<script>` tag to `index.html`, add the menu label to `js/content/ui.js`, and list `{ id: "<id>" }` in `js/content/site.js`.
