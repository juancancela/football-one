require("source-map-support").install();
exports.id = "clients";
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
          lineNumber: 34
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9jbGllbnRzLjhjMTU4OTcyNGEwNWVhODNjZjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZXRpb24vRG9jdW1lbnRzL3Byb2pzL3J0L2Zvb3RiYWxsLW9uZS9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyL05hdmlnYXRpb25CYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vTmF2aWdhdGlvbkJhci5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5jb25zdCBNRU5VX09QVElPTlMgPSBbeyBsYWJlbDogJ1JFU0VSVkFTJywgbGluazogJy9yZXNlcnZhdGlvbnMnIH0sXG57IGxhYmVsOiAnQ0FKQSBESUFSSUEnLCBsaW5rOiAnL2FjY291bnRpbmcnIH0sXG57IGxhYmVsOiAnQ0xJRU5URVMnLCBsaW5rOiAnL2NsaWVudHMnIH0sXG57IGxhYmVsOiAnUFJPRFVDVE9TJywgbGluazogJy9wcm9kdWN0cycgfSxcbnsgbGFiZWw6ICdSRVBPUlRFUycsIGxpbms6ICcvcmVwb3J0cycgfV07XG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyU2VjdGlvbkJ1dHRvbihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuICg8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYXBwLWJ0blwiPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmxpbmt9XG4gICAgICAgICAgICAgICAgdG89e29wdGlvbi5saW5rfT57b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2J1dHRvbj4pXG4gICAgfTtcblxuICAgIHJlbmRlclNlY3Rpb25CdXR0b25zKCkge1xuICAgICAgICBsZXQgbWVudU9wdGlvbnMgPSBbXTtcbiAgICAgICAgTUVOVV9PUFRJT05TLmZvckVhY2gob3B0aW9uID0+IG1lbnVPcHRpb25zLnB1c2godGhpcy5yZW5kZXJTZWN0aW9uQnV0dG9uKG9wdGlvbikpKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge21lbnVPcHRpb25zfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBzZWxlY3RlZE9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU2VjdGlvbkJ1dHRvbnMoc2VsZWN0ZWRPcHRpb24pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShOYXZpZ2F0aW9uQmFyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7OztBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUEzQkE7QUFDQTtBQTZCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9