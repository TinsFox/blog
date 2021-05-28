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
    "revision": "ed7a49da3cb0976553766d8b5d7280db"
  },
  {
    "url": "assets/css/0.styles.020b361d.css",
    "revision": "9154d7a1b757f0b3adcf3e4e2837a6c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a05413ae.js",
    "revision": "9135c6cc4f541dbdcaec7b8b3c0970af"
  },
  {
    "url": "assets/js/11.5a75dba6.js",
    "revision": "f9732eed16395d1cefc22e8bca156b35"
  },
  {
    "url": "assets/js/12.944dcc41.js",
    "revision": "efaaf0a1afdb77d4d630253b0b91ea42"
  },
  {
    "url": "assets/js/13.1d350cb8.js",
    "revision": "d374a9c923285b3c1a05ac4948874669"
  },
  {
    "url": "assets/js/14.95fa5748.js",
    "revision": "33d64f01cf0b0e27fe14148671cfef9d"
  },
  {
    "url": "assets/js/15.403e2463.js",
    "revision": "4e34a3d4b3abbd064d1f830d43a03dd4"
  },
  {
    "url": "assets/js/16.23603a95.js",
    "revision": "77ba0d6440efabf0d2903a2084e10728"
  },
  {
    "url": "assets/js/17.35778143.js",
    "revision": "d9af87af358ef724d29a74699f987167"
  },
  {
    "url": "assets/js/18.d2ba22f9.js",
    "revision": "ceaff7e03177b92fd3a402824df1a5ac"
  },
  {
    "url": "assets/js/19.20a56c3c.js",
    "revision": "65a89b6a7362e3ca30064b626693384e"
  },
  {
    "url": "assets/js/2.258b7133.js",
    "revision": "5ca2caae704bfa2611833e12b8799633"
  },
  {
    "url": "assets/js/20.e02efae9.js",
    "revision": "e231fb869a7ec9831b6c88710aac1cee"
  },
  {
    "url": "assets/js/21.ce22157b.js",
    "revision": "f77d1715c53e229c5e7d63fbcdd4f9ec"
  },
  {
    "url": "assets/js/22.ffe68c71.js",
    "revision": "282419661300dcdb50151f26886e39a2"
  },
  {
    "url": "assets/js/23.49e9514b.js",
    "revision": "52f36592e8ee02c4db322e6dd71af5d3"
  },
  {
    "url": "assets/js/24.04b3788d.js",
    "revision": "1732fa113d7f511ca2bf86a17c5f4e98"
  },
  {
    "url": "assets/js/25.3d6038bd.js",
    "revision": "91539437de4a0f5b3485263a3120bd67"
  },
  {
    "url": "assets/js/26.51413742.js",
    "revision": "c5dbcb87eee61f380cb443f324f5ff43"
  },
  {
    "url": "assets/js/27.ebc3bc20.js",
    "revision": "59720846360adbb566881d96b921e150"
  },
  {
    "url": "assets/js/28.9f1d81d6.js",
    "revision": "8b64ad4419b9db4d679eda4925a1765d"
  },
  {
    "url": "assets/js/29.8a24b6c9.js",
    "revision": "ed8020a5463796781dc5e529124a63f7"
  },
  {
    "url": "assets/js/3.017e4dcb.js",
    "revision": "8dad66a03c44b3c364a1060d9155a93d"
  },
  {
    "url": "assets/js/30.36b63e9d.js",
    "revision": "bb3c1b6b9d8380c374aaec701785e2ca"
  },
  {
    "url": "assets/js/31.bfdd153a.js",
    "revision": "92ced19ded897dc72151b2b89e23d728"
  },
  {
    "url": "assets/js/32.5a6b8369.js",
    "revision": "f483b4753631087dfc4a433c77e8a16c"
  },
  {
    "url": "assets/js/33.be3635b1.js",
    "revision": "efd8bfb155a75fbdbecdb1b386f8dc0b"
  },
  {
    "url": "assets/js/34.f46800a0.js",
    "revision": "e097d68c202d61c5e0c221838c0eebe3"
  },
  {
    "url": "assets/js/35.00c3ed46.js",
    "revision": "2415e1de0c1fcfab1630e3efa6b31f63"
  },
  {
    "url": "assets/js/36.76b3994c.js",
    "revision": "3b22e1904f6e9ae21f08f7931c2d0b13"
  },
  {
    "url": "assets/js/37.64f8d805.js",
    "revision": "439f67512d31e781128b5874d4e0b720"
  },
  {
    "url": "assets/js/38.a05c4cae.js",
    "revision": "e65987ac7c6b0e6ca5e7eaf58a2994c3"
  },
  {
    "url": "assets/js/39.95954e23.js",
    "revision": "3ce3eaac741b405e1db392164524bcd5"
  },
  {
    "url": "assets/js/4.03fc35ff.js",
    "revision": "1a6187f87debe65fa443e730eb210438"
  },
  {
    "url": "assets/js/40.d43637ec.js",
    "revision": "85d73a0b05dad79655ffa398db644252"
  },
  {
    "url": "assets/js/41.61e18b4c.js",
    "revision": "24c76764bdeee80dd760ae8b2313bca5"
  },
  {
    "url": "assets/js/42.e5636ecf.js",
    "revision": "48104acbd435bc94419014a77a1e3932"
  },
  {
    "url": "assets/js/43.d9e57c11.js",
    "revision": "5f1690720c5679957de609fa35296351"
  },
  {
    "url": "assets/js/44.3a6de3b6.js",
    "revision": "8c460bec279099d3c616fec3e517c51b"
  },
  {
    "url": "assets/js/45.440094f2.js",
    "revision": "a3bd895c002f577e3adca629ce389c3a"
  },
  {
    "url": "assets/js/46.b09aabcf.js",
    "revision": "4e3afc62237e1647e882453e87d77ba6"
  },
  {
    "url": "assets/js/47.17754eb2.js",
    "revision": "cd8c98f09cc77e3cb011d3878bf41565"
  },
  {
    "url": "assets/js/48.134fe04e.js",
    "revision": "d9391782363807aec94754897db0929d"
  },
  {
    "url": "assets/js/49.40955936.js",
    "revision": "c98bb318df364b40f789060ddfeb1321"
  },
  {
    "url": "assets/js/5.1092b25f.js",
    "revision": "87491fec4b879ad8cf445d82b61e5de2"
  },
  {
    "url": "assets/js/50.8ce5b936.js",
    "revision": "2458fbce567c4ab51a63fa818e759979"
  },
  {
    "url": "assets/js/51.c4622e54.js",
    "revision": "ce436fd8a843cf2df7f8c9d7a3dd7749"
  },
  {
    "url": "assets/js/52.7e7acd8e.js",
    "revision": "22351d788fe3107d36d3342bbdddb822"
  },
  {
    "url": "assets/js/53.aa1b6791.js",
    "revision": "038a414ae5b8c96653be80a7a0acb3a0"
  },
  {
    "url": "assets/js/6.8b85a230.js",
    "revision": "f0a2286b361f92a78b0eff0de20edcf0"
  },
  {
    "url": "assets/js/7.d26ce720.js",
    "revision": "86fe3e19043260f06b22ba21b1dc2d62"
  },
  {
    "url": "assets/js/8.09d657c0.js",
    "revision": "15a89bec18ab704866f22fbca1c340c0"
  },
  {
    "url": "assets/js/9.520e4064.js",
    "revision": "d5a314d21cc17b0427408076be1c4a4e"
  },
  {
    "url": "assets/js/app.1f1b9b14.js",
    "revision": "8d5460069254841ec7de1cbb5b5a8c11"
  },
  {
    "url": "backend/index.html",
    "revision": "a9b50852d4a15af23e80adb5ae23d0c9"
  },
  {
    "url": "backend/Koa/index.html",
    "revision": "88b56638fcee26176a831647f5ecab95"
  },
  {
    "url": "backend/MongoDB/index.html",
    "revision": "55b4bb4af466d8d121a55da1bc87ea10"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "c27ddc91b58dc8138e4ed38628f4f590"
  },
  {
    "url": "frontend/css/CSS性能优化.html",
    "revision": "3ad26a69f3894f0bbda793108f27297e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "60b3cf66c35fd53f2deec938f8603e48"
  },
  {
    "url": "frontend/css/垂直居中.html",
    "revision": "07b7313048ce32b4ddee41dca9ed056b"
  },
  {
    "url": "frontend/d3js/index.html",
    "revision": "f1c2da0a40d7d8a9d5563f1b3f862aab"
  },
  {
    "url": "frontend/flutter/index.html",
    "revision": "788bea9835683370bd298dfe0c1eb9e9"
  },
  {
    "url": "frontend/index.html",
    "revision": "a3eed3a6eef73c02cc17bea2947c32f0"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "c17c934d42fef7facaa8c059f14438a6"
  },
  {
    "url": "frontend/javascript/promise.html",
    "revision": "397e4e4b1ac1c4a6e104e55b8b83e9e4"
  },
  {
    "url": "frontend/javascript/this.html",
    "revision": "998857e03d76ab4b7b16f20c8e3c846c"
  },
  {
    "url": "frontend/javascript/作用域.html",
    "revision": "283d2fa3b4150341f32f2bdd8f41d10d"
  },
  {
    "url": "frontend/javascript/垃圾回收机制.html",
    "revision": "4f093ebacc776e3abab4bda90e4b101c"
  },
  {
    "url": "frontend/javascript/执行上下文.html",
    "revision": "7fa03cf339171215712e6256222a591a"
  },
  {
    "url": "frontend/javascript/数据类型.html",
    "revision": "a908817cb1cb5b8374d0d56255ee625d"
  },
  {
    "url": "frontend/javascript/数组.html",
    "revision": "2b595b09fa47dcd631fce5fc53050fbe"
  },
  {
    "url": "frontend/javascript/浅拷贝与深拷贝.html",
    "revision": "557b8e04609a4d0077c30132cefecfeb"
  },
  {
    "url": "frontend/javascript/浏览器渲染过程.html",
    "revision": "3e32732a9b6cd9d1955cdb054d439775"
  },
  {
    "url": "frontend/javascript/缓存.html",
    "revision": "69676ba791e1a28c2e975a0ae018baa8"
  },
  {
    "url": "frontend/javascript/闭包.html",
    "revision": "525e12d2559a56100d3acde65abe6a58"
  },
  {
    "url": "frontend/javascript/防抖与节流.html",
    "revision": "f318278304d7edb7f6346696a9f071dd"
  },
  {
    "url": "frontend/javascript/预编译.html",
    "revision": "471fa900ca56f1308dea03334c893be6"
  },
  {
    "url": "frontend/lodash/index.html",
    "revision": "02e9d8d2c185159e0cd19e7fd6237b8a"
  },
  {
    "url": "frontend/miniprogram/index.html",
    "revision": "0e05d306e73dc0d6b8c80f073abe8b0f"
  },
  {
    "url": "frontend/uniapp/anchor-point.html",
    "revision": "b7bc9e585da2fc2b0244196fe46bf6cc"
  },
  {
    "url": "frontend/uniapp/index.html",
    "revision": "285a10f13b66eee9082f30dc7800f6c6"
  },
  {
    "url": "frontend/uniapp/quickstart.html",
    "revision": "5812b28713d91bf3626554560182416e"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "8b9ac4741f8a52223027497fe8b3544b"
  },
  {
    "url": "frontend/vue/index.html",
    "revision": "f43f27c7b06283e8b4ac1a147d6d4728"
  },
  {
    "url": "frontend/vue/vuex.html",
    "revision": "8dfde329b2be199bad64f08443988f60"
  },
  {
    "url": "frontend/vue/生命周期.html",
    "revision": "dda5caef9e3a55113ee8feabdabb4f2a"
  },
  {
    "url": "frontend/webpack/index.html",
    "revision": "346f327447ee93bf7586f7df571f95c5"
  },
  {
    "url": "guide/index.html",
    "revision": "0a5b9a861b6267b91acf3047dbdd7a47"
  },
  {
    "url": "index.html",
    "revision": "b10d0b7fb30821732e53129ce17e20ac"
  },
  {
    "url": "logo.jpg",
    "revision": "4776d6055d8e7044bbd1697b37367501"
  },
  {
    "url": "more/index.html",
    "revision": "a6aeb401656f04efd56dadf9f8252f5c"
  },
  {
    "url": "more/interview/index.html",
    "revision": "6c6bdeaf73db05dfeb09cb83fbdf8dda"
  },
  {
    "url": "more/limbo/index.html",
    "revision": "62c8082ba6029d39e32f01cc85c53959"
  },
  {
    "url": "OperationAndMaintenance/DevOps/index.html",
    "revision": "b110681d8081e5d8e3fa991df729271f"
  },
  {
    "url": "OperationAndMaintenance/docker/index.html",
    "revision": "12574beb1890e5ba3e334d8c50350267"
  },
  {
    "url": "OperationAndMaintenance/nginx/index.html",
    "revision": "372bb305f7008159a98e480446a3ee16"
  },
  {
    "url": "OperationAndMaintenance/shell/index.html",
    "revision": "9ad8efc3044d923932ea682e718fdb45"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3bbc2e5b60fc089cd514f39437b3409b"
  },
  {
    "url": "tools/index.html",
    "revision": "c2c7f43c3564463b873d2b5a57c99513"
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
