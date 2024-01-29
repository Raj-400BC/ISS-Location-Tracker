const API = "https://api.wheretheiss.at/v1/satellites/25544";
// Making map and tiles
const map = L.map("map").setView([0, 0],2);

const attribution =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileURL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileURL, { attribution });
tiles.addTo(map);

// Making marker and custom icon
var myIcon = L.icon({
  iconUrl: "/images/marker.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});
const marker = L.marker([0, 0], { icon: myIcon }).addTo(map);

let firstTime = true; // to stop the zooming on each lat and lon update
async function issLocater() {
  try {
    const response = await fetch(API);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const dataiss = await response.json();
    const { latitude, longitude } = dataiss;

    // map.setView([latitude, longitude], map.getZoom()); // Moving the map with the position of the marker(satellite)
    marker.setLatLng([latitude, longitude]);

    if (firstTime) {
      map.setView([latitude, longitude], 3);
      firstTime = false;
    }

    document.getElementById("lat").textContent = latitude.toFixed(2);
    document.getElementById("lon").textContent = longitude.toFixed(2);
  } catch (error) {
    console.error("Error fetching ISS location:", error);
  }
}

issLocater();

setInterval(issLocater, 1000);
