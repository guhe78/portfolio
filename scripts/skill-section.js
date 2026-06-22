const programmingLanguages = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Git", icon: "git" },
  { name: "Scrum", icon: "scrum" },
  { name: "Growth mindset", icon: "growth_mindset" },
];

function createSkillBadgeContainer() {
  const container = document.getElementById("skill-badges-container");

  programmingLanguages.forEach((lang) => {
    container.innerHTML += `
    <div class="skill-item">
      ${icons[lang.icon](30)}
      <p>${lang.name}</p>
    </div>
  `;
  });
}
