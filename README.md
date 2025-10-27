# WebStudio — HTML/CSS/JS Practice Site

**Short description**  
A small practice website built to learn and practice HTML, CSS and JavaScript. The project includes a portfolio page that fetches mock content from a Mock API and uses custom icons and fonts created with IcoMoon and Oleo Script.

## Repo contents
This repository contains the main pages and static assets:
- `index.html` — main page  
- `portfolio.html` — portfolio page (loads content from a mock API)  
- `css/` — stylesheets  
- `js/` — JavaScript logic  
- `images/` — images and media

(These files were verified in the repo root.) :contentReference[oaicite:1]{index=1}

---

## Features
- Hand-coded responsive HTML & CSS pages (learning project).  
- Basic JavaScript to load and display data on the portfolio page from a Mock API.  
- Custom icons created with **IcoMoon**.  
- Custom font / typography using **Oleo Script**.  
- Simple, easy-to-read structure — good for beginners and portfolio demos.

---

## Technologies
- HTML5  
- CSS3  
- JavaScript (vanilla)  
- Mock API service for demo content (used to populate portfolio items)  
- IcoMoon (icons)  
- Oleo Script (font)

---

## How to run locally
1. Clone the repo:
   git clone https://github.com/ivaniln/webstudio.git
   cd webstudio
2. Open index.html (or portfolio.html) in your browser:
   double-click file, or run a simple static server if you prefer:
   python -m http.server 8000
   then open http://localhost:8000

---

## Mock API (portfolio)
The portfolio page fetches demo data from a Mock API to render project items / text.

---

## Icons & Fonts
Icons were generated with IcoMoon — check css/ and images/ or the generated icon font files for inclusion details.

Typeface used: Oleo Script — font files and @font-face declarations are included in the project (check css/).

---

## Recommended edits / TODOs

Replace mock API with real content or a custom JSON file for offline demo.

Add simple accessibility improvements (alt attributes, roles, keyboard navigation).

Minify CSS/JS for production and add a basic meta + manifest if you want PWA-ish behavior.

Add README badges (optional): license, build status, etc.
