self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("speakfriend-cache").then(cache => {
      return cache.addAll(["index.html", "login.html", "signup.html", "style.css"]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});