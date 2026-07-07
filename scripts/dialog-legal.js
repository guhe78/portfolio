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
