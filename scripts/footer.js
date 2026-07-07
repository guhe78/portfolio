function initFooter() {
  initFooterEventListeners();
}

function initFooterEventListeners() {
  const footerImpressum = document.getElementById("footer-impressum");

  footerImpressum.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("language") || "de";
    openLegalDialog(currentLanguage);
  });
}
