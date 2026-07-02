/**
 * Generates the HTML template for the project information section.
 * @param {*} project
 * @returns {string} The HTML template for the project information section.
 */
function projectInfoShortTemplate(project) {
  return `
  <span id="project-name-${project.id}" class="project-name">${project.name}</span>
  <span class="project-tech">${project.tech.join(" | ")}</span>
  `;
}

/**
 * Generates the HTML template for the project hover information section.
 * @param {*} project
 * @returns {string} The HTML template for the project hover information section.
 */
function projectInfoHoverTemplate(project) {
  return `
  <div class="${project.id} project-image">
    <img src="${project.image}" alt="${project.name}" />
  </div>
  `;
}

/**
 * Generates the HTML template for the project dialog information section.
 * @param {*} project
 * @param {number} number
 * @returns {string} The HTML template for the project dialog information section.
 */
function projectInfoDialogTemplate(project, number) {
  return `
      <button id="close-dialog-button" class="close-dialog-button">${icons.close(18)}</button>
      <div class="project-info-dialog">
        <div class="project-info-header">
          <p class="project-number">0${number}</p>
          <h2>${project.name}</h2>
        </div>
        <div class="project-info-tech">
          <h3 data-key="project-what-is" class="fira-font">Was ist das?</h3>
            <p data-key="project-description">${project.description}</p>
            <div class="project-icons">${projectIconsName(project.techIcons, project.tech)}</div>
        </div>
        <div class="project-links-container">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link-button"><span>GitHub</span> ${icons.arrow_outward(18)}</a>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link-button"><span>Live Test</span> ${icons.arrow_outward(18)}</a>
        </div>
      </div>
      <img src="${project.image}" alt="${project.name}" />
      <button id="next-project-button" class="next-project-button" data-key="next-project-button"><span>Nächstes Projekt</span> ${icons.arrow_forward(18)}</button>
      `;
}
