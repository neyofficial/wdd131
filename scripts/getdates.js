// Get current year and display in footer
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Display last modified date in footer
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

