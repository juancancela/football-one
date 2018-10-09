require("source-map-support").install();
exports.ids = ["products"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/products/ProductsPage.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n\n  --main-app-color: rgb(121, 133, 125);  /* Extra small screen / phone */\n}\n\n.ProductsPage-container-2kaS7 {\n    margin: 3px;\n}", "", {"version":3,"sources":["/Users/Aetion/Documents/projs/rt/football-one/src/routes/products/ProductsPage.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;;EAE1D;;gFAE8E;;EAE9E,qCAAqC,EAAE,gCAAgC;CACxE;;AAED;IACI,YAAY;CACf","file":"ProductsPage.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n\n  --main-app-color: rgb(121, 133, 125);  /* Extra small screen / phone */\n}\n\n.container {\n    margin: 3px;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "ProductsPage-container-2kaS7"
};

/***/ }),

/***/ "./src/routes/products/ProductsPage.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/products/ProductsPage.css");
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
      module.hot.accept("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/products/ProductsPage.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--6-rules-2!./node_modules/postcss-loader/lib/index.js??ref--6-rules-3!./src/routes/products/ProductsPage.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/products/ProductsPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductsPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/products/ProductsPage.css");
/* harmony import */ var _ProductsPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductsPage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/NavigationBar/NavigationBar.js");
/* harmony import */ var _components_Table_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Table/Table.js");
/* harmony import */ var _appConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/appConstants.js");
var _jsxFileName = "/Users/Aetion/Documents/projs/rt/football-one/src/routes/products/ProductsPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var productColumns = function productColumns() {
  return [{
    key: 'id',
    label: 'Id',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'name',
    label: 'Nombre',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'price',
    label: 'Precio',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'cost',
    label: 'Costo',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
  }, {
    key: 'stock',
    label: 'Stock',
    type: _appConstants__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPES"].TEXT,
    show: true
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

var ProductsPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductsPage, _React$Component);

  function ProductsPage() {
    _classCallCheck(this, ProductsPage);

    return _possibleConstructorReturn(this, (ProductsPage.__proto__ || Object.getPrototypeOf(ProductsPage)).apply(this, arguments));
  }

  _createClass(ProductsPage, [{
    key: "render",
    value: function render() {
      var columns = productColumns();
      var entityKeys = createEntityKeys(columns);
      var emptyEntity = createEmptyEntity(entityKeys);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavigationBar_NavigationBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        selectedOption: _appConstants__WEBPACK_IMPORTED_MODULE_5__["MENU_LABELS"].PRODUCTS,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _ProductsPage_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        model: "products",
        name: "productos",
        columns: columns,
        entityKeys: entityKeys,
        emptyEntity: emptyEntity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })));
    }
  }]);

  return ProductsPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_ProductsPage_css__WEBPACK_IMPORTED_MODULE_2___default.a)(ProductsPage));

/***/ }),

/***/ "./src/routes/products/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/products/ProductsPage.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = "/Users/Aetion/Documents/projs/rt/football-one/src/routes/products/index.js";

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
              chunks: ['products'],
              component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductsPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3Byb2R1Y3RzLmpzIiwic291cmNlcyI6WyIvVXNlcnMvQWV0aW9uL0RvY3VtZW50cy9wcm9qcy9ydC9mb290YmFsbC1vbmUvc3JjL3JvdXRlcy9wcm9kdWN0cy9Qcm9kdWN0c1BhZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcHJvZHVjdHMvUHJvZHVjdHNQYWdlLmNzcz84MTM5IiwiL1VzZXJzL0FldGlvbi9Eb2N1bWVudHMvcHJvanMvcnQvZm9vdGJhbGwtb25lL3NyYy9yb3V0ZXMvcHJvZHVjdHMvUHJvZHVjdHNQYWdlLmpzIiwiL1VzZXJzL0FldGlvbi9Eb2N1bWVudHMvcHJvanMvcnQvZm9vdGJhbGwtb25lL3NyYy9yb3V0ZXMvcHJvZHVjdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbiAgLypcXG4gICAqIENvbG9yc1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1haW4tYXBwLWNvbG9yOiByZ2IoMTIxLCAxMzMsIDEyNSk7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbn1cXG5cXG4uUHJvZHVjdHNQYWdlLWNvbnRhaW5lci0ya2FTNyB7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL0FldGlvbi9Eb2N1bWVudHMvcHJvanMvcnQvZm9vdGJhbGwtb25lL3NyYy9yb3V0ZXMvcHJvZHVjdHMvUHJvZHVjdHNQYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFOztnRkFFOEU7O0VBRTlFLGtFQUFrRTs7RUFFbEU7O2dGQUU4RTs7RUFFOUUsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7O0VBRTFEOztnRkFFOEU7O0VBRTlFLHFDQUFxQyxFQUFFLGdDQUFnQztDQUN4RTs7QUFFRDtJQUNJLFlBQVk7Q0FDZlwiLFwiZmlsZVwiOlwiUHJvZHVjdHNQYWdlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG5cXG4gIC8qXFxuICAgKiBDb2xvcnNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYWluLWFwcC1jb2xvcjogcmdiKDEyMSwgMTMzLCAxMjUpOyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUHJvZHVjdHNQYWdlLWNvbnRhaW5lci0ya2FTN1wiXG59OyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0zIS4vUHJvZHVjdHNQYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS02LXJ1bGVzLTMhLi9Qcm9kdWN0c1BhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNi1ydWxlcy0zIS4vUHJvZHVjdHNQYWdlLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Qcm9kdWN0c1BhZ2UuY3NzJztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlL1RhYmxlJztcbmltcG9ydCAqIGFzIGMgZnJvbSAnLi4vLi4vYXBwQ29uc3RhbnRzJztcblxuY29uc3QgcHJvZHVjdENvbHVtbnMgPSAoKSA9PiBbXG4gIHtcbiAgICBrZXk6ICdpZCcsXG4gICAgbGFiZWw6ICdJZCcsXG4gICAgdHlwZTogYy5EQVRBX1RZUEVTLlRFWFQsXG4gICAgc2hvdzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGtleTogJ25hbWUnLFxuICAgIGxhYmVsOiAnTm9tYnJlJyxcbiAgICB0eXBlOiBjLkRBVEFfVFlQRVMuVEVYVCxcbiAgICBzaG93OiB0cnVlLFxuICB9LFxuICB7XG4gICAga2V5OiAncHJpY2UnLFxuICAgIGxhYmVsOiAnUHJlY2lvJyxcbiAgICB0eXBlOiBjLkRBVEFfVFlQRVMuVEVYVCxcbiAgICBzaG93OiB0cnVlLFxuICB9LFxuICB7XG4gICAga2V5OiAnY29zdCcsXG4gICAgbGFiZWw6ICdDb3N0bycsXG4gICAgdHlwZTogYy5EQVRBX1RZUEVTLlRFWFQsXG4gICAgc2hvdzogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGtleTogJ3N0b2NrJyxcbiAgICBsYWJlbDogJ1N0b2NrJyxcbiAgICB0eXBlOiBjLkRBVEFfVFlQRVMuVEVYVCxcbiAgICBzaG93OiB0cnVlLFxuICB9LFxuXTtcblxuY29uc3QgY3JlYXRlRW1wdHlFbnRpdHkgPSBlbnRpdHlLZXlzID0+IHtcbiAgY29uc3QgZW1wdHlFbnRpdHkgPSB7fTtcbiAgZW50aXR5S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgZW1wdHlFbnRpdHlba2V5XSA9ICcnO1xuICB9KTtcblxuICByZXR1cm4gZW1wdHlFbnRpdHk7XG59O1xuXG5jb25zdCBjcmVhdGVFbnRpdHlLZXlzID0gY29sdW1ucyA9PiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gY29sdW1uLmtleSk7XG5cbmNsYXNzIFByb2R1Y3RzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gcHJvZHVjdENvbHVtbnMoKTtcbiAgICBjb25zdCBlbnRpdHlLZXlzID0gY3JlYXRlRW50aXR5S2V5cyhjb2x1bW5zKTtcbiAgICBjb25zdCBlbXB0eUVudGl0eSA9IGNyZWF0ZUVtcHR5RW50aXR5KGVudGl0eUtleXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2aWdhdGlvbkJhciBzZWxlY3RlZE9wdGlvbj17Yy5NRU5VX0xBQkVMUy5QUk9EVUNUU30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgIG1vZGVsPVwicHJvZHVjdHNcIlxuICAgICAgICAgICAgbmFtZT1cInByb2R1Y3Rvc1wiXG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgZW50aXR5S2V5cz17ZW50aXR5S2V5c31cbiAgICAgICAgICAgIGVtcHR5RW50aXR5PXtlbXB0eUVudGl0eX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShQcm9kdWN0c1BhZ2UpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZHVjdHNQYWdlIGZyb20gJy4vUHJvZHVjdHNQYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdGb290YmFsbCBPbmUnLFxuICAgICAgICBjaHVua3M6IFsncHJvZHVjdHMnXSxcbiAgICAgICAgY29tcG9uZW50OiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0c1BhZ2UgLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF6QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTs7OztBQW5CQTtBQUNBO0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBWUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==