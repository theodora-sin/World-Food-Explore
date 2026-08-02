import { cityData } from "./cityData.js";
import { cityData_europe } from "./cityData_europe.js";
import { cityData_Africa } from "./cityData_africa.js";
import { renderCityCardHTML, wireCityCardClose } from "./citycard.js";
import { cityData_america} from "./cityData_america.js";
const allCities = [...cityData, ...cityData_europe, ...cityData_Africa, ...cityData_america];


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});
 
export function load2DMap() {
  const map = L.map('map', {
    tap: true,
    tapTolerance: 25,
    zoomControl:false,
  }).setView([20, 100], 3);
  L.control.zoom({position: 'bottomleft'}).addTo(map);
 
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(map);
 
  setTimeout(() => map.invalidateSize(), 100);
  window.addEventListener('resize', () => map.invalidateSize());
 
  const clusterGroup = L.markerClusterGroup({
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true
  });
 
  allCities.forEach(city => {
    if (typeof city.lat !== "number" || typeof city.lng !== 'number') {
      console.warn(`Skipping ${city.name} — invalid lat/lng`, city);
      return;
    }
    const marker = L.marker([city.lat, city.lng]);
    marker.on("click", (e) => {
      if (e.originalEvent) e.originalEvent.stopPropagation();
      showCityInfoMobile(city);
    });
    clusterGroup.addLayer(marker);
  });
  map.addLayer(clusterGroup);
 
  function showCityInfoMobile(city) {
    const box = document.getElementById('city-info');
    box.innerHTML = renderCityCardHTML(city);
    box.classList.add('mobile-sheet');
    box.style.display = "block";
    box.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => box.classList.add('visible'));
    wireCityCardClose(box,city);
  }
 
  function focusCity(city) {
    map.setView([city.lat, city.lng], 10, { animate: true });
    showCityInfoMobile(city);
  }
 
  return { map, focusCity };
}
