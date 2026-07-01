const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const privacyCheckbox = document.getElementById("privacy");
const nameError = document.getElementById("name-validation");
const emailError = document.getElementById("email-validation");
const messageError = document.getElementById("message-validation");
const privacyError = document.getElementById("privacy-validation");

function initContactSection() {
  handleFormSubmit();
  initEventListenerInputFields();
}

function handleFormSubmit(event) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const isValid = checkName() & checkEmail() & checkMessage() & checkPrivacy();

    if (!isValid) return;

    const data = getFormData();

    console.log("Formulardaten:", data);
    //await sendFormData(data);
  });
}

async function sendFormData(data) {
  try {
    const res = await fetch("scripts/php/contact_form_mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      console.log("Formular erfolgreich gesendet");
    } else {
      console.error("Fehler beim Senden des Formulars");
    }
  } catch (error) {
    console.error("Fehler beim Senden des Formulars:", error);
  }
}

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

function t(key) {
  return translations[key] || key;
}

function getFormData() {
  return {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
}

function checkEmail() {
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(email);

  emailError.textContent = isValid ? "" : t("error-email");

  return isValid;
}

function checkName() {
  const name = nameInput.value;
  const isValid = name.trim() !== "";

  nameError.textContent = isValid ? "" : t("error-name");

  return isValid;
}

function checkMessage() {
  const message = messageInput.value;
  const messageLength = message.trim().length;
  const isValid = messageLength >= 9 && messageLength <= 200;

  messageError.textContent = isValid ? "" : t("error-message");

  return isValid;
}

function checkPrivacy() {
  const isChecked = privacyCheckbox.checked;

  privacyError.textContent = isChecked ? "" : t("error-privacy");

  return isChecked;
}

function updateCharCount() {
  const messageLength = messageInput.value.trim().length;
  const charCount = document.getElementById("char-count");
  charCount.textContent = messageLength;
}
