import{ load3DGlobe } from "./3Dglobe.js";
import{ load2DMap }from "./2Dmap.js";
const BREAKPOINT=768;
let mode = null;
let globeInstance = null;
let mapInstance = null;

function showGlobe(){
    document.getElementById("map").style.display = "none";
    document.getElementById("globeWrap").style.display = 'block';    
    if(!globeInstance){
        globeInstance = load3DGlobe();
    }
    mode = "3d";
}

function showMap(){
    document.getElementById("globeWrap").style.display="none";
    document.getElementById("map").style.display="block";
    if(!mapInstance){
        mapInstance = load2DMap();
    } else{
        setTimeou(() => mapInstance.invalidateSize(), 50);
    }
    mode="2d";
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
