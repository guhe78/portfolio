const cards = Array.from(document.querySelectorAll(".recommendation-card"));
const sliderContainer = document.getElementById("recommendation-slider-container");
const leftArrowButton = document.getElementById("prev-recommendation");
const rightArrowButton = document.getElementById("next-recommendation");

leftArrowButton.innerHTML = `<span class="recommendation-button-text" data-key="recommendation-prev"
            >${icons.arrow_back(20)}</span
          >`;

rightArrowButton.innerHTML = `<span class="recommendation-button-text" data-key="recommendation-next"
            >${icons.arrow_forward(20)}</span
          >`;

let activeIndex = 1;
let isAnimating = false;

function updateClasses() {
  cards.forEach((card) => {
    card.classList.remove("main-card", "side-card");
  });

  cards[activeIndex].classList.add("main-card");

  cards.forEach((card) => {
    if (!card.classList.contains("main-card")) {
      card.classList.add("side-card");
    }
  });
}

function slide(direction) {
  if (isAnimating) return;

  isAnimating = true;

  const cardWidth = cards[0].offsetWidth + 48;

  // nach rechts
  if (direction === "next") {
    sliderContainer.style.transform = `translateX(-${cardWidth}px)`;
  }

  // nach links
  if (direction === "prev") {
    sliderContainer.style.transform = `translateX(${cardWidth}px)`;
  }

  sliderContainer.addEventListener(
    "transitionend",
    () => {
      sliderContainer.style.transition = "none";
      sliderContainer.style.transform = "translateX(0)";

      if (direction === "next") {
        const first = cards.shift();
        cards.push(first);

        if (activeIndex < 0) {
          activeIndex = cards.length - 1;
        }
      }

      if (direction === "prev") {
        const last = cards.pop();
        cards.unshift(last);

        if (activeIndex >= cards.length) {
          activeIndex = 0;
        }
      }

      sliderContainer.innerHTML = "";

      cards.forEach((card) => {
        sliderContainer.appendChild(card);
      });

      updateClasses();

      requestAnimationFrame(() => {
        sliderContainer.style.transition = "transform 0.5s ease";
      });

      isAnimating = false;
    },
    { once: true },
  );
}

rightArrowButton.addEventListener("click", () => {
  slide("next");
});

leftArrowButton.addEventListener("click", () => {
  slide("prev");
});

updateClasses();
