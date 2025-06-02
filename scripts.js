// Set current year dynamically
document.getElementById("date").innerHTML = new Date().getFullYear();

// Navigation elements
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// Show navigation menu
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// Hide navigation menu
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
