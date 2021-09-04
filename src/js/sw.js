self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', function(event) {
  event.waitUntil(async function() {
    if (self.registration.navigationPreload) await self.registration.navigationPreload.enable()
    await self.clients.claim()
    await caches.delete('statics')
  }())
})

self.addEventListener('fetch', function(event) {
  if (event.request.url.startsWith(self.location.origin) && event.request.method == 'GET' && !/browser-sync/.test(event.request.url))
    event.respondWith(async function() {
      if (!event.request.url.endsWith('/')) {
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) return cachedResponse
        
        const response = await fetch(event.request)
        const cache = await caches.open('statics')
        await cache.put(event.request, response.clone())
        return response
      } else
        try {
          if (/.+(js\/script\.js)$/.test(event.request.url) || event.request.url.includes('gtag') || event.request.url.includes('plausible') || event.request.url.includes('umami')) return await fetch(event.request)
          
          const preloadResponse = await event.preloadResponse
          if (preloadResponse) return preloadResponse
          
          const response = await fetch(event.request)
          const cache = await caches.open('offline')
          await cache.put(event.request, response.clone())
          return response
        } catch {
          return caches.match(event.request)
        }
    }())
})
