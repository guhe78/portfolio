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

projects.forEach((project) => {
  const projectRow = document.getElementById(project.id);
  const projectInfo = document.getElementById(`project-info-container`);

  projectRow.innerHTML = `
  <span id="project-name-${project.id}" class="project-name">${project.name}</span>
  <span class="project-tech">${project.tech}</span>
  `;
  const projectName = document.getElementById(`project-name-${project.id}`);

  projectRow.addEventListener("mouseenter", () => {
    projectName.innerHTML = project.name + icons.arrow_outward(14);
    projectInfo.innerHTML = `
    <div class="${project.id} project-image">
      <img src="${project.image}" alt="${project.name}" />
    </div>
  `;
  });

  projectRow.addEventListener("mouseleave", () => {
    projectName.innerHTML = project.name;
    projectInfo.innerHTML = "";
  });
});
