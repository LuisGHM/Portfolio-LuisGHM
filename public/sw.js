const CACHE_NAME = 'luis-portfolio-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/en',
  '/pt',
  '/manifest.json',
  '/cv-luis-marchiore.pdf'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Caching static assets');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .catch((error) => {
        console.error('❌ Failed to cache static assets:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('✅ Serving from cache:', event.request.url);
          return cachedResponse;
        }

        // Fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cache successful responses
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                // Only cache same-origin requests and assets
                if (event.request.url.startsWith(self.location.origin)) {
                  console.log('💾 Caching new resource:', event.request.url);
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          })
          .catch((error) => {
            console.error('❌ Network request failed:', event.request.url, error);

            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/') || new Response(
                `<!DOCTYPE html>
                <html>
                <head>
                  <title>Portfolio - Offline</title>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>
                    body {
                      font-family: system-ui, sans-serif;
                      text-align: center;
                      padding: 2rem;
                      background: linear-gradient(135deg, #5C63ED, #623CEA);
                      color: white;
                      min-height: 100vh;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      margin: 0;
                    }
                    .offline-container {
                      max-width: 400px;
                    }
                    h1 { font-size: 2rem; margin-bottom: 1rem; }
                    p { font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9; }
                    button {
                      background: white;
                      color: #5C63ED;
                      border: none;
                      padding: 12px 24px;
                      border-radius: 8px;
                      font-size: 1rem;
                      font-weight: 600;
                      cursor: pointer;
                      transition: transform 0.2s;
                    }
                    button:hover { transform: translateY(-2px); }
                  </style>
                </head>
                <body>
                  <div class="offline-container">
                    <h1>📱 You're Offline</h1>
                    <p>No internet connection. The portfolio is cached and will work when you're back online.</p>
                    <button onclick="window.location.reload()">Try Again</button>
                  </div>
                </body>
                </html>`,
                {
                  headers: {
                    'Content-Type': 'text/html; charset=utf-8'
                  }
                }
              );
            }

            // For other requests, just fail
            throw error;
          });
      })
  );
});

// Background sync for failed requests (future enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('🔄 Background sync triggered');
    // Handle background sync here
  }
});

// Push notifications (future enhancement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    console.log('📬 Push notification received:', data);

    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-96x96.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Portfolio',
          icon: '/icons/icon-96x96.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icons/icon-96x96.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});