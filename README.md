# Portfolio - Günter Heldt

Eine moderne, mehrsprachige Portfolio-Website eines Frontend-Developers, entwickelt mit HTML, CSS und JavaScript.

[🇬🇧 English Version](#english-version)

---

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Features](#features)
- [Technologien](#technologien)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Projektstruktur](#projektstruktur)
- [Konfiguration](#konfiguration)
- [Lizenz](#lizenz)

---

## 🎯 Über das Projekt

Dieses Portfolio präsentiert die Fähigkeiten und Projekte eines Frontend-Developers. Die Website bietet eine benutzerfreundliche Oberfläche mit verschiedenen Abschnitten zur Darstellung von:

- 🏠 Startseite mit persönlichen Informationen
- 👤 Über mich - Persönliche Vorstellung
- 💼 Fähigkeiten - Übersicht der technologischen Kompetenzen
- 🚀 Projekte - Galerie der durchgeführten Projekte
- ⭐ Empfehlungen - Testimonials von Kollegen/Kunden
- 📧 Kontakt - Kontaktformular

---

## ✨ Features

- **📱 Responsive Design** - Vollständig optimiert für Desktop, Tablet und Mobile
- **🌐 Mehrsprachig** - Unterstützung für Deutsch und Englisch
- **⚡ Modular aufgebaut** - Separate JavaScript- und CSS-Module für jede Sektion
- **💬 Kontaktformular** - Funktionales Formular mit PHP-Backend
- **🎨 Modern UI** - Sauberes und professionelles Design
- **♿ Benutzerfreundlich** - Optimierte Navigation und Benutzererlebnis
- **🎯 SEO optimiert** - Mit Meta-Tags und strukturiertem Markup

---

## 🛠️ Technologien

- **Frontend:**
  - HTML5
  - CSS3 (mit responsivem Design)
  - JavaScript (ES6+)

- **Backend:**
  - PHP (Kontaktformular)

- **Design & Fonts:**
  - Fira Code (Monospace-Schrift)
  - Karla (Sans-Serif-Schrift)
  - SVG Icons

- **Sonstige:**
  - Favicon-Integration (mehrere Größen)
  - Manifest für PWA-Unterstützung

---

## 📦 Installation

### Voraussetzungen

- Ein moderner Webbrowser
- PHP-Server (für Kontaktformular-Funktionalität)
- Texteditor oder IDE

### Schritte

1. **Repository klonen oder Dateien herunterladen:**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Lokal öffnen (statische Dateien):**
   - Öffnen Sie `index.html` direkt im Browser
   - Oder verwenden Sie einen lokalen Server

3. **Mit lokalem PHP-Server testen:**

   ```bash
   php -S localhost:8000
   ```

   - Öffnen Sie dann `http://localhost:8000` im Browser

---

## 🚀 Verwendung

### Startseite öffnen

```bash
# Mit VS Code Live Server oder ähnlichem:
# Klick auf "Go Live" in der Statusleiste

# Oder mit PHP:
php -S localhost:8000
```

### Seiten und Abschnitte

- **Home** (`scripts/home-section.js`) - Startseite mit Titel und CTA
- **About Me** (`scripts/aboutme-section.js`) - Persönliche Vorstellung
- **Skills** (`scripts/skill-section.js`) - Technische Fähigkeiten
- **Projects** (`scripts/projects-section.js`) - Projektgalerie
- **Recommendations** (`scripts/recommendation-section.js`) - Testimonials
- **Contact** (`scripts/contact-section.js`) - Kontaktformular

### Sprache wechseln

Die Sprache wird über das i18n-System (`scripts/i18n.js`) verwaltet:

- **Deutsch**: `locales/de.json`
- **Englisch**: `locales/en.json`

---

## 📁 Projektstruktur

```
portfolio/
├── index.html                 # Hauptseite
├── script.js                  # Hauptinitialisierungsskript
├── style.css                  # Globale Stile
│
├── assets/                    # Statische Ressourcen
│   ├── favicon/              # Favicon-Dateien
│   ├── fonts/                # Benutzerdefinierte Schriftarten
│   │   ├── fira_code/
│   │   └── karla/
│   ├── icons/                # SVG-Icon-Bibliothek
│   └── images/               # Bilder (z.B. Profilbild)
│
├── locales/                   # Lokalisierungsdateien
│   ├── de.json               # Deutsche Texte
│   └── en.json               # Englische Texte
│
├── pages/                     # Zusätzliche Seiten
│   ├── impressum-datenschutz.html
│   └── imprint-privacypolicy.html
│
├── scripts/                   # JavaScript-Module
│   ├── aboutme-section.js
│   ├── contact-section.js
│   ├── dialog.js
│   ├── home-section.js
│   ├── i18n.js               # Internationalisierungssystem
│   ├── projects-section.js
│   ├── recommendation-section.js
│   ├── skill-section.js
│   ├── php/
│   │   └── contact_form_mail.php  # Kontaktformular-Backend
│   └── templates/
│       ├── navbar-templates.js
│       └── project-template.js
│
└── style/                     # CSS-Module
    ├── aboutme-section.css
    ├── contact-section.css
    ├── home-section.css
    ├── projects-section.css
    ├── skills-section.css
    ├── responsive.css        # Mobile-Responsive Stile
    └── nav-footer.css
```

---

## ⚙️ Konfiguration

### Kontaktformular konfigurieren

Bearbeiten Sie `scripts/php/contact_form_mail.php`:

- E-Mail-Adresse für den Empfang von Nachrichten
- SMTP-Einstellungen (falls erforderlich)
- Validierung und Sicherheitsmaßnahmen

### Lokalisierung anpassen

Ergänzen Sie `locales/de.json` und `locales/en.json` mit eigenen Texten:

```json
{
  "key": "Übersetzter Text"
}
```

### Design personalisieren

- Ändern Sie Farben und Stile in `style/` Verzeichnis
- Passen Sie `style.css` für globale Änderungen an
- Responsive Änderungen in `style/responsive.css`

---

## 🔗 Links und Ressourcen

- [MDN Web Docs](https://developer.mozilla.org) - Dokumentation für HTML, CSS und JavaScript

---

## 📝 Lizenz

Dieses Projekt ist privat und dient zu Portfolio-Zwecken.

---

## 👥 Autor

**Günter Heldt** - Frontend Developer

---

<a name="english-version"></a>

# Portfolio - Günter Heldt

A modern, multilingual portfolio website of a Frontend Developer, built with HTML, CSS, and JavaScript.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [License](#license)

---

## 🎯 About the Project

This portfolio showcases the skills and projects of a Frontend Developer. The website provides a user-friendly interface with various sections for presenting:

- 🏠 Home - Personal information and introduction
- 👤 About Me - Personal presentation
- 💼 Skills - Overview of technical competencies
- 🚀 Projects - Gallery of completed projects
- ⭐ Recommendations - Testimonials from colleagues/clients
- 📧 Contact - Contact form

---

## ✨ Features

- **📱 Responsive Design** - Fully optimized for desktop, tablet, and mobile
- **🌐 Multilingual** - Support for German and English
- **⚡ Modular Structure** - Separate JavaScript and CSS modules for each section
- **💬 Contact Form** - Functional form with PHP backend
- **🎨 Modern UI** - Clean and professional design
- **♿ User-Friendly** - Optimized navigation and user experience
- **🎯 SEO Optimized** - With meta tags and structured markup

---

## 🛠️ Technologies

- **Frontend:**
  - HTML5
  - CSS3 (with responsive design)
  - JavaScript (ES6+)

- **Backend:**
  - PHP (Contact form)

- **Design & Fonts:**
  - Fira Code (Monospace font)
  - Karla (Sans-serif font)
  - SVG Icons

- **Other:**
  - Favicon integration (multiple sizes)
  - Manifest for PWA support

---

## 📦 Installation

### Prerequisites

- A modern web browser
- PHP server (for contact form functionality)
- Text editor or IDE

### Steps

1. **Clone repository or download files:**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open locally (static files):**
   - Open `index.html` directly in your browser
   - Or use a local server

3. **Test with local PHP server:**

   ```bash
   php -S localhost:8000
   ```

   - Then open `http://localhost:8000` in your browser

---

## 🚀 Usage

### Open the portfolio

```bash
# With VS Code Live Server or similar:
# Click "Go Live" in the status bar

# Or with PHP:
php -S localhost:8000
```

### Pages and Sections

- **Home** (`scripts/home-section.js`) - Landing page with title and CTA
- **About Me** (`scripts/aboutme-section.js`) - Personal introduction
- **Skills** (`scripts/skill-section.js`) - Technical skills
- **Projects** (`scripts/projects-section.js`) - Project gallery
- **Recommendations** (`scripts/recommendation-section.js`) - Testimonials
- **Contact** (`scripts/contact-section.js`) - Contact form

### Switch Language

The language is managed via the i18n system (`scripts/i18n.js`):

- **German**: `locales/de.json`
- **English**: `locales/en.json`

---

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main page
├── script.js                  # Main initialization script
├── style.css                  # Global styles
│
├── assets/                    # Static resources
│   ├── favicon/              # Favicon files
│   ├── fonts/                # Custom fonts
│   │   ├── fira_code/
│   │   └── karla/
│   ├── icons/                # SVG icon library
│   └── images/               # Images (e.g., profile picture)
│
├── locales/                   # Localization files
│   ├── de.json               # German texts
│   └── en.json               # English texts
│
├── pages/                     # Additional pages
│   ├── impressum-datenschutz.html
│   └── imprint-privacypolicy.html
│
├── scripts/                   # JavaScript modules
│   ├── aboutme-section.js
│   ├── contact-section.js
│   ├── dialog.js
│   ├── home-section.js
│   ├── i18n.js               # Internationalization system
│   ├── projects-section.js
│   ├── recommendation-section.js
│   ├── skill-section.js
│   ├── php/
│   │   └── contact_form_mail.php  # Contact form backend
│   └── templates/
│       ├── navbar-templates.js
│       └── project-template.js
│
└── style/                     # CSS modules
    ├── aboutme-section.css
    ├── contact-section.css
    ├── home-section.css
    ├── projects-section.css
    ├── skills-section.css
    ├── responsive.css        # Mobile-responsive styles
    └── nav-footer.css
```

---

## ⚙️ Configuration

### Configure Contact Form

Edit `scripts/php/contact_form_mail.php`:

- Email address for receiving messages
- SMTP settings (if required)
- Validation and security measures

### Customize Localization

Update `locales/de.json` and `locales/en.json` with your own texts:

```json
{
  "key": "Translated text"
}
```

### Personalize Design

- Change colors and styles in `style/` directory
- Update `style.css` for global changes
- Responsive adjustments in `style/responsive.css`

---

## 🔗 Links and Resources

- [MDN Web Docs](https://developer.mozilla.org) - Documentation for HTML, CSS, and JavaScript

---

## 📝 License

This project is private and serves portfolio purposes.

---

## 👥 Author

**Günter Heldt** - Frontend Developer
