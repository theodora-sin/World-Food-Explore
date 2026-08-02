World Food Explorer🌍🍜
This is an interactive way to explore the world's food.
Spin a 3D globe on desktop, pan a 2D map on mobile, tap a city and discover its signature dish and where to actually go eat it. 
Live demo: https://theodora-sin.github.io/World-Food-Explore/

Features:
🌍 3D globe (desktop) / 2D map (mobile) — automatically switches based on screen width, so the experience fits any device
📍 Tap any city to open a food card: dish photo, description, cuisine type, meal course, and a recommended restaurant with address + Google Maps link
🔍 Search by city name, country, dish, or cuisine type
🎲 Surprise Me — jumps to a random city (with a "spin then land" flourish on the 3D globe)
📍 Near Me — uses your device's location to find and fly to the closest city in the dataset
★ Favorites — save cities to revisit later, stored locally in your browser
🕘 History — a running timeline of the last 10 cities you've explored this session
👋 Start screen with instructions and character guides, shown on first loading screen

Data Structure:
Each city in the dataset follow this shape:

cityName
country
latitude
longitude
Type of Cuisine (Chinese, Western, Italian, etc.)
dish_name
course (e.g. Main,Dessert, Brunch,B reakfast)
A photo of the famous dish
A short description of the famous dish
Name of the restaurant which served this dish
priceRange ($, $$, $$$)
address
hyperlink to Google Maps

Tech Stack:
globe.gl — 3D globe rendering (built on Three.js)
Leaflet + Leaflet.markercluster — 2D map and marker clustering
CARTO Dark Matter tiles — dark map theme matching the 3D globe's aesthetic
Vanilla JavaScript (ES modules) — no framework or build step; every feature is a small, focused module
localStorage — persists favorites across visits
Browser Geolocation API — powers the Near Me feature
No backend, no database, no build tooling — the whole thing is static files, deployed via GitHub Pages.

Project structure
├── index.html          # markup + all UI containers
├── style.css           # all styling, including mode-specific (2D/3D) rules
├── main.js             # entry point: mode switching, wires all features together
├── 3Dglobe.js           # globe.gl setup, labels, spiderfy collision handling
├── 2Dmap.js             # Leaflet setup, clustering, mobile card behavior
├── cityCard.js          # shared food-card HTML + close/favorite/swipe logic
├── search.js            # search bar + Surprise Me
├── favorites.js         # localStorage-backed favorites
├── cityData.js           # Asia/Oceania city data
├── cityData_europe.js    # Europe city data
├── cityData_Africa.js    # Africa city data
├── cityData_america.js   # North/South America city data
└── images/               # dish photos, character art, favicon
