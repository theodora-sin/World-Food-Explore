import{cityData} from "./cityData.js";
export function load2DMap(){
    const map=L.map('map').setView9([20,100],3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom:18,
        attribution:'© OpenStreetMap'
    }).addTo(map);

    cityData.forEach(city=> {
        const marker=L/marker([city.lat, city.lng]).addTo(map);
        marker.on("click",()=>{
            showCityInfo(city);
        })
    })
}
