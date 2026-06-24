const DIALOG = document.getElementById("dialog");

function closeDialog() {
  DIALOG.close();
  toggleDialog();
}

function toggleDialog() {
  document.body.classList.toggle("no_scroll");
}

DIALOG.onclick = (event) => {
  if (event.target === DIALOG) {
    closeDialog();
  }
};
