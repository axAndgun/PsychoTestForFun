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
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    font-weight: bold;\n    color: black;\n    font-size: 20;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var TimerLayout = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanN4Il0sIm5hbWVzIjpbIlRpbWVyTGF5b3V0Iiwic3R5bGVkIiwiVGltZXIiLCJvblRpbWVvdXQiLCJzZWNvbmRzIiwidXNlU3RhdGUiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInRpbWVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLDBEQUFILG1CQUFqQjtLQUFNRCxXOztBQU1iLFNBQVNFLEtBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFyQkMsU0FBcUIsUUFBckJBLFNBQXFCO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVOztBQUFBLGtCQUNMQywrQ0FBUSxDQUFDRCxPQUFELGFBQUNBLE9BQUQsY0FBQ0EsT0FBRCxHQUFZLEVBQVosQ0FESDtBQUFBLE1BQzVCRSxPQUQ0QjtBQUFBLE1BQ25CQyxVQURtQjs7QUFFbkMsTUFBTUMsS0FBSyxHQUFHQyw2Q0FBTSxFQUFwQixDQUZtQyxDQUduQzs7QUFDQUMsa0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR0osT0FBTyxHQUFHLENBQWIsRUFBZTtBQUNYRSxXQUFLLENBQUNHLE9BQU4sR0FBZUMsVUFBVSxDQUFDLFlBQUk7QUFDNUJMLGtCQUFVLENBQUNELE9BQU8sR0FBRSxDQUFWLENBQVY7QUFDRCxPQUZ3QixFQUV2QixJQUZ1QixDQUF6QjtBQUdBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWWQsV0FBVyxDQUFDZSxLQUFaLEdBQWtCLElBQTlCOztBQUNKLFVBQUdULE9BQU8sR0FBQyxFQUFYLEVBQWM7QUFDVk4sbUJBQVcsQ0FBQ2UsS0FBWixHQUFtQixLQUFuQjtBQUNBRixlQUFPLENBQUNDLEdBQVIsQ0FBWWQsV0FBVyxDQUFDZSxLQUFaLEdBQWtCLElBQTlCO0FBQ0g7QUFDQSxLQVRELE1BU0s7QUFDRCxVQUFHWixTQUFILEVBQWE7QUFDVEEsaUJBQVM7QUFDWjtBQUNKO0FBRUosR0FoQlEsRUFnQlAsQ0FBQ0csT0FBRCxFQUFVSCxTQUFWLENBaEJPLENBQVQ7QUFvQkFPLGtEQUFTLENBQUMsWUFBSTtBQUNaLFdBQU8sWUFBSztBQUNQLFVBQUdGLEtBQUssQ0FBQ0csT0FBVCxFQUFpQjtBQUNiSyxvQkFBWSxDQUFDUixLQUFLLENBQUNHLE9BQVAsQ0FBWjtBQUNIO0FBQ0osS0FKRjtBQUtGLEdBTlMsRUFNUixFQU5RLENBQVQ7QUFVRSxzQkFDQSw4REFBQyxXQUFEO0FBQUEsNkNBQ1dMLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFLSDs7R0F2Q1FKLEs7O01BQUFBLEs7QUF5Q1QsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4yZTJhZWY2YzMwZTU3ZTRlMGRiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgVGltZXJMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBUaW1lcih7b25UaW1lb3V0LCBzZWNvbmRzfSkge1xyXG4gIGNvbnN0IFtjb3VudGVyLCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKHNlY29uZHMgPz8gMzApXHJcbiAgY29uc3QgdGltZXIgPSB1c2VSZWYoKVxyXG4gIC8vbGV0IHRpbWVyXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGlmKGNvdW50ZXIgPiAwKXtcclxuICAgICAgICAgIHRpbWVyLmN1cnJlbnQgPXNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgc2V0Q291bnRlcihjb3VudGVyIC0xKVxyXG4gICAgICAgICAgfSwxMDAwKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coVGltZXJMYXlvdXQuY29sb3IrXCLstIjquLBcIilcclxuICAgICAgaWYoY291bnRlcjwyNSl7XHJcbiAgICAgICAgICBUaW1lckxheW91dC5jb2xvciA9XCJyZWRcIjtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFRpbWVyTGF5b3V0LmNvbG9yK1wi67OA6rK9XCIpXHJcbiAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBpZihvblRpbWVvdXQpe1xyXG4gICAgICAgICAgICAgIG9uVGltZW91dCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgfSxbY291bnRlciwgb25UaW1lb3V0XSlcclxuXHJcbiAgICAgIFxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgcmV0dXJuICgpID0+e1xyXG4gICAgICAgICBpZih0aW1lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lci5jdXJyZW50KVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gfSxbXSlcclxuXHJcbiBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRpbWVyTGF5b3V0PlxyXG4gICAgICAgIOuCqOydgOyLnOqwhDoge2NvdW50ZXJ9XHJcbiAgICA8L1RpbWVyTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyJdLCJzb3VyY2VSb290IjoiIn0=