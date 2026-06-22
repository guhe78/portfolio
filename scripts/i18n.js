const switchButton = document.getElementById("toggle-language");

let currentLanguage = localStorage.getItem("language") || "de";

loadLanguage(currentLanguage);

switchButton.addEventListener("click", async () => {
  currentLanguage = currentLanguage === "de" ? "en" : "de";

  localStorage.setItem("language", currentLanguage);

  await loadLanguage(currentLanguage);
});

async function loadLanguage(lang) {
  const response = await fetch(`./locales/${lang}.json`);
  const translations = await response.json();

  window.translations = translations;

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.dataset.key;
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });

  window.dispatchEvent(new CustomEvent("languageChanged"));
}
