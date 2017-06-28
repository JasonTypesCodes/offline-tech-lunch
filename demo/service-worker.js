const VERSION = 'v1';

const RESOURCES = [
  'index.html',
  './', // Alias for index.html
  'demo.js',
  'other.html',
  'https://code.jquery.com/jquery-3.2.1.min.js' // Other origins?!?!
];

self.addEventListener('install', event => {
  console.log('Install event fired!');
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(RESOURCES))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  console.log('Activate event fired!');
  console.log(event);
  self.clients.claim();
});

function sendStatus(status) {
  return self.clients.matchAll().then(allClients => {
    allClients.forEach(aClient => {
      aClient.postMessage(status);
    });

    return allClients;
  });
}

self.addEventListener('fetch', event => {
  console.log('Fetch fired...');
  console.log(event);
  
  if(!event.request.url.endsWith('/data/3.json')) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          console.log('Found a cached response:');
          console.log(cachedResponse);
          return cachedResponse;
        }

        return fetch(event.request).then(response => {
          return sendStatus('ONLINE').then(() => {
            return new Response(
              response.body,
              {
                status: response.status,
                headers: {
                  'Content-Type': response.headers.get('Content-Type')
                }
              }
            );
          });
        }).catch(error => {
          return sendStatus('OFFLINE').then(() => {
            return Promise.reject(error);
          });
        });
      })
    );
  } else {
    event.respondWith(
      new Response(
        JSON.stringify({message: 'A fake response...'}), 
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'X-Secret-Header': 'Hi!'
          }
        }
      )
    );
  }

});

