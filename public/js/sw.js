const CACHE_NAME = "radio-advi-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/iconeapp192.png",
  "/icons/iconeapp512.png",
  "/css/style.css",
  "/js/script.js",
  "/js/mobile-navbar.js"
];

// Instala o Service Worker e armazena os arquivos no cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) => {
          return fetch(url)
            .then((response) => {
              if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
              return cache.put(url, response);
            })
            .catch((err) => console.warn(`Falha ao armazenar ${url}:`, err));
        })
      );
    })
  );
});

// Intercepta requisições e tenta servir do cache primeiro
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Atualiza o cache quando houver uma nova versão do Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
