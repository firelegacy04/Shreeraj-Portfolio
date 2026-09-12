document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("project-list");
  if (!list) return;

  if (!Array.isArray(projects) || projects.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No projects yet — add one in projects.js.";
    list.appendChild(empty);
    return;
  }

  projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project";

    const head = document.createElement("div");
    head.className = "project-head";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title || "Untitled project";
    head.appendChild(title);

    if (project.year) {
      const year = document.createElement("span");
      year.className = "project-year";
      year.textContent = project.year;
      head.appendChild(year);
    }

    article.appendChild(head);

    if (project.description) {
      const desc = document.createElement("p");
      desc.className = "project-desc";
      desc.textContent = project.description;
      article.appendChild(desc);
    }

    const footer = document.createElement("div");
    footer.className = "project-footer";

    if (Array.isArray(project.tags) && project.tags.length > 0) {
      const tagList = document.createElement("ul");
      tagList.className = "project-tags";
      project.tags.forEach((tag) => {
        const li = document.createElement("li");
        li.textContent = tag;
        tagList.appendChild(li);
      });
      footer.appendChild(tagList);
    }

    if (project.link) {
      const link = document.createElement("a");
      link.className = "project-link";
      link.href = project.link;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = project.linkLabel || "View project";
      footer.appendChild(link);
    }

    article.appendChild(footer);
    list.appendChild(article);
  });
});
