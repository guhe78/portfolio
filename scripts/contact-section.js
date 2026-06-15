const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  checkInputFields();

  if (!form.reportValidity()) {
    return;
  }

  const data = getFormData();

  console.log("Formulardaten:", data);

  // try {
  //   const res = await fetch("scripts/php/contact_form_mail.php", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });

  //   const result = await res.json();

  //   if (result.success) {
  //     console.log("Formular erfolgreich gesendet");
  //   } else {
  //     console.error("Fehler beim Senden des Formulars");
  //   }
  // } catch (error) {
  //   console.error("Fehler beim Senden des Formulars:", error);
  // }
});

function checkInputFields() {
  document.getElementById("email").addEventListener("input", checkEmail);
  document.getElementById("name").addEventListener("input", checkName);
  document.getElementById("message").addEventListener("input", checkMessage);
}

function getFormData() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  return {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
}

function checkEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(email);

  emailInput.setCustomValidity(isValid ? "" : "Bitte geben Sie eine gültige E-Mail-Adresse ein.");

  return isValid;
}

function checkName() {
  const nameInput = document.getElementById("name");
  const isValid = nameInput.value.trim() !== "";

  nameInput.setCustomValidity(isValid ? "" : "Bitte geben Sie Ihren Namen ein.");

  return isValid;
}

function checkMessage() {
  const messageInput = document.getElementById("message");
  const isValid = messageInput.value.trim() !== "";

  messageInput.setCustomValidity(isValid ? "" : "Bitte geben Sie eine Nachricht ein.");

  return isValid;
}
