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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createSprite;
/* harmony export (immutable) */ __webpack_exports__["a"] = createLabel;
/* harmony export (immutable) */ __webpack_exports__["c"] = rem;
/* unused harmony export offsetValue */
/* harmony export (immutable) */ __webpack_exports__["d"] = sumY;
function createSprite(texture, size, pos = [-1000, -1000], anchor = [0, 0]) {
	const sprite = new spritejs.Sprite(texture);
	sprite.attr({
		anchor,
		pos,
		size
	});
	return sprite;
}

function createLabel(text, pos = [0, 0], anchor = [0.5, 0.5], font = 'bold 68px Arial', color = '#fff') {
	const label = new spritejs.Label(text);
	label.attr({
		anchor,
		pos,
		font,
		color
	});
	return label;
}

function rem(number) {
	return number * (window.innerWidth * 1.0 / 375);
}

// export function remY (number) {
// 	return (number * (window.innerHeight * 1.0 / 667))
// }

function offsetValue(...arr) {
	return arr.reduce((x, y) => {
		return x + y;
	}, 0);
}

function sumY(y, num) {
	return y + num;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__urls_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__part1_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__part2_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__part3_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__part4_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gSprite_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lastpage_js__ = __webpack_require__(13);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










// const wenan = '一分钟看精彩，精彩不间断'
const arrow = 'http://7xt3kw.com1.z0.glb.clouddn.com/arrow.png';
const bgUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/bg4.png';
const ballBorder = 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_border.png';

const windowW = window.innerWidth;
const windowH = window.innerHeight;

const paper = spritejs.Paper2D('#container');
paper.setResolution(windowW, windowH);
const bglayer = paper.layer('bg'),
      fglayer = paper.layer('fg', {
	evaluateFPS: true,
	renderMode: 'repaintAll'
}),
      loadinglayer = paper.layer('loading');

const addLoading = () => {
	const bg = new spritejs.Sprite();
	// const x1 = x - 375
	bg.attr({
		anchor: [0, 0],
		pos: [0, 0],
		size: [windowW, windowH],
		bgcolor: '#0A0B0C',
		zIndex: 1000
	});
	return bg;
};
const addLoadingText = () => {
	const text = new spritejs.Label('拼命加载中...');
	// const x1 = x - 375
	text.attr({
		anchor: [0.5, 0.5],
		pos: [windowW / 2, windowH * 2 / 5],
		font: '30px arial',
		color: '#fff',
		zIndex: 1001
	});
	return text;
};
const loading = addLoading();
const loadText = addLoadingText();
// const loading = document.querySelector("#loading");
loadinglayer.appendChild(loading);
loadinglayer.appendChild(loadText);
paper.preload(__WEBPACK_IMPORTED_MODULE_1__urls_js__["a" /* default */]).then(function (argument) {

	__WEBPACK_IMPORTED_MODULE_6__gSprite_js__["a" /* default */].render(fglayer);

	__WEBPACK_IMPORTED_MODULE_2__part1_js__["a" /* default */].get(fglayer);
	__WEBPACK_IMPORTED_MODULE_3__part2_js__["a" /* default */].get(fglayer);
	__WEBPACK_IMPORTED_MODULE_4__part3_js__["a" /* default */].get(fglayer);
	__WEBPACK_IMPORTED_MODULE_5__part4_js__["a" /* default */].get(fglayer);
	loadinglayer.removeChild(loading);
	loadinglayer.removeChild(loadText);
	__WEBPACK_IMPORTED_MODULE_6__gSprite_js__["a" /* default */].ballBorder.on('click', (() => {
		var _ref = _asyncToGenerator(function* (evt) {
			__WEBPACK_IMPORTED_MODULE_6__gSprite_js__["a" /* default */].ballBorder.off('click');
			fglayer.removeChild(__WEBPACK_IMPORTED_MODULE_6__gSprite_js__["a" /* default */].tip);
			__WEBPACK_IMPORTED_MODULE_7__lastpage_js__["a" /* default */].render(bglayer);
			__WEBPACK_IMPORTED_MODULE_6__gSprite_js__["a" /* default */].countDownAnim(fglayer);
			yield __WEBPACK_IMPORTED_MODULE_6__gSprite_js__["a" /* default */].frame1();
			__WEBPACK_IMPORTED_MODULE_2__part1_js__["a" /* default */].render(fglayer);
			yield __WEBPACK_IMPORTED_MODULE_2__part1_js__["a" /* default */].action();
			__WEBPACK_IMPORTED_MODULE_3__part2_js__["a" /* default */].render(fglayer);
			yield __WEBPACK_IMPORTED_MODULE_3__part2_js__["a" /* default */].action();
			__WEBPACK_IMPORTED_MODULE_4__part3_js__["a" /* default */].render(fglayer);
			yield __WEBPACK_IMPORTED_MODULE_4__part3_js__["a" /* default */].action();
			__WEBPACK_IMPORTED_MODULE_5__part4_js__["a" /* default */].render(fglayer);
			yield __WEBPACK_IMPORTED_MODULE_5__part4_js__["a" /* default */].action();
			__WEBPACK_IMPORTED_MODULE_4__part3_js__["a" /* default */].render(fglayer);
			yield __WEBPACK_IMPORTED_MODULE_4__part3_js__["a" /* default */].action();
			__WEBPACK_IMPORTED_MODULE_5__part4_js__["a" /* default */].render(fglayer);
			yield __WEBPACK_IMPORTED_MODULE_5__part4_js__["a" /* default */].action();
		});

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	})());
	// part1.render(fglayer)
	// part1.action()
	// fglayer.appendChild(text1)
	// let i = 60
	// fglayer.timeline.setInterval(()=>{
	// 	text1.attr({text:i--})
	// },1000)
	// fglayer.timeline.playbackRate = 1;
	// fglayer.appendChild(addchip1(chip1))
	// fglayer.appendChild(addchip2(chip2, 300))
	// setInterval(() => {
	// 	fglayer.appendChild(addchip1(chip1))
	// 	fglayer.appendChild(addchip2(chip2, 300))
	// }, 1000)
	// setInterval(() => {
	// 	fglayer.timeline.playbackRate = 0
	// }, 10000)
	// fglayer.appendChild(addBg(0,0,0))
	// fglayer.appendChild(addBg(790,180,0))
	// fglayer.appendChild(addBg(810,180,10000))
	// const birdCountLabel = new spritejs.Label()
	//  birdCountLabel.attr({
	//    pos: [30, 60],
	//    font: '32px Arial',
	//    color: 'white',
	//  })

	//  bglayer.appendChild(birdCountLabel) 

	//  setInterval(() => {
	//    birdCountLabel.text = `fps: ${fglayer.fps}` 
	//      + ` | rate: ${fglayer.timeline.playbackRate.toFixed(2)}`
	//  }, 100)
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/.0.28.7@css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/.0.28.7@css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body{font-family:Helvetica; background: #0A0B0C;margin:0;}\n#container{height: 100%;width: 100%;}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const urls = ['http://7xt3kw.com1.z0.glb.clouddn.com/arrow.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/bg4.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_border.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/pause.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/title.png?imageslim.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/text3.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/text4.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/logo.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/text5.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/text6.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/text7.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_border.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_bg.jpg', 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_chip2.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word2.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_white_house.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_thrump.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word1.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word2.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word3.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word4.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part1.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part3_cola.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part3_name.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part3_people.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_event.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_name.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_passport.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_wj.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part4_tv.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part4_treasure.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/part4_wyf.png?imageslim', 'http://7xt3kw.com1.z0.glb.clouddn.com/tip.png?imageslim'];
/* harmony default export */ __webpack_exports__["a"] = (urls);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


const [baseW, baseH] = [185, 350];
const part1Word2 = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word2.png';
const houseUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_white_house.png';
const trumpUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_thrump.png';
const word1Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word1.png';
const word2Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word2.png';
const word3Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word3.png';
const word4Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1_word4.png';
const part1Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/part1.png';
const windowW = window.innerWidth;
const windowH = window.innerHeight;

const part1 = {
	fglayer: '',
	trump: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(trumpUrl, [145, 168]),
	house: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(houseUrl, [157, 142]),
	word1: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(word1Url, [113, 57]),
	word2: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(word2Url, [118, 99]),
	word3: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(word3Url, [106, 54]),
	word4: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(word4Url, [185, 33]),
	get: layer => {
		part1.fglayer = layer;
	},
	render: fglayer => {
		fglayer.appendChild(part1.trump);
		fglayer.appendChild(part1.house);
		fglayer.appendChild(part1.word4);
		fglayer.appendChild(part1.word3);
		fglayer.appendChild(part1.word2);
		fglayer.appendChild(part1.word1);
	},
	action: (() => {
		var _ref = _asyncToGenerator(function* () {
			yield part1.frame1();
			yield part1.sleep(2000);
			yield part1.frame2();
		});

		return function action() {
			return _ref.apply(this, arguments);
		};
	})(),
	sleep: (() => {
		var _ref2 = _asyncToGenerator(function* (time) {
			return new Promise(function (resolve) {
				part1.fglayer.timeline.setTimeout(resolve, time);
			});
		});

		return function sleep(_x) {
			return _ref2.apply(this, arguments);
		};
	})(),
	frame1: (() => {
		var _ref3 = _asyncToGenerator(function* (delay = 1000) {
			const anim1 = part1.trump.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 90), baseH - 100], opacity: 0 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 70), baseH - 100], opacity: 1 }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			const anim2 = part1.house.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 100), baseH - 50], opacity: 0 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 170), baseH - 50], opacity: 1 }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part1.word4.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 50), baseH + 100], opacity: 0 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 50), baseH + 50], opacity: 1 }], {
				duration: 500,
				delay: delay + 1000 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim4 = part1.word3.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW + 50), baseH - 100], opacity: 0 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW + 50), baseH - 30], opacity: 1 }], {
				duration: 500,
				delay: delay + 1500 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim5 = part1.word2.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 225), baseH - 200], opacity: 0 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW - 180), baseH - 120], opacity: 1 }], {
				duration: 500,
				delay: delay + 2500 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim6 = part1.word1.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW + 10), baseH - 150], opacity: 0 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(baseW + 70), baseH - 130], opacity: 1 }], {
				duration: 500,
				delay: delay + 3500 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
			yield anim4.finished;
			yield anim5.finished;
			yield anim6.finished;
		});

		return function frame1() {
			return _ref3.apply(this, arguments);
		};
	})(),
	frame2: (() => {
		var _ref4 = _asyncToGenerator(function* (delay) {
			const anim1 = part1.trump.animate([{ pos: part1.trump.attr('pos') }, { pos: [part1.trump.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part1.trump.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			const anim2 = part1.house.animate([{ pos: part1.house.attr('pos') }, { pos: [part1.house.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part1.house.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part1.word4.animate([{ pos: part1.word4.attr('pos') }, { pos: [part1.word4.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part1.word4.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim4 = part1.word3.animate([{ pos: part1.word3.attr('pos') }, { pos: [part1.word3.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part1.word3.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim5 = part1.word2.animate([{ pos: part1.word2.attr('pos') }, { pos: [part1.word2.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part1.word2.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim6 = part1.word1.animate([{ pos: part1.word1.attr('pos') }, { pos: [part1.word1.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part1.word1.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
			yield anim4.finished;
			yield anim5.finished;
			yield anim6.finished;
		});

		return function frame2(_x2) {
			return _ref4.apply(this, arguments);
		};
	})()
	// addPart1Word2: (x, y, delay) => {
	// 	const word = new spritejs.Sprite(part1Word2)
	// 	word.attr({
	// 	  anchor: [0.5, 0.5],
	// 	  pos: [x, y],
	// 	  size: [118, 99]
	// 	})
	// 	word.animate([
	// 	  {x: 80, y: 200},
	// 	  {x:100 ,y: 200},
	// 	  {x:100 ,y: 200},
	// 	  {x:100 ,y: 200},
	// 	  {x:100 ,y: 200},
	// 	  {x:100 ,y: 200},
	// 	  {x:100 ,y: 200},
	// 	  {x:100 ,y: 200},
	// 	  {x:100 ,y: -200}

	// 	], {
	// duration: 6000,
	// delay: delay || 0,
	// // iterations: Infinity,
	// fill: 'forwards',
	// easing: 'ease-in-out',        
	// 	})	
	// 	return word	
	// },
	// addTrump: (x, y, delay) => {
	// 	const trump = new spritejs.Sprite(trumpUrl)
	// 	trump.attr({
	// 	  anchor: [0, 0],
	// 	  pos: [x, y],
	// 	  size: [145, 168]
	// 	})
	// 	trump.animate([
	// 	  {x: rem(baseW - 145),y:800,opacity:0},
	// 	  {x: rem(baseW - 145),y:baseH,opacity:1},
	// 	  {x: rem(baseW - 145),y:baseH},
	// 	  {x: rem(baseW - 145),y:baseH},
	// 	  {x: rem(baseW - 145),y:baseH},
	// 	  {x: rem(baseW - 145),y:baseH},
	// 	  {x: rem(baseW - 145),y:baseH},
	// 	  {x: rem(baseW - 145),y:baseH},
	// 	  {x: rem(baseW - 145),y:baseH},
	// 	  {x: rem(baseW - 145),y:-100}
	// 	], {
	// 	  duration: 10000,
	// 	  delay: delay || 0,
	// 	  // iterations: Infinity,
	// 	  fill: 'forwards',
	// 	  easing: 'ease-in-out',        
	// 	})	
	// 	return trump	
	// },
	// addHouse: (x, y, delay) => {
	// 	const house = new spritejs.Sprite(houseUrl)
	// 	house.attr({
	// 	  anchor: [0, 0],
	// 	  pos: [rem(x), y],
	// 	  size: [157, 142]
	// 	})
	// 	house.animate([
	// 	  {x: rem(baseW - 225),y:800,opacity:0},
	// 	  {x: rem(baseW - 225),y:baseH + 35,opacity:1},
	// 	  {x: rem(baseW - 225),y:baseH + 35},
	// 	  {x: rem(baseW - 225),y:baseH + 35},
	// 	  {x: rem(baseW - 225),y:baseH + 35},
	// 	  {x: rem(baseW - 225),y:baseH + 35},
	// 	  {x: rem(baseW - 225),y:baseH + 35},
	// 	  {x: rem(baseW - 225),y:baseH + 35},
	// 	  {x: rem(baseW - 225),y:baseH + 35},
	// 	  {x: rem(baseW - 225),y:-100}
	// 	], {
	// 	  duration: 10000,
	// 	  delay: delay || 0,
	// 	  // iterations: Infinity,
	// 	  fill: 'forwards',
	// 	  easing: 'ease-in-out',        
	// 	})	
	// 	return house	
	// },
	// addPart1: (delay) => {
	// 	const word = new spritejs.Sprite(part1Url)
	// 	const [x, y] = [windowW / 2, baseH + 85]
	// 	word.attr({
	// 	  anchor: [0.5, 0.5],
	// 	  pos: [20, 0],
	// 	  size: [rem(330), rem(195)]
	// 	})
	// 	const anim1 = word.animate([
	// 	  {x, y: 935},
	// 	  {x, y: baseH + 55},
	// 	], {
	// 	  duration: 10000,
	// 	  delay: delay || 0,
	// 	  // iterations: Infinity,
	// 	  fill: 'forwards',
	// 	  easing: 'ease-in-out',        
	// 	})
	// 	const anim2 = () => {
	// 		word.animate([
	// 		  {x, y: baseH + 55},
	// 		  {x, y: -100}
	// 		], {
	// 		  duration: 1000,
	// 		  delay: 3000,
	// 		  fill: 'forwards',
	// 		  easing: 'ease-in-out',        
	// 		})
	// 	}
	// 	anim1.finished.then(anim2)
	// 	return word
	// },
	// addWord4: (delay) => {
	// 	const word = new spritejs.Sprite(word4Url)
	// 	const [x, y] = [baseW - 95, 800]
	// 	word.attr({
	// 	  anchor: [0, 0],
	// 	  pos: [rem(x), y],
	// 	  size: [185, 33]
	// 	})
	//     const anim1 = word.animate([
	// 	  {x: rem(baseW - 95), y:800,opacity:0},
	// 	  {x: rem(baseW - 95),y:baseH + 135,opacity:1},
	// 	  {x: rem(baseW - 95),y:baseH + 135},
	// 	  {x: rem(baseW - 95),y:baseH + 135},
	// 	  {x: rem(baseW - 95),y:baseH + 135},
	// 	  {x: rem(baseW - 95),y:baseH + 135},
	// 	  {x: rem(baseW - 95),y:baseH + 135},
	// 	  {x: rem(baseW - 95),y:baseH + 135},
	// 	  {x: rem(baseW - 95),y:-100}
	// 	], {
	// 	  duration: 60000,
	// 	  delay: delay || 0,
	// 	  // iterations: Infinity,
	// 	  fill: 'forwards',
	// 	  easing: 'ease-in-out',        
	// 	})
	// 	// anim1.finished.then(setInterval(anim2, 3000))
	// 	return word	
	// }
};
/* harmony default export */ __webpack_exports__["a"] = (part1);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



const eventUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_event.png';
const nameUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_name.png';
const passportUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_passport.png';
const wjUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part2_wj.png';
const windowW = window.innerWidth;
const windowH = window.innerHeight;
const [baseW, baseH] = [windowW / 2, 350];

const part2 = {
	fglayer: '',
	evn: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(eventUrl, [375, 478], [-1000, -1000], [0.5, 0.5]),
	name: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(nameUrl, [375, 478]),
	passport: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(passportUrl, [344, 216], [-1000, -1000], [0.5, 0.5]),
	wj: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(wjUrl, [375, 478], [-1000, -1000], [0.5, 0.5]),
	get: layer => {
		part2.fglayer = layer;
	},
	render: fglayer => {
		fglayer.appendChild(part2.passport);
		fglayer.appendChild(part2.wj);
		fglayer.appendChild(part2.name);
		fglayer.appendChild(part2.evn);
	},
	action: (() => {
		var _ref = _asyncToGenerator(function* () {
			yield part2.frame1();
			yield part2.sleep(3000);
			yield part2.frame2();
		});

		return function action() {
			return _ref.apply(this, arguments);
		};
	})(),
	sleep: (() => {
		var _ref2 = _asyncToGenerator(function* (time) {
			return new Promise(function (resolve) {
				part2.fglayer.timeline.setTimeout(resolve, time);
			});
		});

		return function sleep(_x) {
			return _ref2.apply(this, arguments);
		};
	})(),
	frame1: (() => {
		var _ref3 = _asyncToGenerator(function* (delay = 1000) {
			const anim1 = part2.passport.animate([{ pos: [baseW, baseH], opacity: 0 }, { pos: [baseW, baseH], opacity: 1 }], {
				duration: 500,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			const anim2 = part2.wj.animate([{ pos: [baseW * 2, baseH + 50], opacity: 0 }, { pos: [baseW * 2 - 150, baseH + 50], opacity: 1 }], {
				duration: 500,
				delay: delay + 500 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part2.name.animate([{ pos: [baseW - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(200), baseH - 170], opacity: 0, scale: 5 }, { pos: [baseW - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(200), baseH - 170], opacity: 1, scale: 1 }], {
				duration: 500,
				delay: delay + 1000 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim4 = part2.evn.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(130), baseH + 80], opacity: 0 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(130), baseH + 50], opacity: 1 }], {
				duration: 500,
				delay: delay + 1500 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
			yield anim4.finished;
		});

		return function frame1() {
			return _ref3.apply(this, arguments);
		};
	})(),
	frame2: (() => {
		var _ref4 = _asyncToGenerator(function* (delay) {
			const anim1 = part2.passport.animate([{ pos: part2.passport.attr('pos') }, { pos: [part2.passport.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part2.passport.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			const anim2 = part2.wj.animate([{ pos: part2.wj.attr('pos') }, { pos: [part2.wj.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part2.wj.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part2.name.animate([{ pos: part2.name.attr('pos') }, { pos: [part2.name.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part2.name.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim4 = part2.evn.animate([{ pos: part2.evn.attr('pos') }, { pos: [part2.evn.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part2.evn.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
			yield anim4.finished;
		});

		return function frame2(_x2) {
			return _ref4.apply(this, arguments);
		};
	})()
};
/* harmony default export */ __webpack_exports__["a"] = (part2);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



const colaUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part3_cola.png';
const nameUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part3_name.png';
const peopleUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part3_people.png';

const windowW = window.innerWidth;
const windowH = window.innerHeight;
const [baseW, baseH] = [windowW / 2, 350];

const part3 = {
	fglayer: '',
	cola: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(colaUrl, [220, 265], [-1000, -1000], [0.5, 0.5]),
	name: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(nameUrl, [375, 478]),
	people: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(peopleUrl, [180, 204], [-1000, -1000], [0.5, 0.5]),
	get: layer => {
		part3.fglayer = layer;
	},
	render: fglayer => {
		fglayer.appendChild(part3.people);
		fglayer.appendChild(part3.cola);
		fglayer.appendChild(part3.name);
	},
	action: (() => {
		var _ref = _asyncToGenerator(function* () {
			yield part3.frame1();
			yield part3.sleep(2000);
			yield part3.frame2();
		});

		return function action() {
			return _ref.apply(this, arguments);
		};
	})(),
	sleep: (() => {
		var _ref2 = _asyncToGenerator(function* (time) {
			return new Promise(function (resolve) {
				part3.fglayer.timeline.setTimeout(resolve, time);
			});
		});

		return function sleep(_x) {
			return _ref2.apply(this, arguments);
		};
	})(),
	frame1: (() => {
		var _ref3 = _asyncToGenerator(function* (delay = 1000) {
			const anim1 = part3.people.animate([{ pos: [baseW, baseH], opacity: 0 }, { pos: [baseW, baseH], opacity: 1 }], {
				duration: 500,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			const anim2 = part3.cola.animate([{ pos: [baseW * 2, baseH + 20], opacity: 0 }, { pos: [baseW * 2 - 100, baseH + 20], opacity: 1 }], {
				duration: 500,
				delay: delay + 500 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part3.name.animate([{ pos: [baseW - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(200), baseH - 170], opacity: 0, scale: 5 }, { pos: [baseW - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(200), baseH - 170], opacity: 1, scale: 1 }], {
				duration: 500,
				delay: delay + 1000 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
		});

		return function frame1() {
			return _ref3.apply(this, arguments);
		};
	})(),
	frame2: (() => {
		var _ref4 = _asyncToGenerator(function* (delay) {
			const anim1 = part3.people.animate([{ pos: part3.people.attr('pos') }, { pos: [part3.people.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part3.people.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			const anim2 = part3.cola.animate([{ pos: part3.cola.attr('pos') }, { pos: [part3.cola.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part3.cola.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part3.name.animate([{ pos: part3.name.attr('pos') }, { pos: [part3.name.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part3.name.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
		});

		return function frame2(_x2) {
			return _ref4.apply(this, arguments);
		};
	})()
};
/* harmony default export */ __webpack_exports__["a"] = (part3);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



const tvUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part4_tv.png';
const treasureUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part4_treasure.png';
const wyfUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/part4_wyf.png';

const windowW = window.innerWidth;
const windowH = window.innerHeight;
const [baseW, baseH] = [windowW / 2, 350];

const part4 = {
	fglayer: '',
	tv: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(tvUrl, [224, 196], [-1000, -1000], [0.5, 0.5]),
	treasure: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(treasureUrl, [133, 70]),
	wyf: Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(wyfUrl, [340, 340], [-1000, -1000], [0.5, 0.5]),
	get: layer => {
		part4.fglayer = layer;
	},
	render: fglayer => {
		fglayer.appendChild(part4.tv);
		fglayer.appendChild(part4.wyf);
		fglayer.appendChild(part4.treasure);
	},
	action: (() => {
		var _ref = _asyncToGenerator(function* () {
			yield part4.frame1();
			yield part4.sleep(2000);
			yield part4.frame2();
		});

		return function action() {
			return _ref.apply(this, arguments);
		};
	})(),
	sleep: (() => {
		var _ref2 = _asyncToGenerator(function* (time) {
			return new Promise(function (resolve) {
				part4.fglayer.timeline.setTimeout(resolve, time);
			});
		});

		return function sleep(_x) {
			return _ref2.apply(this, arguments);
		};
	})(),
	frame1: (() => {
		var _ref3 = _asyncToGenerator(function* (delay = 1000) {
			const anim1 = part4.tv.animate([{ pos: [baseW * 2.0 / 3, baseH], opacity: 0 }, { pos: [baseW * 2.0 / 3, baseH], opacity: 1 }], {
				duration: 500,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim2 = part4.wyf.animate([{ pos: [baseW * 6.0 / 4, baseH], opacity: 0, scale: 5, rotate: 0 }, { pos: [baseW * 6.0 / 4, baseH], opacity: 1, scale: 1, rotate: 720 }], {
				duration: 500,
				delay: delay + 1000 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part4.treasure.animate([{ pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(0), baseH - 140], opacity: 0, scale: 3 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(0), baseH - 140], opacity: 1, scale: 3 }, { pos: [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(0), baseH - 110], opacity: 1, scale: 1 }], {
				duration: 1500,
				delay: delay + 1500 || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
		});

		return function frame1() {
			return _ref3.apply(this, arguments);
		};
	})(),
	frame2: (() => {
		var _ref4 = _asyncToGenerator(function* (delay) {
			const anim1 = part4.tv.animate([{ pos: part4.tv.attr('pos') }, { pos: [part4.tv.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part4.tv.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});

			const anim2 = part4.wyf.animate([{ pos: part4.wyf.attr('pos') }, { pos: [part4.wyf.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part4.wyf.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			const anim3 = part4.treasure.animate([{ pos: part4.treasure.attr('pos') }, { pos: [part4.treasure.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(part4.treasure.attr('pos')[1], -1000)] }], {
				duration: 1000,
				delay: delay || 0,
				// iterations: Infinity,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
		});

		return function frame2(_x2) {
			return _ref4.apply(this, arguments);
		};
	})()
};
/* harmony default export */ __webpack_exports__["a"] = (part4);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


const [baseW, baseH] = [185, 350];

const arrowUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/arrow.png';
const bgUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/bg4.png';
const ballBorderUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_border.png';
const pauseUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/pause.png';
const titleUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/title.png.png';
const text1Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/text3.png';
const text2Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/text4.png';
const logoUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/logo.png';

const text3Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/text5.png';
const text4Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/text6.png';
const text5Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/text7.png';
const tipUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/tip.png';

const windowW = window.innerWidth;
const windowH = window.innerHeight;
const centerPoint = [windowW / 2, windowH / 2 - 50];
class GSprite {
	constructor() {
		this.bg = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(bgUrl, [450, 4500], [0, 0]);
		this.ballBorder = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(ballBorderUrl, [222, 210], [windowW / 2, windowH / 2 - 50], [0.5, 0.5]);
		this.arrow = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(arrowUrl, [29, 31], [windowW / 2 + 5, windowH / 2 - 55], [0.5, 0.5]);
		this.countDown = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* createLabel */])('60', [-1000, -1000]);
		this.speedUp2 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* createLabel */])('2x', [-1000, -1000], [0.5, 0.5], 'bold 30px Arial');
		this.speedUp4 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* createLabel */])('4x', [-1000, -1000], [0.5, 0.5], 'bold 30px Arial');
		this.pause = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(pauseUrl, [26, 26], [-1000, -1000], [0.5, 0.5]);
		this.speedNormal = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* createLabel */])('1x', [-1000, -1000], [0.5, 0.5], 'bold 30px Arial');
		this.title = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(titleUrl, [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(400), Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(100)], [windowW / 2, Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(100)], [0.5, 0.5]);
		this.text1 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(text1Url, [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(392), Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(36)], [windowW * 1 / 10, windowH * 4.0 / 5 - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(50)], [0, 0]);
		this.text2 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(text2Url, [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(392), Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(36)], [windowW * 3 / 10, windowH * 4.0 / 5], [0, 0]);
		this.text3 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(text3Url, [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(392), Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(36)], [-1000, -1000], [0, 0]);
		this.text4 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(text4Url, [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(392), Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(36)], [-1000, -1000], [0, 0]);
		this.text5 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(text5Url, [Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(392), Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(36)], [-1000, -1000], [0, 0]);
		this.logo = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(logoUrl, [247, 95], [-1000, -1000], [0.5, 0.5]);
		this.tip = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(tipUrl, [64, 64], [-1000, -1000], [0.5, 0.5]);
	}

	render(fglayer) {
		fglayer.appendChild(this.bg);
		fglayer.appendChild(this.ballBorder);
		fglayer.appendChild(this.tip);
		fglayer.appendChild(this.arrow);
		fglayer.appendChild(this.countDown);
		fglayer.appendChild(this.speedUp2);
		fglayer.appendChild(this.speedUp4);
		fglayer.appendChild(this.pause);
		fglayer.appendChild(this.speedNormal);
		fglayer.appendChild(this.title);
		fglayer.appendChild(this.text1);
		fglayer.appendChild(this.text2);
		fglayer.appendChild(this.text3);
		fglayer.appendChild(this.text4);
		fglayer.appendChild(this.text5);
		fglayer.appendChild(this.logo);
		const anim10 = this.tip.animate([{ pos: [windowW * 2 / 3 + 30, windowH / 3 - 30], opacity: 0 }, { pos: [windowW * 2 / 3 + 30, windowH / 3 - 30], opacity: 1 }, { pos: [windowW * 2 / 3 + 30, windowH / 3 - 30], opacity: 1 }, { pos: [windowW * 2 / 3 + 30, windowH / 3 - 30], opacity: 1 }, { pos: [windowW * 2 / 3 + 30, windowH / 3 - 30], opacity: 0 }], {
			duration: 1500,
			delay: 500,
			iterations: Infinity,
			easing: 'ease-in-out'
		});
	}

	frame1() {
		var _this = this;

		return _asyncToGenerator(function* () {
			const anim1 = _this.bg.animate([{ pos: _this.bg.attr('pos') }, { pos: [_this.bg.attr('pos')[0], Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* sumY */])(_this.bg.attr('pos')[1], -4500)] }], {
				duration: 60000,
				fill: 'forwards'
			});
			const anim2 = _this.arrow.animate([{ pos: _this.arrow.attr('pos'), rotate: 0 }, { pos: [_this.arrow.attr('pos')[0], windowH - 80], rotate: 810 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim3 = _this.ballBorder.animate([{ pos: _this.ballBorder.attr('pos') }, { pos: [_this.ballBorder.attr('pos')[0], 0] }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim4 = _this.title.attr({
				opacity: 0
			});
			const anim5 = _this.text1.attr({
				opacity: 0
			});
			const anim6 = _this.text2.attr({
				opacity: 0
			});
			yield anim2.finished;
			yield anim3.finished;
		})();
	}

	frame2(fglayer) {
		var _this2 = this;

		return _asyncToGenerator(function* () {
			// fglayer.timeline.playbackRate = 0.2
			const anim1 = _this2.text1.animate([{ pos: [windowW * 1.0 / 4, windowH * 1.0 / 3], opacity: 0 }, { pos: [windowW * 1.0 / 4, windowH * 1.0 / 3 - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(50)], opacity: 1 }], {
				duration: 1700,
				fill: 'forwards'
			});
			yield anim1.finished;
			const anim2 = _this2.text1.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 500,
				fill: 'forwards'
			});
			yield anim2.finished;
			const anim3 = _this2.text3.animate([{ pos: [windowW * 1.0 / 4, windowH * 1.0 / 3], opacity: 0 }, { pos: [windowW * 1.0 / 4, windowH * 1.0 / 3 - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(50)], opacity: 1 }], {
				duration: 1700,
				fill: 'forwards'
			});
			yield anim3.finished;
			const anim4 = _this2.text3.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 500,
				fill: 'forwards'
			});
			yield anim4.finished;
			const anim5 = _this2.text4.animate([{ pos: [windowW * 1.0 / 4, windowH * 1.0 / 3], opacity: 0 }, { pos: [windowW * 1.0 / 4, windowH * 1.0 / 3 - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(50)], opacity: 1 }], {
				duration: 1700,
				fill: 'forwards'
			});
			yield anim5.finished;
			const anim6 = _this2.text4.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 500,
				fill: 'forwards'
			});
			yield anim6.finished;
			const anim7 = _this2.text5.animate([{ pos: [windowW * 1.0 / 4, windowH * 1.0 / 3], opacity: 0 }, { pos: [windowW * 1.0 / 4, windowH * 1.0 / 3 - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(50)], opacity: 1 }], {
				duration: 1700,
				fill: 'forwards'
			});
			yield anim7.finished;
			const anim8 = _this2.text5.animate([{ opacity: 1 }, { opacity: 0 }], {
				duration: 500,
				fill: 'forwards'
			});
			yield anim8.finished;
			const anim9 = _this2.logo.animate([{ pos: [windowW * 1.0 / 2, windowH * 1.0 / 3 - Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* rem */])(50)], scale: 5, opacity: 0 },
			// {pos: [windowW * 1.0 / 2, windowH * 1.0 / 3 - rem(50)], scale: 5, opacity: 1},
			{ pos: [windowW * 1.0 / 2, windowH * 1.0 / 3], scale: 1, opacity: 1 }], {
				duration: 1700,
				fill: 'forwards'
			});
			yield anim9.finished;
			const anim10 = _this2.logo.animate([{ pos: _this2.logo.attr('pos'), rotate: 0 }, { pos: [_this2.logo.attr('pos')[0], windowH - 100], rotate: 1800 }], {
				duration: 1700,
				delay: 1000,
				fill: 'forwards'
			});
		})();
	}

	countDownAnim(fglayer) {
		var _this3 = this;

		return _asyncToGenerator(function* () {
			let i = 60;
			fglayer.timeline.playbackRate = 1;
			_this3.speedUp2.on('click', function (evt) {
				fglayer.timeline.playbackRate = 2;
			});
			_this3.speedUp4.on('click', function (evt) {
				fglayer.timeline.playbackRate = 4;
			});
			_this3.speedNormal.on('click', function (evt) {
				fglayer.timeline.playbackRate = 1;
			});
			_this3.pause.on('click', function (evt) {
				fglayer.timeline.playbackRate = 0;
			});
			const anim1 = _this3.countDown.animate([{ pos: [windowW / 2, 0], opacity: 0 }, { pos: [windowW / 2, 30], opacity: 1 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim2 = _this3.pause.animate([{ pos: [40, 10], opacity: 0 }, { pos: [40, 30], opacity: 1 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim3 = _this3.speedNormal.animate([{ pos: [80, 10], opacity: 0 }, { pos: [80, 30], opacity: 1 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim4 = _this3.speedUp2.animate([{ pos: [40, 40], opacity: 0 }, { pos: [40, 70], opacity: 1 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim5 = _this3.speedUp4.animate([{ pos: [80, 40], opacity: 0 }, { pos: [80, 70], opacity: 1 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const time = fglayer.timeline.setInterval(function () {
				if (i === 15) {
					_this3.frame2(fglayer);
				}
				_this3.countDown.attr({ text: --i });
				while (i === 0) {
					fglayer.timeline.clearInterval(time);
					fglayer.timeline.playbackRate = 1;
					_this3.lastFrame();
					return;
				}
			}, 1000);
		})();
	}

	lastFrame() {
		var _this4 = this;

		return _asyncToGenerator(function* () {
			const anim1 = _this4.pause.animate([{ pos: _this4.countDown.attr('pos'), opacity: 1 }, { pos: [_this4.countDown.attr('pos')[0], _this4.countDown.attr('pos')[1] - 200], opacity: 0 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim2 = _this4.speedNormal.animate([{ pos: _this4.countDown.attr('pos'), opacity: 1 }, { pos: [_this4.countDown.attr('pos')[0], _this4.countDown.attr('pos')[1] - 200], opacity: 0 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim3 = _this4.speedUp2.animate([{ pos: _this4.countDown.attr('pos'), opacity: 1 }, { pos: [_this4.countDown.attr('pos')[0], _this4.countDown.attr('pos')[1] - 200], opacity: 0 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim4 = _this4.speedUp4.animate([{ pos: _this4.countDown.attr('pos'), opacity: 1 }, { pos: [_this4.countDown.attr('pos')[0], _this4.countDown.attr('pos')[1] - 200], opacity: 0 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim5 = _this4.countDown.animate([{ pos: _this4.countDown.attr('pos'), opacity: 1 }, { pos: [_this4.countDown.attr('pos')[0], -100], opacity: 0 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim6 = _this4.ballBorder.animate([{ pos: _this4.ballBorder.attr('pos'), scale: 1 }, { pos: [windowW * 2.0 / 3, windowH / 3], scale: 1.7 }], {
				duration: 1000,
				fill: 'forwards'
			});
			const anim7 = _this4.arrow.animate([{ pos: _this4.arrow.attr('pos'), rotate: 90 }, { pos: [windowW * 2.0 / 3 + 10, windowH / 3 - 10], scale: 2.2, rotate: 720 }], {
				duration: 1000,
				fill: 'forwards'
			});
			yield anim1.finished;
			yield anim2.finished;
			yield anim3.finished;
			yield anim4.finished;
			yield anim5.finished;
			yield anim6.finished;
			yield anim7.finished;
		})();
	}
}
/* harmony default export */ __webpack_exports__["a"] = (new GSprite());

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


const [baseW, baseH] = [185, 350];

// const logoUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/logo.png'
const ballBgUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_bg.jpg';
// const ballChip1Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_chip1.png'
const ballChip2Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_chip2.png';
// const ballChip3Url = 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_chip3.png'
// const ballBorderUrl = 'http://7xt3kw.com1.z0.glb.clouddn.com/ball_border.png'

const windowW = window.innerWidth;
const windowH = window.innerHeight;

class LastPage {
	constructor() {
		this.ballBg = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(ballBgUrl, [490, 336], [windowW * 2.0 / 3, windowH / 3], [0.5, 0.5]);
		// this.logo = createSprite(logoUrl, [247, 95], [windowW / 2, windowH - 100], [0.5, 0.5])
		// this.ballChip1 = createSprite(ballChip1Url, [40, 40], [windowW * 2.0 / 3, windowH / 3], [0.5, 0.5])
		this.ballChip2 = Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* createSprite */])(ballChip2Url, [342, 330], [windowW * 2.0 / 3, windowH / 3 - 15], [0.5, 0.5]);
		// this.ballChip3 = createSprite(ballChip3Url, [280, 148], [windowW * 2.0 / 3, windowH / 3], [0.5, 0.5])
	}

	render(bglayer) {
		bglayer.appendChild(this.ballBg);
		// bglayer.appendChild(this.logo)
		// bglayer.appendChild(this.ballChip1)
		bglayer.appendChild(this.ballChip2);
		// bglayer.appendChild(this.ballChip3)
		this.frame1();
	}

	frame1() {
		var _this = this;

		return _asyncToGenerator(function* () {
			_this.ballChip2.animate([{ rotate: 0 }, { rotate: 360 }], {
				duration: 10000,
				iterations: Infinity
			});
		})();
	}
}
/* harmony default export */ __webpack_exports__["a"] = (new LastPage());

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU0NWI2YjgwYTg1NzY5ZGQwYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/MTliNiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8uMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydDEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnQyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0My5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydDQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dTcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhc3RwYWdlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNwcml0ZSIsInRleHR1cmUiLCJzaXplIiwicG9zIiwiYW5jaG9yIiwic3ByaXRlIiwic3ByaXRlanMiLCJTcHJpdGUiLCJhdHRyIiwiY3JlYXRlTGFiZWwiLCJ0ZXh0IiwiZm9udCIsImNvbG9yIiwibGFiZWwiLCJMYWJlbCIsInJlbSIsIm51bWJlciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvZmZzZXRWYWx1ZSIsImFyciIsInJlZHVjZSIsIngiLCJ5Iiwic3VtWSIsIm51bSIsImFycm93IiwiYmdVcmwiLCJiYWxsQm9yZGVyIiwid2luZG93VyIsIndpbmRvd0giLCJpbm5lckhlaWdodCIsInBhcGVyIiwiUGFwZXIyRCIsInNldFJlc29sdXRpb24iLCJiZ2xheWVyIiwibGF5ZXIiLCJmZ2xheWVyIiwiZXZhbHVhdGVGUFMiLCJyZW5kZXJNb2RlIiwibG9hZGluZ2xheWVyIiwiYWRkTG9hZGluZyIsImJnIiwiYmdjb2xvciIsInpJbmRleCIsImFkZExvYWRpbmdUZXh0IiwibG9hZGluZyIsImxvYWRUZXh0IiwiYXBwZW5kQ2hpbGQiLCJwcmVsb2FkIiwidGhlbiIsImFyZ3VtZW50IiwiZ1Nwcml0ZSIsInJlbmRlciIsInBhcnQxIiwiZ2V0IiwicGFydDIiLCJwYXJ0MyIsInBhcnQ0IiwicmVtb3ZlQ2hpbGQiLCJvbiIsImV2dCIsIm9mZiIsInRpcCIsImxhc3RQYWdlIiwiY291bnREb3duQW5pbSIsImZyYW1lMSIsImFjdGlvbiIsInVybHMiLCJiYXNlVyIsImJhc2VIIiwicGFydDFXb3JkMiIsImhvdXNlVXJsIiwidHJ1bXBVcmwiLCJ3b3JkMVVybCIsIndvcmQyVXJsIiwid29yZDNVcmwiLCJ3b3JkNFVybCIsInBhcnQxVXJsIiwidHJ1bXAiLCJob3VzZSIsIndvcmQxIiwid29yZDIiLCJ3b3JkMyIsIndvcmQ0Iiwic2xlZXAiLCJmcmFtZTIiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aW1lbGluZSIsInNldFRpbWVvdXQiLCJkZWxheSIsImFuaW0xIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImZpbGwiLCJhbmltMiIsImFuaW0zIiwiYW5pbTQiLCJhbmltNSIsImFuaW02IiwiZmluaXNoZWQiLCJldmVudFVybCIsIm5hbWVVcmwiLCJwYXNzcG9ydFVybCIsIndqVXJsIiwiZXZuIiwibmFtZSIsInBhc3Nwb3J0Iiwid2oiLCJzY2FsZSIsImNvbGFVcmwiLCJwZW9wbGVVcmwiLCJjb2xhIiwicGVvcGxlIiwidHZVcmwiLCJ0cmVhc3VyZVVybCIsInd5ZlVybCIsInR2IiwidHJlYXN1cmUiLCJ3eWYiLCJyb3RhdGUiLCJhcnJvd1VybCIsImJhbGxCb3JkZXJVcmwiLCJwYXVzZVVybCIsInRpdGxlVXJsIiwidGV4dDFVcmwiLCJ0ZXh0MlVybCIsImxvZ29VcmwiLCJ0ZXh0M1VybCIsInRleHQ0VXJsIiwidGV4dDVVcmwiLCJ0aXBVcmwiLCJjZW50ZXJQb2ludCIsIkdTcHJpdGUiLCJjb25zdHJ1Y3RvciIsImNvdW50RG93biIsInNwZWVkVXAyIiwic3BlZWRVcDQiLCJwYXVzZSIsInNwZWVkTm9ybWFsIiwidGl0bGUiLCJ0ZXh0MSIsInRleHQyIiwidGV4dDMiLCJ0ZXh0NCIsInRleHQ1IiwibG9nbyIsImFuaW0xMCIsIml0ZXJhdGlvbnMiLCJJbmZpbml0eSIsImVhc2luZyIsImFuaW03IiwiYW5pbTgiLCJhbmltOSIsImkiLCJwbGF5YmFja1JhdGUiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsYXN0RnJhbWUiLCJiYWxsQmdVcmwiLCJiYWxsQ2hpcDJVcmwiLCJMYXN0UGFnZSIsImJhbGxCZyIsImJhbGxDaGlwMiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RPLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCQyxJQUEvQixFQUFxQ0MsTUFBTSxDQUFDLENBQUMsSUFBRixFQUFRLENBQUMsSUFBVCxDQUEzQyxFQUEyREMsU0FBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXBFLEVBQTRFO0FBQ2xGLE9BQU1DLFNBQVMs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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QWQ7QUFTQSxTQUFNSixNQUFNVSxRQUFaO0FBQ0EsU0FBTUwsTUFBTUssUUFBWjtBQUNBLFNBQU1KLE1BQU1JLFFBQVo7QUFDQSxTQUFNSCxNQUFNRyxRQUFaO0FBQ0EsU0FBTUYsTUFBTUUsUUFBWjtBQUNBLFNBQU1ELE1BQU1DLFFBQVo7QUFDQSxHQTlERDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZTYSxDQUFkO0FBeVNBLHlEQUFlakQsS0FBZixF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QUFDZixTQUFLb0csU0FBTCxDQUFleEUsT0FBZixDQUF1QixDQUNuQixFQUFDNkIsUUFBUSxDQUFULEVBRG1CLEVBRW5CLEVBQUNBLFFBQVEsR0FBVCxFQUZtQixDQUF2QixFQUdLO0FBQ0QzQixjQUFVLEtBRFQ7QUFFRHVELGdCQUFZQztBQUZYLElBSEw7QUFEZTtBQVFmO0FBMUJhO0FBNEJmLHlEQUFlLElBQUlZLFFBQUosRUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU1NDViNmI4MGE4NTc2OWRkMGM1IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwcml0ZSh0ZXh0dXJlLCBzaXplLCBwb3MgPSBbLTEwMDAsIC0xMDAwXSwgYW5jaG9yID0gWzAsIDBdKSB7XG5cdGNvbnN0IHNwcml0ZSA9IG5ldyBzcHJpdGVqcy5TcHJpdGUodGV4dHVyZSlcblx0c3ByaXRlLmF0dHIoe1xuXHQgIGFuY2hvcixcblx0ICBwb3MsXG5cdCAgc2l6ZVxuXHR9KVxuXHRyZXR1cm4gc3ByaXRlXHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhYmVsICh0ZXh0LCBwb3MgPSBbMCwgMF0sIGFuY2hvciA9IFswLjUsIDAuNV0sIGZvbnQgPSAnYm9sZCA2OHB4IEFyaWFsJywgY29sb3IgPSAnI2ZmZicpIHtcblx0Y29uc3QgbGFiZWwgPSBuZXcgc3ByaXRlanMuTGFiZWwodGV4dClcblx0bGFiZWwuYXR0cih7XG5cdCAgYW5jaG9yLFxuXHQgIHBvcyxcblx0ICBmb250LFxuXHQgIGNvbG9yXG5cdH0pXG5cdHJldHVybiBsYWJlbFx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW0gKG51bWJlcikge1xuXHRyZXR1cm4gKG51bWJlciAqICh3aW5kb3cuaW5uZXJXaWR0aCAqIDEuMCAvIDM3NSkpXG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZW1ZIChudW1iZXIpIHtcbi8vIFx0cmV0dXJuIChudW1iZXIgKiAod2luZG93LmlubmVySGVpZ2h0ICogMS4wIC8gNjY3KSlcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldFZhbHVlICguLi5hcnIpe1xuXHRyZXR1cm4gYXJyLnJlZHVjZSgoeCwgeSkgPT4ge1xuXHRcdHJldHVybiB4ICsgeVxuXHR9LCAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtWSAoeSwgbnVtKSB7XG5cdHJldHVybiB5ICsgbnVtXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsLmpzIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB1cmxzIGZyb20gJy4vdXJscy5qcydcbmltcG9ydCBwYXJ0MSBmcm9tICcuL3BhcnQxLmpzJ1xuaW1wb3J0IHBhcnQyIGZyb20gJy4vcGFydDIuanMnXG5pbXBvcnQgcGFydDMgZnJvbSAnLi9wYXJ0My5qcydcbmltcG9ydCBwYXJ0NCBmcm9tICcuL3BhcnQ0LmpzJ1xuXG5pbXBvcnQgZ1Nwcml0ZSBmcm9tICcuL2dTcHJpdGUuanMnXG5pbXBvcnQgbGFzdFBhZ2UgZnJvbSAnLi9sYXN0cGFnZS5qcydcbi8vIGNvbnN0IHdlbmFuID0gJ+S4gOWIhumSn+eci+eyvuW9qe+8jOeyvuW9qeS4jemXtOaWrSdcbmNvbnN0IGFycm93ID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vYXJyb3cucG5nJ1xuY29uc3QgYmdVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9iZzQucG5nJ1xuY29uc3QgYmFsbEJvcmRlciA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL2JhbGxfYm9yZGVyLnBuZydcblxuY29uc3Qgd2luZG93VyA9IHdpbmRvdy5pbm5lcldpZHRoXG5jb25zdCB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0XG5cbmNvbnN0IHBhcGVyID0gc3ByaXRlanMuUGFwZXIyRCgnI2NvbnRhaW5lcicpXG5wYXBlci5zZXRSZXNvbHV0aW9uKHdpbmRvd1csIHdpbmRvd0gpXG5jb25zdCBiZ2xheWVyID0gcGFwZXIubGF5ZXIoJ2JnJykgLFxuZmdsYXllciA9IHBhcGVyLmxheWVyKCdmZycsIHtcbiAgICAgIGV2YWx1YXRlRlBTOiB0cnVlLFxuICAgICAgcmVuZGVyTW9kZTogJ3JlcGFpbnRBbGwnLFxufSksbG9hZGluZ2xheWVyID0gcGFwZXIubGF5ZXIoJ2xvYWRpbmcnKVxuXG5jb25zdCBhZGRMb2FkaW5nID0gKCkgPT4ge1xuXHRjb25zdCBiZyA9IG5ldyBzcHJpdGVqcy5TcHJpdGUoKVxuXHQvLyBjb25zdCB4MSA9IHggLSAzNzVcblx0YmcuYXR0cih7XG5cdCAgYW5jaG9yOiBbMCwgMF0sXG5cdCAgcG9zOiBbMCwgMF0sXG5cdCAgc2l6ZTogW3dpbmRvd1csIHdpbmRvd0hdLFxuXHQgIGJnY29sb3I6ICcjMEEwQjBDJyxcblx0ICB6SW5kZXg6MTAwMFxuXHR9KVx0XHRcblx0cmV0dXJuIGJnXG59XG5jb25zdCBhZGRMb2FkaW5nVGV4dCA9ICgpID0+IHtcblx0Y29uc3QgdGV4dCA9IG5ldyBzcHJpdGVqcy5MYWJlbCgn5ou85ZG95Yqg6L295LitLi4uJylcblx0Ly8gY29uc3QgeDEgPSB4IC0gMzc1XG5cdHRleHQuYXR0cih7XG5cdCAgYW5jaG9yOiBbMC41LCAwLjVdLFxuXHQgIHBvczogW3dpbmRvd1cgLyAyLCB3aW5kb3dIICogMiAvIDVdLFxuXHQgIGZvbnQ6ICczMHB4IGFyaWFsJyxcblx0ICBjb2xvcjogJyNmZmYnLFxuXHQgIHpJbmRleDoxMDAxXG5cdH0pXHRcdFxuXHRyZXR1cm4gdGV4dFxufVxuY29uc3QgbG9hZGluZyA9IGFkZExvYWRpbmcoKVxuY29uc3QgbG9hZFRleHQgPSBhZGRMb2FkaW5nVGV4dCgpXG4vLyBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nXCIpO1xubG9hZGluZ2xheWVyLmFwcGVuZENoaWxkKGxvYWRpbmcpXG5sb2FkaW5nbGF5ZXIuYXBwZW5kQ2hpbGQobG9hZFRleHQpXG5wYXBlci5wcmVsb2FkKHVybHMpXG5cdC50aGVuKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXG5cdGdTcHJpdGUucmVuZGVyKGZnbGF5ZXIpXG5cdFxuXHRwYXJ0MS5nZXQoZmdsYXllcilcblx0cGFydDIuZ2V0KGZnbGF5ZXIpXG5cdHBhcnQzLmdldChmZ2xheWVyKVxuXHRwYXJ0NC5nZXQoZmdsYXllcilcblx0bG9hZGluZ2xheWVyLnJlbW92ZUNoaWxkKGxvYWRpbmcpXG5cdGxvYWRpbmdsYXllci5yZW1vdmVDaGlsZChsb2FkVGV4dClcblx0Z1Nwcml0ZS5iYWxsQm9yZGVyLm9uKCdjbGljaycsYXN5bmMgKGV2dCkgPT4ge1xuXHRcdGdTcHJpdGUuYmFsbEJvcmRlci5vZmYoJ2NsaWNrJylcblx0XHRmZ2xheWVyLnJlbW92ZUNoaWxkKGdTcHJpdGUudGlwKVxuXHRcdGxhc3RQYWdlLnJlbmRlcihiZ2xheWVyKVxuXHRcdGdTcHJpdGUuY291bnREb3duQW5pbShmZ2xheWVyKVxuXHRcdGF3YWl0IGdTcHJpdGUuZnJhbWUxKClcblx0ICAgIHBhcnQxLnJlbmRlcihmZ2xheWVyKVxuXHRcdGF3YWl0IHBhcnQxLmFjdGlvbigpXG5cdFx0cGFydDIucmVuZGVyKGZnbGF5ZXIpXG5cdFx0YXdhaXQgcGFydDIuYWN0aW9uKClcblx0XHRwYXJ0My5yZW5kZXIoZmdsYXllcilcblx0XHRhd2FpdCBwYXJ0My5hY3Rpb24oKVxuXHRcdHBhcnQ0LnJlbmRlcihmZ2xheWVyKVxuXHRcdGF3YWl0IHBhcnQ0LmFjdGlvbigpXG5cdFx0cGFydDMucmVuZGVyKGZnbGF5ZXIpXG5cdFx0YXdhaXQgcGFydDMuYWN0aW9uKClcblx0XHRwYXJ0NC5yZW5kZXIoZmdsYXllcilcblx0XHRhd2FpdCBwYXJ0NC5hY3Rpb24oKVx0XHRcdFx0XG5cdFx0XG5cdCAgfSlcblx0Ly8gcGFydDEucmVuZGVyKGZnbGF5ZXIpXG5cdC8vIHBhcnQxLmFjdGlvbigpXG5cdC8vIGZnbGF5ZXIuYXBwZW5kQ2hpbGQodGV4dDEpXG5cdC8vIGxldCBpID0gNjBcblx0Ly8gZmdsYXllci50aW1lbGluZS5zZXRJbnRlcnZhbCgoKT0+e1xuXHQvLyBcdHRleHQxLmF0dHIoe3RleHQ6aS0tfSlcblx0Ly8gfSwxMDAwKVxuXHQvLyBmZ2xheWVyLnRpbWVsaW5lLnBsYXliYWNrUmF0ZSA9IDE7XG5cdC8vIGZnbGF5ZXIuYXBwZW5kQ2hpbGQoYWRkY2hpcDEoY2hpcDEpKVxuXHQvLyBmZ2xheWVyLmFwcGVuZENoaWxkKGFkZGNoaXAyKGNoaXAyLCAzMDApKVxuXHQvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdC8vIFx0ZmdsYXllci5hcHBlbmRDaGlsZChhZGRjaGlwMShjaGlwMSkpXG5cdC8vIFx0ZmdsYXllci5hcHBlbmRDaGlsZChhZGRjaGlwMihjaGlwMiwgMzAwKSlcblx0Ly8gfSwgMTAwMClcblx0Ly8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHQvLyBcdGZnbGF5ZXIudGltZWxpbmUucGxheWJhY2tSYXRlID0gMFxuXHQvLyB9LCAxMDAwMClcblx0Ly8gZmdsYXllci5hcHBlbmRDaGlsZChhZGRCZygwLDAsMCkpXG5cdC8vIGZnbGF5ZXIuYXBwZW5kQ2hpbGQoYWRkQmcoNzkwLDE4MCwwKSlcblx0Ly8gZmdsYXllci5hcHBlbmRDaGlsZChhZGRCZyg4MTAsMTgwLDEwMDAwKSlcblx0IC8vIGNvbnN0IGJpcmRDb3VudExhYmVsID0gbmV3IHNwcml0ZWpzLkxhYmVsKClcblx0IC8vICBiaXJkQ291bnRMYWJlbC5hdHRyKHtcblx0IC8vICAgIHBvczogWzMwLCA2MF0sXG5cdCAvLyAgICBmb250OiAnMzJweCBBcmlhbCcsXG5cdCAvLyAgICBjb2xvcjogJ3doaXRlJyxcblx0IC8vICB9KVxuXG5cdCAvLyAgYmdsYXllci5hcHBlbmRDaGlsZChiaXJkQ291bnRMYWJlbCkgXG5cblx0IC8vICBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdCAvLyAgICBiaXJkQ291bnRMYWJlbC50ZXh0ID0gYGZwczogJHtmZ2xheWVyLmZwc31gIFxuXHQgLy8gICAgICArIGAgfCByYXRlOiAke2ZnbGF5ZXIudGltZWxpbmUucGxheWJhY2tSYXRlLnRvRml4ZWQoMil9YFxuXHQgLy8gIH0sIDEwMClcblxuXHR9KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvLjAuMjguN0Bjc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzLy4wLjE5LjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy8uMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy8uMC4yOC43QGNzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzLy4wLjI4LjdAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7Zm9udC1mYW1pbHk6SGVsdmV0aWNhOyBiYWNrZ3JvdW5kOiAjMEEwQjBDO21hcmdpbjowO31cXG4jY29udGFpbmVye2hlaWdodDogMTAwJTt3aWR0aDogMTAwJTt9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvLjAuMjguN0Bjc3MtbG9hZGVyIS4vc3JjL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy8uMC4yOC43QGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24pIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy8uMC4xOS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvLjAuMTkuMEBzdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5jb25zdCB1cmxzID0gWydodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL2Fycm93LnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9iZzQucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL2JhbGxfYm9yZGVyLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXVzZS5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vdGl0bGUucG5nP2ltYWdlc2xpbS5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vdGV4dDMucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3RleHQ0LnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9sb2dvLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS90ZXh0NS5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vdGV4dDYucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3RleHQ3LnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9iYWxsX2JvcmRlci5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vYmFsbF9iZy5qcGcnLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9iYWxsX2NoaXAyLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0MV93b3JkMi5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDFfd2hpdGVfaG91c2UucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQxX3RocnVtcC5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDFfd29yZDEucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQxX3dvcmQyLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0MV93b3JkMy5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDFfd29yZDQucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQxLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0M19jb2xhLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0M19uYW1lLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0M19wZW9wbGUucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQyX2V2ZW50LnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0Ml9uYW1lLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0Ml9wYXNzcG9ydC5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDJfd2oucG5nP2ltYWdlc2xpbScsICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQ0X3R2LnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0NF90cmVhc3VyZS5wbmc/aW1hZ2VzbGltJywgJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDRfd3lmLnBuZz9pbWFnZXNsaW0nLCAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS90aXAucG5nP2ltYWdlc2xpbSddXG5leHBvcnQgZGVmYXVsdCB1cmxzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VybHMuanMiLCJpbXBvcnQgeyByZW0sIG9mZnNldFZhbHVlLCBzdW1ZLCBjcmVhdGVTcHJpdGUgfSBmcm9tICcuL3V0aWwuanMnXG5jb25zdCBbYmFzZVcsIGJhc2VIXSA9IFsxODUsMzUwXVxuY29uc3QgcGFydDFXb3JkMiA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQxX3dvcmQyLnBuZydcbmNvbnN0IGhvdXNlVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDFfd2hpdGVfaG91c2UucG5nJ1xuY29uc3QgdHJ1bXBVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0MV90aHJ1bXAucG5nJ1xuY29uc3Qgd29yZDFVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0MV93b3JkMS5wbmcnXG5jb25zdCB3b3JkMlVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQxX3dvcmQyLnBuZydcbmNvbnN0IHdvcmQzVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDFfd29yZDMucG5nJ1xuY29uc3Qgd29yZDRVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0MV93b3JkNC5wbmcnXG5jb25zdCBwYXJ0MVVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQxLnBuZydcbmNvbnN0IHdpbmRvd1cgPSB3aW5kb3cuaW5uZXJXaWR0aFxuY29uc3Qgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG5jb25zdCBwYXJ0MSA9IHtcblx0ZmdsYXllcjogJycsXG5cdHRydW1wOiBjcmVhdGVTcHJpdGUodHJ1bXBVcmwsIFsxNDUsIDE2OF0pLFxuXHRob3VzZTogY3JlYXRlU3ByaXRlKGhvdXNlVXJsLCBbMTU3LCAxNDJdKSxcblx0d29yZDE6IGNyZWF0ZVNwcml0ZSh3b3JkMVVybCwgWzExMywgNTddKSxcblx0d29yZDI6IGNyZWF0ZVNwcml0ZSh3b3JkMlVybCwgWzExOCwgOTldKSxcblx0d29yZDM6IGNyZWF0ZVNwcml0ZSh3b3JkM1VybCwgWzEwNiwgNTRdKSxcblx0d29yZDQ6IGNyZWF0ZVNwcml0ZSh3b3JkNFVybCwgWzE4NSwgMzNdKSxcblx0Z2V0OiAobGF5ZXIpID0+e1xuXHRcdHBhcnQxLmZnbGF5ZXIgPSBsYXllclxuXHR9LFxuXHRyZW5kZXI6IChmZ2xheWVyKSA9PiB7XG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZChwYXJ0MS50cnVtcClcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHBhcnQxLmhvdXNlKVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQocGFydDEud29yZDQpXG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZChwYXJ0MS53b3JkMylcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHBhcnQxLndvcmQyKVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQocGFydDEud29yZDEpXG5cdH0sXG5cdGFjdGlvbjogYXN5bmMgZnVuY3Rpb24oKSB7XG5cdFx0YXdhaXQgcGFydDEuZnJhbWUxKClcblx0XHRhd2FpdCBwYXJ0MS5zbGVlcCgyMDAwKVxuXHRcdGF3YWl0IHBhcnQxLmZyYW1lMigpXG5cdH0sXG5cdHNsZWVwOiBhc3luYyBmdW5jdGlvbih0aW1lKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0ICAgIHBhcnQxLmZnbGF5ZXIudGltZWxpbmUuc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0XHQgIH0pO1xuXHR9LFxuXHRmcmFtZTE6IGFzeW5jIGZ1bmN0aW9uKGRlbGF5ID0gMTAwMCkge1xuXHRcdGNvbnN0IGFuaW0xID0gcGFydDEudHJ1bXAuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFtyZW0oYmFzZVcgLSA5MCksIGJhc2VIIC0gMTAwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFtyZW0oYmFzZVcgLSA3MCksIGJhc2VIIC0gMTAwXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRkZWxheTogZGVsYXkgfHwgMCxcblx0XHQgIFx0XHQvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVxuXG5cdFx0Y29uc3QgYW5pbTIgPSBwYXJ0MS5ob3VzZS5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3JlbShiYXNlVyAtIDEwMCksIGJhc2VIIC0gNTBdLCBvcGFjaXR5OiAwfSxcblx0XHRcdFx0e3BvczogW3JlbShiYXNlVyAtIDE3MCksIGJhc2VIIC0gNTBdLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTMgPSBwYXJ0MS53b3JkNC5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3JlbShiYXNlVyAtIDUwKSxiYXNlSCArIDEwMF0sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbcmVtKGJhc2VXIC0gNTApLGJhc2VIICsgNTBdLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5ICsgMTAwMHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRjb25zdCBhbmltNCA9IHBhcnQxLndvcmQzLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbcmVtKGJhc2VXICsgNTApLCBiYXNlSCAtIDEwMF0sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbcmVtKGJhc2VXICsgNTApLCBiYXNlSCAtIDMwXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSArIDE1MDB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTUgPSBwYXJ0MS53b3JkMi5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3JlbShiYXNlVyAtIDIyNSksIGJhc2VIIC0gMjAwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFtyZW0oYmFzZVcgLSAxODApLCBiYXNlSCAtIDEyMF0sIG9wYWNpdHk6IDF9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDUwMCxcblx0XHQgIFx0XHRkZWxheTogZGVsYXkgKyAyNTAwIHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFxuXHRcdGNvbnN0IGFuaW02ID0gcGFydDEud29yZDEuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFtyZW0oYmFzZVcgKyAxMCksIGJhc2VIIC0gMTUwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFtyZW0oYmFzZVcgKyA3MCksIGJhc2VIIC0gMTMwXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSArIDM1MDAgfHwgMCxcblx0XHQgIFx0XHQvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdGF3YWl0IGFuaW0xLmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTIuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMy5maW5pc2hlZFxuXHRcdGF3YWl0IGFuaW00LmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTUuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltNi5maW5pc2hlZFxuXHR9LFxuXHRmcmFtZTI6IGFzeW5jIGZ1bmN0aW9uKGRlbGF5KSB7XG5cdFx0Y29uc3QgYW5pbTEgPSBwYXJ0MS50cnVtcC5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogcGFydDEudHJ1bXAuYXR0cigncG9zJyl9LFxuXHRcdFx0XHR7cG9zOiBbcGFydDEudHJ1bXAuYXR0cigncG9zJylbMF0sIHN1bVkocGFydDEudHJ1bXAuYXR0cigncG9zJylbMV0sIC0xMDAwKV19XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5IHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblxuXHRcdGNvbnN0IGFuaW0yID0gcGFydDEuaG91c2UuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHBhcnQxLmhvdXNlLmF0dHIoJ3BvcycpfSxcblx0XHRcdFx0e3BvczogW3BhcnQxLmhvdXNlLmF0dHIoJ3BvcycpWzBdLCBzdW1ZKHBhcnQxLmhvdXNlLmF0dHIoJ3BvcycpWzFdLCAtMTAwMCldfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTMgPSBwYXJ0MS53b3JkNC5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogcGFydDEud29yZDQuYXR0cigncG9zJyl9LFxuXHRcdFx0XHR7cG9zOiBbcGFydDEud29yZDQuYXR0cigncG9zJylbMF0sIHN1bVkocGFydDEud29yZDQuYXR0cigncG9zJylbMV0sIC0xMDAwKV19XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5IHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRjb25zdCBhbmltNCA9IHBhcnQxLndvcmQzLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBwYXJ0MS53b3JkMy5hdHRyKCdwb3MnKX0sXG5cdFx0XHRcdHtwb3M6IFtwYXJ0MS53b3JkMy5hdHRyKCdwb3MnKVswXSwgc3VtWShwYXJ0MS53b3JkMy5hdHRyKCdwb3MnKVsxXSwgLTEwMDApXX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRkZWxheTogZGVsYXkgfHwgMCxcblx0XHQgIFx0XHQvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVxuXHRcdGNvbnN0IGFuaW01ID0gcGFydDEud29yZDIuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHBhcnQxLndvcmQyLmF0dHIoJ3BvcycpfSxcblx0XHRcdFx0e3BvczogW3BhcnQxLndvcmQyLmF0dHIoJ3BvcycpWzBdLCBzdW1ZKHBhcnQxLndvcmQyLmF0dHIoJ3BvcycpWzFdLCAtMTAwMCldfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTYgPSBwYXJ0MS53b3JkMS5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogcGFydDEud29yZDEuYXR0cigncG9zJyl9LFxuXHRcdFx0XHR7cG9zOiBbcGFydDEud29yZDEuYXR0cigncG9zJylbMF0sIHN1bVkocGFydDEud29yZDEuYXR0cigncG9zJylbMV0sIC0xMDAwKV19XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5IHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRhd2FpdCBhbmltMS5maW5pc2hlZFxuXHRcdGF3YWl0IGFuaW0yLmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTMuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltNC5maW5pc2hlZFxuXHRcdGF3YWl0IGFuaW01LmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTYuZmluaXNoZWRcblx0fVxuXHQvLyBhZGRQYXJ0MVdvcmQyOiAoeCwgeSwgZGVsYXkpID0+IHtcblx0Ly8gXHRjb25zdCB3b3JkID0gbmV3IHNwcml0ZWpzLlNwcml0ZShwYXJ0MVdvcmQyKVxuXHQvLyBcdHdvcmQuYXR0cih7XG5cdC8vIFx0ICBhbmNob3I6IFswLjUsIDAuNV0sXG5cdC8vIFx0ICBwb3M6IFt4LCB5XSxcblx0Ly8gXHQgIHNpemU6IFsxMTgsIDk5XVxuXHQvLyBcdH0pXG5cdC8vIFx0d29yZC5hbmltYXRlKFtcblx0Ly8gXHQgIHt4OiA4MCwgeTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogMjAwfSxcblx0Ly8gXHQgIHt4OjEwMCAseTogLTIwMH1cblxuXHQvLyBcdF0sIHtcblx0XHQgIC8vIGR1cmF0aW9uOiA2MDAwLFxuXHRcdCAgLy8gZGVsYXk6IGRlbGF5IHx8IDAsXG5cdFx0ICAvLyAvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIC8vIGZpbGw6ICdmb3J3YXJkcycsXG5cdFx0ICAvLyBlYXNpbmc6ICdlYXNlLWluLW91dCcsICAgICAgICBcblx0Ly8gXHR9KVx0XG5cdC8vIFx0cmV0dXJuIHdvcmRcdFxuXHQvLyB9LFxuXHQvLyBhZGRUcnVtcDogKHgsIHksIGRlbGF5KSA9PiB7XG5cdC8vIFx0Y29uc3QgdHJ1bXAgPSBuZXcgc3ByaXRlanMuU3ByaXRlKHRydW1wVXJsKVxuXHQvLyBcdHRydW1wLmF0dHIoe1xuXHQvLyBcdCAgYW5jaG9yOiBbMCwgMF0sXG5cdC8vIFx0ICBwb3M6IFt4LCB5XSxcblx0Ly8gXHQgIHNpemU6IFsxNDUsIDE2OF1cblx0Ly8gXHR9KVxuXHQvLyBcdHRydW1wLmFuaW1hdGUoW1xuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDE0NSkseTo4MDAsb3BhY2l0eTowfSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAxNDUpLHk6YmFzZUgsb3BhY2l0eToxfSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAxNDUpLHk6YmFzZUh9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDE0NSkseTpiYXNlSH0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gMTQ1KSx5OmJhc2VIfSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAxNDUpLHk6YmFzZUh9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDE0NSkseTpiYXNlSH0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gMTQ1KSx5OmJhc2VIfSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAxNDUpLHk6YmFzZUh9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDE0NSkseTotMTAwfVxuXHQvLyBcdF0sIHtcblx0Ly8gXHQgIGR1cmF0aW9uOiAxMDAwMCxcblx0Ly8gXHQgIGRlbGF5OiBkZWxheSB8fCAwLFxuXHQvLyBcdCAgLy8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdC8vIFx0ICBmaWxsOiAnZm9yd2FyZHMnLFxuXHQvLyBcdCAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCAgICAgICAgXG5cdC8vIFx0fSlcdFxuXHQvLyBcdHJldHVybiB0cnVtcFx0XG5cdC8vIH0sXG5cdC8vIGFkZEhvdXNlOiAoeCwgeSwgZGVsYXkpID0+IHtcblx0Ly8gXHRjb25zdCBob3VzZSA9IG5ldyBzcHJpdGVqcy5TcHJpdGUoaG91c2VVcmwpXG5cdC8vIFx0aG91c2UuYXR0cih7XG5cdC8vIFx0ICBhbmNob3I6IFswLCAwXSxcblx0Ly8gXHQgIHBvczogW3JlbSh4KSwgeV0sXG5cdC8vIFx0ICBzaXplOiBbMTU3LCAxNDJdXG5cdC8vIFx0fSlcblx0Ly8gXHRob3VzZS5hbmltYXRlKFtcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAyMjUpLHk6ODAwLG9wYWNpdHk6MH0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gMjI1KSx5OmJhc2VIICsgMzUsb3BhY2l0eToxfSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAyMjUpLHk6YmFzZUggKyAzNX0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gMjI1KSx5OmJhc2VIICsgMzV9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDIyNSkseTpiYXNlSCArIDM1fSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAyMjUpLHk6YmFzZUggKyAzNX0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gMjI1KSx5OmJhc2VIICsgMzV9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDIyNSkseTpiYXNlSCArIDM1fSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSAyMjUpLHk6YmFzZUggKyAzNX0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gMjI1KSx5Oi0xMDB9XG5cdC8vIFx0XSwge1xuXHQvLyBcdCAgZHVyYXRpb246IDEwMDAwLFxuXHQvLyBcdCAgZGVsYXk6IGRlbGF5IHx8IDAsXG5cdC8vIFx0ICAvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0Ly8gXHQgIGZpbGw6ICdmb3J3YXJkcycsXG5cdC8vIFx0ICBlYXNpbmc6ICdlYXNlLWluLW91dCcsICAgICAgICBcblx0Ly8gXHR9KVx0XG5cdC8vIFx0cmV0dXJuIGhvdXNlXHRcblx0Ly8gfSxcblx0Ly8gYWRkUGFydDE6IChkZWxheSkgPT4ge1xuXHQvLyBcdGNvbnN0IHdvcmQgPSBuZXcgc3ByaXRlanMuU3ByaXRlKHBhcnQxVXJsKVxuXHQvLyBcdGNvbnN0IFt4LCB5XSA9IFt3aW5kb3dXIC8gMiwgYmFzZUggKyA4NV1cblx0Ly8gXHR3b3JkLmF0dHIoe1xuXHQvLyBcdCAgYW5jaG9yOiBbMC41LCAwLjVdLFxuXHQvLyBcdCAgcG9zOiBbMjAsIDBdLFxuXHQvLyBcdCAgc2l6ZTogW3JlbSgzMzApLCByZW0oMTk1KV1cblx0Ly8gXHR9KVxuXHQvLyBcdGNvbnN0IGFuaW0xID0gd29yZC5hbmltYXRlKFtcblx0Ly8gXHQgIHt4LCB5OiA5MzV9LFxuXHQvLyBcdCAge3gsIHk6IGJhc2VIICsgNTV9LFxuXHQvLyBcdF0sIHtcblx0Ly8gXHQgIGR1cmF0aW9uOiAxMDAwMCxcblx0Ly8gXHQgIGRlbGF5OiBkZWxheSB8fCAwLFxuXHQvLyBcdCAgLy8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdC8vIFx0ICBmaWxsOiAnZm9yd2FyZHMnLFxuXHQvLyBcdCAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCAgICAgICAgXG5cdC8vIFx0fSlcblx0Ly8gXHRjb25zdCBhbmltMiA9ICgpID0+IHtcblx0Ly8gXHRcdHdvcmQuYW5pbWF0ZShbXG5cdC8vIFx0XHQgIHt4LCB5OiBiYXNlSCArIDU1fSxcblx0Ly8gXHRcdCAge3gsIHk6IC0xMDB9XG5cdC8vIFx0XHRdLCB7XG5cdC8vIFx0XHQgIGR1cmF0aW9uOiAxMDAwLFxuXHQvLyBcdFx0ICBkZWxheTogMzAwMCxcblx0Ly8gXHRcdCAgZmlsbDogJ2ZvcndhcmRzJyxcblx0Ly8gXHRcdCAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCAgICAgICAgXG5cdC8vIFx0XHR9KVxuXHQvLyBcdH1cblx0Ly8gXHRhbmltMS5maW5pc2hlZC50aGVuKGFuaW0yKVxuXHQvLyBcdHJldHVybiB3b3JkXG5cdC8vIH0sXG5cdC8vIGFkZFdvcmQ0OiAoZGVsYXkpID0+IHtcblx0Ly8gXHRjb25zdCB3b3JkID0gbmV3IHNwcml0ZWpzLlNwcml0ZSh3b3JkNFVybClcblx0Ly8gXHRjb25zdCBbeCwgeV0gPSBbYmFzZVcgLSA5NSwgODAwXVxuXHQvLyBcdHdvcmQuYXR0cih7XG5cdC8vIFx0ICBhbmNob3I6IFswLCAwXSxcblx0Ly8gXHQgIHBvczogW3JlbSh4KSwgeV0sXG5cdC8vIFx0ICBzaXplOiBbMTg1LCAzM11cblx0Ly8gXHR9KVxuXHQvLyAgICAgY29uc3QgYW5pbTEgPSB3b3JkLmFuaW1hdGUoW1xuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDk1KSwgeTo4MDAsb3BhY2l0eTowfSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSA5NSkseTpiYXNlSCArIDEzNSxvcGFjaXR5OjF9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDk1KSx5OmJhc2VIICsgMTM1fSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSA5NSkseTpiYXNlSCArIDEzNX0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gOTUpLHk6YmFzZUggKyAxMzV9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDk1KSx5OmJhc2VIICsgMTM1fSxcblx0Ly8gXHQgIHt4OiByZW0oYmFzZVcgLSA5NSkseTpiYXNlSCArIDEzNX0sXG5cdC8vIFx0ICB7eDogcmVtKGJhc2VXIC0gOTUpLHk6YmFzZUggKyAxMzV9LFxuXHQvLyBcdCAge3g6IHJlbShiYXNlVyAtIDk1KSx5Oi0xMDB9XG5cdC8vIFx0XSwge1xuXHQvLyBcdCAgZHVyYXRpb246IDYwMDAwLFxuXHQvLyBcdCAgZGVsYXk6IGRlbGF5IHx8IDAsXG5cdC8vIFx0ICAvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0Ly8gXHQgIGZpbGw6ICdmb3J3YXJkcycsXG5cdC8vIFx0ICBlYXNpbmc6ICdlYXNlLWluLW91dCcsICAgICAgICBcblx0Ly8gXHR9KVxuXHQvLyBcdC8vIGFuaW0xLmZpbmlzaGVkLnRoZW4oc2V0SW50ZXJ2YWwoYW5pbTIsIDMwMDApKVxuXHQvLyBcdHJldHVybiB3b3JkXHRcblx0Ly8gfVxufVxuZXhwb3J0IGRlZmF1bHQgcGFydDFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFydDEuanMiLCJpbXBvcnQgeyByZW0sIG9mZnNldFZhbHVlLCBzdW1ZLCBjcmVhdGVTcHJpdGUgfSBmcm9tICcuL3V0aWwuanMnXG5cbmNvbnN0IGV2ZW50VXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDJfZXZlbnQucG5nJ1xuY29uc3QgbmFtZVVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQyX25hbWUucG5nJ1xuY29uc3QgcGFzc3BvcnRVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0Ml9wYXNzcG9ydC5wbmcnXG5jb25zdCB3alVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQyX3dqLnBuZydcbmNvbnN0IHdpbmRvd1cgPSB3aW5kb3cuaW5uZXJXaWR0aFxuY29uc3Qgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodFxuY29uc3QgW2Jhc2VXLCBiYXNlSF0gPSBbd2luZG93VyAvIDIsMzUwXVxuXG5jb25zdCBwYXJ0MiA9IHtcblx0ZmdsYXllcjogJycsXG5cdGV2bjogY3JlYXRlU3ByaXRlKGV2ZW50VXJsLCBbMzc1LCA0NzhdLCBbLTEwMDAsIC0xMDAwXSwgWzAuNSwgMC41XSksXG5cdG5hbWU6IGNyZWF0ZVNwcml0ZShuYW1lVXJsLCBbMzc1LCA0NzhdKSxcblx0cGFzc3BvcnQ6IGNyZWF0ZVNwcml0ZShwYXNzcG9ydFVybCwgWzM0NCwgMjE2XSwgWy0xMDAwLCAtMTAwMF0sIFswLjUsIDAuNV0pLFxuXHR3ajogY3JlYXRlU3ByaXRlKHdqVXJsLCBbMzc1LCA0NzhdLCBbLTEwMDAsIC0xMDAwXSwgWzAuNSwgMC41XSksXG5cdGdldDogKGxheWVyKSA9Pntcblx0XHRwYXJ0Mi5mZ2xheWVyID0gbGF5ZXJcblx0fSxcblx0cmVuZGVyOiAoZmdsYXllcikgPT4ge1xuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQocGFydDIucGFzc3BvcnQpXG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZChwYXJ0Mi53ailcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHBhcnQyLm5hbWUpXG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZChwYXJ0Mi5ldm4pXG5cdH0sXG5cdGFjdGlvbjogYXN5bmMgZnVuY3Rpb24oKSB7XG5cdFx0YXdhaXQgcGFydDIuZnJhbWUxKClcblx0XHRhd2FpdCBwYXJ0Mi5zbGVlcCgzMDAwKVxuXHRcdGF3YWl0IHBhcnQyLmZyYW1lMigpXG5cdH0sXG5cdHNsZWVwOiBhc3luYyBmdW5jdGlvbih0aW1lKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0ICAgIHBhcnQyLmZnbGF5ZXIudGltZWxpbmUuc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0XHQgIH0pO1xuXHR9LFxuXHRmcmFtZTE6IGFzeW5jIGZ1bmN0aW9uKGRlbGF5ID0gMTAwMCkge1xuXHRcdGNvbnN0IGFuaW0xID0gcGFydDIucGFzc3BvcnQuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFtiYXNlVywgYmFzZUggXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFtiYXNlVywgYmFzZUggXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cblx0XHRjb25zdCBhbmltMiA9IHBhcnQyLndqLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbYmFzZVcgKiAyLCBiYXNlSCArIDUwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFtiYXNlVyAqIDIgLSAxNTAsIGJhc2VIICsgNTBdLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5ICsgNTAwIHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRjb25zdCBhbmltMyA9IHBhcnQyLm5hbWUuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFtiYXNlVyAtIHJlbSgyMDApLGJhc2VIIC0gMTcwXSwgb3BhY2l0eTogMCwgc2NhbGU6IDV9LFxuXHRcdFx0XHR7cG9zOiBbYmFzZVcgLSByZW0oMjAwKSxiYXNlSCAtIDE3MF0sIG9wYWNpdHk6IDEsIHNjYWxlOiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5ICsgMTAwMCB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTQgPSBwYXJ0Mi5ldm4uYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFtyZW0oMTMwKSwgYmFzZUggKyA4MF0sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbcmVtKDEzMCksIGJhc2VIICsgNTBdLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5ICsgMTUwMHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFx0XHRcdFx0XHRcdFx0XG5cdFx0YXdhaXQgYW5pbTEuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMi5maW5pc2hlZFxuXHRcdGF3YWl0IGFuaW0zLmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTQuZmluaXNoZWRcblx0fSxcblx0ZnJhbWUyOiBhc3luYyBmdW5jdGlvbihkZWxheSkge1xuXHRcdGNvbnN0IGFuaW0xID0gcGFydDIucGFzc3BvcnQuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHBhcnQyLnBhc3Nwb3J0LmF0dHIoJ3BvcycpfSxcblx0XHRcdFx0e3BvczogW3BhcnQyLnBhc3Nwb3J0LmF0dHIoJ3BvcycpWzBdLCBzdW1ZKHBhcnQyLnBhc3Nwb3J0LmF0dHIoJ3BvcycpWzFdLCAtMTAwMCldfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cblx0XHRjb25zdCBhbmltMiA9IHBhcnQyLndqLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBwYXJ0Mi53ai5hdHRyKCdwb3MnKX0sXG5cdFx0XHRcdHtwb3M6IFtwYXJ0Mi53ai5hdHRyKCdwb3MnKVswXSwgc3VtWShwYXJ0Mi53ai5hdHRyKCdwb3MnKVsxXSwgLTEwMDApXX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRkZWxheTogZGVsYXkgfHwgMCxcblx0XHQgIFx0XHQvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVxuXHRcdGNvbnN0IGFuaW0zID0gcGFydDIubmFtZS5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogcGFydDIubmFtZS5hdHRyKCdwb3MnKX0sXG5cdFx0XHRcdHtwb3M6IFtwYXJ0Mi5uYW1lLmF0dHIoJ3BvcycpWzBdLCBzdW1ZKHBhcnQyLm5hbWUuYXR0cigncG9zJylbMV0sIC0xMDAwKV19XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5IHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRjb25zdCBhbmltNCA9IHBhcnQyLmV2bi5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogcGFydDIuZXZuLmF0dHIoJ3BvcycpfSxcblx0XHRcdFx0e3BvczogW3BhcnQyLmV2bi5hdHRyKCdwb3MnKVswXSwgc3VtWShwYXJ0Mi5ldm4uYXR0cigncG9zJylbMV0sIC0xMDAwKV19XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5IHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFx0XG5cdFx0YXdhaXQgYW5pbTEuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMi5maW5pc2hlZFxuXHRcdGF3YWl0IGFuaW0zLmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTQuZmluaXNoZWRcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgcGFydDJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFydDIuanMiLCJpbXBvcnQgeyByZW0sIG9mZnNldFZhbHVlLCBzdW1ZLCBjcmVhdGVTcHJpdGUgfSBmcm9tICcuL3V0aWwuanMnXG5cbmNvbnN0IGNvbGFVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0M19jb2xhLnBuZydcbmNvbnN0IG5hbWVVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9wYXJ0M19uYW1lLnBuZydcbmNvbnN0IHBlb3BsZVVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQzX3Blb3BsZS5wbmcnXG5cbmNvbnN0IHdpbmRvd1cgPSB3aW5kb3cuaW5uZXJXaWR0aFxuY29uc3Qgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodFxuY29uc3QgW2Jhc2VXLCBiYXNlSF0gPSBbd2luZG93VyAvIDIsMzUwXVxuXG5jb25zdCBwYXJ0MyA9IHtcblx0ZmdsYXllcjogJycsXG5cdGNvbGE6IGNyZWF0ZVNwcml0ZShjb2xhVXJsLCBbMjIwLCAyNjVdLCBbLTEwMDAsIC0xMDAwXSwgWzAuNSwgMC41XSksXG5cdG5hbWU6IGNyZWF0ZVNwcml0ZShuYW1lVXJsLCBbMzc1LCA0NzhdKSxcblx0cGVvcGxlOiBjcmVhdGVTcHJpdGUocGVvcGxlVXJsLCBbMTgwLCAyMDRdLCBbLTEwMDAsIC0xMDAwXSwgWzAuNSwgMC41XSksXG5cdGdldDogKGxheWVyKSA9Pntcblx0XHRwYXJ0My5mZ2xheWVyID0gbGF5ZXJcblx0fSxcblx0cmVuZGVyOiAoZmdsYXllcikgPT4ge1xuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQocGFydDMucGVvcGxlKVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQocGFydDMuY29sYSlcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHBhcnQzLm5hbWUpXG5cdH0sXG5cdGFjdGlvbjogYXN5bmMgZnVuY3Rpb24oKSB7XG5cdFx0YXdhaXQgcGFydDMuZnJhbWUxKClcblx0XHRhd2FpdCBwYXJ0My5zbGVlcCgyMDAwKVxuXHRcdGF3YWl0IHBhcnQzLmZyYW1lMigpXG5cdH0sXG5cdHNsZWVwOiBhc3luYyBmdW5jdGlvbih0aW1lKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0ICAgIHBhcnQzLmZnbGF5ZXIudGltZWxpbmUuc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0XHQgIH0pO1xuXHR9LFxuXHRmcmFtZTE6IGFzeW5jIGZ1bmN0aW9uKGRlbGF5ID0gMTAwMCkge1xuXHRcdGNvbnN0IGFuaW0xID0gcGFydDMucGVvcGxlLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbYmFzZVcsIGJhc2VIIF0sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbYmFzZVcsIGJhc2VIIF0sIG9wYWNpdHk6IDF9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDUwMCxcblx0XHQgIFx0XHRkZWxheTogZGVsYXkgfHwgMCxcblx0XHQgIFx0XHQvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVxuXG5cdFx0Y29uc3QgYW5pbTIgPSBwYXJ0My5jb2xhLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbYmFzZVcgKiAyLCBiYXNlSCArIDIwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFtiYXNlVyAqIDIgLSAxMDAsIGJhc2VIICsgMjBdLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5ICsgNTAwIHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRjb25zdCBhbmltMyA9IHBhcnQzLm5hbWUuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFtiYXNlVyAtIHJlbSgyMDApLGJhc2VIIC0gMTcwXSwgb3BhY2l0eTogMCwgc2NhbGU6IDV9LFxuXHRcdFx0XHR7cG9zOiBbYmFzZVcgLSByZW0oMjAwKSxiYXNlSCAtIDE3MF0sIG9wYWNpdHk6IDEsIHNjYWxlOiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5ICsgMTAwMCB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0XHRcdFxuXHRcdGF3YWl0IGFuaW0xLmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTIuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMy5maW5pc2hlZFxuXHR9LFxuXHRmcmFtZTI6IGFzeW5jIGZ1bmN0aW9uKGRlbGF5KSB7XG5cdFx0Y29uc3QgYW5pbTEgPSBwYXJ0My5wZW9wbGUuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHBhcnQzLnBlb3BsZS5hdHRyKCdwb3MnKX0sXG5cdFx0XHRcdHtwb3M6IFtwYXJ0My5wZW9wbGUuYXR0cigncG9zJylbMF0sIHN1bVkocGFydDMucGVvcGxlLmF0dHIoJ3BvcycpWzFdLCAtMTAwMCldfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cblx0XHRjb25zdCBhbmltMiA9IHBhcnQzLmNvbGEuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHBhcnQzLmNvbGEuYXR0cigncG9zJyl9LFxuXHRcdFx0XHR7cG9zOiBbcGFydDMuY29sYS5hdHRyKCdwb3MnKVswXSwgc3VtWShwYXJ0My5jb2xhLmF0dHIoJ3BvcycpWzFdLCAtMTAwMCldfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTMgPSBwYXJ0My5uYW1lLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBwYXJ0My5uYW1lLmF0dHIoJ3BvcycpfSxcblx0XHRcdFx0e3BvczogW3BhcnQzLm5hbWUuYXR0cigncG9zJylbMF0sIHN1bVkocGFydDMubmFtZS5hdHRyKCdwb3MnKVsxXSwgLTEwMDApXX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRkZWxheTogZGVsYXkgfHwgMCxcblx0XHQgIFx0XHQvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVx0XG5cdFx0YXdhaXQgYW5pbTEuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMi5maW5pc2hlZFxuXHRcdGF3YWl0IGFuaW0zLmZpbmlzaGVkXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IHBhcnQzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhcnQzLmpzIiwiaW1wb3J0IHsgcmVtLCBvZmZzZXRWYWx1ZSwgc3VtWSwgY3JlYXRlU3ByaXRlIH0gZnJvbSAnLi91dGlsLmpzJ1xuXG5jb25zdCB0dlVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhcnQ0X3R2LnBuZydcbmNvbnN0IHRyZWFzdXJlVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDRfdHJlYXN1cmUucG5nJ1xuY29uc3Qgd3lmVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vcGFydDRfd3lmLnBuZydcblxuY29uc3Qgd2luZG93VyA9IHdpbmRvdy5pbm5lcldpZHRoXG5jb25zdCB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0XG5jb25zdCBbYmFzZVcsIGJhc2VIXSA9IFt3aW5kb3dXIC8gMiwzNTBdXG5cbmNvbnN0IHBhcnQ0ID0ge1xuXHRmZ2xheWVyOiAnJyxcblx0dHY6IGNyZWF0ZVNwcml0ZSh0dlVybCwgWzIyNCwgMTk2XSwgWy0xMDAwLCAtMTAwMF0sIFswLjUsIDAuNV0pLFxuXHR0cmVhc3VyZTogY3JlYXRlU3ByaXRlKHRyZWFzdXJlVXJsLCBbMTMzLCA3MF0pLFxuXHR3eWY6IGNyZWF0ZVNwcml0ZSh3eWZVcmwsIFszNDAsIDM0MF0sIFstMTAwMCwgLTEwMDBdLCBbMC41LCAwLjVdKSxcblx0Z2V0OiAobGF5ZXIpID0+e1xuXHRcdHBhcnQ0LmZnbGF5ZXIgPSBsYXllclxuXHR9LFxuXHRyZW5kZXI6IChmZ2xheWVyKSA9PiB7XG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZChwYXJ0NC50dilcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHBhcnQ0Lnd5Zilcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHBhcnQ0LnRyZWFzdXJlKVxuXHRcdFxuXHR9LFxuXHRhY3Rpb246IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdGF3YWl0IHBhcnQ0LmZyYW1lMSgpXG5cdFx0YXdhaXQgcGFydDQuc2xlZXAoMjAwMClcblx0XHRhd2FpdCBwYXJ0NC5mcmFtZTIoKVxuXHR9LFxuXHRzbGVlcDogYXN5bmMgZnVuY3Rpb24odGltZSkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdCAgICBwYXJ0NC5mZ2xheWVyLnRpbWVsaW5lLnNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG5cdFx0ICB9KTtcblx0fSxcblx0ZnJhbWUxOiBhc3luYyBmdW5jdGlvbihkZWxheSA9IDEwMDApIHtcblx0XHRjb25zdCBhbmltMSA9IHBhcnQ0LnR2LmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbYmFzZVcgKiAyLjAgLyAzLCBiYXNlSCBdLCBvcGFjaXR5OiAwfSxcblx0XHRcdFx0e3BvczogW2Jhc2VXICogMi4wIC8gMywgYmFzZUggXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTIgPSBwYXJ0NC53eWYuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFtiYXNlVyAqIDYuMCAvIDQsIGJhc2VIXSwgb3BhY2l0eTogMCwgc2NhbGU6IDUsIHJvdGF0ZTogMH0sXG5cdFx0XHRcdHtwb3M6IFtiYXNlVyAqIDYuMCAvIDQsIGJhc2VIXSwgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHJvdGF0ZTogNzIwfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5ICsgMTAwMCB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXG5cdFx0Y29uc3QgYW5pbTMgPSBwYXJ0NC50cmVhc3VyZS5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3JlbSgwKSwgYmFzZUggLSAxNDBdLCBvcGFjaXR5OiAwLCBzY2FsZTogM30sXG5cdFx0XHRcdHtwb3M6IFtyZW0oMCksIGJhc2VIIC0gMTQwXSwgb3BhY2l0eTogMSwgc2NhbGU6IDN9LFxuXHRcdFx0XHR7cG9zOiBbcmVtKDApLCBiYXNlSCAtIDExMF0sIG9wYWNpdHk6IDEsIHNjYWxlOiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxNTAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSArIDE1MDB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcdFx0XHRcdFx0XHRcdFxuXHRcdGF3YWl0IGFuaW0xLmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTIuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMy5maW5pc2hlZFxuXHR9LFxuXHRmcmFtZTI6IGFzeW5jIGZ1bmN0aW9uKGRlbGF5KSB7XG5cdFx0Y29uc3QgYW5pbTEgPSBwYXJ0NC50di5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogcGFydDQudHYuYXR0cigncG9zJyl9LFxuXHRcdFx0XHR7cG9zOiBbcGFydDQudHYuYXR0cigncG9zJylbMF0sIHN1bVkocGFydDQudHYuYXR0cigncG9zJylbMV0sIC0xMDAwKV19XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZGVsYXk6IGRlbGF5IHx8IDAsXG5cdFx0ICBcdFx0Ly8gaXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblxuXHRcdGNvbnN0IGFuaW0yID0gcGFydDQud3lmLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBwYXJ0NC53eWYuYXR0cigncG9zJyl9LFxuXHRcdFx0XHR7cG9zOiBbcGFydDQud3lmLmF0dHIoJ3BvcycpWzBdLCBzdW1ZKHBhcnQ0Lnd5Zi5hdHRyKCdwb3MnKVsxXSwgLTEwMDApXX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRkZWxheTogZGVsYXkgfHwgMCxcblx0XHQgIFx0XHQvLyBpdGVyYXRpb25zOiBJbmZpbml0eSxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVxuXHRcdGNvbnN0IGFuaW0zID0gcGFydDQudHJlYXN1cmUuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHBhcnQ0LnRyZWFzdXJlLmF0dHIoJ3BvcycpfSxcblx0XHRcdFx0e3BvczogW3BhcnQ0LnRyZWFzdXJlLmF0dHIoJ3BvcycpWzBdLCBzdW1ZKHBhcnQ0LnRyZWFzdXJlLmF0dHIoJ3BvcycpWzFdLCAtMTAwMCldfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGRlbGF5OiBkZWxheSB8fCAwLFxuXHRcdCAgXHRcdC8vIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcdFxuXHRcdGF3YWl0IGFuaW0xLmZpbmlzaGVkXG5cdFx0YXdhaXQgYW5pbTIuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMy5maW5pc2hlZFxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBwYXJ0NFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYXJ0NC5qcyIsImltcG9ydCB7IHJlbSwgb2Zmc2V0VmFsdWUsIHN1bVksIGNyZWF0ZVNwcml0ZSwgY3JlYXRlTGFiZWwgfSBmcm9tICcuL3V0aWwuanMnXG5jb25zdCBbYmFzZVcsIGJhc2VIXSA9IFsxODUsMzUwXVxuXG5jb25zdCBhcnJvd1VybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL2Fycm93LnBuZydcbmNvbnN0IGJnVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vYmc0LnBuZydcbmNvbnN0IGJhbGxCb3JkZXJVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9iYWxsX2JvcmRlci5wbmcnXG5jb25zdCBwYXVzZVVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3BhdXNlLnBuZydcbmNvbnN0IHRpdGxlVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vdGl0bGUucG5nLnBuZydcbmNvbnN0IHRleHQxVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vdGV4dDMucG5nJ1xuY29uc3QgdGV4dDJVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS90ZXh0NC5wbmcnXG5jb25zdCBsb2dvVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vbG9nby5wbmcnXG5cbmNvbnN0IHRleHQzVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vdGV4dDUucG5nJ1xuY29uc3QgdGV4dDRVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS90ZXh0Ni5wbmcnXG5jb25zdCB0ZXh0NVVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3RleHQ3LnBuZydcbmNvbnN0IHRpcFVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL3RpcC5wbmcnXG5cbmNvbnN0IHdpbmRvd1cgPSB3aW5kb3cuaW5uZXJXaWR0aFxuY29uc3Qgd2luZG93SCA9IHdpbmRvdy5pbm5lckhlaWdodFxuY29uc3QgY2VudGVyUG9pbnQgPSBbd2luZG93VyAvIDIsIHdpbmRvd0ggLyAyIC0gNTBdXG5jbGFzcyBHU3ByaXRlIHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHRoaXMuYmcgPSBjcmVhdGVTcHJpdGUoYmdVcmwsIFs0NTAsIDQ1MDBdLCBbMCwgMF0pXG5cdFx0dGhpcy5iYWxsQm9yZGVyID0gY3JlYXRlU3ByaXRlKGJhbGxCb3JkZXJVcmwsIFsyMjIsIDIxMF0sIFt3aW5kb3dXIC8gMiwgd2luZG93SCAvIDIgLSA1MF0sIFswLjUsIDAuNV0pXG5cdFx0dGhpcy5hcnJvdyA9IGNyZWF0ZVNwcml0ZShhcnJvd1VybCwgWzI5LCAzMV0sIFt3aW5kb3dXIC8gMiArIDUsIHdpbmRvd0ggLyAyIC0gNTVdLCBbMC41LCAwLjVdKVxuXHRcdHRoaXMuY291bnREb3duID0gY3JlYXRlTGFiZWwoJzYwJywgWy0xMDAwLCAtMTAwMF0pXG5cdFx0dGhpcy5zcGVlZFVwMiA9IGNyZWF0ZUxhYmVsKCcyeCcsIFstMTAwMCwgLTEwMDBdLCBbMC41LCAwLjVdLCAnYm9sZCAzMHB4IEFyaWFsJylcblx0XHR0aGlzLnNwZWVkVXA0ID0gY3JlYXRlTGFiZWwoJzR4JywgWy0xMDAwLCAtMTAwMF0sIFswLjUsIDAuNV0sICdib2xkIDMwcHggQXJpYWwnKVxuXHRcdHRoaXMucGF1c2UgPSBjcmVhdGVTcHJpdGUocGF1c2VVcmwsIFsyNiwgMjZdLCBbLTEwMDAsIC0xMDAwXSwgWzAuNSwgMC41XSlcblx0XHR0aGlzLnNwZWVkTm9ybWFsID0gY3JlYXRlTGFiZWwoJzF4JywgWy0xMDAwLCAtMTAwMF0sIFswLjUsIDAuNV0sICdib2xkIDMwcHggQXJpYWwnKVxuXHRcdHRoaXMudGl0bGUgPSBjcmVhdGVTcHJpdGUodGl0bGVVcmwsIFtyZW0oNDAwKSwgcmVtKDEwMCldLCBbd2luZG93VyAvIDIsIHJlbSgxMDApXSwgWzAuNSwgMC41XSlcblx0XHR0aGlzLnRleHQxID0gY3JlYXRlU3ByaXRlKHRleHQxVXJsLCBbcmVtKDM5MiksIHJlbSgzNildLCBbd2luZG93VyAqIDEgLyAxMCwgd2luZG93SCAqIDQuMCAvIDUgLSByZW0oNTApXSwgWzAsIDBdKVxuXHRcdHRoaXMudGV4dDIgPSBjcmVhdGVTcHJpdGUodGV4dDJVcmwsIFtyZW0oMzkyKSwgcmVtKDM2KV0sIFt3aW5kb3dXICogMyAvIDEwLCB3aW5kb3dIICogNC4wIC8gNV0sIFswLCAwXSlcblx0XHR0aGlzLnRleHQzID0gY3JlYXRlU3ByaXRlKHRleHQzVXJsLCBbcmVtKDM5MiksIHJlbSgzNildLCBbLTEwMDAsIC0xMDAwXSwgWzAsIDBdKVxuXHRcdHRoaXMudGV4dDQgPSBjcmVhdGVTcHJpdGUodGV4dDRVcmwsIFtyZW0oMzkyKSwgcmVtKDM2KV0sIFstMTAwMCwgLTEwMDBdLCBbMCwgMF0pXG5cdFx0dGhpcy50ZXh0NSA9IGNyZWF0ZVNwcml0ZSh0ZXh0NVVybCwgW3JlbSgzOTIpLCByZW0oMzYpXSwgWy0xMDAwLCAtMTAwMF0sIFswLCAwXSlcblx0XHR0aGlzLmxvZ28gPSBjcmVhdGVTcHJpdGUobG9nb1VybCwgWzI0NywgOTVdLCBbLTEwMDAsIC0xMDAwXSwgWzAuNSwgMC41XSlcblx0XHR0aGlzLnRpcCA9IGNyZWF0ZVNwcml0ZSh0aXBVcmwsIFs2NCwgNjRdLCBbLTEwMDAsIC0xMDAwXSwgWzAuNSwgMC41XSlcblx0XHRcblx0fVxuXG5cdHJlbmRlciAoZmdsYXllcikge1xuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy5iZylcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMuYmFsbEJvcmRlcilcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMudGlwKVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy5hcnJvdylcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMuY291bnREb3duKVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy5zcGVlZFVwMilcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMuc3BlZWRVcDQpXG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZCh0aGlzLnBhdXNlKVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy5zcGVlZE5vcm1hbClcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGUpXG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZCh0aGlzLnRleHQxKVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Milcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMudGV4dDMpXG5cdFx0ZmdsYXllci5hcHBlbmRDaGlsZCh0aGlzLnRleHQ0KVxuXHRcdGZnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy50ZXh0NSlcblx0XHRmZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMubG9nbylcblx0XHRjb25zdCBhbmltMTAgPSB0aGlzLnRpcC5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3dpbmRvd1cgKiAyIC8gMyArIDMwLCB3aW5kb3dIIC8gMyAtIDMwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFt3aW5kb3dXICogMiAvIDMgKyAzMCwgd2luZG93SCAvIDMgLSAzMF0sIG9wYWNpdHk6IDF9LFxuXHRcdFx0XHR7cG9zOiBbd2luZG93VyAqIDIgLyAzICsgMzAsIHdpbmRvd0ggLyAzIC0gMzBdLCBvcGFjaXR5OiAxfSxcblx0XHRcdFx0e3BvczogW3dpbmRvd1cgKiAyIC8gMyArIDMwLCB3aW5kb3dIIC8gMyAtIDMwXSwgb3BhY2l0eTogMX0sXG5cdFx0XHRcdHtwb3M6IFt3aW5kb3dXICogMiAvIDMgKyAzMCwgd2luZG93SCAvIDMgLSAzMF0sIG9wYWNpdHk6IDB9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDE1MDAsXG5cdFx0XHRcdGRlbGF5OiA1MDAsXG5cdFx0ICAgIFx0aXRlcmF0aW9uczogSW5maW5pdHksXG5cdFx0ICAgIFx0ZWFzaW5nOiAnZWFzZS1pbi1vdXQnXG5cdFx0XHR9KVx0XHRcdFxuXHR9XG5cblx0YXN5bmMgZnJhbWUxICgpIHtcblx0XHRjb25zdCBhbmltMSA9IHRoaXMuYmcuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHRoaXMuYmcuYXR0cigncG9zJyl9LFxuXHRcdFx0XHR7cG9zOiBbdGhpcy5iZy5hdHRyKCdwb3MnKVswXSwgc3VtWSh0aGlzLmJnLmF0dHIoJ3BvcycpWzFdLCAtNDUwMCldfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA2MDAwMCxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVxuXHRcdGNvbnN0IGFuaW0yID0gdGhpcy5hcnJvdy5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogdGhpcy5hcnJvdy5hdHRyKCdwb3MnKSwgcm90YXRlOiAwLH0sXG5cdFx0XHRcdHtwb3M6IFt0aGlzLmFycm93LmF0dHIoJ3BvcycpWzBdLCB3aW5kb3dIIC0gODBdLCByb3RhdGU6IDgxMCx9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRjb25zdCBhbmltMyA9IHRoaXMuYmFsbEJvcmRlci5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogdGhpcy5iYWxsQm9yZGVyLmF0dHIoJ3BvcycpfSxcblx0XHRcdFx0e3BvczogW3RoaXMuYmFsbEJvcmRlci5hdHRyKCdwb3MnKVswXSwgMF19XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRjb25zdCBhbmltNCA9IHRoaXMudGl0bGUuYXR0cih7XG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0fSlcblx0XHRjb25zdCBhbmltNSA9IHRoaXMudGV4dDEuYXR0cih7XG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0fSlcblx0XHRjb25zdCBhbmltNiA9IHRoaXMudGV4dDIuYXR0cih7XG5cdFx0XHRvcGFjaXR5OiAwXG5cdFx0fSlcdFx0XHRcdFx0XG5cdFx0YXdhaXQgYW5pbTIuZmluaXNoZWRcblx0XHRhd2FpdCBhbmltMy5maW5pc2hlZFxuXHR9XG5cblx0YXN5bmMgZnJhbWUyIChmZ2xheWVyKSB7XG5cdFx0Ly8gZmdsYXllci50aW1lbGluZS5wbGF5YmFja1JhdGUgPSAwLjJcblx0XHRjb25zdCBhbmltMSA9IHRoaXMudGV4dDEuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFt3aW5kb3dXICogMS4wIC8gNCwgd2luZG93SCAqIDEuMCAvIDNdLCBvcGFjaXR5OiAwfSxcblx0XHRcdFx0e3BvczogW3dpbmRvd1cgKiAxLjAgLyA0LCB3aW5kb3dIICogMS4wIC8gMyAtIHJlbSg1MCldLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxNzAwLFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcdFxuXHRcdGF3YWl0IGFuaW0xLmZpbmlzaGVkXG5cdFx0Y29uc3QgYW5pbTIgPSB0aGlzLnRleHQxLmFuaW1hdGUoW1xuXHRcdFx0XHR7b3BhY2l0eTogMX0sXG5cdFx0XHRcdHtvcGFjaXR5OiAwfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFx0XG5cdFx0YXdhaXQgYW5pbTIuZmluaXNoZWRcdFx0XG5cdFx0Y29uc3QgYW5pbTMgPSB0aGlzLnRleHQzLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbd2luZG93VyAqIDEuMCAvIDQsIHdpbmRvd0ggKiAxLjAgLyAzXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFt3aW5kb3dXICogMS4wIC8gNCwgd2luZG93SCAqIDEuMCAvIDMgLSByZW0oNTApXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTcwMCxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVx0XHRcblx0XHRhd2FpdCBhbmltMy5maW5pc2hlZFxuXHRcdGNvbnN0IGFuaW00ID0gdGhpcy50ZXh0My5hbmltYXRlKFtcblx0XHRcdFx0e29wYWNpdHk6IDF9LFxuXHRcdFx0XHR7b3BhY2l0eTogMH1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcdFxuXHRcdGF3YWl0IGFuaW00LmZpbmlzaGVkXHRcdFxuXHRcdGNvbnN0IGFuaW01ID0gdGhpcy50ZXh0NC5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3dpbmRvd1cgKiAxLjAgLyA0LCB3aW5kb3dIICogMS4wIC8gM10sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbd2luZG93VyAqIDEuMCAvIDQsIHdpbmRvd0ggKiAxLjAgLyAzIC0gcmVtKDUwKV0sIG9wYWNpdHk6IDF9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDE3MDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFxuXHRcdGF3YWl0IGFuaW01LmZpbmlzaGVkXG5cdFx0Y29uc3QgYW5pbTYgPSB0aGlzLnRleHQ0LmFuaW1hdGUoW1xuXHRcdFx0XHR7b3BhY2l0eTogMX0sXG5cdFx0XHRcdHtvcGFjaXR5OiAwfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFx0XG5cdFx0YXdhaXQgYW5pbTYuZmluaXNoZWRcdFxuXHRcdGNvbnN0IGFuaW03ID0gdGhpcy50ZXh0NS5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3dpbmRvd1cgKiAxLjAgLyA0LCB3aW5kb3dIICogMS4wIC8gM10sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbd2luZG93VyAqIDEuMCAvIDQsIHdpbmRvd0ggKiAxLjAgLyAzIC0gcmVtKDUwKV0sIG9wYWNpdHk6IDF9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDE3MDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFxuXHRcdGF3YWl0IGFuaW03LmZpbmlzaGVkXG5cdFx0Y29uc3QgYW5pbTggPSB0aGlzLnRleHQ1LmFuaW1hdGUoW1xuXHRcdFx0e29wYWNpdHk6IDF9LFxuXHRcdFx0e29wYWNpdHk6IDB9XG5cdFx0XSx7XG5cdFx0XHRkdXJhdGlvbjogNTAwLFxuXHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0fSlcdFx0XG5cdFx0YXdhaXQgYW5pbTguZmluaXNoZWRcblx0XHRjb25zdCBhbmltOSA9IHRoaXMubG9nby5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogW3dpbmRvd1cgKiAxLjAgLyAyLCB3aW5kb3dIICogMS4wIC8gMyAtIHJlbSg1MCldLCBzY2FsZTogNSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdC8vIHtwb3M6IFt3aW5kb3dXICogMS4wIC8gMiwgd2luZG93SCAqIDEuMCAvIDMgLSByZW0oNTApXSwgc2NhbGU6IDUsIG9wYWNpdHk6IDF9LFxuXHRcdFx0XHR7cG9zOiBbd2luZG93VyAqIDEuMCAvIDIsIHdpbmRvd0ggKiAxLjAgLyAzXSwgc2NhbGU6IDEsIG9wYWNpdHk6IDF9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDE3MDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcblx0XHRhd2FpdCBhbmltOS5maW5pc2hlZFx0XG5cdFx0Y29uc3QgYW5pbTEwID0gdGhpcy5sb2dvLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiB0aGlzLmxvZ28uYXR0cigncG9zJyksIHJvdGF0ZTogMH0sXG5cdFx0XHRcdHtwb3M6IFt0aGlzLmxvZ28uYXR0cigncG9zJylbMF0sIHdpbmRvd0ggLSAxMDBdLCByb3RhdGU6IDE4MDB9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDE3MDAsXG5cdFx0XHRcdGRlbGF5OiAxMDAwLFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcdFxuXHR9XG5cblx0YXN5bmMgY291bnREb3duQW5pbSAoZmdsYXllcikge1xuXHRcdGxldCBpID0gNjBcblx0XHRmZ2xheWVyLnRpbWVsaW5lLnBsYXliYWNrUmF0ZSA9IDFcblx0XHR0aGlzLnNwZWVkVXAyLm9uKCdjbGljaycsIChldnQpID0+IHtcblx0XHRcdGZnbGF5ZXIudGltZWxpbmUucGxheWJhY2tSYXRlID0gMlxuXHRcdH0pXG5cdFx0dGhpcy5zcGVlZFVwNC5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG5cdFx0XHRmZ2xheWVyLnRpbWVsaW5lLnBsYXliYWNrUmF0ZSA9IDRcblx0XHR9KVx0XHRcblx0XHR0aGlzLnNwZWVkTm9ybWFsLm9uKCdjbGljaycsIChldnQpID0+IHtcblx0XHRcdGZnbGF5ZXIudGltZWxpbmUucGxheWJhY2tSYXRlID0gMVxuXHRcdH0pXG5cdFx0dGhpcy5wYXVzZS5vbignY2xpY2snLCAoZXZ0KSA9PiB7XG5cdFx0XHRmZ2xheWVyLnRpbWVsaW5lLnBsYXliYWNrUmF0ZSA9IDBcblx0XHR9KVxuXHRcdGNvbnN0IGFuaW0xID0gdGhpcy5jb3VudERvd24uYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IFt3aW5kb3dXIC8gMiwgMF0sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbd2luZG93VyAvIDIsIDMwXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVx0XG5cdFx0Y29uc3QgYW5pbTIgPSB0aGlzLnBhdXNlLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbNDAsIDEwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFs0MCwgMzBdLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcdFxuXHRcdGNvbnN0IGFuaW0zID0gdGhpcy5zcGVlZE5vcm1hbC5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogWzgwLCAxMF0sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbODAsIDMwXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVx0XHRcdFxuXHRcdGNvbnN0IGFuaW00ID0gdGhpcy5zcGVlZFVwMi5hbmltYXRlKFtcblx0XHRcdFx0e3BvczogWzQwLCA0MF0sIG9wYWNpdHk6IDB9LFxuXHRcdFx0XHR7cG9zOiBbNDAsIDcwXSwgb3BhY2l0eTogMX1cblx0XHRcdF0se1xuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0XHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0XHR9KVx0XG5cdFx0Y29uc3QgYW5pbTUgPSB0aGlzLnNwZWVkVXA0LmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiBbODAsIDQwXSwgb3BhY2l0eTogMH0sXG5cdFx0XHRcdHtwb3M6IFs4MCwgNzBdLCBvcGFjaXR5OiAxfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcblx0XHRjb25zdCB0aW1lID0gZmdsYXllci50aW1lbGluZS5zZXRJbnRlcnZhbCgoKT0+e1xuXHRcdFx0aWYoaSA9PT0gMTUpIHtcblx0XHRcdFx0dGhpcy5mcmFtZTIoZmdsYXllcilcblx0XHRcdH1cblx0XHRcdHRoaXMuY291bnREb3duLmF0dHIoe3RleHQ6LS1pfSlcblx0XHRcdHdoaWxlKGkgPT09IDApIHtcblx0XHRcdFx0ZmdsYXllci50aW1lbGluZS5jbGVhckludGVydmFsKHRpbWUpXG5cdFx0XHRcdGZnbGF5ZXIudGltZWxpbmUucGxheWJhY2tSYXRlID0gMVxuXHRcdFx0XHR0aGlzLmxhc3RGcmFtZSgpXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdH0sMTAwMClcblxuXHR9XG5cblx0YXN5bmMgbGFzdEZyYW1lICgpIHtcblx0XHRjb25zdCBhbmltMSA9IHRoaXMucGF1c2UuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHRoaXMuY291bnREb3duLmF0dHIoJ3BvcycpLCBvcGFjaXR5OiAxfSxcblx0XHRcdFx0e3BvczogW3RoaXMuY291bnREb3duLmF0dHIoJ3BvcycpWzBdLCB0aGlzLmNvdW50RG93bi5hdHRyKCdwb3MnKVsxXSAtIDIwMF0sIG9wYWNpdHk6IDB9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFx0XG5cdFx0Y29uc3QgYW5pbTIgPSB0aGlzLnNwZWVkTm9ybWFsLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiB0aGlzLmNvdW50RG93bi5hdHRyKCdwb3MnKSwgb3BhY2l0eTogMX0sXG5cdFx0XHRcdHtwb3M6IFt0aGlzLmNvdW50RG93bi5hdHRyKCdwb3MnKVswXSwgdGhpcy5jb3VudERvd24uYXR0cigncG9zJylbMV0gLSAyMDBdLCBvcGFjaXR5OiAwfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcdFx0XG5cdFx0Y29uc3QgYW5pbTMgPSB0aGlzLnNwZWVkVXAyLmFuaW1hdGUoW1xuXHRcdFx0XHR7cG9zOiB0aGlzLmNvdW50RG93bi5hdHRyKCdwb3MnKSwgb3BhY2l0eTogMX0sXG5cdFx0XHRcdHtwb3M6IFt0aGlzLmNvdW50RG93bi5hdHRyKCdwb3MnKVswXSwgdGhpcy5jb3VudERvd24uYXR0cigncG9zJylbMV0gLSAyMDBdLCBvcGFjaXR5OiAwfVxuXHRcdFx0XSx7XG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHRcdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHRcdH0pXHRcblx0XHRjb25zdCBhbmltNCA9IHRoaXMuc3BlZWRVcDQuYW5pbWF0ZShbXG5cdFx0XHRcdHtwb3M6IHRoaXMuY291bnREb3duLmF0dHIoJ3BvcycpLCBvcGFjaXR5OiAxfSxcblx0XHRcdFx0e3BvczogW3RoaXMuY291bnREb3duLmF0dHIoJ3BvcycpWzBdLCB0aGlzLmNvdW50RG93bi5hdHRyKCdwb3MnKVsxXSAtIDIwMF0sIG9wYWNpdHk6IDB9XG5cdFx0XHRdLHtcblx0XHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdFx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdFx0fSlcdFx0XHRcdFxuXHRcdGNvbnN0IGFuaW01ID0gdGhpcy5jb3VudERvd24uYW5pbWF0ZShbXG5cdFx0XHR7cG9zOiB0aGlzLmNvdW50RG93bi5hdHRyKCdwb3MnKSwgb3BhY2l0eTogMX0sXG5cdFx0XHR7cG9zOiBbdGhpcy5jb3VudERvd24uYXR0cigncG9zJylbMF0sIC0xMDBdLCBvcGFjaXR5OiAwfVxuXHRcdF0se1xuXHRcdFx0ZHVyYXRpb246IDEwMDAsXG5cdCAgXHRcdGZpbGw6ICdmb3J3YXJkcydcblx0XHR9KVxuXHRcdGNvbnN0IGFuaW02ID0gdGhpcy5iYWxsQm9yZGVyLmFuaW1hdGUoW1xuXHRcdFx0e3BvczogdGhpcy5iYWxsQm9yZGVyLmF0dHIoJ3BvcycpLCBzY2FsZTogMX0sXG5cdFx0XHR7cG9zOiBbd2luZG93VyAqIDIuMCAvIDMsIHdpbmRvd0ggLyAzXSwgc2NhbGU6IDEuN31cblx0XHRdLHtcblx0XHRcdGR1cmF0aW9uOiAxMDAwLFxuXHQgIFx0XHRmaWxsOiAnZm9yd2FyZHMnXG5cdFx0fSlcblx0XHRjb25zdCBhbmltNyA9IHRoaXMuYXJyb3cuYW5pbWF0ZShbXG5cdFx0XHR7cG9zOiB0aGlzLmFycm93LmF0dHIoJ3BvcycpLCByb3RhdGU6IDkwfSxcblx0XHRcdHtwb3M6IFt3aW5kb3dXICogMi4wIC8gMyArIDEwLCB3aW5kb3dIIC8gMyAtIDEwXSwgc2NhbGU6IDIuMiwgcm90YXRlOiA3MjB9XG5cdFx0XSx7XG5cdFx0XHRkdXJhdGlvbjogMTAwMCxcblx0ICBcdFx0ZmlsbDogJ2ZvcndhcmRzJ1xuXHRcdH0pXHRcdFxuXHRcdGF3YWl0IGFuaW0xLmZpbmlzaGVkXHRcdFx0XHRcblx0XHRhd2FpdCBhbmltMi5maW5pc2hlZFx0XHRcdFx0XG5cdFx0YXdhaXQgYW5pbTMuZmluaXNoZWRcdFx0XHRcdFxuXHRcdGF3YWl0IGFuaW00LmZpbmlzaGVkXHRcdFx0XHRcblx0XHRhd2FpdCBhbmltNS5maW5pc2hlZFx0XHRcdFx0XG5cdFx0YXdhaXQgYW5pbTYuZmluaXNoZWRcdFx0XHRcdFxuXHRcdGF3YWl0IGFuaW03LmZpbmlzaGVkXHRcdFx0XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBHU3ByaXRlKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nU3ByaXRlLmpzIiwiaW1wb3J0IHsgcmVtLCBvZmZzZXRWYWx1ZSwgc3VtWSwgY3JlYXRlU3ByaXRlLCBjcmVhdGVMYWJlbCB9IGZyb20gJy4vdXRpbC5qcydcbmNvbnN0IFtiYXNlVywgYmFzZUhdID0gWzE4NSwzNTBdXG5cbi8vIGNvbnN0IGxvZ29VcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9sb2dvLnBuZydcbmNvbnN0IGJhbGxCZ1VybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL2JhbGxfYmcuanBnJ1xuLy8gY29uc3QgYmFsbENoaXAxVXJsID0gJ2h0dHA6Ly83eHQza3cuY29tMS56MC5nbGIuY2xvdWRkbi5jb20vYmFsbF9jaGlwMS5wbmcnXG5jb25zdCBiYWxsQ2hpcDJVcmwgPSAnaHR0cDovLzd4dDNrdy5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9iYWxsX2NoaXAyLnBuZydcbi8vIGNvbnN0IGJhbGxDaGlwM1VybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL2JhbGxfY2hpcDMucG5nJ1xuLy8gY29uc3QgYmFsbEJvcmRlclVybCA9ICdodHRwOi8vN3h0M2t3LmNvbTEuejAuZ2xiLmNsb3VkZG4uY29tL2JhbGxfYm9yZGVyLnBuZydcblxuY29uc3Qgd2luZG93VyA9IHdpbmRvdy5pbm5lcldpZHRoXG5jb25zdCB3aW5kb3dIID0gd2luZG93LmlubmVySGVpZ2h0XG5cbmNsYXNzIExhc3RQYWdlIHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHRoaXMuYmFsbEJnID0gY3JlYXRlU3ByaXRlKGJhbGxCZ1VybCwgWzQ5MCwgMzM2XSwgW3dpbmRvd1cgKiAyLjAgLyAzLCB3aW5kb3dIIC8gM10sIFswLjUsIDAuNV0pXG5cdFx0Ly8gdGhpcy5sb2dvID0gY3JlYXRlU3ByaXRlKGxvZ29VcmwsIFsyNDcsIDk1XSwgW3dpbmRvd1cgLyAyLCB3aW5kb3dIIC0gMTAwXSwgWzAuNSwgMC41XSlcblx0XHQvLyB0aGlzLmJhbGxDaGlwMSA9IGNyZWF0ZVNwcml0ZShiYWxsQ2hpcDFVcmwsIFs0MCwgNDBdLCBbd2luZG93VyAqIDIuMCAvIDMsIHdpbmRvd0ggLyAzXSwgWzAuNSwgMC41XSlcblx0XHR0aGlzLmJhbGxDaGlwMiA9IGNyZWF0ZVNwcml0ZShiYWxsQ2hpcDJVcmwsIFszNDIsIDMzMF0sIFt3aW5kb3dXICogMi4wIC8gMyAsIHdpbmRvd0ggLyAzIC0gMTVdLCBbMC41LCAwLjVdKVxuXHRcdC8vIHRoaXMuYmFsbENoaXAzID0gY3JlYXRlU3ByaXRlKGJhbGxDaGlwM1VybCwgWzI4MCwgMTQ4XSwgW3dpbmRvd1cgKiAyLjAgLyAzLCB3aW5kb3dIIC8gM10sIFswLjUsIDAuNV0pXG5cdH1cblxuXHRyZW5kZXIgKGJnbGF5ZXIpIHtcblx0XHRiZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMuYmFsbEJnKVxuXHRcdC8vIGJnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy5sb2dvKVxuXHRcdC8vIGJnbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy5iYWxsQ2hpcDEpXG5cdFx0YmdsYXllci5hcHBlbmRDaGlsZCh0aGlzLmJhbGxDaGlwMilcblx0XHQvLyBiZ2xheWVyLmFwcGVuZENoaWxkKHRoaXMuYmFsbENoaXAzKVxuXHRcdHRoaXMuZnJhbWUxKClcblx0fVxuXG5cdGFzeW5jIGZyYW1lMSAoKSB7XG5cdFx0dGhpcy5iYWxsQ2hpcDIuYW5pbWF0ZShbXG5cdFx0ICAgIHtyb3RhdGU6IDB9LFxuXHRcdCAgICB7cm90YXRlOiAzNjB9LFxuXHRcdCAgXSwge1xuXHRcdCAgICBkdXJhdGlvbjogMTAwMDAsXG5cdFx0ICAgIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuXHRcdCAgfSlcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IExhc3RQYWdlKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXN0cGFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=