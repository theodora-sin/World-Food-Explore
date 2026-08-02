import{ load3DGlobe } from "./3Dglobe.js";
import{ load2DMap }from "./2Dmap.js";
import{searchCities} from "./search.js";
import { getFavoriteCities } from "./favorites.js";
import { cityData } from "./cityData.js";
import { cityData_europe } from "./cityData_europe.js";
import { cityData_Africa } from "./cityData_africa.js";

const allCities= [...cityData, ...cityData_europe, ...cityData_Africa]

const BREAKPOINT=768;
let mode = null;
let globeInstance = null;
let mapInstance = null;

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
    favPanel.innerHTML = `<div class="favorites-empty">No favorites yet — tap the ☆ on a city's card to save it.</div>`;        
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
