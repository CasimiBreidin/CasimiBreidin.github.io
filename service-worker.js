if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const f=e=>s(e,c),o={module:{uri:c},exports:d,require:f};i[c]=Promise.all(r.map((e=>o[e]||f(e)))).then((e=>(a(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"b9cbfa73e78774b4a39050b87dfeb9f7"},{url:"archives/2022/08/index.html",revision:"d489243071a37033321bde45dad4ea2b"},{url:"archives/2022/09/index.html",revision:"e96aa91df66675920565f5d929b4f099"},{url:"archives/2022/10/index.html",revision:"eccc7b69a98591c9eb7dacc767b532ef"},{url:"archives/2022/index.html",revision:"32ce47421aa3788687cc10f5d21d82e3"},{url:"archives/20230/01/index.html",revision:"4bdc489bea4479c15c457c9cf33db91d"},{url:"archives/20230/index.html",revision:"65c29b420efdc73ab74af2885746d7b1"},{url:"archives/index.html",revision:"7d01401e8e659e28956cabf350b7b477"},{url:"categories/index.html",revision:"0459af4a68e3942fa3097ab4b9b4762e"},{url:"categories/教程/index.html",revision:"cbf61819394a0d6c5a8e203229a244d5"},{url:"categories/笔记/index.html",revision:"ebbcd767a7aa2a56ab25a00706d51c0d"},{url:"categories/论文/index.html",revision:"eec6152e6e50b65a62fb8efa334e51ab"},{url:"css/404.css",revision:"b1bb50e1fabe41adcec483f6427fb3aa"},{url:"css/index.css",revision:"3a3df21ec2d59ad2a1c0267d73be0524"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.png",revision:"6cc4a809d23e3d8946a299ae4ce4e4cd"},{url:"index.html",revision:"86f4d134eb821e582189ff126f777061"},{url:"js/copy.js",revision:"45aae54bf2e43ac27ecc41eb5e0bacf7"},{url:"js/fancybox.js",revision:"f84d626654b9bbc05720952b3effe062"},{url:"js/fireworks.js",revision:"486b947e65a30918dbe2e091cf4ba7f2"},{url:"js/head.js",revision:"347edd99f8e3921b45fa617e839d8182"},{url:"js/hexo-theme-melody.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/katex.js",revision:"d971ba8b8dee1120ef66744b89cfd2b1"},{url:"js/scroll.js",revision:"023c00263a3e6114f7044b30531e7fe0"},{url:"js/search/algolia.js",revision:"53160985d32d6fd66d98aa0e05b081ac"},{url:"js/search/local-search.js",revision:"d3cf6980c3e247575cf21a55944e451b"},{url:"js/sidebar.js",revision:"d24db780974e661198eeb2e45f20a28f"},{url:"js/third-party/anime.min.js",revision:"572d66e85091711b6ee76609573a8364"},{url:"js/third-party/canvas-ribbon.js",revision:"09c181544ddff1db701db02ac30453e0"},{url:"js/third-party/jquery.fancybox.min.js",revision:"3c9fa1c1199cd4f874d855ecb1641335"},{url:"js/third-party/jquery.min.js",revision:"c9f5aeeca3ad37bf2aa006139b935f0a"},{url:"js/third-party/reveal/head.min.js",revision:"aad121203010122e05f1766d92385214"},{url:"js/third-party/velocity.min.js",revision:"64da069aba987ea0512cf610600a56d1"},{url:"js/third-party/velocity.ui.min.js",revision:"c8ca438424a080620f7b2f4ee4b0fff1"},{url:"js/transition.js",revision:"911db4268f0f6621073afcced9e1bfef"},{url:"js/utils.js",revision:"3ff3423d966a1c351e9867813b3f6d36"},{url:"posts/17128.html",revision:"12d50839ff15706ea119adc028632399"},{url:"posts/20935.html",revision:"5364031de517aeb4e469af798434af17"},{url:"posts/24112.html",revision:"a7807010c3268c03da5f29afad07106c"},{url:"posts/29992.html",revision:"11a0da395610c7d41bc09cae188e6197"},{url:"posts/41853.html",revision:"042c1d83678a4e2fbf836dad80aef1d0"},{url:"posts/4821.html",revision:"cc8dc9c34c8460d846ea89c8750b2e60"},{url:"posts/48786.html",revision:"557b507f8f00b692d728e58c00b4512f"},{url:"posts/50679.html",revision:"6757e19cb53630bdb1bd7916c0084ff1"},{url:"posts/57164.html",revision:"9a48642a31f978b5ad2405a992cc64c6"},{url:"tags/index.html",revision:"1bccf2322184041d2d48a0d851c29094"}],{})}));
//# sourceMappingURL=service-worker.js.map
