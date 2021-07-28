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
  return props.color ? 'black' : 'red';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanN4Il0sIm5hbWVzIjpbIlRpbWVyTGF5b3V0Iiwic3R5bGVkIiwicHJvcHMiLCJjb2xvciIsIlRpbWVyIiwib25UaW1lb3V0Iiwic2Vjb25kcyIsInVzZVN0YXRlIiwiY291bnRlciIsInNldENvdW50ZXIiLCJ0aW1lciIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsb0JBRVgsVUFBQUMsS0FBSztBQUFBLFNBQUVBLEtBQUssQ0FBQ0MsS0FBTixHQUFhLE9BQWIsR0FBdUIsS0FBekI7QUFBQSxDQUZNLENBQWpCO0tBQU1ILFc7O0FBTWIsU0FBU0ksS0FBVCxPQUFxQztBQUFBOztBQUFBLE1BQXJCQyxTQUFxQixRQUFyQkEsU0FBcUI7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQUNELE9BQUQsYUFBQ0EsT0FBRCxjQUFDQSxPQUFELEdBQVksRUFBWixDQURIO0FBQUEsTUFDNUJFLE9BRDRCO0FBQUEsTUFDbkJDLFVBRG1COztBQUVuQyxNQUFNQyxLQUFLLEdBQUdDLDZDQUFNLEVBQXBCLENBRm1DLENBR25DOztBQUNBQyxrREFBUyxDQUFDLFlBQUk7QUFDVixRQUFHSixPQUFPLEdBQUcsQ0FBYixFQUFlO0FBQ1hFLFdBQUssQ0FBQ0csT0FBTixHQUFlQyxVQUFVLENBQUMsWUFBSTtBQUM1Qkwsa0JBQVUsQ0FBQ0QsT0FBTyxHQUFFLENBQVYsQ0FBVjtBQUNELE9BRndCLEVBRXZCLElBRnVCLENBQXpCO0FBR0FPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsV0FBVyxDQUFDRyxLQUFaLEdBQWtCLElBQTlCOztBQUNKLFVBQUdLLE9BQU8sR0FBQyxFQUFYLEVBQWM7QUFDVlIsbUJBQVcsQ0FBQ0csS0FBWixHQUFtQixLQUFuQjtBQUNBWSxlQUFPLENBQUNDLEdBQVIsQ0FBWWhCLFdBQVcsQ0FBQ0csS0FBWixHQUFrQixJQUE5QjtBQUNIO0FBQ0EsS0FURCxNQVNLO0FBQ0QsVUFBR0UsU0FBSCxFQUFhO0FBQ1RBLGlCQUFTO0FBQ1o7QUFDSjtBQUVKLEdBaEJRLEVBZ0JQLENBQUNHLE9BQUQsRUFBVUgsU0FBVixDQWhCTyxDQUFUO0FBb0JBTyxrREFBUyxDQUFDLFlBQUk7QUFDWixXQUFPLFlBQUs7QUFDUCxVQUFHRixLQUFLLENBQUNHLE9BQVQsRUFBaUI7QUFDYkksb0JBQVksQ0FBQ1AsS0FBSyxDQUFDRyxPQUFQLENBQVo7QUFDSDtBQUNKLEtBSkY7QUFLRixHQU5TLEVBTVIsRUFOUSxDQUFUO0FBVUUsc0JBQ0EsOERBQUMsV0FBRDtBQUFBLDZDQUNXTCxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBS0g7O0dBdkNRSixLOztNQUFBQSxLO0FBeUNULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuNTRhMzFiZjZkMDczYzhiYzEwYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVyTGF5b3V0ID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICR7cHJvcHM9PnByb3BzLmNvbG9yPyAnYmxhY2snIDogJ3JlZCd9O1xyXG4gICAgZm9udC1zaXplOiAyMDtcclxuYFxyXG5cclxuZnVuY3Rpb24gVGltZXIoe29uVGltZW91dCwgc2Vjb25kc30pIHtcclxuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZShzZWNvbmRzID8/IDMwKVxyXG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmKClcclxuICAvL2xldCB0aW1lclxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBpZihjb3VudGVyID4gMCl7XHJcbiAgICAgICAgICB0aW1lci5jdXJyZW50ID1zZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHNldENvdW50ZXIoY291bnRlciAtMSlcclxuICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFRpbWVyTGF5b3V0LmNvbG9yK1wi7LSI6riwXCIpXHJcbiAgICAgIGlmKGNvdW50ZXI8MjUpe1xyXG4gICAgICAgICAgVGltZXJMYXlvdXQuY29sb3IgPVwicmVkXCI7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhUaW1lckxheW91dC5jb2xvcitcIuuzgOqyvVwiKVxyXG4gICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgaWYob25UaW1lb3V0KXtcclxuICAgICAgICAgICAgICBvblRpbWVvdXQoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gIH0sW2NvdW50ZXIsIG9uVGltZW91dF0pXHJcblxyXG4gICAgICBcclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHJldHVybiAoKSA9PntcclxuICAgICAgICAgaWYodGltZXIuY3VycmVudCl7XHJcbiAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIuY3VycmVudClcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuIH0sW10pXHJcblxyXG4gXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxUaW1lckxheW91dD5cclxuICAgICAgICDrgqjsnYDsi5zqsIQ6IHtjb3VudGVyfVxyXG4gICAgPC9UaW1lckxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiXSwic291cmNlUm9vdCI6IiJ9