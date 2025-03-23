const temp = 68; // °F
const windSpeed = 3; // mph

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

function displayWindChill() {
  const windChillElement = document.getElementById("windChill");
  if (temp <= 50 && windSpeed > 3) {
    const chill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = `${chill.toFixed(1)} °F`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

function updateFooterDate() {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");
  yearSpan.textContent = new Date().getFullYear();
  modifiedSpan.textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
  displayWindChill();
  updateFooterDate();
});
