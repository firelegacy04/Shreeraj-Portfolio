# Portfolio Site

Personal portfolio for Shreeraj Chimanpure, a Computer Science student at Minnesota State University, Mankato. The site has two parts: a sidebar introduction (who I am, what I work on, and how to reach me) and a list of projects covering machine learning, computer vision, and full-stack work.

## How it's built

The site is plain **HTML, CSS, and vanilla JavaScript**. There are no frameworks, package installs, or build steps, so the files in this repository are exactly what the browser loads. I chose this deliberately: a portfolio is a small, mostly static page, and skipping the toolchain keeps it fast, easy to maintain, and free of dependency churn.

| File | Role |
|------|------|
| `index.html` | Page structure: the sidebar introduction and the container for the project list |
| `style.css` | All styling: colors, typography, and layout |
| `projects.js` | The project data, stored as a JavaScript array of objects |
| `script.js` | Reads the array from `projects.js` and renders each project into the page |

### Data-driven project list

Content is kept separate from presentation. Each project is one object in `projects.js` with a title, year, short description, technology tags, and an optional link. `script.js` loops over that array and builds the project entries in the order they are listed, so adding, removing, or reordering a project is a data change and never touches the markup or rendering code.

```js
{
  title: "Project name",
  year: "2026",
  description: "One or two sentences on what it does.",
  tags: ["Python", "SQL"],
  link: "https://example.com",
  linkLabel: "View on GitHub"
}
```

### Hosting

Because the site is fully static, with no server-side code, it can be served from any static host, such as GitHub Pages, straight from the repository.

## Running locally

Open `index.html` in a browser. No server or setup is required.

## Featured projects

- **NextGen RF Wi-Fi Channel Scanner**: Raspberry Pi scanner with SQLite storage, configurable channel scoring, and Random Forest forecasts of channel quality.
- **Alfalfa Tissue Segmentation Pipeline**: YOLO-based segmentation and lignin/pectin analysis of microscopy images, built with USDA ARS and the University of Minnesota.
- **MNIST Digit Classifier**: PyTorch CNN with a live Streamlit drawing demo.
