// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
      let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
      return windChill.toFixed(1) + " °C";
    }
    return "N/A";
  }
  
  // Display wind chill on page load
  document.addEventListener("DOMContentLoaded", function() {
    const temp = 10; // Static value from HTML
    const windSpeed = 5; // Static value from HTML
    const windChillElement = document.getElementById("wind-chill");
  
    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = windChill;
  
    // Display last modified date in a readable format
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastModifiedElement.textContent = lastModified.toLocaleDateString(undefined, options);
  });
  