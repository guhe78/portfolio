/**
 * This function generates the HTML for a skill icon with a hover effect that displays additional skills. It takes a language object as an argument, which contains the icon and name of the skill. The function returns a string of HTML that includes the main skill icon, a hover bubble with a hint, and additional skill icons (TypeScript and Angular) displayed when hovered over.
 * @param {*} lang
 * @returns {string} The HTML string for the skill icon with hover effect.
 */
function setExtraSkillsHint(lang) {
  return `
    <div class="skill-icon">
      ${icons[lang.icon](60)}

      <div class="skill-icon-hover">
        ${icons.bubble_hint(120)}

        <div class="skill-icon-hover-content">
          <p data-key="extra-skills-hint-text"></p>

          <div class="skill-icon-hover-skills">
            ${icons.typescript(20)}
            ${icons.angular(20)}
          </div>
        </div>
      </div>
    </div>

    <p>${lang.name}</p>
  `;
}
