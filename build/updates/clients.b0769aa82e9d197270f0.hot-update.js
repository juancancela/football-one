require("source-map-support").install();
exports.id = "clients";
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/components/NavigationBar/NavigationBar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n\n  --main-app-color: rgb(121, 133, 125);  /* Extra small screen / phone */\n}\n\n.NavigationBar-container-3uplM {\n    position: absolute;\n    top: 0;\n    background-color: rgb(121, 133, 125);\n    background-color: var(--main-app-color);\n    width: 100%;\n    padding: 10px;\n}\n\n.NavigationBar-text-3wNoT {\n    color: rgba(255, 255, 255, 0.5);\n}\n\n.NavigationBar-spacer-1H6Fc {\n    color: rgba(255, 255, 255, 0.3);\n}\n\n.NavigationBar-text-3wNoT, .NavigationBar-link-3UeTe {\n    padding: 2px 5px;\n    font-size: 1em;\n}\n\n.NavigationBar-link-3UeTe, .NavigationBar-link-3UeTe:active, .NavigationBar-link-3UeTe:visited {\n    color: rgba(255, 255, 255, 0.6);\n    text-decoration: none;\n}\n\n.NavigationBar-link-3UeTe:hover {\n    color: rgba(255, 255, 255, 1);\n}", "", {"version":3,"sources":["/Users/Aetion/Documents/projs/rt/football-one/src/components/NavigationBar/NavigationBar.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D;;gFAE8E;;EAE9E,qCAAqC,EAAE,gCAAgC;CACxE;;AAED;IACI,mBAAmB;IACnB,OAAO;IACP,qCAAqC;IACrC,wCAAwC;IACxC,YAAY;IACZ,cAAc;CACjB;;AAED;IACI,gCAAgC;CACnC;;AAED;IACI,gCAAgC;CACnC;;AAED;IACI,iBAAiB;IACjB,eAAe;CAClB;;AAED;IACI,gCAAgC;IAChC,sBAAsB;CACzB;;AAED;IACI,8BAA8B;CACjC","file":"NavigationBar.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n\n  --main-app-color: rgb(121, 133, 125);  /* Extra small screen / phone */\n}\n\n.container {\n    position: absolute;\n    top: 0;\n    background-color: rgb(121, 133, 125);\n    background-color: var(--main-app-color);\n    width: 100%;\n    padding: 10px;\n}\n\n.text {\n    color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n    color: rgba(255, 255, 255, 0.3);\n}\n\n.text, .link {\n    padding: 2px 5px;\n    font-size: 1em;\n}\n\n.link, .link:active, .link:visited {\n    color: rgba(255, 255, 255, 0.6);\n    text-decoration: none;\n}\n\n.link:hover {\n    color: rgba(255, 255, 255, 1);\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "NavigationBar-container-3uplM",
	"text": "NavigationBar-text-3wNoT",
	"spacer": "NavigationBar-spacer-1H6Fc",
	"link": "NavigationBar-link-3UeTe"
};

/***/ }),

/***/ "./src/components/Link/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/history.js");
var _jsxFileName = "/Users/Aetion/Documents/projs/rt/football-one/src/components/Link/Link.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (event.defaultPrevented === true) {
          return;
        }

        event.preventDefault();
        _history__WEBPACK_IMPORTED_MODULE_2__["default"].push(_this.props.to);
      }
    }), _temp));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["to", "children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
        href: to
      }, props, {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), children);
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }
});
Object.defineProperty(Link, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onClick: null
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/components/NavigationBar/NavigationBar.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/components/NavigationBar/NavigationBar.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/components/NavigationBar/NavigationBar.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationBar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/NavigationBar/NavigationBar.css");
/* harmony import */ var _NavigationBar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavigationBar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Link/Link.js");
var _jsxFileName = "/Users/Aetion/Documents/projs/rt/football-one/src/components/NavigationBar/NavigationBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MENU_OPTIONS = [{
  label: 'RESERVAS',
  link: '/reservations'
}, {
  label: 'RESERVAS',
  link: '/reservations'
}, {
  label: 'CAJA DIARIA',
  link: '/accounting'
}, {
  label: 'CLIENTES',
  link: '/clients'
}, {
  label: 'PRODUCTOS',
  link: '/products'
}, {
  label: 'REPORTES',
  link: '/reports'
}];

var NavigationBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: "renderSectionButtons",
    value: function renderSectionButtons() {
      var menuOptions = MENU_OPTIONS.forEach(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          "class": "btn btn-success app-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: _NavigationBar_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
          to: "/reservations",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, "RESERVAS"));
      });
      console.log("menuOptions => ", menuOptions);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, menuOptions);
    }
  }, {
    key: "render",
    value: function render() {
      var selectedOption = this.props.selectedOption;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _NavigationBar_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.renderSectionButtons(selectedOption));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_NavigationBar_css__WEBPACK_IMPORTED_MODULE_2___default.a)(NavigationBar));

/***/ }),

/***/ "./src/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("history/createBrowserHistory");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
 // Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history

/* harmony default export */ __webpack_exports__["default"] = (false && history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default()());

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9jbGllbnRzLmIwNzY5YWE4MmU5ZDE5NzI3MGYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZXRpb24vRG9jdW1lbnRzL3Byb2pzL3J0L2Zvb3RiYWxsLW9uZS9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyL05hdmlnYXRpb25CYXIuY3NzIiwiL1VzZXJzL0FldGlvbi9Eb2N1bWVudHMvcHJvanMvcnQvZm9vdGJhbGwtb25lL3NyYy9jb21wb25lbnRzL0xpbmsvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyL05hdmlnYXRpb25CYXIuY3NzPzlkZDgiLCIvVXNlcnMvQWV0aW9uL0RvY3VtZW50cy9wcm9qcy9ydC9mb290YmFsbC1vbmUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci9OYXZpZ2F0aW9uQmFyLmpzIiwiL1VzZXJzL0FldGlvbi9Eb2N1bWVudHMvcHJvanMvcnQvZm9vdGJhbGwtb25lL3NyYy9oaXN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1haW4tYXBwLWNvbG9yOiByZ2IoMTIxLCAxMzMsIDEyNSk7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJhci1jb250YWluZXItM3VwbE0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTMzLCAxMjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJhci10ZXh0LTN3Tm9UIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLk5hdmlnYXRpb25CYXItc3BhY2VyLTFINkZjIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLk5hdmlnYXRpb25CYXItdGV4dC0zd05vVCwgLk5hdmlnYXRpb25CYXItbGluay0zVWVUZSB7XFxuICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJhci1saW5rLTNVZVRlLCAuTmF2aWdhdGlvbkJhci1saW5rLTNVZVRlOmFjdGl2ZSwgLk5hdmlnYXRpb25CYXItbGluay0zVWVUZTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uTmF2aWdhdGlvbkJhci1saW5rLTNVZVRlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvQWV0aW9uL0RvY3VtZW50cy9wcm9qcy9ydC9mb290YmFsbC1vbmUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci9OYXZpZ2F0aW9uQmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUUsa0VBQWtFOztFQUVsRTs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQzs7RUFFMUQ7O2dGQUU4RTs7RUFFOUUscUNBQXFDLEVBQUUsZ0NBQWdDO0NBQ3hFOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQ0FBZ0M7SUFDaEMsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksOEJBQThCO0NBQ2pDXCIsXCJmaWxlXCI6XCJOYXZpZ2F0aW9uQmFyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1haW4tYXBwLWNvbG9yOiByZ2IoMTIxLCAxMzMsIDEyNSk7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDEzMywgMTI1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnRleHQsIC5saW5rIHtcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5saW5rLCAubGluazphY3RpdmUsIC5saW5rOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOYXZpZ2F0aW9uQmFyLWNvbnRhaW5lci0zdXBsTVwiLFxuXHRcInRleHRcIjogXCJOYXZpZ2F0aW9uQmFyLXRleHQtM3dOb1RcIixcblx0XCJzcGFjZXJcIjogXCJOYXZpZ2F0aW9uQmFyLXNwYWNlci0xSDZGY1wiLFxuXHRcImxpbmtcIjogXCJOYXZpZ2F0aW9uQmFyLWxpbmstM1VlVGVcIlxufTsiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vaGlzdG9yeSc7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6IG51bGwsXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudG8pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RvfSB7Li4ucHJvcHN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTMhLi9OYXZpZ2F0aW9uQmFyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTMhLi9OYXZpZ2F0aW9uQmFyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTYtcnVsZXMtMyEuL05hdmlnYXRpb25CYXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb25CYXIuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuY29uc3QgTUVOVV9PUFRJT05TID0gW3sgbGFiZWw6ICdSRVNFUlZBUycsIGxpbms6ICcvcmVzZXJ2YXRpb25zJyB9LFxueyBsYWJlbDogJ1JFU0VSVkFTJywgbGluazogJy9yZXNlcnZhdGlvbnMnIH0sXG57IGxhYmVsOiAnQ0FKQSBESUFSSUEnLCBsaW5rOiAnL2FjY291bnRpbmcnIH0sXG57IGxhYmVsOiAnQ0xJRU5URVMnLCBsaW5rOiAnL2NsaWVudHMnIH0sXG57IGxhYmVsOiAnUFJPRFVDVE9TJywgbGluazogJy9wcm9kdWN0cycgfSxcbnsgbGFiZWw6ICdSRVBPUlRFUycsIGxpbms6ICcvcmVwb3J0cycgfV07XG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlclNlY3Rpb25CdXR0b25zKCkge1xuICAgICAgICBsZXQgbWVudU9wdGlvbnMgPSBNRU5VX09QVElPTlMuZm9yRWFjaChvcHRpb24gPT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGFwcC1idG5cIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvcmVzZXJ2YXRpb25zXCI+UkVTRVJWQVM8L0xpbms+XG4gICAgICAgICAgICA8L2J1dHRvbj4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnVPcHRpb25zID0+IFwiLCBtZW51T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHttZW51T3B0aW9uc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgc2VsZWN0ZWRPcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNlY3Rpb25CdXR0b25zKHNlbGVjdGVkT3B0aW9uKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShOYXZpZ2F0aW9uQmFyKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xuXG4vLyBOYXZpZ2F0aW9uIG1hbmFnZXIsIGUuZy4gaGlzdG9yeS5wdXNoKCcvaG9tZScpXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWphY2tzb24vaGlzdG9yeVxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5lbnYuQlJPV1NFUiAmJiBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBbkNBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBREE7Ozs7QUFPQTtBQUNBO0FBREE7O0FBK0JBOzs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBcEJBO0FBQ0E7QUFzQkE7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBR0E7QUFDQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=