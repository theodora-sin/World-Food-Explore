export const cityData_europe = [
  {
    name: "Athens",
    country: "Greece",
    lat: 37.977853,
    lng: 23.719602,
    cuisines: [{
      type: "Greek",
      dish_name: "moussaka",
      course: "Main",
      photoURL: "images/moussaka.jpg",  // also fixed below
      description: "Layers of soft eggplant, sliced potatoes, and rich minced beef, all topped with a thick, creamy béchamel sauce.",
      recommendations: [{               // was "recommendation"
        name: "Filippou Restaurant",
        priceRange: "$$",               // was "price"
        address: "Xenokratous 19, Athina 106 75, Greece",
        link: "https://www.google.com/maps/place/FILIPPOU+Restaurant/@37.9791194,23.7341799,15z"
      }]
    }]
  },
  {
    name: "Tirana",
    country: "Albania",
    lat: 41.327694,
    lng: 19.819655,
    cuisines: [{
      type: "Albanian",
      dish_name: "Tavë Kosi",
      course: "Main",
      photoURL: "images/tavekosi.webp",
      description: "Baked lamb and seasoned rice bound in a rich, garlicky yogurt sauce.",
      recommendations: [{               // was "recommendation"
        name: "Odas Garden",
        priceRange: "$$",               // was "price"
        address: "Rruga Shenasi Dishnica, Tiranë, Albania",
        link: "https://www.google.com/maps/place/Odas+Garden/@41.3294891,19.8245044,17z"
      }]
    }]
  },
];
