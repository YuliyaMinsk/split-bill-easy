if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const s=e=>n(e,r),f={module:{uri:r},exports:o,require:s};i[r]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(a(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-2e061222.css",revision:null},{url:"assets/index-7c708297.js",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"env.js",revision:"434b07892434db3ab48f53442a657762"},{url:"favicon.ico",revision:"d579522a49ea238a7c0dc9810d8a9beb"},{url:"icon-192x192.png",revision:"a385a59afb43f96e731aa7b4ddcffd56"},{url:"icon-256x256.png",revision:"599f956a73b7b4bda5799e69e577120a"},{url:"icon-384x384.png",revision:"3f3d83ced7dd97b303ad9ef0471d630a"},{url:"icon-512x512.png",revision:"171e8a572ed62e69a34ed6c654cae7b4"},{url:"index.html",revision:"fdbff6fa3474585d5db5c9215333498b"},{url:"manifest.webmanifest",revision:"476b9ddaedf80a272fba755e1f5b940e"},{url:"./icon-192x192.png",revision:"a385a59afb43f96e731aa7b4ddcffd56"},{url:"./icon-256x256.png",revision:"599f956a73b7b4bda5799e69e577120a"},{url:"./icon-384x384.png",revision:"3f3d83ced7dd97b303ad9ef0471d630a"},{url:"./icon-512x512.png",revision:"171e8a572ed62e69a34ed6c654cae7b4"},{url:"env.js",revision:"434b07892434db3ab48f53442a657762"},{url:"favicon.ico",revision:"d579522a49ea238a7c0dc9810d8a9beb"},{url:"icon-192x192.png",revision:"a385a59afb43f96e731aa7b4ddcffd56"},{url:"icon-256x256.png",revision:"599f956a73b7b4bda5799e69e577120a"},{url:"icon-384x384.png",revision:"3f3d83ced7dd97b303ad9ef0471d630a"},{url:"icon-512x512.png",revision:"171e8a572ed62e69a34ed6c654cae7b4"},{url:"manifest.webmanifest",revision:"476b9ddaedf80a272fba755e1f5b940e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
