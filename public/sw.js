// Service worker: clear stale caches and unregister to avoid serving old assets (ads/analytics)
// This worker will attempt to remove caches and then unregister itself, forcing clients to reload

const SW_VERSION = '2';

self.addEventListener('install', (event) => {
    // Activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        try {
            // Delete all caches
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));

            // Claim clients so we can reload them
            await self.clients.claim();

            // Unregister this service worker so it no longer intercepts requests
            await self.registration.unregister();

            // Try to reload all clients to pick up fresh assets (no SW)
            const allClients = await self.clients.matchAll({ includeUncontrolled: true });
            for (const client of allClients) {
                try {
                    // navigate to the same URL to force a reload
                    client.navigate(client.url);
                } catch (e) {
                    // ignore navigation errors
                }
            }
        } catch (err) {
            // Swallow errors but log for debugging
            console.error('SW cleanup failed:', err);
        }
    })());
});

self.addEventListener('fetch', (event) => {
    // Do not intercept; just do a normal network fetch to avoid any cached/modified responses
    event.respondWith(fetch(event.request));
});