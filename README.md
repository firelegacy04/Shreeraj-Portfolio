# Portfolio site

A simple two-part site: an introduction and a project list. No build
tools, frameworks, or installs needed — just HTML, CSS, and JS.

## Files

- `index.html` — page structure. Edit your name, tagline, bio, and
  contact links directly inside the marked sections.
- `style.css` — all styling (colors, fonts, layout).
- `projects.js` — **your project list.** This is the only file you
  need to touch to add or remove projects. See the comments at the
  top of the file for the exact format.
- `script.js` — reads `projects.js` and builds the project list on
  the page. You shouldn't need to edit this.

## Preview it locally

Just double-click `index.html` to open it in your browser. Since
everything is plain HTML/CSS/JS with no server-side code, that's
all it takes.

## Add or remove a project

Open `projects.js`:

- **To add one:** copy an entire block (from `{` to the matching `},`)
  and paste it into the list, then edit the values.
- **To remove one:** delete its entire block.

Projects appear on the page in the same order you list them here.

## Edit your introduction

Open `index.html` and find the section marked:

```html
<!-- SIDEBAR — your introduction. -->
```

Edit the name, role, bio, and contact links directly — they're plain
text and links, no special format required.

## Host it on GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io`
   for a root-level site, or any name for a project site).
2. Push these files to it:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a
   branch," choose the `main` branch and the `/ (root)` folder, then
   save.
5. GitHub will publish the site at `https://yourusername.github.io/`
   (if the repo is named `yourusername.github.io`) or
   `https://yourusername.github.io/your-repo/` otherwise. It usually
   takes a minute or two to go live after each push.
