// No service worker — self-unregistering stub
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => {
  self.clients.claim();
  // Unregister this stub so browsers stop requesting it after the first visit
  self.registration.unregister();
});
