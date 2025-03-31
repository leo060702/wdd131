// filtered-temples.js
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/aba-nigeria/aba-nigeria-temple-lds-405559-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/manti-utah/manti-utah-temple-lds-1020218-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/payson-utah/payson-utah-temple-lds-1594223-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/yigo-guam/yigo-guam-temple-lds-2380156-wallpaper.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/washington-dc/washington-dc-temple-lds-1389747-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/mexico-city-mexico/mexico-city-mexico-temple-lds-1008780-wallpaper.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/lima-peru/lima-peru-temple-lds-274351-wallpaper.jpg"
  },
  // Three additional temples
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/tokyo-japan/tokyo-japan-temple-lds-1021017-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/rome-italy/rome-italy-temple-lds-2019020-wallpaper.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-gallery/hong-kong-china/hong-kong-china-temple-lds-1021721-wallpaper.jpg"
  }
];

const container = document.getElementById("temples-container");

function displayTemples(filteredTemples) {
  container.innerHTML = "";
  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// Filtering Functions
function filterTemples(criteria) {
  let filtered = [];
  switch (criteria) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
}

// Event Listeners
document.getElementById("home-nav").addEventListener("click", () => filterTemples("all"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

// Footer Year and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Initial load
displayTemples(temples);
