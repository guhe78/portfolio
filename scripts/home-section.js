const infoTrack = document.querySelector(".info-track");
const infoItems = [
  "Frontend Developer",
  "Based in Füssen, Germany",
  "Available for remote work",
  "Fachinformatiker für Anwendungsentwicklung (IHK)",
];
const duplicatedItems = [...infoItems, ...infoItems];
const animationSpeed = 0.5;

let position = 0;

function initHomeSection() {
  animateInfoStrip();
  toggleMobileMenu();
}

function animateInfoStrip() {
  const trackWidth = infoTrack.scrollWidth / 2;

  position += animationSpeed;

  if (position >= trackWidth) {
    position = 0;
  }

  infoTrack.innerHTML = duplicatedItems
    .map((item) => `<div class="info-item"><h3>${item}</h3></div>`)
    .join(icons.dot(7));
  infoTrack.style.transform = `translateX(-${position}px)`;

  requestAnimationFrame(animateInfoStrip);
}

function toggleMobileMenu() {
  const menuToggleButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("navbar-left");

  menuToggleButton.addEventListener("click", (event) => {
    event.stopPropagation();
    mobileMenu.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideMenu = !mobileMenu.contains(event.target);
    const clickedOutsideButton = !menuToggleButton.contains(event.target);

    if (mobileMenu.classList.contains("open") && clickedOutsideMenu && clickedOutsideButton) {
      mobileMenu.classList.remove("open");
    }
  });

  document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}
