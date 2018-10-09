require("source-map-support").install();
exports.ids = ["clients"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/clients/ClientsPage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n\n  --main-app-color: rgb(121, 133, 125);  /* Extra small screen / phone */\n}\n\n.ClientsPage-container-3LNNl {\n    margin: 3px;\n}", "", {"version":3,"sources":["/Users/Aetion/Documents/projs/rt/football-one/src/routes/clients/ClientsPage.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D;;gFAE8E;;EAE9E,qCAAqC,EAAE,gCAAgC;CACxE;;AAED;IACI,YAAY;CACf","file":"ClientsPage.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n\n  --main-app-color: rgb(121, 133, 125);  /* Extra small screen / phone */\n}\n\n.container {\n    margin: 3px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "ClientsPage-container-3LNNl"
};

/***/ }),

/***/ "./src/routes/clients/ClientsPage.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/clients/ClientsPage.css");
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
      module.hot.accept("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/clients/ClientsPage.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/clients/ClientsPage.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/clients/ClientsPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClientsPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/clients/ClientsPage.css");
/* harmony import */ var _ClientsPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ClientsPage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/NavigationBar/NavigationBar.js");
/* harmony import */ var _components_Table_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Table/Table.js");
/* harmony import */ var _appConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/appConstants.js");
var _jsxFileName = "/Users/Aetion/Documents/projs/rt/football-one/src/routes/clients/ClientsPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var clientsColumns = function clientsColumns() {
  return [{
    key: 'name',
    label: 'Nombre',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'id',
    label: 'id',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'phone',
    label: 'Telefono',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'fixed',
    label: 'Fijo',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].BOOLEAN,
    show: true
  }, {
    key: 'instagram',
    label: 'Instagram',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: false
  }, {
    key: 'facebook',
    label: 'Facebook',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: false
  }, {
    key: 'mail',
    label: 'Email',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'birthday',
    label: 'Cumpleaños',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].DATE,
    show: false
  }];
};

var createEmptyEntity = function createEmptyEntity(entityKeys) {
  var emptyEntity = {};
  entityKeys.forEach(function (key) {
    emptyEntity[key] = '';
  });
  return emptyEntity;
};

var createEntityKeys = function createEntityKeys(columns) {
  return columns.map(function (column) {
    return column.key;
  });
};

var ClientsPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClientsPage, _React$Component);

  function ClientsPage() {
    _classCallCheck(this, ClientsPage);

    return _possibleConstructorReturn(this, (ClientsPage.__proto__ || Object.getPrototypeOf(ClientsPage)).apply(this, arguments));
  }

  _createClass(ClientsPage, [{
    key: "render",
    value: function render() {
      var columns = clientsColumns();
      var entityKeys = createEntityKeys(columns);
      var emptyEntity = createEmptyEntity(entityKeys);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selectedOption: _appConstants__WEBPACK_IMPORTED_MODULE_5__["MENU_LABELS"].CLIENTS,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _ClientsPage_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        model: "clients",
        name: "cliente",
        columns: columns,
        entityKeys: entityKeys,
        emptyEntity: emptyEntity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })));
    }
  }]);

  return ClientsPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_ClientsPage_css__WEBPACK_IMPORTED_MODULE_2___default.a)(ClientsPage));

/***/ }),

/***/ "./src/routes/clients/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ClientsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/clients/ClientsPage.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = "/Users/Aetion/Documents/projs/rt/football-one/src/routes/clients/index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





function action() {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              title: 'Football One',
              chunks: ['clients'],
              component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClientsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                },
                __self: this
              }))
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NsaWVudHMuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZXRpb24vRG9jdW1lbnRzL3Byb2pzL3J0L2Zvb3RiYWxsLW9uZS9zcmMvcm91dGVzL2NsaWVudHMvQ2xpZW50c1BhZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY2xpZW50cy9DbGllbnRzUGFnZS5jc3M/Nzc2OCIsIi9Vc2Vycy9BZXRpb24vRG9jdW1lbnRzL3Byb2pzL3J0L2Zvb3RiYWxsLW9uZS9zcmMvcm91dGVzL2NsaWVudHMvQ2xpZW50c1BhZ2UuanMiLCIvVXNlcnMvQWV0aW9uL0RvY3VtZW50cy9wcm9qcy9ydC9mb290YmFsbC1vbmUvc3JjL3JvdXRlcy9jbGllbnRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYWluLWFwcC1jb2xvcjogcmdiKDEyMSwgMTMzLCAxMjUpOyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG59XFxuXFxuLkNsaWVudHNQYWdlLWNvbnRhaW5lci0zTE5ObCB7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL0FldGlvbi9Eb2N1bWVudHMvcHJvanMvcnQvZm9vdGJhbGwtb25lL3NyYy9yb3V0ZXMvY2xpZW50cy9DbGllbnRzUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDOztFQUUxRDs7Z0ZBRThFOztFQUU5RSxxQ0FBcUMsRUFBRSxnQ0FBZ0M7Q0FDeEU7O0FBRUQ7SUFDSSxZQUFZO0NBQ2ZcIixcImZpbGVcIjpcIkNsaWVudHNQYWdlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYWluLWFwcC1jb2xvcjogcmdiKDEyMSwgMTMzLCAxMjUpOyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ2xpZW50c1BhZ2UtY29udGFpbmVyLTNMTk5sXCJcbn07IiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTMhLi9DbGllbnRzUGFnZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0zIS4vQ2xpZW50c1BhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0zIS4vQ2xpZW50c1BhZ2UuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0NsaWVudHNQYWdlLmNzcyc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIvTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZS9UYWJsZSc7XG5pbXBvcnQgKiBhcyBjIGZyb20gJy4uLy4uL2FwcENvbnN0YW50cyc7XG5cbmNvbnN0IGNsaWVudHNDb2x1bW5zID0gKCkgPT4gW1xuICB7XG4gICAga2V5OiAnbmFtZScsXG4gICAgbGFiZWw6ICdOb21icmUnLFxuICAgIHR5cGU6IGMuREFUQV9UWVBFUy5URVhULFxuICAgIHNob3c6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdpZCcsXG4gICAgbGFiZWw6ICdpZCcsXG4gICAgdHlwZTogYy5EQVRBX1RZUEVTLlRFWFQsXG4gICAgc2hvdzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGtleTogJ3Bob25lJyxcbiAgICBsYWJlbDogJ1RlbGVmb25vJyxcbiAgICB0eXBlOiBjLkRBVEFfVFlQRVMuVEVYVCxcbiAgICBzaG93OiB0cnVlLFxuICB9LFxuICB7XG4gICAga2V5OiAnZml4ZWQnLFxuICAgIGxhYmVsOiAnRmlqbycsXG4gICAgdHlwZTogYy5EQVRBX1RZUEVTLkJPT0xFQU4sXG4gICAgc2hvdzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGtleTogJ2luc3RhZ3JhbScsXG4gICAgbGFiZWw6ICdJbnN0YWdyYW0nLFxuICAgIHR5cGU6IGMuREFUQV9UWVBFUy5URVhULFxuICAgIHNob3c6IGZhbHNlLFxuICB9LFxuICB7XG4gICAga2V5OiAnZmFjZWJvb2snLFxuICAgIGxhYmVsOiAnRmFjZWJvb2snLFxuICAgIHR5cGU6IGMuREFUQV9UWVBFUy5URVhULFxuICAgIHNob3c6IGZhbHNlLFxuICB9LFxuICB7XG4gICAga2V5OiAnbWFpbCcsXG4gICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgdHlwZTogYy5EQVRBX1RZUEVTLlRFWFQsXG4gICAgc2hvdzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGtleTogJ2JpcnRoZGF5JyxcbiAgICBsYWJlbDogJ0N1bXBsZWHDsW9zJyxcbiAgICB0eXBlOiBjLkRBVEFfVFlQRVMuREFURSxcbiAgICBzaG93OiBmYWxzZSxcbiAgfSxcbl07XG5cbmNvbnN0IGNyZWF0ZUVtcHR5RW50aXR5ID0gZW50aXR5S2V5cyA9PiB7XG4gIGNvbnN0IGVtcHR5RW50aXR5ID0ge307XG4gIGVudGl0eUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGVtcHR5RW50aXR5W2tleV0gPSAnJztcbiAgfSk7XG5cbiAgcmV0dXJuIGVtcHR5RW50aXR5O1xufTtcblxuY29uc3QgY3JlYXRlRW50aXR5S2V5cyA9IGNvbHVtbnMgPT4gY29sdW1ucy5tYXAoY29sdW1uID0+IGNvbHVtbi5rZXkpO1xuXG5jbGFzcyBDbGllbnRzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gY2xpZW50c0NvbHVtbnMoKTtcbiAgICBjb25zdCBlbnRpdHlLZXlzID0gY3JlYXRlRW50aXR5S2V5cyhjb2x1bW5zKTtcbiAgICBjb25zdCBlbXB0eUVudGl0eSA9IGNyZWF0ZUVtcHR5RW50aXR5KGVudGl0eUtleXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2aWdhdGlvbkJhciBzZWxlY3RlZE9wdGlvbj17Yy5NRU5VX0xBQkVMUy5DTElFTlRTfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgbW9kZWw9XCJjbGllbnRzXCJcbiAgICAgICAgICAgIG5hbWU9XCJjbGllbnRlXCJcbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBlbnRpdHlLZXlzPXtlbnRpdHlLZXlzfVxuICAgICAgICAgICAgZW1wdHlFbnRpdHk9e2VtcHR5RW50aXR5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKENsaWVudHNQYWdlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xpZW50c1BhZ2UgZnJvbSAnLi9DbGllbnRzUGFnZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuYXN5bmMgZnVuY3Rpb24gYWN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAnRm9vdGJhbGwgT25lJyxcbiAgICAgICAgY2h1bmtzOiBbJ2NsaWVudHMnXSxcbiAgICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxDbGllbnRzUGFnZSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICksXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTNDQTtBQUNBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBOzs7O0FBbkJBO0FBQ0E7QUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFZQTs7OztBIiwic291cmNlUm9vdCI6IiJ9