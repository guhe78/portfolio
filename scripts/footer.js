/**
 * Initializes the footer by setting up event listeners for the footer elements.
 */
function initFooter() {
  initFooterEventListeners();
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
