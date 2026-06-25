const projects = [
  {
    name: "Join",
    description:
      "Dies ist ein Projekt-Management-Tool. Man kann Kontakte anlegen, Aufgaben erstellen und diesen dann Mitglieder zuweisen. Es gibt eine Kanban-Ansicht, in der man die Aufgaben per Drag & Drop verschieben kann. Ich habe es mit drei weiteren Teilnehmern in einem Team entwickelt.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    techIcons: ["html", "css", "javascript", "firebase"],
    image: "assets/images/join.png",
    link: "https://join.guenter-heldt.de/",
    github: "https://github.com/guhe78/join",
    id: "project-1",
  },
  {
    name: "Sharkie",
    description:
      "Dies ist ein kleines 2D-Scrolling Game. Man steuert einen kleinen Hai durch zwei Level und muss Gegner besiegen. Am Ende wartet ein Endgegner der ebenfalls besiegt werden muss.",
    tech: ["HTML", "CSS", "JavaScript"],
    techIcons: ["html", "css", "javascript"],
    image: "assets/images/sharkie.png",
    link: "https://sharkie.guenter-heldt.de/",
    github: "https://github.com/guhe78/sharkie",
    id: "project-2",
  },
  {
    name: "Pokedex",
    description:
      "Dies ist eine Web-App. Sie zeigt Informationen zu allen Pokemons. Dabei greift sie auf Daten von 'The RESTful Pokémon API' zu.",
    tech: ["HTML", "CSS", "JavaScript"],
    techIcons: ["html", "css", "javascript"],
    image: "assets/images/pokedex.png",
    link: "https://pokedex.guenter-heldt.de/",
    github: "https://github.com/guhe78/pokedex",
    id: "project-3",
  },
];

function initProjectsSection() {
  projects.forEach((project, index) => {
    const projectRow = document.getElementById(project.id);
    const projectInfo = document.getElementById(`project-info-container`);
    let number = index + 1;

    projectRow.innerHTML = `
  <span id="project-name-${project.id}" class="project-name">${project.name}</span>
  <span class="project-tech">${project.tech.join(" | ")}</span>
  `;
    const projectName = document.getElementById(`project-name-${project.id}`);

    projectRow.addEventListener("click", () => {
      const dialogContent = document.getElementById("dialog-content");
      dialogContent.innerHTML = `
      <div class="project-info-dialog">
        <div class="project-info-header">
          <p class="project-number">0${number}</p>
          <h2>${project.name}</h2>
        </div>
        <div class="project-info-tech">
          <h3>Was ist das?</h3>
            <p class="karla-font">${project.description}</p>
            <p>${projectIconsName(project.techIcons, project.tech)}</p>
        </div>
        <div class="project-links-container">
          <a href="${project.github}" target="_blank" class="button">GitHub ${icons.arrow_outward(14)}</a>
          <a href="${project.link}" target="_blank" class="button">Live ${icons.arrow_outward(14)}</a>
        </div>
      </div>
      <img src="${project.image}" alt="${project.name}" />
      `;
      const dialog = document.getElementById("dialog");
      openDialog();
    });

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

  function projectIconsName(iconsArray, names) {
    let result = "";
    for (let i = 0; i < iconsArray.length; i++) {
      result += `${icons[iconsArray[i]](24)} ${names[i]} `;
    }
    return result;
  }
}
