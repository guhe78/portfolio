/**
 * Opens the legal dialog with the appropriate language content.
 * @param {string} language - The language code ("en" for English, "de" for German).
 */
function openLegalDialog(language) {
  const dialogContent = document.getElementById("dialog");
  if (language === "en") {
    dialogContent.innerHTML = imprintPrivacyPolicyEnglishTemplate();
  } else {
    dialogContent.innerHTML = imprintPrivacyPolicyGermanTemplate();
  }
  const closeDialogButton = document.querySelector(".legal-close-button");
  closeDialogButton.addEventListener("click", closeDialog);
  openDialog();
}

/**
 * Initializes event listeners for the privacy policy link in the footer.
 * When the link is clicked, it opens the legal dialog with the appropriate language content.
 * @returns {void}
 */
function initPrivacyPolicyEventListeners() {
  const privacyPolicy = document.getElementById("imprint-privacy-policy-link");

  privacyPolicy.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("language") || "de";
    openLegalDialog(currentLanguage);
  });
}
