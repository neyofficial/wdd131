// ✅ Set the current year and last modified date in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ✅ Responsive hamburger menu
const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");

// Create the hamburger button
const hamburger = document.createElement("button");
hamburger.textContent = "☰";
hamburger.classList.add("hamburger");

// Insert hamburger before the ul
nav.prepend(hamburger);

// Toggle the navigation menu on click
hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});
