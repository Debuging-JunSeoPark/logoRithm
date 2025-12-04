/* ========================================================
   Workbox 기반 PWA 서비스 워커 (SWR 전략 사용)
   - HTML: NetworkFirst + offline fallback
   - JS/CSS: StaleWhileRevalidate
   - Images: CacheFirst
   - API: NetworkFirst
   =========================================================== */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const OFFLINE_FALLBACK = 'offline.html';

/* -----------------------------------------------------------
   SW 빠른 업데이트용 메시지 핸들러 (app에서 postMessage로 호출)
----------------------------------------------------------- */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', () => {
  // 새 SW가 바로 컨트롤하도록
  clients.claim();
});

/* -----------------------------------------------------------
   offline.html 미리 캐싱 (네비게이션 폴백용)
----------------------------------------------------------- */
workbox.precaching.precacheAndRoute([
  { url: OFFLINE_FALLBACK, revision: null },
]);

/* -----------------------------------------------------------
   Navigation Preload 활성화 (초기 로딩 속도 개선)
----------------------------------------------------------- */
if (workbox.navigationPreload.isSupported()) {
  console.log("preload");
  workbox.navigationPreload.enable();
}

/* -----------------------------------------------------------
   1. HTML Navigation → NetworkFirst + offline fallback
----------------------------------------------------------- */

workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',

  // 커스텀 핸들러: preload → network → fallback 순
  async ({ event }) => {
    try {
      // 1) 브라우저가 미리 받아놓은 응답이 있으면 사용
      const preloadResp = await event.preloadResponse;
      if (preloadResp) return preloadResp;

      // 2) Workbox NetworkFirst 전략 사용
      return await new workbox.strategies.NetworkFirst({
        cacheName: 'pages',
        networkTimeoutSeconds: 3,
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
          }),
        ],
      }).handle({ event });
    } catch (err) {
      // 3) 네트워크/전략 모두 실패하면 offline.html로 폴백
      return caches.match(OFFLINE_FALLBACK);
    }
  },
);

/* -----------------------------------------------------------
   2. JS / CSS 번들 → StaleWhileRevalidate
   - 캐시된 번들을 바로 응답
   - 백그라운드에서 최신 번들로 교체 (자동 전파)
----------------------------------------------------------- */

workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === 'script' ||
    request.destination === 'style',

  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30일
      }),
    ],
  }),
);

/* -----------------------------------------------------------
   3. 이미지 → CacheFirst + 만료 정책
   - 트래픽 절약 & 빠른 로딩
----------------------------------------------------------- */

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',

  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7일
      }),
    ],
  }),
);

/* -----------------------------------------------------------
   4. API (GET) → NetworkFirst (+ 캐시 만료)
   - 최신 데이터 우선, 오프라인/타임아웃 시 캐시 fallback
----------------------------------------------------------- */

workbox.routing.registerRoute(
  ({ url, request }) =>
    request.method === 'GET' &&
    url.pathname.startsWith('/api/'),

  new workbox.strategies.NetworkFirst({
    cacheName: 'api',
    networkTimeoutSeconds: 3,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 5, // 5분
      }),
    ],
  }),
);
