const programmingLanguages = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Git", icon: "git" },
  { name: "Scrum", icon: "scrum" },
  { name: "Growth mindset", icon: "growth_mindset" },
];

/**
 * Initializes the skill badge container by dynamically creating and appending skill items for each programming language in the programmingLanguages array. Each skill item consists of an icon and a name.
 * The function targets the container with the ID "skill-badges-container" and populates it with the skill items.
 * It uses the icons object to retrieve the corresponding SVG icons for each programming language.
 * The resulting HTML structure for each skill item is a div with the class "skill-item" containing the icon and name.
 * This function is called during the initialization of the skill section to display the programming skills visually.
 */
function initSkillBadgeContainer() {
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
