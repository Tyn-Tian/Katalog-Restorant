import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './images/close.svg',
  './images/hamburger.svg',
  './images/hero-image_1.jpg',
  './images/hero-image_1-min.jpg',
  './images/maskable_icon.png',
  './images/maskable_icon_x48.png',
  './images/maskable_icon_x72.png',
  './images/maskable_icon_x96.png',
  './images/maskable_icon_x128.png',
  './images/maskable_icon_x192.png',
  './images/maskable_icon_x384.png',
  './images/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
