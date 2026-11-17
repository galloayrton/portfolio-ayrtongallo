# Ayrton Gallo – Portfolio

A bilingual (English / Spanish) personal portfolio that presents my work in **data** and my studies in **electrical engineering**. It is built with plain HTML, CSS and JavaScript, with no frameworks and no build step.

**🔗 Live site:** [your-live-url-here](https://your-live-url-here)

<!-- Add a screenshot at docs/preview.png, then remove this line and the closing marker -> ![Portfolio preview](docs/preview.png) -->

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![Cloudflare](https://img.shields.io/badge/Hosted%20on-Cloudflare-F38020?logo=cloudflare&logoColor=white)

## What this project shows

- **Content-driven design:** the HTML is an empty shell. Every piece of text, link and list comes from small JavaScript data files, so the whole site is edited without touching markup.
- **Bilingual by design:** English and Spanish live side by side in the data, with language flags in the navbar. The page picks the visitor's browser language on the first visit and remembers their choice.
- **Light and dark themes:** dark by default, with a toggle that remembers the visitor's preference.
- **Custom electrical background:** a canvas animation of a power-grid-style mesh with pulses of "current" that travel along the lines and energize near the cursor. It dims behind text so reading stays easy, pauses in hidden tabs, and respects the "reduce motion" system setting.
- **Smooth, tunable scrolling:** a small scroll module replaces the browser's fixed-speed smooth scroll, so the duration is a single setting.
- **Responsive and accessible:** works from phones to wide desktops, handles iPhone safe areas, and uses labelled buttons and semantic sections.
- **No dependencies:** no npm, no bundler, no framework. Open `index.html` and it works.

## Tech

| Area | Choice |
|---|---|
| Markup and styling | HTML5, CSS3 (custom properties for theming) |
| Logic | Vanilla JavaScript, organised as small modules on a shared namespace |
| Graphics | Canvas 2D API |
| Hosting | Cloudflare (static assets), deployed from this repo on every push |

## Project structure

```
index.html            Empty shell: loads CSS and scripts
css/styles.css        All styling and theme colours
resume/               Résumé PDFs (English and Spanish)
js/
  main.js             Builds the page and handles language switching
  core/               Helpers, icons, theme toggle, scrolling, background
  sections/           One file per section (nav, hero, about, experience,
                      skills, interests, projects, education, contact, footer)
  content/            All the text and data (the only files I edit)
```

## Run it locally

No setup needed.

```bash
git clone https://github.com/galloayrton/<repo-name>.git
cd <repo-name>
```

Then open `index.html` in a browser. To serve it instead, any static server works, for example `python -m http.server`.

## Customize

All content lives in `js/content/`:

| File | Controls |
|---|---|
| `profile.js` | Name, navbar logo, headline, intro, about text, highlight numbers |
| `links.js` | GitHub, LinkedIn, email, résumé PDFs |
| `experience.js` | Work experience |
| `skills.js` | Skill groups |
| `interests.js` | Interest cards |
| `projects.js` | Projects (copy a block to add one) |
| `education.js` | Education timeline |
| `ui.js` | Menu, headings and button labels |
| `site.js` | Section order, default theme, scroll speed, background settings |

Text that changes with the language is written as `T("English", "Español")`.

## Deployment

The site is static, so it deploys anywhere. This one runs on Cloudflare, connected to the repository: every push to the main branch redeploys automatically.

## About me

I'm an electrical engineering student at UTN-FRC (Córdoba, Argentina) with 2+ years of experience in tech, building data pipelines, dashboards and automation. My interests are data analysis, data engineering and ML on one side, and renewable energy, power systems and automatic control on the other.

- GitHub: [@galloayrton](https://github.com/galloayrton)
- LinkedIn: [ayrtongallo](https://www.linkedin.com/in/ayrtongallo)
- Email: ayrton.ngs@gmail.com