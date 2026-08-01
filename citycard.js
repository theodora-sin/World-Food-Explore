export function renderCityCardHTML(city){
    const cuisine= city.cuisines[0];
    return`
    <button id="city-close" aria-label="Close">✕</button>
    ${cuisine.photoURL ? `<img class="dish-img" src="${cuisine.photoURL}" alt="${cuisine.dish_name}">` : ''}
    <h3>${city.name}${city.country ? ', ' + city.country : ''}</h3>
 
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
      <span class="value">${cuisine.course}</span>
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
}


export function wireCityCardClose(box){
  if(box._outsideClickeHandler){
    window.removeEventListener("click", box._outsideClickeHandler);
    box._outsideClickeHandler = null;
  }

    document.getElementById("city-close").onclick =() => hide();

    function onWindowClick(e){
        if(!box.contains(e.target))hide();
    }
    function hide(){
        box.classList.remove("visible");
        box.style.display = 'none';
        box.setAttribute("aria-hidden" , "true");
        window.removeEventListener("click", onWindowClick);
        box._outsideClickerHandler = null;
    }
    box._outsideClickHandler = onWindowClick;
    setTimeout(() => window.addEventListener("click", onWindowClick), 0);
}
