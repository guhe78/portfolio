const sliderViewport = document.getElementById("recommendation-slider-container");
const sliderContainer = document.querySelector(".card-slider-container");
const leftArrowButton = document.getElementById("prev-recommendation");
const rightArrowButton = document.getElementById("next-recommendation");
const dotsContainer = document.getElementById("recommendation-dots-container");

const dots = [];
let currentIndex = 3;
let isAnimating = false;

let cards = [];
let totalOriginalCards = 0;

function setupClones() {
  const originalCards = Array.from(sliderContainer.querySelectorAll(".recommendation-card"));
  totalOriginalCards = originalCards.length;

  const prependClones = [
    originalCards[totalOriginalCards - 2].cloneNode(true),
    originalCards[totalOriginalCards - 1].cloneNode(true),
  ];

  const appendClones = [originalCards[0].cloneNode(true), originalCards[1].cloneNode(true)];

  prependClones.forEach((clone) => {
    sliderContainer.insertBefore(clone, sliderContainer.firstElementChild);
  });

  appendClones.forEach((clone) => {
    sliderContainer.appendChild(clone);
  });

  cards = Array.from(sliderContainer.querySelectorAll(".recommendation-card"));
}

function setupDots() {
  const dotIcon = icons.ellipse(8);

  for (let i = 0; i < totalOriginalCards; i++) {
    const dot = document.createElement("div");
    dot.classList.add("recommendation-dot");
    if (i === 0) {
      dot.classList.add("active");
    }
    dot.innerHTML = dotIcon;
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
}

function setupIcons() {
  const quoteMarks = document.querySelectorAll(".quote-icon");

  quoteMarks.forEach((quoteMark) => {
    quoteMark.innerHTML = icons.quote();
  });

  leftArrowButton.innerHTML = `
    <span class="recommendation-button-text">
      ${icons.arrow_back(20)}
    </span>
  `;

  rightArrowButton.innerHTML = `
    <span class="recommendation-button-text">
      ${icons.arrow_forward(20)}
    </span>
  `;
}

function getSliderMetrics() {
  const cardWidth = cards[0].offsetWidth;
  const gap = 48;
  const cardStep = cardWidth + gap;
  const centerOffset = (sliderViewport.offsetWidth - cardWidth) / 2;

  return { cardStep, centerOffset };
}

function centerMainCard() {
  const { cardStep, centerOffset } = getSliderMetrics();
  sliderContainer.style.transform = `translateX(${centerOffset - cardStep * currentIndex}px)`;
}

function updateClasses() {
  cards.forEach((card, index) => {
    card.classList.remove("main-card", "side-card");

    if (index === currentIndex) {
      card.classList.add("main-card");
    } else {
      card.classList.add("side-card");
    }
  });
}

function updateDots() {
  const activeDotIndex = (currentIndex - 2 + totalOriginalCards) % totalOriginalCards;

  dots.forEach((dot, index) => {
    if (index === activeDotIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function wrapIndex(index) {
  if (index <= 1) return index + totalOriginalCards;
  if (index >= totalOriginalCards + 2) return index - totalOriginalCards;
  return index;
}

function onSlideEnd(targetIndex) {
  sliderContainer.classList.add("no-transition");
  currentIndex = wrapIndex(targetIndex);
  centerMainCard();
  requestAnimationFrame(() => sliderContainer.classList.remove("no-transition"));
  updateClasses();
  updateDots();
  isAnimating = false;
}

function slide(direction) {
  if (isAnimating) return;
  if (direction !== "next" && direction !== "prev") return;

  isAnimating = true;

  const { cardStep, centerOffset } = getSliderMetrics();
  const targetIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
  sliderContainer.style.transform = `translateX(${centerOffset - cardStep * targetIndex}px)`;

  const onTransitionEnd = (event) => {
    if (event.target !== sliderContainer || event.propertyName !== "transform") return;
    sliderContainer.removeEventListener("transitionend", onTransitionEnd);
    onSlideEnd(targetIndex);
  };

  sliderContainer.addEventListener("transitionend", onTransitionEnd);
}

function setupEventListeners() {
  rightArrowButton.addEventListener("click", () => {
    slide("next");
  });

  leftArrowButton.addEventListener("click", () => {
    slide("prev");
  });

  window.addEventListener("resize", () => {
    if (isAnimating) return;

    sliderContainer.classList.add("no-transition");
    centerMainCard();

    requestAnimationFrame(() => {
      sliderContainer.classList.remove("no-transition");
    });
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

  requestAnimationFrame(() => {
    sliderContainer.classList.remove("no-transition");
  });
}
