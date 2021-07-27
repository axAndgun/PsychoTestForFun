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



var _s = $RefreshSig$();














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

  var questions = test.question; //const question = questions[questionNumber]

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["fad", questions]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJUZXN0UGFnZSIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9uTnVtYmVyIiwic2V0UXVlc3Rpb25OdW1iZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTd3IiLCJmZXRjaGVyIiwidGVzdCIsImRhdGEiLCJlcnJvciIsImlzVGVzdExvYWRpbmciLCJ1c2VFZmZlY3QiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGFBQWEsZ0JBQUdDLG9EQUFhLENBQUM7QUFDdkNDLFNBQU8sRUFBRSxJQUQ4QjtBQUV2Q0MsWUFBVSxFQUFFO0FBQUEsV0FBTSxJQUFOO0FBQUE7QUFGMkIsQ0FBRCxDQUFuQzs7QUFNUCxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsb0JBRVlDLGlEQUFVLENBQUNMLGFBQUQsQ0FGdEI7QUFBQSxNQUVaRSxPQUZZLGVBRVpBLE9BRlk7QUFBQSxNQUVIQyxVQUZHLGVBRUhBLFVBRkcsRUFHcEI7OztBQUhvQixrQkFJd0JHLCtDQUFRLENBQUMsQ0FBRCxDQUpoQztBQUFBLE1BSWJDLGNBSmE7QUFBQSxNQUlHQyxpQkFKSDs7QUFLcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFMb0IsZ0JBUVVDLDRDQUFNLGVBQWVDLG9EQUFmLENBUmhCO0FBQUEsTUFRTkMsSUFSTSxXQVFaQyxJQVJZO0FBQUEsTUFRQUMsS0FSQSxXQVFBQSxLQVJBOztBQVNwQixNQUFNQyxhQUFhLEdBQUcsQ0FBQ0gsSUFBRCxJQUFTLENBQUVFLEtBQWpDO0FBRUFFLGtEQUFTLENBQUMsWUFBTTtBQUNoQmQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNDLEdBRlEsRUFFTixDQUFDQSxVQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFJYSxhQUFKLEVBQWtCO0FBQ2Qsd0JBQ0k7QUFBQTtBQUFBLHFCQURKO0FBS0g7O0FBRUQsTUFBRyxDQUFDSCxJQUFKLEVBQVM7QUFDTCx3QkFDSTtBQUFBO0FBQUEscUJBREo7QUFLSDs7QUFFRCxNQUFNSyxTQUFTLEdBQUdMLElBQUksQ0FBQ00sUUFBdkIsQ0EvQm9CLENBZ0NwQjs7QUFJSSxzQkFDSTtBQUFBLHNCQUVDRCxTQUZEO0FBQUEsa0JBREo7QUFRSDs7R0E1Q1FkLFE7VUFLTU0sa0QsRUFHZUMsd0M7OztLQVJyQlAsUTtBQThDVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0LjVlZWZmYzk1Y2ZkNDY2NzgyYTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnTCoHvCoHVzZVJvdXRlcsKgfcKgZnJvbcKgJ25leHQvcm91dGVyJ1xyXG5pbXBvcnTCoHvCoHVzZUNvbnRleHQswqB1c2VFZmZlY3QswqB1c2VTdGF0ZcKgfcKgZnJvbcKgJ3JlYWN0J1xyXG5pbXBvcnTCoHvCoFByaW1hcnlCdXR0b27CoH3CoGZyb23CoCcuLi8uLi9jb21wb25lbnRzL2F0b21zL0J1dHRvbidcclxuaW1wb3J0wqBDbGllbnRTaWRlTGlua8KgZnJvbcKgJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvQ2xpZW50U2lkZUxpbmsnXHJcbmltcG9ydMKge8KgUGFkZGluZ8KgfcKgZnJvbcKgJy4uLy4uL2NvbXBvbmVudHMvYXRvbXMvU3R5bGVzJ1xyXG5pbXBvcnTCoEJpbmFyeVF1ZXN0aW9uQW5zd2VywqBmcm9twqAnLi4vLi4vY29tcG9uZW50cy9CaW5hcnlRdWVzdGlvbkFuc3dlcidcclxuaW1wb3J0wqB1c2VHb1RvUGFnZcKgZnJvbcKgJy4uLy4uL2hvb2tzL3VzZUdvVG9QYWdlJ1xyXG5pbXBvcnTCoHN0eWxlZMKgZnJvbcKgJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnTCoHvCoENlbnRlclBhZGRpbmdIMSzCoGdyYWRpZW50Qmx1ZUdyZWVuwqB9wqBmcm9twqAnLi9yZXN1bHQnXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXHJcbmltcG9ydCBGbGV4TGF5b3V0Q29sdW1uIGZyb20gXCIuLi8uLi9zdHlsZXMvRmxleExheW91dFwiXHJcbmltcG9ydCB7ZmV0Y2hlcn0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9ucydcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBhbnN3ZXJzOiBudWxsLFxyXG4gICAgc2V0QW5zd2VyczogKCkgPT4gbnVsbCxcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbsKgVGVzdFBhZ2UoKcKge1xyXG5cclxuY29uc3TCoHvCoGFuc3dlcnMswqBzZXRBbnN3ZXJzwqB9wqA9wqB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXHJcbi8vY29uc3TCoGdvVG9Ib21lUGFnZcKgPcKgdXNlR29Ub1BhZ2UoJy8nKVxyXG5jb25zdMKgW3F1ZXN0aW9uTnVtYmVyLMKgc2V0UXVlc3Rpb25OdW1iZXJdwqA9wqB1c2VTdGF0ZSgwKVxyXG5jb25zdMKgcm91dGVywqA9wqB1c2VSb3V0ZXIoKVxyXG5cclxuXHJcbmNvbnN0wqB7wqBkYXRhOsKgdGVzdCwgZXJyb3LCoH3CoD3CoHVzZVN3cihgL2FwaS90ZXN0L2AswqBmZXRjaGVyKVxyXG5jb25zdCBpc1Rlc3RMb2FkaW5nID0gIXRlc3QgJiYgISBlcnJvciBcclxuXHJcbnVzZUVmZmVjdCgoKcKgPT7CoHtcclxuc2V0QW5zd2VycyhudWxsKVxyXG59LMKgW3NldEFuc3dlcnNdKVxyXG5cclxuaWYgKGlzVGVzdExvYWRpbmcpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuaWYoIXRlc3Qpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgdGVzdOuKlCDsobTsnqztlZjsp4Ag7JWK64qU64ukLiBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3TCoHF1ZXN0aW9uc8KgPcKgdGVzdC5xdWVzdGlvbjtcclxuLy9jb25zdCBxdWVzdGlvbiA9IHF1ZXN0aW9uc1txdWVzdGlvbk51bWJlcl1cclxuXHJcblxyXG5cclxuICAgIHJldHVybsKgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgZmFkXHJcbiAgICAgICAge3F1ZXN0aW9uc31cclxuICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBUZXN0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=