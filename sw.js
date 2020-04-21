
const staticCacheName = 'site-static';

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlinePages = [
    '/',
    'index.html',
    'home.html',
    'vendor/bootstrap/css/bootstrap.min.css',
    'css/signin.css',
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'icons/icon-96x96',
     'app.js',

     'vendor/jquery/jquery.min.js',
     'vendor/bootstrap/js/bootstrap.bundle.min.js',
         'css/modern-business.css',
];

self.addEventListener('install', async (event) => {
 event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        cache.addAll(offlinePages)
    })
 );
});



self.addEventListener('activate', (event) => {


});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(staticCacheName);
        const cachedResp = await cache.match(offlinePages);
        return cachedResp;
      }
    })());
  }
});