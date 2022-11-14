/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss/index.scss":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss/index.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Roboto Regular\\\";\\n  src: local(\\\"Roboto Regular\\\");\\n  url: \\\"../../../assets/fonts/Roboto-Regular.ttf\\\" format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\nbody {\\n  font-family: \\\"Roboto Regular\\\", sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  /**** user-select: none; *****/\\n  transition: all 0.3s ease-in-out;\\n}\\n\\n/*************TOP BORDER BODY****************/\\nbody:before {\\n  content: \\\"\\\";\\n  position: fixed;\\n  top: -10px;\\n  left: 0;\\n  width: 100%;\\n  height: 10px;\\n  z-index: 100;\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\\n}\\n\\n/*****************END TOP BORDER BODY************/\\n#root {\\n  max-width: 1280px;\\n  background-color: rgb(255, 255, 255);\\n  margin: 0 auto;\\n  padding: 20px;\\n}\\n@media screen and (max-width: 720px) {\\n  #root {\\n    padding: 5px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/scss/index.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles/normalize.css":
/*!******************************!*\
  !*** ./styles/normalize.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/normalize.css?");

/***/ }),

/***/ "./styles/scss/index.scss":
/*!********************************!*\
  !*** ./styles/scss/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/scss/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/scss/index.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ \"./styles/normalize.css\");\n/* harmony import */ var _styles_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scss/index.scss */ \"./styles/scss/index.scss\");\n/* harmony import */ var _assets_json_cv_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/json/cv.json */ \"./assets/json/cv.json\");\n\r\n\r\n\r\n\r\n\r\nconst root = document.getElementById('root');\r\n\r\nlog(root);\r\n\r\nlog(_assets_json_cv_json__WEBPACK_IMPORTED_MODULE_2__, \"JSON: \");\r\n\r\n\r\n//dev\r\nfunction log(it, comments='value: ') {\r\n    console.log(comments, it);\r\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./assets/json/cv.json":
/*!*****************************!*\
  !*** ./assets/json/cv.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"fullName\":\"Vadim Komolov\",\"photo\":\"img/vk.png\",\"personal\":{\"aside\":{\"details\":[{\"title\":\"Citizenship\",\"details\":\"Kyiv Ukraine\"},{\"title\":\"Phone\",\"details\":\"+(380) 66 350-61-04\"},{\"title\":\"Email\",\"details\":\"vkomolov.ua@gmail.com\"},{\"title\":\"Linkedin\",\"details\":\"Vadim Komolov\"}],\"skills\":[{\"title\":\"Languages\",\"details\":[{\"title\":\"Russian\",\"details\":\"100\"},{\"title\":\"Ukrainian\",\"details\":\"85\"},{\"title\":\"English\",\"details\":\"85\"}]},{\"title\":\"Soft Skills\",\"details\":[{\"title\":\"Leadership\",\"details\":\"75\"},{\"title\":\"Collaboration\",\"details\":\"80\"},{\"title\":\"Negotiation\",\"details\":\"75\"},{\"title\":\"Presentation\",\"details\":\"85\"}]}]},\"content\":{\"title\":\"Covering Letter\",\"details\":[{\"remark\":null,\"subheading\":null,\"p\":[\"Dear Sirs,\",\"I have successfully worked in the field of industrial B2B sales for more than 15 years\",\"Gaining a wealth of knowledge and skills in managing sales, I combined them with my natural inclination to programming.\",\"The construction of algorithms for performing tasks in programming turned out to resemble the business planning with a clearly defined task weighed. Also, splitting of responsibility and functionality to the elementary components in Business Management has full compliance with the principles of SOLID programming.\",\"I found, I love coding and ready to devote my future career to App programming.\",\"As a rule, Developer has an engineering, procedural mindset that does not always keep up with the mindset of the Seller. The Seller is on a constant search for the possible advantages, features of the product and services to be sold.\",\"Just the Client oriented view to the product concept and the programming skills can produce a very perspective symbiosis.\",\"Many apps suffer not only adaptability to devices, but also their imbalance in programming, using \\'big\\' for the \\'little\\' or just not fully relevant to the task and possible Customer Priorities.\",\"In addition, the growing trend in use of different constructors, libraries simplify the web production, but also can restrain freedom and creativity at the same time.\",\"I learn to feel the balance in usage of different methods when creating an application with a specific purpose and functionality.\",\"I enjoy and strive for a scalable, polymorphic and maximum adaptive, semantic DRY code, not overloaded with many libraries for a couple of easy methods.\",\"I am certainly convinced, that my growing skills in programming and my former professional background will generate a productive and significant outcome for the Company I will work for.\",\"With Respect,\",\"Vadim Komolov\"]}]}},\"experience\":{\"aside\":{\"details\":[{\"title\":\"Achievements\",\"details\":\"3M International Sales & Marketing Professional Award. Team & Department Awards on exceptional sales results\"}],\"skills\":[{\"title\":\"Sales\",\"details\":[{\"title\":\"Customer Focus Selling\",\"details\":\"85\"},{\"title\":\"Sales Presentation\",\"details\":\"85\"}]},{\"title\":\"Sales Management\",\"details\":[{\"title\":\"Business Analysis\",\"details\":\"90\"},{\"title\":\"Sales Team Leading\",\"details\":\"80\"},{\"title\":\"Distribution management\",\"details\":\"85\"}]},{\"title\":\"Marketing Management\",\"details\":[{\"title\":\"Positioning and Penetration\",\"details\":\"80\"},{\"title\":\"Product Strategy\",\"details\":\"80\"},{\"title\":\"Marketing Analysis\",\"details\":\"85\"}]}]},\"content\":{\"title\":\"Experience\",\"details\":[{\"remark\":\"Apr 2018 - till present\",\"subheading\":\"Outsource\",\"comments\":\"programming, design, copywriting\",\"li\":[\"Stack: HTML5, CSS-3 (SCSS/module/styled), JS-6..., React/Redux/Router, on Gulp-4 / Webpack\",\"Creation of catalogs in publishing format with unique design and content, English\",\"Ideas Lab outsource collaboration\"]},{\"remark\":\"Nov 2017 – Apr 2018\",\"subheading\":\"Studying Full Stack\",\"comments\":\"\\'PHP Academy\\': Github links available at \\'EDUCATION\\' folder\",\"li\":[\"Frontend: HTML..5, CSS..3/SCSS, ES-2015..17, React..16/Redux, Gulp-4/Webpack;\",\"Backend: PHP(basics), SQL(basics);\",\"Backend (basics): Node.js, Express, MongoDB, end points...;\"]},{\"remark\":\"Apr 2015 – till present\",\"subheading\":\"Outsource «Ideas Lab»\",\"comments\":\"Sales\",\"li\":[\"taking part in Front-End programming\",\"technical realization discussions\"]},{\"remark\":\"Apr 2014 – Apr 2015\",\"subheading\":\"Basalt-Actien-Gesellschaft\",\"comments\":\"Sales Director\",\"li\":[\"Sales development in Ukraine, Russia, Belarus, Baltic States, Poland;\",\"Analysis & monitoring of the markets, identification of target segments and market entry strategies.\",\"Prioritization and development of distribution channels, pricing and distribution policies.\",\"Planning of the sales and marketing activities\"]},{\"remark\":\"Apr 2013 – Feb 2014\",\"subheading\":\"Industrial Group \\'Filter\\'\",\"comments\":\"Business Direction Manager\",\"li\":[\"Identifying the target market segments, working on the market entry strategy;\",\"Development of the Distribution channels\",\"Product assortment management, Price and Discount Policy;\",\"Sales activity, negotiations, presentations to the potential Traders\"]},{\"remark\":\"May 2004 – Aug 2012\",\"subheading\":\"3M Corporation, Ukraine\",\"comments\":\"Senior Sales Representative\",\"li\":[\"Prioritizing and development of the Key Customers in the target segments. Identifying business opportunities, achievement of goals;\",\"Analysis and development of the Product Channels. Initiating the Separate Product Group Policy\",\"Direct work with the Final Customers in/without cooperation with the Traders.\",\"Customers` \\'cases\\' analysis and presenting the product solutions. Leading Presentations, specialized OH&ES lectures, instructions to the potential Accounts.\",\"Leading trainings and lectures for the sales force of the Traders.\"]},{\"remark\":\"Sep 1997 – May 2004\",\"subheading\":\"Ukrtekstyl\",\"comments\":\"Senior Sales Manager\",\"li\":[\"Leading sales on the following trademarks: Ansell Edmont Industrial, JSP, Howard, Dupont, Ozon, Bacou Intersafe, MSA\",\"Leading projects on agricultural, energy and construction materials with the following co-supply of the safety products to the Accounts\",\"Product trainings to the sales stuff, coordination of the Sales Force\",\"Direct sales to the Final Customers of the industrial market. Sales leader\",\"Development of the Distribution Channel\"]}]}},\"education\":{\"aside\":{\"details\":[{\"title\":\"CFS\",\"details\":\"Corporate Courses\"},{\"title\":\"Lean Six Sigma\",\"details\":\"Corporate Courses\"},{\"title\":\"Presentation\",\"details\":\"Corporate Courses\"},{\"title\":\"Negotiation\",\"details\":\"Corporate Courses\"},{\"title\":\"Time Management\",\"details\":\"Corporate Courses\"},{\"title\":\"ISO 9000\",\"details\":\"Corporate Courses\"}],\"skills\":[{\"title\":\"Programming\",\"details\":[{\"title\":\"HTML5\",\"details\":\"80\"},{\"title\":\"CSS..3\",\"details\":\"85\"},{\"title\":\"SCSS\",\"details\":\"85\"},{\"title\":\"styled-components\",\"details\":\"80\"},{\"title\":\"module styling\",\"details\":\"85\"},{\"title\":\"Javascript ES-2015..17\",\"details\":\"80\"},{\"title\":\"Gulp-4\",\"details\":\"80\"},{\"title\":\"PHP\",\"details\":\"45\"},{\"title\":\"SQL\",\"details\":\"50\"}]},{\"title\":\"Frameworks, Libraries...\",\"details\":[{\"title\":\"jQuery\",\"details\":\"30\"},{\"title\":\"Bootstrap\",\"details\":\"30\"},{\"title\":\"React\",\"details\":\"75\"},{\"title\":\"React Redux\",\"details\":\"75\"},{\"title\":\"React Router\",\"details\":\"75\"}]},{\"title\":\"IDE, API, etc...\",\"details\":[{\"title\":\"XAMPP\",\"details\":\"60\"},{\"title\":\"PHP Storm, Web Storm\",\"details\":\"85\"},{\"title\":\"GIT, BitBucket...\",\"details\":\"75\"},{\"title\":\"Photoshop, Illustrator\",\"details\":\"80\"},{\"title\":\"Adobe Indesign\",\"details\":\"80\"},{\"title\":\"Solid Works\",\"details\":\"65\"}]}]},\"content\":{\"title\":\"Education\",\"details\":[{\"remark\":\"Nov 2017 - Apr 2018\",\"subheading\":\"PHP Academy ( Deutsche-It-Schule )\",\"li\":[\"Frontend: HTML..5, CSS..3/SCSS, ES-2015..17, React..16/Redux, Gulp-4/Webpack;\",\"Backend: PHP(basics), SQL(basics);\",\"Backend (basics): Node.js, Express, MongoDB, end points...;\"]},{\"remark\":\"Sep 2017 - Oct 2017\",\"subheading\":\"Institute of Information and Business Technologies\",\"li\":[\"Front-End Course: HTML, CSS;\"]},{\"remark\":\"Sep 1992 - June 1995\",\"subheading\":\"International Institute of Business, Management and Law\",\"li\":[\"Management\",\"Bachelor Degree with excellence\"]},{\"subheading\":\"GIT LINKS\",\"a\":[{\"title\":\"Initial Git Profile\",\"path\":\"https://github.com/vkomolov\"},{\"title\":\"PostIt Application\",\"path\":\"https://github.com/vkomolov/post-it\"},{\"title\":\"CV Link\",\"path\":\"https://github.com/vkomolov/cv-app\"},{\"title\":\"Gulp-4_Scss_JS-Browserify_Babelify own pack\",\"path\":\"https://github.com/vkomolov/Gulp4_Scss_JS-Browserify_Babelify\"},{\"title\":\"cartForm_Gulp4_SCSS_ES2015\",\"path\":\"https://github.com/vkomolov/cartForm_Gulp4_SCSS_ES2015\"},{\"title\":\"React Filter Module\",\"path\":\"https://github.com/vkomolov/React_Filter_ModuleWork\"},{\"title\":\"Product Catalog AdobeIndesign (Copywriting, Design)\",\"path\":\"https://github.com/vkomolov/AdobeIndesign-Catalog\"}]},{\"subheading\":\"REALISATION\",\"a\":[{\"title\":\"Post-It Demo\",\"path\":\"https://vkomolov.github.io/post-it/\"},{\"title\":\"cartForm_Gulp4_SCSS_ES2015\",\"path\":\"https://vkomolov.github.io/cartForm_Gulp4_SCSS_ES2015/\"},{\"title\":\"React Filter Module\",\"path\":\"https://vkomolov.github.io/React_Filter_ModuleWork/\"}]},{\"subheading\":\"CV Downloads\",\"file\":[{\"title\":\"English CV Version\",\"path\":\"../cvData/VKomolov_Eng19_CV_JS.pdf\"}]}]}}}');\n\n//# sourceURL=webpack:///./assets/json/cv.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;