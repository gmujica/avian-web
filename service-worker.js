"use strict";var precacheConfig=[["/avian-web/index.html","1540e3c41a649ca42b2e37b8976b9df2"],["/avian-web/static/css/main.fb846065.css","5ffcd04535080a91337f9bfca45289b8"],["/avian-web/static/js/main.f5ab4d68.js","c51dd3ec5ee317e3af9abfc99c3fc097"],["/avian-web/static/media/1.d81d81f2.png","d81d81f2ffdfbcf550b83e68b759ae49"],["/avian-web/static/media/2.a7beb90e.png","a7beb90e76eccf09d959fc53c08cbd0d"],["/avian-web/static/media/3.27afac3d.png","27afac3d9dba3475dc32c9b929a79eb1"],["/avian-web/static/media/5.822a8892.png","822a8892a17182c31803f036f0bbd4bb"],["/avian-web/static/media/A.86ec962f.png","86ec962fb08df2d8aeb1fdca5aa2822d"],["/avian-web/static/media/Facebook.8500f2da.png","8500f2da85f2d5d0f6e82929070f0bc1"],["/avian-web/static/media/Instagram.879a145c.png","879a145c7b1e23f2f181e8d8a63a2798"],["/avian-web/static/media/Logo3.c361a19a.png","c361a19a7d3fde2306f8e21897abf075"],["/avian-web/static/media/Twitter.b1b914cb.png","b1b914cb7523628a8b635c37aaf51887"],["/avian-web/static/media/c2.419ee79a.jpg","419ee79aaff92c7eb3492b6706fbeb56"],["/avian-web/static/media/c3.c1372bd6.jpg","c1372bd6b28454c83f6fd450c7764974"],["/avian-web/static/media/c4.08143633.jpg","081436338aed42e19743d8f282f50d6b"],["/avian-web/static/media/c5.d8445e8e.jpeg","d8445e8e5ed80a567ea661c3d5feb3f6"],["/avian-web/static/media/c6.e2c8b166.jpg","e2c8b166b8f4a000fb2488cd92c63991"],["/avian-web/static/media/c8.ce321383.jpg","ce321383babec55e98c9493cf4457a58"],["/avian-web/static/media/logo2.b90bbd06.png","b90bbd063d6487ee6eea5c5d80413ad7"],["/avian-web/static/media/sunsol-isla-caribe.a80a5064.jpg","a80a50643348593b5c499c705dc8b8c9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/avian-web/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});