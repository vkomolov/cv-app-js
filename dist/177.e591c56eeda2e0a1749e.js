"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{177:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(505),n=a(222),s=["fullName","photoUrl"];function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=new r.Z({htmlTagName:"div",attr:{className:"asideBar"}});l.dataName="aside",l.renderData=function(e){var t,a,l,c,o,m=e.dispatchAlert,d=e.setFilter,f=e.filterActive,u=e.data,h=u.fullName,p=u.photoUrl,N=i(u,s);t=new r.Z({htmlTagName:"h1",innerHTML:h}),(a=new Image).src=p,l=new r.Z({htmlTagName:"div",attr:{className:"imageContainer"},innerHTML:a}),c=new r.Z({htmlTagName:"ul",attr:{className:"sectionList"}}),Object.keys(N).forEach((function(e){var t=e===f?"sectionName specClass":"sectionName toBeHovered";c.append(new r.Z({htmlTagName:"li",attr:{className:t,dataParams:[["section",e]]},innerHTML:e}))})),c.getHTMLElem().addEventListener("click",(function(e){var t=e.target;t.dataset.section&&t.dataset.section!==f&&d(t.dataset.section)})),f&&N[f]?(o=N[f][this.dataName],this.setInnerHTML(t,l,c,n.Z.renderData(o))):m("error",new Error("filter ".concat(f," is not in the list of filters")))};const c=l}}]);