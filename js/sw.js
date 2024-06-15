
let cacheName = "podyplomowe";
let filesToCache = ["./", "./index.html", "./style/style.css",
"./js/main.js"];

self.addEventListener('install', function(event) {
     console.log('installing sw');
     event.waitUntil(
     caches.open(CACHE_NAME)
     .then(function(cache) {
     console.log('Opened cache');
     let x = cache.addAll(urlsToCache);
     console.log('cache added');
     return x;
     })
     
     );
     });
     
     self.addEventListener('fetch', function(event) {
     event.respondWith(
     caches.match(event.request)
     .then(function(response) {
     
     // Cache hit - return response
     if (response) {
     return response;
     }
     return fetch(event.request);
}
)
);
});