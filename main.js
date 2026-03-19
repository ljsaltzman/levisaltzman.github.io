function projectItemHTML(item) {
  const url = `post.html?type=project&id=${item.id}`;
  const meta = item.tags?.length
    ? `<span class="project-meta">${item.tags.join(" · ")}</span>`
    : "";

  return `
    <a class="project-item" href="${url}">
      <img class="project-img" src="${item.image ?? `images/${item.id}.jpeg`}" alt="${item.title}" loading="lazy" onerror="imgFallback(this,'${item.id}')" />
      <div class="project-title">${item.title}</div>
      <div class="project-blurb">${item.blurb}</div>
      ${meta}
    </a>
  `;
}

function renderProjects(items) {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = items.length
    ? items.map(item => projectItemHTML(item)).join("")
    : `<p style="font-size:0.875rem;color:var(--muted)">Nothing here yet.</p>`;
}

renderProjects(projects);

function essayItemHTML(item) {
  const url = item.content ? item.content : `post.html?type=essay&id=${item.id}`;
  const meta = item.date ? `<span class="project-meta">${item.date}</span>` : "";
  return `
    <a class="project-item" href="${url}">
      <img class="project-img" src="${item.image ?? `images/${item.id}.jpeg`}" alt="${item.title}" loading="lazy" onerror="imgFallback(this,'${item.id}')" />
      <div class="project-title">${item.title}</div>
      <div class="project-blurb">${item.blurb}</div>
      ${meta}
    </a>
  `;
}

function renderEssays(items) {
  const list = document.getElementById("essays-list");
  if (!list) return;
  list.innerHTML = items.length
    ? items.map(item => essayItemHTML(item)).join("")
    : `<p style="font-size:0.875rem;color:var(--muted)">Nothing here yet.</p>`;
}

renderEssays(essays);

// Tab switching
(function () {
  const tabBar = document.querySelector(".tab-bar");
  if (!tabBar) return;

  tabBar.addEventListener("click", function (e) {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    tabBar.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.tab;
    document.getElementById("projects").hidden = target !== "projects";
    document.getElementById("essays").hidden = target !== "essays";
  });
})();
