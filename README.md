# 📱 Modern QR Code Generator

> A sleek, responsive, and feature-rich web application built with vanilla HTML5, CSS3, and JavaScript that instantly generates QR codes for URLs, plain text, and Wi-Fi credentials, with PNG download support.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Status](https://img.shields.io/badge/Status-Completed-success)

---

## ✨ Features

* **Multiple Data Types:** Generate QR codes dynamically for **URLs / Links**, **Plain Text**, and **Wi-Fi Network Credentials**.
* **Wi-Fi Quick Connect Support:** Automatically formats Wi-Fi credentials (`WIFI:S:...`) so users can scan and join networks instantly.
* **Modern SaaS Dark Theme:** Designed with a clean, eye-friendly slate dark color palette using CSS custom properties (`:root`) and smooth transitions.
* **Interactive UI & Placeholders:** Features clean tab-switching logic and an intuitive placeholder state before a QR code is generated.
* **PNG Export:** Easily download your generated QR code instantly as a high-resolution `.png` image file.
* **Fully Responsive:** Optimized layout built with Flexbox and Media Queries for seamless mobile and desktop experiences.

---

## 🛠️ Built With

* **HTML5:** Semantic markup, forms, and structuring.
* **CSS3:** Custom properties, Flexbox layout, responsive media queries, and modern pseudo-class states.
* **JavaScript (ES6+):** DOM manipulation, event handling, dynamic tab switching, and Blob/DataURL conversions.
* **QRCode.js:** Lightweight open-source library for seamless client-side QR code generation.
* **FontAwesome (v6.7.2):** Scalable vector icons for clean visual cues.

---

## 📂 Project Structure

```text
qr-code-generator/
│
├── index.html       # Main HTML markup and structure
├── style.css        # Modern dark theme styling and responsive layout
├── script.js        # Tab switching, QR generation logic, and export features
└── README.md        # Project documentation