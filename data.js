const placeholder = (color) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='${encodeURIComponent(color)}'/%3E%3C/svg%3E`;

// Tries image formats in order; falls back to placeholder if none load.
// Called via onerror on <img> tags. Drop any supported format in images/<id>.*
const IMG_FORMATS = ["jpeg", "png", "jpg", "avif", "webp", "gif"];
function imgFallback(el, id) {
  const ext = el.src.split("/").pop().split(".").pop();
  const next = IMG_FORMATS[IMG_FORMATS.indexOf(ext) + 1];
  if (next) {
    el.src = `images/${id}.${next}`;
  } else {
    el.onerror = null;
    el.src = placeholder("#e8e8e8");
  }
}

const essays = [
];

const projects = [
  {
    id: "china-dev",
    title: "China Dev",
    blurb: "Geocoded economic analysis of Chinese aid returns in East Africa.",
    tags: ["R", "Quarto", "Git"],
    repoUrl: "https://github.com/Saltzman-McGeever/china-dev",
    content: "projects/china-dev.html",
  },
  {
    id: "modular",
    title: "Modular",
    blurb: "Organizational sticky notes app for macOS.",
    tags: ["Swift", "macOS"],
    repoUrl: "https://github.com/ljsaltzman/Modular",
  },
  {
    id: "gamestate",
    title: "gamestate",
    blurb: "Typescript/HTML engine to visualize any stats-era MLB game",
    tags: ["TypeScript", "HTML"],
  },
];
