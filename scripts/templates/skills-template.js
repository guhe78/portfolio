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
