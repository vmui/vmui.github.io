(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["this"] = factory();
	else
		root["this"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 157);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = exports.Util = exports.Dom = undefined;

var _dom = __webpack_require__(162);

var _dom2 = _interopRequireDefault(_dom);

var _util = __webpack_require__(31);

var _util2 = _interopRequireDefault(_util);

var _event = __webpack_require__(163);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Dom: _dom2.default,
    Util: _util2.default,
    Event: _event2.default
};
exports.Dom = _dom2.default;
exports.Util = _util2.default;
exports.Event = _event2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(20)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overlay = __webpack_require__(181);

var _overlay2 = _interopRequireDefault(_overlay);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_overlay2.default);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global = global || self, global.Vue = factory());
})(undefined, function () {
  'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' ||
    // $flow-disable-line
    (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol' || typeof value === 'boolean';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  function isPromise(val) {
    return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }

    boundFn._length = fn.length;
    return boundFn;
  }

  function nativeBind(fn, ctx) {
    return fn.bind(ctx);
  }

  var bind = Function.prototype.bind ? nativeBind : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop(a, b, c) {}

  /**
   * Always return false.
   */
  var no = function no(a, b, c) {
    return false;
  };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime();
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = {}.watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/function () {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check
  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) {
        return a.id - b.id;
      });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode) {
    var cloned = new VNode(vnode.tag, vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned;
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving(value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1(obj, key, val, customSetter, shallow) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) {
          return;
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if (isUndef(target) || isPrimitive(target)) {
      warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;

    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') {
        continue;
      }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

        return parentVal;
      }
      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
    return res ? dedupeHooks(res) : res;
  }

  function dedupeHooks(hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) {
      extend(ret, childVal);
    }
    return ret;
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject) {
      return;
    }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isSameType(a, b) {
    return getType(a) === getType(b);
  }

  function getTypeIndex(type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i;
      }
    }
    return -1;
  }

  function getInvalidTypeMessage(name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message;
  }

  function styleValue(value, type) {
    if (type === 'String') {
      return "\"" + value + "\"";
    } else if (type === 'Number') {
      return "" + Number(value);
    } else {
      return "" + value;
    }
  }

  function isExplicable(value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) {
      return value.toLowerCase() === elem;
    });
  }

  function isBoolean() {
    var args = [],
        len = arguments.length;
    while (len--) {
      args[len] = arguments[len];
    }return args.some(function (elem) {
      return elem.toLowerCase() === 'boolean';
    });
  }

  /*  */

  function handleError(err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while (cur = cur.$parent) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) {
                  return;
                }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling(handler, context, args, vm, info) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) {
          return handleError(e, vm, info + " (Promise/async)");
        });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res;
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function timerFunc() {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function timerFunc() {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function timerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var warnReservedPrefix = function warnReservedPrefix(target, key) {
      warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals' + 'See: https://vuejs.org/v2/api/#data', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);
        if (!has && !isAllowed) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) {
            warnReservedPrefix(target, key);
          } else {
            warnNonPresent(target, key);
          }
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns, vm) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') {
          continue;
        }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }
      return result;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    if (!children || !children.length) {
      return {};
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }

  /*  */

  function normalizeScopedSlots(slots, normalSlots, prevSlots) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized;
    } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots;
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      slots._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res;
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function normalized() {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && (typeof res === 'undefined' ? 'undefined' : _typeof(res)) === 'object' && !Array.isArray(res) ? [res] // single vnode
      : normalizeChildren(res);
      return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
      ) ? undefined : res;
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized;
  }

  function proxyNormalSlot(slots, key) {
    return function () {
      return slots[key];
    };
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    ret._isVList = true;
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes);
    } else {
      return nodes;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  function isKeyNotMatch(expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1;
    } else {
      return expect !== actual;
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName);
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode);
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree;
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data;
  }

  /*  */

  function resolveScopedSlots(fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys, contentHashKey) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      res.$key = contentHashKey;
    }
    return res;
  }

  /*  */

  function bindDynamicKeys(baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
      }
    }
    return baseObj;
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier(value, symbol) {
    return typeof value === 'string' ? symbol + value : value;
  }

  /*  */

  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
      }
      return this$1.$slots;
    };

    Object.defineProperty(this, 'scopedSlots', {
      enumerable: true,
      get: function get() {
        return normalizeScopedSlots(data.scopedSlots, this.slots());
      }
    });

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res;
    }
  }

  function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating) {
      if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
  }

  function installComponentHooks(data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1(f1, f2) {
    var merged = function merged(a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged;
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode;
    } else if (isDef(vnode)) {
      if (isDef(ns)) {
        applyNS(vnode, ns);
      }
      if (isDef(data)) {
        registerDeepBindings(data);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings(data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };
  }

  /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null;owner.$on('hook:destroyed', function () {
        return remove(owners, owner);
      });

      var forceRender = function forceRender(renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          owners[i].$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn) {
    target.$on(event, fn);
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler(event, fn) {
    var _target = target;
    return function onceHandler() {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    };
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (!fn) {
        vm._events[event] = null;
        return vm;
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm;
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    };
  }

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key);

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot);

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function getNow() {
        return performance.now();
      };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return;
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }toggleObserving(true);
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }
      if (props && hasOwn(props, key)) {
        warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function createGetterInvoker(fn) {
    return function computedGetter() {
      return fn.call(this, this);
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn("Method \"" + key + "\" has type \"" + _typeof(methods[key]) + "\" in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }
        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function () {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
        }
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = latest[key];
      }
    }
    return modified;
  }

  function Vue(options) {
    if (!(this instanceof Vue)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed() {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted() {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) {
          return matches(val, name);
        });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) {
          return !matches(val, name);
        });
      });
    },

    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
        // not included
        include && (!name || !matches(include, name)) ||
        // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || slot && slot[0];
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj;
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.10';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function convertEnumeratedValue(key, value) {
    return isFalsyAttrValue(value) || value === 'false' ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
  };

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove$$1() {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;

    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }

        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false;
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm));

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr(el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
        var blocker = function blocker(e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args);
    }
  }

  /*  */

  /* eslint-disable no-unused-vars */
  function baseWarn(msg, range) {
    console.error("[Vue compiler]: " + msg);
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr(el, name, value, range, dynamic) {
    var attrs = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr(el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker(symbol, name, dynamic) {
    return dynamic ? "_p(" + name + ",\"" + symbol + "\")" : symbol + name; // mark the event as captured
  }

  function addHandler(el, name, value, modifiers, important, warn, range, dynamic) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.', range);
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr(el, name) {
    return el.rawAttrsMap[':' + name] || el.rawAttrsMap['v-bind:' + name] || el.rawAttrsMap[name];
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val;
  }

  function getAndRemoveAttrByRegex(el, name) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr;
      }
    }
  }

  function rangeSetItem(item, range) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: JSON.stringify(value),
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;

  function parseModel(val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.", el.rawAttrsMap['v-model']);
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', el.rawAttrsMap['v-model']);
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + genAssignmentCode(value, '$$a.concat([$$v])') + ")}" + "else{$$i>-1&&(" + genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))') + ")}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1(event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler() {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1(name, handler, capture, passive) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document) {
          return original.apply(this, arguments);
        }
      };
    }
    target$1.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(name, handler, capture, _target) {
    (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition(def$$1) {
    if (!def$$1) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res;
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var isNotTextNode = function isNotTextNode(c) {
    return c.tag || isAsyncPlaceholder(c);
  };

  var isVShowDirective = function isVShowDirective(d) {
    return d.name === 'show';
  };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if (children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount() {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (e && e.target !== el) {
              return;
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
        }
      }
      if (config.productionTip !== false && typeof console !== 'undefined') {
        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    };
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap['class']);
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap['style']);
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }
  };

  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"", { start: index + html.length });
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.", { start: stack[i].start, end: stack[i].end });
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    };
  }

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function maybeComponent(el) {
      return !!el.component || !isReservedTag(el.tag);
    };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement(element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", { start: element.start });
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) {
        return !c.slotScope;
      });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace(el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === ' ') {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints(el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.', { start: el.start });
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.', el.rawAttrsMap['v-for']);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start(tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated;
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              });
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.', { start: element.start });
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end(tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars(text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.', { start: start });
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.", { start: start });
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment(text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element;
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, 'key'));
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", getRawBindingAttr(el, 'key'), true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap['v-for']);
      }
    }
  }

  function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      return;
    }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res;
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']);
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if (children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.", children[i]);
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent(el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", el.rawAttrsMap['scope'], true);
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", el.rawAttrsMap['slot-scope'], true);
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2("<template v-slot> can only appear at the root level inside " + "the receiving the component", el);
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
            }
            if (el.slotScope || el.slotTarget) {
              warn$2("Unexpected mixed usage of different slot syntaxes.", el);
            }
            if (el.scopedSlots) {
              warn$2("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", slotBinding$1);
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true;
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName(binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2("v-slot shorthand syntax requires a slot name.", binding);
      }
    }
    return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true
      // static name
    } : { name: "\"" + name + "\"", dynamic: false };
  }

  // handle <slot/> outlets
  function processSlotOutlet(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", getRawBindingAttr(el, 'key'));
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (value.trim().length === 0) {
            warn$2("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"");
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                }
              } else {
                // handler w/ dynamic event name
                addHandler(el, "\"update:\"+(" + name + ")", syncGen, null, false, warn$2, list[i], true // dynamic
                );
              }
            }
          }
          if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", el.rawAttrsMap['v-model']);
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return;
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + map['v-bind'] + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [klass$1, style$1, model$1];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")", dir);
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")", dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
    } else {
      return prefix + staticHandlers;
    }
  }

  function genHandler(handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value;
      }
      return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? "return " + handler.value + "($event)" : isFunctionExpression ? "return (" + handler.value + ")($event)" : isFunctionInvocation ? "return " + handler.value : handler.value;
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join('&&') + ")return null;"
    );
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + "," + "$event.key," + "" + JSON.stringify(keyName) + ")";
  }

  /*  */

  function on(el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */

  var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) {
      return !!el.component || !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || el.pre && state.maybeComponent(el)) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    state.pre = originalPreState;
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap['v-once']);
        return genElement(el, state);
      }
      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if (state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", el.rawAttrsMap['v-for'], true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + genProps(el.attrs) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + genProps(el.props) + ",";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el, el.scopedSlots, state) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + el.tag + "\"," + genProps(el.dynamicAttrs) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : "\"" + dir.arg + "\"") : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn('Inline-template components must have exactly one child element.', { start: el.start });
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(el, slots, state) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      ;
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
          needsForceUpdate = true;
          break;
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots).map(function (key) {
      return genScopedSlot(slots[key], state);
    }).join(',');

    return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while (i) {
      hash = hash * 33 ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
  }

  function containsSlotChild(el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true;
      }
      return el.children.some(containsSlotChild);
    }
    return false;
  }

  function genScopedSlot(el, state) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null");
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot);
    }
    var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
    var fn = "function(" + slotScope + "){" + "return " + (el.tag === 'template' ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return "{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}";
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
        return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
      }
      var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType$1 ? "," + normalizationType$1 : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    } else if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + JSON.stringify(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) {
      return {
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      };
    })) : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += prop.name + "," + value + ",";
      } else {
        staticProps += "\"" + prop.name + "\":" + value + ",";
      }
    }
    staticProps = "{" + staticProps.slice(0, -1) + "}";
    if (dynamicProps) {
      return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
    } else {
      return staticProps;
    }
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode(node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", warn, range);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent(exp, text, warn, range) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim(), range);
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor(node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier(ident, type, text, warn, range) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        warn("invalid " + type + " \"" + ident + "\" in expression: " + text.trim(), range);
      }
    }
  }

  function checkExpression(exp, text, warn, range) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim(), range);
      } else {
        warn("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n", range);
      }
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame(source, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) {
            continue;
          }
          res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join('\n');
  }

  function repeat$1(str, n) {
    var result = '';
    if (n > 0) {
      while (true) {
        // eslint-disable-line
        if (n & 1) {
          result += str;
        }
        n >>>= 1;
        if (n <= 0) {
          break;
        }
        str += str;
      }
    }
    return result;
  }

  /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);

    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
            });
          } else {
            warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
              return "- " + e;
            }).join('\n') + '\n', vm);
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) {
              return tip(e.msg, vm);
            });
          } else {
            compiled.tips.forEach(function (msg) {
              return tip(msg, vm);
            });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return cache[key] = res;
    };
  }

  /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function warn(msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function warn(msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(13).setImmediate))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mask = __webpack_require__(206);

var _mask2 = _interopRequireDefault(_mask);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_mask2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Multiable = exports.Single = undefined;

var _helper = __webpack_require__(1);

var Single = exports.Single = {
    props: {
        label: {
            type: String,
            default: null
        },

        name: {
            type: String,
            default: function _default() {
                return String(Date.now());
            }
        },

        value: null
    },

    data: function data() {
        return {
            val: this.value
        };
    },


    watch: {
        val: function val(v) {
            this.$emit('input', v);
        },
        value: function value(v) {
            this.val = v;
        }
    }
};

var Multiable = exports.Multiable = {
    props: _helper.Util.assign(Single, {
        size: {
            type: Number,
            default: -1
        },

        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    }),

    data: function data() {
        return {
            val: _helper.Util.makeArray(this.value),
            multiable: this.size != 1
        };
    },


    watch: {
        val: function val(v) {
            this.$emit('input', !this.multiable ? v[0] : v);
        },
        value: function value(v) {
            this.val = _helper.Util.makeArray(v);
        }
    },

    methods: {
        save: function save(v) {
            var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            v = _helper.Util.makeArray(v);

            if (this.size == 1) {
                merge = false;
            }

            if (!merge) {
                this.val = v;
            } else {
                this.val = this.val.concat(v);
            }
        },
        del: function del(index) {
            if (index == null) {
                this.val = [];
            } else {
                this.val.splice(index, 1);
            }
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pulldown2refresh = exports.Scroll = undefined;

var _scroll = __webpack_require__(30);

var _scroll2 = _interopRequireDefault(_scroll);

var _pulldown2refresh = __webpack_require__(166);

var _pulldown2refresh2 = _interopRequireDefault(_pulldown2refresh);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scroll = _helper.Util.register(_scroll2.default);
var Pulldown2refresh = _helper.Util.register(_pulldown2refresh2.default);

exports.default = Scroll;
exports.Scroll = Scroll;
exports.Pulldown2refresh = Pulldown2refresh;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(262),
  /* template */
  __webpack_require__(267),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\cell.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cell.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-831127ce", Component.options)
  } else {
    hotAPI.reload("data-v-831127ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(14);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(10)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(194),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\icon\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-770e66a0", Component.options)
  } else {
    hotAPI.reload("data-v-770e66a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url;
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
    }

    return url;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(271)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(273),
  /* template */
  __webpack_require__(274),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\text.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] text.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d536b38", Component.options)
  } else {
    hotAPI.reload("data-v-8d536b38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(310)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(312),
  /* template */
  __webpack_require__(313),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\filter\\single.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] single.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb62f7ea", Component.options)
  } else {
    hotAPI.reload("data-v-fb62f7ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autosize = __webpack_require__(161);

var _autosize2 = _interopRequireDefault(_autosize);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_autosize2.default, true);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draggable = __webpack_require__(164);

var _draggable2 = _interopRequireDefault(_draggable);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_draggable2.default, true);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;

var type;
try {
  type = __webpack_require__(34);
} catch (ex) {
  //hide from browserify
  var r = require;
  type = __webpack_require__(34);
}

var jsonpID = 0,
    document = window.document,
    key,
    name,
    rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    scriptTypeRE = /^(?:text|application)\/javascript/i,
    xmlTypeRE = /^(?:text|application)\/xml/i,
    jsonType = 'application/json',
    htmlType = 'text/html',
    blankRE = /^\s*$/;

var ajax = module.exports = function (options) {
  var settings = extend({}, options || {});
  for (key in ajax.settings) {
    if (settings[key] === undefined) settings[key] = ajax.settings[key];
  }ajaxStart(settings);

  if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;

  var dataType = settings.dataType,
      hasPlaceholder = /=\?/.test(settings.url);
  if (dataType == 'jsonp' || hasPlaceholder) {
    if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?');
    return ajax.JSONP(settings);
  }

  if (!settings.url) settings.url = window.location.toString();
  serializeData(settings);

  var mime = settings.accepts[dataType],
      baseHeaders = {},
      protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
      xhr = ajax.settings.xhr(),
      abortTimeout;

  if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest';
  if (mime) {
    baseHeaders['Accept'] = mime;
    if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
    xhr.overrideMimeType && xhr.overrideMimeType(mime);
  }
  if (settings.contentType || settings.data && settings.type.toUpperCase() != 'GET') baseHeaders['Content-Type'] = settings.contentType || 'application/x-www-form-urlencoded';
  settings.headers = extend(baseHeaders, settings.headers || {});

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      clearTimeout(abortTimeout);
      var result,
          error = false;
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
        dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'));
        result = xhr.responseText;

        try {
          if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : JSON.parse(result);
        } catch (e) {
          error = e;
        }

        if (error) ajaxError(error, 'parsererror', xhr, settings);else ajaxSuccess(result, xhr, settings);
      } else {
        ajaxError(null, 'error', xhr, settings);
      }
    }
  };

  var async = 'async' in settings ? settings.async : true;
  xhr.open(settings.type, settings.url, async);

  for (name in settings.headers) {
    xhr.setRequestHeader(name, settings.headers[name]);
  }if (ajaxBeforeSend(xhr, settings) === false) {
    xhr.abort();
    return false;
  }

  if (settings.timeout > 0) abortTimeout = setTimeout(function () {
    xhr.onreadystatechange = empty;
    xhr.abort();
    ajaxError(null, 'timeout', xhr, settings);
  }, settings.timeout);

  // avoid sending empty string (#319)
  xhr.send(settings.data ? settings.data : null);
  return xhr;
};

// trigger a custom event and return false if it was cancelled
function triggerAndReturn(context, eventName, data) {
  //todo: Fire off some events
  //var event = $.Event(eventName)
  //$(context).trigger(event, data)
  return true; //!event.defaultPrevented
}

// trigger an Ajax "global" event
function triggerGlobal(settings, context, eventName, data) {
  if (settings.global) return triggerAndReturn(context || document, eventName, data);
}

// Number of active Ajax requests
ajax.active = 0;

function ajaxStart(settings) {
  if (settings.global && ajax.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
}
function ajaxStop(settings) {
  if (settings.global && ! --ajax.active) triggerGlobal(settings, null, 'ajaxStop');
}

// triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
function ajaxBeforeSend(xhr, settings) {
  var context = settings.context;
  if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

  triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
}
function ajaxSuccess(data, xhr, settings) {
  var context = settings.context,
      status = 'success';
  settings.success.call(context, data, status, xhr);
  triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
  ajaxComplete(status, xhr, settings);
}
// type: "timeout", "error", "abort", "parsererror"
function ajaxError(error, type, xhr, settings) {
  var context = settings.context;
  settings.error.call(context, xhr, type, error);
  triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error]);
  ajaxComplete(type, xhr, settings);
}
// status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
function ajaxComplete(status, xhr, settings) {
  var context = settings.context;
  settings.complete.call(context, xhr, status);
  triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
  ajaxStop(settings);
}

// Empty function, used as default callback
function empty() {}

ajax.JSONP = function (options) {
  if (!('type' in options)) return ajax(options);

  var callbackName = 'jsonp' + ++jsonpID,
      script = document.createElement('script'),
      abort = function abort() {
    //todo: remove script
    //$(script).remove()
    if (callbackName in window) window[callbackName] = empty;
    ajaxComplete('abort', xhr, options);
  },
      xhr = { abort: abort },
      abortTimeout,
      head = document.getElementsByTagName("head")[0] || document.documentElement;

  if (options.error) script.onerror = function () {
    xhr.abort();
    options.error();
  };

  window[callbackName] = function (data) {
    clearTimeout(abortTimeout);
    //todo: remove script
    //$(script).remove()
    delete window[callbackName];
    ajaxSuccess(data, xhr, options);
  };

  serializeData(options);
  script.src = options.url.replace(/=\?/, '=' + callbackName);

  // Use insertBefore instead of appendChild to circumvent an IE6 bug.
  // This arises when a base node is used (see jQuery bugs #2709 and #4378).
  head.insertBefore(script, head.firstChild);

  if (options.timeout > 0) abortTimeout = setTimeout(function () {
    xhr.abort();
    ajaxComplete('timeout', xhr, options);
  }, options.timeout);

  return xhr;
};

ajax.settings = {
  // Default type of request
  type: 'GET',
  // Callback that is executed before request
  beforeSend: empty,
  // Callback that is executed if the request succeeds
  success: empty,
  // Callback that is executed the the server drops error
  error: empty,
  // Callback that is executed on request complete (both: error and success)
  complete: empty,
  // The context for the callbacks
  context: null,
  // Whether to trigger "global" Ajax events
  global: true,
  // Transport
  xhr: function xhr() {
    return new window.XMLHttpRequest();
  },
  // MIME types mapping
  accepts: {
    script: 'text/javascript, application/javascript',
    json: jsonType,
    xml: 'application/xml, text/xml',
    html: htmlType,
    text: 'text/plain'
  },
  // Whether the request is to another domain
  crossDomain: false,
  // Default timeout
  timeout: 0
};

function mimeToDataType(mime) {
  return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
}

function appendQuery(url, query) {
  return (url + '&' + query).replace(/[&?]{1,2}/, '?');
}

// serialize payload and append it to the URL for GET requests
function serializeData(options) {
  if (type(options.data) === 'object') options.data = param(options.data);
  if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data);
}

ajax.get = function (url, success) {
  return ajax({ url: url, success: success });
};

ajax.post = function (url, data, success, dataType) {
  if (type(data) === 'function') dataType = dataType || success, success = data, data = null;
  return ajax({ type: 'POST', url: url, data: data, success: success, dataType: dataType });
};

ajax.getJSON = function (url, success) {
  return ajax({ url: url, success: success, dataType: 'json' });
};

var escape = encodeURIComponent;

function serialize(params, obj, traditional, scope) {
  var array = type(obj) === 'array';
  for (var key in obj) {
    var value = obj[key];

    if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']';
    // handle data in serializeArray() format
    if (!scope && array) params.add(value.name, value.value);
    // recurse into nested objects
    else if (traditional ? type(value) === 'array' : type(value) === 'object') serialize(params, value, traditional, key);else params.add(key, value);
  }
}

function param(obj, traditional) {
  var params = [];
  params.add = function (k, v) {
    this.push(escape(k) + '=' + escape(v));
  };
  serialize(params, obj, traditional);
  return params.join('&').replace('%20', '+');
}

function extend(target) {
  var slice = Array.prototype.slice;
  slice.call(arguments, 1).forEach(function (source) {
    for (key in source) {
      if (source[key] !== undefined) target[key] = source[key];
    }
  });
  return target;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _topbar = __webpack_require__(187);

var _topbar2 = _interopRequireDefault(_topbar);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_topbar2.default);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(17);
exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\n@font-face {font-family: \"vm-iconfont\";\r\n  src: url(" + escape(__webpack_require__(192)) + ") format('truetype'), \r\n  url(" + escape(__webpack_require__(193)) + "#iconfont) format('svg'); /* iOS 4.1- */\r\n}\r\n\r\n\r\n.vm-iconfont {\r\n  display: inline-block;\r\n  font-family:\"vm-iconfont\" !important;\r\n  font-size:16px;\r\n  font-style:normal;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.vm-icon-down:before { content: \"\\E68A\"; }\r\n.vm-icon-search:before { content: \"\\E68B\"; }\r\n.vm-icon-selected:before { content: \"\\E68C\"; }\r\n.vm-icon-success:before { content: \"\\E68D\"; }\r\n.vm-icon-unsuccess:before { content: \"\\E68E\"; }\r\n.vm-icon-close:before { content: \"\\E699\"; }\r\n.vm-icon-right:before { content: \"\\E69C\"; }\r\n.vm-icon-left:before { content: \"\\E69D\"; }\r\n.vm-icon-up:before { content: \"\\E69E\"; }", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toast = __webpack_require__(212);

var _toast2 = _interopRequireDefault(_toast);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = null;var timeid;

var Toast = function Toast(content) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
    var mask = arguments[2];
    var className = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    Toast.destroy(false);

    instance = _helper.Util.factory(_toast2.default, {
        content: content,
        mask: mask,
        iconClass: className
    });

    if (time) {
        timeid = setTimeout(Toast.destroy, time);
    }

    return instance;
};

Toast.destroy = function () {
    var fx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (timeid) {
        clearTimeout(timeid);
        timeid = null;
    }

    if (instance) {
        instance.destroy(fx);
        instance = null;
    }
};

['success', 'loading'].forEach(function (method) {
    Toast[method] = function (content, time, mask) {
        return Toast(content, time, mask, 'vm-toast-' + method);
    };
});

Toast.Component = _toast2.default;
exports.default = _helper.Util.register(Toast);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forward = __webpack_require__(282);

var _forward2 = _interopRequireDefault(_forward);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_forward2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iosselect = __webpack_require__(287);

var _iosselect2 = _interopRequireDefault(_iosselect);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by bll on 2017/7/11.
 */
exports.default = _helper.Util.register(_iosselect2.default);

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(158)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(165),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\scroll\\scroll.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scroll.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-283d099b", Component.options)
  } else {
    hotAPI.reload("data-v-283d099b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    l2camel: function l2camel(str) {
        return str.replace(/-(\w)/g, function (all, c, index) {
            return index > 0 ? c.toUpperCase() : c;
        });
    },
    assign: function assign(obj) {
        [].slice.call(arguments, 1).forEach(function (args) {
            for (var i in args) {
                obj[i] = args[i];
            }
        });

        return obj;
    },
    each: function each(arr, callback) {
        if (arr.length) {
            [].forEach.call(arr, callback);
        } else {
            for (var i in arr) {
                callback(arr[i], i);
            }
        }
    },
    rfa: function rfa(callback) {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        })(callback);
    },
    crfa: function crfa(id) {
        return id && (window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout)(id);
    },
    makeArray: function makeArray(arr) {
        if (Array.isArray(arr)) {
            return arr;
        }

        return arr == null ? [] : [arr];
    },
    log: function log() {
        var str = JSON.stringify(arguments);
        var container = document.querySelector('#__log__');

        if (!container) {
            container = document.createElement('div');
            container.id = '__log__';
            container.style.cssText = 'position: fixed; bottom: 0px; width: 100%; background: #ccc; z-index: 10000; overflow: hidden; max-height: 200px;';
            document.body.appendChild(container);
        }

        container.innerHTML = container.innerHTML + '<br />' + str;
        setTimeout(function () {
            container.scrollTop = 100000000;
        }, 0);
    },
    firstKey: function firstKey(obj) {
        for (var i in obj) {
            return i;
        }

        return false;
    },
    observer: function observer(target) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var callback = arguments[2];

        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var observer = new MutationObserver(callback);

        observer.observe(target, config);
        return observer;
    },
    register: function register(obj) {
        var directive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var Component = directive ? obj : obj.Component || obj;

        function install(Vue) {
            if (install._installed) return;

            install._installed = true;
            console.log(Component.name, Component);
            if (directive) {
                Vue.directive(Component.name, obj);
            } else {
                Vue.component('vm-' + Component.name, Component);
            }
        }

        if (window.Vue) {
            install(window.Vue);
        } else {
            obj.install = Component.install = install;
        }

        return obj;
    },
    factory: function factory(options) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

        var klass = _vue2.default.extend(options);
        var instance = new klass({
            propsData: data
        });

        instance.$mount();
        container.appendChild(instance.$el);
        return instance;
    },
    defineConfig: function defineConfig(obj) {
        var _this = this;

        var _default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        obj._config = _default;
        obj.config = function (name, value) {
            if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) == 'object') {
                _this.assign(obj._config, name);
            } else if (value == void 0) {
                return obj._config[name];
            } else {
                obj._config[name] = value;
            }
        };
    }
};


!Object.assign && (Object.assign = exports.default.assign);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = __webpack_require__(171);

var _list2 = _interopRequireDefault(_list);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_list2.default);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toString = Object.prototype.toString;

module.exports = function (val) {
  switch (toString.call(val)) {
    case '[object Function]':
      return 'function';
    case '[object Date]':
      return 'date';
    case '[object RegExp]':
      return 'regexp';
    case '[object Arguments]':
      return 'arguments';
    case '[object Array]':
      return 'array';
    case '[object String]':
      return 'string';
  }

  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && val && typeof val.length == 'number') {
    try {
      if (typeof val.callee == 'function') return 'arguments';
    } catch (ex) {
      if (ex instanceof TypeError) {
        return 'arguments';
      }
    }
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val && val.nodeType === 1) return 'element';
  if (val === Object(val)) return 'object';

  return typeof val === 'undefined' ? 'undefined' : _typeof(val);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _page = __webpack_require__(177);

var _page2 = _interopRequireDefault(_page);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_page2.default);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(196);

var _button2 = _interopRequireDefault(_button);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_button2.default);
exports.default = _button2.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(229)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(231),
  /* template */
  __webpack_require__(232),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\dropdown\\box.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] box.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-161a9631", Component.options)
  } else {
    hotAPI.reload("data-v-161a9631", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchbar = __webpack_require__(245);

var _searchbar2 = _interopRequireDefault(_searchbar);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_searchbar2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uploader = __webpack_require__(251);

var _uploader2 = _interopRequireDefault(_uploader);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_uploader2.default);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(257)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(259),
  /* template */
  __webpack_require__(268),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\radios.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radios.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3255062", Component.options)
  } else {
    hotAPI.reload("data-v-e3255062", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(263)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(265),
  /* template */
  __webpack_require__(266),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\layout\\row.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] row.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ca7b84e", Component.options)
  } else {
    hotAPI.reload("data-v-9ca7b84e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datepicker = __webpack_require__(305);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by bll on 2017/7/11.
 */
exports.default = _helper.Util.register(_datepicker2.default);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(314)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(316),
  /* template */
  __webpack_require__(317),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\filter\\multiple.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] multiple.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b30e313", Component.options)
  } else {
    hotAPI.reload("data-v-0b30e313", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(318)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(321),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\filter\\link.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] link.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc705506", Component.options)
  } else {
    hotAPI.reload("data-v-dc705506", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SliderItem = exports.Slider = undefined;

var _slider = __webpack_require__(327);

var _slider2 = _interopRequireDefault(_slider);

var _item = __webpack_require__(332);

var _item2 = _interopRequireDefault(_item);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_slider2.default);
_helper.Util.register(_item2.default);

exports.default = _slider2.default;
exports.Slider = _slider2.default;
exports.SliderItem = _item2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = __webpack_require__(351);

var _badge2 = _interopRequireDefault(_badge);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_badge2.default);

exports.default = _badge2.default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lazyload = __webpack_require__(362);

var _lazyload2 = _interopRequireDefault(_lazyload);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_lazyload2.default, true);

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lightbox = exports.Lazyload = exports.SliderItem = exports.Slider = exports.Datepicker = exports.Iosselect = exports.Helper = exports.Overlay = exports.Mask = exports.Autosize = exports.LinkMultipleFilter = exports.LinkFilter = exports.MultipleFilter = exports.SingleFilter = exports.FormCell = exports.Images = exports.Switch = exports.Select = exports.Textarea = exports.Dateinput = exports.DateInput = exports.Textinput = exports.TextInput = exports.Checkboxes = exports.Radios = exports.Uploader = exports.Popover = exports.Draggable = exports.Dropdown = exports.ActionSheet = exports.Toast = exports.Button = exports.Alert = exports.List = exports.Topbar = exports.Page = exports.Pulldown2refresh = exports.Scroll = exports.Tabbar = exports.TabBar = exports.SearchBar = exports.Searchbar = exports.Search = exports.Badge = exports.Forward = exports.Row = exports.Segment = exports.Box = undefined;

var _scroll = __webpack_require__(11);

var _list = __webpack_require__(33);

var _list2 = _interopRequireDefault(_list);

var _page = __webpack_require__(35);

var _page2 = _interopRequireDefault(_page);

var _topbar = __webpack_require__(24);

var _topbar2 = _interopRequireDefault(_topbar);

var _button = __webpack_require__(36);

var _button2 = _interopRequireDefault(_button);

var _alert = __webpack_require__(201);

var _alert2 = _interopRequireDefault(_alert);

var _toast = __webpack_require__(26);

var _toast2 = _interopRequireDefault(_toast);

var _actionsheet = __webpack_require__(218);

var _actionsheet2 = _interopRequireDefault(_actionsheet);

var _dropdown = __webpack_require__(224);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _draggable = __webpack_require__(22);

var _draggable2 = _interopRequireDefault(_draggable);

var _popover = __webpack_require__(234);

var _popover2 = _interopRequireDefault(_popover);

var _search = __webpack_require__(240);

var _search2 = _interopRequireDefault(_search);

var _searchbar = __webpack_require__(38);

var _searchbar2 = _interopRequireDefault(_searchbar);

var _uploader = __webpack_require__(39);

var _uploader2 = _interopRequireDefault(_uploader);

var _form = __webpack_require__(256);

var _filter = __webpack_require__(309);

var _autosize = __webpack_require__(21);

var _autosize2 = _interopRequireDefault(_autosize);

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

var _iosselect = __webpack_require__(28);

var _iosselect2 = _interopRequireDefault(_iosselect);

var _datepicker = __webpack_require__(42);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _slider = __webpack_require__(45);

var _forward = __webpack_require__(27);

var _forward2 = _interopRequireDefault(_forward);

var _tabbar = __webpack_require__(337);

var _tabbar2 = _interopRequireDefault(_tabbar);

var _layout = __webpack_require__(343);

var _badge = __webpack_require__(349);

var _badge2 = _interopRequireDefault(_badge);

var _segment = __webpack_require__(356);

var _segment2 = _interopRequireDefault(_segment);

var _badge3 = __webpack_require__(46);

var _badge4 = _interopRequireDefault(_badge3);

var _helper = __webpack_require__(1);

var _helper2 = _interopRequireDefault(_helper);

var _lazyload = __webpack_require__(47);

var _lazyload2 = _interopRequireDefault(_lazyload);

var _lightbox = __webpack_require__(363);

var _lightbox2 = _interopRequireDefault(_lightbox);

var _config = __webpack_require__(371);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Components = [_segment2.default, _layout.Box, _layout.Row, _badge2.default, _badge4.default, _forward2.default, _tabbar2.default, _scroll.Scroll, _scroll.Pulldown2refresh, _list2.default, _page2.default, _topbar2.default, _button2.default, _alert2.default, _toast2.default, _actionsheet2.default, _dropdown2.default, _draggable2.default, _popover2.default, _searchbar2.default, _search2.default, _uploader2.default, _form.Radios, _form.Checkboxes, _form.TextInput, _form.DateInput, _form.Textarea, _form.Select, _form.Images, _form.FormCell, _form.Switch, _form.FormCell, _autosize2.default, _mask2.default, _overlay2.default, _iosselect2.default, _datepicker2.default, _slider.Slider, _slider.SliderItem, _lazyload2.default, _lightbox2.default];

function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var Component = _step.value;

            console.log(Component);
            Component.install(Vue);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    (0, _config2.default)(options);
}

exports.Box = _layout.Box;
exports.Segment = _segment2.default;
exports.Row = _layout.Row;
exports.Forward = _forward2.default;
exports.Badge = _badge2.default;
exports.Search = _search2.default;
exports.Searchbar = _searchbar2.default;
exports.SearchBar = _searchbar2.default;
exports.TabBar = _tabbar2.default;
exports.Tabbar = _tabbar2.default;
exports.Scroll = _scroll.Scroll;
exports.Pulldown2refresh = _scroll.Pulldown2refresh;
exports.Page = _page2.default;
exports.Topbar = _topbar2.default;
exports.List = _list2.default;
exports.Alert = _alert2.default;
exports.Button = _button2.default;
exports.Toast = _toast2.default;
exports.ActionSheet = _actionsheet2.default;
exports.Dropdown = _dropdown2.default;
exports.Draggable = _draggable2.default;
exports.Popover = _popover2.default;
exports.Uploader = _uploader2.default;
exports.Radios = _form.Radios;
exports.Checkboxes = _form.Checkboxes;
exports.TextInput = _form.TextInput;
exports.Textinput = _form.TextInput;
exports.DateInput = _form.DateInput;
exports.Dateinput = _form.DateInput;
exports.Textarea = _form.Textarea;
exports.Select = _form.Select;
exports.Switch = _form.Switch;
exports.Images = _form.Images;
exports.FormCell = _form.FormCell;
exports.SingleFilter = _filter.Single;
exports.MultipleFilter = _filter.Multiple;
exports.LinkFilter = _filter.Link;
exports.LinkMultipleFilter = _filter.LinkMultiple;
exports.Autosize = _autosize2.default;
exports.Mask = _mask2.default;
exports.Overlay = _overlay2.default;
exports.Helper = _helper2.default;
exports.Iosselect = _iosselect2.default;
exports.Datepicker = _datepicker2.default;
exports.Slider = _slider.Slider;
exports.SliderItem = _slider.SliderItem;
exports.Lazyload = _lazyload2.default;
exports.Lightbox = _lightbox2.default;
exports.default = { install: install, Helper: _helper2.default };

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("f9587c36", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-283d099b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroll.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-283d099b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-scroll {\n  position: relative;\n  width: 100%;\n}\n.vm-scroll .vm-scroll-content {\n  overflow: hidden;\n}\n.vm-scroll .vm-scroll-bar {\n  position: absolute;\n  border-radius: 5px;\n  background: #ccc;\n}\n.vm-scroll-y {\n  overflow: hidden;\n}\n.vm-scroll-y > .vm-scroll-bar {\n  right: 0px;\n  width: 2px;\n  height: 0px;\n  top: 0px;\n}\n.vm-scroll-y .vm-scroll-inner {\n  min-height: 100%;\n}\n.vm-scroll-x {\n  overflow-x: hidden;\n  overflow-y: auto;\n  _height: 1%;\n}\n.vm-scroll-x > .vm-scroll-bar {\n  height: 2px;\n  width: 0px;\n  left: 0px;\n  bottom: 0px;\n}\n.vm-scroll-x > .vm-scroll-inner {\n  float: left;\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _autosize = __webpack_require__(21);

var _autosize2 = _interopRequireDefault(_autosize);

var _draggable = __webpack_require__(22);

var _draggable2 = _interopRequireDefault(_draggable);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'scroll',

    props: {
        scrollbars: {
            type: Boolean,
            default: false
        },

        axis: {
            type: String,
            default: 'y'
        },

        ease: {
            type: String,
            default: 'cubic-bezier(0.1, 0.57, 0.1, 1)'
        },

        bounce: {
            type: String,
            default: 'cubic-bezier(0.175, 0.885, 0.32, 1.1)'
        },

        ignores: {
            type: [RegExp, Function, String],
            default: null
        },

        maxPos: {
            type: Number,
            default: null
        },

        minPos: {
            type: Number,
            default: null
        }
    },

    directives: {
        Autosize: _autosize2.default
    },

    data: function data() {
        return {
            barVisible: false,
            axi: this.axis.toUpperCase(),
            fillSize: this.axis != 'x'
        };
    },


    mounted: function mounted() {
        var self = this;

        self.pos = 0;
        self.$drag = new _draggable2.default.Draggable(self.$refs.inner, {
            axis: self.axis,
            ignores: self.ignores,
            canDrag: function canDrag(info) {
                return !!self.eSize;
            }
        });

        _helper.Event.on(self.$refs.inner, 'transitionend webkitTransitionEnd', function () {
            self.scrollEnd();
        });

        _helper.Util.observer(self.$refs.inner, {
            childList: true,
            subtree: true
        }, function (mutations) {
            self.refresh();
        });

        _helper.Event.on(window, 'resize', function () {
            self.refresh();
        });

        self.$actived = true;
        self.refresh();
    },

    methods: {
        onScroll: function onScroll() {
            var self = this;

            if (self.$el.scrollTop && self.axis == 'y') {
                self.scrollTo(-self.$el.scrollTop);
                self.$el.scrollTop = 0;
            }
        },
        refresh: function refresh() {
            var self = this;
            var method = self.axis == 'x' ? 'width' : 'height';

            var s1 = self.eSize = _helper.Dom[method](self.$el);
            var s2 = self.iSize = _helper.Dom[method](self.$refs.inner);

            self.max = self.maxPos != null ? self.maxPos : 0;
            self.min = self.minPos != null ? self.minPos : Math.min(0, s1 - s2);

            if (self.scrollbars && s1 && s2) {
                self.barPercent = s1 / Math.max(s1, s2);
                _helper.Dom.css(self.$refs.bar, method, 100 * self.barPercent + '%');
            }

            self.base < self.min && self.scrollTo(self.min, 300);
        },
        resetBase: function resetBase(time, pos) {
            var self = this;

            self.baseTime = time || Date.now();
            self.base = pos || self.getComputedPos();
        },
        onDragStart: function onDragStart(event) {
            var self = this;var translate = self.pos = event.data[self.axis];

            self.scrollEnd();
            self.refresh();
            self.resetBase();
            self.dragingTime = Date.now();
            self.direction = 0;
            self.$emit('drag:start', translate);
        },
        onDraging: function onDraging(event) {
            var self = this;
            var time = Date.now();
            var duration = time - self.dragingTime;
            var translate = event.data[self.axis];
            var stack = 1;

            if (translate > self.pos) {
                self.direction == -1 && self.resetBase(time, translate);
                self.direction = 1;
            } else if (translate < self.pos) {
                self.direction == 1 && self.resetBase(time, translate);
                self.direction = -1;
            }

            if (duration > 100) {
                self.resetBase(time, translate);
            }

            self.isMoving = true;
            self.dragingTime = time;
            self.$emit('draging', translate);
            self.scrollTo(translate, 0, false, true);
            self.$drag.stack(translate >= self.max || translate <= self.min ? 3 : 1);
        },
        onDragEnd: function onDragEnd(event) {
            var self = this;

            if (!self.isMoving) return false;
            self.isMoving = false;

            var time = Date.now();
            var duration = time - self.dragingTime;var destination;
            var translate = self.pos = event.data[self.axis];

            if (translate >= self.max) {
                self.scrollTo(destination = self.max, duration = 1000);
            } else if (translate > 0 && translate < self.max) {
                self.scrollTo(destination = 0, duration = 1000);
            } else if (translate <= self.min) {
                self.scrollTo(destination = self.min, duration = 1000);
            } else if (duration < 50) {
                var distance = translate - self.base;
                var speed = Math.max(0.1, Math.min(1.2, Math.abs(distance) / (time - self.baseTime)));var deceleration = 0.0006;
                var destination = Math.round(translate + Math.pow(speed, 2) / (2 * deceleration) * (distance < 0 ? -1 : 1));

                duration = 2 * speed / deceleration;

                do {
                    if (destination < self.min) {
                        duration = Math.max(300, duration * Math.abs((self.min - translate) / destination));
                        destination = self.min;
                    } else if (destination > 0) {
                        duration = Math.max(300, duration * Math.abs(translate / (translate - destination)));
                        destination = 0;
                    } else {
                        self.scrollTo(destination, duration);
                        break;
                    }

                    self.scrollTo(destination, duration, void 0, void 0, duration < 1500 ? self.bounce : void 0);
                } while (0);
            }

            self.$emit('drag:end', translate, destination, duration);
            self.baseTime = null;
            self.distance = null;
            self.base = null;
        },
        scrollTo: function scrollTo(destination) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var limitMaxOrMin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var notSetTransform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var ease = arguments[4];

            var self = this;

            if (limitMaxOrMin) {
                if (destination >= self.max) {
                    destination = self.max;
                } else if (destination <= self.min) {
                    destination = self.min;
                }
            }

            if (!duration) {
                self.pos = destination;
                !notSetTransform && self.translateTo(self.$refs.inner, destination);
                self.$emit('scrolling', destination);
            } else if (self.isMoving) {
                return false;
            } else {
                self.translateTo(self.$refs.inner, self.pos = destination, duration, ease);
                // 解决scrolling时无法获取translate的问题
                self.listenScrolling();
            }

            self.scrollBarTo(destination, duration, ease);
        },
        scrollToElement: function scrollToElement(el, duration, limitMaxOrMin) {
            var eOffset = _helper.Dom.offset(el);var offset = _helper.Dom.offset(this.$el);
            var prop = this.axi == 'X' ? 'left' : 'top';

            this.refresh();
            this.scrollTo(offset[prop] - eOffset[prop], duration, limitMaxOrMin);
        },
        scrollBarTo: function scrollBarTo(destination) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var ease = arguments[2];

            var self = this;

            if (self.scrollbars && self.eSize && self.iSize) {
                self.barVisible = true;
                clearTimeout(self.bartid);
                self.bartid = setTimeout(function () {
                    self.barVisible = false;
                }, 3000);

                self.translateTo(self.$refs.bar, self.eSize * (destination / self.iSize) * -1, duration, ease);
            }
        },
        listenScrolling: function listenScrolling() {
            var self = this;

            function trigger() {
                if (self.fxer) {
                    self.$emit('scrolling', self.pos = self.getComputedPos());
                    self.fxer = setTimeout(trigger, 50);
                }
            }

            self.fxer = setTimeout(trigger, 50);
        },
        scrollEnd: function scrollEnd() {
            var self = this;

            if (!self.fxer || !this.$actived) return;

            clearTimeout(self.fxer);
            self.fxer = false;
            self.translateTo(self.$refs.inner, self.pos = self.getComputedPos());
            self.$emit('scroll:end', self.pos);
        },
        limitType: function limitType() {
            return this.isAtTop() ? 1 : this.isAtBottom() ? -1 : 0;
        },
        isAtBottom: function isAtBottom() {
            return this.pos <= this.min;
        },
        isAtTop: function isAtTop() {
            return this.pos >= this.max;
        },
        getPos: function getPos() {
            return this.pos;
        },
        translateTo: function translateTo(el, translate) {
            var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var ease = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.ease;

            _helper.Dom.css(el, {
                'transition-duration': duration + 'ms',
                'transition-timing-function': ease,
                'transform': 'translate3d(' + (this.axi == 'X' ? translate + 'px' : '0px') + ',' + (this.axi == 'Y' ? translate + 'px' : '0px') + ',' + '0px)'
            });
        },
        getComputedPos: function getComputedPos() {
            return _draggable2.default.Draggable.getTransform(this.$refs.inner)[this.axis];
        }
    },

    activated: function activated() {
        this.$actived = true;
    },
    deactivated: function deactivated() {
        this.$actived = false;
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoSize = function () {
    function AutoSize(root) {
        var _this = this;

        _classCallCheck(this, AutoSize);

        this.$root = root;
        this.$root.$autosize = this;
        this.$listens = {};
        this.$mutation = null;
        setTimeout(function () {
            _this.initEvent();
        }, 1000);
    }

    _createClass(AutoSize, [{
        key: 'initEvent',
        value: function initEvent() {
            var self = this;

            _helper.Event.on(window, 'resize', function () {
                self.resizeAll(true);
            });
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this2 = this;

            if (this.$mutation) return false;

            this.$mutation = _helper.Util.observer(this.$root, {
                childList: true,
                attributes: true,
                subtree: true
            }, function (mutations) {
                _this2.resizeAll();
            });
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (!this.$mutation) return false;
            this.$mutation.disconnect();
            this.$mutation = null;
        }
    }, {
        key: 'observer',
        value: function observer(element) {
            if (element.style.height) return false;

            element.$autosize = this;

            this.$listens[element.$autosizeid = Date.now()] = {
                element: element,
                rect: {}
            };
            this.resize(element);
            this.listen();
        }
    }, {
        key: 'unobserver',
        value: function unobserver(element) {
            delete this.$listens[element.$autosizeid];
            delete element.$autosize;
            delete element.$autosizeid;
        }
    }, {
        key: 'resizeAll',
        value: function resizeAll() {
            var _this3 = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            clearTimeout(this.$timer);
            this.$timer = setTimeout(function () {
                _this3.pause();
                for (var i in _this3.$listens) {
                    _this3.resize(_this3.$listens[i].element, force);
                }
                _this3.listen();
            }, 300);
        }
    }, {
        key: 'resize',
        value: function resize(element) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var newRect = _helper.Dom.rect(element);

            if (!newRect.width) {
                return false;
            }

            var info = this.$listens[element.$autosizeid];

            var oldRect = info.rect;

            if (newRect.top == info.rect.top && !force) {
                return false;
            }

            info.rect = newRect;

            element.style.height = 'auto';

            var chains = [element];
            var maxHeight;var parent = element;var hasSetHeight = false;

            while (parent = parent.parentNode) {
                chains.push(parent);

                if (parent === document.body) {
                    maxHeight = _helper.Dom.height(document.documentElement);
                    break;
                }

                if (_helper.Dom.css(parent, 'max-height') != 'none') {
                    hasSetHeight = true;
                    maxHeight = Math.min(parseFloat(_helper.Dom.height(parent)), parseFloat(_helper.Dom.css(parent, 'max-height')));
                    break;
                }

                if (parent.style.height) {
                    hasSetHeight = true;
                    maxHeight = _helper.Dom.height(parent);
                    break;
                }
            }

            maxHeight = parseFloat(maxHeight);

            var top = _helper.Dom.offset(element).top;

            if (!hasSetHeight || top + _helper.Dom.height(element.parentNode) > maxHeight) {
                var otherHeight = 0;

                chains.pop();
                chains.forEach(function (ele) {
                    _helper.Dom.nexts(ele).forEach(function (next) {
                        if (!/absolute|fixed/.test(_helper.Dom.css(next, 'position')) && next.offsetTop != ele.offsetTop) {
                            otherHeight += _helper.Dom.height(next) + parseFloat(_helper.Dom.css(ele, 'margin-bottom') || 0);
                        }
                    });

                    otherHeight += parseFloat(_helper.Dom.css(ele, 'margin-bottom') || 0);
                });

                element.style.overflow = 'hidden';
                element.style.height = maxHeight - (top - _helper.Dom.offset(parent).top) - otherHeight + 'px';
                _helper.Event.trigger(element, 'autosize');
            } else {
                element.style.overflow = '';
            }
        }
    }]);

    return AutoSize;
}();

exports.default = {
    bind: function bind(element, data, VNode) {
        if (data.value && data.value.enable == false) {
            return false;
        }

        setTimeout(function () {
            var root = VNode.context.$root.$el;

            var instance = root.$autosize || new AutoSize(root);

            instance.observer(element);
        });
    },
    unbind: function unbind(element) {
        element.$autosize && element.$autosize.unobserver(element);
    },
    resize: function resize(element) {
        setTimeout(function () {
            element = element.$el || element;
            element.$autosize.resize(element, true);
        }, 10);
    },


    AutoSize: AutoSize,
    Constructor: AutoSize,
    name: 'autosize'
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(31);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css3s = ['transform', 'transition', 'animation'];

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector;
}

exports.default = {
    offset: function offset(element) {
        var top = 0;var left = 0;

        do {
            top += element.offsetTop;
            left += element.offsetLeft;
        } while (element = element.offsetParent);

        return {
            left: left,
            top: top
        };
    },
    matches: function matches(target, selector) {
        return target.matches(selector);
    },
    siblings: function siblings(element) {
        return [].filter.call(element.parentNode.children, function (child) {
            return child !== element;
        });
    },
    nexts: function nexts(element) {
        var els = [];

        while (element = element.nextSibling) {
            if (element.nodeType == 1) {
                els.push(element);
            }
        }

        return els;
    },
    height: function height(element) {
        return this.isDoc(element) ? document.documentElement.clientHeight : element.offsetHeight;
    },
    width: function width(element) {
        return this.isDoc(element) ? document.documentElement.clientWidth : element.offsetWidth;
    },
    size: function size(element) {
        return { width: this.width(element), height: this.height(element) };
    },
    rect: function rect(element) {
        return element.getBoundingClientRect();
    },
    isDoc: function isDoc(element) {
        return element === document.documentElement || element === document;
    },
    contains: function contains(root, el) {
        var hasSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        return root === el && hasSelf || !!(root.compareDocumentPosition(el) & 16);
    },
    css: function css(element, name, value) {
        if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) == 'object') {
            for (var key in name) {
                this.css(element, key, name[key]);
            }
        } else {
            var css3name;

            if (this.css3(name)) {
                css3name = _util2.default.l2camel('-webkit-' + name);
            }

            var property = _util2.default.l2camel(name);

            if (typeof value == 'undefined') {
                return element.style[css3name || property] || window.getComputedStyle(element).getPropertyValue(css3name || name);
            } else {
                value += typeof value == 'number' && !/^(?:opacity|zIndex)$/.test(property) ? 'px' : '';
                element.style[property] = value;

                if (css3name) {
                    element.style[css3name] = value;
                }
            }
        }
    },
    css3: function css3(name) {
        return css3s.indexOf(name) > -1;
    },
    $: function $(str) {
        var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        return typeof str == 'string' ? root.querySelector(str) : str;
    },
    $$: function $$(str) {
        var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        return (typeof str == 'string' ? root.querySelectorAll(str) : str) || [];
    },
    hasClass: function hasClass(element, className) {
        return element.className.match(new RegExp('(\\s+|^)' + className + '(\\s+|$)'));
    },
    addClass: function addClass(element, className) {
        if (!this.hasClass(element, className)) {
            element.className += ' ' + className;
        }
    },
    removeClass: function removeClass(element, className) {
        element.className = element.className.replace(new RegExp('(\\s+|^)' + className + '(\\s+|$)'), '');
    },
    create: function create(str) {
        var el = document.createElement('div');

        el.innerHTML = str;
        return el.childNodes[0];
    }
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    on: function on(element, event, callback, options) {
        event.split(' ').forEach(function (event) {
            element.addEventListener(event, callback, options);
        });
    },
    off: function off(element, event, callback) {
        element.removeEventListener(event, callback);
    },
    trigger: function trigger(element, event) {
        var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var evt = document.createEvent('HTMLEvents');

        evt.initEvent(event, false, true);
        evt.data = data;
        return !element.dispatchEvent(evt);
    }
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Draggable = function () {
    function Draggable(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Draggable);

        var self = this;

        self.dom = element;
        self.dom.$draggable = self;
        self.options = _helper.Util.assign({
            axis: 'xy',
            stackTimes: 1,
            ignores: null,
            canDrag: function canDrag() {
                return true;
            }
        }, options);

        self.stack(self.options.stackTimes);
        self.initEvent();
    }

    _createClass(Draggable, [{
        key: 'initEvent',
        value: function initEvent() {
            var self = this;var options = self.options;var justStart = false;var target;

            _helper.Event.on(self.dom, 'touchstart', function (e) {
                target = e.target;

                justStart = true;

                if (target && options.ignores) {
                    if (typeof options.ignores == 'function') {
                        if (options.ignores.test(target)) {
                            return false;
                        }
                    } else if (typeof options.ignores == 'string') {
                        if (_helper.Dom.matches(target, options.ignores)) {
                            return false;
                        }
                    } else {
                        if (options.ignores.test(target.tagName)) {
                            return false;
                        }
                    }
                }

                var _self$translates = self.translates = Draggable.getTransform(self.dom),
                    x = _self$translates.x,
                    y = _self$translates.y;

                var _e$touches$ = e.touches[0],
                    clientX = _e$touches$.clientX,
                    clientY = _e$touches$.clientY;


                self.touch = { clientX: clientX, clientY: clientY };

                _helper.Event.trigger(self.dom, 'drag:start', {
                    x: x, y: y, clientX: clientX, clientY: clientY, e: e
                });
            });

            _helper.Event.on(document, 'touchmove', function (e) {
                if (!self.touch) {
                    return false;
                }

                e.preventDefault();

                var touch = e.touches[0];
                var _self$touch = self.touch,
                    clientX = _self$touch.clientX,
                    clientY = _self$touch.clientY;

                var axis = options.axis;
                var x = 0;var y = 0;

                var rx = (touch.clientX - clientX) / options.stackTimes;var ry = (touch.clientY - clientY) / options.stackTimes;

                if (/x/.test(axis)) {
                    x = rx + self.translates.x;
                }

                if (/y/.test(axis)) {
                    y = ry + self.translates.y;
                }

                var info = {
                    x: x, y: y, clientX: touch.clientX, clientY: touch.clientY, e: e, rx: rx, ry: ry
                };

                if (!options.canDrag.call(self, { x: x, y: y, rx: rx, ry: ry })) {
                    _helper.Event.trigger(self.dom, 'drag:reject', info);
                    return false;
                }

                if (justStart) {
                    justStart = false;

                    // if other draggable, end
                    if (self.isOtherDraggable(target, { x: rx, y: ry })) {
                        self.touch = null;
                        _helper.Event.trigger(self.dom, 'drag:other', info);
                        return false;
                    }
                }

                self.translates = { x: x, y: y };
                self.touch = {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                };

                _helper.Dom.css(self.dom, 'transform', 'translate3d(' + x + 'px, ' + y + 'px, 0px)');
                _helper.Event.trigger(self.dom, 'draging', info);
            });

            _helper.Event.on(document, 'touchend', function (e) {
                if (!self.touch) {
                    return false;
                }

                self.touch = null;
                _helper.Event.trigger(self.dom, 'drag:end', {
                    x: self.translates.x,
                    y: self.translates.y,
                    e: e
                });
            });
        }
    }, {
        key: 'stack',
        value: function stack() {
            var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            this.options.stackTimes = times;
        }
    }, {
        key: 'isOtherDraggable',
        value: function isOtherDraggable(target, info) {
            var $draggable;var self = this;
            var isX = Math.abs(info.x) > Math.abs(info.y);

            do {
                if (target.$draggable) {
                    $draggable = target.$draggable;

                    if (isX && $draggable.options.axis == 'x' || !isX && $draggable.options.axis != 'x') {
                        break;
                    }
                }
            } while (target = target.parentNode);

            return $draggable !== self;
        }
    }]);

    return Draggable;
}();

Draggable.getTransform = function (element) {
    var matrix = window.getComputedStyle(element, null);var x;var y;

    matrix = matrix.webkitTransform.split(')')[0].split(', ');
    x = +(matrix[12] || matrix[4]);
    y = +(matrix[13] || matrix[5]);

    return {
        x: isNaN(x) ? 0 : x,
        y: isNaN(y) ? 0 : y
    };
};

exports.default = {
    bind: function bind(element, data) {
        new Draggable(element, data.value);
    },


    Draggable: Draggable,
    Constructor: Draggable,
    name: 'draggable'
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "autosize",
      rawName: "v-autosize",
      value: ({
        enable: _vm.axis == 'y'
      }),
      expression: "{enable: axis == 'y'}"
    }],
    class: 'vm-scroll vm-scroll-' + _vm.axis,
    on: {
      "scroll": _vm.onScroll
    }
  }, [_c('div', {
    ref: "inner",
    staticClass: "vm-scroll-inner",
    on: {
      "drag:start": _vm.onDragStart,
      "draging": _vm.onDraging,
      "drag:end": _vm.onDragEnd
    }
  }, [_vm._t("header"), _vm._v(" "), _c('div', {
    staticClass: "vm-scroll-content"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("footer")], 2), _vm._v(" "), (_vm.scrollbars) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.barVisible),
      expression: "barVisible"
    }],
    ref: "bar",
    staticClass: "vm-scroll-bar"
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-283d099b", module.exports)
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(167)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(170),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\scroll\\pulldown2refresh.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pulldown2refresh.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0319a59e", Component.options)
  } else {
    hotAPI.reload("data-v-0319a59e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("35386610", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0319a59e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pulldown2refresh.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0319a59e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pulldown2refresh.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(17);
exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-pulldown2refresh-icon{\n    display: inline-block;\n    width: 0.16rem;\n    height: 0.16rem;\n    background-image: url(" + escape(__webpack_require__(32)) + ");\n    background-size: 100%;\n    margin-right: 0.05rem;\n    transform: translateY(0.03rem);\n    -webkit-transform: translateY(0.03rem);\n}\n.vm-pulldown2refresh{\n    text-align: center;\n    padding: 0.05rem;\n    color: #878787;\n    width: 100%;\n    font-size: 0.12rem;\n    width: 100%;\n    position: absolute;\n    transform: translateY(-100%);\n    -webkit-transform: translateY(-100%);\n}\n", ""]);

// exports


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scroll = __webpack_require__(30);

var _scroll2 = _interopRequireDefault(_scroll);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'pulldown2refresh',

    props: {
        scrollbars: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            maxPos: 0,
            isRefreshing: false,
            intop: false
        };
    },


    computed: {
        pulldownHeight: function pulldownHeight() {
            return _helper.Dom.height(this.$refs.pulldown);
        }
    },

    components: {
        Scroll: _scroll2.default
    },

    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            _this.$scroll = _this.$refs.scroll;
            _this.maxPos = _this.pulldownHeight;
        }, 0);
    },


    methods: {
        onScrolling: function onScrolling(translate) {
            this.intop = this.limitType() == 1;
            this.$emit('scrolling', translate);
        },
        onScrollEnd: function onScrollEnd() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.$emit.apply(this, ['scroll:end'].concat(_toConsumableArray(args)));
        },
        onDragStart: function onDragStart() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            this.$emit.apply(this, ['drag:start'].concat(_toConsumableArray(args)));
        },
        onDragEnd: function onDragEnd() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            this.$emit.apply(this, ['drag:end'].concat(_toConsumableArray(args)));
            this.limitType() == 1 && this.refresh();
        },
        refresh: function refresh() {
            var trigger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (this.isRefreshing) return;

            animation && this.scrollTo(this.pulldownHeight, 500);
            trigger && this.$emit('refresh', this.recover);
            this.isRefreshing = true;
        },
        recover: function recover() {
            this.isRefreshing && this.scrollTo(0, 1000);
            this.isRefreshing = false;
            this.$emit('recover');
        },
        limitType: function limitType() {
            return this.$scroll.limitType();
        },
        scrollTo: function scrollTo() {
            var _$scroll;

            return (_$scroll = this.$scroll).scrollTo.apply(_$scroll, arguments);
        },
        scrollToElement: function scrollToElement() {
            var _$scroll2;

            return (_$scroll2 = this.$scroll).scrollToElement.apply(_$scroll2, arguments);
        },
        getPos: function getPos() {
            return this.$scroll.getPos();
        }
    }
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll', {
    ref: "scroll",
    attrs: {
      "max-pos": _vm.maxPos,
      "scrollbars": _vm.scrollbars
    },
    on: {
      "scrolling": _vm.onScrolling,
      "scroll:end": _vm.onScrollEnd,
      "drag:start": _vm.onDragStart,
      "drag:end": _vm.onDragEnd
    }
  }, [_c('div', {
    ref: "pulldown",
    staticClass: "vm-pulldown2refresh",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._t("pulldown", [(!_vm.isRefreshing && !_vm.intop) ? _vm._t("pulldown-msg", [_vm._v("下拉刷新数据")]) : _vm._e(), _vm._v(" "), (!_vm.isRefreshing && _vm.intop) ? _vm._t("pullleave-msg", [_vm._v("松手刷新数据")]) : _vm._e(), _vm._v(" "), (_vm.isRefreshing) ? _vm._t("refresh-msg", [_c('i', {
    staticClass: "vm-pulldown2refresh-icon"
  }), _vm._v("正在刷新数据")]) : _vm._e()])], 2), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0319a59e", module.exports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(172)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(176),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\list\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1da6b28a", Component.options)
  } else {
    hotAPI.reload("data-v-1da6b28a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7b96b51e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1da6b28a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1da6b28a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(17);
exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-list{\n    font-size: 0.16rem;\n}\n.vm-list-loading, .vm-list-error, .vm-list-nomore, .vm-list-empty{\n    text-align: center;\n    padding: 0.05rem;\n    color: #878787;\n    width: 100%;\n    font-size: 0.12rem;\n}\n.vm-list-loading-icon{\n    display: inline-block;\n    width: 0.16rem;\n    height: 0.16rem;\n    background-image: url(" + escape(__webpack_require__(32)) + ");\n    background-size: 100%;\n    margin-right: 0.05rem;\n    transform: translateY(0.03rem);\n    -webkit-transform: translateY(0.03rem);\n}\n.vm-list-rows{\n    padding: 0px;\n    margin: 0px;\n    list-style: none;\n*{\n        margin: 0px;\n        padding: 0px;\n}\n}\n.vm-list-nores{\n    margin-top: 0.2rem;\n}\n.vm-list-nores-icon{\n    background: url(" + escape(__webpack_require__(174)) + ");\n    width: 1.3rem;\n    height: 1.3rem;\n    display: inline-block;\n    margin-bottom: 0.1rem;\n    background-size: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scroll = __webpack_require__(11);

var _helper = __webpack_require__(1);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'list',

    props: {
        optimize: {
            type: Boolean,
            default: true
        },

        pageLabel: {
            type: String,
            default: 'page'
        },

        pageSizeLabel: {
            type: String,
            default: 'count'
        },

        scrollbars: {
            type: Boolean,
            default: true
        },

        autoRefresh: {
            type: Boolean,
            default: true
        },

        source: {
            default: function _default() {
                return [];
            }
        },

        dataFormatter: {
            type: Function,
            default: function _default() {
                var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                return data;
            }
        },

        maxCountPerPage: {
            type: Number,
            default: function _default() {
                return 20;
            }
        },

        params: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        paramsFormatter: {
            type: Function,
            default: function _default(params) {
                return params;
            }
        },

        pulldown2refresh: {
            type: Boolean,
            default: false
        },

        pullup2load: {
            type: Boolean,
            default: false
        },

        showMsg: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            Component: !this.pulldown2refresh ? _scroll.Scroll : _scroll.Pulldown2refresh,
            data: [],
            rows: [],
            _params: {},
            isLoading: false,
            isCompleted: false,
            page: 0,
            error: 0,
            $scroll: null,
            _source: ''
        };
    },


    computed: {
        showLoadingStatus: function showLoadingStatus() {
            return !this.isCompleted && this.pullup2load && !this.error && this.page >= 1;
        },
        showErrorStatus: function showErrorStatus() {
            return !this.isCompleted && this.error && !this.isLoading;
        },
        showNoMoreStatus: function showNoMoreStatus() {
            return this.page >= 1 && this.rows.length && this.isCompleted;
        },
        showEmptyStatus: function showEmptyStatus() {
            return !this.rows.length && this.isCompleted;
        }
    },

    mounted: function mounted() {
        var self = this;

        self.setParams(self.params);
        self.setSource(self.source);
        self.$nextTick(function () {
            return self.init();
        });
    },


    watch: {
        source: function source(v) {
            var self = this;

            self.setSource(v);
            self.autoRefresh && self.refresh();
        },


        params: {
            deep: true,
            handler: function handler(v) {
                var self = this;
                var params = JSON.stringify(self._params);

                self.setParams(v);

                if (self.autoRefresh && params != JSON.stringify(self._params)) {
                    self.refresh();
                }
            }
        }
    },

    methods: {
        init: function init() {
            var self = this;

            self.$scroll = self.$refs.scroll;
            self.autoRefresh && self.refresh(false);
        },
        onScrolling: function onScrolling() {
            this.pullup2load && this.$scroll.limitType() == -1 && this.load();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this.$emit.apply(this, ['scrolling'].concat(_toConsumableArray(args)));
        },
        setParams: function setParams(params, append) {
            if (append) {
                this._params = _helper.Util.assign({}, this._params, params);
            } else {
                this._params = _helper.Util.assign({}, params);
            }
        },
        setSource: function setSource() {
            var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (typeof source != 'string') {
                this.setData(source);
            } else {
                this._source = source;
            }
        },
        setData: function setData() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            this.data = [];
            this.addData(data);
        },
        scrollTo: function scrollTo() {
            var _$scroll;

            (_$scroll = this.$scroll).scrollTo.apply(_$scroll, arguments);
        },
        scrollToElement: function scrollToElement() {
            var _$scroll2;

            (_$scroll2 = this.$scroll).scrollToElement.apply(_$scroll2, arguments);
        },
        addData: function addData(source) {
            try {
                source = this.dataFormatter(source);
            } catch (e) {}

            this.data = this.data.concat(source || []);
            this.$emit('data:add', source);
        },
        refresh: function refresh() {
            var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            var self = this;

            self.page = 0;
            self.isCompleted = false;
            self.isLoading = false;
            self.$scroll.refresh(false, animation);
            self.$emit('refresh');
            setTimeout(function () {
                return self.load();
            }, 0);
        },
        load: function load() {
            var self = this;

            self.error = null;

            if (self.isCompleted) {
                return false;
            }

            if (self.isLoading) {
                return false;
            }

            if (self._source && typeof self._source == 'string' && (self.rows.length == self.data.length || self.page == 0)) {
                self.loadRemote();
            } else {
                self.renderRows();
            }
        },
        loadRemote: function loadRemote() {
            var self = this;var datas = {};

            self.abort();
            self.isLoading = true;

            datas[self.pageLabel] = self.page + 1;
            datas[self.pageSizeLabel] = self.maxCountPerPage;

            self.$http = (0, _ajax2.default)({
                url: self._source,
                data: self.paramsFormatter(Object.assign({}, self._params || {}, datas)),
                dataType: 'json',
                success: function success(data) {
                    self.page == 0 ? self.setData(data) : self.addData(data);
                    self.renderRows();
                    self.$emit('xhr:success', data);
                },
                error: function error(data) {
                    self.error = data;
                    self.$emit('xhr:error');
                    self.isLoading = false;
                },
                complete: function complete() {
                    self.$http = null;
                }
            });
        },
        abort: function abort() {
            return this.$http && this.$http.abort();
        },
        renderRows: function renderRows() {
            var self = this;
            var page = ++self.page;

            var rows = self.data.slice(self.maxCountPerPage * (page - 1), self.maxCountPerPage * page);

            if (!self.pullup2load || rows.length < self.maxCountPerPage) {
                self.isCompleted = true;
                self.$emit('nomore');
            }

            if (page == 1) {
                self.rows = rows;
                self.$emit('refresh:success', rows);
                self.pulldown2refresh && self.$scroll.recover();
            } else {
                self.rows = self.rows.concat(rows);
            }

            self.isLoading = false;
            self.$emit('rows:render', rows);
        }
    }
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.Component, {
    ref: "scroll",
    tag: "component",
    staticClass: "vm-list",
    attrs: {
      "scrollbars": _vm.scrollbars
    },
    on: {
      "scrolling": _vm.onScrolling,
      "refresh": _vm.refresh
    }
  }, [(_vm.$slots.header) ? _c('div', {
    staticClass: "vm-list-header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c('div', {
    ref: "vm-list-rows-container"
  }, [_vm._t("rows", [_c('ul', {
    ref: "rows",
    staticClass: "vm-list-rows"
  }, _vm._l((_vm.rows), function(item, index) {
    return _c('li', {
      staticClass: "vm-list-item",
      on: {
        "click": function($event) {
          return _vm.$emit('row:click', item, index)
        }
      }
    }, [_vm._t("row", [_vm._v(_vm._s(item))], {
      "data": item
    })], 2)
  }), 0)], {
    "data": _vm.rows
  })], 2), _vm._v(" "), (_vm.showLoadingStatus) ? _c('div', {
    staticClass: "vm-list-loading"
  }, [_vm._t("loading", [_c('i', {
    staticClass: "vm-list-loading-icon"
  }), _vm._v("正在加载中")])], 2) : _vm._e(), _vm._v(" "), (_vm.showMsg) ? [(_vm.showErrorStatus) ? _c('div', {
    staticClass: "vm-list-error"
  }, [_vm._t("error", [_vm._v("网络异常，加载失败")])], 2) : _vm._e(), _vm._v(" "), (_vm.showNoMoreStatus) ? _c('div', {
    ref: "nomore",
    staticClass: "vm-list-nomore"
  }, [_vm._t("nomore", [_vm._v("~没有更多了~")])], 2) : _vm._e(), _vm._v(" "), (_vm.showEmptyStatus) ? _c('div', {
    staticClass: "vm-list-empty"
  }, [_vm._t("nores", [_c('i', {
    staticClass: "vm-list-nores-icon"
  }), _c('br'), _vm._v("没有任何结果~")])], 2) : _vm._e()] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vm-list-footer"
  }, [_vm._t("footer")], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1da6b28a", module.exports)
  }
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(186),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\page\\page.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05aae55b", Component.options)
  } else {
    hotAPI.reload("data-v-05aae55b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("27b70f82", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05aae55b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-05aae55b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-page.vm-overlay{\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    display: flex;\n    font-size: .14rem;\n    flex-direction: column;\n}\n.vm-page-content{\n    overflow: hidden;\n    flex: 1;\n}\n.vm-page-footer{\n    width: 100%;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'page',

    mixins: [_overlay2.default],

    props: {
        visible: {
            type: Boolean,
            default: true
        }
    },

    components: {
        Overlay: _overlay2.default
    }
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(185),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\overlay\\overlay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] overlay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19d97e46", Component.options)
  } else {
    hotAPI.reload("data-v-19d97e46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("20dad4d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19d97e46\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./overlay.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19d97e46\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./overlay.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-overlay {\r\n    position: fixed;\r\n    z-index: 10000;\r\n    background: #fff;\r\n    overflow: hidden;\n}\n.vm-overlay-center {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -webkit-transform: translate(-50%, -50%);\n}\n.vm-overlay-left,\r\n.vm-overlay-top {\r\n    left: 0px;\r\n    top: 0px;\n}\n.vm-overlay-left,\r\n.vm-overlay-right {\r\n    height: 100%;\n}\n.vm-overlay-top,\r\n.vm-overlay-bottom {\r\n    width: 100%;\n}\n.vm-overlay-bottom {\r\n    bottom: 0px;\r\n    left: 0px;\n}\n.vm-overlay-right {\r\n    right: 0px;\r\n    top: 0px;\n}\n.vm-fx-enter-active,\r\n.vm-fx-leave-active,\r\n.vm-fx-center-enter-active,\r\n.vm-fx-center-leave-active,\r\n.vm-fx-left-enter-active,\r\n.vm-fx-left-leave-active,\r\n.vm-fx-right-enter-active,\r\n.vm-fx-right-leave-active,\r\n.vm-fx-bottom-enter-active,\r\n.vm-fx-bottom-leave-active,\r\n.vm-fx-top-enter-active,\r\n.vm-fx-top-leave-active {\r\n    transition: transform .3s ease, opacity .3s ease;\r\n    -webkit-transition: transform .3s ease, opacity .3s ease;\n}\n.vm-fx-enter,\r\n.vm-fx-leave-active,\r\n.vm-fx-center-enter,\r\n.vm-fx-center-leave-active {\r\n    opacity: 0;\n}\n.vm-fx-left-enter,\r\n.vm-fx-left-leave-active {\r\n    transform: translateX(-100%);\r\n    -webkit-transform: translateX(-100%);\n}\n.vm-fx-right-enter,\r\n.vm-fx-right-leave-active {\r\n    transform: translateX(100%);\r\n    -webkit-transform: translateX(100%);\n}\n.vm-fx-bottom-enter,\r\n.vm-fx-bottom-leave-active {\r\n    transform: translateY(100%);\r\n    -webkit-transform: translateY(100%);\n}\n.vm-fx-top-enter,\r\n.vm-fx-top-leave-active {\r\n    transform: translateY(-100%);\r\n    -webkit-transform: translateY(-100%);\n}\r\n", ""]);

// exports


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__(1);

exports.default = {
    name: 'overlay',

    props: {
        fx: {
            type: Boolean,
            default: true
        },

        visible: {
            type: Boolean,
            default: false
        },

        position: {
            type: String,
            default: null
        },

        transition: {
            type: String,
            default: null
        }
    },

    data: function data() {
        return {
            visibility: false,
            destroyed: false
        };
    },


    watch: {
        visible: function visible(v) {
            v ? this.open() : this.close();
        }
    },

    computed: {
        className: function className() {
            var self = this;
            var c = ['vm-overlay'];

            if (self.position) {
                c.push('vm-overlay-' + self.position);
            }

            c.push(self.class || '');

            return c;
        }
    },

    mounted: function mounted() {
        this.visible && this.open();
    },

    methods: {
        open: function open() {
            var self = this;

            if (self.visibility) return false;

            self.visibility = true;
            self.$nextTick(function () {
                self.$emit('open');
            });
        },
        close: function close() {
            var self = this;

            if (!self.visibility) return false;

            self.visibility = false;
            self.$nextTick(function () {
                self.$emit('close');
            });
        },
        destroy: function destroy() {
            var fx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fx;

            var self = this;

            if (self.destroyed) return;

            self.close();

            if (fx) {
                _helper.Event.on(self.$el, 'transitionend webkitTransitionEnd', function () {
                    self._destroy();
                });
            } else {
                self._destroy();
            }
        },
        _destroy: function _destroy() {
            var self = this;

            self.$el.parentNode && self.$el.parentNode.removeChild(self.$el);
            self.$emit('destroy');
            self.destroyed = true;
        }
    }
}; //
//
//
//
//
//
//
//

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition || (_vm.fx ? 'vm-fx-' + (_vm.position || 'center') : '')
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visibility),
      expression: "visibility"
    }],
    class: _vm.className,
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19d97e46", module.exports)
  }
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('overlay', {
    ref: "overlay",
    staticClass: "vm-page",
    attrs: {
      "visible": _vm.visibility,
      "fx": _vm.fx,
      "position": _vm.position
    }
  }, [_c('div', {
    ref: "header",
    staticClass: "vm-page-header"
  }, [_vm._t("header")], 2), _vm._v(" "), _c('div', {
    staticClass: "vm-page-content"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    ref: "footer",
    staticClass: "vm-page-footer"
  }, [_vm._t("footer")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05aae55b", module.exports)
  }
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(188)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(195),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\topbar\\topbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] topbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23e65c7b", Component.options)
  } else {
    hotAPI.reload("data-v-23e65c7b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4de1f69c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23e65c7b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./topbar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23e65c7b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./topbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-topbar {\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  font-size: 16px;\n  padding: 0px 12px;\n}\n.vm-topbar-inner {\n  position: relative;\n  font-weight: bold;\n  height: 44px;\n}\n.vm-topbar-btn-back {\n  width: 44px !important;\n  height: 44px;\n  display: inline-block;\n}\n.vm-topbar-title {\n  align-items: center;\n  height: 44px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.vm-topbar-left,\n.vm-topbar-right {\n  position: absolute;\n  bottom: 0px;\n  height: 44px;\n  display: inline-block;\n}\n.vm-topbar-left > *,\n.vm-topbar-right > * {\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  color: inherit;\n}\n.vm-topbar-right {\n  right: 0px;\n  text-align: right;\n}\n.vm-topbar-left {\n  text-align: left;\n  left: 0px;\n}\n", ""]);

// exports


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = __webpack_require__(15);

var _icon2 = _interopRequireDefault(_icon);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var TopBar = {
    name: 'topbar',

    props: {
        leftEnabled: {
            type: Boolean,
            default: true
        },

        leftCallback: {
            type: Function,
            default: function _default() {
                TopBar.config('leftCallback')();
            }
        },

        rightEnabled: {
            type: Boolean,
            default: true
        },

        bgColor: {
            type: String,
            default: function _default() {
                return TopBar.config('bgColor');
            }
        },

        color: {
            type: String,
            default: function _default() {
                return TopBar.config('color');
            }
        },

        borderBottom: {
            type: String,
            default: function _default() {
                return TopBar.config('borderBottom');
            }
        },

        backSize: {
            type: Number,
            default: function _default() {
                return TopBar.config('backSize');
            }
        }
    },

    components: {
        Icon: _icon2.default
    },

    data: function data() {
        return {
            top: TopBar.topFixed || TopBar.config('topFixed'),
            visibleRight: false
        };
    },


    watch: {
        rightEnabled: function rightEnabled(v) {
            v ? this.enableRight() : this.disableRight();
        }
    },

    mounted: function mounted() {
        this.rightVisible && this.enableRight();
    },


    methods: {
        disableRight: function disableRight() {
            this.visibleRight = false;
        },
        enableRight: function enableRight() {
            this.visibleRight = true;
        }
    }
};

TopBar.topFixed = '';

_helper.Util.defineConfig(TopBar, {
    topFixed: '0px',
    bgColor: '#28304E',
    color: '#fff',
    borderBottom: '',
    backSize: 0.16,
    leftCallback: function leftCallback() {
        history.back();
    }
});

exports.default = TopBar;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(25);

exports.default = {
    name: 'icon',

    props: {
        name: {
            type: String,
            default: ''
        },

        size: {
            type: Number,
            default: 0.16
        }
    }
}; //
//
//
//

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+DQo8IS0tDQoyMDEzLTktMzA6IENyZWF0ZWQuDQotLT4NCjxzdmc+DQo8bWV0YWRhdGE+DQpDcmVhdGVkIGJ5IGljb25mb250DQo8L21ldGFkYXRhPg0KPGRlZnM+DQoNCjxmb250IGlkPSJpY29uZm9udCIgaG9yaXotYWR2LXg9IjEwMjQiID4NCiAgPGZvbnQtZmFjZQ0KICAgIGZvbnQtZmFtaWx5PSJpY29uZm9udCINCiAgICBmb250LXdlaWdodD0iNTAwIg0KICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIg0KICAgIHVuaXRzLXBlci1lbT0iMTAyNCINCiAgICBhc2NlbnQ9Ijg5NiINCiAgICBkZXNjZW50PSItMTI4Ig0KICAvPg0KICAgIDxtaXNzaW5nLWdseXBoIC8+DQogICAgDQogICAgPGdseXBoIGdseXBoLW5hbWU9IngiIHVuaWNvZGU9IngiIGhvcml6LWFkdi14PSIxMDAxIg0KZD0iTTI4MSA1NDNxLTI3IC0xIC01MyAtMWgtODNxLTE4IDAgLTM2LjUgLTZ0LTMyLjUgLTE4LjV0LTIzIC0zMnQtOSAtNDUuNXYtNzZoOTEydjQxcTAgMTYgLTAuNSAzMHQtMC41IDE4cTAgMTMgLTUgMjl0LTE3IDI5LjV0LTMxLjUgMjIuNXQtNDkuNSA5aC0xMzN2LTk3aC00Mzh2OTd6TTk1NSAzMTB2LTUycTAgLTIzIDAuNSAtNTJ0MC41IC01OHQtMTAuNSAtNDcuNXQtMjYgLTMwdC0zMyAtMTZ0LTMxLjUgLTQuNXEtMTQgLTEgLTI5LjUgLTAuNQ0KdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQ0KdDkuNSAtMTAuNXQyMS41IC00aDM3aDY3aDgxaDgwaDY0aDM2cTIzIDAgMzQgMTJ0MiAzOHEtNSAxMyAtOS41IDMwLjV0LTkuNSAzNC41cS01IDE5IC0xMSAzOWgtMzY4ek0zMzYgNDk4djIyOHEwIDExIDIuNSAyM3QxMCAyMS41dDIwLjUgMTUuNXQzNCA2aDE4OHEzMSAwIDUxLjUgLTE0LjV0MjAuNSAtNTIuNXYtMjI3aC0zMjd6IiAvPg0KICAgIA0KDQogICAgDQogICAgPGdseXBoIGdseXBoLW5hbWU9ImRvd254IiB1bmljb2RlPSImIzU5MDE4OyIgZD0iTTU0Ni4xMzMzMzMgMTkwLjU3Nzc3OGwtMzYuOTc3Nzc3LTM2Ljk3Nzc3OEw3My45NTU1NTYgNTkxLjY0NDQ0NGg3My45NTU1NTV6TTUwOS4xNTU1NTYgMTUzLjZsLTMxLjI4ODg4OSAzNi45Nzc3NzggNDAxLjA2NjY2NiA0MDEuMDY2NjY2aDcxLjExMTExMXoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4NCg0KICAgIA0KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzZWFyY2hfYmx1ZXgiIHVuaWNvZGU9IiYjNTkwMTk7IiBkPSJNNDQwLjg4ODg4OSAzNC4xMzMzMzNDMjEzLjMzMzMzMyAzNC4xMzMzMzMgMjUuNiAyMTkuMDIyMjIyIDI1LjYgNDQ5LjQyMjIyMmMwIDIyNy41NTU1NTYgMTg0Ljg4ODg4OSA0MTIuNDQ0NDQ0IDQxNS4yODg4ODkgNDEyLjQ0NDQ0NSAyMjcuNTU1NTU2IDAgNDE1LjI4ODg4OS0xODQuODg4ODg5IDQxNS4yODg4ODktNDE1LjI4ODg4OSAwLTExMC45MzMzMzMtNDUuNTExMTExLTIxNi4xNzc3NzgtMTI1LjE1NTU1Ni0yOTUuODIyMjIybC0yOC40NDQ0NDQgMjguNDQ0NDQ0YzczLjk1NTU1NiA3MS4xMTExMTEgMTEzLjc3Nzc3OCAxNjQuOTc3Nzc4IDExMy43Nzc3NzggMjY0LjUzMzMzMyAwIDIwNC44LTE2Ny44MjIyMjIgMzc1LjQ2NjY2Ny0zNzIuNjIyMjIzIDM3NS40NjY2NjctMjEwLjQ4ODg4OSAwLTM3OC4zMTExMTEtMTY3LjgyMjIyMi0zNzguMzExMTExLTM2OS43Nzc3NzggMC0yMDQuOCAxNjcuODIyMjIyLTM3Mi42MjIyMjIgMzc1LjQ2NjY2Ny0zNzIuNjIyMjIyIDM5LjgyMjIyMiAwIDgyLjQ4ODg4OSA1LjY4ODg4OSAxMjUuMTU1NTU1IDIyLjc1NTU1NmwxMS4zNzc3NzgtMzYuOTc3Nzc4Yy00OC4zNTU1NTYtMTkuOTExMTExLTkzLjg2NjY2Ny0yOC40NDQ0NDQtMTM2LjUzMzMzMy0yOC40NDQ0NDV6TTcyMi40ODg4ODkgMTU2LjQ0NDQ0NGwyOC40NDQ0NDQgMjguNDQ0NDQ1IDI0Ny40NjY2NjctMjUwLjMxMTExMS0yOC40NDQ0NDQtMjUuNnoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4NCg0KICAgIA0KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzZWxlY3RlZHgiIHVuaWNvZGU9IiYjNTkwMjA7IiBkPSJNMjkuODk1MTExIDQzNi41NjUzMzNsMzAuMTUxMTExIDMwLjE1MTExMSAzNTYuMDM5MTExLTM1NS45ODIyMjItMzAuMTc5NTU1LTMwLjE1MTExMXpNMzcxLjA4NjIyMiA5My45MjM1NTZsNTg5LjY1MzMzNCA1ODguOTcwNjY2IDMwLjE1MTExMS0zMC4xNzk1NTUtNTg5LjY1MzMzNC01ODguOTcwNjY3eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPg0KDQogICAgDQogICAgPGdseXBoIGdseXBoLW5hbWU9InN1Y2Nlc3N4IiB1bmljb2RlPSImIzU5MDIxOyIgZD0iTTUxMi0xMjUuMTU1NTU2QzIzMy4yNDQ0NDQtMTI1LjE1NTU1NiAyLjg0NDQ0NCAxMDIuNCAyLjg0NDQ0NCAzODRTMjMzLjI0NDQ0NCA4OTMuMTU1NTU2IDUxMiA4OTMuMTU1NTU2czUwOS4xNTU1NTYtMjI3LjU1NTU1NiA1MDkuMTU1NTU2LTUwOS4xNTU1NTZjMC0xMzYuNTMzMzMzLTU2Ljg4ODg4OS0yNjcuMzc3Nzc4LTE1My42LTM2NC4wODg4ODlsLTI1LjYgMjUuNmM5MS4wMjIyMjIgODguMTc3Nzc4IDE0Mi4yMjIyMjIgMjEwLjQ4ODg4OSAxNDIuMjIyMjIyIDMzNS42NDQ0NDUgMCAyNTguODQ0NDQ0LTIxMC40ODg4ODkgNDcyLjE3Nzc3OC00NjkuMzMzMzM0IDQ3Mi4xNzc3NzdTMzkuODIyMjIyIDY0Mi44NDQ0NDQgMzkuODIyMjIyIDM4NCAyNTMuMTU1NTU2LTg1LjMzMzMzMyA1MTItODUuMzMzMzMzYzUxLjIgMCAxMDUuMjQ0NDQ0IDguNTMzMzMzIDE1OS4yODg4ODkgMjguNDQ0NDQ0bDExLjM3Nzc3OC0zNC4xMzMzMzNjLTU2Ljg4ODg4OS0yMi43NTU1NTYtMTE2LjYyMjIyMi0zNC4xMzMzMzMtMTcwLjY2NjY2Ny0zNC4xMzMzMzR6TTIwNy43NTgyMjIgMzkzLjg5ODY2N2wyNi4xNDA0NDUgMjYuMTQwNDQ0IDIzOS4zMzE1NTUtMjM5LjM2LTI2LjE0MDQ0NC0yNi4xNDA0NDR6TTQzMS4xMDQgMTY3LjgyMjIyMmw0MTEuNjE5NTU2IDQwOC45NzQyMjIgMjYuMDgzNTU1LTI2LjI1NDIyMi00MTEuNjQ4LTQwOC45NzQyMjJ6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+DQoNCiAgICANCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5zdWNjZXNzeCIgdW5pY29kZT0iJiM1OTAyMjsiIGQ9Ik01MTItMTI1LjE1NTU1NkMyMzMuMjQ0NDQ0LTEyNS4xNTU1NTYgMi44NDQ0NDQgMTAyLjQgMi44NDQ0NDQgMzg0UzIzMy4yNDQ0NDQgODkzLjE1NTU1NiA1MTIgODkzLjE1NTU1NnM1MDkuMTU1NTU2LTIyNy41NTU1NTYgNTA5LjE1NTU1Ni01MDkuMTU1NTU2YzAtMTM2LjUzMzMzMy01Ni44ODg4ODktMjY3LjM3Nzc3OC0xNTMuNi0zNjQuMDg4ODg5bC0yNS42IDI1LjZjOTEuMDIyMjIyIDg4LjE3Nzc3OCAxNDIuMjIyMjIyIDIxMC40ODg4ODkgMTQyLjIyMjIyMiAzMzUuNjQ0NDQ1IDAgMjU4Ljg0NDQ0NC0yMTAuNDg4ODg5IDQ3Mi4xNzc3NzgtNDY5LjMzMzMzNCA0NzIuMTc3Nzc3UzM5LjgyMjIyMiA2NDIuODQ0NDQ0IDM5LjgyMjIyMiAzODQgMjUzLjE1NTU1Ni04NS4zMzMzMzMgNTEyLTg1LjMzMzMzM2M1MS4yIDAgMTA1LjI0NDQ0NCA4LjUzMzMzMyAxNTkuMjg4ODg5IDI4LjQ0NDQ0NGwxMS4zNzc3NzgtMzQuMTMzMzMzYy01Ni44ODg4ODktMjIuNzU1NTU2LTExNi42MjIyMjItMzQuMTMzMzMzLTE3MC42NjY2NjctMzQuMTMzMzM0ek0yNzUuODI1Nzc4IDE2OS41NTczMzNMNzIzLjkxMTExMSA2MjIuNTM1MTExbDI2LjI4MjY2Ny0yNi4wMjY2NjdMMzAyLjA4IDE0My41NTkxMTF6TTI3My41MjE3NzggNTk1Ljk2OGwyNS45OTgyMjIgMjYuMjgyNjY3IDQ1Mi45NDkzMzMtNDQ4LjExMzc3OC0yNS45OTgyMjItMjYuMjgyNjY3eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPg0KDQogICAgDQogICAgPGdseXBoIGdseXBoLW5hbWU9ImNsb3NleCIgdW5pY29kZT0iJiM1OTAzMzsiIGQ9Ik03NTAuMDggNTk2LjQ4bC0yNi4xMTIgMjYuMTEyLTIwOS45Mi0yMTIuNDgtMjE0LjUyOCAyMTEuOTY4LTI2LjExMi0yNi4xMTJMNDg3LjkzNiAzODRsLTIxMS45NjgtMjE0LjUyOEwzMDIuMDggMTQzLjM2bDIxMS45NjggMjE0LjUyOCAyMTIuNDgtMjA5LjkyIDI2LjExMiAyNi4xMTItMjEyLjQ4IDIwOS45MnpNNTEyIDg5NC40NjRDMjI5Ljg4OCA4OTQuNDY0IDEuNTM2IDY2Ni4xMTIgMS41MzYgMzg0czIyOC4zNTItNTEwLjQ2NCA1MTAuNDY0LTUxMC40NjQgNTEwLjQ2NCAyMjguMzUyIDUxMC40NjQgNTEwLjQ2NFM3OTQuMTEyIDg5NC40NjQgNTEyIDg5NC40NjR6IG0wLTk4Mi4wMTZjLTI2MC4wOTYgMC00NzEuNTUyIDIxMS40NTYtNDcxLjU1MiA0NzEuNTUyUzI1MS45MDQgODU1LjU1MiA1MTIgODU1LjU1MnM0NzEuNTUyLTIxMS40NTYgNDcxLjU1Mi00NzEuNTUyLTIxMS40NTYtNDcxLjU1Mi00NzEuNTUyLTQ3MS41NTJ6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+DQoNCiAgICANCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icmlnaHR4IiB1bmljb2RlPSImIzU5MDM2OyIgZD0iTTI5Mi44NjQgNzM5LjMyOGwzNjcuMTA0LTM2Ni41OTItMzY3LjEwNC0zNjQuMDMydi03NC4yNGw0MzguMjcyIDQzNS4yLTQzOC4yNzIgNDQwLjgzMnoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4NCg0KICAgIA0KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJsZWZ0eCIgdW5pY29kZT0iJiM1OTAzNzsiIGQ9Ik03MzEuMTM2IDUuNjMybC0zNjcuMTA0IDM2Ny4xMDQgMzY3LjEwNCAzNjQuMDMyVjgxMC40OTZsLTQzOC4yNzItNDM1LjIgNDM4LjI3Mi00NDAuODMyeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPg0KDQogICAgDQogICAgPGdseXBoIGdseXBoLW5hbWU9Im9ueCIgdW5pY29kZT0iJiM1OTAzODsiIGQ9Ik0xNDQuODk2IDE1My42TDUxMiA1MjAuMTkybDM2NC4wMzItMzY2LjU5Mmg3NC4yNGwtNDM1LjIgNDM4LjI3Mkw3My43MjggMTUzLjZ6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+DQoNCiAgICANCg0KDQogIDwvZm9udD4NCjwvZGVmcz48L3N2Zz4NCg=="

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', {
    staticClass: "vm-iconfont",
    class: 'vm-icon-' + _vm.name,
    style: ({
      fontSize: _vm.size + 'rem'
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-770e66a0", module.exports)
  }
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-topbar",
    style: ({
      paddingTop: _vm.top,
      background: _vm.bgColor,
      color: _vm.color,
      borderBottom: _vm.borderBottom
    })
  }, [_c('div', {
    staticClass: "vm-topbar-inner"
  }, [(_vm.leftEnabled) ? _c('div', {
    staticClass: "vm-topbar-left"
  }, [_vm._t("left", [_c('a', {
    staticClass: "vm-topbar-btn-back",
    style: ({
      color: _vm.color
    }),
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": function($event) {
        _vm.leftCallback && _vm.leftCallback()
      }
    }
  }, [_c('icon', {
    attrs: {
      "name": "left",
      "size": _vm.backSize
    }
  })], 1)])], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vm-topbar-title"
  }, [_vm._t("default", [_vm._v("无标题页面")])], 2), _vm._v(" "), (_vm.rightEnabled) ? _c('div', {
    staticClass: "vm-topbar-right"
  }, [_vm._t("right")], 2) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-23e65c7b", module.exports)
  }
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(199),
  /* template */
  __webpack_require__(200),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\button\\button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9acae40a", Component.options)
  } else {
    hotAPI.reload("data-v-9acae40a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b3231b7a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9acae40a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9acae40a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-button {\n  min-width: 1rem;\n  font-size: .16rem;\n  height: .48rem;\n  box-sizing: border-box;\n  color: #fff;\n  display: inline-block;\n  margin: auto;\n  background: transparent;\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  border: 0px;\n  word-break: keep-all;\n  padding: 0px 0.15rem;\n}\n.vm-button:active {\n  opacity: 0.7;\n}\n.vm-button[disabled] {\n  border: 0 !important;\n  color: #fff !important;\n  background: #e1e1e1 !important;\n}\n.vm-button[disabled]:active {\n  opacity: 1;\n}\n.vm-button-small {\n  min-width: 0px;\n  font-size: 0.14rem;\n  height: 0.32rem;\n}\n", ""]);

// exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__(1);

var Button = {
    name: 'button',

    props: {
        type: {
            type: String,
            default: 'main'
        },

        radius: {
            type: Number,
            default: function _default() {
                return Button.config('radius');
            }
        },

        small: {
            type: Boolean,
            default: false
        },

        square: {
            type: Boolean,
            default: false
        },

        border: {
            type: Boolean,
            default: false
        },

        disable: {
            type: Boolean,
            default: false
        },

        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            color: Button.config('colors')[this.type]
        };
    },


    computed: {
        style: function style() {
            var self = this;
            var style = {
                'border-radius': (self.square ? '0' : self.radius) + 'px'
            };

            if (self.border) {
                style.color = self.color;
                style.border = '1px solid ' + self.color;
            } else {
                style.background = self.color;
            }

            return style;
        },
        className: function className() {
            return ['vm-button', 'vm-button-' + this.type, this.small ? 'vm-button-small' : ''];
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_helper.Util.defineConfig(Button, {
    radius: 100,
    colors: {
        main: 'rgb(249, 104, 84)',
        success: 'rgb(98, 129, 194)',
        drak: '#3B4263'
    }
});

exports.default = Button;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.className,
    style: (_vm.style),
    attrs: {
      "disabled": _vm.type == 'disable' || _vm.disable || _vm.disabled
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.$emit('click')
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9acae40a", module.exports)
  }
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _alert = __webpack_require__(202);

var _alert2 = _interopRequireDefault(_alert);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function override(callback) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (_typeof(args[1]) != 'object') {
            args.splice(1, 0, {});
        } else if (!args[1]) {
            args[1] = '';
        }

        return callback.apply(window, args);
    };
};

var Alert = override(function (content, options, _callback) {
    var buttons = options.buttons;

    if (!buttons) {
        buttons = {};
        buttons[options.confirmButtonText || '确定'] = {
            type: options.buttonType || options.type,
            callback: function callback() {
                _callback && _callback();
                this.destroy(false);
            }
        };
    }

    return _helper.Util.factory(_alert2.default, {
        content: content,
        extras: options.extras,
        flex: options.flex,
        buttons: buttons
    });
});

Alert.confirm = override(function (content, options, _callback2, cancelCallback) {
    var buttons = {};

    buttons[options.cancelButtonText || '取消'] = {
        border: true,
        type: options.buttonType || options.type,
        callback: function callback() {
            cancelCallback && cancelCallback();
            this.destroy(false);
        }
    };

    buttons[options.confirmButtonText || '确定'] = {
        type: options.buttonType || options.type,
        callback: function callback() {
            _callback2 && _callback2();
            this.destroy(false);
        }
    };

    return _helper.Util.factory(_alert2.default, {
        content: content,
        extras: options.extras,
        flex: options.flex !== false,
        buttons: buttons
    });
});

Alert.Component = _alert2.default;
exports.default = _helper.Util.register(Alert);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(211),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\alert\\alert.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] alert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57370796", Component.options)
  } else {
    hotAPI.reload("data-v-57370796", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("28152ada", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57370796\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alert.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-57370796\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-alert.vm-overlay {\n  border-radius: 4px;\n  width: 65%;\n  padding: 0px .1rem;\n}\n.vm-alert-content {\n  color: #3B4263;\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 28px;\n  text-align: center;\n  margin-top: 0.16rem;\n  margin-bottom: 0.16rem;\n}\n.vm-alert-extras {\n  margin-top: 0.08rem;\n  color: #555;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n}\n.vm-alert-footer {\n  text-align: center;\n  margin-bottom: 0.16rem;\n}\n.vm-alert-flexfooter {\n  display: flex;\n  flex-wrap: wrap;\n}\n.vm-alert-btn {\n  flex: 1;\n  text-align: center;\n  margin-bottom: 6px;\n}\n.vm-alert-btn .vm-button {\n  width: 90%;\n  height: 0.36rem;\n}\n", ""]);

// exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

var _button = __webpack_require__(36);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'alert',

    mixins: [_overlay2.default],

    props: {
        content: {
            type: String,
            default: ''
        },

        extras: {
            type: String,
            default: null
        },

        flex: {
            type: Boolean,
            default: false
        },

        buttons: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    components: {
        vmMask: _mask2.default,
        Overlay: _overlay2.default,
        Btn: _button2.default
    },

    data: function data() {
        return {
            visibility: true
        };
    },


    methods: {
        callButton: function callButton(key) {
            var self = this;
            var props = self.buttons[key];

            if (props.callback) {
                return props.callback.call(self);
            } else {
                return props.call(self);
            }
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(207)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(209),
  /* template */
  __webpack_require__(210),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\mask\\mask.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mask.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6883f10a", Component.options)
  } else {
    hotAPI.reload("data-v-6883f10a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a2a425aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6883f10a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mask.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6883f10a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./mask.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-mask.vm-overlay{\n    width: 100%;\n    height: 100%;\n    left: 0px;\n    top: 0px;\n    background: rgba(0, 0, 0, 0.6);\n}\n", ""]);

// exports


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_overlay2.default],

    name: 'mask',

    components: {
        Overlay: _overlay2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('overlay', {
    staticClass: "vm-mask",
    attrs: {
      "visible": _vm.visibility,
      "fx": _vm.fx
    },
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6883f10a", module.exports)
  }
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('vm-mask', {
    attrs: {
      "visible": _vm.visibility
    }
  }, [_c('overlay', {
    staticClass: "vm-alert",
    attrs: {
      "visible": true,
      "position": "center"
    }
  }, [_c('div', {
    staticClass: "vm-alert-content"
  }, [_vm._t("default", [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }), _vm._v(" "), (!!_vm.extras) ? _c('div', {
    staticClass: "vm-alert-extras",
    domProps: {
      "innerHTML": _vm._s(_vm.extras)
    }
  }) : _vm._e()])], 2), _vm._v(" "), _c('div', {
    class: ['vm-alert-footer', _vm.flex ? 'vm-alert-flexfooter' : '']
  }, [_vm._t("footer", _vm._l((_vm.buttons), function(button, key) {
    return _c('div', {
      staticClass: "vm-alert-btn"
    }, [_c('btn', {
      style: (button.style),
      attrs: {
        "small": true,
        "border": button.border,
        "type": button.type || 'main'
      },
      on: {
        "click": function($event) {
          return _vm.callButton(key)
        }
      }
    }, [_vm._v(_vm._s(key))])], 1)
  }))], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57370796", module.exports)
  }
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(213)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(216),
  /* template */
  __webpack_require__(217),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\toast\\toast.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] toast.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c8012ea", Component.options)
  } else {
    hotAPI.reload("data-v-4c8012ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7ab6e1ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c8012ea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toast.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c8012ea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toast.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(17);
exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-toast.vm-overlay{\n    text-align: center;\n    width: 90%;\n    background: transparent;\n}\n.vm-toast-inner{\n    word-break: break-all;\n    display: inline-block;\n    font-size: 0.16rem;\n    color: #FFFFFF;\n    line-height: 0.28rem;\n    padding: 0.08rem 0.15rem;\n    background: rgba(0, 0, 0, 0.7);\n    border-radius: 4px;\n}\n.vm-toast-icon{\n    width: .36rem;\n    height: .36rem;\n    display: block;\n    margin: .05rem auto 0.07rem auto;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    background-position: center center;\n}\n.vm-toast-success{\n    font-family: \"vm-iconfont\" !important;\n    font-size: 0.36rem;\n    font-style: normal;\n    color: rgb(133, 205, 158);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.vm-toast-success:before{\n    content: \"\\E68D\";\n}\n.vm-toast-loading{\n    background-image: url(" + escape(__webpack_require__(215)) + ");\n}\n", ""]);

// exports


/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'toast',

    mixins: [_overlay2.default],

    props: {
        iconClass: {
            type: String,
            default: null
        },

        content: {
            type: String,
            default: null
        },

        mask: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            cont: this.content,
            visibility: true
        };
    },


    watch: {
        content: function content(v) {
            this.setContent(v);
        }
    },

    components: {
        Overlay: _overlay2.default,
        vmMask: _mask2.default
    },

    methods: {
        setContent: function setContent(content) {
            this.cont = content;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.mask) ? _c('vm-mask', {
    attrs: {
      "visible": _vm.visibility
    }
  }, [_c('overlay', {
    class: 'vm-toast ' + _vm.className,
    attrs: {
      "position": "center",
      "visible": true
    }
  }, [_c('span', {
    staticClass: "vm-toast-inner"
  }, [_vm._t("icon", [(_vm.iconClass) ? _c('i', {
    class: ['vm-toast-icon', _vm.iconClass]
  }) : _vm._e()]), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.cont))])], 2)])], 1) : _c('overlay', {
    class: 'vm-toast ' + _vm.className,
    attrs: {
      "visible": _vm.visibility,
      "position": "center"
    }
  }, [_c('span', {
    staticClass: "vm-toast-inner"
  }, [_vm._t("icon", [(_vm.iconClass) ? _c('i', {
    class: ['vm-toast-icon', _vm.iconClass]
  }) : _vm._e()]), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.cont))])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c8012ea", module.exports)
  }
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionsheet = __webpack_require__(219);

var _actionsheet2 = _interopRequireDefault(_actionsheet);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance;
var ActionSheet = function ActionSheet(actions, cancelDisabled) {
    instance && instance.destroy();
    instance = _helper.Util.factory(_actionsheet2.default, {
        actions: actions,
        cancelDisabled: cancelDisabled,
        visible: true
    });
    instance.$on('close', function () {
        instance.destroy();
    });

    return instance;
};

ActionSheet.Component = _actionsheet2.default;
exports.default = _helper.Util.register(ActionSheet);

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(222),
  /* template */
  __webpack_require__(223),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\actionsheet\\actionsheet.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] actionsheet.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-baa751e2", Component.options)
  } else {
    hotAPI.reload("data-v-baa751e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9dd0add8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-baa751e2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./actionsheet.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-baa751e2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./actionsheet.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-actionsheet {\n  width: 100%;\n  text-align: center;\n  background: transparent;\n}\n.vm-actionsheet-item-inner {\n  margin-top: .1rem;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 100px;\n  font-weight: bold;\n  height: 46px;\n  line-height: 46px;\n  display: inline-block;\n  width: 90%;\n  font-size: 16px;\n  color: #222222;\n}\n.vm-actionsheet-cancel {\n  font-weight: normal;\n}\n.vm-actionsheet-cancel .vm-actionsheet-item-inner {\n  margin-bottom: .16rem;\n}\n", ""]);

// exports


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'actionsheet',

    mixins: [_overlay2.default],

    props: {
        visible: {
            type: Boolean,
            default: false
        },

        actions: {
            type: [Object, Array],
            default: function _default() {
                return {};
            }
        },

        cancelDisabled: {
            type: Boolean,
            default: false
        }
    },

    components: {
        vmMask: _mask2.default,
        Overlay: _overlay2.default
    },

    data: function data() {
        return {
            visibility: this.visible
        };
    },


    methods: {
        callAction: function callAction(index) {
            this.actions[index].call(this);
        }
    }
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('vm-mask', {
    attrs: {
      "visible": _vm.visibility
    },
    on: {
      "click": _vm.close
    }
  }, [_c('overlay', {
    staticClass: "vm-actionsheet",
    attrs: {
      "visible": _vm.visibility,
      "position": "bottom"
    }
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "0.08rem"
    }
  }, [(_vm.$slots.header) ? _c('div', {
    staticClass: "vm-actionsheet-header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _vm._l((_vm.actions), function(action, index) {
    return _c('div', {
      key: index,
      staticClass: "vm-actionsheet-item",
      on: {
        "click": function($event) {
          return _vm.callAction(index)
        }
      }
    }, [_vm._t("item", [_c('div', {
      staticClass: "vm-actionsheet-item-inner"
    }, [_vm._v(_vm._s(index))])], {
      "text": index
    })], 2)
  }), _vm._v(" "), (_vm.$slots.footer) ? _c('div', {
    staticClass: "vm-actionsheet-footer"
  }, [_vm._t("footer")], 2) : _vm._e()], 2), _vm._v(" "), (!_vm.cancelDisabled) ? _c('div', {
    staticClass: "vm-actionsheet-cancel",
    on: {
      "click": _vm.close
    }
  }, [_vm._t("cancel", [_c('div', {
    staticClass: "vm-actionsheet-item-inner"
  }, [_vm._v("取消")])])], 2) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-baa751e2", module.exports)
  }
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = __webpack_require__(225);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_dropdown2.default);

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(228),
  /* template */
  __webpack_require__(233),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\dropdown\\dropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0119b8ca", Component.options)
  } else {
    hotAPI.reload("data-v-0119b8ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("62a10fed", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0119b8ca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dropdown.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0119b8ca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dropdown.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-dropdown {\n  border-bottom: 1px solid #eee;\n  flex: 1;\n}\n.vm-dropdown-label {\n  font-size: .14rem;\n  text-decoration: none;\n  display: inline-block;\n  height: .44rem;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n  line-height: .44rem;\n}\n.vm-dropdown-inner {\n  max-height: 3.5rem;\n}\n", ""]);

// exports


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _box = __webpack_require__(37);

var _box2 = _interopRequireDefault(_box);

var _helper = __webpack_require__(1);

var _icon = __webpack_require__(15);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDown = {
    name: 'dropdown',

    props: {
        label: {
            type: String,
            default: ''
        },

        labelColor: {
            type: String,
            default: function _default() {
                return DropDown.config('labelColor');
            }
        },

        labelHighColor: {
            type: String,
            default: function _default() {
                return DropDown.config('labelHighColor');
            }
        }
    },

    components: {
        Dropbox: _box2.default,
        Icon: _icon2.default
    },

    data: function data() {
        return {
            isOpen: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        var self = this;

        self.$nextTick(function () {
            var $box = self.$refs.box;

            $box.$on('open', function () {
                self.isOpen = true;
                _this.$emit('open');
            });

            $box.$on('close', function () {
                self.isOpen = false;
                _this.$emit('close');
            });
        });
    },


    methods: {
        open: function open() {
            this.$refs.box.open();
        },
        close: function close() {
            this.$refs.box.close();
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_helper.Util.defineConfig(DropDown, {
    labelColor: '#6281C2',
    labelHighColor: '#6281C2'
});

exports.default = DropDown;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(230);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("04890ff7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-161a9631\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./box.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-161a9631\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./box.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-dropbox.vm-overlay{\n    position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance; //
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_overlay2.default],

    props: {
        offset: {
            type: Object,
            default: function _default() {
                return {
                    x: 0,
                    y: 0
                };
            }
        }
    },

    data: function data() {
        return {
            above: false
        };
    },


    computed: {
        pos: function pos() {
            return this.above ? 'bottom' : 'top';
        }
    },

    components: {
        Overlay: _overlay2.default,
        vmMask: _mask2.default
    },

    mounted: function mounted() {
        var self = this;

        self.$nextTick(function () {
            _helper.Event.on(self.$el.parentNode, 'click', function (e) {
                // fixed android bug
                setTimeout(function () {
                    self.toggle();
                }, 100);
            });

            _helper.Event.on(self.$refs.overlay.$el, 'click', function (e) {
                e.stopPropagation();
            });
        });
    },


    methods: {
        toggle: function toggle() {
            this.visibility ? this.close() : this.open();
        },
        open: function open() {
            var self = this;

            if (_overlay2.default.methods.open.call(self) !== false) {
                var bodyHeight = _helper.Dom.height(document);
                var rect = _helper.Dom.rect(this.$el.parentNode);

                self.above = rect.top + rect.height > bodyHeight / 2;
                instance && instance.close();
                instance = self;

                if (self.above) {
                    _helper.Dom.css(self.$el, {
                        bottom: bodyHeight - rect.top,
                        height: rect.top
                    });
                } else {
                    _helper.Dom.css(self.$el, {
                        top: rect.bottom,
                        height: bodyHeight - rect.bottom
                    });
                }

                self.$emit('open');
            }
        },
        close: function close() {
            instance = null;

            if (_overlay2.default.methods.close.call(this) !== false) {
                this.$emit('close');
            }
        }
    }
};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('vm-mask', {
    ref: "mask",
    attrs: {
      "visible": _vm.visibility
    }
  }, [_c('overlay', {
    ref: "overlay",
    class: ['vm-dropbox', 'vm-dropbox-' + _vm.pos],
    attrs: {
      "visible": _vm.visibility,
      "position": _vm.pos,
      "fx": true
    }
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-161a9631", module.exports)
  }
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: 'vm-dropdown' + (_vm.isOpen ? ' vm-dropdown-open' : '')
  }, [_c('a', {
    ref: "label",
    staticClass: "vm-dropdown-label",
    style: ({
      color: !_vm.isOpen ? _vm.labelColor : _vm.labelHighColor
    }),
    attrs: {
      "href": "javascript:"
    }
  }, [_vm._v("\n        " + _vm._s(_vm.label) + "\n        "), _c('icon', {
    attrs: {
      "name": _vm.isOpen ? 'up' : 'down'
    }
  })], 1), _vm._v(" "), _c('dropbox', {
    ref: "box"
  }, [_c('div', {
    staticClass: "vm-dropdown-inner"
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0119b8ca", module.exports)
  }
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popover = __webpack_require__(235);

var _popover2 = _interopRequireDefault(_popover);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_popover2.default);

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(236)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(238),
  /* template */
  __webpack_require__(239),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\popover\\popover.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] popover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-452b28f2", Component.options)
  } else {
    hotAPI.reload("data-v-452b28f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1ea9ea56", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-452b28f2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-452b28f2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./popover.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-popover {\n  font-weight: normal;\n  line-height: normal;\n  height: 100%;\n}\n.vm-popover.vm-mask {\n  background: transparent !important;\n}\n.vm-popover .vm-overlay {\n  background: transparent !important;\n  width: auto;\n}\n.vm-popover .vm-dropbox-bottom .vm-popover-arrow {\n  border-bottom-color: transparent !important;\n  top: 100%;\n  transform: translate(-0.08rem, -10%);\n}\n.vm-popover .vm-dropbox-top .vm-popover-arrow {\n  border-top-color: transparent !important;\n}\n.vm-popover-mask {\n  width: 100% !important;\n}\n.vm-popover-inner {\n  border-radius: 3px;\n  padding: 0px .08rem;\n  margin: .12rem 0px;\n  position: relative;\n  z-index: 100000;\n}\n.vm-popover-item {\n  display: block;\n  text-decoration: none;\n  padding: .06rem 0px;\n  font-size: .16rem;\n  text-align: left;\n}\n.vm-popover-item:last-child {\n  border: 0px !important;\n}\n.vm-popover-item .icon {\n  float: left;\n  font-size: 0.17rem;\n  display: inline-block;\n  margin-right: .05rem;\n}\n.vm-popover-arrow {\n  position: absolute;\n  content: \"\";\n  border-width: 8px;\n  border-style: solid;\n  border-left-color: transparent !important;\n  border-right-color: transparent !important;\n  height: 0px;\n  width: 0px;\n  display: inline-block;\n  border-bottom-color: #28304E;\n  left: 50%;\n  transform: translate(-0.08rem, -90%);\n}\n", ""]);

// exports


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _box = __webpack_require__(37);

var _box2 = _interopRequireDefault(_box);

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopOver = {
    name: 'popover',

    props: {
        actions: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        offset: {
            type: Object,
            default: function _default() {
                return {
                    x: 5,
                    y: 5
                };
            }
        },

        color: {
            type: String,
            default: function _default() {
                return PopOver.config('color');
            }
        },

        bgColor: {
            type: String,
            default: function _default() {
                return PopOver.config('bgColor');
            }
        }
    },

    components: {
        Dropbox: _box2.default,
        vmMask: _mask2.default
    },

    mounted: function mounted() {
        var self = this;

        self.$refs.box.$on('open', function () {
            setTimeout(function () {
                var $inner = self.$refs.inner;
                var x = self.offset.x;

                var _Dom$rect = _helper.Dom.rect(self.$el.parentNode),
                    width = _Dom$rect.width,
                    left = _Dom$rect.left;

                var _Dom$rect2 = _helper.Dom.rect($inner),
                    innerWidth = _Dom$rect2.width;

                var bodyWidth = _helper.Dom.width(document);

                var m = left + width / 2;
                var l = Math.min(Math.max(m - innerWidth / 2, x), bodyWidth - innerWidth - x);

                _helper.Dom.css(self.$refs.box.$refs.overlay.$el, {
                    left: l
                });

                _helper.Dom.css(self.$refs.arrow, 'left', m - l);

                self.$emit('open');
            });
        });
    },


    methods: {
        callAction: function callAction(index) {
            var self = this;
            var action = self.actions[index];

            if (typeof action == 'function') {
                action.call(self);
            } else {
                action.callback.call(self);
            }

            self.$refs.box.close();
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_helper.Util.defineConfig(PopOver, {
    color: '#fff',
    bgColor: '#28304E'
});

exports.default = PopOver;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dropbox', {
    ref: "box",
    staticClass: "vm-popover",
    attrs: {
      "offset": _vm.offset
    }
  }, [_c('vm-mask', {
    staticClass: "vm-popover-mask",
    attrs: {
      "visible": true
    },
    on: {
      "click": function($event) {
        return _vm.$refs.box.close()
      }
    }
  }), _vm._v(" "), _c('div', {
    ref: "inner",
    staticClass: "vm-popover-inner",
    style: ({
      background: _vm.bgColor
    })
  }, [_c('i', {
    ref: "arrow",
    staticClass: "vm-popover-arrow",
    style: ({
      borderColor: _vm.bgColor
    })
  }), _vm._v(" "), _vm._l((_vm.actions), function(action, label) {
    return _c('a', {
      class: ['vm-popover-item', action.className],
      style: ({
        color: _vm.color,
        borderBottom: '1px solid ' + _vm.color
      }),
      attrs: {
        "href": "javascript:void(0);"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          return _vm.callAction(label)
        }
      }
    }, [(action.icon) ? _c('i', {
      class: ['icon', action.icon]
    }) : _vm._e(), _vm._v("\n            " + _vm._s(label) + "\n        ")])
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-452b28f2", module.exports)
  }
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _search = __webpack_require__(241);

var _search2 = _interopRequireDefault(_search);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_search2.default);

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(242)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(244),
  /* template */
  __webpack_require__(250),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\search\\search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c8c458a", Component.options)
  } else {
    hotAPI.reload("data-v-2c8c458a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5cced3e6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c8c458a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c8c458a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-search-cancel {\n  float: right;\n  width: .32rem;\n  display: inline-block;\n  text-decoration: none;\n  color: inherit;\n  font-size: 0.14rem;\n  font-weight: normal;\n}\n.vm-search {\n  font-weight: normal;\n}\n.vm-search .vm-list-rows {\n  margin-bottom: .3rem;\n}\n.vm-search .vm-searchbar-inner {\n  margin: 0px;\n}\n.vm-search .vm-searchbar {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-right: 0.45rem;\n  box-sizing: border-box;\n  width: 100%;\n}\n.vm-search-inner {\n  margin: 0 .16rem;\n  margin-top: .08rem;\n}\n.vm-search-desc,\n.vm-search-history-header {\n  height: .28rem;\n  line-height: .28rem;\n}\n.vm-search-history-container a {\n  text-decoration: none;\n  color: #333;\n}\n.vm-search-historys {\n  margin: 0.08rem 0px;\n}\n.vm-search-history {\n  background: #eee;\n  margin-bottom: .08rem;\n  margin-right: 0.08rem;\n  height: .24rem;\n  line-height: .24rem;\n  display: inline-block;\n  border-radius: 10px;\n  padding: 0px .10rem;\n}\n.vm-searcy-history-clear {\n  float: right;\n  color: #6281C2;\n}\n", ""]);

// exports


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _page = __webpack_require__(35);

var _page2 = _interopRequireDefault(_page);

var _topbar = __webpack_require__(24);

var _topbar2 = _interopRequireDefault(_topbar);

var _searchbar = __webpack_require__(38);

var _searchbar2 = _interopRequireDefault(_searchbar);

var _list = __webpack_require__(33);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'search',

    mixins: [_page2.default, _searchbar2.default],

    components: {
        Page: _page2.default,
        Topbar: _topbar2.default,
        Searchbar: _searchbar2.default,
        List: _list2.default
    },

    props: {
        source: {
            default: function _default() {
                return [];
            }
        },

        useHistory: {
            type: Boolean,
            default: true
        },

        dataFormatter: null,

        params: null,

        autofocus: {
            type: Boolean,
            default: true
        },

        delay: {
            type: Number,
            default: 300
        },

        caching: {
            type: Boolean,
            default: true
        },

        empty2load: {
            type: Boolean,
            default: false
        },

        kw: {
            type: String,
            default: 'kw'
        },

        historyMark: {
            type: String,
            require: true,
            default: null
        },

        closeAfterSelectHistory: {
            type: Boolean,
            default: true
        },

        clearHistoryHandler: {
            type: Function,
            default: function _default(clear) {
                clear();
            }
        },

        closeCallback: {
            type: Function,
            default: function _default() {
                this.close();
            }
        }
    },

    watch: {
        params: {
            handler: function handler() {
                this.load();
            },

            deep: true
        }
    },

    mounted: function mounted() {
        var self = this;

        self.$search = self.$refs.search;
        self.$list = self.$refs.list;
        self.initEvents();

        self.autofocus && setTimeout(function () {
            self.$search.focus();
        }, 1000);
    },
    data: function data() {
        var historys = [];

        try {
            historys = JSON.parse(localStorage.getItem('_vm_history_stores_.' + this.historyMark)) || [];
        } catch (e) {};

        return {
            caches: {},
            isEmpty: true,
            historys: historys,
            timeout: ''
        };
    },


    methods: {
        initEvents: function initEvents() {
            var self = this;var tid;

            self.$search.$on('input', function () {
                clearTimeout(tid);
                self.$list.abort();
                tid = setTimeout(function () {
                    return self.load();
                }, self.delay);
            });

            self.$list.$on('row:click', function (item, index) {
                self.$emit('select', item, index);
                self.addHistory();
            });

            self.$list.$on('xhr:success', function (data) {
                self.caches[self.val] = data;
            });

            self.$list.$on('rows:render', function (data) {
                self.isEmpty = !data.length;
            });
        },
        load: function load() {
            var self = this;

            if (!self.empty2load && !self.val) {
                return;
            }

            if (self.caches[self.val]) {
                self.$list.setData(self.caches[self.val]);
            } else {
                var param = {};

                param[self.kw] = self.val;
                self.$list.setParams(param, true);
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(function () {
                    self.$list.refresh();
                }, 400);
            }
        },
        open: function open() {
            var self = this;

            self.$refs.page.open();
            self.$emit('open');
            setTimeout(function () {
                self.$refs.search.focus();
            }, 400);
        },
        close: function close() {
            var self = this;

            self.$refs.page.close();
            self.$refs.search.blur();
            self.$emit('close');
        },
        submit: function submit() {
            var self = this;

            if (this.closeAfterSelectHistory) {
                self.cancel();
                self.addHistory();
                self.$emit('confirm', self.val);
            }
        },
        clickHistory: function clickHistory(text) {
            this.val = text;
            this.submit();
        },
        clickClearHistory: function clickClearHistory() {
            var _this = this;

            this.clearHistoryHandler(function () {
                _this.clearHistory();
            });
        },
        clearHistory: function clearHistory() {
            this.historys = [];
            this.storeHistory();
        },
        storeHistory: function storeHistory() {
            localStorage.setItem('_vm_history_stores_.' + this.historyMark, JSON.stringify(this.historys));
        },
        addHistory: function addHistory() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.val;

            var self = this;

            if (val && self.historys.indexOf(val) == -1) {
                self.historys.unshift(val);
                self.historys = self.historys.slice(0, 10);
                self.storeHistory();
            }
        },
        cancel: function cancel() {
            this.closeCallback();
        }
    }
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(246)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(248),
  /* template */
  __webpack_require__(249),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\searchbar\\searchbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] searchbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a6cec13", Component.options)
  } else {
    hotAPI.reload("data-v-2a6cec13", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("fe27b698", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a6cec13\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./searchbar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a6cec13\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./searchbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-searchbar {\n  height: .32rem;\n  padding: .06rem 0px;\n  line-height: .32rem;\n  margin-bottom: 0px;\n}\n.vm-searchbar ::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n.vm-searchbar .vm-iconfont {\n  opacity: 0.8;\n}\n.vm-searchbar-blue {\n  background: #28304E;\n  color: #fff;\n}\n.vm-searchbar-blue input {\n  color: #fff;\n}\n.vm-searchbar-inner {\n  height: .32rem;\n  border-radius: 100px;\n  margin: 0px 0.16rem;\n  overflow: hidden;\n  position: relative;\n}\n.vm-searchbar-inner input {\n  color: inherit;\n  font-size: .14rem;\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.32rem;\n  line-height: 0.32rem;\n  float: left;\n  display: block;\n  border: 0px;\n  padding: 0px 0.32rem;\n  outline: none;\n  background: transparent;\n  -webkit-transform: translateY(-1px);\n  transform: translateY(0px);\n}\n.vm-searchbar-inner input:focus {\n  border: 0px;\n}\n.vm-searchbar-inner ::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n.vm-searchbar-icon {\n  position: absolute;\n  left: .1rem;\n  width: 0.2rem;\n  height: .32rem;\n  font-weight: bold;\n  display: inline-block;\n}\n.vm-searchbar-clear {\n  position: absolute;\n  text-align: center;\n  right: .07rem;\n  top: 0rem;\n  line-height: 0.32rem;\n  width: 0.16rem;\n  height: 0.32rem;\n  color: inherit;\n  display: inline-block;\n  font-weight: bold;\n}\n", ""]);

// exports


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = __webpack_require__(15);

var _icon2 = _interopRequireDefault(_icon);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Searchbar = {
    name: 'searchbar',

    props: {
        theme: {
            type: String,
            default: 'white'
        },

        maxlength: {
            type: Number,
            default: 50
        },

        placeholder: {
            type: String,
            default: '请输入关键字进行搜索'
        },

        readonly: {
            type: Boolean,
            default: false
        },

        searchButtonEnabled: {
            type: Boolean,
            default: false
        },

        value: {
            type: String,
            default: ''
        },

        inputBgColor: {
            type: String,
            default: function _default() {
                return Searchbar.config('inputBgColor');
            }
        }
    },

    components: {
        Icon: _icon2.default
    },

    data: function data() {
        return {
            val: this.value
        };
    },


    watch: {
        val: function val(v) {
            this.$emit('input', v);
        },
        value: function value(v) {
            this.val = v.trim();
        }
    },

    methods: {
        focus: function focus() {
            this.$refs.input.focus();
        },
        blur: function blur() {
            this.$refs.input.blur();
        },
        input: function input() {
            this.val = this.$refs.input.value;
        },
        clear: function clear() {
            this.val = '';
            this.$emit('clear');
        },
        submit: function submit() {
            this.$emit('submit');
            this.$refs.input.blur();
        }
    }
};

_helper.Util.defineConfig(Searchbar, {
    inputBgColor: 'rgba(204, 204, 204, 0.2)'
});

exports.default = Searchbar;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    class: ['vm-searchbar', 'vm-searchbar-' + _vm.theme],
    attrs: {
      "method": "javascript:;"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.submit()
      }
    }
  }, [_c('div', {
    staticClass: "vm-searchbar-inner",
    style: ({
      background: _vm.inputBgColor
    })
  }, [_c('icon', {
    staticClass: "vm-searchbar-icon",
    attrs: {
      "name": "search"
    }
  }), _vm._v(" "), _c('input', {
    ref: "input",
    attrs: {
      "type": _vm.searchButtonEnabled ? 'search' : 'text',
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.val
    },
    on: {
      "input": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "trim", undefined, $event.key, undefined)) { return null; }
        return _vm.input($event)
      },
      "focus": function($event) {
        return _vm.$emit('focus')
      },
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }), _vm._v(" "), _c('a', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.val),
      expression: "val"
    }],
    staticClass: "vm-searchbar-clear",
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": function($event) {
        return _vm.clear()
      }
    }
  }, [_c('icon', {
    attrs: {
      "name": "close"
    }
  })], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a6cec13", module.exports)
  }
}

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('page', {
    ref: "page",
    staticClass: "vm-search",
    attrs: {
      "position": "right",
      "fx": _vm.fx,
      "visible": _vm.visibility
    }
  }, [_c('topbar', {
    attrs: {
      "left-enabled": false
    }
  }, [_vm._t("searchLeft"), _vm._v(" "), _vm._t("extra-condition"), _vm._v(" "), _c('searchbar', {
    ref: "search",
    attrs: {
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "input-bg-color": _vm.inputBgColor,
      "search-button-enabled": _vm.closeAfterSelectHistory
    },
    on: {
      "submit": _vm.submit
    },
    model: {
      value: (_vm.val),
      callback: function($$v) {
        _vm.val = $$v
      },
      expression: "val"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "vm-search-cancel",
    attrs: {
      "slot": "right",
      "href": "javascript:"
    },
    on: {
      "touchend": _vm.cancel
    },
    slot: "right"
  }, [_vm._v("取消")])], 2), _vm._v(" "), _c('div', {
    staticClass: "vm-search-inner"
  }, [_c('div', {
    staticClass: "vm-search-header"
  }, [_vm._t("header")], 2), _vm._v(" "), (!_vm.empty2load && !_vm.val && _vm.historys.length) ? _c('div', {
    staticClass: "vm-search-history-container"
  }, [_c('div', {
    staticClass: "vm-search-history-header"
  }, [_vm._v("\n                历史搜索\n                "), _c('a', {
    staticClass: "vm-searcy-history-clear",
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": function($event) {
        return _vm.clickClearHistory()
      }
    }
  }, [_vm._v("清除")])]), _vm._v(" "), _c('div', {
    staticClass: "vm-search-historys"
  }, _vm._l((_vm.historys), function(item, index) {
    return _c('a', {
      staticClass: "vm-search-history",
      attrs: {
        "href": "javascript:"
      },
      on: {
        "click": function($event) {
          return _vm.clickHistory(item, index)
        }
      }
    }, [_vm._t("history-row", [_vm._v(_vm._s(item.length > 20 ? item.substring(0, 20) + '..' : item))], {
      "data": item
    })], 2)
  }), 0)]) : _vm._e(), _vm._v(" "), (!_vm.isEmpty) ? _c('div', {
    staticClass: "vm-search-desc"
  }, [(!_vm.isEmpty) ? _vm._t("desc", [_vm._v("搜索结果")]) : _vm._e()], 2) : _vm._e(), _vm._v(" "), (!_vm.empty2load && !_vm.val) ? _c('div', {
    staticClass: "vm-search-default"
  }, [_vm._t("default")], 2) : _vm._e(), _vm._v(" "), _c('list', {
    ref: "list",
    attrs: {
      "source": _vm.source,
      "data-formatter": _vm.dataFormatter,
      "params": _vm.params,
      "auto-refresh": false
    },
    scopedSlots: _vm._u([{
      key: "row",
      fn: function(props) {
        return [_vm._t("row", [_vm._v(_vm._s(props.data))], {
          "data": props.data
        })]
      }
    }], null, true)
  }, [_vm._v(" "), (_vm.$slots.nores) ? _c('template', {
    slot: "nores"
  }, [_vm._t("nores")], 2) : _vm._e()], 2)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c8c458a", module.exports)
  }
}

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(252)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(254),
  /* template */
  __webpack_require__(255),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\uploader\\uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] uploader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-912da78a", Component.options)
  } else {
    hotAPI.reload("data-v-912da78a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4eb66978", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-912da78a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./uploader.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-912da78a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./uploader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-uploader {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  border-radius: 0.04rem;\n}\n.vm-uploader .vm-uploader-icon {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  background: #f3f3f3;\n}\n.vm-uploader .vm-uploader-icon:before {\n  width: 0.32rem;\n  height: 0.05rem;\n  background: #f3f3f3;\n}\n.vm-uploader .vm-uploader-icon:after {\n  height: 0.32rem;\n  width: 0.05rem;\n}\n.vm-uploader .vm-uploader-icon:before,\n.vm-uploader .vm-uploader-icon:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  background: #fff;\n}\n.vm-uploader-input {\n  display: block;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 1;\n}\n", ""]);

// exports


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__(1);

var _toast = __webpack_require__(26);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Uploader = {
    name: 'uploader',

    props: {
        multiple: {
            type: Boolean,
            default: false
        },

        params: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        name: {
            type: String,
            default: null
        },

        accept: {
            type: String,
            default: '*'
        },

        usePack: {
            type: Boolean,
            default: true
        },

        url: {
            type: String,
            default: ''
        },

        beforeUploadProcessor: {
            type: Function,
            default: function _default(files, next) {
                return next(files);
            }
        },

        canUpload: {
            type: Function,
            default: function _default(files) {
                return true;
            }
        }
    },

    mounted: function mounted() {
        this.files = [];
        this.xhr = null;
    },


    methods: {
        onSelect: function onSelect() {
            var self = this;
            var files = [].slice.call(self.$refs.uploader.files);

            _helper.Util.each(files, function (file) {
                file.url = Uploader.getUrl(file);
            });

            self.$emit('select', files);
            self.upload(files);
        },
        upload: function upload() {
            var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var self = this;

            self.beforeUploadProcessor(files, function (files) {
                if (!self.canUpload(files)) {
                    self.$emit('reject', files);
                    return false;
                }

                self.files = self.files.concat(files);
                self._upload();
            });
        },
        _upload: function _upload() {
            var _this = this;

            var self = this;var files = self.files;

            if (!files.length) {
                return false;
            }

            if (!self.usePack) {
                files = [self.files.shift()];
            } else {
                files = self.files.slice(0);
                self.clear();
            }

            self.$emit('upload:start', files);

            var formData = new FormData();

            files.forEach(function (file, key) {
                formData.append(_this.name || 'file' + key, file);
            });

            for (var key in this.params) {
                formData.append(key, this.params[key]);
            }

            var xhr = self.xhr = new XMLHttpRequest();

            xhr.onload = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 304) {
                        var data = {};

                        try {
                            data = JSON.parse(xhr.responseText);
                        } catch (e) {};

                        self.$emit('upload:complete', files, data);
                    }

                    _this._upload();
                }
            };
            xhr.onerror = function () {
                self.$emit('upload:error', files, xhr.status);
            };
            xhr.upload.onprogress = function (event) {
                self.$emit('upload:progress', files, event);
            };
            xhr.open('post', self.url, true);
            xhr.send(formData);
        },
        abort: function abort() {
            this.xhr && this.xhr.abort();
            this.clear();
        },
        clear: function clear() {
            this.files.length = 0;
            this.$refs.uploader.value = '';
        }
    }
};

Uploader.getUrl = function () {
    var url = window.URL || window.webkitURL;

    if (!url) {
        return function (file) {
            return file.name;
        };
    }

    return url.createObjectURL;
}();

exports.default = Uploader;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "vm-uploader",
    attrs: {
      "href": "javascript:"
    }
  }, [_vm._t("default", [_c('i', {
    staticClass: "vm-uploader-icon"
  })]), _vm._v(" "), _c('input', {
    ref: "uploader",
    staticClass: "vm-uploader-input",
    attrs: {
      "type": "file",
      "accept": _vm.accept,
      "multiple": _vm.multiple
    },
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      },
      "change": _vm.onSelect
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-912da78a", module.exports)
  }
}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateInput = exports.Switch = exports.Images = exports.Select = exports.Textarea = exports.TextInput = exports.Checkboxes = exports.Radios = exports.FormCell = undefined;

var _radios = __webpack_require__(40);

var _radios2 = _interopRequireDefault(_radios);

var _checkboxes = __webpack_require__(269);

var _checkboxes2 = _interopRequireDefault(_checkboxes);

var _text = __webpack_require__(18);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(275);

var _textarea2 = _interopRequireDefault(_textarea);

var _select = __webpack_require__(280);

var _select2 = _interopRequireDefault(_select);

var _images = __webpack_require__(293);

var _images2 = _interopRequireDefault(_images);

var _switch = __webpack_require__(298);

var _switch2 = _interopRequireDefault(_switch);

var _cell = __webpack_require__(12);

var _cell2 = _interopRequireDefault(_cell);

var _date = __webpack_require__(303);

var _date2 = _interopRequireDefault(_date);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_radios2.default);
_helper.Util.register(_checkboxes2.default);
_helper.Util.register(_text2.default);
_helper.Util.register(_textarea2.default);
_helper.Util.register(_select2.default);
_helper.Util.register(_images2.default);
_helper.Util.register(_switch2.default);
_helper.Util.register(_cell2.default);
_helper.Util.register(_date2.default);

exports.FormCell = _cell2.default;
exports.Radios = _radios2.default;
exports.Checkboxes = _checkboxes2.default;
exports.TextInput = _text2.default;
exports.Textarea = _textarea2.default;
exports.Select = _select2.default;
exports.Images = _images2.default;
exports.Switch = _switch2.default;
exports.DateInput = _date2.default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7d127f24", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3255062\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radios.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3255062\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radios.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-form-tags-inner{\n    display: flex;\n    flex-wrap: wrap;\n    margin-start: auto;\n    -webkit-margin-start: auto;\n}\n.vm-form-tag{\n    width: 0.78rem;\n    height: .22rem;\n    font-size: .12rem;\n    color: #878787;\n    border-radius: 100px;\n    border: 0.01rem solid #878787;\n    background: #fff;\n    outline: none;\n    margin-top: 0.06rem;\n    margin-bottom: 0.06rem;\n    margin-left: 0.1rem;\n}\n.vm-form-flex .vm-form-tag{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.vm-form-tag:nth-child(4n + 1){\n    margin-left: 0px;\n}\n.vm-form-tag-selected{\n    color: #6281c2;\n    border: 1px solid #6281c2;\n}\n", ""]);

// exports


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(12);

var _cell2 = _interopRequireDefault(_cell);

var _abstract = __webpack_require__(9);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radios = {
    name: 'radios',

    mixins: [_cell2.default, _abstract.Single],

    props: {
        options: {
            type: Array,
            required: true
        },

        selectedClassName: {
            type: String,
            default: function _default() {
                return Radios.config('selectedClassName');
            }
        }
    },

    components: {
        Cell: _cell2.default
    },

    methods: {
        onClick: function onClick(v) {
            this.val = v;
        },
        getClassName: function getClassName(v) {
            return ['vm-form-tag', v == this.val ? this.selectedClassName : ''];
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_helper.Util.defineConfig(Radios, {
    selectedClassName: 'vm-form-tag-selected'
});
exports.default = Radios;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(261);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c5264c16", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-831127ce\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cell.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-831127ce\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cell.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-form-cell {\n  color: #555;\n}\n.vm-form-field {\n  min-height: .36rem;\n  margin-bottom: 0.06rem;\n}\n.vm-form-flex {\n  display: flex;\n}\n.vm-form-flex .vm-form-field {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-bottom: 0px;\n}\n.vm-form-label {\n  display: flex;\n  height: 0.24rem;\n  line-height: 0.24rem;\n  margin-top: 0.06rem;\n  margin-bottom: 0.06rem;\n}\n.vm-form-tips {\n  color: #aaa;\n  margin-start: auto;\n  -webkit-margin-start: auto;\n  font-size: .12rem;\n}\n", ""]);

// exports


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(41);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'form-cell',

    components: {
        Row: _row2.default
    },

    props: {
        label: {
            type: String,
            default: null
        },

        verticalLayout: {
            type: Boolean,
            default: true
        },

        name: {
            type: String,
            default: function _default() {
                return String(Date.now());
            }
        },

        tips: {
            type: String,
            default: null
        }
    },

    data: function data() {
        return {
            flexLayout: !this.verticalLayout && !this.$slots.tips && !this.tips
        };
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2aaebdc2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9ca7b84e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./row.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9ca7b84e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./row.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-box-row {\n  height: auto;\n  display: flex;\n  background: #fff;\n  align-items: stretch;\n  padding-left: 0.12rem;\n}\n.vm-box-row-icon {\n  display: flex;\n  align-items: center;\n}\n.vm-box-row-icon {\n  border-bottom: 1px solid transparent;\n  margin-right: 0.12rem;\n}\n.vm-box-row-content {\n  flex: 1;\n  align-items: center;\n  padding: 0.06rem 0px;\n  padding-right: 0.12rem;\n  box-sizing: border-box;\n  border-bottom: 1px solid #eee;\n}\n.vm-box-row:nth-last-child(1) .vm-box-row-icon,\n.vm-box-row:nth-last-child(1) .vm-box-row-content {\n  border-bottom: 0px;\n}\n", ""]);

// exports


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'row',
    props: {
        flex: {
            type: Boolean,
            default: true
        }
    }
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-box-row",
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [(_vm.$slots.icon) ? _c('span', {
    staticClass: "vm-box-row-icon"
  }, [_vm._t("icon")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vm-box-row-content",
    style: ({
      display: _vm.flex ? 'flex' : 'block'
    })
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9ca7b84e", module.exports)
  }
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('row', {
    staticClass: "vm-form-cell",
    attrs: {
      "flex": false
    }
  }, [_c('div', {
    class: ['vm-form-cell-main', _vm.flexLayout ? 'vm-form-flex' : '']
  }, [(_vm.label || _vm.$slots.label) ? _c('div', {
    staticClass: "vm-form-label"
  }, [_vm._t("label", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), (_vm.tips || _vm.$slots.tips) ? _c('span', {
    staticClass: "vm-form-tips"
  }, [_vm._t("tips", [_vm._v(_vm._s(_vm.tips))])], 2) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vm-form-field"
  }, [_vm._t("default")], 2)]), _vm._v(" "), (_vm.$slots.extra) ? _c('div', {
    staticClass: "vm-form-cell-extra"
  }, [_vm._t("extra")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-831127ce", module.exports)
  }
}

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    attrs: {
      "label": _vm.label,
      "vertical-layout": _vm.options.length > 3
    }
  }, [(_vm.$slots.label) ? _c('template', {
    slot: "label"
  }, [_vm._t("label")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.tips && _vm.options.length > 3) ? _c('template', {
    slot: "tips"
  }, [_vm._t("tips")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vm-form-tags-inner"
  }, _vm._l((_vm.options), function(option, index) {
    return _c('button', {
      class: _vm.getClassName(option.value),
      on: {
        "click": function($event) {
          return _vm.onClick(option.value)
        }
      }
    }, [_vm._v(_vm._s(option.label))])
  }), 0)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e3255062", module.exports)
  }
}

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(270),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\checkboxes.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f10d3a8", Component.options)
  } else {
    hotAPI.reload("data-v-3f10d3a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _radios = __webpack_require__(40);

var _radios2 = _interopRequireDefault(_radios);

var _abstract = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'checkboxes',

    mixins: [_radios2.default, _abstract.Multiable],

    props: {
        unlimit: {
            type: [Number, String],
            default: -1
        }
    },

    methods: {
        onClick: function onClick(v) {
            if (this.unlimit === v) {
                this.save([this.unlimit], false);
            } else if (this.val.indexOf(this.unlimit) > -1) {
                this.save([v], false);
            } else {
                var vals = this.val.slice(0);
                var index = vals.indexOf(v);

                if (index > -1) {
                    vals.splice(index, 1);
                } else {
                    vals.push(v);
                }

                this.save(vals, false);
            }
        },
        getClassName: function getClassName(v) {
            return ['vm-form-tag', this.val.indexOf(v) > -1 ? this.selectedClassName : ''];
        }
    }
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8080d9c8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8d536b38\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./text.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8d536b38\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./text.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-form-textinput input {\n  line-height: .24rem;\n  border: 0px;\n  outline: none;\n  padding: 0px;\n  flex: 1;\n  color: inherit;\n  font-size: .14rem;\n  margin-left: 0.1rem;\n  color: #222;\n}\n.vm-form-textinput input::-webkit-input-placeholder {\n  font-weight: 300;\n  color: #ccc;\n}\n.vm-form-clear {\n  font-weight: bold;\n  margin-left: 0.1rem;\n}\n.vm-form-textinput-other {\n  margin-left: 0.1rem;\n}\n", ""]);

// exports


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(12);

var _cell2 = _interopRequireDefault(_cell);

var _icon = __webpack_require__(15);

var _icon2 = _interopRequireDefault(_icon);

var _abstract = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'textinput',

    mixins: [_cell2.default, _abstract.Single],

    props: {
        placeholder: {
            type: String,
            default: null
        },

        readonly: {
            type: Boolean,
            default: false
        },

        clearable: {
            type: Boolean,
            default: false
        },

        type: {
            type: String,
            default: 'text'
        },

        align: {
            type: String,
            default: 'right'
        },

        maxlength: {
            type: [Number, String],
            default: 100000000
        }
    },

    components: {
        Cell: _cell2.default,
        Icon: _icon2.default
    },

    watch: {
        val: function val(v) {
            this.setValue(v);
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.setValue(_this.val);
        });
    },


    methods: {
        clear: function clear() {
            this.val = '';
            this.$emit('clear');
        },
        onInput: function onInput() {
            this.val = this.$refs.input.value;
        },
        onFocus: function onFocus() {
            if (this.readonly) {
                this.$refs.input.blur();
            } else {
                this.$emit('focus');
            }
        },
        setValue: function setValue(v) {
            this.$refs.input && this.$refs.input.value != v && (this.$refs.input.value = v);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: "vm-form-textinput",
    attrs: {
      "label": _vm.label,
      "vertical-layout": false
    }
  }, [_c('input', {
    ref: "input",
    style: ({
      textAlign: _vm.align
    }),
    attrs: {
      "type": _vm.type,
      "name": _vm.name,
      "maxlength": _vm.maxlength,
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly
    },
    on: {
      "input": _vm.onInput,
      "focus": _vm.onFocus,
      "blur": function($event) {
        return _vm.$emit('blur')
      },
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }), _vm._v(" "), (_vm.$slots.label) ? _c('template', {
    slot: "label"
  }, [_vm._t("label")], 2) : _vm._e(), _vm._v(" "), (_vm.clearable && _vm.val) ? _c('icon', {
    staticClass: "vm-form-clear",
    attrs: {
      "name": "close",
      "size": .14
    },
    nativeOn: {
      "click": function($event) {
        return _vm.clear($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('span', {
    staticClass: "vm-form-textinput-other"
  }, [_vm._t("default")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.extra) ? _c('template', {
    slot: "extra"
  }, [_vm._t("extra")], 2) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8d536b38", module.exports)
  }
}

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(278),
  /* template */
  __webpack_require__(279),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\textarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] textarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d13731e", Component.options)
  } else {
    hotAPI.reload("data-v-0d13731e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("440d0f9e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d13731e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./textarea.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d13731e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./textarea.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-form-textarea-inner {\n  position: relative;\n  width: 100%;\n  display: flex;\n}\n.vm-form-textarea-ph {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  color: #ccc;\n  font-weight: 300;\n  z-index: 1;\n}\n.vm-form-textarea-edit {\n  position: relative;\n  z-index: 2;\n  overflow: scroll;\n  outline: none;\n  flex: 1;\n  color: #222;\n  word-break: break-all;\n  -webkit-user-select: text;\n  -webkit-user-modify: read-write-plaintext-only;\n  -moz-user-modify: read-write-plaintext-only;\n  user-modify: read-write-plaintext-only;\n}\n.vm-form-textarea-other {\n  margin-top: 0.06rem;\n}\n.vm-form-textarea-icon {\n  margin-left: 0.1rem;\n}\n", ""]);

// exports


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(12);

var _cell2 = _interopRequireDefault(_cell);

var _text = __webpack_require__(18);

var _text2 = _interopRequireDefault(_text);

var _abstract = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'textarea',

    mixins: [_cell2.default, _text2.default, _abstract.Single],

    components: {
        Cell: _cell2.default
    },

    props: {
        maxHeight: {
            type: String,
            default: 'auto'
        }
    },

    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.setValue(_this.val);
        });
    },


    methods: {
        input: function input() {
            this.val = this.$refs.area.textContent;
        },
        clickPh: function clickPh() {
            this.$refs.area.focus();
        },
        click: function click() {
            this.focus();
            this.$emit('click');
        },
        focus: function focus() {
            this.$refs.area.focus();
        },
        blur: function blur() {
            this.$refs.area.blur();
        },
        setValue: function setValue(v) {
            this.$refs.area.textContent != v && (this.$refs.area.textContent = v);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: "vm-form-textarea",
    attrs: {
      "label": _vm.label,
      "tips": _vm.tips
    }
  }, [_c('div', {
    staticClass: "vm-form-textarea-inner"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.val),
      expression: "!val"
    }],
    staticClass: "vm-form-textarea-ph",
    on: {
      "click": _vm.clickPh
    }
  }, [_vm._t("placeholder", [_vm._v(_vm._s(_vm.placeholder))])], 2), _vm._v(" "), _c('div', {
    ref: "area",
    staticClass: "vm-form-textarea-edit needsclick",
    style: ({
      'max-height': _vm.maxHeight
    }),
    attrs: {
      "contenteditable": !_vm.readonly
    },
    on: {
      "input": _vm.input,
      "focus": function($event) {
        return _vm.$emit('focus')
      },
      "blur": function($event) {
        return _vm.$emit('blur')
      },
      "click": _vm.click
    }
  }), _vm._v(" "), (_vm.$slots.icon) ? _c('div', {
    staticClass: "vm-form-textarea-icon"
  }, [_vm._t("icon")], 2) : _vm._e()]), _vm._v(" "), (_vm.$slots.label) ? _c('template', {
    slot: "label"
  }, [_vm._t("label")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.tips) ? _c('template', {
    slot: "tips"
  }, [_vm._t("tips")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('div', {
    staticClass: "vm-form-textarea-other"
  }, [_vm._t("default")], 2) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d13731e", module.exports)
  }
}

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(281),
  /* template */
  __webpack_require__(292),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2acceef3", Component.options)
  } else {
    hotAPI.reload("data-v-2acceef3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _text = __webpack_require__(18);

var _text2 = _interopRequireDefault(_text);

var _forward = __webpack_require__(27);

var _forward2 = _interopRequireDefault(_forward);

var _iosselect = __webpack_require__(28);

var _iosselect2 = _interopRequireDefault(_iosselect);

var _helper = __webpack_require__(1);

var _abstract = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'select',

    mixins: [_abstract.Multiable, _text2.default],

    props: {
        options: {
            type: [Array, String],
            default: function _default() {
                return [];
            }
        },

        source: {
            type: [Array, String],
            default: function _default() {
                return this.options;
            }
        },

        selectedLabelFormatter: {
            type: Function,
            default: function _default(labels) {
                return _helper.Util.makeArray(labels).join('');
            }
        },

        dataFormatter: {
            type: Function,
            default: function _default(v) {
                return v;
            }
        },

        params: {
            type: [Array, Object],
            default: function _default() {
                return {};
            }
        }
    },

    components: {
        TextInput: _text2.default,
        Forward: _forward2.default
    },

    data: function data() {
        return {
            selectedLabels: ''
        };
    },


    watch: {
        source: function source(v) {
            this.$iosselect.render(v);
        },
        options: function options(v) {
            this.$iosselect.render(v);
        },
        value: function value(v) {
            this.$iosselect.setValue(v);
        }
    },

    mounted: function mounted() {
        var _this = this;

        var $iosselect = this.$iosselect = _helper.Util.factory(_iosselect2.default, {
            source: this.source,
            value: _helper.Util.makeArray(this.val),
            dataFormatter: this.dataFormatter,
            params: this.params,
            visible: false
        });

        var isOpen = false;

        $iosselect.$on('open', function () {
            return isOpen = true;
        });
        $iosselect.$on('close', function () {
            return isOpen = false;
        });

        $iosselect.$on('select', function () {
            _this.val != null && !isOpen && (_this.selectedLabels = _this.selectedLabelFormatter($iosselect.getLabels()));
        });

        $iosselect.$on('confirm', function (vals, labels) {
            _this.multiable = vals.length > 0;
            _this.save(vals, false);
            _this.selectedLabels = _this.selectedLabelFormatter(labels);
            _this.$emit('confirm', vals, labels);
        });
    },


    methods: {
        onClick: function onClick() {
            this.$iosselect.open();
        }
    },

    deactivated: function deactivated() {
        this.$iosselect.close();
    },
    destroyed: function destroyed() {
        this.$iosselect.destroy();
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(283)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(285),
  /* template */
  __webpack_require__(286),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\forward\\forward.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] forward.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-342ed872", Component.options)
  } else {
    hotAPI.reload("data-v-342ed872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(284);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1b740635", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-342ed872\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forward.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-342ed872\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forward.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-forward-wraper {\n  display: inline-flex;\n  margin-start: auto;\n  -webkit-margin-start: auto;\n  justify-content: flex-end;\n  align-items: center;\n  color: #555;\n  font-size: .14rem;\n}\n.vm-forward {\n  -webkit-tap-highlight-color: transparent;\n  text-decoration: none;\n  display: inline-flex;\n  color: inherit;\n  align-items: center;\n}\n.vm-forward .vm-forward-content {\n  margin-right: .06rem;\n}\n.vm-forward .vm-iconfont {\n  font-weight: bold;\n}\n.vm-forward-ll {\n  margin-start: initial;\n  -webkit-margin-start: initial;\n  justify-content: flex-start;\n}\n", ""]);

// exports


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = __webpack_require__(15);

var _icon2 = _interopRequireDefault(_icon);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'forward',
    components: {
        Icon: _icon2.default
    },

    props: {
        arrowSize: {
            type: Number,
            default: 0.12
        }
    },

    data: function data() {
        return {
            leftLayout: true
        };
    },
    mounted: function mounted() {
        var parentNode = this.$el.parentNode;

        this.leftLayout = parentNode.childNodes[0] === this.$el;

        var display = _helper.Dom.css(parentNode, 'display');

        if (display == 'block') {
            _helper.Dom.css(parentNode, 'display', 'flex');
        }
    }
};

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: ['vm-forward-wraper', _vm.leftLayout ? 'vm-forward-ll' : ''],
    on: {
      "click": function($event) {
        return _vm.$emit('click')
      }
    }
  }, [_c('a', {
    staticClass: "vm-forward",
    attrs: {
      "href": "javascript:"
    }
  }, [(_vm.$slots.default) ? _c('span', {
    staticClass: "vm-forward-content"
  }, [_vm._t("default")], 2) : _vm._e(), _vm._v(" "), _c('icon', {
    attrs: {
      "name": "right",
      "size": _vm.arrowSize
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-342ed872", module.exports)
  }
}

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(290),
  /* template */
  __webpack_require__(291),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\iosselect\\iosselect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] iosselect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3904244f", Component.options)
  } else {
    hotAPI.reload("data-v-3904244f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("62560a58", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3904244f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./iosselect.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3904244f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./iosselect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-iosselect.vm-overlay {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 10001;\n  background: #f5f5f5;\n}\n.vm-iosselect-header {\n  display: flex;\n  height: .44rem;\n  background: #fff;\n  justify-content: space-between;\n}\n.vm-iosselect-header a {\n  display: inline-block;\n  height: .44rem;\n  text-decoration: none;\n  line-height: .44rem;\n  width: .5rem;\n  color: #ddd;\n  text-align: center;\n  font-size: .14rem;\n}\n.vm-iosselect-header .vm-iosselect-confirm {\n  color: #7792cb;\n}\n.vm-iosselect-scroll-list {\n  width: 100%;\n  height: 1.75rem;\n  display: flex;\n}\n.vm-iosselect-scroll {\n  flex-grow: 1;\n}\n.vm-iosselect-scroll-inner {\n  padding: 0.7rem 0px;\n}\n.vm-iosselect-scroll-inner a {\n  color: #333;\n  display: block;\n  height: .35rem;\n  line-height: .35rem;\n  text-align: center;\n  text-decoration: none;\n  opacity: 0.3;\n  font-size: 0.13rem;\n}\n.vm-iosselect-scroll-inner .vm-iosselect-selected {\n  opacity: 1;\n}\n", ""]);

// exports


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scroll = __webpack_require__(11);

var _scroll2 = _interopRequireDefault(_scroll);

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _helper = __webpack_require__(1);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var div = _helper.Dom.create('<div style="height: .35rem; position: absolute;top: -100px;">');

var HEIGHT = void 0;

document.body.appendChild(div);

setTimeout(function () {
    HEIGHT = div.offsetHeight;
    div.parentNode.removeChild(div);
}, 1000);

exports.default = {
    name: 'iosselect',

    mixins: [_overlay2.default],

    props: {
        source: {
            type: [Array, String],
            default: function _default() {
                return [];
            }
        },

        params: {
            type: [Array, Object],
            default: function _default() {
                return {};
            }
        },

        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        dataFormatter: {
            type: Function,
            default: function _default(v) {
                return v;
            }
        },

        visible: {
            type: Boolean,
            default: true
        }
    },

    components: {
        Scroll: _scroll2.default,
        Overlay: _overlay2.default,
        vmMask: _mask2.default
    },

    data: function data() {
        return {
            data: [],
            dataList: [],
            vals: [],
            val: this.value
        };
    },


    watch: {
        val: function val(v) {
            this.$emit('input', v);
        },
        value: function value(v) {
            this.setValue(v);
        },
        source: function source(_source) {
            this.render(_source);
        }
    },

    mounted: function mounted() {
        this.source.length > 0 && this.render();
    },


    methods: {
        render: function render() {
            var _this = this;

            var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.source;

            source = _helper.Util.makeArray(source);
            var params = _helper.Util.makeArray(this.params);

            if (!Array.isArray(source[0]) && typeof source[0] != 'string') {
                source = [source];
            }

            var promises = source.map(function (item, key) {
                if (typeof item == 'string') {
                    return new Promise(function (resolve) {
                        (0, _ajax2.default)({
                            url: item,
                            data: params[key] || params[0],
                            dataType: 'json',
                            success: resolve
                        });
                    });
                } else {
                    return item;
                }
            });

            Promise.all(promises).then(function (source) {
                var data = source.map(_this.dataFormatter);

                _this.$emit('data:ready', data);

                var i = 0;

                var j = 0;

                for (; i < data.length; i++) {
                    if (_this.data[i] != data[i]) {
                        j = i;
                        break;
                    }
                }

                _this.data = data;
                _this.renderList(_this.data[j], j);
            });
        },
        renderList: function renderList(data, level) {
            var _this2 = this;

            this.dataList.splice(level, 1, data);

            if (!data.length) return false;

            var select = [data[0], 0, level];

            for (var i = 0; i < data.length; i++) {
                if (data[i].value == this.val[level]) {
                    select = [data[i], i, level];
                    break;
                }
            }

            setTimeout(function () {
                return _this2.select.apply(_this2, _toConsumableArray(select));
            }, 10);
        },
        select: function select(data, index, level, duration) {
            var $scroll = this.$refs.scrolls[level];

            $scroll.scrollTo(-HEIGHT * index, duration || 400);
            this.vals.splice(level, 100000, data);

            if (data.children) {
                this.renderList(data.children, level + 1);
            } else if (level < this.data.length - 1) {
                this.renderList(this.data[level + 1], level + 1);
            }

            this.$emit('select', this.vals);
        },
        listen: function listen(level) {
            var _this3 = this;

            var $scroll = this.$refs.scrolls[level];

            $scroll.$on('drag:end', function (pos) {
                var dest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pos;
                var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

                var dataList = _this3.dataList[level];

                var index = Math.min(dataList.length - 1, Math.round(Math.abs(Math.min(dest, pos)) / HEIGHT));

                _this3.select(dataList[index], index, level, duration);
            });

            level === this.data.length - 1 && setTimeout(function () {
                return _this3.$emit('scroll:ready');
            }, 20);
        },
        confirm: function confirm() {
            var labels = this.getLabels();

            this.val = this.vals.map(function (item) {
                return item.value;
            });

            this.$emit('confirm', this.val, labels, this.vals);
            this.close();
        },
        getLabels: function getLabels() {
            return this.vals.map(function (item) {
                return item.label;
            });
        },
        setValue: function setValue(v) {
            v = _helper.Util.makeArray(v);

            if (v.toString() === this.val.toString()) {
                return false;
            }

            this.render();
            this.val = v;
        }
    }
};

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('vm-mask', {
    attrs: {
      "visible": _vm.visibility,
      "value": _vm.value
    }
  }, [_c('overlay', {
    staticClass: "vm-iosselect",
    attrs: {
      "visible": _vm.visibility,
      "position": "bottom"
    }
  }, [_c('div', {
    staticClass: "vm-iosselect-header"
  }, [_c('a', {
    staticClass: "vm-iosselect-cancel",
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('a', {
    staticClass: "vm-iosselect-confirm",
    attrs: {
      "href": "javascript:"
    },
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("确定")])]), _vm._v(" "), _c('div', {
    staticClass: "vm-iosselect-scroll-list"
  }, _vm._l((_vm.dataList), function(data, index) {
    return _c('scroll', {
      ref: "scrolls",
      refInFor: true,
      staticClass: "vm-iosselect-scroll",
      staticStyle: {
        "height": "100%"
      },
      on: {
        "hook:mounted": function($event) {
          return _vm.listen(index)
        }
      }
    }, [_c('div', {
      staticClass: "vm-iosselect-scroll-inner"
    }, _vm._l((data), function(item, i) {
      return _c('a', {
        class: {
          'vm-iosselect-selected': _vm.vals[index] && item.value === _vm.vals[index].value
        },
        attrs: {
          "href": "javascript:"
        },
        on: {
          "click": function($event) {
            return _vm.select(item, i, index)
          }
        }
      }, [_vm._v("\n                        " + _vm._s(item.label) + "\n                    ")])
    }), 0)])
  }), 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3904244f", module.exports)
  }
}

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text-input', {
    staticClass: "vm-form-select",
    attrs: {
      "label": _vm.label,
      "placeholder": _vm.placeholder,
      "readonly": true,
      "clearable": false,
      "align": _vm.align,
      "value": _vm.selectedLabels
    },
    on: {
      "click": _vm.onClick
    }
  }, [(_vm.$slots.label) ? _c('template', {
    slot: "label"
  }, [_vm._t("label")], 2) : _vm._e(), _vm._v(" "), _c('forward')], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2acceef3", module.exports)
  }
}

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(294)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(296),
  /* template */
  __webpack_require__(297),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\images.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] images.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-388d1e6f", Component.options)
  } else {
    hotAPI.reload("data-v-388d1e6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56b73bfc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-388d1e6f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./images.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-388d1e6f\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./images.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-form-images-inner {\n  display: flex;\n  flex-wrap: wrap;\n}\n.vm-form-images-item {\n  position: relative;\n  width: 1.09rem;\n  height: 0.8rem;\n  margin-left: 0.12rem;\n  background: #fafafa;\n  margin-top: 0.08rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #eee;\n}\n.vm-form-images-item:nth-child(3n + 1) {\n  margin-left: 0px;\n}\n.vm-form-images-item img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.vm-form-images-del {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  background: rgba(0, 0, 0, 0.7);\n  width: 40%;\n  height: 0.2rem;\n  line-height: 0.2rem;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(12);

var _cell2 = _interopRequireDefault(_cell);

var _uploader = __webpack_require__(39);

var _uploader2 = _interopRequireDefault(_uploader);

var _helper = __webpack_require__(1);

var _helper2 = _interopRequireDefault(_helper);

var _toast = __webpack_require__(26);

var _toast2 = _interopRequireDefault(_toast);

var _abstract = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'images',

    mixins: [_cell2.default, _abstract.Multiable],

    props: {
        name: {
            type: String,
            default: null
        },

        uploader: {
            type: String,
            default: ''
        },

        usePack: {
            type: Boolean,
            default: true
        },

        params: {
            type: Object,
            default: null
        },

        dataFormatter: {
            type: Function,
            default: function _default(images, data) {
                return data;
            }
        },

        srcFormatter: {
            type: Function,
            default: function _default(src) {
                return src;
            }
        },

        delEnabled: {
            type: Boolean,
            default: true
        },

        url: null,
        beforeUploadProcessor: null
    },

    components: {
        Cell: _cell2.default,
        Uploader: _uploader2.default
    },

    computed: {
        rest: function rest() {
            return this.size == -1 ? 1000000 : Math.max(this.size - this.val.length, 0);
        }
    },

    methods: {
        canUpload: function canUpload(files) {
            if (files.length > this.rest) {
                this.$emit('limit', files, this.rest);
                return false;
            }

            return true;
        },
        onUploadStart: function onUploadStart() {
            this.$toast = _toast2.default.loading('上传中', false, true);
        },
        onUploadProgress: function onUploadProgress(images, event) {
            this.$toast.setContent('已上传' + parseInt(event.loaded / event.total * 100) + '%');
        },
        onUploadComplete: function onUploadComplete(images, data) {
            var data = this.dataFormatter(images, data);

            this.$toast = null;

            if (data) {
                this.save(data);
                _toast2.default.success('上传成功');
            } else {
                (0, _toast2.default)('上传失败');
            }
        },
        onUploadError: function onUploadError() {
            (0, _toast2.default)('网络请求错误');
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: "vm-form-images",
    attrs: {
      "label": _vm.label,
      "veritcal-layout": true,
      "field-flex-layout": true
    }
  }, [(_vm.$slots.label) ? _c('template', {
    slot: "label"
  }, [_vm._t("label")], 2) : _vm._e(), _vm._v(" "), (_vm.$slots.tips) ? _c('template', {
    slot: "tips"
  }, [_vm._t("tips")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vm-form-images-inner"
  }, [_vm._l((_vm.val), function(item, index) {
    return _c('div', {
      staticClass: "vm-form-images-item"
    }, [_vm._t("item", [_c('img', {
      attrs: {
        "src": _vm.srcFormatter(item)
      }
    })], {
      "data": item
    }), _vm._v(" "), (_vm.delEnabled) ? _c('a', {
      staticClass: "vm-form-images-del",
      attrs: {
        "href": "javascript:"
      },
      on: {
        "click": function($event) {
          return _vm.del(index)
        }
      }
    }, [_vm._v("删除")]) : _vm._e()], 2)
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.rest),
      expression: "rest"
    }],
    staticClass: "vm-form-images-item"
  }, [_vm._t("uploader", [_c('uploader', {
    attrs: {
      "name": _vm.name,
      "url": _vm.uploader || _vm.url,
      "multiple": _vm.rest > 1,
      "before-upload-processor": _vm.beforeUploadProcessor,
      "can-upload": _vm.canUpload,
      "use-pack": _vm.usePack,
      "params": _vm.params,
      "accept": "image/*"
    },
    on: {
      "upload:start": _vm.onUploadStart,
      "upload:complete": _vm.onUploadComplete,
      "upload:error": _vm.onUploadError,
      "upload:progress": _vm.onUploadProgress
    }
  })])], 2)], 2)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-388d1e6f", module.exports)
  }
}

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(299)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(301),
  /* template */
  __webpack_require__(302),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\switch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] switch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78cd952b", Component.options)
  } else {
    hotAPI.reload("data-v-78cd952b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("729e632e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78cd952b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./switch.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-78cd952b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./switch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-form-switch {\n  margin-start: auto;\n  -webkit-margin-start: auto;\n}\n.vm-form-switch input {\n  display: none;\n}\n.vm-form-switch label {\n  position: relative;\n  display: block;\n  border-radius: 100px;\n  height: 0.28rem;\n  width: 0.48rem;\n  box-shadow: 0px 0px 1px #ccc;\n  cursor: pointer;\n}\n.vm-form-switch label i:nth-child(1) {\n  display: block;\n  height: 100%;\n  width: 100%;\n  border-radius: 100px;\n  transition: all .3s ease;\n}\n.vm-form-switch label i:nth-child(2) {\n  position: absolute;\n  display: inline-block;\n  top: 0px;\n  left: 0px;\n  height: 0.27rem;\n  width: .27rem;\n  border-radius: 100px;\n  background-color: white;\n  box-shadow: 0px 1px 0px 1px #ddd;\n  transition: all .3s ease;\n}\n.vm-form-switch input:checked ~ label i:nth-child(2) {\n  box-shadow: none;\n  transform: translate(0.2rem, 0.005rem);\n}\n", ""]);

// exports


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cell = __webpack_require__(12);

var _cell2 = _interopRequireDefault(_cell);

var _abstract = __webpack_require__(9);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = {
    name: 'switch',

    mixins: [_cell2.default, _abstract.Single],

    props: {
        disabled: {
            type: Boolean,
            default: false
        },

        color: {
            type: String,
            default: function _default() {
                return Switch.config('color');
            }
        }
    },

    components: {
        Cell: _cell2.default
    },

    data: function data() {
        return {
            bgColor: this.color
        };
    },


    watch: {
        val: function val(v) {
            this.resetColor();
        }
    },

    mounted: function mounted() {
        this.resetColor();
    },


    methods: {
        resetColor: function resetColor() {
            this.bgColor = this.val ? this.color : '';
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_helper.Util.defineConfig(Switch, {
    color: '#6281c2'
});

exports.default = Switch;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cell', {
    staticClass: "vm-form-switch-box",
    attrs: {
      "label": _vm.label,
      "vertical-layout": false
    }
  }, [_c('span', {
    staticClass: "vm-form-switch"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.val),
      expression: "val"
    }],
    ref: "checkbox",
    staticClass: "vm-form-switch",
    attrs: {
      "type": "checkbox",
      "id": _vm.name
    },
    domProps: {
      "checked": Array.isArray(_vm.val) ? _vm._i(_vm.val, null) > -1 : (_vm.val)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.val,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.val = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.val = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.val = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": _vm.name
    }
  }, [_c('i', {
    style: ({
      background: _vm.bgColor
    })
  }), _vm._v(" "), _c('i')])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78cd952b", module.exports)
  }
}

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(304),
  /* template */
  __webpack_require__(308),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\form\\date.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] date.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6003cc65", Component.options)
  } else {
    hotAPI.reload("data-v-6003cc65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _text = __webpack_require__(18);

var _text2 = _interopRequireDefault(_text);

var _forward = __webpack_require__(27);

var _forward2 = _interopRequireDefault(_forward);

var _datepicker = __webpack_require__(42);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _helper = __webpack_require__(1);

var _abstract = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'dateinput',

    mixins: [_text2.default],

    props: {
        minDate: {
            default: '1970/01/01'
        },

        maxDate: {
            default: function _default() {
                return new Date();
            }
        },

        formatter: {
            default: 'yyyy/mm/dd'
        }
    },

    components: {
        TextInput: _text2.default,
        Forward: _forward2.default
    },

    computed: {
        $datepicker: function $datepicker() {
            var _this = this;

            if (!this.$$datepicker) {
                this.$$datepicker = _helper.Util.factory(_datepicker2.default, {
                    minDate: this.minDate,
                    maxDate: this.maxDate,
                    value: this.val,
                    visible: true,
                    formatter: this.formatter
                });
                this.$$datepicker.close();
                this.$$datepicker.$on('confirm', function (val) {
                    _this.$emit('confirm', _this.val = val);
                });

                this.$$datepicker.$on('open', function () {
                    _this.$$datepicker.val = _this.val;
                });
            }

            return this.$$datepicker;
        }
    },

    watch: {
        value: function value(v) {
            this.$datepicker.val = v;
        }
    },

    methods: {
        onClick: function onClick() {
            this.$datepicker.open();
        }
    },

    deactivated: function deactivated() {
        this.$datepicker.close();
    },
    destroyed: function destroyed() {
        this.$datepicker.destroy();
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(306),
  /* template */
  __webpack_require__(307),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\datepicker\\datepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] datepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c65d93b", Component.options)
  } else {
    hotAPI.reload("data-v-1c65d93b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); //
//
//

var _iosselect = __webpack_require__(28);

var _iosselect2 = _interopRequireDefault(_iosselect);

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_overlay2.default],

    props: {
        minDate: {
            type: [String, Date],
            default: '1970-01-01'
        },

        maxDate: {
            type: [String, Date],
            default: function _default() {
                return new Date();
            }
        },

        format: {
            type: String,
            default: 'yyyy/mm/dd'
        },

        formatter: {
            type: String,
            default: function _default() {
                return this.format;
            }
        },

        value: {
            type: String,
            default: ''
        },

        visible: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            months: [],
            days: [],
            hours: 24,
            minutes: 60,
            vals: this.analyseValue(this.value),
            val: ''
        };
    },


    watch: {
        val: function val(v) {
            this.vals = this.analyseValue(v);
            this.$emit('input', v);
        },
        value: function value(v) {
            v != this.val && (this.val = v);
        }
    },

    components: { Iosselect: _iosselect2.default },

    computed: {
        startDate: function startDate() {
            return this.makeDate(this.minDate);
        },
        endDate: function endDate() {
            return this.makeDate(this.maxDate);
        },
        minYear: function minYear() {
            return this.startDate.getFullYear();
        },
        maxYear: function maxYear() {
            return this.endDate.getFullYear();
        },
        years: function years() {
            var minYear = this.minYear;

            var maxYear = this.maxYear;

            var years = [];

            while (minYear <= maxYear) {
                years.push({ label: minYear, value: minYear++ });
            }
            return years;
        },
        hh: function hh() {
            return this.setHMTime(this.hours);
        },
        ii: function ii() {
            return this.setHMTime(this.minutes);
        },
        source: function source() {
            return this.setSource();
        }
    },

    methods: {
        setSource: function setSource() {
            if (this.formatter.indexOf('hh:ii') > -1) {
                return [this.years, this.months, this.days, this.hh, this.ii];
            }

            return [this.years, this.months, this.days];
        },
        setHMTime: function setHMTime(num) {
            var hm = [];

            for (var i = 0; i < num; i++) {
                hm.push({ label: i < 10 ? '0' + i : i, value: i < 10 ? '0' + i : i });
            }
            return hm;
        },
        makeDate: function makeDate(date) {
            return typeof date == 'string' ? new Date(date.replace(/-/g, '/')) : date;
        },
        onSelect: function onSelect(vals) {
            var year = vals[0].value;

            if (vals.length == 1) {
                var min = 0;

                var max = 11;

                var months = [];

                if (year == this.minYear) {
                    min = this.startDate.getMonth();
                }

                if (year == this.maxYear) {
                    max = this.endDate.getMonth();
                }

                while (min <= max) {
                    months.push({ label: min + 1, value: ++min });
                }

                this.months = months;
            } else if (vals.length == 2) {
                var _min = 1;

                var _max = 31;

                var days = [];

                var month = vals[1].value;

                if (year == this.minYear && month == this.startDate.getMonth() + 1) {
                    _min = this.startDate.getDate();
                }

                if (year == this.maxYear && month == this.endDate.getMonth() + 1) {
                    _max = this.endDate.getDate();
                } else {
                    _max = new Date(year, month, 0).getDate();
                }

                while (_min <= _max) {
                    days.push({ label: _min, value: _min++ });
                }

                this.days = days;
            } else if (vals.length == 4) {
                var _min2 = 0;

                var _max2 = 24;

                var _month = vals[1].value;

                var day = vals[2].value;

                if (year == this.maxYear && _month == this.endDate.getMonth() + 1 && day == this.endDate.getDate()) {
                    this.hours = this.endDate.getHours() + 1;
                } else {
                    this.hours = _max2;
                }
            } else if (vals.length == 5) {
                var _min3 = 0;

                var _max3 = 60;

                var _month2 = vals[1].value;

                var _day = vals[2].value;

                var hours = vals[3].value;

                if (year == this.maxYear && _month2 == this.endDate.getMonth() + 1 && _day == this.endDate.getDate() && hours == this.endDate.getHours()) {
                    this.minutes = this.endDate.getMinutes() + 1;
                } else {
                    this.minutes = _max3;
                }
            }
        },
        onConfirm: function onConfirm(vals) {
            var _vals = _slicedToArray(vals, 5),
                year = _vals[0],
                month = _vals[1],
                day = _vals[2],
                hh = _vals[3],
                ii = _vals[4];

            var str = this.formatter.replace('yyyy', year).replace('yy', year % 100).replace('mm', month < 10 ? '0' + month : month).replace('dd', day < 10 ? '0' + day : day).replace('hh', hh).replace('ii', ii);

            this.val = str;
            this.$emit('confirm', str, vals);
        },
        analyseValue: function analyseValue() {
            var _this = this;

            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var arr = [];

            var types = [/yyyy/.test(this.formatter) ? 'yyyy' : 'yy', 'mm', 'dd', 'hh', 'ii'];

            arr = types.map(function (type) {
                var i = _this.formatter.indexOf(type);

                return i > -1 ? Number(val.substr(i, type.length)) : '';
            });

            return arr;
        }
    }
};

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('iosselect', {
    attrs: {
      "visible": _vm.visibility,
      "source": _vm.source
    },
    on: {
      "select": _vm.onSelect,
      "confirm": _vm.onConfirm,
      "close": _vm.close
    },
    model: {
      value: (_vm.vals),
      callback: function($$v) {
        _vm.vals = $$v
      },
      expression: "vals"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c65d93b", module.exports)
  }
}

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text-input', {
    staticClass: "vm-form-date",
    attrs: {
      "label": _vm.label,
      "placeholder": _vm.placeholder,
      "readonly": true,
      "clearable": false,
      "align": _vm.align
    },
    on: {
      "click": _vm.onClick
    },
    model: {
      value: (_vm.val),
      callback: function($$v) {
        _vm.val = $$v
      },
      expression: "val"
    }
  }, [(_vm.$slots.label) ? _c('template', {
    slot: "label"
  }, [_vm._t("label")], 2) : _vm._e(), _vm._v(" "), _c('forward')], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6003cc65", module.exports)
  }
}

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkMultiple = exports.Link = exports.Multiple = exports.Single = undefined;

var _single = __webpack_require__(19);

var _single2 = _interopRequireDefault(_single);

var _multiple = __webpack_require__(43);

var _multiple2 = _interopRequireDefault(_multiple);

var _link = __webpack_require__(44);

var _link2 = _interopRequireDefault(_link);

var _linkMultiple = __webpack_require__(322);

var _linkMultiple2 = _interopRequireDefault(_linkMultiple);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_single2.default);
_helper.Util.register(_multiple2.default);
_helper.Util.register(_link2.default);
_helper.Util.register(_linkMultiple2.default);

exports.Single = _single2.default;
exports.Multiple = _multiple2.default;
exports.Link = _link2.default;
exports.LinkMultiple = _linkMultiple2.default;
exports.default = {
    Single: _single2.default,
    Multiple: _multiple2.default,
    Link: _link2.default,
    LinkMultiple: _linkMultiple2.default
};

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("741cfc33", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fb62f7ea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./single.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fb62f7ea\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./single.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-filter-item{\n    height: .44rem;\n    text-decoration: none;\n    display: block;\n    width: 100%;\n    box-sizing: border-box;\n    font-size: .14rem;\n    color: #555;\n    line-height: .44rem;\n    text-align: center;\n    border-bottom: 1px solid #eee;\n    padding: 0px 15px;\n}\n.vm-filter-item:last-child{\n    border-bottom: 0px;\n}\n.vm-filter-selected{\n    color: #6281C2;\n}\n", ""]);

// exports


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__(1);

var Single = {
    name: 'single-filter',

    props: {
        source: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        disabled: {
            type: Boolean,
            default: false
        },

        selectedClassName: {
            type: String,
            default: function _default() {
                return Single.config('selectedClassName');
            }
        },

        value: {
            type: [String, Number],
            default: null
        },

        itemFormatter: {
            type: Function,
            default: function _default(item) {
                return item.label;
            }
        }
    },

    data: function data() {
        return {
            data: [],
            val: null
        };
    },


    watch: {
        source: function source(v) {
            this.render(v);
        },
        val: function val(v) {
            this.$emit('input', v);
        },
        value: function value(v) {
            this.setValue(v);
        }
    },

    mounted: function mounted() {
        this.render();
        this.value != undefined && this.value != null && this.setValue(this.value);
    },


    methods: {
        render: function render() {
            var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.source;

            this.data = source || [];
        },
        click: function click(item) {
            var self = this;

            self.$emit('item:click', item);
            self.setValue(item.value);
        },
        setValue: function setValue(value) {
            var self = this;

            if (value === self.val) {
                return;
            }

            if (self.disabled) {
                self.$emit('reject');
                return false;
            }

            var item = self.getItemByValue(value);
            var label;

            if (item) {
                label = item.label;
            }

            self.$emit('change', self.val = value, label, item);
        },
        getItemClass: function getItemClass(item) {
            var self = this;
            var className = ['vm-filter-item'];

            item.value == self.val && self.selectedClassName && className.push(self.selectedClassName);
            return className.join(' ');
        },
        getItemByValue: function getItemByValue(value) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data;

            return data.filter(function (item) {
                return item.value == value;
            })[0];
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

_helper.Util.defineConfig(Single, {
    selectedClassName: 'vm-filter-selected'
});

exports.default = Single;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-filter"
  }, _vm._l((_vm.data), function(item, key) {
    return _c('a', {
      class: _vm.getItemClass(item),
      attrs: {
        "href": "javascript:"
      },
      domProps: {
        "innerHTML": _vm._s(_vm.itemFormatter(item))
      },
      on: {
        "click": function($event) {
          return _vm.click(item)
        }
      }
    })
  }), 0)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb62f7ea", module.exports)
  }
}

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3f2c0a04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b30e313\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./multiple.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b30e313\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./multiple.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-filter-multiple .vm-filter-item {\n  text-align: left;\n}\n.vm-filter-tick:after {\n  font-family: \"vm-iconfont\" !important;\n  font-style: normal;\n  content: \"\\E68C\";\n  display: inline-block;\n  float: right;\n  font-size: 0.18rem;\n  height: .44rem;\n  width: .20rem;\n}\n", ""]);

// exports


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _single = __webpack_require__(19);

var _single2 = _interopRequireDefault(_single);

var _helper = __webpack_require__(1);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_single2.default],

    props: {
        size: {
            type: Number,
            default: -1
        },

        canSelect: {
            type: Function,
            default: function _default() {
                return this.infinite || this.value.length < this.size;
            }
        },

        value: {
            type: Array,
            default: null
        }
    },

    data: function data() {
        return {
            val: [],
            infinite: this.size < 0
        };
    },


    methods: {
        click: function click(item) {
            var self = this;var value = item.value;

            self.$emit('item:click', item);
            self.setValue(item.value, true);
        },
        setValue: function setValue(value) {
            var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var self = this;

            if (self.disabled) {
                self.$emit('reject');
                return false;
            }

            var vals;var item = self.getItemByValue(value);

            if (!update) {
                vals = value;
            } else {
                vals = self.val.slice(0);

                var index = vals.indexOf(value);

                if (index > -1) {
                    vals.splice(index, 1);
                } else if (!self.canSelect.call(self, item)) {
                    self.$emit('reject');
                    return false;
                } else {
                    vals.push(value);
                }
            }

            if (vals.toString() == self.val.toString()) {
                return;
            }

            self.$emit('change', self.val = vals, self.getLabels(vals), item);
        },
        getItemClass: function getItemClass(item) {
            var className = _single2.default.methods.getItemClass(item);

            if (this.val.indexOf(item.value) > -1) {
                className += ' vm-filter-tick ' + this.selectedClassName;
            }

            return className;
        },
        getLabels: function getLabels(vals) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data;

            return data.filter(function (item) {
                return vals.indexOf(item.value) > -1;
            }).map(function (item) {
                return item.label;
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-filter vm-filter-multiple"
  }, _vm._l((_vm.data), function(item, key) {
    return _c('a', {
      class: _vm.getItemClass(item),
      attrs: {
        "href": "javascript:"
      },
      domProps: {
        "innerHTML": _vm._s(_vm.itemFormatter(item))
      },
      on: {
        "click": function($event) {
          return _vm.click(item)
        }
      }
    })
  }), 0)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b30e313", module.exports)
  }
}

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("19ef5d0c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc705506\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./link.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc705506\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./link.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-filters{\n    display: -webkit-box;\n    display: box;\n}\n.vm-filters .vm-filters-item{\n    -webkit-box-flex: 1;\n    box-flex: 1;\n    border-left: 1px solid #eee;\n}\n.vm-filters .vm-filters-item:first-child{\n    border-left: 0px;\n}\n.vm-filters-2 .vm-filters-item:nth-child(1){\n    -webkit-box-flex: 2;\n}\n", ""]);

// exports


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scroll = __webpack_require__(11);

var _scroll2 = _interopRequireDefault(_scroll);

var _single = __webpack_require__(19);

var _single2 = _interopRequireDefault(_single);

var _ajax = __webpack_require__(23);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        source: {
            type: [Array, String, Object],
            default: function _default() {
                return [];
            }
        },

        itemFormatter: {
            type: Function,
            default: function _default(item) {
                return item.label;
            }
        },

        params: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        names: {
            type: Array,
            default: function _default() {
                return ['id'];
            }
        },

        unlimitLabel: {
            type: String,
            default: '不限'
        },

        unlimitValue: {
            type: [Number, String],
            default: undefined
        },

        unlimitStartLevel: {
            type: Number,
            default: 0
        },

        level: {
            type: Number,
            default: 2
        },

        dataFormatter: {
            type: Function,
            default: function _default(data) {
                return data;
            }
        },

        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },

    components: {
        Single: _single2.default,
        Scroll: _scroll2.default
    },

    data: function data() {
        return {
            filters: [],
            val: this.value || [],
            paths: [],
            parent: null
        };
    },


    watch: {
        source: function source(v) {
            this.render(v);
        },
        val: function val(v) {
            this.$emit('input', v);
        },
        value: function value(v) {
            if (v === this.val) return;
            this.render(this.data);
            this.val = v;
        }
    },

    computed: {
        maxLevel: function maxLevel() {
            return this.level - 1;
        }
    },

    mounted: function mounted() {
        this.initEvent();
        this.render();
    },


    methods: {
        initEvent: function initEvent() {
            var self = this;

            self.$on('filter:render', function (source, level) {
                var items = source.filter(function (item) {
                    for (var i = level; i >= 0; i--) {
                        if (item.value != self.value[i]) {
                            return false;
                        }

                        item = item.__parent;
                    }

                    return true;
                });

                if (items.length) {
                    var item = items[0];

                    self.$refs.box[level].setValue(item.value);
                    self.click(item);
                } else {
                    self.$refs.box[level].setValue(null);
                }
            });
        },
        render: function render(source) {
            var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var self = this;

            self.filters = self.filters.slice(0, level);
            source = self.getSource(source, level);

            if (typeof source == 'string') {
                self.renderFromRemote(source, level);
            } else {
                self.renderList(source, level);
            }
        },
        renderList: function renderList(source, level) {
            var self = this;

            source = self.formatSource(source, level);

            if (level > 0) {
                self.parent.children = source;
            } else {
                self.data = source;
            }

            var refresh = false;

            if (self.filters[level]) {
                refresh = true;
                self.filters.splice(level, 1, source);
            } else {
                self.filters.push(source);
            }

            self.$nextTick(function () {
                refresh && self.$emit('filter:refresh', source, level);
                self.$emit('filter:render', source, level);
            });
        },
        renderFromRemote: function renderFromRemote(source, level) {
            var self = this;var o = {};

            if (level > 0) {
                o[self.names[level - 1] || self.names[0]] = self.parent.value;
            }

            self.$http && self.$http.abort();
            self.$http = (0, _ajax2.default)({
                dataType: 'json',
                url: source,
                data: Object.assign(o, self.params),
                success: function success(data) {
                    self.$emit('xhr:success', data);
                    self.renderList(data, level);
                },
                complete: function complete() {
                    return self.$emit('xhr:completed');
                }
            });
        },
        click: function click(item) {
            var self = this;

            self.$emit('item:click', item);

            if (self.isMaxLevel(item.__level)) {} else if (this.unlimitValue !== undefined && item.value === this.unlimitValue) {
                self.parent = item;
                self.filters = self.filters.slice(0, item.__level + 1);
            } else {
                if (item === self.parent) return false;

                self.parent = item;
                self.render(item.children, item.__level + 1);
            }
        },
        formatSource: function formatSource(source, level) {
            var _this = this;

            if (source.__formatted) {
                return source;
            }

            var arr = [];

            if (this.unlimitValue !== undefined && level >= this.unlimitStartLevel) {
                arr.push({
                    label: this.unlimitLabel,
                    value: this.unlimitValue
                });
            }

            try {
                source = arr.concat(this.dataFormatter(source, level, this.parent));
            } catch (e) {
                source = arr;
            }

            source = source.map(function (item) {
                if (_this.parent) {
                    item.__parent = _this.parent;
                }

                item.__level = level;
                return item;
            });

            source.__formatted = true;
            return source;
        },
        change: function change(val, label, item) {
            var self = this;

            if (!item) {
                self.$emit('paths:change', []);
                self.$emit('change', [], [], []);
                return false;
            }

            var level = item.__level;

            self.paths = self.paths.slice(0, level).concat(item);
            self.$emit('paths:change', self.paths);

            if (self.isMaxLevel(level) || self.unlimitValue !== undefined && val === this.unlimitValue) {
                var paths = self.paths.slice(0);var labels = [];var objs = {};
                var vals = paths.map(function (item, level) {
                    objs[self.names[level] || 'level' + level] = item.value;
                    labels.push(item.label);
                    return item.value;
                });

                vals.toString() !== self.val.toString() && self.$emit('change', self.val = vals, labels, objs, item);
            }
        },
        isMaxLevel: function isMaxLevel(level) {
            return level == this.maxLevel;
        },
        getSource: function getSource(source, level) {
            if (!source) {
                source = this.source;

                if (Array.isArray(source) && typeof source[0] == 'string') {
                    source = source[level] || source[0];
                }
            }

            return source;
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-filters",
    class: 'vm-filters-' + _vm.filters.length
  }, [_vm._l((_vm.filters), function(filter, index) {
    return [_c('scroll', {
      staticClass: "vm-filters-item"
    }, [_c('single', {
      ref: "box",
      refInFor: true,
      attrs: {
        "source": filter,
        "item-formatter": _vm.itemFormatter
      },
      on: {
        "item:click": _vm.click,
        "reject": function($event) {
          return _vm.$emit('reject')
        },
        "change": _vm.change
      }
    })], 1)]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dc705506", module.exports)
  }
}

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(325),
  /* template */
  __webpack_require__(326),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\filter\\link-multiple.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] link-multiple.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-085d4410", Component.options)
  } else {
    hotAPI.reload("data-v-085d4410", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0e7326f0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-085d4410\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./link-multiple.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-085d4410\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./link-multiple.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-filters-lm .vm-filter .vm-filter-item{\n    text-align: left;\n}\n.vm-filters-lml{\n    -webkit-box-flex: 2 !important;\n}\n", ""]);

// exports


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _single = __webpack_require__(19);

var _single2 = _interopRequireDefault(_single);

var _multiple = __webpack_require__(43);

var _multiple2 = _interopRequireDefault(_multiple);

var _link = __webpack_require__(44);

var _link2 = _interopRequireDefault(_link);

var _helper = __webpack_require__(1);

var _autosize = __webpack_require__(21);

var _autosize2 = _interopRequireDefault(_autosize);

var _scroll = __webpack_require__(11);

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mixins: [_link2.default],

    components: {
        Single: _single2.default,
        Multiple: _multiple2.default,
        Scroll: _scroll2.default
    },

    directives: {
        Autosize: _autosize2.default
    },

    props: {
        size: {
            type: Number,
            default: -1
        },

        perSize: {
            type: Number,
            default: -1
        },

        onlyOneParent: {
            type: Boolean,
            default: false
        },

        value: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    data: function data() {
        return {
            infinite: this.size < 0,
            parent: null,
            count: 0,
            val: this.value || {},
            labels: {}
        };
    },


    computed: {
        perInfinite: function perInfinite() {
            return this.perSize < 0;
        },
        perMaxSize: function perMaxSize() {
            return this.perInfinite ? 10000000 : this.perSize;
        },
        maxSize: function maxSize() {
            return this.infinite ? 10000000 : this.size;
        }
    },

    methods: {
        initEvent: function initEvent() {
            var self = this;

            self.$on('filter:render', function (source, level) {
                if (level == 1) {
                    self.$refs.right.setValue(self.val[self.parent.value] || []);
                } else {
                    var lv = _helper.Util.firstKey(self.val);

                    if (lv !== false) {
                        self.$refs.left.setValue(lv);
                        var parent = _single2.default.methods.getItemByValue(lv, source);

                        self.render(parent.children, 1);
                    } else {
                        self.click(source[0]);
                    }
                }
            });
        },
        getItemFormatter: function getItemFormatter() {
            var self = this;

            if (self.perInfinite || self.perMaxSize == 1) {
                return function (item) {
                    if (item.value in self.val) {
                        return '<span class="vm-filter-tick">' + item.label + '</span>';
                    } else {
                        return item.label;
                    }
                };
            } else {
                return function (item) {
                    var len = (self.val[item.value] || []).length;

                    return item.label + '<span class="vm-filters-ln">(' + len + '/' + self.perMaxSize + ')</span>';
                };
            }
        },
        change: function change(val, labels, item) {
            var self = this;var parent = self.parent.value;var parentLabel = self.parent.label;

            if (!val.length && !self.val[parent]) {
                return false;
            }

            var vals = _helper.Util.assign({}, self.val);

            if (val.length) {
                vals[parent] = val;
                self.labels[parentLabel] = labels;
            } else {
                delete vals[parent];
                delete self.labels[parentLabel];
            }

            self.val = vals;
            self.$emit('change', self.val, self.labels, item);
        },
        canSelect: function canSelect(item) {
            var self = this;var count = 0;

            for (var i in self.val) {
                count += self.val[i].length;
            }

            return count < self.maxSize && (!self.onlyOneParent || item.__parent == self.parent);
        }
    }
};

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.filters.length) ? _c('div', {
    directives: [{
      name: "autosize",
      rawName: "v-autosize"
    }],
    staticClass: "vm-filters vm-filters-lm"
  }, [_c('scroll', {
    staticClass: "vm-filters-item vm-filters-lml"
  }, [_c('single', {
    ref: "left",
    attrs: {
      "source": _vm.filters[0],
      "item-formatter": _vm.getItemFormatter()
    },
    on: {
      "item:click": _vm.click
    }
  })], 1), _vm._v(" "), _c('scroll', {
    staticClass: "vm-filters-item"
  }, [_c('multiple', {
    ref: "right",
    attrs: {
      "source": _vm.filters[1],
      "selected-class-name": "vm-filter-tick",
      "size": _vm.perSize,
      "can-select": _vm.canSelect
    },
    on: {
      "change": _vm.change,
      "reject": function($event) {
        return _vm.$emit('reject')
      }
    }
  })], 1)], 1) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-085d4410", module.exports)
  }
}

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(330),
  /* template */
  __webpack_require__(331),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\slider\\slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1faf8b1b", Component.options)
  } else {
    hotAPI.reload("data-v-1faf8b1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2c6b213a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1faf8b1b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./slider.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1faf8b1b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-slider{\n    display: flex;\n    flex-flow: row;\n    align-items: flex-start;\n    margin-top: 0px;\n    width: 100000000000px;\n}\n.vm-slider.vm-slider-y{\n    flex-flow: column;\n    width: auto;\n    height: 10000000000px;\n}\n.vm-slider-transition{\n    transition: transform .5s ease;\n    -webkit-transition: transform .5s ease;\n}\n", ""]);

// exports


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _draggable = __webpack_require__(22);

var _draggable2 = _interopRequireDefault(_draggable);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'slider',

    directives: {
        Draggable: _draggable2.default
    },

    props: {
        axis: {
            type: String,
            default: 'x'
        },

        offset: {
            type: Number,
            default: 0.25
        },

        defaultIndex: {
            type: Number,
            default: 0
        }
    },

    data: function data() {
        return {
            transition: false,
            min: 0,
            index: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _helper.Event.on(_this.$el, 'drag:start', _this.onDragStart);
            _helper.Event.on(_this.$el, 'drag:end', _this.onDragEnd);
            _helper.Event.on(_this.$el, 'draging', _this.onDraging);
            _helper.Event.on(_this.$el, 'transitionend webkitTransitionEnd', function () {
                _this.complete();
            });

            _this.to(_this.defaultIndex, false, true);
        });
    },


    methods: {
        onDragStart: function onDragStart(event) {
            this.transition = false;
            this.min = -(this.$el.children.length - 1) * this.getDocumentSize();
            this.$emit('drag:start');
        },
        onDraging: function onDraging(event) {
            this.isMoving = true;
            this.$emit('draging', event);
        },
        onDragEnd: function onDragEnd(event) {
            if (!this.isMoving) {
                return false;
            }

            this.isMoving = false;

            var start = -this.$el.children[this.index][this.axis == 'x' ? 'offsetLeft' : 'offsetTop'];

            var end = event.data[this.axis];

            var moved = end - start;

            var index = this.index + (Math.abs(moved) / this.getDocumentSize() < this.offset ? 0 : moved > 0 ? -1 : 1);

            this.$emit('drag:end');
            this.to(index);
        },
        to: function to(index) {
            var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var untrigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var offset = index * this.getDocumentSize();

            if (index == this.index) {
                this.$emit('reject', index);
            } else {
                var oldIndex = this.index;

                this.index = index;
                !untrigger && this.$emit('switch', this.index, oldIndex);
            }

            this.transition = transition;
            _helper.Dom.css(this.$el, 'transform', 'translate' + this.axis.toUpperCase() + '(-' + offset + 'px)');
            !transition && this.complete();
        },
        complete: function complete() {
            this.transition = false;
            this.$emit('switch:complete', this.index);
        },
        canDrag: function canDrag(info) {
            var offset = info[this.axis];

            return offset > this.min && offset < 0;
        },
        getDocumentSize: function getDocumentSize() {
            return this.axis == 'x' ? _helper.Dom.width(document) : _helper.Dom.height(document);
        }
    }
};

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "draggable",
      rawName: "v-draggable",
      value: ({
        axis: _vm.axis,
        canDrag: _vm.canDrag
      }),
      expression: "{axis: axis, canDrag: canDrag}"
    }],
    class: {
      'vm-slider': true,
      'vm-slider-transition': _vm.transition,
      'vm-slider-y': _vm.axis == 'y'
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1faf8b1b", module.exports)
  }
}

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(333)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(336),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\slider\\item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fe3c4cd", Component.options)
  } else {
    hotAPI.reload("data-v-7fe3c4cd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("01fddee0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fe3c4cd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fe3c4cd\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-slider-item{\n    overflow: hidden;\n}\n", ""]);

// exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__(1);

exports.default = {
    name: 'slider-item',

    mounted: function mounted() {
        var _this = this;

        _helper.Event.on(window, 'resize', function () {
            return _this.resize();
        });
        this.resize();
    },


    methods: {
        resize: function resize() {
            this.$el.style.width = _helper.Dom.width(document) + 'px';

            if (this.$parent.axis == 'y') {
                this.$el.style.height = _helper.Dom.height(document) + 'px';
            }
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-slider-item"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7fe3c4cd", module.exports)
  }
}

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbar = __webpack_require__(338);

var _tabbar2 = _interopRequireDefault(_tabbar);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_tabbar2.default);

exports.default = _tabbar2.default;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(339)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(341),
  /* template */
  __webpack_require__(342),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\tabbar\\tabbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19dde47b", Component.options)
  } else {
    hotAPI.reload("data-v-19dde47b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6d129ebb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19dde47b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabbar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19dde47b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-tabbar {\n  height: .44rem;\n  border-bottom: 1px solid #e1e1e1;\n  font-size: .14rem;\n}\n.vm-tabbar .vm-tabbar-inner {\n  height: .44rem;\n  padding: 0px 0.08rem;\n}\n.vm-tabbar .vm-tabbar-inner-center {\n  display: flex;\n  justify-content: space-around;\n}\n.vm-tabbar a {\n  color: #555;\n  height: .42rem;\n  display: inline-block;\n  padding: 0px 0.08rem;\n  line-height: .44rem;\n}\n.vm-tabbar .vm-tabbar-actived {\n  color: #6281C2;\n  border-bottom: .02rem solid #6281C2;\n}\n", ""]);

// exports


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scroll = __webpack_require__(11);

var _scroll2 = _interopRequireDefault(_scroll);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Tabbar = {
    name: 'tabbar',

    components: {
        Scroll: _scroll2.default
    },

    props: {
        centerLayout: {
            type: Boolean,
            default: false
        },

        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        highColor: {
            type: String,
            default: function _default() {
                return Tabbar.config('highColor');
            }
        },

        defaultIndex: {
            type: Number,
            default: 0
        }
    },

    data: function data() {
        return {
            index: null
        };
    },
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            return _this.to(_this.defaultIndex);
        }, 100);
    },


    methods: {
        onClick: function onClick(index) {
            this.$emit('click', index, this.items[index]);
            this.to(index);
        },
        to: function to() {
            var _this2 = this;

            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var untrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (index == this.index) {
                return false;
            }

            this.index = index;

            if (!untrigger) {
                this.$emit('to', index, this.items[index]);
                this.$emit('switch', index, this.items[index]);
            }

            this.$refs.scroll && setTimeout(function () {
                var left = _helper.Dom.$('.vm-tabbar-actived', _this2.$el).offsetLeft;

                _this2.$refs.scroll.scrollTo(-left + 130, 300, true);
            }, 0);
        }
    }
};

_helper.Util.defineConfig(Tabbar, {
    highColor: '#6281C2'
});
exports.default = Tabbar;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-tabbar"
  }, [(!_vm.centerLayout) ? _c('scroll', {
    ref: "scroll",
    attrs: {
      "axis": "x"
    }
  }, [_c('div', {
    staticClass: "vm-tabbar-inner"
  }, _vm._l((_vm.items), function(item, key) {
    return _c('a', {
      class: {
        'vm-tabbar-actived': key == _vm.index
      },
      style: ({
        color: key == _vm.index ? _vm.highColor : 'inherit',
        borderBottomColor: key == _vm.index ? _vm.highColor : 'inherit'
      }),
      on: {
        "click": function($event) {
          return _vm.onClick(key)
        }
      }
    }, [_vm._v(_vm._s(item.label || item))])
  }), 0)]) : _c('div', {
    staticClass: "vm-tabbar-inner vm-tabbar-inner-center"
  }, _vm._l((_vm.items), function(item, key) {
    return _c('a', {
      class: {
        'vm-tabbar-actived': key == _vm.index
      },
      style: ({
        color: key == _vm.index ? _vm.highColor : 'inherit',
        borderBottomColor: key == _vm.index ? _vm.highColor : 'inherit'
      }),
      on: {
        "click": function($event) {
          return _vm.onClick(key)
        }
      }
    }, [_vm._v(_vm._s(item.label || item))])
  }), 0)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19dde47b", module.exports)
  }
}

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row = exports.Box = undefined;

var _box = __webpack_require__(344);

var _box2 = _interopRequireDefault(_box);

var _row = __webpack_require__(41);

var _row2 = _interopRequireDefault(_row);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_box2.default);
_helper.Util.register(_row2.default);

exports.Box = _box2.default;
exports.Row = _row2.default;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(345)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(347),
  /* template */
  __webpack_require__(348),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\layout\\box.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] box.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6356874a", Component.options)
  } else {
    hotAPI.reload("data-v-6356874a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6cd21a7e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6356874a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./box.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6356874a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./box.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-box {\n  margin-top: 0.1rem;\n}\n.vm-box-header,\n.vm-box-footer {\n  height: .4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 0.12rem;\n}\n.vm-box-inner {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n}\n", ""]);

// exports


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'box'
};

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vm-box"
  }, [(_vm.$slots.header) ? _c('div', {
    staticClass: "vm-box-header"
  }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vm-box-inner"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.$slots.footer) ? _c('div', {
    staticClass: "vm-box-footer"
  }, [_vm._t("footer")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6356874a", module.exports)
  }
}

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = __webpack_require__(350);

var _badge2 = _interopRequireDefault(_badge);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_badge2.default, true);

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _badge = __webpack_require__(46);

var _badge2 = _interopRequireDefault(_badge);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    bind: function bind(element, data, VNode) {
        var instance = element.$$badge = _helper.Util.factory(_badge2.default, {
            content: data.value
        }, element);

        var el = instance.$el;

        if (!/fixed|absolute/.test(_helper.Dom.css(element, 'position'))) {
            _helper.Dom.css(element, 'position', 'relative');
        }

        _helper.Dom.css(el, {
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translate(50%, -50%) scale(0.5)'
        });
    },
    update: function update(element, data) {
        element.$$badge.setContent(data.value);
    },


    name: 'badge',

    Component: _badge2.default
};

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(352)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(354),
  /* template */
  __webpack_require__(355),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\badge\\badge.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] badge.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52453883", Component.options)
  } else {
    hotAPI.reload("data-v-52453883", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(353);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("38d7e439", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52453883\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./badge.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-52453883\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./badge.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-badge {\r\n    background: #f40;\r\n    color: #fff;\r\n    display: inline-block;\r\n    min-width: 0.18rem;\r\n    padding: 0px 0.07rem;\r\n    height: 0.32rem;\r\n    line-height: 0.32rem;\r\n    transform: scale(0.5);\r\n    font-size: 0.2rem;\r\n    text-align: center;\r\n    border-radius: 100px;\n}\n.vm-badge:empty {\r\n    width: 0.2rem;\r\n    min-width: 0px;\r\n    height: 0.2rem;\r\n    padding: 0px;\n}\r\n", ""]);

// exports


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'badge',

    props: {
        content: {
            type: [Number, String],
            default: ''
        }
    },

    data: function data() {
        return {
            text: this.content
        };
    },


    watch: {
        content: function content(v) {
            this.setContent(v);
        }
    },

    methods: {
        setContent: function setContent(content) {
            this.text = content;
        }
    }
};

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vm-badge"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52453883", module.exports)
  }
}

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _segment = __webpack_require__(357);

var _segment2 = _interopRequireDefault(_segment);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_segment2.default);

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(358)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(360),
  /* template */
  __webpack_require__(361),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\segment\\segment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] segment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e0a4deba", Component.options)
  } else {
    hotAPI.reload("data-v-e0a4deba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("fc7b1a84", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e0a4deba\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./segment.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e0a4deba\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./segment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-segment {\n  height: .22rem;\n  border-radius: 4px;\n  display: flex;\n}\n.vm-segment button {\n  margin: 0px;\n  padding: 0px .1rem;\n  flex-grow: 1;\n  background: transparent;\n  height: 100%;\n  color: #000;\n  background: #fff;\n  border: 0px;\n  border-left: 1px solid #000;\n  height: .22rem;\n  line-height: .22rem;\n  border-radius: 0px;\n  outline: none;\n}\n.vm-segment button:nth-child(1) {\n  border-left: 0px;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.vm-segment button:nth-last-child(1) {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n", ""]);

// exports


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__(1);

var _topbar = __webpack_require__(24);

var _topbar2 = _interopRequireDefault(_topbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Segment = {
    name: 'segment',

    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        color: {
            type: String,
            default: function _default() {
                return Segment.config('color');
            }
        },

        bgColor: {
            type: String,
            default: function _default() {
                return Segment.config('bgColor');
            }
        },

        defaultIndex: {
            type: Number,
            default: 0
        }
    },

    data: function data() {
        return {
            index: this.defaultIndex,
            style: {
                color: this.color,
                background: this.bgColor,
                borderColor: this.color
            },
            highStyle: {
                color: this.bgColor,
                background: this.color,
                borderColor: this.color
            }
        };
    },


    methods: {
        onClick: function onClick(index) {
            this.$emit('click', index, this.items[index]);
            this.to(index);
        },
        to: function to() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (index == this.index) {
                return false;
            }

            this.index = index;
            this.$emit('switch', index, this.items[index]);
            this.$emit('to', index, this.items[index]);
        }
    }
};

_helper.Util.defineConfig(Segment, {
    color: _topbar2.default.config('color'),
    bgColor: _topbar2.default.config('bgColor')
});

exports.default = Segment;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vm-segment",
    style: ({
      border: '1px solid ' + _vm.color
    })
  }, _vm._l((_vm.items), function(item, i) {
    return _c('button', {
      style: (_vm.index == i ? _vm.highStyle : _vm.style),
      on: {
        "click": function($event) {
          return _vm.onClick(i)
        }
      }
    }, [_vm._v(_vm._s(item.label || item))])
  }), 0)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e0a4deba", module.exports)
  }
}

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const BG = 'data:image/gif;base64,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';

var BG = '';

var Lazyload = function () {
    function Lazyload(element, options) {
        _classCallCheck(this, Lazyload);

        this.options = _helper.Util.assign({
            srcAttr: 'data-src',
            placeholder: BG
        }, options);
        this.element = element;

        if (this.options.placeholder) {
            this.placeholderClassName = 'vm-lazyload-' + Date.now();
            var el = _helper.Dom.create('<style type="text/css">\n                .' + this.placeholderClassName + '{\n                    background: ' + (this.options.placeholder.indexOf('/') > -1 ? 'url(' + this.options.placeholder + ')' : this.options.placeholder) + ' center center no-repeat;\n                    background-size: .6rem .6rem;\n                }\n                </style>\n            ');

            document.getElementsByTagName('head')[0].appendChild(el);
        }

        this.load();
    }

    _createClass(Lazyload, [{
        key: 'observer',
        value: function observer() {
            var self = this;

            self.mutation = _helper.Util.observer(self.element, {
                attributes: true,
                childList: true,
                subtree: true
            }, function (mutations) {
                if (mutations[0].target == 'img') return;
                self.load();
            });
        }
    }, {
        key: 'unobserver',
        value: function unobserver() {
            var self = this;

            if (self.mutation) {
                self.mutation.disconnect();
                self.mutation = null;
            }
        }
    }, {
        key: 'load',
        value: function load() {
            var _this = this;

            clearTimeout(this.$tid);
            this.$tid = setTimeout(function () {
                _this._load();
            }, 200);
        }
    }, {
        key: '_load',
        value: function _load() {
            var self = this;

            if (!_helper.Dom.height(self.element)) {
                self.observer();
                return;
            }

            var _self$options = self.options,
                srcAttr = _self$options.srcAttr,
                placeholder = _self$options.placeholder;

            var images = _helper.Dom.$$('img[' + srcAttr + ']', self.element);
            var maxTop = _helper.Dom.height(document);var maxLeft = _helper.Dom.width(document);

            self.unobserver();

            for (var i = 0; i < images.length; i++) {
                var node = images[i];
                var rect = _helper.Dom.rect(node);

                if (rect.top - maxTop > maxTop || rect.left - maxLeft > maxLeft) {
                    break;
                } else if (rect.bottom < 0 || rect.right < 0) {
                    continue;
                } else {
                    if (self.placeholderClassName) {
                        _helper.Dom.addClass(node, self.placeholderClassName);
                    }

                    node.src = node.getAttribute(srcAttr);
                    node.removeAttribute(srcAttr);
                    node.onload = function () {
                        _helper.Dom.removeClass(node, self.placeholderClassName);
                    };
                }
            }

            self.observer();
        }
    }]);

    return Lazyload;
}();

exports.default = {
    bind: function bind(element, data) {
        setTimeout(function () {
            new Lazyload(element, data.value);
        }, 0);
    },


    Lazyload: Lazyload,
    Constructor: Lazyload,
    name: 'lazyload'
};

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lightbox = __webpack_require__(364);

var _lightbox2 = _interopRequireDefault(_lightbox);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _helper.Util.register(_lightbox2.default, true);

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__(1);

var _lightbox = __webpack_require__(365);

var _lightbox2 = _interopRequireDefault(_lightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getItems(element, selector) {
    var attr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'src';

    return getImgs(element, selector).map(function (el, index) {
        return el.getAttribute(attr) || el.getAttribute('src');
    });
}

function getImgs(element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'img';

    return [].slice.call(_helper.Dom.$$(selector, element));
}

exports.default = {
    bind: function bind(element, _ref) {
        var _ref$value = _ref.value,
            value = _ref$value === undefined ? {} : _ref$value;

        var $lightbox = void 0;

        var items = getItems(element, value.selector, value.srcAttr);

        $lightbox = element.$lightbox = _helper.Util.factory(_lightbox2.default, { items: items, visible: false });
        $lightbox.__selector = value.selector;
        $lightbox.__srcAttr = value.srcAttr;

        _helper.Event.on(element, 'click', function (e) {
            var el = e.target;

            var index = getImgs(element, value.selector, value.srcAttr).indexOf(el);

            if (index > -1) {
                $lightbox.open();

                setTimeout(function () {
                    $lightbox.to(index, false);
                }, 0);
            }
        });
    },
    update: function update(element) {
        setTimeout(function () {
            element.$lightbox.updateItems(getItems(element, element.$lightbox.__selector, element.$lightbox.__srcAttr));
        }, 100);
    },


    Component: _lightbox2.default,
    name: 'lightbox'
};

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lightbox = __webpack_require__(366);

var _lightbox2 = _interopRequireDefault(_lightbox);

var _helper = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_helper.Util.register(_lightbox2.default);

exports.default = _lightbox2.default;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(367)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(369),
  /* template */
  __webpack_require__(370),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\code\\vm\\src\\components\\lightbox\\lightbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] lightbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73efb7ca", Component.options)
  } else {
    hotAPI.reload("data-v-73efb7ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(368);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ff58b754", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73efb7ca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lightbox.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73efb7ca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lightbox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vm-lightbox.vm-mask.vm-overlay {\n  background: rgba(0, 0, 0, 0.8);\n}\n.vm-lightbox.vm-mask.vm-overlay img {\n  min-width: 1rem;\n  min-height: 1rem;\n  max-width: 100%;\n  max-height: 4rem;\n  border: 0px !important;\n}\n.vm-lightbox.vm-mask.vm-overlay .vm-overlay {\n  height: 5rem;\n  background: transparent;\n}\n.vm-lightbox.vm-mask.vm-overlay .vm-slider {\n  height: 100%;\n  align-items: center;\n}\n.vm-lightbox-index {\n  color: #fff;\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n}\n.vm-lightbox-item {\n  height: 100%;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lazyload = __webpack_require__(47);

var _lazyload2 = _interopRequireDefault(_lazyload);

var _slider = __webpack_require__(45);

var _mask = __webpack_require__(8);

var _mask2 = _interopRequireDefault(_mask);

var _overlay = __webpack_require__(6);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'lightbox',

    mixins: [_mask2.default],

    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },

    components: {
        Slider: _slider.Slider,
        SliderItem: _slider.SliderItem,
        vmMask: _mask2.default,
        Overlay: _overlay2.default
    },

    directives: {
        Lazyload: _lazyload2.default
    },

    data: function data() {
        return {
            index: 1,
            imgs: []
        };
    },


    watch: {
        items: function items(v) {
            this.updateItems(v);
        }
    },

    mounted: function mounted() {
        this.updateItems(this.items);
    },


    methods: {
        onSwitch: function onSwitch(index) {
            this.index = index + 1;
        },
        to: function to(index, transition) {
            this.$refs.slider.to(index, transition);
        },
        updateItems: function updateItems() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            this.imgs = items;
        }
    }
};

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('vm-mask', {
    directives: [{
      name: "lazyload",
      rawName: "v-lazyload"
    }],
    staticClass: "vm-lightbox",
    attrs: {
      "visible": _vm.visibility
    },
    on: {
      "click": _vm.close
    }
  }, [_c('overlay', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "visible": _vm.visibility,
      "position": "center"
    }
  }, [_c('slider', {
    ref: "slider",
    on: {
      "switch": _vm.onSwitch
    }
  }, _vm._l((_vm.imgs), function(item) {
    return _c('slider-item', {
      staticClass: "vm-lightbox-item"
    }, [_c('img', {
      attrs: {
        "data-src": item
      }
    })])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "vm-lightbox-index"
  }, [_vm._v(_vm._s(_vm.index) + "/" + _vm._s(_vm.imgs.length))])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73efb7ca", module.exports)
  }
}

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _cfg = __webpack_require__(372);

var _cfg2 = _interopRequireDefault(_cfg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) == 'object') {
        for (var i in config) {
            _cfg2.default[i] = config[i];
        }
    } else {
        return _cfg2.default[config];
    }
};

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    skin: '#fff',
    requestHelper: null,
    components: {
        topbar: {
            custom: false
        },

        button: {
            main: {}
        }
    }
};

/***/ })
/******/ ]);
});