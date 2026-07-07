const DIALOG = document.getElementById("dialog");
const BODY = document.body;

/**
 * Initialize the dialog close functionality. When the user clicks outside the dialog content, the dialog will close.
 */
function initCloseDialog() {
  DIALOG.onclick = (event) => {
    if (event.target === DIALOG) {
      DIALOG.close();
    }
  };

  DIALOG.addEventListener("close", () => {
    BODY.classList.remove("no_scroll");
  });
}

/**
 * Closes the dialog and removes the "no_scroll" class from the body to allow scrolling again.
 */
function closeDialog() {
  BODY.classList.remove("no_scroll");
  DIALOG.close();
}

/**
 * Opens the dialog and adds the "no_scroll" class to the body to prevent scrolling while the dialog is open.
 */
function openDialog() {
  BODY.classList.add("no_scroll");
  DIALOG.showModal();
}
