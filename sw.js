const CACHE_NAME = 'pokemon-cache-v1';
const urlsToCache = [
  '/seletor-pokemon/',
  '/seletor-pokemon/index.html',
  '/seletor-pokemon/style.css',
  '/seletor-pokemon/script.js',
  '/seletor-pokemon/icon-48x48.png',
  '/seletor-pokemon/icon-72x72.png',
  '/seletor-pokemon/icon-96x96.png',
  '/seletor-pokemon/icon-144x144.png',
  '/seletor-pokemon/icon-192x192.png',
  '/seletor-pokemon/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});