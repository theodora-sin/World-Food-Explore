import{ load3DGlobe } from "./3Dglobe.js";
import{ load2DMap }from "./2Dmap.js";

const isMobile= window.innerWidth < 768;
if(isMobile){
    document.getElementById("globeWrap").style.display="none";
    document.getElementById("map").style.display="block";
    load2DMap();
}else{
    document.getElementById("map").style.display = "none";
    document.getElementById("globeWrap").style.display = 'block';
    load3DGlobe();
}
document.getElementById('help-btn').addEventListener('click',()=> {
    document.getElementById('info-box').classList.toggle('hidden');
});
