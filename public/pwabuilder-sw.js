// PWA Builder 기본 SW (Workbox 적용 전 버전)

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// offline.html 을 설치 시점에 미리 캐싱
self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

// Navigation preload 활성화
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

// fetch 이벤트 → navigation 만 처리
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {

    event.respondWith((async () => {
      try {
        // navigation preload 응답이 있으면 그걸 사용
        const preloadResp = await event.preloadResponse;
        if (preloadResp) {
          return preloadResp;
        }

        // 없다면 네트워크 요청
        const networkResp = await fetch(event.request);
        return networkResp;

      } catch (error) {
        // 네트워크 실패 → offline.html fallback
        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});
