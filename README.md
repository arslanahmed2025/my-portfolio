# Arslan Ahmed — Portfolio (Pure HTML/CSS/JS)

A static portfolio site — no build step, no framework, no backend.

## Before you deploy — 3 things to update

1. **Your links** — replace every `your-username` and `your-email@example.com`
   in `index.html` and `script.js` with your real GitHub, LinkedIn and email.

2. **Project screenshots** — add real screenshots to `assets/projects/`
   (e.g. `nexbuy.png`, `zaptro.png`...) matching the `image` path in each
   project object inside `script.js`. If an image is missing, a colored
   placeholder with the project's initials shows automatically — nothing
   breaks.

3. **Project GitHub links** — in `script.js`, update each project's `github`
   field to point at that project's real repository.

4. **Resume** — put your actual resume PDF in the project root as
   `resume.pdf` (same name the site links to). If you skip this, the
   Download/preview buttons will 404.

## Run locally

Just open `index.html` in a browser — no server needed. Or, for live-reload
while editing, use the VS Code "Live Server" extension.

## Deploy to Netlify

**Option A — drag and drop (fastest):**
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio-html` folder onto the page
3. Netlify gives you a live URL immediately (e.g. `random-name.netlify.app`)
4. You can rename the site (Site settings → Change site name) for a nicer URL

**Option B — connect to GitHub (auto-redeploys on every push):**
1. Push this folder to a GitHub repository
2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
3. Pick your repo, leave build command empty, set publish directory to `/`
4. Deploy — Netlify rebuilds automatically every time you push

## Editing projects

All project data lives in one place — the `PROJECTS` array at the top of
`script.js`. Add, remove, or edit objects there; the grid re-renders
automatically, no HTML editing needed.
