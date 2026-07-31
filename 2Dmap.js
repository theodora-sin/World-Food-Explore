import{cityData} from "./cityData.js";
import{renderCityCardHTML, wireCityCardClose} from "./citycard.js"

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',    
})

export function load2DMap(){
    const map=L.map('map',{
        tap:true,
        tapTolerance:25
    }).setView([20,100],3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom:18,
        attribution:'&copy; OpenStreetMap'
    }).addTo(map);

    setTimeout(()=> map.invalidateSize(), 100);
    window.addEventListener('resize',() => map.invalidateSize());

    cityData.forEach(city=> {
        if(typeof city.lat!== "number" || typeof city.lng!== 'number'){
            console.warn(`Skipping ${city.name} — invalid lat/lng`, city);
            return;
        }
        const marker=L.marker([city.lat, city.lng]).addTo(map);
        marker.on("click",()=>{
            showCityInfoMobile(city);
        })
    });
    return map;
}

function showCityInfoMobile(city){
    const box= document.getElementById('city-info');
    box.innerHTML = renderCityCardHTML(city);
    box.classList.add('mobile-sheet');
    box.style.display= "block";
    box.setAttribute("aria-hidden", "false");
    requestAnimationFrame(()=> box.classList.add('visible'));
    wireCityCardClose(box);
}
