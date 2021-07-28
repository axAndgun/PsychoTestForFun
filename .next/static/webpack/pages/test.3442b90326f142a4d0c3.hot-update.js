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
  var questions = test["return"]( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Styles__WEBPACK_IMPORTED_MODULE_5__.Padding, {
      children: questions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this)
  }, void 0, false));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYW5zd2VycyIsInNldEFuc3dlcnMiLCJUZXN0UGFnZSIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInF1ZXN0aW9uTnVtYmVyIiwic2V0UXVlc3Rpb25OdW1iZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTd3IiLCJmZXRjaGVyIiwidGVzdCIsImRhdGEiLCJlcnJvciIsImlzVGVzdExvYWRpbmciLCJ1c2VFZmZlY3QiLCJxdWVzdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0Msb0RBQWEsQ0FBQztBQUN2Q0MsU0FBTyxFQUFFLElBRDhCO0FBRXZDQyxZQUFVLEVBQUU7QUFBQSxXQUFNLElBQU47QUFBQTtBQUYyQixDQUFELENBQW5DOztBQU1QLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxvQkFFWUMsaURBQVUsQ0FBQ0wsYUFBRCxDQUZ0QjtBQUFBLE1BRVpFLE9BRlksZUFFWkEsT0FGWTtBQUFBLE1BRUhDLFVBRkcsZUFFSEEsVUFGRyxFQUdwQjs7O0FBSG9CLGtCQUl3QkcsK0NBQVEsQ0FBQyxDQUFELENBSmhDO0FBQUEsTUFJYkMsY0FKYTtBQUFBLE1BSUdDLGlCQUpIOztBQUtwQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUxvQixnQkFRVUMsNENBQU0sZUFBZUMsb0RBQWYsQ0FSaEI7QUFBQSxNQVFOQyxJQVJNLFdBUVpDLElBUlk7QUFBQSxNQVFBQyxLQVJBLFdBUUFBLEtBUkE7O0FBU3BCLE1BQU1DLGFBQWEsR0FBRyxDQUFDSCxJQUFELElBQVMsQ0FBRUUsS0FBakM7QUFFQUUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2hCZCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0MsR0FGUSxFQUVOLENBQUNBLFVBQUQsQ0FGTSxDQUFUO0FBS0EsTUFBTWUsU0FBUyxHQUFHTCxJQUFJLFVBQUosZUFJVjtBQUFBLDJCQUNBLDhEQUFDLDZEQUFEO0FBQUEsZ0JBQ0tLO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQUpVLENBQWxCO0FBV0M7O0dBM0JRZCxRO1VBS01NLGtELEVBR2VDLHdDOzs7S0FSckJQLFE7QUE2QlQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4zNDQyYjkwMzI2ZjE0MmE0ZDBjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0wqB7wqB1c2VSb3V0ZXLCoH3CoGZyb23CoCduZXh0L3JvdXRlcidcclxuaW1wb3J0wqB7wqB1c2VDb250ZXh0LMKgdXNlRWZmZWN0LMKgdXNlU3RhdGXCoH3CoGZyb23CoCdyZWFjdCdcclxuaW1wb3J0wqB7wqBQcmltYXJ5QnV0dG9uwqB9wqBmcm9twqAnLi4vLi4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24nXHJcbmltcG9ydMKgQ2xpZW50U2lkZUxpbmvCoGZyb23CoCcuLi8uLi9jb21wb25lbnRzL2F0b21zL0NsaWVudFNpZGVMaW5rJ1xyXG5pbXBvcnTCoHvCoFBhZGRpbmfCoH3CoGZyb23CoCcuLi8uLi9jb21wb25lbnRzL2F0b21zL1N0eWxlcydcclxuaW1wb3J0wqBCaW5hcnlRdWVzdGlvbkFuc3dlcsKgZnJvbcKgJy4uLy4uL2NvbXBvbmVudHMvQmluYXJ5UXVlc3Rpb25BbnN3ZXInXHJcbmltcG9ydMKgdXNlR29Ub1BhZ2XCoGZyb23CoCcuLi8uLi9ob29rcy91c2VHb1RvUGFnZSdcclxuaW1wb3J0wqBzdHlsZWTCoGZyb23CoCdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0wqB7wqBDZW50ZXJQYWRkaW5nSDEswqBncmFkaWVudEJsdWVHcmVlbsKgfcKgZnJvbcKgJy4vcmVzdWx0J1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgRmxleExheW91dENvbHVtbiBmcm9tIFwiLi4vLi4vc3R5bGVzL0ZsZXhMYXlvdXRcIlxyXG5pbXBvcnQge2ZldGNoZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbnMnXHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gICAgYW5zd2VyczogbnVsbCxcclxuICAgIHNldEFuc3dlcnM6ICgpID0+IG51bGwsXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb27CoFRlc3RQYWdlKCnCoHtcclxuXHJcbmNvbnN0wqB7wqBhbnN3ZXJzLMKgc2V0QW5zd2Vyc8KgfcKgPcKgdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxyXG4vL2NvbnN0wqBnb1RvSG9tZVBhZ2XCoD3CoHVzZUdvVG9QYWdlKCcvJylcclxuY29uc3TCoFtxdWVzdGlvbk51bWJlcizCoHNldFF1ZXN0aW9uTnVtYmVyXcKgPcKgdXNlU3RhdGUoMClcclxuY29uc3TCoHJvdXRlcsKgPcKgdXNlUm91dGVyKClcclxuXHJcblxyXG5jb25zdMKge8KgZGF0YTrCoHRlc3QsIGVycm9ywqB9wqA9wqB1c2VTd3IoYC9hcGkvdGVzdC9gLMKgZmV0Y2hlcilcclxuY29uc3QgaXNUZXN0TG9hZGluZyA9ICF0ZXN0ICYmICEgZXJyb3IgXHJcblxyXG51c2VFZmZlY3QoKCnCoD0+wqB7XHJcbnNldEFuc3dlcnMobnVsbClcclxufSzCoFtzZXRBbnN3ZXJzXSlcclxuXHJcblxyXG5jb25zdMKgcXVlc3Rpb25zwqA9wqB0ZXN0LlxyXG5cclxuXHJcbiAgICByZXR1cm7CoChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxQYWRkaW5nPlxyXG4gICAgICAgICAgICB7cXVlc3Rpb25zfVxyXG4gICAgICAgIDwvUGFkZGluZz5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydMKgZGVmYXVsdMKgVGVzdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9