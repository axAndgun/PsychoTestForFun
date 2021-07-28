self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./src/components/Timer.jsx":
/*!**********************************!*\
  !*** ./src/components/Timer.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerLayout": function() { return /* binding */ TimerLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\parkgundo\\Documents\\GitHub\\PsychoTestForFun\\src\\components\\Timer.jsx",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    font-weight: bold;\n    color: ", ";\n    font-size: 20;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var TimerLayout = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject(), function (props) {
  return props.time > 15 ? 'blue' : 'red';
});
_c = TimerLayout;

function Timer(_ref) {
  _s();

  var onTimeout = _ref.onTimeout,
      seconds = _ref.seconds;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(seconds !== null && seconds !== void 0 ? seconds : 30),
      counter = _useState[0],
      setCounter = _useState[1];

  var timer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (counter > 0) {
      timer.current = setTimeout(function () {
        setCounter(counter - 1);
      }, 1000);
    } else {
      if (onTimeout) {
        onTimeout();
      }
    }
  }, [counter, onTimeout]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return function () {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TimerLayout, {
    time: counter,
    children: ["\uB0A8\uC740\uC2DC\uAC04: ", counter]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(Timer, "Lr0wfKld1ftEtCf/HB/ilOlkSx4=");

_c2 = Timer;
/* harmony default export */ __webpack_exports__["default"] = (Timer);

var _c, _c2;

$RefreshReg$(_c, "TimerLayout");
$RefreshReg$(_c2, "Timer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanN4Il0sIm5hbWVzIjpbIlRpbWVyTGF5b3V0Iiwic3R5bGVkIiwicHJvcHMiLCJ0aW1lIiwiVGltZXIiLCJvblRpbWVvdXQiLCJzZWNvbmRzIiwidXNlU3RhdGUiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInRpbWVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLDBEQUFILG9CQUVYLFVBQUFDLEtBQUs7QUFBQSxTQUFFQSxLQUFLLENBQUNDLElBQU4sR0FBVyxFQUFYLEdBQWUsTUFBZixHQUF3QixLQUExQjtBQUFBLENBRk0sQ0FBakI7S0FBTUgsVzs7QUFNYixTQUFTSSxLQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBckJDLFNBQXFCLFFBQXJCQSxTQUFxQjtBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBQ0QsT0FBRCxhQUFDQSxPQUFELGNBQUNBLE9BQUQsR0FBWSxFQUFaLENBREg7QUFBQSxNQUM1QkUsT0FENEI7QUFBQSxNQUNuQkMsVUFEbUI7O0FBRW5DLE1BQU1DLEtBQUssR0FBR0MsNkNBQU0sRUFBcEI7QUFDQUMsa0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR0osT0FBTyxHQUFHLENBQWIsRUFBZTtBQUNYRSxXQUFLLENBQUNHLE9BQU4sR0FBZUMsVUFBVSxDQUFDLFlBQUk7QUFDNUJMLGtCQUFVLENBQUNELE9BQU8sR0FBRSxDQUFWLENBQVY7QUFDRCxPQUZ3QixFQUV2QixJQUZ1QixDQUF6QjtBQUdILEtBSkQsTUFJSztBQUNELFVBQUdILFNBQUgsRUFBYTtBQUNUQSxpQkFBUztBQUNaO0FBQ0o7QUFFSixHQVhRLEVBV1AsQ0FBQ0csT0FBRCxFQUFVSCxTQUFWLENBWE8sQ0FBVDtBQWVBTyxrREFBUyxDQUFDLFlBQUk7QUFDWixXQUFPLFlBQUs7QUFDUCxVQUFHRixLQUFLLENBQUNHLE9BQVQsRUFBaUI7QUFDYkUsb0JBQVksQ0FBQ0wsS0FBSyxDQUFDRyxPQUFQLENBQVo7QUFDSDtBQUNKLEtBSkY7QUFLRixHQU5TLEVBTVIsRUFOUSxDQUFUO0FBVUUsc0JBQ0EsOERBQUMsV0FBRDtBQUFhLFFBQUksRUFBRUwsT0FBbkI7QUFBQSw2Q0FDV0EsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQUtIOztHQWpDUUosSzs7TUFBQUEsSztBQW1DVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LmQwN2E5OGMzOGYzZjZkYjdkOTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lckxheW91dCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke3Byb3BzPT5wcm9wcy50aW1lPjE1PyAnYmx1ZScgOiAncmVkJ307XHJcbiAgICBmb250LXNpemU6IDIwO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBUaW1lcih7b25UaW1lb3V0LCBzZWNvbmRzfSkge1xyXG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKHNlY29uZHMgPz8gMzApXHJcbiAgY29uc3QgdGltZXIgPSB1c2VSZWYoKVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBpZihjb3VudGVyID4gMCl7XHJcbiAgICAgICAgICB0aW1lci5jdXJyZW50ID1zZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHNldENvdW50ZXIoY291bnRlciAtMSlcclxuICAgICAgICAgIH0sMTAwMClcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBpZihvblRpbWVvdXQpe1xyXG4gICAgICAgICAgICAgIG9uVGltZW91dCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgfSxbY291bnRlciwgb25UaW1lb3V0XSlcclxuXHJcbiAgICAgIFxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgcmV0dXJuICgpID0+e1xyXG4gICAgICAgICBpZih0aW1lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lci5jdXJyZW50KVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gfSxbXSlcclxuXHJcbiBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRpbWVyTGF5b3V0IHRpbWU9e2NvdW50ZXJ9PlxyXG4gICAgICAgIOuCqOydgOyLnOqwhDoge2NvdW50ZXJ9XHJcbiAgICA8L1RpbWVyTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyJdLCJzb3VyY2VSb290IjoiIn0=