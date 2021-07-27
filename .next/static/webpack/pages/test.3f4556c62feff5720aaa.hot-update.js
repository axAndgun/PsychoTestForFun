self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./src/pages/test/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/test/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atoms/Button */ "./src/components/atoms/Button.jsx");
/* harmony import */ var _components_atoms_ClientSideLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atoms/ClientSideLink */ "./src/components/atoms/ClientSideLink.jsx");
/* harmony import */ var _components_atoms_Styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/atoms/Styles */ "./src/components/atoms/Styles.jsx");
/* harmony import */ var _components_BinaryQuestionAnswer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/BinaryQuestionAnswer */ "./src/components/BinaryQuestionAnswer.jsx");
/* harmony import */ var _hooks_useGoToPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useGoToPage */ "./src/hooks/useGoToPage.js");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./result */ "./src/pages/test/result.jsx");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_result__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _styles_FlexLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/FlexLayout */ "./src/styles/FlexLayout.js");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/commons */ "./src/utils/commons.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\parkgundo\\Documents\\GitHub\\PsychoTestForFun\\src\\pages\\test\\index.jsx",
    _s = $RefreshSig$();














var GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
  answers: null,
  setAnswers: function setAnswers() {
    return null;
  }
});

function TestPage() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(GlobalContext),
      answers = _useContext.answers,
      setAnswers = _useContext.setAnswers; //const goToHomePage = useGoToPage('/')


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      questionNumber = _useState[0],
      setQuestionNumber = _useState[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useSwr = (0,swr__WEBPACK_IMPORTED_MODULE_9__.default)("/api/test/", _utils_commons__WEBPACK_IMPORTED_MODULE_11__.fetcher),
      test = _useSwr.data,
      error = _useSwr.error;

  var isTestLoading = !test && !error;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setAnswers(null);
  }, [setAnswers]);

  if (isTestLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "Loading..."
    }, void 0, false);
  }

  if (!test) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "test\uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294\uB2E4."
    }, void 0, false);
  }

  var questions = test;
  var question = questions[questionNumber];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["fad", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: $question
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(TestPage, "RrlQvuZs42Bw6eADVbQUSiEnySA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_9__.default];
});

_c = TestPage;
/* harmony default export */ __webpack_exports__["default"] = (TestPage);

var _c;

$RefreshReg$(_c, "TestPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJUZXN0UGFnZSIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9uTnVtYmVyIiwic2V0UXVlc3Rpb25OdW1iZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTd3IiLCJmZXRjaGVyIiwidGVzdCIsImRhdGEiLCJlcnJvciIsImlzVGVzdExvYWRpbmciLCJ1c2VFZmZlY3QiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIiRxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQyxvREFBYSxDQUFDO0FBQ3ZDQyxTQUFPLEVBQUUsSUFEOEI7QUFFdkNDLFlBQVUsRUFBRTtBQUFBLFdBQU0sSUFBTjtBQUFBO0FBRjJCLENBQUQsQ0FBbkM7O0FBTVAsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUVZQyxpREFBVSxDQUFDTCxhQUFELENBRnRCO0FBQUEsTUFFWkUsT0FGWSxlQUVaQSxPQUZZO0FBQUEsTUFFSEMsVUFGRyxlQUVIQSxVQUZHLEVBR3BCOzs7QUFIb0Isa0JBSXdCRywrQ0FBUSxDQUFDLENBQUQsQ0FKaEM7QUFBQSxNQUliQyxjQUphO0FBQUEsTUFJR0MsaUJBSkg7O0FBS3BCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBTG9CLGdCQVFVQyw0Q0FBTSxlQUFlQyxvREFBZixDQVJoQjtBQUFBLE1BUU5DLElBUk0sV0FRWkMsSUFSWTtBQUFBLE1BUUFDLEtBUkEsV0FRQUEsS0FSQTs7QUFTcEIsTUFBTUMsYUFBYSxHQUFHLENBQUNILElBQUQsSUFBUyxDQUFFRSxLQUFqQztBQUVBRSxrREFBUyxDQUFDLFlBQU07QUFDaEJkLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQyxHQUZRLEVBRU4sQ0FBQ0EsVUFBRCxDQUZNLENBQVQ7O0FBSUEsTUFBSWEsYUFBSixFQUFrQjtBQUNkLHdCQUNJO0FBQUE7QUFBQSxxQkFESjtBQUtIOztBQUVELE1BQUcsQ0FBQ0gsSUFBSixFQUFTO0FBQ0wsd0JBQ0k7QUFBQTtBQUFBLHFCQURKO0FBS0g7O0FBRUQsTUFBTUssU0FBUyxHQUFHTCxJQUFsQjtBQUNBLE1BQU1NLFFBQVEsR0FBR0QsU0FBUyxDQUFDWCxjQUFELENBQTFCO0FBSUksc0JBQ0k7QUFBQSxtQ0FFSTtBQUFBLGdCQUFNYTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBUUg7O0dBNUNRaEIsUTtVQUtNTSxrRCxFQUdlQyx3Qzs7O0tBUnJCUCxRO0FBOENULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QuM2Y0NTU2YzYyZmVmZjU3MjBhYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydMKge8KgdXNlUm91dGVywqB9wqBmcm9twqAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydMKge8KgdXNlQ29udGV4dCzCoHVzZUVmZmVjdCzCoHVzZVN0YXRlwqB9wqBmcm9twqAncmVhY3QnXHJcbmltcG9ydMKge8KgUHJpbWFyeUJ1dHRvbsKgfcKgZnJvbcKgJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uJ1xyXG5pbXBvcnTCoENsaWVudFNpZGVMaW5rwqBmcm9twqAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9DbGllbnRTaWRlTGluaydcclxuaW1wb3J0wqB7wqBQYWRkaW5nwqB9wqBmcm9twqAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9TdHlsZXMnXHJcbmltcG9ydMKgQmluYXJ5UXVlc3Rpb25BbnN3ZXLCoGZyb23CoCcuLi8uLi9jb21wb25lbnRzL0JpbmFyeVF1ZXN0aW9uQW5zd2VyJ1xyXG5pbXBvcnTCoHVzZUdvVG9QYWdlwqBmcm9twqAnLi4vLi4vaG9va3MvdXNlR29Ub1BhZ2UnXHJcbmltcG9ydMKgc3R5bGVkwqBmcm9twqAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydMKge8KgQ2VudGVyUGFkZGluZ0gxLMKgZ3JhZGllbnRCbHVlR3JlZW7CoH3CoGZyb23CoCcuL3Jlc3VsdCdcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcclxuaW1wb3J0IEZsZXhMYXlvdXRDb2x1bW4gZnJvbSBcIi4uLy4uL3N0eWxlcy9GbGV4TGF5b3V0XCJcclxuaW1wb3J0IHtmZXRjaGVyfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIGFuc3dlcnM6IG51bGwsXHJcbiAgICBzZXRBbnN3ZXJzOiAoKSA9PiBudWxsLFxyXG59KVxyXG5cclxuXHJcbmZ1bmN0aW9uwqBUZXN0UGFnZSgpwqB7XHJcblxyXG5jb25zdMKge8KgYW5zd2VycyzCoHNldEFuc3dlcnPCoH3CoD3CoHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcclxuLy9jb25zdMKgZ29Ub0hvbWVQYWdlwqA9wqB1c2VHb1RvUGFnZSgnLycpXHJcbmNvbnN0wqBbcXVlc3Rpb25OdW1iZXIswqBzZXRRdWVzdGlvbk51bWJlcl3CoD3CoHVzZVN0YXRlKDApXHJcbmNvbnN0wqByb3V0ZXLCoD3CoHVzZVJvdXRlcigpXHJcblxyXG5cclxuY29uc3TCoHvCoGRhdGE6wqB0ZXN0LCBlcnJvcsKgfcKgPcKgdXNlU3dyKGAvYXBpL3Rlc3QvYCzCoGZldGNoZXIpXHJcbmNvbnN0IGlzVGVzdExvYWRpbmcgPSAhdGVzdCAmJiAhIGVycm9yIFxyXG5cclxudXNlRWZmZWN0KCgpwqA9PsKge1xyXG5zZXRBbnN3ZXJzKG51bGwpXHJcbn0swqBbc2V0QW5zd2Vyc10pXHJcblxyXG5pZiAoaXNUZXN0TG9hZGluZyl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgTG9hZGluZy4uLlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5pZighdGVzdCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB0ZXN064qUIOyhtOyerO2VmOyngCDslYrripTri6QuIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdMKgcXVlc3Rpb25zwqA9wqB0ZXN0O1xyXG5jb25zdCBxdWVzdGlvbiA9IHF1ZXN0aW9uc1txdWVzdGlvbk51bWJlcl1cclxuXHJcblxyXG5cclxuICAgIHJldHVybsKgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgZmFkXHJcbiAgICAgICAgICAgIDxkaXY+eyRxdWVzdGlvbn08L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBUZXN0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=