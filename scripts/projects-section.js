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

const dialogContent = document.getElementById("dialog-content");
const dialog = document.getElementById("dialog");

/**
 * Initializes the projects section by rendering each project in the DOM and setting up event listeners for user interactions. It handles click events to open a dialog with detailed project information, as well as mouse enter and leave events to show additional project info on hover.
 */
function initProjectsSection() {
  projects.forEach((project, index) => {
    const projectInfo = document.getElementById(`project-info-container`);
    const projectRow = document.getElementById(project.id);
    let number = index + 1;

    projectRow.innerHTML = projectInfoShortTemplate(project);
    const projectName = document.getElementById(`project-name-${project.id}`);

    initEventListeners(projectRow, projectName, projectInfo, project, number);
  });
}

/**
 * Initializes event listeners for a project row, including click, mouseenter, and mouseleave events.
 * @param {HTMLElement} projectRow - The DOM element representing the project row.
 * @param {HTMLElement} projectName - The DOM element representing the project name.
 * @param {HTMLElement} projectInfo - The DOM element representing the project info container.
 * @param {Object} project - The project data object.
 * @param {number} number - The project number.
 */
function initEventListeners(projectRow, projectName, projectInfo, project, number) {
  projectRow.addEventListener("click", () => {
    renderDialogContent(project, number);
    openDialog();
    nextProject(number - 1);
  });

  projectRow.addEventListener("mouseenter", () => {
    projectName.innerHTML = project.name + icons.arrow_outward(14);
    projectInfo.innerHTML = projectInfoHoverTemplate(project);
  });

  projectRow.addEventListener("mouseleave", () => {
    projectName.innerHTML = project.name;
    projectInfo.innerHTML = "";
  });
}

/**
 * Renders the dialog content for a project and sets up the close button event listener.
 * @param {Object} project - The project data object.
 * @param {number} number - The project number.
 */
function renderDialogContent(project, number) {
  dialogContent.innerHTML = projectInfoDialogTemplate(project, number);
  const closeDialogButton = document.getElementById("close-dialog-button");
  closeDialogButton.addEventListener("click", closeDialog);
}

/**
 * Sets up the event listener for the next project button in the dialog.
 * @param {number} index - The current project index.
 */
function nextProject(index) {
  const nextIndex = (index + 1) % projects.length;
  const nextProjectButton = document.getElementById("next-project-button");

  nextProjectButton.addEventListener("click", () => {
    renderDialogContent(projects[nextIndex], nextIndex + 1);
    nextProject(nextIndex);
  });
}

/**
 * Generates the HTML for project icons with their corresponding names.
 * @param {Array} iconsArray - An array of icon names.
 * @param {Array} names - An array of icon names.
 * @returns {string} The HTML string for the project icons with names.
 */
function projectIconsName(iconsArray, names) {
  let result = "";
  for (let i = 0; i < iconsArray.length; i++) {
    result += `<span class="project-icon">${icons[iconsArray[i]](24)} ${names[i]}</span>`;
  }
  return result;
}
