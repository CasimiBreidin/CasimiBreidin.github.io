if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const f=e=>s(e,c),b={module:{uri:c},exports:d,require:f};i[c]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"b3d777ee9c7c2e763fb8a9609289c3ee"},{url:"archives/2022/08/index.html",revision:"986f01f8db463945f2d38f75f877b6e9"},{url:"archives/2022/09/index.html",revision:"4f60a7d1a012ea88eed24995ee80cc15"},{url:"archives/2022/10/index.html",revision:"06cc3e1ff62ce0cafaf36b3903989ab9"},{url:"archives/2022/index.html",revision:"8be5086aadef87b826ac78bd46e95cf9"},{url:"archives/2023/01/index.html",revision:"cdc13b5a9dbf996a4c0b37fd678de592"},{url:"archives/2023/07/index.html",revision:"f4beb54fbba2cad9c93dae7ad9a1d502"},{url:"archives/2023/index.html",revision:"bb387d2c7418f03523417a8d4c564ab1"},{url:"archives/index.html",revision:"14104574e3cbfc7dab88dda9300b6dcb"},{url:"categories/index.html",revision:"06c24ae77feb251c3bffe5eced713d98"},{url:"categories/教程/index.html",revision:"8bdf3d3988ff2fecaa341d74f941cadc"},{url:"categories/笔记/index.html",revision:"6e8d727ab8af3b2d778ff0d4439ae33d"},{url:"categories/论文/index.html",revision:"13cb32f35a0487aba2b00a2c51281b9b"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"3a3df21ec2d59ad2a1c0267d73be0524"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"index.html",revision:"ea5d7c49e9cafc2cc2ebcf0d7f34cef6"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"486b947e65a30918dbe2e091cf4ba7f2"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"023c00263a3e6114f7044b30531e7fe0"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"d3cf6980c3e247575cf21a55944e451b"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"572d66e85091711b6ee76609573a8364"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"posts/17128.html",revision:"a2629dd45f6fef316f5b89d27ebfba78"},{url:"posts/20935.html",revision:"50e2ee9cbd1448d11dd3e332da3a0f3c"},{url:"posts/23720.html",revision:"0ceff8e52e133a67fdbc1584491ac482"},{url:"posts/24112.html",revision:"f65dc48d1c30efba3b33afcdd1ba62b5"},{url:"posts/29992.html",revision:"c660f45032397f54ce91c03746d466f4"},{url:"posts/41853.html",revision:"e4ff83f04b2c77fd8c381858650ff5ab"},{url:"posts/4821.html",revision:"d8ca759aa15c606f5ca82f507709d06c"},{url:"posts/48786.html",revision:"173c7bdfb933b3a9a07f728e06cf9278"},{url:"posts/50679.html",revision:"571d05a29f7d3b79f4c5130b6b30718f"},{url:"posts/57164.html",revision:"bc78af5ac8d7ad46449b231affe37a6c"},{url:"tags/index.html",revision:"feb48eeb7cec9d6eaf0416464a775a59"}],{})}));
//# sourceMappingURL=service-worker.js.map
