function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const o={mobileMenu:document.querySelector(".js-menu-mob"),openMenuBtn:document.querySelector(".js-menu-mob-btn-open"),closeMenuBtn:document.querySelector(".js-menu-mob-btn-close"),mobileMenuNav:document.querySelector(".js-menu-mob-nav"),backToTopBtn:document.querySelector(".js-back-to-top-btn"),langMenuBtns:document.querySelectorAll(".js-lang-menu-btn"),htmlEl:document.querySelector("html"),anchors:document.querySelectorAll('a[href*="#"]'),colorModeToggle:document.querySelector(".js-color-theme-toggle"),colorModeSun:document.querySelector(".js-color-theme-sun"),colorModeMoon:document.querySelector(".js-color-theme-moon")},n=e=>{e.preventDefault();const t=e.target.dataset.id,o=document.querySelector(`#${t}`);window.scroll({left:0,top:o.offsetTop-80,behavior:"smooth"})};for(let e of o.anchors)e.addEventListener("click",n);const r=()=>{o.mobileMenu.classList.remove("is-open"),o.openMenuBtn.setAttribute("aria-expanded",!1),document.body.style.overflow="",document.removeEventListener("click",a)},a=e=>{const t=e.target.closest(".menu"),o=e.target.classList.contains("js-menu-mob-outside-close");t||o||r()};o.openMenuBtn.addEventListener("click",(()=>{o.mobileMenu.classList.add("is-open"),o.openMenuBtn.setAttribute("aria-expanded",!0),document.body.style.overflow="hidden",o.backToTopBtn.style.display="none",document.addEventListener("click",a)})),o.closeMenuBtn.addEventListener("click",r),o.mobileMenuNav.addEventListener("click",(e=>{"A"===e.target.nodeName&&r()})),window.matchMedia("(min-width: 1140px)").addEventListener("change",(e=>{e.matches&&r()}));const i={en:{"nav-1":"home","nav-2":"products","nav-3":"facilities","nav-4":"about","nav-5":"careers","nav-6":"contacts","footer-address-text":"Our Location","footer-address-link":"45010 Rosolina, Province of Rovigo, Italy","footer-socials":"Join Us","footer-bottom-1":"© 2022 - Albarella Acquacoltura","footer-bottom-2":"All Rights Reserved","back-to-top":"to top"},it:{"nav-1":"casa","nav-2":"prodotti","nav-3":"strutture","nav-4":"circa","nav-5":"carriere","nav-6":"contatti","footer-address-text":"La nostra Posizione","footer-address-link":"45010 Rosolina, Provincia di Rovigo, Italia","footer-socials":"Unitevi","footer-bottom-1":"© 2022 - Albarella Acquacoltura","footer-bottom-2":"Tutti i diritti riservati","back-to-top":"in cima alla"}};function c(e){localStorage.setItem("language",`${e.target.textContent}`),location.reload()}o.langMenuBtns.forEach((e=>e.addEventListener("click",c))),function(){if(!localStorage.getItem("language"))return;const e=localStorage.getItem("language");o.htmlEl.lang=e;for(let t in i.en){let o=document.querySelector(".lng-"+t);o&&(o.innerHTML=i[e][t])}}();let l=localStorage.getItem("colorTheme");l||localStorage.setItem("colorTheme","dark"),"ligth"===l&&(o.htmlEl.classList.add("color-theme-ligth"),o.colorModeSun.classList.toggle("visible"),o.colorModeMoon.classList.toggle("visible")),o.colorModeToggle.addEventListener("click",(function(){"ligth"===localStorage.getItem("colorTheme")?localStorage.setItem("colorTheme","dark"):localStorage.setItem("colorTheme","ligth");o.htmlEl.classList.toggle("color-theme-ligth"),o.colorModeSun.classList.toggle("visible"),o.colorModeMoon.classList.toggle("visible")}));var s,u=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,f=/^0o[0-7]+$/i,h=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,v=p||g||Function("return this")(),y=Object.prototype.toString,b=Math.max,w=Math.min,S=function(){return v.Date.now()};function E(e,t,o){var n,r,a,i,c,l,s=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var o=n,a=r;return n=r=void 0,s=t,i=e.apply(a,o)}function h(e){return s=e,c=setTimeout(g,t),u?f(e):i}function p(e){var o=e-l;return void 0===l||o>=t||o<0||d&&e-s>=a}function g(){var e=S();if(p(e))return v(e);c=setTimeout(g,function(e){var o=t-(e-l);return d?w(o,a-(e-s)):o}(e))}function v(e){return c=void 0,m&&n?f(e):(n=r=void 0,i)}function y(){var e=S(),o=p(e);if(n=arguments,r=this,l=e,o){if(void 0===c)return h(l);if(d)return c=setTimeout(g,t),f(l)}return void 0===c&&(c=setTimeout(g,t)),i}return t=T(t)||0,M(o)&&(u=!!o.leading,a=(d="maxWait"in o)?b(T(o.maxWait)||0,t):a,m="trailing"in o?!!o.trailing:m),y.cancel=function(){void 0!==c&&clearTimeout(c),s=0,n=l=r=c=void 0},y.flush=function(){return void 0===c?i:v(S())},y}function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(M(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=M(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=m.test(e);return o||f.test(e)?h(e.slice(2),o?2:8):d.test(e)?NaN:+e}s=function(e,t,o){var n=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return M(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),E(e,t,{leading:n,maxWait:t,trailing:r})};var A,L,q={};
/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,o=(this.document||this.ownerDocument).querySelectorAll(e),n=this;do{for(t=o.length;0<=--t&&o.item(t)!==n;);}while(t<0&&(n=n.parentElement));return n}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],o=0;o<t.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[t[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[o]+"CancelAnimationFrame"]||window[t[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,o){var n=(new Date).getTime(),r=Math.max(0,16-(n-e)),a=window.setTimeout((function(){t(n+r)}),r);return e=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),A=void 0!==t?t:"undefined"!=typeof window?window:q,L=function(e){var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var o in t){if(!t.hasOwnProperty(o))return;e[o]=t[o]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,o=String(e),n=o.length,r=-1,a="",i=o.charCodeAt(0);++r<n;){if(0===(t=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?o.charAt(r):"\\"+o.charAt(r)}return"#"+a},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,o,n){0===t&&document.body.focus(),n||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,o))},i=function(t,o,n,r){if(o.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(a)}};return function(c,l){var s,u,d,m,f={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||i("scrollCancel",s)},animateScroll:function(n,c,l){f.cancelScroll();var u,h,p=o(s||t,l||{}),g="[object Number]"===Object.prototype.toString.call(n),v=g||!n.tagName?null:n;if(g||v){var y=e.pageYOffset;p.header&&!d&&(d=document.querySelector(p.header));var b,w,S,E,M,T,A,L,q=(u=d)?(h=u,parseInt(e.getComputedStyle(h).height,10)+u.offsetTop):0,O=g?n:function(t,o,n,a){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-o-n,0),a&&(i=Math.min(i,r()-e.innerHeight)),i}(v,q,parseInt("function"==typeof p.offset?p.offset(n,c):p.offset,10),p.clip),I=O-y,k=r(),j=0,x=(b=I,S=(w=p).speedAsDuration?w.speed:Math.abs(b/1e3*w.speed),w.durationMax&&S>w.durationMax?w.durationMax:w.durationMin&&S<w.durationMin?w.durationMin:parseInt(S,10)),C=function(t){var o,r,l;E||(E=t),j+=t-E,T=y+I*(r=M=1<(M=0===x?0:j/x)?1:M,"easeInQuad"===(o=p).easing&&(l=r*r),"easeOutQuad"===o.easing&&(l=r*(2-r)),"easeInOutQuad"===o.easing&&(l=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===o.easing&&(l=r*r*r),"easeOutCubic"===o.easing&&(l=--r*r*r+1),"easeInOutCubic"===o.easing&&(l=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===o.easing&&(l=r*r*r*r),"easeOutQuart"===o.easing&&(l=1- --r*r*r*r),"easeInOutQuart"===o.easing&&(l=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===o.easing&&(l=r*r*r*r*r),"easeOutQuint"===o.easing&&(l=1+--r*r*r*r*r),"easeInOutQuint"===o.easing&&(l=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),o.customEasing&&(l=o.customEasing(r)),l||r),e.scrollTo(0,Math.floor(T)),function(t,o){var r=e.pageYOffset;if(t==o||r==o||(y<o&&e.innerHeight+r)>=k)return f.cancelScroll(!0),a(n,o,g),i("scrollStop",p,n,c),m=E=null,!0}(T,O)||(m=e.requestAnimationFrame(C),E=t)};0===e.pageYOffset&&e.scrollTo(0,0),A=n,L=p,g||history.pushState&&L.updateURL&&history.pushState({smoothScroll:JSON.stringify(L),anchor:A.id},document.title,A===document.documentElement?"#top":"#"+A.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?a(n,Math.floor(O),!1):(i("scrollStart",p,n,c),f.cancelScroll(!0),e.requestAnimationFrame(C))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(c))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var o,r;try{o=n(decodeURIComponent(u.hash))}catch(e){o=n(u.hash)}if("#"===o){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(o);(r=r||"#top"!==o?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var o=e.location.hash;o=o||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:o||e.pageYOffset},document.title,o||e.location.href)}}(s),f.animateScroll(r,u))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(n(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){s&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),m=d=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=o(t,l||{}),d=s.header?document.querySelector(s.header):null,document.addEventListener("click",h,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",p,!1)}(),f}},"function"==typeof define&&define.amd?define([],(function(){return L(A)})):q=L(A);const O=new(e(q));document.addEventListener("scroll",e(s)((function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?o.backToTopBtn.style.display="flex":o.backToTopBtn.style.display="none"}),500)),o.backToTopBtn.addEventListener("click",(function(){O.animateScroll(document.body,{speed:500,easing:"Linear"})}));
//# sourceMappingURL=about.990352c4.js.map
