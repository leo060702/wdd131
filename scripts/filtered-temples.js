const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-863034-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/manti-utah/800x500/manti-temple-lds-939480-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/payson-utah/800x500/payson-temple-lds-1126110-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/yigo-guam/800x500/yigo-guam-temple-lds-2471662-wallpaper.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/washington-dc/800x500/washington-dc-temple-lds-958264-wallpaper.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/lima-peru/800x500/lima-peru-temple-lds-1134244-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/mexico-city-mexico/800x500/mexico-city-temple-lds-1140395-wallpaper.jpg"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/bangkok-thailand/800x500/bangkok-thailand-temple-lds-1234567-wallpaper.jpg"
  },
  {
    templeName: "Shanghai China",
    location: "Shanghai, China",
    dedicated: "2022, April, 10",
    area: 8000,
    imageUrl: "https://example.com/shanghai-temple.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/bc/temples/photo-galleries/paris-france/800x500/paris-france-temple-lds-1126120-wallpaper.jpg"
  }
];

function displayTemples(filtered) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";
  filtered.forEach(t => {
    const card = document.createElement("div");
    card.className = "temple-card";
    card.innerHTML = `
      <h3>${t.templeName}</h3>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
    `;
    container.appendChild(card);
  });
}

function filterTemples(type) {
  let result = temples;
  if (type === "old") result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  else if (type === "new") result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  else if (type === "large") result = temples.filter(t => t.area > 90000);
  else if (type === "small") result = temples.filter(t => t.area < 10000);
  displayTemples(result);
}

// Initial display
filterTemples("all");

// Footer year and modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
