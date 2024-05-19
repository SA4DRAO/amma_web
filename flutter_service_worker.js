'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cf3f186593e51fcf613dc1571c0a40fe",
"assets/AssetManifest.bin.json": "995b3ce13d220936228a8ca208697717",
"assets/AssetManifest.json": "17493558e959d178f6e0ca58aebfa3fd",
"assets/assets/english.json": "d0eb2f62f0fc4ba85632e9684e9e0d10",
"assets/assets/img/colors/black.jpg": "1bb645a9ffcd30075d521fb97e193eff",
"assets/assets/img/colors/blue.jpg": "f2e9d3b4a5569dd01b4ce058b7b3ad6d",
"assets/assets/img/colors/green.jpg": "dd9b779c6ffcf3efdb34a5d05a4e6067",
"assets/assets/img/colors/orange_c.jpg": "39ccd6a2df8959b47889ff27534b4f9a",
"assets/assets/img/colors/pink.jpg": "226bc42ef9d17187a652bb03b9cb90eb",
"assets/assets/img/colors/red.jpg": "d2e25058a08edb14dbe1c31629dc4178",
"assets/assets/img/colors/white.jpg": "1ecf575460e8b5c7190b9392b8f4e578",
"assets/assets/img/colors/yellow.jpg": "6c42ad6a03b5fba7b3617bc9d9f58986",
"assets/assets/img/domestic%2520animals/cat.jpg": "f39d04ebd97f608cbd614c80bc1c4694",
"assets/assets/img/domestic%2520animals/cow.jpg": "285485b7bd0eebe377a86f48c9bce741",
"assets/assets/img/domestic%2520animals/dog.jpg": "bffddcb8f776cc8f87c73a8828e0e14a",
"assets/assets/img/domestic%2520animals/donkey.jpg": "137e1d8d2e529a4049e517134f3a312a",
"assets/assets/img/domestic%2520animals/duck.jpg": "3559395c65f40e4552d19859cd933789",
"assets/assets/img/domestic%2520animals/frog.jpg": "d39c5812ee7e5ed904c3a7d13314d16e",
"assets/assets/img/domestic%2520animals/goat.jpg": "3176846193bfe45cc09c0ed99f0d29d9",
"assets/assets/img/domestic%2520animals/hen.jpg": "a27d9f8be3781dba096aaef204c11afd",
"assets/assets/img/domestic%2520animals/lizard.jpg": "6e39bc1c7d73656379aa19d225be047f",
"assets/assets/img/domestic%2520animals/mouse.jpg": "8bef81062ed05b80f81c74dff93e447e",
"assets/assets/img/domestic%2520animals/parrot.jpg": "ab767105b1ed149445175634ed3f3b2c",
"assets/assets/img/domestic%2520animals/pigeon.jpg": "6cc6430515928a278cbcd83939db4c1b",
"assets/assets/img/domestic%2520animals/sheep.jpg": "c1bf783d28584ed915621e2f9d1d18fb",
"assets/assets/img/domestic%2520animals/snake.jpg": "8b487ace3f750c2eb9a0de1ae47f9253",
"assets/assets/img/flowers/hibiscus.jpg": "85f58dd1033db29dcfd54eda45deb46c",
"assets/assets/img/flowers/jasmine.jpg": "95f228268d52961efef4017c4f34fa9e",
"assets/assets/img/flowers/lily.jpg": "5dacdf06da9a59516afc7f8094acc71a",
"assets/assets/img/flowers/lotus.jpg": "dfc0cc8504b549343cd239d29dfbc13a",
"assets/assets/img/flowers/marigold.jpg": "f8d763ae92a777db6e0ba67a805b53e4",
"assets/assets/img/flowers/rose.jpg": "452ee3268b3637a40f687140ded4df67",
"assets/assets/img/flowers/sunflower.jpg": "f2dc4f21206b71a5eba54140978c3de7",
"assets/assets/img/fruits/apple.jpg": "9ca926d309e6f49f8aa36ae7cb7980cc",
"assets/assets/img/fruits/banana.jpg": "cdae2e7504dcec75eea5f3fe0c0d298f",
"assets/assets/img/fruits/cherry.jpg": "3c4c459894079d02e10cd21bc8228308",
"assets/assets/img/fruits/grapes.jpg": "afe1c686d330bc0076f8cba24d627068",
"assets/assets/img/fruits/mango.jpg": "a08cf6dc3d26cb5ba934d0f8951c65df",
"assets/assets/img/fruits/orange.jpg": "0ec745130dbed95504ff82ab9b3a356a",
"assets/assets/img/fruits/papaya.jpg": "ead97c71d01e29e614b5a874e17d0fe4",
"assets/assets/img/insects/butterfly.jpg": "97cb1a7e72966380c7e01325e366a8fe",
"assets/assets/img/insects/fly.jpg": "8c15e8aa6399c930d2532d59e59aa80e",
"assets/assets/img/insects/mosquito.jpg": "53fb0e21a9f9c3e893d98955978759ad",
"assets/assets/img/insects/spider.jpg": "ec0f62c60b3b01673a6ecb12e4ea9f2a",
"assets/assets/img/vegetables/beans.jpg": "6e7654e38e860ee6934304722a469b18",
"assets/assets/img/vegetables/brinjal.jpg": "bb5d390636a501f08975dc2f669502d0",
"assets/assets/img/vegetables/cabbage.jpg": "4e9fc8334819f8dd7da7a15db123a8d8",
"assets/assets/img/vegetables/cauliflower.jpg": "63bd515d96669f6e958dc08fa597f426",
"assets/assets/img/vegetables/ladies_finger.jpg": "a76adba1f0f515d1e4ccaa365eaa6e96",
"assets/assets/img/vegetables/potato.jpg": "8913f4860506c35040431916ba596e27",
"assets/assets/img/vegetables/tomato.jpg": "afd5f9e904d4af5d4e7c4488b14ad629",
"assets/assets/img/vehicles/bike.jpg": "44811b1d3ff7a55499291b362fde690d",
"assets/assets/img/vehicles/bus.jpg": "c7af7e5c1efcd252b47c36b5014cba7c",
"assets/assets/img/vehicles/car.jpg": "a40960c45a6cc25e17a0dfdfc6e757e6",
"assets/assets/img/vehicles/cycle.jpg": "30d63f3265449b9e8c039829cb73ec5d",
"assets/assets/img/vehicles/plane.jpg": "cb5da7378e017ebe6fe372d788ef0a04",
"assets/assets/img/vehicles/ship.jpg": "b9bc123e34eed8d0b832c1c3f69c1e8f",
"assets/assets/img/vehicles/train.jpg": "098d243ac513280722fe7934cebe5a06",
"assets/assets/img/wild%2520animals/bear.jpg": "04effc654c340876ff2aa855501a8c17",
"assets/assets/img/wild%2520animals/deer.jpg": "3eb08da4079059bcf15fc02e347f7b41",
"assets/assets/img/wild%2520animals/eagle.jpg": "0aec0e4db8cb53c9643bdeb7c4ec5034",
"assets/assets/img/wild%2520animals/elephant.jpg": "55aa1c554fecaf9d53319fa715e2fde0",
"assets/assets/img/wild%2520animals/fish.jpg": "cb320552828e9624fe18bcb0769421c7",
"assets/assets/img/wild%2520animals/fox.jpg": "dbc1bc44999d35e7d1212c9a546742dd",
"assets/assets/img/wild%2520animals/lion.jpg": "0ad1f1f68b457f8d9d11feded65f7ab7",
"assets/assets/img/wild%2520animals/monkey.jpg": "79492438bb47e439a0452974302c60d7",
"assets/assets/img/wild%2520animals/tiger.jpg": "5d232234e8d40343d2cdb16e297ca0a9",
"assets/assets/img/wild%2520animals/zebra.jpg": "11e50bd156f13f22c2371c3c5eba1495",
"assets/assets/logo.jpg": "9a5211a8d8f21f3265a1d9e2f31674cb",
"assets/assets/logo.png": "9a5211a8d8f21f3265a1d9e2f31674cb",
"assets/assets/teach.png": "c50774f64fb6282791fd09f03a50df1f",
"assets/assets/telugu.json": "c0912aac01e8a5dc8b8c29f9823ac331",
"assets/assets/telugu.txt": "a8fa091fbb649a87b8d1de85886d9aa5",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "49c793ff1043f719f36db67d0ae55633",
"assets/NOTICES": "f9dcb9886e80fc9b6f0a219622803ef5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1a05385ac3bc475bd8955a8f04cfeec",
"/": "f1a05385ac3bc475bd8955a8f04cfeec",
"main.dart.js": "e9b70afdbd59ae3d0fe8319c390029f5",
"manifest.json": "4b2b0c5fdcab2df5eb1d657582d70acc",
"splash/img/dark-1x.png": "86068516b14fbbf1f5a6ea4195c73fd6",
"splash/img/dark-2x.png": "82c5035273ab889cbd823d3566346d60",
"splash/img/dark-3x.png": "c3005aa8ee7abb642a8916e04b372f95",
"splash/img/dark-4x.png": "6619ff1787509b6d5479f3c5457543c7",
"splash/img/light-1x.png": "86068516b14fbbf1f5a6ea4195c73fd6",
"splash/img/light-2x.png": "82c5035273ab889cbd823d3566346d60",
"splash/img/light-3x.png": "c3005aa8ee7abb642a8916e04b372f95",
"splash/img/light-4x.png": "6619ff1787509b6d5479f3c5457543c7",
"version.json": "ee0639bbd3b2967085da77b1c3bf31e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
