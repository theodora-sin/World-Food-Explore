const CACHE_NAME="food-explorer-v1";
const APP_SHELL=[
    "./",
    "./index.html",
    "./style.css",
    "./main.js",
    "./3Dglobe.js",
    "./2Dmap.js",
    "./cityCard.js",
    "./search.js",
    "./favorites.js",
    "./cityData.js",
    "./cityData_europe.js",
    "./cityData_Africa.js",
    "./cityData_america.js",
    "./manifest.json"    
];

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener("activate",(event) =>{
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
})

self.addEventListener("fetch", (event) => {
  // Only handle GET requests — POST/etc pass through untouched
  if (event.request.method !== "GET") return;
 
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse; // serve from cache if we have it
 
      return fetch(event.request)
        .then((networkResponse) => {
          // opportunistically cache anything successfully fetched (dish
          // photos, newly added data files, etc.) so it's available offline
          // next time, without needing to list every file upfront
          if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          // fully offline and not cached — nothing more we can do for this request
          return new Response("Offline and this resource isn't cached yet.", {
            status: 503,
            statusText: "Offline"
          });
        });
    })
  );
});
