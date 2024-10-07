// Set the current year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Responsive hamburger menu
const nav = document.querySelector('nav');
const hamburger = document.createElement('button');
hamburger.textContent = '☰'; // Hamburger icon
hamburger.classList.add('hamburger');
nav.prepend(hamburger); // Add the hamburger button to the nav

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open'); // Toggle nav visibility
});
