require("source-map-support").install();
exports.id = "products";
exports.modules = {

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
    key: "renderSectionButton",
    value: function renderSectionButton(option) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-success app-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "".concat(option.label, "-nav-btn"),
        className: _NavigationBar_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
        to: option.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, option.label));
    }
  }, {
    key: "renderSectionButtons",
    value: function renderSectionButtons() {
      var _this = this;

      var menuOptions = [];
      MENU_OPTIONS.forEach(function (option) {
        return menuOptions.push(_this.renderSectionButton(option));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
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
          lineNumber: 33
        },
        __self: this
      }, this.renderSectionButtons(selectedOption));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_NavigationBar_css__WEBPACK_IMPORTED_MODULE_2___default.a)(NavigationBar));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9wcm9kdWN0cy5kYjQwYWZhMTkwYzJkOTEyZTQyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyIvVXNlcnMvQWV0aW9uL0RvY3VtZW50cy9wcm9qcy9ydC9mb290YmFsbC1vbmUvc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci9OYXZpZ2F0aW9uQmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb25CYXIuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuY29uc3QgTUVOVV9PUFRJT05TID0gW3sgbGFiZWw6ICdSRVNFUlZBUycsIGxpbms6ICcvcmVzZXJ2YXRpb25zJyB9LFxueyBsYWJlbDogJ0NBSkEgRElBUklBJywgbGluazogJy9hY2NvdW50aW5nJyB9LFxueyBsYWJlbDogJ0NMSUVOVEVTJywgbGluazogJy9jbGllbnRzJyB9LFxueyBsYWJlbDogJ1BST0RVQ1RPUycsIGxpbms6ICcvcHJvZHVjdHMnIH0sXG57IGxhYmVsOiAnUkVQT1JURVMnLCBsaW5rOiAnL3JlcG9ydHMnIH1dO1xuXG5jbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlclNlY3Rpb25CdXR0b24ob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiAoPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGFwcC1idG5cIj5cbiAgICAgICAgICAgIDxMaW5rIGtleT17YCR7b3B0aW9uLmxhYmVsfS1uYXYtYnRuYH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5saW5rfVxuICAgICAgICAgICAgICAgICAgdG89e29wdGlvbi5saW5rfT57b3B0aW9uLmxhYmVsfTwvTGluaz5cbiAgICAgICAgPC9idXR0b24+KVxuICAgIH1cblxuICAgIHJlbmRlclNlY3Rpb25CdXR0b25zKCkge1xuICAgICAgICBsZXQgbWVudU9wdGlvbnMgPSBbXTtcbiAgICAgICAgTUVOVV9PUFRJT05TLmZvckVhY2gob3B0aW9uID0+IG1lbnVPcHRpb25zLnB1c2godGhpcy5yZW5kZXJTZWN0aW9uQnV0dG9uKG9wdGlvbikpKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7bWVudU9wdGlvbnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHNlbGVjdGVkT3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTZWN0aW9uQnV0dG9ucyhzZWxlY3RlZE9wdGlvbil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTmF2aWdhdGlvbkJhcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7OztBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUExQkE7QUFDQTtBQTRCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9