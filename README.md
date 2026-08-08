# VERT Landscaping — Website

A marketing website built for **VERT Landscaping**, a landscape design, construction, and garden care company based in Addis Ababa, Ethiopia.

🔗 **Live site:** https://vertlandscaping.netlify.app/

> This repository is shared as a **portfolio piece** to showcase the design and front-end development work. It is client-owned content — see [License](#license) below.

## About the project

VERT needed a clean, nature-inspired site to present their services and showcase a growing portfolio of completed landscape projects — from private residences to institutional and commercial sites. The site was built with a custom design system, a dedicated project gallery, and individual case-study pages for each completed project.

## Pages

| Page | Description |
|---|---|
| `index.html` | Homepage — introduction to VERT and its services |
| `about.html` | About the company |
| `services.html` | Design, construction, garden care, and consulting services |
| `projects.html` | Project gallery overview |
| `projects-detailed.html` | Extended project showcase |
| `projects/*.html` | Individual project case studies (8 projects — residences, parks, and commercial/institutional sites) |
| `contact.html` | Contact information |

## Tech stack

- **HTML5** — semantic, multi-page structure
- **CSS3** — custom design system (no framework), responsive layout
- **Vanilla JavaScript** — navigation and interactive behavior (`script.js`)
- **Google Fonts** — Manrope & Playfair Display
- Open Graph meta tags for link previews, favicon, and accessibility touches (skip link, alt text)

## Project structure

```
├── index.html, about.html, services.html, projects.html, contact.html   # top-level pages
├── projects-detailed.html                                                # extended project showcase
├── projects/                                                             # individual project case-study pages
├── images/                                                               # project photography, logo
├── styles.css
├── script.js
```

## Running locally

No build step required — it's a static site.

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## License

This code is shared **for portfolio and demonstration purposes only**. VERT Landscaping's brand, name, logo, and written content remain the property of the client — see [`LICENSE`](./LICENSE) for full terms. Please don't reuse, redistribute, or repurpose the branded content without permission.
