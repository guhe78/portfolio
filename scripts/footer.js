/**
 * Initializes the footer by setting up event listeners for the footer elements.
 */
function initFooter() {
  setScrollUpArrow();
}

/**
 * Sets up the scroll up arrow functionality for the footer.
 * @returns {void}
 */
function setScrollUpArrow() {
  const footerUpArrows = document.querySelectorAll(".footer-up-arrow");
  if (!footerUpArrows.length) return;

  footerUpArrows.forEach((arrow) => {
    arrow.innerHTML = icons.arrow_down(13);
    arrow.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
