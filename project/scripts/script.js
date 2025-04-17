// script.js

// Navigation highlighting based on current page
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (currentPath.endsWith(link.getAttribute("href"))) {
            link.style.textDecoration = "underline";
        }
    });

    console.log("Yosemite Road Trip Guide loaded successfully.");
});

// Example: LocalStorage future use
function saveTripData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadTripData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Example placeholder: future form interaction
function showThankYouMessage(name) {
    alert(`Thank you, ${name}, for your message!`);
}
// Display last updated date in U.S. format with author
window.addEventListener("DOMContentLoaded", () => {
  const updated = new Date(document.lastModified);
  const span = document.getElementById("last-updated-info");
  if (span) {
    const formatted = updated.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    span.textContent = `Author: Zhili Zhong | Page last updated: ${formatted}`;
  }
});
