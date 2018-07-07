var cacheName = 'latestNews-v1';

// Cache our known resources during install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      //'./js/main.js'
    ]))
  );
});

// Cache any new resources as they are fetched
self.addEventListener('fetch', function(event) {
  var requrl = event.request?event.request.url:'';
  //不处理POST或者跨域请求或者http请求，也不处理非dist下的文件请求
  if (requrl && (event.request.method !== 'GET' || !requrl.startsWith(origin) || requrl.indexOf('/sw.js')==-1)){
  	return;
  }
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true })
    .then(function(response) {
      if (response) {
        return response;
      }
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response) {
          if(!response || response.status !== 200) {
            return response;
          }

          var responseToCache = response.clone();
          caches.open(cacheName)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });

          return response;
        }
      );
    })
  );
});
