if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const f=e=>s(e,c),l={module:{uri:c},exports:d,require:f};i[c]=Promise.all(r.map((e=>l[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"3dde25f1b218626fc99fdc281fff4a60"},{url:"archives/2022/08/index.html",revision:"91ea853cfa698dd787938adb46c3bd6b"},{url:"archives/2022/09/index.html",revision:"98ffc804cda8ae2561e0775e9eb0d58a"},{url:"archives/2022/10/index.html",revision:"edff0db7c3b874f2075c26b3a8c20f18"},{url:"archives/2022/index.html",revision:"a2a6f3a4232eca30cdc62d9bf3eaa026"},{url:"archives/2023/01/index.html",revision:"83b9dad5a1335152d2eb874c7b1735ff"},{url:"archives/2023/07/index.html",revision:"b95b8cc2984a22d10abaac51b82bf010"},{url:"archives/2023/index.html",revision:"7b0f9823d6d3663db2aec4f7795a06d4"},{url:"archives/index.html",revision:"30bd1b49b935feccc5f33a13df9e9a8d"},{url:"categories/index.html",revision:"1d908055bc7e8ce6838018f4806c44be"},{url:"categories/教程/index.html",revision:"34ba556e5304337da95aec449c723741"},{url:"categories/笔记/index.html",revision:"f6aa7999d0e8b4331c199dc4a816d2c9"},{url:"categories/论文/index.html",revision:"6a86febefecb25fe34d1b4aa8d23423c"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"3a3df21ec2d59ad2a1c0267d73be0524"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"index.html",revision:"9bdf1e3db1309ceb3b2a803c789c8486"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"486b947e65a30918dbe2e091cf4ba7f2"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"023c00263a3e6114f7044b30531e7fe0"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"d3cf6980c3e247575cf21a55944e451b"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"572d66e85091711b6ee76609573a8364"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"posts/17128.html",revision:"9d0e1af5a42457c5b26a2cf7dd9dce3b"},{url:"posts/20935.html",revision:"73a18f4b92e35865eeab01142d230998"},{url:"posts/23720.html",revision:"13236485b13e162232cf2549526f20a8"},{url:"posts/24112.html",revision:"8b83f3a79cba3a25dc0468fdc4ae7057"},{url:"posts/29992.html",revision:"e380ed1c3d756cc004dc5173ab3d6c8c"},{url:"posts/41853.html",revision:"ce36b1adc8c4538a58996b26ea547cec"},{url:"posts/4821.html",revision:"75ae3fc987a926cfce1fae455be79ee4"},{url:"posts/48786.html",revision:"d29bac78f53c3ac505da91be890ee62f"},{url:"posts/50679.html",revision:"2d4e8d4327709f1dea6ead29343259c4"},{url:"posts/57164.html",revision:"f74f195a8430c469e69bef2376a7e2c2"},{url:"tags/index.html",revision:"7c916a58213d0d58fe3dedc2a73daba0"}],{})}));
//# sourceMappingURL=service-worker.js.map
