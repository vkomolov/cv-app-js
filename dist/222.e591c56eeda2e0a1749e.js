"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[222],{222:(r,t,e)=>{e.d(t,{Z:()=>l});var n=e(505),a=e(847);function i(r){return function(r){if(Array.isArray(r))return o(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"==typeof r)return o(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var u=new n.Z({htmlTagName:"div",attr:{className:"topWrapper"}});u.renderData=function(r){var t=Object.keys(r).filter((function(t){return Array.isArray(r[t])}));return this.setInnerHTML.apply(this,i(t.map((function(t){var e=new n.Z({htmlTagName:"div",attr:{className:"segment-block"}});return e.segmentName=t,e.append.apply(e,i(r[t].map((function(r){return new a.Z({htmlTagName:"div",attr:{className:"aside-item-wrapper"}}).renderData(r)})))),e.getHTMLElem()})))),this.getHTMLElem()};const l=u}}]);