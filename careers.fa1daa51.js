var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in o){var d=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,d.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){o[e]=n},e.parcelRequired7c6=d);var r=d("krGWQ");for(let e=0;e<r.refs.modalCareersBtnsOpen.length;e+=1)r.refs.modalCareersBtnsOpen[e].addEventListener("click",t);function t(e){document.body.classList.add("modal-open"),r.refs.backdrop.classList.remove("backdrop--hidden"),document.addEventListener("keydown",s),window.addEventListener("click",a)}function i(){document.body.classList.remove("modal-open"),r.refs.backdrop.classList.add("backdrop--hidden"),document.removeEventListener("keydown",s),window.removeEventListener("click",a)}function s({code:e}){"Escape"===e&&i()}function a(e){e.target===r.refs.backdrop&&i()}r.refs.modalCareersBtnClose.addEventListener("click",i);
//# sourceMappingURL=careers.fa1daa51.js.map
