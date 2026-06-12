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
    image: "assets/images/dummy.png",
    link: "https://example.com/projekt1",
    github: "https://github.com/guhe78/join",
    id: "project-1",
  },
  {
    name: "Sharkie",
    description: "Beschreibung von Projekt 2",
    tech: "HTML | CSS | JavaScript",
    image: "assets/images/sharkie.png",
    link: "https://example.com/projekt2",
    github: "https://github.com/guhe78/sharkie",
    id: "project-2",
  },
  {
    name: "Pokedex",
    description: "Beschreibung von Projekt 3",
    tech: "HTML | CSS | JavaScript",
    image: "assets/images/pokedex.png",
    link: "https://example.com/projekt3",
    github: "https://github.com/guhe78/pokedex",
    id: "project-3",
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
  const projectRow = document.getElementById(project.id);
  const projectInfo = document.getElementById(`project-info-container`);

  projectRow.innerHTML = `
  <span id="project-name-${project.id}" class="project-name">${project.name}</span>
  <span class="project-tech">${project.tech}</span>
  `;
  const projectName = document.getElementById(`project-name-${project.id}`);

  projectRow.addEventListener("mouseover", () => {
    projectName.innerHTML += icons.arrow_outward(14);
    projectInfo.innerHTML = `
    <div class="${project.id} project-image">
      <img src="${project.image}" alt="${project.name}" />
    </div>
  `;
  });

  projectRow.addEventListener("mouseout", () => {
    projectName.innerHTML = project.name;
    projectInfo.innerHTML = "";
  });
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
  .join(icons.dot(7));

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
