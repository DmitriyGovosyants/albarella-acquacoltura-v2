!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in o){var d=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,d.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){o[e]=n},e.parcelRequired7c6=d);for(var r=d("4Nugj"),t=0;t<r.refs.modalCareersBtnsOpen.length;t+=1)r.refs.modalCareersBtnsOpen[t].addEventListener("click",i);function i(e){document.body.classList.add("modal-open"),r.refs.backdrop.classList.remove("backdrop--hidden"),document.addEventListener("keydown",a),window.addEventListener("click",c)}function s(){document.body.classList.remove("modal-open"),r.refs.backdrop.classList.add("backdrop--hidden"),document.removeEventListener("keydown",a),window.removeEventListener("click",c)}function a(e){"Escape"===e.code&&s()}function c(e){e.target===r.refs.backdrop&&s()}r.refs.modalCareersBtnClose.addEventListener("click",s)}();
//# sourceMappingURL=careers.b2dbf3dc.js.map
