import{ load3DGlobe } from "./3Dglobe.js";
import{ load2DMap }from "./2Dmap.js";
import{searchCities} from "./search.js";
import { getFavoriteCities } from "./favorites.js";
import { cityData } from "./cityData.js";
import { cityData_europe } from "./cityData_europe.js";
import { cityData_Africa } from "./cityData_africa.js";
import { cityData_america} from "./cityData_america.js";

const allCities = [...cityData, ...cityData_europe, ...cityData_Africa, ...cityData_america];
const BREAKPOINT=768;
const TIMELINE_MAX =10;
const timeline=[];
const timelineStrip = document.getElementById('timeline-strip');

let mode = null;
let globeInstance = null;
let mapInstance = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('Service worker registered'))
      .catch((err) => console.warn('Service worker registration failed:', err));
  });
}

function setHelpText(){
    document.getElementById('info-box').textContent =
    "Spin the globe/Pan the map → Tap a city → Discover local food."
}

function setModeClass(newMode){
    document.body.classList.remove('mode-2d','mode-3d');
    document.body.classList.add(newMode === '2d' ? 'mode-2d' : 'mode-3d');
}

function showGlobe(){
    document.getElementById("map").style.display = "none";
    document.getElementById("globeWrap").style.display = 'block';    
    if(!globeInstance){
        globeInstance = load3DGlobe();
    }
    mode = "3d";
    setModeClass(mode);
    setHelpText();
}

function showMap(){
    document.getElementById("globeWrap").style.display="none";
    document.getElementById("map").style.display="block";
    if(!mapInstance){
        mapInstance = load2DMap();
    } else{
        setTimeout(() => mapInstance.map.invalidateSize(), 50);
    }
    mode="2d";
    setModeClass(mode);
    setHelpText();
}

const startScreen =document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
if(startScreen && startBtn){
    startBtn.addEventListener('click', () =>{
        startScreen.classList.add('hidden');
    });
}

function applyModeForWidth(){
    const shouldBeMobile = window.innerWidth < BREAKPOINT;
    const targetMode = shouldBeMobile ? "2d":"3d";
    if(targetMode ===mode) return;
    if(targetMode==='2d') showMap();
    else showGlobe();
}

applyModeForWidth();
let resizeDebounce=null;
window.addEventListener('resize', () =>{
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(applyModeForWidth,150);
});

document.getElementById('help-btn').addEventListener('click',()=> {
    document.getElementById('info-box').classList.toggle('hidden');
});

searchCities(
    () => (mode==="2d" ? mapInstance.focusCity : globeInstance.focusCity),
    () => (mode==="2d" ? null: globeInstance?.surpriseFocus)
);

const favBtn = document.getElementById('favorites-btn');
const favPanel= document.getElementById('favorites-panel');

function renderFavoritesList(){
    const favs= getFavoriteCities(allCities);
    if(!favs.length){
        favPanel.innerHTML = `
          <div class="empty-state">
            <img src="images/character4.png" class="empty-mascot" alt="">
            <p>No favorites yet — tap the ☆ on a city's card to save it.</p>
          </div>`;
    return;
    }
    favPanel.innerHTML = favs.map(city =>{
        const cuisine = city.cuisines[0] ||{};
    return `<div class="search-item" data-name="${city.name}">
      ${city.name}${city.country ? ', ' + city.country : ''} — ${cuisine.dish_name || ''}
    </div>`;
    }).join('');        
}

if(favBtn && favPanel){
    favBtn.addEventListener('click', (e) =>{
        e.stopPropagation();
        const isOpen=favPanel.style.display === 'block';
        if(isOpen){
            favPanel.style.display= "none";
        } else {
            renderFavoritesList();
            favPanel.style.display = "block";
        }
    });
    favPanel.addEventListener('click', (e) =>{
        const item = e.target.closest('.search-item');
        if(!item) return ;
        const city = allCities.find (c => c.name === item.dataset.name);
        if(!city)return;
        const focusCity = mode === "2d" ? mapInstance?.focusCity : globeInstance?.focusCity; 
        if (typeof focusCity=== 'function'){
            focusCity(city);
        }
        favPanel.style.display='none';
    });
    document.addEventListener('click', (e) =>{
        if (!e.target.closest('#favorites-btn') && !e.target.closest('#favorites-panel')) {
        favPanel.style.display = 'none';
        }
    })
}
const historyBtn = document.getElementById('history-btn');
function renderTimeLine(){
    if(!timelineStrip) return;
    if(!timeline.length){
        timelineStrip.innerHTML = `
          <div class="empty-state empty-state-inline">
            <img src="images/character3.png" class="empty-mascot-small" alt="">
            <span>No cities explored yet — start tapping around!</span>
          </div>`;
        return;
    }
    timelineStrip.innerHTML = timeline.map((city, i) => `
      <button class="timeline-item" data-index="${i}">
        <span class="timeline-num">${i + 1}</span> ${city.name}
      </button>
    `).join('');
}

window.addEventListener('cityViewed', (e) =>{
    const city = e.detail;
    const existingIndex = timeline.findIndex(c => c.name === city.name);
    if (existingIndex !== -1) {
        timeline.splice(existingIndex, 1); 
    }

    timeline.push(city);
    if(timeline.length > TIMELINE_MAX){
        timeline.shift();
    }
    renderTimeLine();
});

function setNearMeVisible(visible){
    if(mode!== '2d') return;
    const nearBtn = document.getElementById('near-me-btn');
    if(nearBtn) nearBtn.style.display = visible? '': 'none';
}

if(historyBtn && timelineStrip){
    historyBtn.addEventListener('click',(e) =>{
        e.stopPropagation();
        timelineStrip.classList.toggle('open');
    });
    timelineStrip.addEventListener('click', (e) =>{
        const btn = e.target.closest('.timeline-item');
        if(!btn) return;
        const city = timeline[+btn.dataset.index];
        const focusCity= mode ==="2d" ? mapInstance?.focusCity : globeInstance?.focusCity;
        if(typeof focusCity === 'function') focusCity(city);
        timelineStrip.classList.remove('open');
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#history-btn') && !e.target.closest('#timeline-strip')) {
            timelineStrip.classList.remove('open');
        }
    });
}

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const nearMeBtn = document.getElementById('near-me-btn');
if (nearMeBtn) {
  const originalLabel = nearMeBtn.textContent;

  nearMeBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert("Your browser doesn't support location — try searching instead!");
      return;
    }

    nearMeBtn.disabled = true;
    nearMeBtn.textContent = 'Locating…';

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        let nearest = null;
        let nearestDist = Infinity;
        allCities.forEach((city) => {
          if (typeof city.lat !== 'number' || typeof city.lng !== 'number') return;
          const d = distanceKm(latitude, longitude, city.lat, city.lng);
          if (d < nearestDist) {
            nearestDist = d;
            nearest = city;
          }
        });

        nearMeBtn.disabled = false;
        nearMeBtn.textContent = originalLabel;

        if (nearest) {
          const focusCity = mode === "2d" ? mapInstance?.focusCity : globeInstance?.focusCity;
          if (typeof focusCity === 'function') focusCity(nearest);
        }
      },
      (error) => {
        nearMeBtn.disabled = false;
        nearMeBtn.textContent = originalLabel;
        console.warn('Geolocation failed:', error.message);
        alert("Couldn't get your location — check your browser's location permission and try again.");
      },
      { timeout: 10000 }
    );
  });
}
