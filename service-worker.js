if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-3d8cc33a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dailydune"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/404.html",revision:"f4e3edb53349945387e617abbd0fd231"},{url:"/css/app.0a597d3a.css",revision:null},{url:"/css/chunk-vendors.e9ed9906.css",revision:null},{url:"/index.html",revision:"ce9886f765843263f19b7579f553eb8f"},{url:"/js/app.7ed43db0.js",revision:null},{url:"/js/chunk-vendors.c4958c70.js",revision:null},{url:"/manifest.json",revision:"00e096c78ff799e6a7859ecbb4cd9107"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
