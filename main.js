import{ load3DGlobe } from "./3Dglobe.js";
import{ load2DMap }from "./2Dmap.js";

const isMobile= window.innerWidth < 768;
if(isMobile){
    document.getElementById("globeViz").style.display="none";
    document.getElementById("map").style.display="block";
    load2DMap();
}else{
    document.getElementById("map").style.display = "none";
    document.getElementsByClassName("globeViz").style.display = 'block';
    load3DGlobe();
}
