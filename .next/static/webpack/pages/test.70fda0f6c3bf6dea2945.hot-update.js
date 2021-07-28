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
  return props.time > 20 ? 'black' : 'red';
});
_c = TimerLayout;

function Timer(_ref) {
  _s();

  var onTimeout = _ref.onTimeout,
      seconds = _ref.seconds;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(seconds !== null && seconds !== void 0 ? seconds : 30),
      counter = _useState[0],
      setCounter = _useState[1];

  var timer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(); //let timer

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (counter > 0) {
      timer.current = setTimeout(function () {
        setCounter(counter - 1);
      }, 1000);
      console.log(TimerLayout.color + "초기");

      if (counter < 25) {
        TimerLayout.color = "red";
        console.log(TimerLayout.color + "변경");
      }
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
    children: ["\uB0A8\uC740\uC2DC\uAC04: ", counter]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanN4Il0sIm5hbWVzIjpbIlRpbWVyTGF5b3V0Iiwic3R5bGVkIiwicHJvcHMiLCJ0aW1lIiwiVGltZXIiLCJvblRpbWVvdXQiLCJzZWNvbmRzIiwidXNlU3RhdGUiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInRpbWVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLDBEQUFILG9CQUVYLFVBQUFDLEtBQUs7QUFBQSxTQUFFQSxLQUFLLENBQUNDLElBQU4sR0FBVyxFQUFYLEdBQWUsT0FBZixHQUF5QixLQUEzQjtBQUFBLENBRk0sQ0FBakI7S0FBTUgsVzs7QUFNYixTQUFTSSxLQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBckJDLFNBQXFCLFFBQXJCQSxTQUFxQjtBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBQ0QsT0FBRCxhQUFDQSxPQUFELGNBQUNBLE9BQUQsR0FBWSxFQUFaLENBREg7QUFBQSxNQUM1QkUsT0FENEI7QUFBQSxNQUNuQkMsVUFEbUI7O0FBRW5DLE1BQU1DLEtBQUssR0FBR0MsNkNBQU0sRUFBcEIsQ0FGbUMsQ0FHbkM7O0FBQ0FDLGtEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUdKLE9BQU8sR0FBRyxDQUFiLEVBQWU7QUFDWEUsV0FBSyxDQUFDRyxPQUFOLEdBQWVDLFVBQVUsQ0FBQyxZQUFJO0FBQzVCTCxrQkFBVSxDQUFDRCxPQUFPLEdBQUUsQ0FBVixDQUFWO0FBQ0QsT0FGd0IsRUFFdkIsSUFGdUIsQ0FBekI7QUFHQU8sYUFBTyxDQUFDQyxHQUFSLENBQVloQixXQUFXLENBQUNpQixLQUFaLEdBQWtCLElBQTlCOztBQUNKLFVBQUdULE9BQU8sR0FBQyxFQUFYLEVBQWM7QUFDVlIsbUJBQVcsQ0FBQ2lCLEtBQVosR0FBbUIsS0FBbkI7QUFDQUYsZUFBTyxDQUFDQyxHQUFSLENBQVloQixXQUFXLENBQUNpQixLQUFaLEdBQWtCLElBQTlCO0FBQ0g7QUFDQSxLQVRELE1BU0s7QUFDRCxVQUFHWixTQUFILEVBQWE7QUFDVEEsaUJBQVM7QUFDWjtBQUNKO0FBRUosR0FoQlEsRUFnQlAsQ0FBQ0csT0FBRCxFQUFVSCxTQUFWLENBaEJPLENBQVQ7QUFvQkFPLGtEQUFTLENBQUMsWUFBSTtBQUNaLFdBQU8sWUFBSztBQUNQLFVBQUdGLEtBQUssQ0FBQ0csT0FBVCxFQUFpQjtBQUNiSyxvQkFBWSxDQUFDUixLQUFLLENBQUNHLE9BQVAsQ0FBWjtBQUNIO0FBQ0osS0FKRjtBQUtGLEdBTlMsRUFNUixFQU5RLENBQVQ7QUFVRSxzQkFDQSw4REFBQyxXQUFEO0FBQUEsNkNBQ1dMLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFLSDs7R0F2Q1FKLEs7O01BQUFBLEs7QUF5Q1QsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43MGZkYTBmNmMzYmY2ZGVhMjk0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgVGltZXJMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJHtwcm9wcz0+cHJvcHMudGltZT4yMD8gJ2JsYWNrJyA6ICdyZWQnfTtcclxuICAgIGZvbnQtc2l6ZTogMjA7XHJcbmBcclxuXHJcbmZ1bmN0aW9uIFRpbWVyKHtvblRpbWVvdXQsIHNlY29uZHN9KSB7XHJcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoc2Vjb25kcyA/PyAzMClcclxuICBjb25zdCB0aW1lciA9IHVzZVJlZigpXHJcbiAgLy9sZXQgdGltZXJcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgaWYoY291bnRlciA+IDApe1xyXG4gICAgICAgICAgdGltZXIuY3VycmVudCA9c2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBzZXRDb3VudGVyKGNvdW50ZXIgLTEpXHJcbiAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhUaW1lckxheW91dC5jb2xvcitcIuy0iOq4sFwiKVxyXG4gICAgICBpZihjb3VudGVyPDI1KXtcclxuICAgICAgICAgIFRpbWVyTGF5b3V0LmNvbG9yID1cInJlZFwiO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coVGltZXJMYXlvdXQuY29sb3IrXCLrs4Dqsr1cIilcclxuICAgICAgfVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIGlmKG9uVGltZW91dCl7XHJcbiAgICAgICAgICAgICAgb25UaW1lb3V0KClcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICB9LFtjb3VudGVyLCBvblRpbWVvdXRdKVxyXG5cclxuICAgICAgXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICByZXR1cm4gKCkgPT57XHJcbiAgICAgICAgIGlmKHRpbWVyLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpXHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiB9LFtdKVxyXG5cclxuIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8VGltZXJMYXlvdXQ+XHJcbiAgICAgICAg64Ko7J2A7Iuc6rCEOiB7Y291bnRlcn1cclxuICAgIDwvVGltZXJMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==