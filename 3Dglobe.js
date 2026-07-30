import Globe from 'https://esm.sh/globe.gl';
let hoveredCity =null;

const cityData=[
  {
    name:"Bangkok",
    country:"Thailand",
    lat:13.806424,
    lng:100.448832,
    cuisines:[{
      type: "Thai",
      dish_name:"Pad Thai",
      course:"main",
      photoURL:"images/pad_thai.jpg",
      description:"Stir-fried rice noodles with egg, fresh mung bean sprouts, chopped scallions or garlic chives, tamarind, cubed firm tofu.",
      recommendations:[
        {
          name:"Thipsamai",
          priceRange:"$$",
          address:"313, 315 Maha Chai Rd, Samran Rat, Phra Nakhon, Bangkok 10200, Thailand",
          link:"https://www.google.com/maps/place/Thipsamai+Padthai+Pratoopee/@13.7554233,100.4028562,11z/data=!4m15!1m8!3m7!1s0x30e2991678561141:0x8549dd651a717306!2s313+Maha+Chai+Rd,+Khwaeng+Samran+Rat,+Khet+Phra+Nakhon,+Krung+Thep+Maha+Nakhon+10200,+Thailand!3b1!8m2!3d13.75275!4d100.5048336!16s%2Fg%2F11snqxdnj_!3m5!1s0x30e2991678584ec5:0x698c069655046fbe!8m2!3d13.7527976!4d100.504823!16s%2Fg%2F1tksf77l?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
        }
      ]
    }]
  },
{
  name:"Da Nang",
  country:"Vietnam",
  lat:16.090693,
  lng:108.409756,
  cuisines:[{
    type:"Vietnamese",
    dish_name:"Bún Chả Cá",
    course:"main",
    photoURL:"images/fishcake.jpg",
    description:"Fish cake soup with seasoned crab mince, round rice noodles and a fragrant broth.",
    recommendations:[{
      name:"Bun Cha Ca Ba Phien",
      priceRange:"$",
      address: "06 Đường Cao Hồng Lãnh, Hội An, Đà Nẵng, Vietnam",
      link:"https://www.google.com/maps/place/B%C3%BAn+Ch%E1%BA%A3+C%C3%A1+B%C3%A0+Phi%E1%BA%BFn/@15.878058,108.312044,13.8z/data=!4m10!1m2!2m1!1sBun+Cha+Ca+Ba+Phien!3m6!1s0x31420e7ce57f5553:0x8dffd5d421e654c!8m2!3d15.8779342!4d108.3228283!15sChNCdW4gQ2hhIENhIEJhIFBoaWVuWhUiE2J1biBjaGEgY2EgYmEgcGhpZW6SARBhc2lhbl9yZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4c1JWWlZWakpXYTNnelQxaG9ibU5yVWtWUFIwNVdZMGhDWVdGSVl4QULgAQD6AQQIABBJ!16s%2Fg%2F11hd1lp12h?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
    }
    ]
  }]
},
{
  name:"Cebu ",
  country:"Phillippines",
  lat:10.296785,
  lng:123.915569,
  cuisines:[{
    type:"Filipino",
    dish_name:"Lechon",
    course:"main",
    photoURL:"images/lechon.jpg",
    description:"A whole pig slowly roasted over charcoal, known for its crunchy skin and soft, juice meat.",
    recommendations:[{
      name:"CNT Lechon",
      priceRange:"$",
      address:"8W59+W36, Jose L Briones Street, Cebu City, 6000 Lalawigan ng Cebu, Philippines",
      link:"https://www.google.com/maps/place/CNT+Lechon+-+SM+Cebu+Across/@10.3097313,123.9176729,13z/data=!4m6!3m5!1s0x33a9996ddc391bfb:0xdbd469bdf299cc16!8m2!3d10.3097778!4d123.9176463!16s%2Fg%2F11hd9r4lnq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
    }]
  }]

}
]
const globeElement=document.getElementById("globeViz");

const myGlobe = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .backgroundColor('#000')  
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundColor("rgba(0,0,0,0)")
  .pointsData(cityData)
  .pointLat('lat')
  .pointLng('lng')
  .pointColor(()=> '#ffa500')
  .pointRadius(0.4)
  .pointAltitude(0.01)
  .labelsData(cityData)
  .labelLat('lat')
  .labelLng('lng')
  .labelText('name')
  .labelSize(1.2)
  .labelColor(() => 'rgba(255,255,255,0.85)')
  .labelResolution(2);

//glow the hovered point
myGlobe.onPointHover(point=> {
  hoveredCity=point;
  myGlobe
    .pointColor(d=> d===hoveredCity? "#ffffff": "#ffa500")
    .pointRadius(d=> d===hoveredCity ? 0.7: 0.4)
    .pointAltitude(d=>d===hoveredCity ? 0.03: 0.01);
  globeElement.style.cursor = point? 'pointer' : "default";
});

myGlobe.onPointClick(point=> {
  console.log("clicked",point);
  showCityInfo(point);
  myGlobe.pointOfView({lat:point.lat, lng: point.lng, altitude:1.5},800);
  setTimeout(()=> showCityInfo(point),850);
});


function showCityInfo(city) {
  const box = document.getElementById('city-info');
  const cuisine = city.cuisines[0];
  box.innerHTML = `
    <h3>${city.name}, ${city.country}</h3>
    <div class="dish">${cuisine.dish_name}</div>
    <div class="cuisine">${cuisine.type} • ${cuisine.course}</div>
    <div class="desc">${cuisine.description}</div>

    ${cuisine.recommendations.map(r => `
      <div class="rec">
        <strong>${r.name}</strong>
        <span class="price">${r.priceRange}</span>
        <div class="address">${r.address}</div>
        <a href="${r.link}" target="_blank">View on Google Maps</a>
      </div>
    `).join('')}
  `;

  const { x, y } = myGlobe.getScreenCoords(city.lat, city.lng, 0.01);
  box.style.left = `${x + 20}px`;
  box.style.top = `${y - 20}px`;
  box.style.display="block";
}

