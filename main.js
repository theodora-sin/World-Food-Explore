import{ load3DGlobe } from "./3Dglobe.js";
import{ load2DMap }from "./2Dmap.js";
import{searchCities} from "./search.js";

const BREAKPOINT=768;
let mode = null;
let globeInstance = null;
let mapInstance = null;

function setHelpText(){
    document.getElementById('info-box').textContent =
    "Spin the globe/Pan the map → Tap a city → Discover local food."
}

function showGlobe(){
    document.getElementById("map").style.display = "none";
    document.getElementById("globeWrap").style.display = 'block';    
    if(!globeInstance){
        globeInstance = load3DGlobe();
    }
    mode = "3d";
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

searchCities(() => (mode==="2d" ? mapInstance.focusCity : globeInstance.focusCity));
