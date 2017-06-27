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
});

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

        return fetch(event.request);
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

