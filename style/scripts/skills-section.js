const programmingLanguages = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Git", icon: "git" },
  { name: "Scrum", icon: "scrum" },
  { name: "Growth mindset", icon: "growth_mindset" },
];

/**
 * Initializes the skill badge container by creating and appending skill items for each programming language defined in the programmingLanguages array. Each skill item consists of an icon and a name, and the last item includes a hover effect that displays additional skills.
 * @returns {void}
 */
function initSkillBadgeContainer() {
  const container = document.getElementById("skill-badges-container");

  programmingLanguages.forEach((lang, index) => {
    const skillItem = document.createElement("div");
    skillItem.className = "skill-item";

    if (index === programmingLanguages.length - 1) {
      skillItem.classList.add("skill-item-growth");
      skillItem.innerHTML = setExtraSkillsHint(lang);
    } else {
      skillItem.innerHTML = `
        <div class="skill-icon">
          ${icons[lang.icon](60)}
        </div>
        <p>${lang.name}</p>
      `;
    }

    container.appendChild(skillItem);
  });
}
