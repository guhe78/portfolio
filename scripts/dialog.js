const DIALOG = document.getElementById("dialog");

function closeDialog() {
  document.body.classList.remove("no_scroll");
  DIALOG.close();
}

function openDialog() {
  document.body.classList.add("no_scroll");
  DIALOG.showModal();
}

DIALOG.onclick = (event) => {
  if (event.target === DIALOG) {
    closeDialog();
  }
};
