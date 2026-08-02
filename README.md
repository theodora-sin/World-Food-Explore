## World Food Explorer🌍🍜
An easy-to-use interactive world food finder:
Spin the globe 3D on desktop or zoom into the map 2D on mobile; select any city, and a food tab will appear showing recommended authentic food and a restaurant.


## Live demo:
https://theodora-sin.github.io/World-Food-Explore/

## Features:
🌍 3D globe (on desktop) / 2D map (on mobile) — adjusts automatically depending on screen width
📍 Click any city to view its food card — photo, description, cuisine, course of the meal, and a suggested restaurant with its address and link to Google Maps
🔍 Search by city name, country, dish name, or cuisine type
🎲 Surprise Me — takes you to a random city with an animated "spin and land on" effect for the 3D globe
📍 Near Me — finds the nearest city in the database using your device location
★ Favourites — allows you to mark your favourite cities and visit them later; saves them locally in the browser
🕘 History — records the last 10 cities visited during the current session
👋 Start page with instructions and character icons, appears only on first load of the page


## Data Structure:
Each city in the dataset follow this shape:
cityName
country
latitude
longitude
Type of Cuisine (Chinese, Western, Italian, etc.)
dish_name
course (e.g. Main,Dessert, Brunch,Breakfast)
A photo of the famous dish
A short description of the famous dish
Name of the restaurant which served this dish
priceRange ($, $$, $$$)
address
hyperlink to Google Maps

## Tech Stack:
globe.gl – renders the 3D globe (based on Three.js)
Leaflet.js  – renders the 2D map and clusters the markers
CARTO Dark Matter tiles – theme for the dark map that matches the look of the 3D globe
localStorage – saves the favourites between visits
Browser Geolocation API – allows for the use of the Near Me function
No backend, no database, no build system – all static content served from GitHub Pages.

## Project structure

├── index.html            # markup + UI containers for all features
├── style.css             # styles for all components, including modes (2D, 3D)
├── main.js               # entry point, contains code for mode switching, wiring everything together
├── 3Dglobe.js             # globe.gl set up, labels, spiderfy collision detection
├── 2Dmap.js               # Leaflet.js map set up, clustering and mobile card behaviour
├── cityCard.js            # shared HTML for food-card + close, favorite & swipe handling
├── search.js              # search bar and Surprise Me button
├── favorites.js           # favourites backed by localStorage
├── cityData.js            # city data from Asia/Oceania
├── cityData_europe.js     # city data from Europe
├── cityData_Africa.js     # city data from Africa
├── cityData_america.js    # city data from America
└── images                 # dish photo, favicon, character

## AI Usage
I mainly used AI to debug the code and as a learning aid throughout the development of this project. It also helped me to use users' views to understand what experience users want. The whole concept, design idea and features were all my own creations.
