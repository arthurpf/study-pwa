self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mainCache').then(function(cache) {
      return cache.addAll(
        [
          '/stylesheets/style.css'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log('fetch event', event.request);
})