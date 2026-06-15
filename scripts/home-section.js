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
  .join(icons.dot(7));

let position = 0;
const animationSpeed = 0.5;

function animateInfoStrip() {
  const trackWidth = infoTrack.scrollWidth / 2;

  position += animationSpeed;

  if (position >= trackWidth) {
    position = 0;
  }

  infoTrack.style.transform = `translateX(-${position}px)`;
  requestAnimationFrame(animateInfoStrip);
}
