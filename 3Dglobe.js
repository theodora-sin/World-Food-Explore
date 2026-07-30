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
},
{
  name:"Taipei",
  country:"Taiwan",
  lat:25.033968,
  lng:121.568353,
  cuisines:[{
    type:"Taiwanese",
    dish_name:"Lu Rou Fan--魯肉飯",
    course:"main",
    photoURL:"images/lurofan.webp",
    description:"Savory braised pork rice with a layer of rich, gelantinous pork belly over steamed rice.",
    recommendations:[{
      name:"Dadaocheng Luroufan--大稻埕魯肉飯",
      priceRange:"$",
      address:"No. 17號, Lane 220, Chang'an W Rd, Jianming Village, Datong District, Taipei City, Taiwan 103",
      link:"https://www.google.com/maps/place/%E5%A4%A7%E7%A8%BB%E5%9F%95%E9%AD%AF%E8%82%89%E9%A3%AF/@25.0503594,121.5140602,18.06z/data=!4m6!3m5!1s0x3442a96d2ecfd72b:0x21c4c5b2853cd189!8m2!3d25.0509665!4d121.5146457!16s%2Fg%2F11dzsx6s59?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
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
  .backgroundColor("rgba(0,0,0,0)")
  .pointsData(cityData)
  .pointLat('lat')
  .pointLng('lng')
  .pointColor(()=> '#ffa500')
  .pointRadius(0.45)
  .pointAltitude(0.02)
  .labelsData(cityData)
  .labelLat('lat')
  .labelLng('lng')
  .labelText('name')
  .labelSize(1.2)
  .labelColor(() => 'rgba(255,255,255,0.85)')
  .labelResolution(2);

myGlobe.pointOfView({lat: 10, lng:0, altitude: 2.2}, 0);
const controls = myGlobe.controls();
if (controls){
  controls.autoRotate=true;
  controls.autoRotateSpeed=0.3;
}

//glow the hovered point
myGlobe.onPointHover(point=> {
  hoveredCity=point;
  myGlobe
    .pointColor(d=> d===hoveredCity? "#ffffff": "#ffa500")
    .pointRadius(d=> d===hoveredCity ? 0.8: 0.45)
    .pointAltitude(d=>d===hoveredCity ? 0.04: 0.02);
  globeElement.style.cursor = point? 'pointer' : "default";
});

myGlobe.onPointClick(point=> {
  if(!point)return;
  if(!point.cuisines|| !point.cuisines.length){
    console.warn("No cuisines for", point.name);
    return;
  }
  myGlobe.pointOfView({lat:point.lat, lng: point.lng, altitude:1.5},700);
  setTimeout(()=> showCityInfo(point),650);
});


function showCityInfo(city) {
  const box = document.getElementById('city-info');
  const closeBtn=document.getElementById("city-close");
  const cuisine = city.cuisines[0];
  box.innerHTML = `
    <button id="city-close" aria-label="Close">✕</button>
    ${cuisine.photoURL ? `<img class="dish-img" src="${cuisine.photoURL}" alt="${cuisine.dish_name}">` : ''}
    <h3>${city.name}, ${city.country}</h3>
    <div class="dish">${cuisine.dish_name}</div>
    <div class="cuisine">${cuisine.type} • ${cuisine.course}</div>
    <div class="desc">${cuisine.description}</div>
    ${cuisine.recommendations.map(r => `
      <div class="rec">
        <div><strong>${r.name}</strong><span class="price">${r.priceRange || ''}</span></div>
        <div class="address">${r.address || ''}</div>
        <div><a href="${r.link}" target="_blank" rel="noopener noreferrer">View on Google Maps</a></div>
      </div>
    `).join('')}
  `;

  let coords;
  try{
    coords=myGlobe.toScreenCoords(city.lat, city.lng);
  } catch(e){
    const rect= globeElement.getBoundingClientRect();
    coords= {x: rect.width /2, y: rect.height/2};
  }

  const padding=12;
  const boxWidth=320;
  const boxHeight= 260;
  let left = coords.x +18;
  let top = coords.y-20;

  // clamp horizontally
  const vw = window.innerWidth;
  if (left + boxWidth + padding > vw) left = coords.x - boxWidth - 18;
  if (left < padding) left = padding;

  // clamp vertically
  const vh = window.innerHeight;
  if (top + boxHeight + padding > vh) top = vh - boxHeight - padding;
  if (top < padding) top = padding;

  box.style.left =`${left}px`;
  box.style.top =`${top}px`;
  box.style.display = "block";
  box.setAttribute("aria-hidden", "false");

  const close= document.getElementById("city-close");
  if(close){
    close.onclick = () => hideCityInfo();
  }

  setTimeout(()=>{
    window.addEventListener("click", onWindowClick);
  },0);
  function onWindowClick(e){
    if(!box.contains(e.target))hideCityInfo();
  }
  function hideCityInfo(){
    box.style.display="none";
    box.setAttribute("aria-hidden", "true");
    window.removeEventListener("click, onWindowCLick");
  }
}

window.addEventListener("keydown", e=> {
  if(e.key=== "Escape"){
    const box= document.getElementById("city-info");
    if (box) { box.style.display = 'none'; box.setAttribute('aria-hidden', 'true'); }
  }
})
