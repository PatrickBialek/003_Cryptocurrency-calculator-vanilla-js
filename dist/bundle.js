/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./src/css/style.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/css/style.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"html,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block; }\\n\\nol,\\nul {\\n  list-style: none; }\\n\\nblockquote,\\nq {\\n  quotes: none; }\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n.heading-primary,\\n.heading-secondary {\\n  color: #222;\\n  line-height: 1.4;\\n  font-weight: 400; }\\n\\n.heading-primary {\\n  font-size: 3.6rem; }\\n\\n.heading-secondary {\\n  font-size: 2.4rem;\\n  text-align: center; }\\n\\n.heading-underline {\\n  margin: 1rem 0rem 2rem; }\\n\\nhtml {\\n  font-size: 62.5%; }\\n\\nbody {\\n  line-height: 1;\\n  font-size: 1.6rem;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n\\n.header,\\n.main,\\n.footer,\\n.most-popular,\\n.most-popular__single-currency {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  box-sizing: border-box;\\n  text-align: center; }\\n\\n.main,\\n.choose-currency {\\n  width: 100%; }\\n\\n.main {\\n  padding: 5rem 2rem;\\n  background-color: #f7f7f7; }\\n\\n.error {\\n  color: #c70000;\\n  padding: 1rem;\\n  margin-top: 1rem;\\n  height: 1.6rem; }\\n\\n.btn {\\n  background-color: #ff880e;\\n  color: #fff;\\n  border: none;\\n  margin-bottom: 0;\\n  font-weight: 700;\\n  text-align: center;\\n  cursor: pointer;\\n  letter-spacing: 0.1;\\n  padding: 10px 40px;\\n  font-size: 1.6rem;\\n  line-height: 1.65;\\n  border-radius: 100px;\\n  outline: none;\\n  transition: all 0.35s; }\\n  .btn:hover {\\n    background-color: #ff5100; }\\n\\n.margin-top--medium {\\n  margin-top: 2rem; }\\n\\n.margin-bottom--small {\\n  margin-bottom: 0.8rem; }\\n\\n.header {\\n  padding: 10rem 2rem;\\n  text-align: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-image: url(\\\"./images/background-image.jpg\\\");\\n  width: 100%; }\\n  .header__description {\\n    font-size: 1.6rem;\\n    font-weight: 400;\\n    line-height: 1.65;\\n    font-family: \\\"Yantramanav\\\", sans-serif;\\n    margin-bottom: 4px;\\n    color: #797979; }\\n\\n.most-popular__content {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  padding: 2rem 0rem 4rem;\\n  margin-bottom: 4rem; }\\n  .most-popular__content__single-currency {\\n    padding: 1rem 2rem;\\n    text-align: center; }\\n  .most-popular__content__currency-logo {\\n    width: 50px;\\n    height: 50px; }\\n  .most-popular__content__currency-name {\\n    color: #222;\\n    line-height: 1.4;\\n    font-weight: 400;\\n    font-size: 2.4rem;\\n    margin-top: 1.2rem;\\n    margin-bottom: 1.4rem; }\\n  .most-popular__content__important {\\n    color: #222;\\n    font-weight: 700; }\\n  .most-popular__content__paragraph {\\n    color: #797979; }\\n\\n.choose-currency {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  box-sizing: border-box;\\n  text-align: center; }\\n  .choose-currency__description {\\n    font-size: 1.6rem;\\n    font-weight: 400;\\n    line-height: 1.65;\\n    color: #797979; }\\n  .choose-currency__select {\\n    background: #fff;\\n    padding: 1rem;\\n    width: 20rem;\\n    text-align: center;\\n    border: 1px solid #797979;\\n    border-radius: 4px;\\n    appearance: none;\\n    -moz-appearance: none;\\n    -webkit-appearance: none; }\\n\\n.result {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  min-height: 15rem; }\\n  .result__important {\\n    color: #222;\\n    font-weight: 700; }\\n\\n.footer {\\n  background-color: #ff880e;\\n  padding: 2rem;\\n  text-align: center;\\n  width: 100%; }\\n  .footer__paragraph {\\n    font-size: 1.6rem;\\n    line-height: 1.7;\\n    font-weight: 400;\\n    color: #fff; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./style.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/lib/loader.js?!./src/css/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n// CSS\n\n\n// JS\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: cryptoAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cryptoAPI\", function() { return cryptoAPI; });\n/* harmony import */ var _cryptoAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cryptoAPI.js */ \"./src/js/cryptoAPI.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/js/ui.js\");\n\r\n\r\n\r\nconst cryptoAPI = new _cryptoAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"CryptoAPI\"]();\r\nconst ui = new _ui_js__WEBPACK_IMPORTED_MODULE_1__[\"UI\"]();\r\n\r\nconst btn = document.querySelector(\"#check-price\");\r\n\r\nbtn.addEventListener(\"click\", e => {\r\n\te.preventDefault();\r\n\tconst currencySelect = document.querySelector(\"#standard-currency\").value,\r\n\t\tcryptoCurrencySelect = document.querySelector(\"#cryptocurrency\").value,\r\n\t\terrorField = document.querySelector(\"#error-select\");\r\n\r\n\tif (currencySelect === \"\" || cryptoCurrencySelect === \"\") {\r\n\t\tui.printAlert(errorField);\r\n\t} else {\r\n\t\tui.removeAlert(errorField);\r\n\r\n\t\tconst index = document.querySelector(\"#standard-currency\").selectedIndex,\r\n\t\t\tcurrencySymbol = document.querySelector(\"#standard-currency\")[index].dataset.symbol;\r\n\r\n\t\tcryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect, currencySymbol).then(data => {\r\n\t\t\tui.printResult(data.result[0], currencySelect, currencySymbol);\r\n\t\t});\r\n\t}\r\n});\r\n\r\nasync function selectTheMostPopular() {\r\n\tcryptoAPI.getCryptoCurrenciesList().then(data => {\r\n\t\tconst currencyContainers = document.querySelectorAll(\".most-popular__single-currency\");\r\n\r\n\t\tcurrencyContainers.forEach(currencyContainers => {\r\n\t\t\tlet dataSet = currencyContainers.dataset.currency;\r\n\t\t\tconst currencies = data.cryptoCurrencies,\r\n\t\t\t\tsingleCurrency = currencies.find(currency => currency.symbol == dataSet),\r\n\t\t\t\tconstainerCurrency = document.querySelector(`[data-currency='${dataSet}']`),\r\n\t\t\t\tpercentChange1h = parseFloat(singleCurrency.percent_change_1h),\r\n\t\t\t\tpercentChange1d = parseFloat(singleCurrency.percent_change_24h),\r\n\t\t\t\tpercentChange7d = parseFloat(singleCurrency.percent_change_7d);\r\n\r\n\t\t\tui.printTheMostPopular(constainerCurrency, percentChange1h, percentChange1d, percentChange7d, dataSet);\r\n\t\t});\r\n\t});\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", selectTheMostPopular);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/cryptoAPI.js":
/*!*****************************!*\
  !*** ./src/js/cryptoAPI.js ***!
  \*****************************/
/*! exports provided: CryptoAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CryptoAPI\", function() { return CryptoAPI; });\nclass CryptoAPI {\n\tasync queryAPI(currency, cryptoCurrency) {\n\t\tconst url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptoCurrency}/?convert=${currency}`);\n\t\tconst result = await url.json();\n\n\t\treturn {\n\t\t\tresult\n\t\t};\n\t}\n\n\tasync getCryptoCurrenciesList() {\n\t\tconst url = await fetch(\"https://api.coinmarketcap.com/v1/ticker/\");\n\t\tconst cryptoCurrencies = await url.json();\n\n\t\treturn {\n\t\t\tcryptoCurrencies\n\t\t};\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/cryptoAPI.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UI\", function() { return UI; });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n\n\nclass UI {\n\tconstructor() {\n\t\tthis.init();\n\t}\n\tinit() {\n\t\tthis.printCryptoCurrencies();\n\t}\n\n\tprintCryptoCurrencies() {\n\t\t_app_js__WEBPACK_IMPORTED_MODULE_0__[\"cryptoAPI\"].getCryptoCurrenciesList().then(data => {\n\t\t\tconst cryptoCurrencies = data.cryptoCurrencies,\n\t\t\t\tselect = document.getElementById(\"cryptocurrency\");\n\t\t\tcryptoCurrencies.forEach(currency => {\n\t\t\t\tconst option = document.createElement(\"option\");\n\t\t\t\toption.value = currency.id;\n\t\t\t\toption.appendChild(document.createTextNode(currency.name));\n\t\t\t\tselect.appendChild(option);\n\t\t\t});\n\t\t});\n\t}\n\n\tprintAlert(errorField) {\n\t\terrorField.textContent = \"You have to select both of fields\";\n\t}\n\n\tremoveAlert(errorField) {\n\t\terrorField.textContent = \"\";\n\t}\n\n\tprintResult(result, currency, currencySymbol) {\n\t\tlet currencyName;\n\t\tcurrencyName = \"price_\" + currency.toLowerCase();\n\n\t\tconst value = result[currencyName];\n\n\t\tconst hourChange = parseFloat(result.percent_change_1h),\n\t\t\tdayChange = parseFloat(result.percent_change_24h),\n\t\t\tweekChange = parseFloat(result.percent_change_7d);\n\n\t\tlet HTMLTemplate = \"\";\n\n\t\tHTMLTemplate += `\n      <h2 class=\"heading-secondary margin-bottom--small\">Result:</h2>\n      <p class=\"result__paragraph\">The Price of <span class=\"result__important\">${result.name}</span> is equal to <span class=\"result__important\">${value} ${currencySymbol}</span></p>\n      <p class=\"result__paragraph\">Hourly change: <span class=\"result__important\" id=\"hour-change\"> ${hourChange}%</span></p>\n      <p class=\"result__paragraph\">Daily  change: <span class=\"result__important\" id=\"day-change\"> ${dayChange}%</span></p>\n      <p class=\"result__paragraph\">Weekly change: <span class=\"result__important\" id=\"week-change\"> ${weekChange}%</span></p>\n    `;\n\n\t\tconst resultField = document.querySelector(\"#result-field\");\n\t\tresultField.innerHTML = HTMLTemplate;\n\n\t\tconst hourChangeContainer = document.getElementById(\"hour-change\");\n\t\thourChange > 0 ? (hourChangeContainer.style.color = \"green\") : (hourChangeContainer.style.color = \"red\");\n\n\t\tconst dayChangeContainer = document.getElementById(\"day-change\");\n\t\tdayChange > 0 ? (dayChangeContainer.style.color = \"green\") : (dayChangeContainer.style.color = \"red\");\n\n\t\tconst weekChangeContainer = document.getElementById(\"week-change\");\n\t\tweekChange > 0 ? (weekChangeContainer.style.color = \"green\") : (weekChangeContainer.style.color = \"red\");\n\t}\n\n\tprintTheMostPopular(constainerCurrency, percentChange1h, percentChange1d, percentChange7d, dataSet) {\n\t\tlet HTMLTemplate = \"\";\n\n\t\tHTMLTemplate += `\n      <p class=\"most-popular__paragraph\">Hourly change: <span class=\"most-popular__important\" id=\"${dataSet}-hourly\"> ${percentChange1h}%</span></p>\n      <p class=\"most-popular__paragraph\">Daily change: <span class=\"most-popular__important\" id=\"${dataSet}-daily\"> ${percentChange1d}%</span></p>\n      <p class=\"most-popular__paragraph\">Weekly change: <span class=\"most-popular__important\" id=\"${dataSet}-weekly\"> ${percentChange7d}%</span></p>\n    `;\n\n\t\tconstainerCurrency.innerHTML += HTMLTemplate;\n\n\t\tconst hourChangeContainer = document.getElementById(`${dataSet}-hourly`);\n\t\tpercentChange1h > 0 ? (hourChangeContainer.style.color = \"green\") : (hourChangeContainer.style.color = \"red\");\n\n\t\tconst dayChangeContainer = document.getElementById(`${dataSet}-daily`);\n\t\tpercentChange1d > 0 ? (dayChangeContainer.style.color = \"green\") : (dayChangeContainer.style.color = \"red\");\n\n\t\tconst weekChangeContainer = document.getElementById(`${dataSet}-weekly`);\n\t\tpercentChange7d > 0 ? (weekChangeContainer.style.color = \"green\") : (weekChangeContainer.style.color = \"red\");\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ })

/******/ });