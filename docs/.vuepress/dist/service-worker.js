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
    "revision": "677a36e890c72dea6b107f2b83af8255"
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
    "url": "assets/js/app.72bfdf33.js",
    "revision": "148cf06d80a5c718683a7bb2c8e310b9"
  },
  {
    "url": "backend/index.html",
    "revision": "7c6b470c3a4e0880ac9420290f5f0603"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "d8cde48506c47f594111e956b55c3ed1"
  },
  {
    "url": "computer/index.html",
    "revision": "2894fca56d4604f4144d57582572ca47"
  },
  {
    "url": "computer/os/index.html",
    "revision": "f3a317dc548f34d5b5808e2cb142b6a8"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "f2ad6cda775c0d35e692ccc33c36b300"
  },
  {
    "url": "frontend/index.html",
    "revision": "42d90901d21aa61e26b1a86d694338c5"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "d3c2cca86f37b2bf29025895f865792f"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "74ccf515e45693f59e614049d3932d02"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "f174c062367cc1b566529704ef8832dc"
  },
  {
    "url": "guide/index.html",
    "revision": "eb2afe6c075473d65062a9de1a8707eb"
  },
  {
    "url": "index.html",
    "revision": "5c81344311e94b9db8bc6d73285d72ca"
  },
  {
    "url": "logo.jpg",
    "revision": "4776d6055d8e7044bbd1697b37367501"
  },
  {
    "url": "more/index.html",
    "revision": "247c256b67526b49949a392a37213bd0"
  },
  {
    "url": "more/interview/index.html",
    "revision": "7cd873398a47df3377ca8d82bb12b9b0"
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
