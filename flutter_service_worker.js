'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4e262ccd1c241e1dd81cfc818b559054",
"assets/AssetManifest.bin.json": "de83cab73467c8445377dee191149ba5",
"assets/AssetManifest.json": "28e9979c82c3593faeec9e3314b75802",
"assets/assets/font/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/font/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/gif/addfoodplan.json": "4ab50d38cfb9f4bbd11b8676b0af4609",
"assets/assets/gif/Animation%2520-%25201706513554703.json": "b1ac4f2ccf2053a91164859bf206b3cc",
"assets/assets/gif/bicycle-crunches.gif": "1b036f9aa0fdeaecbac70152faa9d6ca",
"assets/assets/gif/calfraise.gif": "aab6d5571f08190e2415e19673d12347",
"assets/assets/gif/clapping-push-ups.gif": "4693838820b1778d812f561ee137f1ea",
"assets/assets/gif/damond%2520pushup.gif": "de0f919f76b24d6f5aa189ad0da2fd0e",
"assets/assets/gif/declinepushupnew.gif": "9e42c1387fc6c446770790753b3890a8",
"assets/assets/gif/deletedone3.json": "45daaf06a5092a49eecd645d3be352f4",
"assets/assets/gif/done.json": "1f41039e95b6b14cec229a67d79abf29",
"assets/assets/gif/editprofile.json": "732b8d774abf9e61013c98550e499361",
"assets/assets/gif/foodplan1.json": "5767afabae4a120fbaed7b0d2cc1d23a",
"assets/assets/gif/halfcrunch.gif": "cefeceb5ebdd588587bd2b4a3dd2583e",
"assets/assets/gif/heart2.json": "ad6f4367405cff6c9d3160ab82a44be6",
"assets/assets/gif/heartrate.json": "f4ed7690178438f150d986110acc1998",
"assets/assets/gif/jump-squat.gif": "9f809ecb4c9d763c5eac1b362444700c",
"assets/assets/gif/karlie-stretch-5.gif": "1a7dc3210e3ccb61b005e3a9c8ca0efa",
"assets/assets/gif/loading...json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/gif/mountain%2520climb.gif": "47e1fae1e52c0c60d47ea9aef860c084",
"assets/assets/gif/parallel-bar-dip.gif": "9ddf7cc714f5bb8915b48095b2da88ec",
"assets/assets/gif/planfoodwelcome.json": "34a147ad9a0287b867e3dc05ab6dd517",
"assets/assets/gif/plank%2520tap.gif": "983aaeb3bd5dac317af8299eeb3a2707",
"assets/assets/gif/plank.gif": "fa62f8cca61b4aeae3dba0eee68e82cf",
"assets/assets/gif/plyometric-push-ups%2520(1).gif": "9e57a1a34e517d53200047f038366607",
"assets/assets/gif/profile%2520updated.json": "628f0036a5cf9d131b7d3ba2e20bf6cb",
"assets/assets/gif/push%2520up.gif": "470d318a551421e46c3891fb1f04dd50",
"assets/assets/gif/russiantwist.gif": "cc50792bd9e5cefc115a4fdff7b9b51a",
"assets/assets/gif/shouldertap.gif": "714330e4d25fa473fedf040e33b01008",
"assets/assets/gif/splash.json": "f1f1ade2c7930623f21f5a1a050787ac",
"assets/assets/gif/split-squat.gif": "5a903a814d0f56e6a2e12d3f7c53d98a",
"assets/assets/gif/squat.gif": "ab603d3df9b30d3a0ac0de614df737a8",
"assets/assets/gif/tricepdips.gif": "de8c9190ce3281414d9608cdde8b2791",
"assets/assets/gif/wall-sit.gif": "64bea7776fe727d1062f559c1a1c684e",
"assets/assets/gif/watertime.gif": "7ef9041bacde4863b0c6f03cd679e165",
"assets/assets/gif/wide-arm-push-ups%2520(1)%2520(1).gif": "3ffdb60affc076c262cb07992503cee4",
"assets/assets/gif/workoutplanadded.json": "bf5050e510b72994d859d102cfe4bd44",
"assets/assets/img/2%2520User.png": "e87816fc7abb05c786ba494a5e1c76b9",
"assets/assets/img/Activity.png": "6c3547383c22e889f4e118d81d784033",
"assets/assets/img/activity_tab.png": "657b2889675a91e857c3241b6b0bb29e",
"assets/assets/img/activity_tab_select.png": "c5a2764036d64c02db99ea63d99a9768",
"assets/assets/img/additional%2520info.jpeg": "2cf90ae8081a9296fd1a2936154108c5",
"assets/assets/img/appbartext%2520(1).png": "12753ad2b78553cf9b208ee2f16fae09",
"assets/assets/img/Back-Navs.png": "29db95db5567b0ddc2cacc40b104c9b0",
"assets/assets/img/bench-dip.png": "86e508e34410ee519848b242b3913b58",
"assets/assets/img/bg1.jpg": "e76734ea0b318504ceef0236bf8501ac",
"assets/assets/img/bmi%25203.png": "c26eebb995b1914fa36a3265e94d019a",
"assets/assets/img/bmi%2520welcome.png": "fab800f36c09f187fe80a219b8a97fa7",
"assets/assets/img/bmi.png": "2035e64395ed3193ad566208dac72166",
"assets/assets/img/bmi2.png": "e3c59043067a25ed936380877d59e3d0",
"assets/assets/img/Brofit%2520splash.png": "9da477326fea946f0f8400d7b41b5cfb",
"assets/assets/img/bycycle%2520crunch.jpeg": "4d25bfd0901ed11fc049539eb8758607",
"assets/assets/img/bycyclecrunch.png": "c55cba9ebfba20a1f6813b6eac91ac21",
"assets/assets/img/calc%25201%25201.png": "777fe5f43c14876e94b5c3fb3c1fcb2e",
"assets/assets/img/calc%25201.png": "b4b7a90a71bd6ae5a7e71dae85e37771",
"assets/assets/img/calc.png": "059622db849123ebf8f3492635fd9347",
"assets/assets/img/Calendar.png": "2aacc66f261b26dc6ad1360130c60536",
"assets/assets/img/calf%2520raise.png": "e466e38f05afe0a3196fe2e4bc6fd540",
"assets/assets/img/calfraise.png": "648fa5806eaa340863edbc1aa2838f78",
"assets/assets/img/carousel3.jpeg": "fd0e7b71c0e843ed6b37402483a836c7",
"assets/assets/img/carrousel%25203.png": "f71b6989bbd2bd25ad92b1c459ed7b57",
"assets/assets/img/carrousel1.png": "d0ee2ee58ab62ed40e81a4a9137d3c73",
"assets/assets/img/carrousel2.png": "eda603cba3daf6f626201fd5108cc3f2",
"assets/assets/img/carusel1.jpeg": "2bb86fb1783793809c5d5643615b61cf",
"assets/assets/img/carusel2.jpeg": "1bd35296de6644e5b14bfe5912cbb92e",
"assets/assets/img/chest%2520dips.jpeg": "fbca26d49662e2b4a2a68050471c4b02",
"assets/assets/img/chest%2520dips.png": "e3eed70b909f274603479111800c6ba9",
"assets/assets/img/clap%2520pushup.jpeg": "b95fafbf126c4afb2bd5ac8a2412fb93",
"assets/assets/img/compete_workout%2520(1).png": "4f6190d4568de4a94339c6b3f3bdfa5a",
"assets/assets/img/complete%2520profile.png": "f6ea6df540d98275000ad2f2c9ea7bdc",
"assets/assets/img/confirm-password.png": "62dd845c7f82c99d81425b8bb7f34ec3",
"assets/assets/img/confirm-password1.png": "0f8641a6fa5d8b36709dbd38ecbcb81b",
"assets/assets/img/confirm-password2.png": "ab2ebcc983b624667771b9c1ec4133b6",
"assets/assets/img/confirm-password3.png": "b11eb195bdfb3524dd2fcbc65c5d0253",
"assets/assets/img/declined%2520push%2520up.png": "0f98133dc6d8e08e690c2b67516442bc",
"assets/assets/img/delete.png": "9d6c3b71c2d90cb33dadbd27e249745c",
"assets/assets/img/deleteicon.png": "f75dc0d33ae042e40dddce47d80b7372",
"assets/assets/img/diamond%2520push%2520up.png": "52697bab7c6604f38b59a6c4c3a863f9",
"assets/assets/img/download%2520(1).jpeg": "84df48ce487d0fca9a0516b379ba1f7b",
"assets/assets/img/download%2520(1).png": "d556494479ff62513fbbf5ecb70762dc",
"assets/assets/img/download.jpeg": "bc8b7be76422f9c6a117f87bf636e979",
"assets/assets/img/Dropdown.png": "018ac3aecc36800dfdad1f0469822e57",
"assets/assets/img/edit.png": "91f749584c714e5487a9426eeb64c44a",
"assets/assets/img/explosive%2520pushup.png": "3000d6a282c1ec7abbccf92f3b7ba320",
"assets/assets/img/food1.png": "4d7e6784c87bc4789355b0050d96f4c6",
"assets/assets/img/fooditem%2520(1).png": "fdc046ef40525028973d640c9d6e8b6f",
"assets/assets/img/half%2520situps.png": "6c7679a1133a0c36ca80205e8d727453",
"assets/assets/img/halfsitups.png": "f3f14b9401dd779d354d5172b67dba57",
"assets/assets/img/havegood%2520sleep.jpeg": "0167026192810352ecc4e72ed0a5c736",
"assets/assets/img/Hide-Password.png": "08062cbdd45a7836b3e18b4c233b9036",
"assets/assets/img/Home.png": "967f8994f1bc65776f4cb773c3a6a0ce",
"assets/assets/img/homebg.jpeg": "2d83bc7bc728b1602ec80df61ecb2c3e",
"assets/assets/img/home_tab.png": "3bde55559793407d1e59d4ea4548f26c",
"assets/assets/img/home_tab_select.png": "c0ad01173170887e957088d97d0a8f85",
"assets/assets/img/Icon-Next.png": "7857945852e28ccbe0e7145d0709001d",
"assets/assets/img/images%2520(1).jpeg": "8ca07e759fcf6170c62c9ae52019a2fe",
"assets/assets/img/images%2520(1).png": "97f87301149241c058a5ced5c0a8cda2",
"assets/assets/img/images%2520(11).jpeg": "c0c78df315fb8934ccd3ce07e4638fd7",
"assets/assets/img/images%2520(12).jpeg": "97da28e95896b210a2acb84f8b05288a",
"assets/assets/img/images%2520(3).png": "9ef492b1dfbcbc3d937b1c2762ee955f",
"assets/assets/img/images%2520(6).png": "605704643b8850502b4002f4e095a8e9",
"assets/assets/img/images%2520(8).jpeg": "16d184c201e9f2eb7e4819f89cc4419d",
"assets/assets/img/images%2520(9).png": "25f00eafbd2d2fb97683ae9f06ff5cee",
"assets/assets/img/inclined%2520push%2520up.jpeg": "f62bb5aa8245ac18e3a05ab5d2ff66d0",
"assets/assets/img/jump%2520squat.png": "088f45a13623eda279c37286a13b235b",
"assets/assets/img/jumpsquat.png": "dcb6666baed099ac8a5005259c63d21d",
"assets/assets/img/listTile1.png": "ea31caa88b86e221f17cadfa71f523ab",
"assets/assets/img/listTile2.png": "1d9df1f1558ae6a9957030f8f77bc3d2",
"assets/assets/img/listTile3.png": "0b16a6d9eb0feb54e0776bc50aa862b9",
"assets/assets/img/listTile4.png": "e696348e2bee6001793998d3996dbdb2",
"assets/assets/img/Lock.png": "28d7266a69511d4c30845e0c92d817c6",
"assets/assets/img/Login.png": "546ca42321fa9bed557051882e255bbe",
"assets/assets/img/logo1.jpg": "270a529170547fe3e56390e97d2413f6",
"assets/assets/img/logo1.png": "79029847430c807f8095c838cce3cc39",
"assets/assets/img/meals%2520wecome.png": "0fe19a4b4f189a4f18c383556bbd8a7d",
"assets/assets/img/mealsplanner.png": "d20b84a74ac4dfd8573c01ccd230aacf",
"assets/assets/img/mealsplanner2.png": "a9f2167c3a4d4fd5656565e31e121b5b",
"assets/assets/img/Message.png": "535f33ed1b7eb302f6ac03bf9852a4da",
"assets/assets/img/meter.png": "e2e956dc1ce55927d9ff68fb36e424ec",
"assets/assets/img/mountain%2520climb.jpg": "4d7e54a4a5d29c3478248175a42ac785",
"assets/assets/img/mountainclimp.png": "8c52f542337e3d6c298b960a4578cebc",
"assets/assets/img/new1.png": "4d9a3033cfe8b2593e814eec766ed37c",
"assets/assets/img/new2.png": "aede8af482fb73d872d3751adda84ecd",
"assets/assets/img/newfinalbg.png": "98ece1ad8eaac037f58430dc4ab527ef",
"assets/assets/img/newsplash.png": "278b224aea3eeaf359bd15fe628c135a",
"assets/assets/img/onbo%25202.jpeg": "04b8028386f71ee202e1400d0acf777b",
"assets/assets/img/onbo%25203.jpeg": "f325e90495e384716f59e3d0bd0666e1",
"assets/assets/img/onbo%25207.png": "480b5fab30292d27d3ddfb509b31220b",
"assets/assets/img/onbo1.png": "69413145b5d43de9eb5bffe634f9464d",
"assets/assets/img/onBo5.jpeg": "17fc050790013f6533da7beabdf11d39",
"assets/assets/img/plan.png": "2a8e1f67fc7c508de30a8a8da89849d3",
"assets/assets/img/plan1.png": "8f455a44da8b767c26f1e59d02b6c76c",
"assets/assets/img/plank%2520tap.png": "b25ce4085b102117fdf1ee486e950d0d",
"assets/assets/img/plank.png": "ed3919ef757bceee3fb7f2fa2ae4cab2",
"assets/assets/img/planktap.png": "4e1c6e0813d8f8ad13e3f71610aa9d9d",
"assets/assets/img/planworkoutwelcome.png": "471817e022100ff5589f1def504918ad",
"assets/assets/img/Profile.png": "ab1e1b81470b3d054feea0fbe260ac4c",
"assets/assets/img/profile_tab.png": "f689c938459a11180f06704c144229d8",
"assets/assets/img/profile_tab_select.png": "f9af02d4abd7a90657470a42375e3d07",
"assets/assets/img/pushup.png": "216ac79435721f53b506c477773447e6",
"assets/assets/img/rest.png": "11c1ba6fe76e4fbf467ffb5e1b023bd3",
"assets/assets/img/russian%2520twist.jpg": "6f1b2d25135d3c775f8419f5098acdc1",
"assets/assets/img/russiantwist.png": "913e8d24c534f28cc2a45a5aaa65870c",
"assets/assets/img/shoulder-tap-min.png": "c02032c45a791b29da59d5f9fca861be",
"assets/assets/img/shouldertap.png": "7b167fbf26517cb4784818f1f1c95ebd",
"assets/assets/img/showdialogue.png": "f2e9dc5f222c465d5a76eaad67a690eb",
"assets/assets/img/split%2520squat.jpeg": "c49b73decf69417ec3742debd83c00ba",
"assets/assets/img/splitsquat.png": "ee981f574d635b3c4f6f9a0aead4a9ea",
"assets/assets/img/squat%2520up.jpeg": "3a17e718ccbb7b17269d15c0a21a42b0",
"assets/assets/img/squatup.png": "dfd51d8799d35a7bf4dbd3b8c4157bce",
"assets/assets/img/step%2520up.jpeg": "9aaff8ae79d6533f6733976563ff8bad",
"assets/assets/img/stepup.png": "fd5af7d6a37e8180d2b02cf60baa3e12",
"assets/assets/img/Swap.png": "71032080a13b4b9cacc0ff6b393ec837",
"assets/assets/img/Time%2520Circle.png": "eeab28107e2bbc562520cc58bcaa1b41",
"assets/assets/img/triceps%2520dips.png": "09e29c030c62a8d49d87484f7c50799f",
"assets/assets/img/wall%2520sit.jpeg": "654f7bd6d6029de213b274820e2a43be",
"assets/assets/img/wallsit.png": "0614418d9b97a6a811d8e0ce475508df",
"assets/assets/img/warmup.png": "d6603099f06c1fe74315dce987697e5c",
"assets/assets/img/water1.png": "749b0c87b9fdb308ce1790d2c3c93934",
"assets/assets/img/weight-scale%25201.png": "c289b403aed24f9ffe65ce1675fee3c0",
"assets/assets/img/welcomenew.jpeg": "771ac7333b4d2736114129f2e33163ed",
"assets/assets/img/widened%2520push%2520up.png": "ac6b608740fe9cdd821fc9c3be040464",
"assets/assets/img/workout%2520planner1.png": "0df18c7b325d5582b9858cb81bd973ab",
"assets/assets/img/workout%2520planner2.png": "8eac16706f67370e86ea0c53ef3513c0",
"assets/FontManifest.json": "e3fea97c8a53af22016c812e4375379b",
"assets/fonts/MaterialIcons-Regular.otf": "7318ef6f1f18c257d4da493e88094046",
"assets/NOTICES": "679305aeb2b152733a682e09a471094d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "00aaa1ac345724a0fd4092ee96863cff",
"/": "00aaa1ac345724a0fd4092ee96863cff",
"main.dart.js": "7da0cd278f724cc7bfcc35fdf666ce42",
"manifest.json": "71bb6fa12448f971385070cab0b579cb",
"version.json": "967a670cf2aa323624c65b475849143f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
