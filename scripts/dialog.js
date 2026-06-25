const DIALOG = document.getElementById("dialog");
const BODY = document.body;

function closeDialog() {
  BODY.classList.remove("no_scroll");
  DIALOG.close();
}

function openDialog() {
  BODY.classList.add("no_scroll");
  DIALOG.showModal();
}

DIALOG.onclick = (event) => {
  if (event.target === DIALOG) {
    closeDialog();
  }
};
