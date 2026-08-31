// ===== Project data — edit this array to add/update projects =====
// image: path to a screenshot in assets/projects/ (or leave "" for a placeholder)
// github: link to the project's repository
const PROJECTS = [
  {
    name: "NexBuy",
    tagline: "E-commerce admin panel",
    desc: "Full CRUD admin panel — Category, Product, Customer, Cart modules with a Bootstrap UI.",
    stack: ["ASP.NET Core MVC", "EF Core", "SQL Server", "Bootstrap"],
    image: "assets/projects/nexbuy.png",
    github: "https://github.com/your-username/nexbuy",
  },
  {
    name: "Zaptro",
    tagline: "React e-commerce platform",
    desc: "Storefront with Clerk authentication, geolocation-based address detection, and live product listings via FakeStoreAPI.",
    stack: ["React", "Clerk", "FakeStoreAPI"],
    image: "assets/projects/zaptro.png",
    github: "https://github.com/your-username/zaptro",
  },
  {
    name: "WheelHub",
    tagline: "Car rental app",
    desc: "Angular car rental application built with modern standalone component conventions.",
    stack: ["Angular", "TypeScript"],
    image: "assets/projects/wheelhub.png",
    github: "https://github.com/your-username/wheelhub",
  },
  {
    name: "EventSphere",
    tagline: "Event management — Festava theme",
    desc: "Team project. Owned the User, Participant & Registration Management module — registration flow, waitlists, ticket numbers.",
    stack: ["ASP.NET Core MVC", "EF Core", "SQL Server"],
    image: "assets/projects/eventsphere.png",
    github: "https://github.com/your-username/eventsphere",
  },
  {
    name: "JobPortal",
    tagline: "Job listing & hiring platform",
    desc: "Role-based portal for Admin, Employer and JobSeeker roles — employer profiles and job-posting CRUD.",
    stack: ["ASP.NET Core MVC", "Identity"],
    image: "assets/projects/jobportal.png",
    github: "https://github.com/your-username/jobportal",
  },
  {
    name: "Hospital Management System",
    tagline: "Clinic booking & records",
    desc: "Role-based system for Admin, Doctor, Receptionist and Patient — appointments, prescriptions, medical history.",
    stack: ["ASP.NET Core MVC", "EF Core", "Identity"],
    image: "assets/projects/hms.png",
    github: "https://github.com/your-username/hospital-management-system",
  },
  {
    name: "Social Media Platform",
    tagline: "Posts, follows & notifications",
    desc: "Core social features — posts, likes, comments, follows and real-time-style notifications.",
    stack: ["ASP.NET Core MVC", "EF Core"],
    image: "assets/projects/social.png",
    github: "https://github.com/your-username/social-media-platform",
  },
  {
    name: "EcomProject",
    tagline: "Customer storefront",
    desc: "Customer-facing storefront, deployed live on MonsterASP.NET.",
    stack: ["ASP.NET Core MVC", "SQL Server"],
    image: "assets/projects/ecomproject.png",
    github: "https://github.com/your-username/ecomproject",
  },
];

// ===== Render project cards =====
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  const statCount = document.getElementById("statCount");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => {
    const initials = p.name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    const thumb = p.image
      ? `<img src="${p.image}" alt="${p.name} screenshot" class="project-thumb"
           onerror="this.outerHTML='<div class=\\'project-thumb-fallback\\'>${initials}</div>'" />`
      : `<div class="project-thumb-fallback">${initials}</div>`;

    return `
      <article class="project-card">
        ${thumb}
        <div class="project-body">
          <h3 class="project-name">${p.name}</h3>
          <p class="project-tagline">${p.tagline}</p>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.stack.map((s) => `<span>${s}</span>`).join("")}
          </div>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View on GitHub
          </a>
        </div>
      </article>
    `;
  }).join("");

  if (statCount) statCount.textContent = PROJECTS.length;
}

// ===== Mobile nav toggle =====
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach((link) =>
    link.addEventListener("click", () => nav.classList.remove("open"))
  );
}

// ===== Footer year =====
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNav();
  setYear();
});
