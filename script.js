const programmingLanguages = [
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Git", icon: "git" },
];

const container = document.querySelector(".skill-badges-container");

programmingLanguages.forEach((lang) => {
  container.innerHTML += `
    <div class="skill-item">
      ${icons[lang.icon](30)}
      <p>${lang.name}</p>
    </div>
  `;
});

const infoTrack = document.querySelector(".info-track");
const infoItems = [
  "Frontend Developer",
  "Based in Füssen, Germany",
  "Available for remote work",
  "Fachinformatiker für Anwendungsentwicklung (IHK)",
];

const duplicatedItems = [...infoItems, ...infoItems];
infoTrack.innerHTML = duplicatedItems
  .map((item) => `<div class="info-item"><h3>${item}</h3></div>`)
  .join("");

let position = 0;
const animationSpeed = 1;

function animateInfoStrip() {
  const trackWidth = infoTrack.scrollWidth / 2;

  position += animationSpeed;

  if (position >= trackWidth) {
    position = 0;
  }

  infoTrack.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(animateInfoStrip);
}

animateInfoStrip();
