const switchButton = document.getElementById("toggle-language");

let currentLanguage = localStorage.getItem("language") || "de";
let translations = {};

function initLanguage() {
  switchButton.checked = currentLanguage === "en";
  loadLanguage(currentLanguage);
  toggleLanguage();
}

function toggleLanguage() {
  switchButton.addEventListener("change", async () => {
    currentLanguage = switchButton.checked ? "en" : "de";

    localStorage.setItem("language", currentLanguage);

    await loadLanguage(currentLanguage);
  });
}

async function loadLanguage(lang) {
  const response = await fetch(`./locales/${lang}.json`);
  translations = await response.json();

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.dataset.key;

    if (translations[key]) {
      element.textContent = translations[key];

      if (element.hasAttribute("data-text")) {
        element.setAttribute("data-text", translations[key]);
      }
    }
  });
}
