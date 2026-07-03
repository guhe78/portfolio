const switchButton = document.getElementById("toggle-language");

let currentLanguage = localStorage.getItem("language") || "de";
let translations = {};

/**
 * Initializes the language settings by setting the switch button state, loading the current language translations, and setting the page's language attribute. It also sets up the event listener for toggling the language.
 */
function initLanguage() {
  switchButton.checked = currentLanguage === "en";
  loadLanguage(currentLanguage);
  setPageAttribute(currentLanguage);
  toggleLanguage();
}

/**
 * Sets up an event listener on the language switch button to toggle between English and German. When the switch is toggled, it updates the current language, saves it to local storage, updates the page's language attribute, and loads the corresponding translations.
 */
function toggleLanguage() {
  switchButton.addEventListener("change", async () => {
    currentLanguage = switchButton.checked ? "en" : "de";

    localStorage.setItem("language", currentLanguage);
    setPageAttribute(currentLanguage);

    await loadLanguage(currentLanguage);
  });
}

/**
 * Loads the translations for the specified language and updates the text content and placeholders of elements with the corresponding data attributes.
 * @param {string} lang - The language code to load translations for.
 */
async function loadLanguage(lang) {
  const response = await fetch(`./locales/${lang}.json`);
  translations = await response.json();

  setCurrentTranslations();
}

/**
 * Sets the current translations for the page by updating the text content and placeholders of elements with the corresponding data attributes. This function is called after loading the translations for the current language.
 */
function setCurrentTranslations() {
  setTranslations();
  setPlaceholders();
}

/**
 * Sets the text content of elements with the `data-key` attribute based on the translations for the current language. It also updates the `data-text` attribute if present, allowing for dynamic text updates in the UI.
 */
function setTranslations() {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.dataset.key;
    const data = translations[key];

    if (!data) return;

    if (typeof data === "string") {
      element.textContent = data;
      return;
    }

    if (data.text) {
      element.textContent = data.text;
    }

    if (element.tagName === "A" && data.link) {
      element.href = data.link;
    }
  });
}

/**
 * Sets the placeholder attributes of input elements based on the translations for the current language. It looks for elements with the `data-placeholder-key` attribute and updates their placeholder text accordingly.
 */
function setPlaceholders() {
  document.querySelectorAll("[data-placeholder-key]").forEach((element) => {
    const key = element.dataset.placeholderKey;

    if (translations[key]) {
      element.setAttribute("placeholder", translations[key]);
    }
  });
}

/**
 * Sets the language attribute of the HTML document to the specified language.
 * @param {string} currentLanguage - The language code to set as the document's language.
 */
function setPageAttribute(currentLanguage) {
  document.documentElement.setAttribute("lang", currentLanguage);
}
