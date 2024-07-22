"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{871:(e,t,a)=>{var r=a(370),n=a.n(r),s=new URL(a(630),a.b);n()(s);class l{constructor(e){let{htmlTagName:t,...a}=e;if("string"==typeof t?this._htmlElem=document.createElement(t):console.error(new Error('htmlTagName must be of type "string"...')),"attr"in a&&"object"==typeof a.attr){let e=a.attr;for(let t of Object.keys(e))if("className"===t)this._htmlElem.className=e[t];else if("id"===t)this._htmlElem.id=e[t];else if("dataParams"===t&&Array.isArray(e[t]))for(let a of e[t]){let[e,t]=a;this._htmlElem.dataset[e]=t}else"string"==typeof e[t]&&this._htmlElem.setAttribute(t,e[t])}"innerHTML"in a&&(Array.isArray(a.innerHTML)?this.setInnerHTML(...a.innerHTML):this.setInnerHTML(a.innerHTML))}getHTMLElem(){return this._htmlElem}[Symbol.for("appendThis")](e){e&&(e.getHTMLElem?this._htmlElem.append(e.getHTMLElem()):this._htmlElem.append(e))}setInnerHTML(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(t.length){this._htmlElem.innerHTML="";for(let e of t)e&&(Array.isArray(e)?this.setInnerHTML(...e):this[Symbol.for("appendThis")](e))}}append(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];for(let e of t)this[Symbol.for("appendThis")](e)}}var i=a(29);async function o(e){return await new Promise((t=>{let a=new FileReader;return a.onload=e=>t(e.target.result),a.readAsDataURL(e)}))}const c=async function(e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"json";const a=e.split("/").slice(-1)[0];let r=function(e){const t=localStorage.getItem(e);let a;if(t){a=JSON.parse(t);const e=new Date(a.creationDate);return(new Date-e)/1e3/60/60/24>1?null:a}return null}(a);return r?await r.data:await function(e){let t,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return s&&"object"==typeof s?(t="data",a=s,r="POST"):(t="responseType",a=s,r="GET"),n={url:e,method:r,[t]:a},l&&"object"==typeof l&&(n.params=l),(0,i.Z)(n).then((e=>n.responseType?"blob"===n.responseType?o(e.data):e.data:e))}(e,t).then((e=>(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localData";const t={data:arguments.length>1?arguments[1]:void 0,creationDate:new Date};localStorage.setItem(e,JSON.stringify(t))}(a,e),e)))};class m extends l{constructor(e){super(e)}renderData(e){const t=new l({htmlTagName:"div",attr:{className:"score"}});if(this.append(t),parseInt(e))return setTimeout((()=>{t.getHTMLElem().style.width=parseInt(e)+"%"}),500),this.getHTMLElem();this.dispatchError(new Error('Graphblock has received not proper "score"... must be parsed to string')),document.console.error('Graphblock has received not proper "score"... must be parsed to string... instead: ',e)}}class h extends l{constructor(e){super(e)}renderData(e){let{...t}=e;const{title:a,details:r}=t;let n,s=[];return a&&"string"==typeof a&&(n=new l({htmlTagName:"h3",innerHTML:a})),r&&"string"==typeof r?s.push(new l({htmlTagName:"span",attr:{className:"spanDetails"},innerHTML:r})):Array.isArray(r)&&r.length&&(s=r.map((e=>{let t,a,r=new l({htmlTagName:"div",attr:{className:"graph-section"}}),{title:n,details:s}=e;return n&&"string"==typeof n&&(t=new l({htmlTagName:"span",attr:{className:"subHeading"},innerHTML:n})),s&&parseInt(s)&&(a=new m({htmlTagName:"div",attr:{className:"graphBlock"}})),r.setInnerHTML(t,a.renderData(s)),r.getHTMLElem()}))),this.setInnerHTML(n,...s),this.getHTMLElem()}}const g=new l({htmlTagName:"div",attr:{className:"segment-block-wrapper"}});g.renderData=function(e){const t=Object.keys(e).filter((t=>Array.isArray(e[t])));return this.setInnerHTML(...t.map((t=>{let a=new l({htmlTagName:"div",attr:{className:"segment-block"}});return a.segmentName=t,a.append(...e[t].map((e=>new h({htmlTagName:"div",attr:{className:"aside-item-wrapper"}}).renderData(e)))),a.getHTMLElem()}))),this.getHTMLElem()};const d=g;const p=new l({htmlTagName:"div",attr:{className:"asideBar"}});p.dataName="aside",p.renderData=function(e){const{dispatchAlert:t,setFilter:a,filterActive:r,data:n}=e,{fullName:s,photoUrl:i,...o}=n;let c,m,h,g,p,M;c=new l({htmlTagName:"h1",attr:{className:"hero-name"},innerHTML:s}),m=new Image,m.alt="VK",m.src=i,h=new l({htmlTagName:"div",attr:{className:"imageContainer"},innerHTML:m}),g=new l({htmlTagName:"ul",attr:{className:"sectionList"}}),Object.keys(o).forEach((e=>{let t=e===r?"sectionName specClass":"sectionName toBeHovered";g.append(new l({htmlTagName:"li",attr:{className:t,dataParams:[["section",e]]},innerHTML:e}))})),g.getHTMLElem().addEventListener("click",(e=>{let t=e.target;t.dataset.section&&t.dataset.section!==r&&a(t.dataset.section)})),M=new l({htmlTagName:"div",attr:{className:"image-section-container"},innerHTML:[h,g]}),r&&o[r]?(p=o[r][this.dataName],this.setInnerHTML(c,M,d.renderData(p))):t("error",new Error("filter ".concat(r," is not in the list of filters")))};const M=p;class A extends l{constructor(e){super(e)}renderData(e){const t=[];let a,r;if(e.subheading&&t.push(new l({htmlTagName:"h3",innerHTML:e.subheading})),e.comments&&t.push(new l({htmlTagName:"h4",innerHTML:e.comments})),e.p&&Array.isArray(e.p)){let a=e.p.map((e=>new l({htmlTagName:"p",innerHTML:e})));t.push(...a)}if(e.a&&Array.isArray(e.a)){const a=e.a.map((e=>new l({htmlTagName:"li",innerHTML:new l({htmlTagName:"a",attr:{className:"link",href:e.path,target:"_blank",rel:"noreferrer noopener nofollow",title:"follow the link for review..."},innerHTML:e.title})})));t.push(new l({htmlTagName:"ul",innerHTML:a}))}if(e.li&&Array.isArray(e.li)){const a=e.li.map((e=>new l({htmlTagName:"li",innerHTML:e})));t.push(new l({htmlTagName:"ul",innerHTML:a}))}if(e.file&&Array.isArray(e.file)){const a=e.file.map((e=>new l({htmlTagName:"li",innerHTML:new l({htmlTagName:"a",attr:{className:"link",href:e.path,target:"_blank",title:"Save ".concat(e.title," (pdf format)"),download:!0},innerHTML:e.title})})));t.push(new l({htmlTagName:"ul",innerHTML:a}))}return e.remark&&(r=new l({htmlTagName:"div",attr:{className:"remarkCol"},innerHTML:new l({htmlTagName:"span",attr:{className:"remark"},innerHTML:e.remark})})),a=new l({htmlTagName:"div",attr:{className:"contentBlock"},innerHTML:t}),this.setInnerHTML(r,a),this.getHTMLElem()}}const T=new l({htmlTagName:"div",attr:{className:"contentBar fade-in"}});T.dataName="content",T.renderData=function(e){const t=this.getHTMLElem(),{dispatchAlert:a,filterActive:r,data:n}=e;let s,i,o,c;r&&n[r]?(s=n[r][this.dataName],c="personal"===r?"personal-spec":null):a("error",new Error("filter ".concat(r," is not in the list of filters"))),s.title&&(i=new l({htmlTagName:"h2",attr:{className:"heading"},innerHTML:s.title})),s.details&&Array.isArray(s.details)&&(o=s.details.map((e=>new A({htmlTagName:"div",attr:{className:c&&"contentWrapper "+c||"contentWrapper"}}).renderData(e))));const m=new Image;m.alt="js icon",m.src="data:image/png;base64,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";const h=new l({htmlTagName:"div",attr:{className:"jsIconContainer"},innerHTML:m});return i&&o&&o.length&&this.setInnerHTML(i,h,...o),t.classList.toggle("fade-in"),setTimeout((()=>{t.classList.toggle("fade-in")}),200),t};const N=T;const L=new l({htmlTagName:"div",attr:{id:"alert-block"}});L.renderData=function(e){const{type:t,contentArr:a}=e;if(Array.isArray(a)&&a.length){const e=a.map((e=>{let a=null;return"error"===t?a="alert-error":"loading"===t&&(a="alert-loading"),new l({htmlTagName:"span",attr:{className:a},innerHTML:e})}));this.setInnerHTML(new l({htmlTagName:"div",attr:{className:"alert-content-block"},innerHTML:e}))}return this.getHTMLElem()};const w=L;const u=["personal","experience","education"];const f=new class extends l{constructor(e){super(e),this._kids=[M,N],this._data=null,this._alert={type:null,contentArr:[]},this._loadingIcon=new l({htmlTagName:"img",attr:{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJsb2FkZXItMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQogICAgIHdpZHRoPSI3MHB4IiBoZWlnaHQ9IjcwcHgiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KICA8cGF0aCBvcGFjaXR5PSIwLjIiIGZpbGw9IiMwMDAiIGQ9Ik0yMC4yMDEsNS4xNjljLTguMjU0LDAtMTQuOTQ2LDYuNjkyLTE0Ljk0NiwxNC45NDZjMCw4LjI1NSw2LjY5MiwxNC45NDYsMTQuOTQ2LDE0Ljk0Ng0KICAgIHMxNC45NDYtNi42OTEsMTQuOTQ2LTE0Ljk0NkMzNS4xNDYsMTEuODYxLDI4LjQ1NSw1LjE2OSwyMC4yMDEsNS4xNjl6IE0yMC4yMDEsMzEuNzQ5Yy02LjQyNSwwLTExLjYzNC01LjIwOC0xMS42MzQtMTEuNjM0DQogICAgYzAtNi40MjUsNS4yMDktMTEuNjM0LDExLjYzNC0xMS42MzRjNi40MjUsMCwxMS42MzMsNS4yMDksMTEuNjMzLDExLjYzNEMzMS44MzQsMjYuNTQxLDI2LjYyNiwzMS43NDksMjAuMjAxLDMxLjc0OXoiLz4NCiAgICA8cGF0aCBmaWxsPSIjZWU3OTAwIiBkPSJNMjYuMDEzLDEwLjA0N2wxLjY1NC0yLjg2NmMtMi4xOTgtMS4yNzItNC43NDMtMi4wMTItNy40NjYtMi4wMTJoMHYzLjMxMmgwDQogICAgQzIyLjMyLDguNDgxLDI0LjMwMSw5LjA1NywyNi4wMTMsMTAuMDQ3eiI+DQogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlVHlwZT0ieG1sIg0KICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSINCiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSJyb3RhdGUiDQogICAgICAgICAgICAgICAgICAgICAgZnJvbT0iMCAyMCAyMCINCiAgICAgICAgICAgICAgICAgICAgICB0bz0iMzYwIDIwIDIwIg0KICAgICAgICAgICAgICAgICAgICAgIGR1cj0iMC41cyINCiAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPg0KICAgIDwvcGF0aD4NCiAgPC9zdmc+"}}),this.barOnScroll=null,this._filterOption=u,this._filter=this._filterOption[0],this.append(...this._kids),this._data||this.dispatchAlert("loading",this._loadingIcon.getHTMLElem())}prepareData(e){return{data:e,filterActive:this._filter,setFilter:this.setFilter.bind(this),dispatchAlert:this.dispatchAlert.bind(this)}}setFilter(e){this.filter=e}get filter(){return this._filter}set filter(e){this._filterOption.length&&this._filterOption.includes(e)?(this._filter=e,this._data?(this.alertClear(),this._kids.forEach((e=>e.renderData(this.prepareData(this._data)))),window.scrollTo(0,0),this.barOnScroll&&this.barOnScroll.getHTMLElem&&this.barOnScroll.renderFilter(this._filter)):(console.error("the data is empty:  ".concat(this._data)),this.dispatchAlert("error",new Error("the data is empty:  ".concat(this._data))))):(console.error("the filter ".concat(e," is not in option...")),this.dispatchAlert("error",new Error("the filter ".concat(e," is not in option..."))))}get error(){return"error"===this._alert.type?this._alert.content:null}dispatchAlert(e){this._alert.type&&this._alert.type!==e&&this.alertClear(),this._alert.type=e;for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];this._alert.contentArr.push(...a),document.body.style.overflow="hidden",this.append(w.renderData(this._alert))}alertClear(){document.body.style.overflow="auto",w.getHTMLElem().remove(),this._alert.type=null,this._alert.contentArr=[]}listenForScroll(e){let t,a,{scrollPoint:r,attr:n,textContentArr:s}=e;const i=[];let o=!1;const{forScrollClass:c,onScrollEventClass:m,wrapperClass:h,elementClass:g}=n;let d,p=0;+r||i.push(new Error("given scrollPoint: ".concat(r," is not of type 'number'..."))),c||i.push(new Error("given value: ".concat(c," is not found..."))),m||i.push(new Error("given onScrollEventClass: ".concat(m," is not found..."))),h||i.push(new Error("given wrapperClass: ".concat(h," is not found..."))),g||i.push(new Error("given elementSpecClass: ".concat(g," is not found..."))),s&&s.length||i.push(new Error("given array: ".concat(s," is not found or empty..."))),i.length&&this.dispatchAlert("error",...i),d=s.map((e=>{let t=e===this._filter?"specClass":"toBeHovered";return new l({htmlTagName:"span",attr:{className:"".concat(g," ").concat(t),dataParams:[["section",e]]},innerHTML:e})})),this.barOnScroll=new l({htmlTagName:"div",attr:{className:h},innerHTML:d}),this.barOnScroll.renderFilter=function(e){[...this.getHTMLElem().children].forEach((t=>{t.classList.remove("specClass"),t.classList.remove("toBeHovered");let a=t.dataset.section===e?"specClass":"toBeHovered";t.classList.add(a)}))},t=new l({htmlTagName:"div",attr:{className:c},innerHTML:this.barOnScroll}),a=t.getHTMLElem(),this.barOnScroll.getHTMLElem().addEventListener("click",(e=>{let t=e.target;t.dataset.section&&t.dataset.section!==this._filter&&(this.filter=t.dataset.section)})),window.addEventListener("scroll",(()=>{o||(o=!0,setTimeout((()=>{!function(e){window.scrollY>=r?p<r&&(e.append(a),setTimeout((()=>{requestAnimationFrame((()=>{a.classList.add(m)}))}),100)):p>=r&&(requestAnimationFrame((()=>{a.classList.remove(m)})),setTimeout((()=>{a.remove()}),100));p=window.pageYOffset}(this.getHTMLElem()),o=!1}),300))}))}initScrollingText(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=new l({htmlTagName:"p",attr:{className:"scrolling-text"},innerHTML:e}),n=new l({htmlTagName:"div",attr:{id:"scrolling-text-wrapper"}});this.getHTMLElem().before(n.getHTMLElem()),r.getHTMLElem().style.left=n.getHTMLElem().offsetWidth+10+"px",n.append(r),function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=null;const l=r.getHTMLElem().offsetWidth,i=n.getHTMLElem().offsetWidth,o=l+i+10;let c=parseInt(r.getHTMLElem().style.left);if(!e.parentElement)throw new Error("given parentElement is not in DOM...");requestAnimationFrame((function e(l){s||(s=l);let i=(l-s)/t;i>1&&(i=1);let m=o*i;r.getHTMLElem().style.left=c-m+"px",i<1?requestAnimationFrame(e):a&&(r.getHTMLElem().remove(),r.getHTMLElem().style.left=n.getHTMLElem().offsetWidth+10+"px",n.append(r),s=null,requestAnimationFrame(e))}))}(r.getHTMLElem(),t,a)}getAndRenderData(e){setTimeout((()=>{c(e).then((e=>c(e.photoUrl,1,"blob").then((t=>(e.photoUrl=t,e))))).then((e=>{this._data=e,this.alertClear(),this._kids.forEach((e=>e.renderData(this.prepareData(this._data)))),this.initScrollingText('Using vanilla JS, without libraries, to realize the CV App which will dynamically construct the HTMLElements from the fetched JSON file, and re-render the HTMLElements on changing the value/state of the data or filters. Resembling React, to implement Classes/Components, which shall comprise the logic and the markup/styles of the App. The link to the code is available in the section "Experience"... ',5e4,!0),this.listenForScroll({scrollPoint:350,attr:{forScrollClass:"wrapper-on-scroll",onScrollEventClass:"scroll-active",wrapperClass:"bar-on-scroll",elementClass:"elem-on-scroll"},textContentArr:this._filterOption})})).catch((e=>{this.dispatchAlert("error",e),console.error(e.message)}))}),arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)}}({htmlTagName:"div",attr:{className:"totalWrapper",id:"app"}});document.getElementById("root").append(f.getHTMLElem()),f.getAndRenderData("./asset/pData/cv.json",1e3)},630:(e,t,a)=>{e.exports=a.p+"asset/16a7c4b5b83046fc8f21.ico"}},e=>{e.O(0,[278,185],(()=>{return t=871,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=main.be86b95c.js.map