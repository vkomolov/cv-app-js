"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[820],{820:(e,a,n)=>{n.d(a,{Z:()=>l});var r=n(505),t=new r.Z({htmlTagName:"div",attr:{id:"alert-block"}});t.renderData=function(e){!function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value: ";console.log(a,e)}(e,"innData inside AlertBlock");var a=e.type,n=e.contentArr;if(Array.isArray(n)&&n.length){var t=n.map((function(e){var n=null;return"error"===a?n="alert-error":"loading"===a&&(n="alert-loading"),new r.Z({htmlTagName:"span",attr:{className:n},innerHTML:e})}));this.setInnerHTML(new r.Z({htmlTagName:"div",attr:{className:"alert-content-block"},innerHTML:t}))}return this.getHTMLElem()};const l=t}}]);