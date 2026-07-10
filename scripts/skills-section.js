const programmingLanguages = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Git", icon: "git" },
  { name: "Scrum", icon: "scrum" },
  { name: "Growth mindset", icon: "growth_mindset" },
];

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
