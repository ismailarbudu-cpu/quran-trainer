const CACHE_NAME = 'hifz-trainer-v1';
const ASSETS = [
  'index.html',
  'sw.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Установка Service Worker и кэширование базовых файлов
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Работа с запросами (позволяет открывать оболочку приложения без сети)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
