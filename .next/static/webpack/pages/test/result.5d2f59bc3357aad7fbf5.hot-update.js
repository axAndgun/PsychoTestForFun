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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(results[0]),
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

_s(TestResult, "S7/vL9tyPQoWz2C+EgjxiB8APp0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvcmVzdWx0LmpzeCJdLCJuYW1lcyI6WyJMb2NhdGlvblRleHQiLCJzdHlsZWQiLCJSc2VzdWx0VGFnIiwiVGVzdFJlc3VsdCIsInVzZVN3ciIsImZldGNoZXIiLCJ0ZXN0IiwiZGF0YSIsImVycm9yIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJ2YWx1ZXMiLCJyZXN1bHRzIiwidXNlU3RhdGUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjdXJyZW50IiwiaW1hZ2VVcmwiLCJuYW1lIiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFILG1CQUFsQjtLQUFNRCxZO0FBTU4sSUFBTUUsVUFBVSxHQUFHRCwwREFBTSxDQUFDRCxZQUFELENBQVQsb0JBQWhCO01BQU1FLFU7O0FBTU4sU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGdCQUNTQyw0Q0FBTSxlQUFlQyxtREFBZixDQURmO0FBQUEsTUFDUEMsSUFETyxXQUNiQyxJQURhO0FBQUEsTUFDREMsS0FEQyxXQUNEQSxLQURDLEVBRXRCOzs7QUFGc0Isb0JBSURDLGlEQUFVLENBQUNDLCtDQUFELENBSlQ7QUFBQSxNQUliQyxNQUphLGVBSWJBLE1BSmEsRUFLdEI7QUFDQTs7O0FBRUMsTUFBTUMsT0FBTyxHQUFHTixJQUFJLENBQUNNLE9BQXJCOztBQVJxQixrQkFTTUMsK0NBQVEsQ0FBQ0QsT0FBTyxDQUFDLENBQUQsQ0FBUixDQVRkO0FBQUEsTUFTZEUsTUFUYztBQUFBLE1BU1BDLFNBVE8saUJBUzBCOzs7QUFFL0MsTUFBR0osTUFBTSxHQUFDLEVBQVYsRUFBYTtBQUNWRyxVQUFNLENBQUNFLE9BQVAsR0FBaUJKLE9BQU8sQ0FBQyxDQUFELENBQXhCO0FBQ0YsR0FGRCxNQUVNLElBQUlELE1BQU0sSUFBRSxFQUFaLEVBQWU7QUFDbEJHLFVBQU0sQ0FBQ0UsT0FBUCxHQUFpQkosT0FBTyxDQUFDLENBQUQsQ0FBeEI7QUFDRixHQUZLLE1BRUQ7QUFDRkUsVUFBTSxDQUFDRSxPQUFQLEdBQWlCSixPQUFPLENBQUMsQ0FBRCxDQUF4QjtBQUNGOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUdFLE1BQU0sQ0FBQ0csUUFBcEI7QUFBOEIsWUFBTSxFQUFFLEtBQXRDO0FBQTRDLFdBQUssRUFBQyxLQUFsRDtBQUF3RCxTQUFHLEVBQUMsY0FBNUQ7QUFBMkUsZUFBUyxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLFVBQUQ7QUFBQSxpQkFBYUgsTUFBTSxDQUFDSSxJQUFwQixxQkFBK0JQLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsWUFBRDtBQUFBLGdCQUFlRyxNQUFNLENBQUNLO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBT0Q7O0dBMUJRaEIsVTtVQUNzQkMsd0M7OztNQUR0QkQsVTtBQTRCVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0L3Jlc3VsdC41ZDJmNTliYzMzNTdhYWQ3ZmJmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL19hcHAnXG5pbXBvcnQgeyB1c2VDb250ZXh0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcbmltcG9ydCB7ZmV0Y2hlcn0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9ucydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHtmb2N1c0luRXhwYW5kRndkfSBmcm9tICcuLi8uLi9zdHlsZXMvU3BlY2lhbEVmZmVjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0wqBMb2NhdGlvblRleHTCoD3CoHN0eWxlZC5oM2BcbiAgICBtYXJnaW46wqAxcmVtO1xuICAgIHRleHQtYWxpZ246wqBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuYFxuXG5jb25zdMKgUnNlc3VsdFRhZ8KgPcKgc3R5bGVkKExvY2F0aW9uVGV4dClgXG4gICAgZm9udC13ZWlnaHQ6wqBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbmBcblxuXG5mdW5jdGlvbiBUZXN0UmVzdWx0KCkge1xuIGNvbnN0wqB7wqBkYXRhOsKgdGVzdCwgZXJyb3LCoH3CoD3CoHVzZVN3cihgL2FwaS90ZXN0L2AswqBmZXRjaGVyKVxuLy9jb25zdMKge8KgZGF0YTrCoHRlc3QsIGVycm9ywqB9wqA9wqB1c2VTd3IoYC9hcGkvcmVzdWx0L2AswqBmZXRjaGVyKVxuXG4gY29uc3Qge8KgdmFsdWVzIH3CoCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dClcbi8vY29uc3QgcmVzdWx0SW5kZXggPSB0ZXN0LnJlc3VsdHMuZmluZEluZGV4KChyZXN1bHQpPT5yZXN1bHQuY29uZGl0aW9uKHZhbHVlcykpXG4vL2NvbnN0IHJlc3VsdCA9IHRlc3QucmVzdWx0c1tyZXN1bHRJbmRleF0gPz8gdGVzdC5yZXN1bHRzWzBdXG4gXG4gY29uc3QgcmVzdWx0cyA9IHRlc3QucmVzdWx0c1xuIGNvbnN0IFtyZXN1bHQsc2V0UmVzdWx0XSA9IHVzZVN0YXRlKHJlc3VsdHNbMF0pLy8gbGV0IOyerO2VoOuLuVxuXG4gaWYodmFsdWVzPjUwKXtcbiAgICByZXN1bHQuY3VycmVudCA9IHJlc3VsdHNbMF1cbiB9ZWxzZSBpZiAodmFsdWVzPj0zMCl7XG4gICAgcmVzdWx0LmN1cnJlbnQgPSByZXN1bHRzWzFdXG4gfWVsc2V7XG4gICAgcmVzdWx0LmN1cnJlbnQgPSByZXN1bHRzWzJdXG4gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZSBzcmMgPXtyZXN1bHQuaW1hZ2VVcmx9IGhlaWdodCA9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIGFsdD1cInJlc3VsdC1pbWFnZVwiIG9iamVjdEZpdD1cImNvdmVyXCIvPiBcbiAgICAgIDxSc2VzdWx0VGFnPntyZXN1bHQubmFtZX0g7KCQ7IiYOiB7dmFsdWVzfTwvUnNlc3VsdFRhZz5cbiAgICAgIDxMb2NhdGlvblRleHQ+e3Jlc3VsdC5jb250ZW50c308L0xvY2F0aW9uVGV4dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFJlc3VsdDsiXSwic291cmNlUm9vdCI6IiJ9