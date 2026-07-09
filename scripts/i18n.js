const switchButton = document.getElementById("toggle-language");
const switchLabel = document.getElementById("language-switch");

let currentLanguage = localStorage.getItem("language") || "de";
let translations = {};

/**
 * Initializes the language settings for the page. It sets the state of the language toggle switch button based on the current language, updates the page's language attribute, and loads the translations for the current language if the page is not a legal page. Finally, it sets up an event listener for toggling the language.
 */
function initLanguage() {
  const page = document.body.dataset.page;

  if (page === "legal") {
    switchLabel.classList.add("initializing");
  }

  switchButton.checked = currentLanguage === "en";

  requestAnimationFrame(() => {
    switchLabel.classList.remove("initializing");
  });

  setPageAttribute(currentLanguage);
  loadLanguage(currentLanguage);
  toggleLanguage();
}

/**
 * Sets up an event listener on the language toggle switch button. When the button state changes, it updates the current language, saves it to local storage, updates the page's language attribute, and reloads the translations for the new language. If the current page is a legal page, it redirects to the corresponding page in the selected language.
 */
function toggleLanguage() {
  switchButton.addEventListener("change", async () => {
    currentLanguage = switchButton.checked ? "en" : "de";

    localStorage.setItem("language", currentLanguage);

    const page = document.body.dataset.page;

    if (page === "legal") {
      const target =
        currentLanguage === "de" ? document.body.dataset.dePage : document.body.dataset.enPage;

      if (window.location.pathname.endsWith(target)) return;

      window.location.replace(target);
      return;
    }

    setPageAttribute(currentLanguage);
    await loadLanguage(currentLanguage);
  });
}

/**
 * Loads the translations for the specified language and updates the text content and placeholders of elements with the corresponding data attributes.
 * @param {string} lang - The language code to load translations for.
 */
async function loadLanguage(lang) {
  const basePath = window.location.pathname.includes("/pages/") ? "../" : "";
  const response = await fetch(`${basePath}locales/${lang}.json`);
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
