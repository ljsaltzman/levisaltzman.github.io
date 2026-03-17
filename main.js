function tileHTML(item, type) {
  const url = `post.html?type=${type}&id=${item.id}`;
  const meta = type === "essay"
    ? `<span class="tile-meta">${item.date}</span>`
    : item.tags?.length
      ? `<span class="tile-meta">${item.tags.join(" · ")}</span>`
      : "";

  return `
    <a class="tile" href="${url}">
      <img class="tile-img" src="${item.image ?? `images/${item.id}.jpeg`}" alt="${item.title}" loading="lazy" onerror="imgFallback(this,'${item.id}')" />
      <div class="tile-body">
        <div class="tile-title">${item.title}</div>
        <div class="tile-blurb">${item.blurb}</div>
        ${meta}
      </div>
    </a>
  `;
}

function essayItemHTML(item) {
  const url = `post.html?type=essay&id=${item.id}`;
  return `
    <a class="essay-item" href="${url}">
      <div class="essay-title">${item.title}</div>
      <div class="essay-date">${item.date}</div>
      <div class="essay-blurb">${item.blurb}</div>
    </a>
  `;
}

function renderProjects(items) {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = items.length
    ? items.map(item => tileHTML(item, "project")).join("")
    : `<p class="tile-empty">Nothing here yet.</p>`;
}

function renderEssays(items) {
  const grid = document.getElementById("essays-grid");
  grid.innerHTML = items.length
    ? items.map(item => essayItemHTML(item)).join("")
    : `<p class="tile-empty">Nothing here yet.</p>`;
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects(projects);
renderEssays(essays);
