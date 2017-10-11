(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactFlexboxGrid"] = factory(require("react"));
	else
		root["ReactFlexboxGrid"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

	var _Row2 = __webpack_require__(1);

	Object.defineProperty(exports, 'getRowProps', {
	  enumerable: true,
	  get: function get() {
	    return _Row2.getRowProps;
	  }
	});

	var _Col2 = __webpack_require__(15);

	Object.defineProperty(exports, 'getColumnProps', {
	  enumerable: true,
	  get: function get() {
	    return _Col2.getColumnProps;
	  }
	});

	var _Grid2 = __webpack_require__(16);

	var _Grid3 = _interopRequireDefault(_Grid2);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Col3 = _interopRequireDefault(_Col2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Grid = _Grid3.default;
	exports.Row = _Row3.default;
	exports.Col = _Col3.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRowProps = getRowProps;
	exports.default = Row;

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(13);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _types = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

	var propTypes = {
	  reverse: _propTypes2.default.bool,
	  start: _types.ViewportSizeType,
	  center: _types.ViewportSizeType,
	  end: _types.ViewportSizeType,
	  top: _types.ViewportSizeType,
	  middle: _types.ViewportSizeType,
	  bottom: _types.ViewportSizeType,
	  around: _types.ViewportSizeType,
	  between: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	function getRowClassNames(props) {
	  var modificators = [props.className, (0, _classNames2.default)('row')];

	  for (var i = 0; i < rowKeys.length; ++i) {
	    var key = rowKeys[i];
	    var value = props[key];
	    if (value) {
	      modificators.push((0, _classNames2.default)(key + '-' + value));
	    }
	  }

	  if (props.reverse) {
	    modificators.push((0, _classNames2.default)('reverse'));
	  }

	  return modificators;
	}

	function getRowProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
	}

	function Row(props) {
	  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
	}

	Row.propTypes = propTypes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getClass;

	var _flexboxgrid = __webpack_require__(3);

	var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getClass(className) {
	  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"flexboxgrid2__container___1Xdwb","container-fluid":"flexboxgrid2__container-fluid___2CR4_","row":"flexboxgrid2__row___3a-jZ","reverse":"flexboxgrid2__reverse___3SKrH","col":"flexboxgrid2__col___kWMj4","col-xs":"flexboxgrid2__col-xs___31x5e","col-xs-1":"flexboxgrid2__col-xs-1___3Xe0G","col-xs-2":"flexboxgrid2__col-xs-2___3sJYv","col-xs-3":"flexboxgrid2__col-xs-3___z8akX","col-xs-4":"flexboxgrid2__col-xs-4___1-1te","col-xs-5":"flexboxgrid2__col-xs-5___N_0Cj","col-xs-6":"flexboxgrid2__col-xs-6___3BXs0","col-xs-7":"flexboxgrid2__col-xs-7___1sI6E","col-xs-8":"flexboxgrid2__col-xs-8___37Rq9","col-xs-9":"flexboxgrid2__col-xs-9___1dkXC","col-xs-10":"flexboxgrid2__col-xs-10___Vu7Kt","col-xs-11":"flexboxgrid2__col-xs-11___ifgJc","col-xs-12":"flexboxgrid2__col-xs-12___2AWtW","col-xs-offset-0":"flexboxgrid2__col-xs-offset-0___ieiVs","col-xs-offset-1":"flexboxgrid2__col-xs-offset-1___1cOiq","col-xs-offset-2":"flexboxgrid2__col-xs-offset-2___3Hdl-","col-xs-offset-3":"flexboxgrid2__col-xs-offset-3___17lwz","col-xs-offset-4":"flexboxgrid2__col-xs-offset-4___2Bs3u","col-xs-offset-5":"flexboxgrid2__col-xs-offset-5___2xI0C","col-xs-offset-6":"flexboxgrid2__col-xs-offset-6___1WNCn","col-xs-offset-7":"flexboxgrid2__col-xs-offset-7___3OYvH","col-xs-offset-8":"flexboxgrid2__col-xs-offset-8___2LiFS","col-xs-offset-9":"flexboxgrid2__col-xs-offset-9___18Vsv","col-xs-offset-10":"flexboxgrid2__col-xs-offset-10___3eWuh","col-xs-offset-11":"flexboxgrid2__col-xs-offset-11___2NCib","col-xs-offset-12":"flexboxgrid2__col-xs-offset-12___1oeo9","start-xs":"flexboxgrid2__start-xs___1P1LX","center-xs":"flexboxgrid2__center-xs___4Yy5n","end-xs":"flexboxgrid2__end-xs___DRHe_","top-xs":"flexboxgrid2__top-xs___2mJqA","middle-xs":"flexboxgrid2__middle-xs___2i1PA","bottom-xs":"flexboxgrid2__bottom-xs___3OhQ9","around-xs":"flexboxgrid2__around-xs___UX8b_","between-xs":"flexboxgrid2__between-xs___20qM2","first-xs":"flexboxgrid2__first-xs___h9nO2","last-xs":"flexboxgrid2__last-xs___JsGZn","initial-order-xs":"flexboxgrid2__initial-order-xs___3qXzT","col-sm":"flexboxgrid2__col-sm___ed1iA","col-sm-1":"flexboxgrid2__col-sm-1___25aoz","col-sm-2":"flexboxgrid2__col-sm-2___2jvCC","col-sm-3":"flexboxgrid2__col-sm-3___3otnN","col-sm-4":"flexboxgrid2__col-sm-4___32ok2","col-sm-5":"flexboxgrid2__col-sm-5___1OTc3","col-sm-6":"flexboxgrid2__col-sm-6___3WUSo","col-sm-7":"flexboxgrid2__col-sm-7___vZtYb","col-sm-8":"flexboxgrid2__col-sm-8___15QqZ","col-sm-9":"flexboxgrid2__col-sm-9___2NJu6","col-sm-10":"flexboxgrid2__col-sm-10___3__wi","col-sm-11":"flexboxgrid2__col-sm-11___3cm_x","col-sm-12":"flexboxgrid2__col-sm-12___2Oc5S","col-sm-offset-0":"flexboxgrid2__col-sm-offset-0___yalaD","col-sm-offset-1":"flexboxgrid2__col-sm-offset-1___3NaCw","col-sm-offset-2":"flexboxgrid2__col-sm-offset-2___A0K3B","col-sm-offset-3":"flexboxgrid2__col-sm-offset-3___1SzG-","col-sm-offset-4":"flexboxgrid2__col-sm-offset-4___KWP8o","col-sm-offset-5":"flexboxgrid2__col-sm-offset-5___30Ei7","col-sm-offset-6":"flexboxgrid2__col-sm-offset-6___19QS7","col-sm-offset-7":"flexboxgrid2__col-sm-offset-7___20H2O","col-sm-offset-8":"flexboxgrid2__col-sm-offset-8___1i2ro","col-sm-offset-9":"flexboxgrid2__col-sm-offset-9___2FwJ_","col-sm-offset-10":"flexboxgrid2__col-sm-offset-10___Sb_he","col-sm-offset-11":"flexboxgrid2__col-sm-offset-11___1SOsq","col-sm-offset-12":"flexboxgrid2__col-sm-offset-12___fk9Yy","start-sm":"flexboxgrid2__start-sm___2t5CB","center-sm":"flexboxgrid2__center-sm___2sVcN","end-sm":"flexboxgrid2__end-sm___1QXhH","top-sm":"flexboxgrid2__top-sm___16H96","middle-sm":"flexboxgrid2__middle-sm___26rUV","bottom-sm":"flexboxgrid2__bottom-sm___2oUIG","around-sm":"flexboxgrid2__around-sm___3eb6e","between-sm":"flexboxgrid2__between-sm___1OwuB","first-sm":"flexboxgrid2__first-sm___1uYdo","last-sm":"flexboxgrid2__last-sm___1DrCC","initial-order-sm":"flexboxgrid2__initial-order-sm___XiX4z","col-md":"flexboxgrid2__col-md___1Trqg","col-md-1":"flexboxgrid2__col-md-1___27x-h","col-md-2":"flexboxgrid2__col-md-2___DdwSJ","col-md-3":"flexboxgrid2__col-md-3___CooMC","col-md-4":"flexboxgrid2__col-md-4___3mSla","col-md-5":"flexboxgrid2__col-md-5___3yacn","col-md-6":"flexboxgrid2__col-md-6___2nT9K","col-md-7":"flexboxgrid2__col-md-7___3kLH4","col-md-8":"flexboxgrid2__col-md-8___bCa03","col-md-9":"flexboxgrid2__col-md-9___WvctT","col-md-10":"flexboxgrid2__col-md-10___10RxV","col-md-11":"flexboxgrid2__col-md-11___2iKHf","col-md-12":"flexboxgrid2__col-md-12___2Ra0j","col-md-offset-0":"flexboxgrid2__col-md-offset-0___1X3oH","col-md-offset-1":"flexboxgrid2__col-md-offset-1___25_cd","col-md-offset-2":"flexboxgrid2__col-md-offset-2___1uHCH","col-md-offset-3":"flexboxgrid2__col-md-offset-3___315dB","col-md-offset-4":"flexboxgrid2__col-md-offset-4___1PMtM","col-md-offset-5":"flexboxgrid2__col-md-offset-5___tp6-h","col-md-offset-6":"flexboxgrid2__col-md-offset-6___3Eyyy","col-md-offset-7":"flexboxgrid2__col-md-offset-7___2GmS6","col-md-offset-8":"flexboxgrid2__col-md-offset-8___3TpoU","col-md-offset-9":"flexboxgrid2__col-md-offset-9___1np3o","col-md-offset-10":"flexboxgrid2__col-md-offset-10___9xPEh","col-md-offset-11":"flexboxgrid2__col-md-offset-11___3nE_y","col-md-offset-12":"flexboxgrid2__col-md-offset-12___1Gkwo","start-md":"flexboxgrid2__start-md___ogdFt","center-md":"flexboxgrid2__center-md___1ETLt","end-md":"flexboxgrid2__end-md___395W4","top-md":"flexboxgrid2__top-md___2bZsN","middle-md":"flexboxgrid2__middle-md___1pB84","bottom-md":"flexboxgrid2__bottom-md___1gZlQ","around-md":"flexboxgrid2__around-md___2s3Fq","between-md":"flexboxgrid2__between-md___15r3n","first-md":"flexboxgrid2__first-md___QO-Wt","last-md":"flexboxgrid2__last-md___3C11s","initial-order-md":"flexboxgrid2__initial-order-md___26QcD","col-lg":"flexboxgrid2__col-lg___3MmwE","col-lg-1":"flexboxgrid2__col-lg-1___22rto","col-lg-2":"flexboxgrid2__col-lg-2___2l7ch","col-lg-3":"flexboxgrid2__col-lg-3___x6vB8","col-lg-4":"flexboxgrid2__col-lg-4___1ofrt","col-lg-5":"flexboxgrid2__col-lg-5___2Hm1R","col-lg-6":"flexboxgrid2__col-lg-6___2LlvV","col-lg-7":"flexboxgrid2__col-lg-7___1zzOG","col-lg-8":"flexboxgrid2__col-lg-8___3_ZRF","col-lg-9":"flexboxgrid2__col-lg-9___3Z7Ty","col-lg-10":"flexboxgrid2__col-lg-10___2_59s","col-lg-11":"flexboxgrid2__col-lg-11___27DA7","col-lg-12":"flexboxgrid2__col-lg-12___HD_mB","col-lg-offset-0":"flexboxgrid2__col-lg-offset-0___3pRQm","col-lg-offset-1":"flexboxgrid2__col-lg-offset-1___39WeW","col-lg-offset-2":"flexboxgrid2__col-lg-offset-2___1ah0h","col-lg-offset-3":"flexboxgrid2__col-lg-offset-3___1jNsy","col-lg-offset-4":"flexboxgrid2__col-lg-offset-4___-Ta2e","col-lg-offset-5":"flexboxgrid2__col-lg-offset-5___3BzOI","col-lg-offset-6":"flexboxgrid2__col-lg-offset-6___19vLt","col-lg-offset-7":"flexboxgrid2__col-lg-offset-7___Kl2MU","col-lg-offset-8":"flexboxgrid2__col-lg-offset-8___2Tq95","col-lg-offset-9":"flexboxgrid2__col-lg-offset-9___-yJ2v","col-lg-offset-10":"flexboxgrid2__col-lg-offset-10___1FO-L","col-lg-offset-11":"flexboxgrid2__col-lg-offset-11___14fZl","col-lg-offset-12":"flexboxgrid2__col-lg-offset-12___32eNb","start-lg":"flexboxgrid2__start-lg___16-hU","center-lg":"flexboxgrid2__center-lg___1wg6s","end-lg":"flexboxgrid2__end-lg___2yx-k","top-lg":"flexboxgrid2__top-lg___1LD-c","middle-lg":"flexboxgrid2__middle-lg___2fi4j","bottom-lg":"flexboxgrid2__bottom-lg___2UDYL","around-lg":"flexboxgrid2__around-lg___1gRdC","between-lg":"flexboxgrid2__between-lg___mhYrt","first-lg":"flexboxgrid2__first-lg___rmvzX","last-lg":"flexboxgrid2__last-lg___P5jr2","initial-order-lg":"flexboxgrid2__initial-order-lg___3l1jI","col-xl":"flexboxgrid2__col-xl___CCQcU","col-xl-1":"flexboxgrid2__col-xl-1___27Xbs","col-xl-2":"flexboxgrid2__col-xl-2___358Sh","col-xl-3":"flexboxgrid2__col-xl-3___UqveY","col-xl-4":"flexboxgrid2__col-xl-4___2aFDe","col-xl-5":"flexboxgrid2__col-xl-5___2GdtJ","col-xl-6":"flexboxgrid2__col-xl-6___2g_SA","col-xl-7":"flexboxgrid2__col-xl-7___urwOo","col-xl-8":"flexboxgrid2__col-xl-8___2e6xP","col-xl-9":"flexboxgrid2__col-xl-9___2WzT-","col-xl-10":"flexboxgrid2__col-xl-10___ftKDq","col-xl-11":"flexboxgrid2__col-xl-11___1AZJw","col-xl-12":"flexboxgrid2__col-xl-12___fC3BZ","col-xl-offset-0":"flexboxgrid2__col-xl-offset-0___3amrD","col-xl-offset-1":"flexboxgrid2__col-xl-offset-1___2YGYP","col-xl-offset-2":"flexboxgrid2__col-xl-offset-2___J2jqN","col-xl-offset-3":"flexboxgrid2__col-xl-offset-3___3DeIC","col-xl-offset-4":"flexboxgrid2__col-xl-offset-4___gjS09","col-xl-offset-5":"flexboxgrid2__col-xl-offset-5___1c0Og","col-xl-offset-6":"flexboxgrid2__col-xl-offset-6___BeiHu","col-xl-offset-7":"flexboxgrid2__col-xl-offset-7___JUmbR","col-xl-offset-8":"flexboxgrid2__col-xl-offset-8___1D7U0","col-xl-offset-9":"flexboxgrid2__col-xl-offset-9___37uyD","col-xl-offset-10":"flexboxgrid2__col-xl-offset-10___3o6Qf","col-xl-offset-11":"flexboxgrid2__col-xl-offset-11___uzAae","col-xl-offset-12":"flexboxgrid2__col-xl-offset-12___2mUjS","start-xl":"flexboxgrid2__start-xl___hld1i","center-xl":"flexboxgrid2__center-xl___kYyHh","end-xl":"flexboxgrid2__end-xl___3p9CI","top-xl":"flexboxgrid2__top-xl___NTLPs","middle-xl":"flexboxgrid2__middle-xl___1efSB","bottom-xl":"flexboxgrid2__bottom-xl___3qoVg","around-xl":"flexboxgrid2__around-xl___kXJs7","between-xl":"flexboxgrid2__between-xl___2uPcF","first-xl":"flexboxgrid2__first-xl___3I5Nd","last-xl":"flexboxgrid2__last-xl___26U2Q","initial-order-xl":"flexboxgrid2__initial-order-xl___3Jgfw","hidden-xs":"flexboxgrid2__hidden-xs___3enEz","hidden-sm":"flexboxgrid2__hidden-sm___cA0Go","hidden-md":"flexboxgrid2__hidden-md___29NOT","hidden-lg":"flexboxgrid2__hidden-lg___3nb8q","hidden-xl":"flexboxgrid2__hidden-xl___2ty7O"};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(9)();
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);
	var invariant = __webpack_require__(11);
	var ReactPropTypesSecret = __webpack_require__(12);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createProps;
	function createProps(propTypes, props, classNames) {
	  var newProps = {};

	  Object.keys(props).filter(function (key) {
	    return key === 'children' || !propTypes[key];
	  }).forEach(function (key) {
	    return newProps[key] = props[key];
	  });

	  var className = classNames.filter(function (cn) {
	    return cn;
	  }).join(' ');
	  return Object.assign({}, newProps, { className: className });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ViewportSizeType = exports.ColumnSizeType = undefined;

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
	var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColumnProps = getColumnProps;
	exports.default = Col;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(13);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	var _types = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var propTypes = {
	  xs: _types.ColumnSizeType,
	  sm: _types.ColumnSizeType,
	  md: _types.ColumnSizeType,
	  lg: _types.ColumnSizeType,
	  xl: _types.ColumnSizeType,
	  xsOffset: _propTypes2.default.number,
	  smOffset: _propTypes2.default.number,
	  mdOffset: _propTypes2.default.number,
	  lgOffset: _propTypes2.default.number,
	  xlOffset: _propTypes2.default.number,
	  first: _types.ViewportSizeType,
	  last: _types.ViewportSizeType,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	var classMap = {
	  xs: 'col-xs',
	  sm: 'col-sm',
	  md: 'col-md',
	  lg: 'col-lg',
	  xl: 'col-xl',
	  xsOffset: 'col-xs-offset',
	  smOffset: 'col-sm-offset',
	  mdOffset: 'col-md-offset',
	  lgOffset: 'col-lg-offset',
	  xlOffset: 'col-xl-offset'
	};

	var hiddenMap = {
	  xs: 'hidden-xs',
	  sm: 'hidden-sm',
	  md: 'hidden-md',
	  lg: 'hidden-lg',
	  xl: 'hidden-xl'
	};

	function isInteger(value) {
	  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	}

	function getColClassNames(props) {
	  var extraClasses = [];

	  if (props.className) {
	    extraClasses.push(props.className);
	  }

	  if (props.first) {
	    extraClasses.push((0, _classNames2.default)('first-' + props.first));
	  }

	  if (props.last) {
	    extraClasses.push((0, _classNames2.default)('last-' + props.last));
	  }

	  return Object.keys(props).filter(function (key) {
	    return classMap[key];
	  }).map(function (key) {
	    var colsAmount = props[key];

	    if (isInteger(colsAmount) && colsAmount === 0) {
	      return (0, _classNames2.default)(hiddenMap[key]);
	    } else if (isInteger(colsAmount)) {
	      return (0, _classNames2.default)(classMap[key] + '-' + colsAmount);
	    }
	    return (0, _classNames2.default)(classMap[key]);
	  }).concat(extraClasses);
	}

	function getColumnProps(props) {
	  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
	}

	function Col(props) {
	  var tagName = props.tagName,
	      columnProps = _objectWithoutProperties(props, ['tagName']);

	  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
	}

	Col.propTypes = propTypes;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Grid;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(8);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createProps = __webpack_require__(13);

	var _createProps2 = _interopRequireDefault(_createProps);

	var _classNames = __webpack_require__(2);

	var _classNames2 = _interopRequireDefault(_classNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  fluid: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  tagName: _propTypes2.default.string,
	  children: _propTypes2.default.node
	};

	function Grid(props) {
	  var containerClass = (0, _classNames2.default)(props.fluid ? 'container-fluid' : 'container');
	  var classNames = [props.className, containerClass];

	  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
	}

	Grid.propTypes = propTypes;

/***/ })
/******/ ])
});
;