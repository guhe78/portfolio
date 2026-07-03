const projects = [
  {
    name: "Join",
    descriptionGerman:
      "Dies ist ein Projekt-Management-Tool. Man kann Kontakte anlegen, Aufgaben erstellen und diesen dann Mitglieder zuweisen. Es gibt eine Kanban-Ansicht. Ich habe es mit drei weiteren Teilnehmern in einem Team entwickelt.",
    descriptionEnglish:
      "This is a project management tool. You can create contacts, create tasks, and assign members to them. There is a Kanban view. I developed it with three other participants in a team.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    techIcons: ["html", "css", "javascript", "firebase"],
    image: "assets/images/join.png",
    link: "https://join.guenter-heldt.de/",
    github: "https://github.com/guhe78/join",
    id: "project-1",
  },
  {
    name: "Sharkie",
    descriptionGerman:
      "Dies ist ein kleines 2D-Scrolling Game. Man steuert einen kleinen Hai durch zwei Level und muss Gegner besiegen. Am Ende wartet ein Endgegner der ebenfalls besiegt werden muss.",
    descriptionEnglish:
      "This is a small 2D scrolling game. You control a small shark through two levels and must defeat enemies. At the end, there is a final boss that must also be defeated.",
    tech: ["HTML", "CSS", "JavaScript"],
    techIcons: ["html", "css", "javascript"],
    image: "assets/images/sharkie.png",
    link: "https://sharkie.guenter-heldt.de/",
    github: "https://github.com/guhe78/sharkie",
    id: "project-2",
  },
  {
    name: "Pokedex",
    descriptionGerman:
      "Dies ist eine Web-App. Sie zeigt Informationen zu allen Pokemons. Dabei greift sie auf Daten von 'The RESTful Pokémon API' zu.",
    descriptionEnglish:
      "This is a web app. It shows information about all Pokémon. It uses data from 'The RESTful Pokémon API'.",
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
    let projectDescription =
      currentLanguage === "en" ? project.descriptionEnglish : project.descriptionGerman;

    projectRow.innerHTML = projectInfoShortTemplate(project, projectDescription, number);
    const projectName = document.getElementById(`project-name-${project.id}`);

    initEventListeners(projectRow, projectName, projectInfo, project, number, projectDescription);
  });
}

/**
 * Initializes event listeners for a project row, including click, mouseenter, and mouseleave events.
 * @param {HTMLElement} projectRow - The DOM element representing the project row.
 * @param {HTMLElement} projectName - The DOM element representing the project name.
 * @param {HTMLElement} projectInfo - The DOM element representing the project info container.
 * @param {Object} project - The project data object.
 * @param {number} number - The project number.
 * @param {string} projectDescription - The project description based on the current language.
 */
function initEventListeners(
  projectRow,
  projectName,
  projectInfo,
  project,
  number,
  projectDescription,
) {
  projectRow.addEventListener("click", () => {
    renderDialogContent(project, projectDescription, number);
    openDialog();
    nextProject(number - 1);
  });

  projectRow.addEventListener("mouseenter", () => {
    projectName.innerHTML = project.name + icons.arrow_outward(14);
    projectInfo.innerHTML = projectInfoHoverTemplate(project, projectDescription);
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
 * @param {string} projectDescription - The project description based on the current language.
 */
function renderDialogContent(project, projectDescription, number) {
  dialogContent.innerHTML = projectInfoDialogTemplate(project, projectDescription, number);
  setCurrentTranslations();
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
    let projectDescription =
      currentLanguage === "en"
        ? projects[nextIndex].descriptionEnglish
        : projects[nextIndex].descriptionGerman;
    renderDialogContent(projects[nextIndex], projectDescription, nextIndex + 1);
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
