const infoStrip = document.querySelector(".info-strip");
const infoTrack = document.querySelector(".info-track");
const socialLinks = [
  { href: "https://github.com/guhe78", icon: icons.github(20) },
  {
    href: "https://www.linkedin.com/in/g%C3%BCnter-heldt-892320343/",
    icon: icons.linkedin(20),
  },
];

const infoItemsGerman = [
  "Frontend Entwickler",
  "Remote oder vor Ort",
  "Fachinformatiker für Anwendungsentwicklung (IHK)",
  "Allgäu, Deutschland",
];

const infoItemsEnglish = [
  "Frontend Developer",
  "Remote or on-site",
  "Certified Software Developer (IHK)",
  "Allgäu, Germany",
];

const animationSpeed = 0.5;
const minLoopFactor = 1.2;
const maxRepetitions = 20;

let position = 0;
let loopWidth = 0;
let lastLanguage = null;
let resizeDebounce = null;

/**
 * Initializes the home section by setting up the info strip, mobile menu, scroll down arrow, social links, and email icons. It also adds a resize event listener to adjust the layout and rebuild the info strip when the window is resized.
 */
function initHomeSection() {
  lastLanguage = currentLanguage;
  buildInfoStrip();
  animateInfoStrip();

  toggleMobileMenu();
  setScrollDownArrow();
  setSocialLinksHomeview();
  setDesktopMobileEmailIcons();

  window.addEventListener("resize", () => {
    setDesktopMobileEmailIcons();
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(buildInfoStrip, 120);
  });
}

/**
 * Returns the current info items based on the selected language.
 * @returns {string[]} The array of info items for the current language.
 */
function getCurrentInfoItems() {
  return currentLanguage === "en" ? infoItemsEnglish : infoItemsGerman;
}

/**
 * Renders the info items as HTML elements.
 * @param {string[]} items - The array of info items to render.
 * @returns {string} The HTML string representing the info items.
 */
function renderInfoItems(items) {
  return items.map((item) => `<div class="info-item"><h3>${item}</h3></div>`).join(icons.dot(7));
}

/**
 * Builds the info strip by repeating the info items until the strip is filled. It calculates the required repetitions based on the strip width and the loop width, ensuring that the info items are displayed continuously without gaps.
 * @returns {void}
 */
function buildInfoStrip() {
  if (!hasInfoStripElements()) return;

  const stripWidth = getInfoStripWidth();
  loopWidth = fillInfoTrackUntilTargetWidth(stripWidth);
  loopWidth = normalizeLoopWidth(loopWidth);

  applyInfoTrackPosition();
}

/**#
 * Checks if the info strip and info track elements exist in the DOM.
 * @returns {boolean} True if both elements exist, false otherwise.
 */
function hasInfoStripElements() {
  return Boolean(infoStrip && infoTrack);
}

/**
 * Returns the width of the info strip element.
 * @returns {number} The width of the info strip in pixels.
 */
function getInfoStripWidth() {
  return infoStrip.clientWidth || window.innerWidth || 0;
}

/**
 * Fills the info track with repeated info items until the target width is reached.
 * @param {number} stripWidth - The width of the info strip.
 * @returns {number} The width of the filled info track.
 */
function fillInfoTrackUntilTargetWidth(stripWidth) {
  const baseItems = getCurrentInfoItems();
  let repeatedItems = [...baseItems];
  let repetitions = 1;
  let currentLoopWidth = 0;

  while (repetitions < maxRepetitions) {
    const allItems = [...repeatedItems, ...repeatedItems];
    infoTrack.innerHTML = renderInfoItems(allItems);

    currentLoopWidth = infoTrack.scrollWidth / 2;

    if (currentLoopWidth >= stripWidth * minLoopFactor) {
      break;
    }

    repeatedItems.push(...baseItems);
    repetitions += 1;
  }

  return currentLoopWidth;
}

/**
 * Normalizes the loop width by ensuring it is greater than zero.
 * @param {number} currentLoopWidth - The current loop width.
 * @returns {number} The normalized loop width.
 */
function normalizeLoopWidth(currentLoopWidth) {
  if (currentLoopWidth > 0) return currentLoopWidth;
  return infoTrack.scrollWidth / 2;
}

/**
 * Applies the current position to the info track by translating it horizontally based on the position value. It ensures that the position wraps around when it exceeds the loop width.
 * @returns {void}
 */
function applyInfoTrackPosition() {
  position = position % Math.max(loopWidth, 1);
  infoTrack.style.transform = `translateX(-${position}px)`;
}

/**
 * Animates the info strip by continuously moving it horizontally. It updates the position based on the animation speed and resets it when it reaches the loop width.
 * @returns {void}
 */
function animateInfoStrip() {
  if (!infoStrip || !infoTrack) return;

  if (lastLanguage !== currentLanguage) {
    lastLanguage = currentLanguage;
    buildInfoStrip();
  }

  if (loopWidth > 0) {
    position += animationSpeed;
    if (position >= loopWidth) position = 0;
    infoTrack.style.transform = `translateX(-${position}px)`;
  }

  requestAnimationFrame(animateInfoStrip);
}

/**
 * Toggles the mobile menu open and closed when the menu button is clicked.
 * @returns {void}
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
 * @returns {void}
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

/**
 *  Sets up the scroll down arrow functionality by adding a click event listener that scrolls to the next section of the page when the arrow is clicked. It calculates the next section based on the current scroll position and smoothly scrolls to it.
 * @returns {void}
 */
function setScrollDownArrow() {
  const scrollDownArrow = document.getElementById("scroll-down-arrow");
  if (!scrollDownArrow) return;

  scrollDownArrow.innerHTML = icons.arrow_down(13);
}

/**
 * Sets the social links in the home view by creating anchor elements for each social link defined in the `socialLinks` array. Each anchor is appended to the social links container, allowing users to navigate to the respective social media profiles.
 * @returns {void}
 */
function setSocialLinksHomeview() {
  const socialLinksHomeview = document.getElementById("social-links-container");

  socialLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.innerHTML = link.icon;
    socialLinksHomeview.appendChild(anchor);
  });
}

/**
 * Sets the email link in the home view based on the current window width. If the window width is less than or equal to 1024 pixels, it displays an email icon; otherwise, it displays the full email address. The function also adjusts the rotation of the email link for visual effect.
 * @returns {void}
 */
function setDesktopMobileEmailIcons() {
  const emailLink = document.getElementById("email-link");
  if (window.innerWidth <= 1024) {
    emailLink.innerHTML = `
    <span class="email-symbol">${icons.mail(20)}</span>
    `;
  } else {
    emailLink.innerHTML = `<span class="email-text">mail@guenter-heldt.de</span>`;
  }
}
