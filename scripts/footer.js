/**
 * Initializes the footer by setting up event listeners for the footer elements.
 */
function initFooter() {
  initFooterEventListeners();
  setScrollUpArrow();
}

/**
 * Sets up event listeners for the footer elements, such as the impressum link.
 */
function initFooterEventListeners() {
  const footerImpressum = document.getElementById("footer-impressum");

  footerImpressum.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("language") || "de";
    openLegalDialog(currentLanguage);
  });
}

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
