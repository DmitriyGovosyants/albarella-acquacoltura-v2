!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},o.parcelRequired7c6=i),i.register("4Nugj",(function(t,o){e(t.exports,"refs",(function(){return n}));var n={mobileMenu:document.querySelector(".js-menu-mob"),openMenuBtn:document.querySelector(".js-menu-mob-btn-open"),closeMenuBtn:document.querySelector(".js-menu-mob-btn-close"),mobileMenuNav:document.querySelector(".js-menu-mob-nav"),backToTopBtn:document.querySelector(".js-back-to-top-btn"),langMenuBtns:document.querySelectorAll(".js-lang-menu-btn"),htmlEl:document.querySelector("html"),anchors:document.querySelectorAll('a[href*="#"]'),colorModeToggle:document.querySelector(".js-color-theme-toggle"),colorModeSun:document.querySelector(".js-color-theme-sun"),colorModeMoon:document.querySelector(".js-color-theme-moon"),backdrop:document.querySelector(".js-backdrop"),modalCareersBtnOpen:document.querySelector(".js-modal-careers-btn-open"),modalCareersBtnClose:document.querySelector(".js-modal-careers-btn-close"),formCareers:document.querySelector(".js-form-careers"),formReq:document.querySelectorAll("._req"),formResume:document.querySelector(".js-form-resume"),formResumeBtn:document.querySelector(".js-form-resume-btn")}})),i.register("6teoE",(function(t,o){e(t.exports,"langData",(function(){return n}));var n={en:{"nav-1":"home","nav-2":"products","nav-3":"facilities","nav-4":"about","nav-5":"careers","nav-6":"contacts","footer-address-text":"Our Location","footer-address-link":"45010 Rosolina, Province of Rovigo, Italy","footer-socials":"Join Us","footer-contacts":"Contacts","footer-bottom-text":"© 2022 - Albarella Acquacoltura","footer-bottom-privacy":"All Rights Reserved","back-to-top":"to top","form-title":"Apply for available position","form-position":"Choice position","form-position-1":"Aquaculture Engineer/Mechanic","form-position-2":"Hatchery Technician","form-position-3":"Flupsy Technician","form-first-name":"First name *","form-last-name":"Last name *","form-email":"E-mail *","form-phone-number":"Phone number","form-comment":"Comment","form-resume-label":"Attach a resume","form-resume-upload-btn":"&#10149; Upload file &lt; 5 MB, .pdf","form-resume-upload-btn-done":"&#9989; File has been uploaded!","form-agreement":"I give my consent to the processing of personal data in accordance with ","form-agreement-terms":"terms *","form-submit":"Submit","form-valid-fields-error":"Fill in the required fields","form-valid-resume-ext-error":"Wrong file resolution","form-valid-resume-size-error":"File size must be less than 5MB","form-valid-resume-load-error":"File not loaded try again","form-successfully-send":"Successfully sent","form-error-send":"Failed to send form, try again"},it:{"nav-1":"casa","nav-2":"prodotti","nav-3":"strutture","nav-4":"circa","nav-5":"carriere","nav-6":"contatti","footer-address-text":"La nostra Posizione","footer-address-link":"45010 Rosolina, Provincia di Rovigo, Italia","footer-socials":"Unitevi","footer-contacts":"Contatti","footer-bottom-text":"© 2022 - Albarella Acquacoltura","footer-bottom-privacy":"Tutti i diritti riservati","back-to-top":"in alto","form-title":"Candidati per una posizione","form-position":"Posizione scelta","form-position-1":"Ingegnere/meccanico di acquacoltura","form-position-2":"Incubatoio Tecnico","form-position-3":"Flupsy Tecnico","form-first-name":"Nome *","form-last-name":"Cognome *","form-email":"E-mail *","form-phone-number":"Numero di telefono","form-comment":"Commento","form-resume-label":"Allegare un curriculum","form-resume-upload-btn":"&#10149; Carica file &lt; 5 MB, .pdf","form-resume-upload-btn-done":"&#9989; Il file è stato caricato","form-agreement":"Do il mio consenso al trattamento dei dati personali in conformità con ","form-agreement-terms":"termini *","form-submit":"invia","form-valid-fields-error":"Compila i campi richiesti","form-valid-resume-ext-error":"Risoluzione dei file errata","form-valid-resume-size-error":"La dimensione del file deve essere inferiore a 5MB","form-valid-resume-load-error":"File non caricato riprova","form-successfully-send":"Spedito con successo","form-error-send":"Invio del modulo non riuscito, riprovare"}}}));var a=i("4Nugj"),c=function(e){e.preventDefault();var t=e.target.dataset.id,o=document.querySelector("#".concat(t));window.scroll({left:0,top:o.offsetTop-80,behavior:"smooth"})},l=!0,s=!1,u=void 0;try{for(var m,d=a.refs.anchors[Symbol.iterator]();!(l=(m=d.next()).done);l=!0){m.value.addEventListener("click",c)}}catch(e){s=!0,u=e}finally{try{l||null==d.return||d.return()}finally{if(s)throw u}}a=i("4Nugj");var f=function(){a.refs.mobileMenu.classList.remove("is-open"),a.refs.openMenuBtn.setAttribute("aria-expanded",!1),document.body.style.overflow="",document.removeEventListener("click",p)},p=function(e){var t=e.target.closest(".menu"),o=e.target.classList.contains("js-menu-mob-outside-close");t||o||f()};a.refs.openMenuBtn.addEventListener("click",(function(){a.refs.mobileMenu.classList.add("is-open"),a.refs.openMenuBtn.setAttribute("aria-expanded",!0),document.body.style.overflow="hidden",a.refs.backToTopBtn.style.display="none",document.addEventListener("click",p)})),a.refs.closeMenuBtn.addEventListener("click",f),a.refs.mobileMenuNav.addEventListener("click",(function(e){"A"===e.target.nodeName&&f()})),window.matchMedia("(min-width: 1140px)").addEventListener("change",(function(e){e.matches&&f()}));var v=i("6teoE");function g(e){localStorage.setItem("language","".concat(e.target.textContent)),location.reload()}(a=i("4Nugj")).refs.langMenuBtns.forEach((function(e){return e.addEventListener("click",g)})),function(){if(!localStorage.getItem("language"))return;var e=localStorage.getItem("language");for(var t in a.refs.htmlEl.lang=e,v.langData.en){var o=document.querySelector(".lng-"+t);o&&(o.innerHTML=v.langData[e][t])}}();a=i("4Nugj");var h=localStorage.getItem("colorTheme");h||localStorage.setItem("colorTheme","dark"),"ligth"===h&&(a.refs.htmlEl.classList.add("color-theme-ligth"),a.refs.colorModeSun.classList.toggle("visible"),a.refs.colorModeMoon.classList.toggle("visible")),a.refs.colorModeToggle.addEventListener("click",(function(){"ligth"===localStorage.getItem("colorTheme")?localStorage.setItem("colorTheme","dark"):localStorage.setItem("colorTheme","ligth");a.refs.htmlEl.classList.toggle("color-theme-ligth"),a.refs.colorModeSun.classList.toggle("visible"),a.refs.colorModeMoon.classList.toggle("visible")}));var y,b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var S="Expected a function",w=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,q=/^0o[0-7]+$/i,T=parseInt,A="object"==typeof o&&o&&o.Object===Object&&o,L="object"==typeof self&&self&&self.Object===Object&&self,j=A||L||Function("return this")(),C=Object.prototype.toString,O=Math.max,x=Math.min,I=function(){return j.Date.now()};function k(e,t,o){var n,r,i,a,c,l,s=0,u=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(S);function f(t){var o=n,i=r;return n=r=void 0,s=t,a=e.apply(i,o)}function p(e){return s=e,c=setTimeout(g,t),u?f(e):a}function v(e){var o=e-l;return void 0===l||o>=t||o<0||m&&e-s>=i}function g(){var e=I();if(v(e))return h(e);c=setTimeout(g,function(e){var o=t-(e-l);return m?x(o,i-(e-s)):o}(e))}function h(e){return c=void 0,d&&n?f(e):(n=r=void 0,a)}function y(){var e=I(),o=v(e);if(n=arguments,r=this,l=e,o){if(void 0===c)return p(l);if(m)return c=setTimeout(g,t),f(l)}return void 0===c&&(c=setTimeout(g,t)),a}return t=N(t)||0,F(o)&&(u=!!o.leading,i=(m="maxWait"in o)?O(N(o.maxWait)||0,t):i,d="trailing"in o?!!o.trailing:d),y.cancel=function(){void 0!==c&&clearTimeout(c),s=0,n=l=r=c=void 0},y.flush=function(){return void 0===c?a:h(I())},y}function F(e){var o=void 0===e?"undefined":t(b)(e);return!!e&&("object"==o||"function"==o)}function N(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(b)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==C.call(e)}(e))return NaN;if(F(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=F(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var n=M.test(e);return n||q.test(e)?T(e.slice(2),n?2:8):E.test(e)?NaN:+e}y=function(e,t,o){var n=!0,r=!0;if("function"!=typeof e)throw new TypeError(S);return F(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),k(e,t,{leading:n,maxWait:t,trailing:r})};var B,R,D={};
/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,o=(this.document||this.ownerDocument).querySelectorAll(e),n=this;do{for(t=o.length;0<=--t&&o.item(t)!==n;);}while(t<0&&(n=n.parentElement));return n}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],o=0;o<t.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[t[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[o]+"CancelAnimationFrame"]||window[t[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,o){var n=(new Date).getTime(),r=Math.max(0,16-(n-e)),i=window.setTimeout((function(){t(n+r)}),r);return e=n+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),B=void 0!==o?o:"undefined"!=typeof window?window:D,R=function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var o in t){if(!t.hasOwnProperty(o))return;e[o]=t[o]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,o=String(e),n=o.length,r=-1,i="",a=o.charCodeAt(0);++r<n;){if(0===(t=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?o.charAt(r):"\\"+o.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,o,n){0===t&&document.body.focus(),n||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,o))},a=function(t,o,n,r){if(o.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(i)}};return function(c,l){var s,u,m,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||a("scrollCancel",s)},animateScroll:function(n,c,l){f.cancelScroll();var u,p,v=o(s||t,l||{}),g="[object Number]"===Object.prototype.toString.call(n),h=g||!n.tagName?null:n;if(g||h){var y=e.pageYOffset;v.header&&!m&&(m=document.querySelector(v.header));var b,S,w,E,M,q,T,A,L=(u=m)?(p=u,parseInt(e.getComputedStyle(p).height,10)+u.offsetTop):0,j=g?n:function(t,o,n,i){var a=0;if(t.offsetParent)for(;a+=t.offsetTop,t=t.offsetParent;);return a=Math.max(a-o-n,0),i&&(a=Math.min(a,r()-e.innerHeight)),a}(h,L,parseInt("function"==typeof v.offset?v.offset(n,c):v.offset,10),v.clip),C=j-y,O=r(),x=0,I=(b=C,w=(S=v).speedAsDuration?S.speed:Math.abs(b/1e3*S.speed),S.durationMax&&w>S.durationMax?S.durationMax:S.durationMin&&w<S.durationMin?S.durationMin:parseInt(w,10)),k=function(t){var o,r,l;E||(E=t),x+=t-E,q=y+C*(r=M=1<(M=0===I?0:x/I)?1:M,"easeInQuad"===(o=v).easing&&(l=r*r),"easeOutQuad"===o.easing&&(l=r*(2-r)),"easeInOutQuad"===o.easing&&(l=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===o.easing&&(l=r*r*r),"easeOutCubic"===o.easing&&(l=--r*r*r+1),"easeInOutCubic"===o.easing&&(l=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===o.easing&&(l=r*r*r*r),"easeOutQuart"===o.easing&&(l=1- --r*r*r*r),"easeInOutQuart"===o.easing&&(l=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===o.easing&&(l=r*r*r*r*r),"easeOutQuint"===o.easing&&(l=1+--r*r*r*r*r),"easeInOutQuint"===o.easing&&(l=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),o.customEasing&&(l=o.customEasing(r)),l||r),e.scrollTo(0,Math.floor(q)),function(t,o){var r=e.pageYOffset;if(t==o||r==o||(y<o&&e.innerHeight+r)>=O)return f.cancelScroll(!0),i(n,o,g),a("scrollStop",v,n,c),d=E=null,!0}(q,j)||(d=e.requestAnimationFrame(k),E=t)};0===e.pageYOffset&&e.scrollTo(0,0),T=n,A=v,g||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:T.id},document.title,T===document.documentElement?"#top":"#"+T.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(n,Math.floor(j),!1):(a("scrollStart",v,n,c),f.cancelScroll(!0),e.requestAnimationFrame(k))}}},p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(c))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var o,r;try{o=n(decodeURIComponent(u.hash))}catch(e){o=n(u.hash)}if("#"===o){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(o);(r=r||"#top"!==o?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var o=e.location.hash;o=o||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:o||e.pageYOffset},document.title,o||e.location.href)}}(s),f.animateScroll(r,u))}},v=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(n(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){s&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",v,!1),f.cancelScroll(),d=m=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=o(t,l||{}),m=s.header?document.querySelector(s.header):null,document.addEventListener("click",p,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",v,!1)}(),f}},"function"==typeof define&&define.amd?define([],(function(){return R(B)})):D=R(B);a=i("4Nugj");var H=new(t(D));document.addEventListener("scroll",t(y)((function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?a.refs.backToTopBtn.style.display="flex":a.refs.backToTopBtn.style.display="none"}),500)),a.refs.backToTopBtn.addEventListener("click",(function(){H.animateScroll(document.body,{speed:500,easing:"Linear"})}))}();
//# sourceMappingURL=contacts.30ad14c5.js.map