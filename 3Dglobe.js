import Globe from 'https://esm.sh/globe.gl';
import{cityData} from "./cityData.js";
import{cityData_europe} from "./cityData_europe.js";

export function load3DGlobe(){
  let hoveredCity =null;
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
    window.addEventListener('resize',() => {
      myGlobe.width(globeElement.clientWidth).height(globeElement.clientHeight);
});
  myGlobe.pointOfView({lat: 10, lng:0, altitude: 2.2}, 0);

  const controls = myGlobe.controls();
  if (controls){
    controls.autoRotate=true;
    controls.autoRotateSpeed=1.5;
  }

  const labelLayer = document.getElementById("label-layer");
  const labelLines = document.getElementById("label-lines");

  function createLablels(data){
    labelLayer.innerHTML = "";
    data.forEach((d, i)=> {
      const el= document.createElement("div");
      el.className = "city-label";
      el.id = `label-${i}`;
      el.dataset.index = i;
      el.innerHTML = `<span class="dot"></span><span class="text">${d.name}</span>`;
      el.style.position = 'absolute';
      el.style.transform = 'translate(-50%,-50%)';
      el.style.pointerEvents = 'auto';
      el.style.whiteSpace = 'nowrap';
      el.style.fontSize = '13px';
      el.style.color = '#fff';
      el.style.padding = '4px 8px';
      el.style.background = 'rgba(0,0,0,0.5)';
      el.style.borderRadius = '6px';
      el.style.border = '1px solid rgba(255,165,0,0.12)';
      el.style.display = 'none'; //  shown only while dragging
      labelLayer.appendChild(el);

      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const idx= +el.dataset.index;
        showCityInfo(data[idx]);
      });
  });
  }
  createLablels(cityData);

  let isDragging =false;
  function showLabelLayer(){
    labelLayer.style.opacity ="1";
  }
  function hideLabelLayer(){
    labelLayer.style.opacity="0";
    while (labelLines.firstChild) labelLines.removeChild(labelLines.firstChild);
  }
  hideLabelLayer();

  //start hidden layer:
  if(controls){
    controls.addEventListener("start",()=> {
      isDragging=true;
      showLabelLayer();
      schedulePlaceLabels();
    });

    controls.addEventListener("end", ()=> {
      isDragging=false;
      hideLabelLayer();
    });

    controls.addEventListener("change",()=> {
      if (isDragging) schedulePlaceLabels();
    });
  }

  window.addEventListener('resize', () => {
    if (isDragging) schedulePlaceLabels();
  });


  let placeLabelsThrottle = null;
  function placeLabels() {
    // clear lines
    while (labelLines.firstChild) labelLines.removeChild(labelLines.firstChild);

    const labels = [];
    const padding = 10;

    // compute screen coords for each city
    cityData.forEach((d, i) => {
      let coords;
      try {
        coords = myGlobe.getScreenCoords(d.lat, d.lng,0.02);
      } catch (e) {
        const rect = globeElement.getBoundingClientRect();
        coords = { x: rect.width / 2, y: rect.height / 2 };
      }
      const el = document.getElementById(`label-${i}`);
      const behindGlobe = coords.hidden === true;
      el.style.display = behindGlobe ? "none": "block";
      if(behindGlobe) return;
      el.style.left =`${coords.x}px`;
      el.style.top = `${coords.y}px`;

      const rect = el.getBoundingClientRect();
      labels.push({
        i, el, x: coords.x, y: coords.y,
        w: rect.width, h: rect.height,
        cx: coords.x, cy: coords.y 
      });
    });

    // simple greedy collision resolution (screen-space)
    for (let a = 0; a < labels.length; a++) {
      for (let b = a + 1; b < labels.length; b++) {
        const A = labels[a], B = labels[b];
        const dx = B.x - A.x, dy = B.y - A.y;
        const overlapX = (A.w + B.w) / 2 + padding - Math.abs(dx);
        const overlapY = (A.h + B.h) / 2 + padding - Math.abs(dy);
        if (overlapX > 0 && overlapY > 0) {
          const dist = Math.hypot(dx, dy);
          const wasSpiderfied = A._wasSpiderfied || B._wasSpiderfied;
          const spiderfyThreshold = wasSpiderfied ? 34 : 26;
          if (dist < spiderfyThreshold) {
            // Very close together — queue for spiderfy instead of a simple push
            A._cluster = A._cluster || [];
            B._cluster = B._cluster || [];
            A._cluster.push(B);
            B._cluster.push(A);
          } else {
            // push them apart along vector
            const angle = Math.atan2(dy, dx) || 0.001;
            const shift = Math.max(overlapX, overlapY) / 2;
            B.x += Math.cos(angle) * shift;
            B.y += Math.sin(angle) * shift;
            B.el.style.left = `${B.x}px`;
            B.el.style.top = `${B.y}px`;
          }
        }
      }
    }

    // spiderfy small clusters (groups of 2-4)
    const processed = new Set();
    labels.forEach(item => {
      if (item._cluster && !processed.has(item.i)) {
        const cluster = [item, ...item._cluster.filter(c => c.i !== item.i)];
        const uniq = Array.from(new Set(cluster.map(c => c.i))).map(idx => labels.find(l => l.i === idx));
        if (uniq.length > 1 && uniq.length <= 6) {
          spiderfy(uniq, item.cx, item.cy);
          uniq.forEach(u => { u._wasSpiderfied = true; processed.add(u.i); });
        }
      } else if (!item._cluster) {
        item._wasSpiderfied = false;
      }
    });
    
    // draw leader lines for any label that was moved away from its original center
    labels.forEach(l => {
      const moved = Math.hypot(l.x - l.cx, l.y - l.cy) > 2;
      if (moved) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', l.cx);
        line.setAttribute('y1', l.cy);
        line.setAttribute('x2', l.x);
        line.setAttribute('y2', l.y);
        line.setAttribute('stroke', 'rgba(255,165,0,0.25)');
        line.setAttribute('stroke-width', '1');
        labelLines.appendChild(line);
      }
    });
  }
  function spiderfy(points, centerX, centerY){
    const n= points.length;
    const radius = 28 + (n-1) * 6;
    points.forEach((p, idx) => {
      const angle= (idx/n) * Math.PI *2;
      p.x=centerX + Math.cos(angle) * radius;
      p.y= centerY + Math.sin(angle) * radius;
      p.el.style.left = `${p.x}px`;
      p.el.style.top = `${p.y}px`;
    })
    }

  function schedulePlaceLabels(){
    if(placeLabelsThrottle) return;
    placeLabelsThrottle = setTimeout(()=> {
      placeLabels();
      placeLabelsThrottle = null;
    },80);
  }

  schedulePlaceLabels();

  if (controls){
    controls.addEventListener("change", () => schedulePlaceLabels());
  }
  window.addEventListener('resize', () => schedulePlaceLabels());

  const originalPointOfView = myGlobe.pointOfView;
  myGlobe.pointOfView= function(coords,ms){
    const ret = originalPointOfView.call(this, coords, ms);
    setTimeout(()=> schedulePlaceLabels(), (ms || 0) + 60);
    return ret;
  };


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
      <div class="field">
        <span class="label">Dish</span>
        <span class="value dish">${cuisine.dish_name}</span>
      </div>

      <div class="field">
        <span class="label">Cuisine</span>
        <span class="value">${cuisine.type}</span>
      </div>

      <div class="field">
        <span class="label">Meal Type</span>
        <span class= "value">${cuisine.course}</span>
      </div>

      <div class="desc">${cuisine.description}</div>

      <div class="recs-heading">Where to try it</div>
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
      coords=myGlobe.getScreenCoords(city.lat, city.lng, 0.02);
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
      window.removeEventListener("click", onWindowClick);
    }
  }

  window.addEventListener("keydown", e=> {
    if(e.key=== "Escape"){
      const box= document.getElementById("city-info");
      if (box) { box.style.display = 'none'; box.setAttribute('aria-hidden', 'true'); }
    }
  });

}
