const sliderViewport = document.getElementById("recommendation-slider-container");
const sliderContainer = document.querySelector(".card-slider-container");
const leftArrowButton = document.getElementById("prev-recommendation");
const rightArrowButton = document.getElementById("next-recommendation");
const dotsContainer = document.getElementById("recommendation-dots-container");

let currentIndex = 0;
let isAnimating = false;
let cards = [];
let dots = [];

/**
 * Initializes the recommendation section by setting up clones, dots, icons, event listeners, and centering the main card.
 */
function initRecommendationSection() {
  setupClones();
  setupDots();
  setupIcons();
  setupEventListeners();
  updateClasses();
  updateDots();
  sliderContainer.classList.add("no-transition");
  centerMainCard();
  requestAnimationFrame(() => sliderContainer.classList.remove("no-transition"));
}

/**
 * Sets up clones of the first and last two recommendation cards to create an infinite loop effect.
 */
function setupClones() {
  const originalCards = Array.from(
    sliderContainer.querySelectorAll(".recommendation-card:not(.clone)"),
  );
  const prependClones = [
    originalCards[originalCards.length - 2].cloneNode(true),
    originalCards[originalCards.length - 1].cloneNode(true),
  ];
  const appendClones = [originalCards[0].cloneNode(true), originalCards[1].cloneNode(true)];
  prependClones.forEach((clone) => {
    clone.classList.add("clone");
    sliderContainer.insertBefore(clone, sliderContainer.firstElementChild);
  });
  appendClones.forEach((clone) => {
    clone.classList.add("clone");
    sliderContainer.appendChild(clone);
  });
  cards = Array.from(sliderContainer.querySelectorAll(".recommendation-card"));
  currentIndex = 2;
}

/**
 * Sets up the dots for the recommendation slider based on the number of original cards.
 */
function setupDots() {
  const originalCardsCount = cards.length - 4;
  const dotIcon = icons.ellipse(8);
  for (let i = 0; i < originalCardsCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("recommendation-dot");
    if (i === 0) dot.classList.add("active");
    dot.innerHTML = dotIcon;
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
}

/**
 * Sets up the icons for the recommendation slider, including quote icons and arrow buttons.
 */
function setupIcons() {
  sliderContainer.querySelectorAll(".quote-icon").forEach((quoteMark) => {
    quoteMark.innerHTML = icons.quote();
  });
  leftArrowButton.innerHTML = `<span class="recommendation-button-text">${icons.arrow_back(20)}</span>`;
  rightArrowButton.innerHTML = `<span class="recommendation-button-text">${icons.arrow_forward(20)}</span>`;
}

/**
 * Retrieves the metrics for the recommendation slider, including card width, gap, card step, and center offset.
 * @returns {Object} An object containing the metrics for the recommendation slider.
 */
function getMetrics() {
  const cardWidth = cards[currentIndex].offsetWidth;
  const gapStyle = getComputedStyle(sliderContainer).gap;
  const gap = parseInt(gapStyle);
  const cardStep = cardWidth + gap;
  const centerOffset = (sliderViewport.offsetWidth - cardWidth) / 2;
  return { cardWidth, gap, cardStep, centerOffset };
}

/**
 * Centers the main recommendation card in the slider by adjusting the transform property of the slider container based on the current index and calculated metrics.
 */
function centerMainCard() {
  const { cardStep, centerOffset } = getMetrics();
  sliderContainer.style.transform = `translateX(${centerOffset - cardStep * currentIndex}px)`;
}

/**
 * Updates the classes of the recommendation cards based on the current index, setting the main card and side cards.
 */
function updateClasses() {
  cards.forEach((card, index) => {
    card.classList.remove("main-card", "side-card");
    card.classList.add(index === currentIndex ? "main-card" : "side-card");
  });
}

/**
 * Updates the active state of the dots based on the current index.
 */
function updateDots() {
  const activeDotIndex = currentIndex - 2;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeDotIndex);
  });
}

/**
 * Wraps the index to create an infinite loop effect for the recommendation slider.
 * @param {number} index - The current index.
 * @returns {number} The wrapped index.
 */
function wrapIndex(index) {
  const cardsCount = cards.length;
  if (index < 2) return index + (cardsCount - 4);

  if (index >= cardsCount - 2) return index - (cardsCount - 4);

  return index;
}

/**
 * Slides the recommendation slider in the specified direction.
 * @param {string} direction - The direction to slide ("next" or "prev").
 */
function slide(direction) {
  if (isAnimating) return;

  isAnimating = true;

  const { cardStep, centerOffset } = getMetrics();
  const targetIndex = currentIndex + (direction === "next" ? 1 : -1);

  moveSlider(targetIndex);

  sliderContainer.addEventListener("transitionend", () => finishSlide(targetIndex), { once: true });
}

/**
 * Moves the slider to the specified index.
 * @param {number} index - The target index to move the slider to.
 */
function moveSlider(index) {
  const { cardStep, centerOffset } = getMetrics();

  sliderContainer.style.transform = `translateX(${centerOffset - cardStep * index}px)`;
}

/**
 * Finishes the slide animation and updates the slider state.
 * @param {number} targetIndex - The target index after the slide animation.
 */
function finishSlide(targetIndex) {
  const wrappedIndex = wrapIndex(targetIndex);

  if (wrappedIndex !== targetIndex) {
    sliderContainer.classList.add("no-transition");

    currentIndex = wrappedIndex;
    centerMainCard();

    sliderContainer.offsetHeight;

    sliderContainer.classList.remove("no-transition");
  } else {
    currentIndex = targetIndex;
  }

  updateClasses();
  updateDots();

  isAnimating = false;
}

/**
 * Sets up event listeners for the recommendation slider, including arrow buttons and window resize.
 */
function setupEventListeners() {
  leftArrowButton.addEventListener("click", () => slide("prev"));
  rightArrowButton.addEventListener("click", () => slide("next"));

  window.addEventListener("resize", () => {
    if (isAnimating) return;
    sliderContainer.classList.add("no-transition");
    centerMainCard();
    requestAnimationFrame(() => sliderContainer.classList.remove("no-transition"));
  });
}
