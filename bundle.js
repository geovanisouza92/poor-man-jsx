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
/* harmony export (immutable) */ __webpack_exports__["a"] = isPrimitive;
function isPrimitive(v) {
  return typeof v === 'string' || typeof v === 'number';
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createElement__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderToText__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__renderToDOM__ = __webpack_require__(5);
/** @jsx createElement */
//  ^ here we define our custom JSX pragma, the function that will be called
//    to create new elements





// This is our "component"
// very similar to React pure functional components, but in fact, could
// hold some state on the closure
function Header() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__createElement__["a" /* createElement */])(
    "h1",
    { style: "color:red", "class": "foo" },
    "Hello ",
    Object(__WEBPACK_IMPORTED_MODULE_0__createElement__["a" /* createElement */])(
      "em",
      null,
      "world"
    )
  );
}

// here we create a new instance of our component. `el` will be an
// tree-like object
var el = Header();

console.log('Element:', el);
console.log('HTML text:', Object(__WEBPACK_IMPORTED_MODULE_1__renderToText__["a" /* render */])(el));

// conditionally render on browser
if ('document' in global) {
  document.body.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__renderToDOM__["a" /* render */])(el));
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPrimitive__ = __webpack_require__(0);


/**
 * createElement is the function responsible for normalize JSX calls
 * into simple tree-like objects.
 * 
 * A JSX element like
 * 
 * <h1 style="color:red">Hello <em>world</em></h1>
 * 
 * will be replaced by Babel as
 * 
 * createElement(
 *   "h1",
 *   { style: "color:red" },
 *   "Hello ",
 *   createElement(
 *     "em",
 *     null,
 *     "world"
 *   )
 * )
 * 
 * and will return
 * 
 * {
 *   "tag": "h1",
 *   "props": { style: "color:red" },
 *   "children": [
 *     "Hello ",
 *     {
 *       "tag": "em",
 *       "props": null,
 *       "children": null,
 *       "text": "world"
 *     }
 *   ],
 *   "text": null
 * }
 * 
 * This resulting object is used by "renderers" to construct the correct 
 * representation on each platform (browser, native, console/text).
 * 
 * @param {string} tag This is the tag name
 * @param {object|null} maybeProps This could be an object with key-values for props/attrs
 * @param {array|string} maybeChildren This could be an array of elements or raw text
 */

// Most of this function came from https://github.com/snabbdom/snabbdom/blob/2271b7bdf15577eabd8de961f4e5bba5bd1515fe/src/h.ts#L22
function createElement(tag, maybeProps, maybeChildren) {
  var props = {};
  var children = void 0;
  var text = void 0;

  // This part came from https://github.com/facebook/react/blob/7d27851bf4aa8129276614b62edf9ade4aaa4cbd/packages/react/src/ReactElement.js#L202
  var cLen = arguments.length - 2;
  if (cLen > 1) {
    var cArr = Array(cLen);
    for (var i = 0; i < cLen; i++) {
      cArr[i] = arguments[2 + i];
    }
    maybeChildren = cArr;
  }

  // Here we normalize function arguments
  if (maybeChildren !== undefined) {
    props = maybeProps;
    if (Array.isArray(maybeChildren)) {
      children = maybeChildren;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__isPrimitive__["a" /* isPrimitive */])(maybeChildren)) {
      text = maybeChildren;
    } else if (maybeChildren && maybeChildren.tag) {
      children = [maybeChildren];
    }
  } else if (maybeProps !== undefined) {
    if (Array.isArray(maybeProps)) {
      children = maybeProps;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__isPrimitive__["a" /* isPrimitive */])(maybeProps)) {
      text = maybeProps;
    } else if (maybeProps && maybeProps.tag) {
      children = [maybeProps];
    } else {
      props = maybeProps;
    }
  }

  // TODO: SVG support

  return { tag: tag, props: props, children: children, text: text };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPrimitive__ = __webpack_require__(0);


/**
 * This function converts an JSX element representation into raw html
 * 
 * @param {object} element The element created by "createElement"
 */
function render(element) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isPrimitive__["a" /* isPrimitive */])(element)) {
    return element.toString();
  }

  var props = [];
  if (element.props) {
    props = Object.keys(element.props).map(function (prop) {
      return prop + '="' + element.props[prop] + '"';
    });
  }

  var children = element.text || element.children.map(render).join('');

  var open = [element.tag].concat(props).filter(Boolean).join(' ');
  return '<' + open + '>' + children + '</' + element.tag + '>';
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPrimitive__ = __webpack_require__(0);


/**
 * This function create DOM elements from JSX element representations
 * 
 * There's no support for event listeners... yet.
 * 
 * @param {object} element The element created by "createElement"
 */
function render(element) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isPrimitive__["a" /* isPrimitive */])(element)) {
    return document.createTextNode(element.toString());
  }

  var el = document.createElement(element.tag);

  if (element.props) {
    Object.keys(element.props).forEach(function (prop) {
      el[prop] = element.props[prop];
    });
  }

  if (element.text) {
    el.innerText = element.text;
  } else {
    element.children.forEach(function (child) {
      el.appendChild(render(child));
    });
  }

  return el;
}

/***/ })
/******/ ]);