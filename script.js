const programmingLanguages = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Git", icon: "git" },
];

const projects = [
  {
    name: "Join",
    description: "Beschreibung von Projekt 1",
    tech: "HTML | CSS | JavaScript | Firebase",
    image: "projekt1.png",
    link: "https://example.com/projekt1",
  },
  {
    name: "Sharkie",
    description: "Beschreibung von Projekt 2",
    tech: "HTML | CSS | JavaScript",
    image: "projekt2.png",
    link: "https://example.com/projekt2",
  },
  {
    name: "Pokedex",
    description: "Beschreibung von Projekt 3",
    tech: "HTML | CSS | JavaScript",
    image: "projekt3.png",
    link: "https://example.com/projekt3",
  },
];

const container = document.querySelector(".skill-badges-container");

programmingLanguages.forEach((lang) => {
  container.innerHTML += `
    <div class="skill-item">
      ${icons[lang.icon](30)}
      <p>${lang.name}</p>
    </div>
  `;
});

projects.forEach((project) => {
  const projectList = document.getElementById("project-list");
  const projectRow = document.createElement("li");
  projectRow.classList.add("project-row");

  projectRow.innerHTML = `
  <div class="project-name-tech">
    <span class="project-name">${project.name}</span>
    <span class="project-tech">${project.tech}</span>
    <div id="project-info" class="project-info"></div>
  </div>
  `;

  projectRow.addEventListener("mouseover", () => {
    const projectInfo = projectRow.querySelector(".project-info");
    projectInfo.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="project-image" />
  `;
  });

  projectRow.addEventListener("mouseout", () => {
    const projectInfo = projectRow.querySelector(".project-info");
    projectInfo.innerHTML = "";
  });

  projectList.appendChild(projectRow);
});

const infoTrack = document.querySelector(".info-track");
const infoItems = [
  "Frontend Developer",
  "Based in Füssen, Germany",
  "Available for remote work",
  "Fachinformatiker für Anwendungsentwicklung (IHK)",
];

const duplicatedItems = [...infoItems, ...infoItems];
infoTrack.innerHTML = duplicatedItems
  .map((item) => `<div class="info-item"><h3>${item}</h3></div>`)
  .join("");

let position = 0;
const animationSpeed = 0.5;

function animateInfoStrip() {
  const trackWidth = infoTrack.scrollWidth / 2;

  position += animationSpeed;

  if (position >= trackWidth) {
    position = 0;
  }

  infoTrack.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(animateInfoStrip);
}

animateInfoStrip();
