const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const privacyCheckbox = document.getElementById("privacy");
const nameError = document.getElementById("name-validation");
const emailError = document.getElementById("email-validation");
const messageError = document.getElementById("message-validation");
const privacyError = document.getElementById("privacy-validation");
const sendButton = document.getElementById("send-button");

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
    const isValid = checkFormValidity();

    if (!isValid) return;

    const data = getFormData();

    //await sendFormData(data);
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
    sendButton.disabled = true;
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
  initNameEventListeners();
  initEmailEventListeners();
  initMessageEventListeners();
  initPrivacyEventListeners();
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
function checkEmail(showError = false) {
  const email = emailInput.value.trim();

  const emailPattern =
    /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  const isValid = emailPattern.test(email) && !email.includes("..");

  emailError.textContent = !isValid && showError ? t("error-email") : "";

  return isValid;
}

/**
 * Initializes event listeners for the email input field to validate user input and check form validity.
 */
function initEmailEventListeners() {
  emailInput.addEventListener("blur", () => checkEmail(true));
  emailInput.addEventListener("input", () => {
    checkEmail();
    checkFormValidity();
  });
}

/**
 * Validates the name input field.
 * @returns {boolean} True if the name is valid, false otherwise.
 */
function checkName(showError = false) {
  const name = nameInput.value;
  const isValid = name.trim() !== "";

  nameError.textContent = !isValid && showError ? t("error-name") : "";

  return isValid;
}

/**
 * Initializes event listeners for the name input field to validate user input and check form validity.
 */
function initNameEventListeners() {
  nameInput.addEventListener("blur", () => checkName(true));
  nameInput.addEventListener("input", () => {
    checkName();
    checkFormValidity();
  });
}

/**
 * Validates the message input field.
 * @returns {boolean} True if the message is valid, false otherwise.
 */
function checkMessage(showError = false) {
  const message = messageInput.value;
  const messageLength = message.trim().length;
  const isValid = messageLength >= 9 && messageLength <= 200;

  messageError.textContent = !isValid && showError ? t("error-message") : "";

  return isValid;
}

/**
 * Initializes event listeners for the message input field to validate user input, update character count, and check form validity.
 */
function initMessageEventListeners() {
  messageInput.addEventListener("blur", () => checkMessage(true));
  messageInput.addEventListener("input", () => {
    checkMessage();
    updateCharCount();
    checkFormValidity();
  });
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
 * Initializes event listeners for the privacy checkbox to validate its state and update form validity.
 */
function initPrivacyEventListeners() {
  privacyCheckbox.addEventListener("change", () => {
    checkPrivacy();
    checkFormValidity();
  });
}

/**
 * Checks the overall validity of the form by validating each input field and the privacy checkbox.
 * @returns {boolean} True if the form is valid, false otherwise.
 */
function checkFormValidity() {
  const isValid = checkName() && checkEmail() && checkMessage() && checkPrivacy();

  sendButton.disabled = !isValid;

  return isValid;
}

/**
 * Updates the character count display for the message input field.
 */
function updateCharCount() {
  const messageLength = messageInput.value.trim().length;
  const charCount = document.getElementById("char-count");
  charCount.textContent = messageLength;

  if (messageLength < 9 || messageLength > 200) {
    charCount.classList.add("char-count-not-valid");
  } else {
    charCount.classList.remove("char-count-not-valid");
  }
}
