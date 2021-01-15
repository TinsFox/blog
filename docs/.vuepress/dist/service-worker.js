/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0deeb1443a49cb7e42b2f515a9cef40e"
  },
  {
    "url": "assets/css/0.styles.f27f001d.css",
    "revision": "4966e63330d4be22d57b4a47f5c64602"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f9ec0f34.js",
    "revision": "8a7e635b98b5722e4736569ef4c14815"
  },
  {
    "url": "assets/js/11.d7ff6039.js",
    "revision": "0d972e2e2a5d9f172c427a4d2d48d47e"
  },
  {
    "url": "assets/js/12.7f787f9a.js",
    "revision": "b0490763ec969ed5142271002462f032"
  },
  {
    "url": "assets/js/13.3689fdbc.js",
    "revision": "28727f25e13a8861bf62eb23dfb47e44"
  },
  {
    "url": "assets/js/14.6395478c.js",
    "revision": "549e66ba53407fa54b59d5896b1ed1c8"
  },
  {
    "url": "assets/js/15.b45c04b9.js",
    "revision": "5750937f41fd9819997f8df3682089bb"
  },
  {
    "url": "assets/js/16.da3d6af6.js",
    "revision": "28af5b891a7afc669f21458305df5c0a"
  },
  {
    "url": "assets/js/17.968cf2d1.js",
    "revision": "2375928a2f0c52267907f8917bdc8a95"
  },
  {
    "url": "assets/js/18.cfc269d2.js",
    "revision": "a4c780c981f62e2e71218891496f1b6f"
  },
  {
    "url": "assets/js/19.d5cabfa1.js",
    "revision": "2d510464d656b40f5a248377803fac73"
  },
  {
    "url": "assets/js/2.e9383b9d.js",
    "revision": "c0f43675ff23d8c5e6a796ec82a23746"
  },
  {
    "url": "assets/js/20.019e7a2a.js",
    "revision": "6de1d39612dc2ad842e18eec69e52142"
  },
  {
    "url": "assets/js/21.b7b196c5.js",
    "revision": "29513309506ac87d1396f94aff63e9a6"
  },
  {
    "url": "assets/js/3.405c2dc8.js",
    "revision": "a2f6353bf87799d584717e4822608143"
  },
  {
    "url": "assets/js/4.991daea8.js",
    "revision": "da708ca02b402d88adb40841543347ea"
  },
  {
    "url": "assets/js/5.6e47d801.js",
    "revision": "224c8e6548d7e2b7d1b18fd5e62ecdce"
  },
  {
    "url": "assets/js/6.f7ce3416.js",
    "revision": "075d8bbc96190f6e08509a9bbb72636e"
  },
  {
    "url": "assets/js/7.51086548.js",
    "revision": "b88bb39069f25704127d32b8990787f9"
  },
  {
    "url": "assets/js/8.16d04e9d.js",
    "revision": "b73be9dbba1f113454741aa252073855"
  },
  {
    "url": "assets/js/9.3b93b14e.js",
    "revision": "1e3847aa2cd375f1400fb21366586f76"
  },
  {
    "url": "assets/js/app.e325c094.js",
    "revision": "9d6ff92958f1cc92f20b6301796b7b54"
  },
  {
    "url": "backend/index.html",
    "revision": "ea97a276bd4ea7dd6a4669613f4875b2"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "3fd59931481bff7a3a01f22aafe2ed9e"
  },
  {
    "url": "computer/index.html",
    "revision": "e48a595ec8296522191e30bf69a6d595"
  },
  {
    "url": "computer/os/index.html",
    "revision": "76cabd07ecde3a94a5d4612231ef707d"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "0a763b097252fbd05b1c2df373584373"
  },
  {
    "url": "frontend/index.html",
    "revision": "b395041f4efd4a7dddeb90e5efa8ad68"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "9dfdb2cdb3dbd8b253729dbcbf5005c1"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "6f9042a2e2d6a5840f6b58940391d3fb"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "99e9a37097eb96dd5867ac8e06cd51fc"
  },
  {
    "url": "guide/index.html",
    "revision": "3a685a2798995aff60d0080d170b854f"
  },
  {
    "url": "index.html",
    "revision": "348bd6a610a65009fcb5475210a4f0fb"
  },
  {
    "url": "logo.jpg",
    "revision": "4776d6055d8e7044bbd1697b37367501"
  },
  {
    "url": "more/index.html",
    "revision": "6ee0a37df575ba7d0cefdec06f4f0af2"
  },
  {
    "url": "more/interview/index.html",
    "revision": "ab4b250623079c997c32e0fe4ac1bbaf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
