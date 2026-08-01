import { isFavorite, toggleFavorite } from "./favorites.js";

export function renderCityCardHTML(city) {
  const cuisine = city.cuisines[0];
  const favActive = isFavorite(city);
  return `
    <div class="sheet-handle"></div>
    <button id="city-close" aria-label="Close">✕</button>
    <button id="city-favorite" aria-label="Toggle favorite" class="${favActive ? 'active' : ''}">${favActive ? '★' : '☆'}</button>
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


export function wireCityCardClose(box, city) {
  if (box._outsideClickHandler) {
    window.removeEventListener("click", box._outsideClickHandler);
    box._outsideClickHandler = null;
  }

  document.getElementById("city-close").onclick = () => hide();

  const favBtn = document.getElementById("city-favorite");
  if (favBtn && city) {
    favBtn.onclick = (e) => {
      e.stopPropagation();
      const nowActive = toggleFavorite(city);
      favBtn.textContent = nowActive ? '★' : '☆';
      favBtn.classList.toggle('active', nowActive);
    };
  }

  function onWindowClick(e) {
    if (!box.contains(e.target)) hide();
  }
  function hide() {
    box.classList.remove("visible");
    box.style.display = 'none';
    box.setAttribute("aria-hidden", "true");
    window.removeEventListener("click", onWindowClick);
    box._outsideClickHandler = null;
  }

  box._outsideClickHandler = onWindowClick;
  setTimeout(() => window.addEventListener("click", onWindowClick), 0);


  if (box.classList.contains('mobile-sheet')) {
    const handle = box.querySelector('.sheet-handle');
    if (handle) {
      let startY = null;

      const onTouchStart = (e) => {
        startY = e.touches[0].clientY;
        box.style.transition = 'none'; // track finger directly while dragging
      };
      const onTouchMove = (e) => {
        if (startY === null) return;
        const dy = e.touches[0].clientY - startY;
        if (dy > 0) { 
          box.style.transform = `translateX(-50%) translateY(${dy}px)`;
        }
      };
      const onTouchEnd = (e) => {
        if (startY === null) return;
        const dy = e.changedTouches[0].clientY - startY;
        box.style.transition = ''; 
        if (dy > 80) {
          hide();
        } else {
          box.style.transform = ''; 
        }
        startY = null;
      };

      handle.addEventListener('touchstart', onTouchStart, { passive: true });
      handle.addEventListener('touchmove', onTouchMove, { passive: true });
      handle.addEventListener('touchend', onTouchEnd);
    }
  }
}
