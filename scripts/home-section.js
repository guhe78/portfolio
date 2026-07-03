const infoTrack = document.querySelector(".info-track");
const infoItemsGerman = [
  "Frontend Entwickler",
  "Verfügbar für Remote-Arbeit",
  "Fachinformatiker für Anwendungsentwicklung (IHK)",
];
const infoItemsEnglish = [
  "Frontend Developer",
  "Available for remote work",
  "Computer Science Expert: Software Development (IHK)",
];
const duplicatedItems = [];
const animationSpeed = 0.5;

let position = 0;

/**
 * Initializes the home section by starting the info strip animation and setting up the mobile menu toggle functionality.
 */
function initHomeSection() {
  animateInfoStrip();
  toggleMobileMenu();
}

/**
 * Sets the duplicated items for the info strip based on the current language. It clears the existing duplicated items and populates them with the appropriate language-specific items, ensuring that the info strip displays the correct content.
 */
function setDublicatedItems() {
  if (currentLanguage === "en") {
    duplicatedItems.length = 0;
    duplicatedItems.push(...infoItemsEnglish, ...infoItemsEnglish);
  } else {
    duplicatedItems.length = 0;
    duplicatedItems.push(...infoItemsGerman, ...infoItemsGerman);
  }
}

/**
 * Animates the info strip by continuously moving the items to the left, creating a scrolling effect. When the position reaches half of the track width, it resets to create a seamless loop.
 */
function animateInfoStrip() {
  const trackWidth = infoTrack.scrollWidth / 2;

  position += animationSpeed;

  if (position >= trackWidth) {
    position = 0;
  }

  setDublicatedItems();

  infoTrack.innerHTML = duplicatedItems
    .map((item) => `<div class="info-item"><h3>${item}</h3></div>`)
    .join(icons.dot(7));
  infoTrack.style.transform = `translateX(-${position}px)`;

  requestAnimationFrame(animateInfoStrip);
}

/**
 * Toggles the mobile menu open and closed when the menu button is clicked.
 */
function toggleMobileMenu() {
  const menuToggleButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("navbar-left");

  eventListenerMobileMenu(menuToggleButton, mobileMenu);
}

/**
 * Sets up event listeners for the mobile menu toggle button and document clicks to handle opening and closing the mobile menu. It also closes the menu when a navigation link is clicked.
 * @param {HTMLElement} menuToggleButton - The button that toggles the mobile menu.
 * @param {HTMLElement} mobileMenu - The mobile menu element.
 */
function eventListenerMobileMenu(menuToggleButton, mobileMenu) {
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
