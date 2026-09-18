// ==========================================================
// Ntsiki's Artisan Bakehouse — main.js
// Basic client-side form validation and small UX touches
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  // Highlight the current page in the navigation menu
  const links = document.querySelectorAll("header nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Simple validation feedback for any enquiry/contact form on the page
  const forms = document.querySelectorAll(".enquiry-form");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      const required = form.querySelectorAll("[required]");
      let valid = true;

      required.forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = "#C96F4A";
        } else {
          field.style.borderColor = "#d8c9b8";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Please fill in all required fields before submitting.");
      }
    });
  });
});
