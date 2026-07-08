const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const privacyCheckbox = document.getElementById("privacy");
const nameError = document.getElementById("name-validation");
const emailError = document.getElementById("email-validation");
const messageError = document.getElementById("message-validation");
const privacyError = document.getElementById("privacy-validation");

/**
 * Initializes the contact section by setting up event listeners for form submission and input field validation.
 */
function initContactSection() {
  handleFormSubmit();
  initEventListenerInputFields();
}

/**
 * Handles the form submission event by validating the input fields and sending the form data if valid.
 * @param {Event} event The form submission event.
 */
function handleFormSubmit(event) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const isValid = checkName() & checkEmail() & checkMessage() & checkPrivacy();

    if (!isValid) return;

    const data = getFormData();

    await sendFormData(data);
    sendReactionMessage();
    clearForm();
  });
}

/**
 * Clears the form input fields and resets the character count display.
 */
function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
  privacyCheckbox.checked = false;
  updateCharCount();
}

/**
 * Sends a reaction message to the user after form submission, displaying a thank you message in a dialog and closing it after 5 seconds.
 */
function sendReactionMessage() {
  openDialog();

  const dialogContent = document.getElementById("dialog");

  dialogContent.innerHTML = `
    <p class="reaction-message-dialog">
      ${translations["contact-success"]}
    </p>
  `;

  setTimeout(() => {
    closeDialog();
    dialogContent.innerHTML = "";
  }, 5000);
}

/**
 * Sends the form data to the server.
 * @param {Object} data The form data to be sent.
 */
async function sendFormData(data) {
  try {
    const res = await fetch("/scripts/php/contact_form_mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
    } else {
      console.error("Fehler beim Senden des Formulars");
    }
  } catch (error) {
    console.error("Fehler beim Senden des Formulars:", error);
  }
}

/**
 * Initializes event listeners for the input fields to validate user input and update character count.
 */
function initEventListenerInputFields() {
  emailInput.addEventListener("blur", checkEmail);
  emailInput.addEventListener("input", checkEmail);

  nameInput.addEventListener("blur", checkName);
  nameInput.addEventListener("input", checkName);

  messageInput.addEventListener("blur", checkMessage);
  messageInput.addEventListener("input", () => {
    checkMessage();
    updateCharCount();
  });

  privacyCheckbox.addEventListener("change", checkPrivacy);
}

/**
 * Translates a given key using the translations object.
 * @param {string} key The key to be translated.
 * @returns {string} The translated string or the key if translation is not found.
 */
function t(key) {
  return translations[key] || key;
}

/**
 * Retrieves the form data from the input fields.
 * @returns {Object} The form data.
 */
function getFormData() {
  return {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
}

/**
 * Validates the email input field.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
function checkEmail() {
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(email);

  emailError.textContent = isValid ? "" : t("error-email");

  return isValid;
}

/**
 * Validates the name input field.
 * @returns {boolean} True if the name is valid, false otherwise.
 */
function checkName() {
  const name = nameInput.value;
  const isValid = name.trim() !== "";

  nameError.textContent = isValid ? "" : t("error-name");

  return isValid;
}

/**
 * Validates the message input field.
 * @returns {boolean} True if the message is valid, false otherwise.
 */
function checkMessage() {
  const message = messageInput.value;
  const messageLength = message.trim().length;
  const isValid = messageLength >= 9 && messageLength <= 200;

  messageError.textContent = isValid ? "" : t("error-message");

  return isValid;
}

/**
 * Validates the privacy checkbox.
 * @returns {boolean} True if the privacy checkbox is checked, false otherwise.
 */
function checkPrivacy() {
  const isChecked = privacyCheckbox.checked;

  privacyError.textContent = isChecked ? "" : t("error-privacy");

  return isChecked;
}

/**
 * Updates the character count display for the message input field.
 */
function updateCharCount() {
  const messageLength = messageInput.value.trim().length;
  const charCount = document.getElementById("char-count");
  charCount.textContent = messageLength;
}
