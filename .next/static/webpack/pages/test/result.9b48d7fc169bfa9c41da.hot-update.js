self["webpackHotUpdate_N_E"]("pages/test/result",{

/***/ "./src/pages/test/result.jsx":
/*!***********************************!*\
  !*** ./src/pages/test/result.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_app */ "./src/pages/_app.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/commons */ "./src/utils/commons.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_SpecialEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/SpecialEffect */ "./src/styles/SpecialEffect.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\parkgundo\\Documents\\GitHub\\PsychoTestForFun\\src\\pages\\test\\result.jsx",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    font-weight:\xA0bold;\n    font-size: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    margin:\xA01rem;\n    text-align:\xA0center;\n    font-size: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var LocationText = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.h3(_templateObject());
_c = LocationText;
var RsesultTag = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(LocationText)(_templateObject2());
_c2 = RsesultTag;

function TestResult() {
  _s();

  var _useSwr = (0,swr__WEBPACK_IMPORTED_MODULE_4__.default)("/api/test/", _utils_commons__WEBPACK_IMPORTED_MODULE_5__.fetcher),
      test = _useSwr.data,
      error = _useSwr.error; //const { data: test, error } = useSwr(`/api/result/`, fetcher)


  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      values = _useContext.values; //const resultIndex = test.results.findIndex((result)=>result.condition(values))
  //const result = test.results[resultIndex] ?? test.results[0]


  var results = test.results;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      result = _useState[0],
      setResult = _useState[1]; // let 재할당


  if (values > 50) {
    result.current = results[0];
  } else if (values >= 30) {
    result.current = results[1];
  } else {
    result.current = results[2];
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
      src: result.imageUrl,
      height: "200",
      width: "200",
      alt: "result-image",
      objectFit: "cover"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RsesultTag, {
      children: [result.name, " \uC810\uC218: ", values]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocationText, {
      children: result.contents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(TestResult, "bnQ2fDw352LTbqOcW0xV81HfA/g=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c3 = TestResult;
/* harmony default export */ __webpack_exports__["default"] = (TestResult);

var _c, _c2, _c3;

$RefreshReg$(_c, "LocationText");
$RefreshReg$(_c2, "RsesultTag");
$RefreshReg$(_c3, "TestResult");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvcmVzdWx0LmpzeCJdLCJuYW1lcyI6WyJMb2NhdGlvblRleHQiLCJzdHlsZWQiLCJSc2VzdWx0VGFnIiwiVGVzdFJlc3VsdCIsInVzZVN3ciIsImZldGNoZXIiLCJ0ZXN0IiwiZGF0YSIsImVycm9yIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJ2YWx1ZXMiLCJyZXN1bHRzIiwidXNlU3RhdGUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjdXJyZW50IiwiaW1hZ2VVcmwiLCJuYW1lIiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFILG1CQUFsQjtLQUFNRCxZO0FBTU4sSUFBTUUsVUFBVSxHQUFHRCwwREFBTSxDQUFDRCxZQUFELENBQVQsb0JBQWhCO01BQU1FLFU7O0FBTU4sU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGdCQUNTQyw0Q0FBTSxlQUFlQyxtREFBZixDQURmO0FBQUEsTUFDUEMsSUFETyxXQUNiQyxJQURhO0FBQUEsTUFDREMsS0FEQyxXQUNEQSxLQURDLEVBRXRCOzs7QUFGc0Isb0JBSURDLGlEQUFVLENBQUNDLCtDQUFELENBSlQ7QUFBQSxNQUliQyxNQUphLGVBSWJBLE1BSmEsRUFLdEI7QUFDQTs7O0FBRUMsTUFBTUMsT0FBTyxHQUFHTixJQUFJLENBQUNNLE9BQXJCOztBQVJxQixrQkFTTUMsK0NBQVEsRUFUZDtBQUFBLE1BU2RDLE1BVGM7QUFBQSxNQVNQQyxTQVRPLGlCQVNnQjs7O0FBRXJDLE1BQUdKLE1BQU0sR0FBQyxFQUFWLEVBQWE7QUFDVkcsVUFBTSxDQUFDRSxPQUFQLEdBQWlCSixPQUFPLENBQUMsQ0FBRCxDQUF4QjtBQUNGLEdBRkQsTUFFTSxJQUFJRCxNQUFNLElBQUUsRUFBWixFQUFlO0FBQ2xCRyxVQUFNLENBQUNFLE9BQVAsR0FBaUJKLE9BQU8sQ0FBQyxDQUFELENBQXhCO0FBQ0YsR0FGSyxNQUVEO0FBQ0ZFLFVBQU0sQ0FBQ0UsT0FBUCxHQUFpQkosT0FBTyxDQUFDLENBQUQsQ0FBeEI7QUFDRjs7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFHRSxNQUFNLENBQUNHLFFBQXBCO0FBQThCLFlBQU0sRUFBRSxLQUF0QztBQUE0QyxXQUFLLEVBQUMsS0FBbEQ7QUFBd0QsU0FBRyxFQUFDLGNBQTVEO0FBQTJFLGVBQVMsRUFBQztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxVQUFEO0FBQUEsaUJBQWFILE1BQU0sQ0FBQ0ksSUFBcEIscUJBQStCUCxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLFlBQUQ7QUFBQSxnQkFBZUcsTUFBTSxDQUFDSztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFERjtBQU9EOztHQTFCUWhCLFU7VUFDc0JDLHdDOzs7TUFEdEJELFU7QUE0QlQsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9yZXN1bHQuOWI0OGQ3ZmMxNjliZmE5YzQxZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9fYXBwJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXG5pbXBvcnQge2ZldGNoZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbnMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7Zm9jdXNJbkV4cGFuZEZ3ZH0gZnJvbSAnLi4vLi4vc3R5bGVzL1NwZWNpYWxFZmZlY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdMKgTG9jYXRpb25UZXh0wqA9wqBzdHlsZWQuaDNgXG4gICAgbWFyZ2luOsKgMXJlbTtcbiAgICB0ZXh0LWFsaWduOsKgY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbmBcblxuY29uc3TCoFJzZXN1bHRUYWfCoD3CoHN0eWxlZChMb2NhdGlvblRleHQpYFxuICAgIGZvbnQtd2VpZ2h0OsKgYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG5gXG5cblxuZnVuY3Rpb24gVGVzdFJlc3VsdCgpIHtcbiBjb25zdMKge8KgZGF0YTrCoHRlc3QsIGVycm9ywqB9wqA9wqB1c2VTd3IoYC9hcGkvdGVzdC9gLMKgZmV0Y2hlcilcbi8vY29uc3TCoHvCoGRhdGE6wqB0ZXN0LCBlcnJvcsKgfcKgPcKgdXNlU3dyKGAvYXBpL3Jlc3VsdC9gLMKgZmV0Y2hlcilcblxuIGNvbnN0IHvCoHZhbHVlcyB9wqAgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4vL2NvbnN0IHJlc3VsdEluZGV4ID0gdGVzdC5yZXN1bHRzLmZpbmRJbmRleCgocmVzdWx0KT0+cmVzdWx0LmNvbmRpdGlvbih2YWx1ZXMpKVxuLy9jb25zdCByZXN1bHQgPSB0ZXN0LnJlc3VsdHNbcmVzdWx0SW5kZXhdID8/IHRlc3QucmVzdWx0c1swXVxuIFxuIGNvbnN0IHJlc3VsdHMgPSB0ZXN0LnJlc3VsdHNcbiBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpLy8gbGV0IOyerO2VoOuLuVxuXG4gaWYodmFsdWVzPjUwKXtcbiAgICByZXN1bHQuY3VycmVudCA9IHJlc3VsdHNbMF1cbiB9ZWxzZSBpZiAodmFsdWVzPj0zMCl7XG4gICAgcmVzdWx0LmN1cnJlbnQgPSByZXN1bHRzWzFdXG4gfWVsc2V7XG4gICAgcmVzdWx0LmN1cnJlbnQgPSByZXN1bHRzWzJdXG4gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZSBzcmMgPXtyZXN1bHQuaW1hZ2VVcmx9IGhlaWdodCA9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIGFsdD1cInJlc3VsdC1pbWFnZVwiIG9iamVjdEZpdD1cImNvdmVyXCIvPiBcbiAgICAgIDxSc2VzdWx0VGFnPntyZXN1bHQubmFtZX0g7KCQ7IiYOiB7dmFsdWVzfTwvUnNlc3VsdFRhZz5cbiAgICAgIDxMb2NhdGlvblRleHQ+e3Jlc3VsdC5jb250ZW50c308L0xvY2F0aW9uVGV4dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFJlc3VsdDsiXSwic291cmNlUm9vdCI6IiJ9