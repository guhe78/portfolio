const sliderViewport = document.getElementById("recommendation-slider-container");
const sliderContainer = document.querySelector(".card-slider-container");
const leftArrowButton = document.getElementById("prev-recommendation");
const rightArrowButton = document.getElementById("next-recommendation");
const dotsContainer = document.getElementById("recommendation-dots-container");

let currentIndex = 0;
let isAnimating = false;
let cards = [];
let dots = [];

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

function setupIcons() {
  sliderContainer.querySelectorAll(".quote-icon").forEach((quoteMark) => {
    quoteMark.innerHTML = icons.quote();
  });

  leftArrowButton.innerHTML = `<span class="recommendation-button-text">${icons.arrow_back(20)}</span>`;
  rightArrowButton.innerHTML = `<span class="recommendation-button-text">${icons.arrow_forward(20)}</span>`;
}

function getMetrics() {
  const cardWidth = cards[currentIndex].offsetWidth;
  const gapStyle = getComputedStyle(sliderContainer).gap;
  const gap = parseInt(gapStyle);
  const cardStep = cardWidth + gap;
  const centerOffset = (sliderViewport.offsetWidth - cardWidth) / 2;

  return { cardWidth, gap, cardStep, centerOffset };
}

function centerMainCard() {
  const { cardStep, centerOffset } = getMetrics();
  sliderContainer.style.transform = `translateX(${centerOffset - cardStep * currentIndex}px)`;
}

function updateClasses() {
  cards.forEach((card, index) => {
    card.classList.remove("main-card", "side-card");
    card.classList.add(index === currentIndex ? "main-card" : "side-card");
  });
}

function updateDots() {
  const activeDotIndex = currentIndex - 2;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeDotIndex);
  });
}

function wrapIndex(index) {
  const cardsCount = cards.length;
  if (index < 2) return index + (cardsCount - 4);
  if (index >= cardsCount - 2) return index - (cardsCount - 4);
  return index;
}

function slide(direction) {
  if (isAnimating) return;

  isAnimating = true;
  const { cardStep, centerOffset } = getMetrics();
  const targetIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

  sliderContainer.style.transform = `translateX(${centerOffset - cardStep * targetIndex}px)`;

  const onTransitionEnd = (event) => {
    if (event.target !== sliderContainer || event.propertyName !== "transform") return;

    sliderContainer.removeEventListener("transitionend", onTransitionEnd);
    sliderContainer.classList.add("no-transition");
    currentIndex = wrapIndex(targetIndex);
    centerMainCard();

    requestAnimationFrame(() => {
      sliderContainer.classList.remove("no-transition");
      updateClasses();
      updateDots();
      isAnimating = false;
    });
  };

  sliderContainer.addEventListener("transitionend", onTransitionEnd);
}

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
