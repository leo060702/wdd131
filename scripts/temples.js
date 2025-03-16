// Toggle Navigation Menu for Mobile View
document.getElementById("menu-btn").addEventListener("click", function() {
    let navMenu = document.getElementById("nav-menu").querySelector("ul");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});

// Footer Year & Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
