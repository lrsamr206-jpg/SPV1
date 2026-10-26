const CACHE = "spv1-web-v03";
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "./index.html", "./manifest.webmanifest"])).then(()=>self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => { if(e.request.method !== "GET") return; e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
