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
      error = _useSwr.error; //const??{??data:??test, error??}??=??useSwr(`/api/result/`,??fetcher)


  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      values = _useContext.values; //const resultIndex = test.results.findIndex((result)=>result.condition(values))
  //const result = test.results[resultIndex] ?? test.results[0]


  var results = test.results; //const [result,setResult] = useState(results[0]) //too much re-render error occurred.

  var result = results[0]; // let ?????????

  if (values >= 60) {
    //setResult(results[0])
    result = results[0];
  } else if (values >= 40 && values < 60) {
    //setResult(results[1])
    result = results[1];
  } else {
    // setResult(results[2]) 
    result = results[2];
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
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RsesultTag, {
      children: result.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocationText, {
      children: result.contents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClientSideLink, {
      href: "/",
      children: " \uCC98\uC74C\uC73C\uB85C "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(TestResult, "S4pMQb9ebRfPs3S2gH4DJwehGvs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvcmVzdWx0LmpzeCJdLCJuYW1lcyI6WyJMb2NhdGlvblRleHQiLCJzdHlsZWQiLCJSc2VzdWx0VGFnIiwiVGVzdFJlc3VsdCIsInVzZVN3ciIsImZldGNoZXIiLCJ0ZXN0IiwiZGF0YSIsImVycm9yIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJ2YWx1ZXMiLCJyZXN1bHRzIiwicmVzdWx0IiwiaW1hZ2VVcmwiLCJuYW1lIiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHlEQUFILG1CQUFsQjtLQUFNRCxZO0FBTU4sSUFBTUUsVUFBVSxHQUFHRCwwREFBTSxDQUFDRCxZQUFELENBQVQsb0JBQWhCO01BQU1FLFU7O0FBTU4sU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGdCQUNTQyw0Q0FBTSxlQUFlQyxtREFBZixDQURmO0FBQUEsTUFDUEMsSUFETyxXQUNiQyxJQURhO0FBQUEsTUFDREMsS0FEQyxXQUNEQSxLQURDLEVBRXRCOzs7QUFGc0Isb0JBSURDLGlEQUFVLENBQUNDLCtDQUFELENBSlQ7QUFBQSxNQUliQyxNQUphLGVBSWJBLE1BSmEsRUFLdEI7QUFDQTs7O0FBRUMsTUFBTUMsT0FBTyxHQUFHTixJQUFJLENBQUNNLE9BQXJCLENBUnFCLENBU3JCOztBQUNBLE1BQUlDLE1BQU0sR0FBRUQsT0FBTyxDQUFDLENBQUQsQ0FBbkIsQ0FWcUIsQ0FVQzs7QUFFdEIsTUFBR0QsTUFBTSxJQUFFLEVBQVgsRUFBYztBQUNaO0FBQ0FFLFVBQU0sR0FBRUQsT0FBTyxDQUFDLENBQUQsQ0FBZjtBQUNELEdBSEQsTUFHTSxJQUFHRCxNQUFNLElBQUUsRUFBUixJQUFZQSxNQUFNLEdBQUMsRUFBdEIsRUFBeUI7QUFDN0I7QUFDQUUsVUFBTSxHQUFFRCxPQUFPLENBQUMsQ0FBRCxDQUFmO0FBQ0QsR0FISyxNQUdEO0FBQ0o7QUFDQUMsVUFBTSxHQUFFRCxPQUFPLENBQUMsQ0FBRCxDQUFmO0FBQ0Q7O0FBRUMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBR0MsTUFBTSxDQUFDQyxRQUFwQjtBQUE4QixZQUFNLEVBQUUsS0FBdEM7QUFBNEMsV0FBSyxFQUFDLEtBQWxEO0FBQXdELFNBQUcsRUFBQyxjQUE1RDtBQUEyRSxlQUFTLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsVUFBRDtBQUFBLGdCQUFhRCxNQUFNLENBQUNFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLFlBQUQ7QUFBQSxnQkFBZUYsTUFBTSxDQUFDRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSw4REFBQyxjQUFEO0FBQWdCLFVBQUksRUFBQyxHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFRRDs7R0EvQlFiLFU7VUFDc0JDLHdDOzs7TUFEdEJELFU7QUFpQ1QsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9yZXN1bHQuZDRjYjY2ZGExN2Q2ODFhYzNlYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9fYXBwJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXG5pbXBvcnQge2ZldGNoZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbnMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7Zm9jdXNJbkV4cGFuZEZ3ZH0gZnJvbSAnLi4vLi4vc3R5bGVzL1NwZWNpYWxFZmZlY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdMKgTG9jYXRpb25UZXh0wqA9wqBzdHlsZWQuaDNgXG4gICAgbWFyZ2luOsKgMXJlbTtcbiAgICB0ZXh0LWFsaWduOsKgY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbmBcblxuY29uc3TCoFJzZXN1bHRUYWfCoD3CoHN0eWxlZChMb2NhdGlvblRleHQpYFxuICAgIGZvbnQtd2VpZ2h0OsKgYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG5gXG5cblxuZnVuY3Rpb24gVGVzdFJlc3VsdCgpIHtcbiBjb25zdMKge8KgZGF0YTrCoHRlc3QsIGVycm9ywqB9wqA9wqB1c2VTd3IoYC9hcGkvdGVzdC9gLMKgZmV0Y2hlcilcbi8vY29uc3TCoHvCoGRhdGE6wqB0ZXN0LCBlcnJvcsKgfcKgPcKgdXNlU3dyKGAvYXBpL3Jlc3VsdC9gLMKgZmV0Y2hlcilcblxuIGNvbnN0IHvCoHZhbHVlcyB9wqAgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4vL2NvbnN0IHJlc3VsdEluZGV4ID0gdGVzdC5yZXN1bHRzLmZpbmRJbmRleCgocmVzdWx0KT0+cmVzdWx0LmNvbmRpdGlvbih2YWx1ZXMpKVxuLy9jb25zdCByZXN1bHQgPSB0ZXN0LnJlc3VsdHNbcmVzdWx0SW5kZXhdID8/IHRlc3QucmVzdWx0c1swXVxuIFxuIGNvbnN0IHJlc3VsdHMgPSB0ZXN0LnJlc3VsdHNcbiAvL2NvbnN0IFtyZXN1bHQsc2V0UmVzdWx0XSA9IHVzZVN0YXRlKHJlc3VsdHNbMF0pIC8vdG9vIG11Y2ggcmUtcmVuZGVyIGVycm9yIG9jY3VycmVkLlxuIGxldCByZXN1bHQgPXJlc3VsdHNbMF0vLyBsZXQg7J6s7ZWg64u5XG5cbiBpZih2YWx1ZXM+PTYwKXtcbiAgIC8vc2V0UmVzdWx0KHJlc3VsdHNbMF0pXG4gICByZXN1bHQgPXJlc3VsdHNbMF1cbiB9ZWxzZSBpZih2YWx1ZXM+PTQwJiZ2YWx1ZXM8NjApe1xuICAgLy9zZXRSZXN1bHQocmVzdWx0c1sxXSlcbiAgIHJlc3VsdCA9cmVzdWx0c1sxXVxuIH1lbHNle1xuICAvLyBzZXRSZXN1bHQocmVzdWx0c1syXSkgXG4gIHJlc3VsdCA9cmVzdWx0c1syXVxufVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZSBzcmMgPXtyZXN1bHQuaW1hZ2VVcmx9IGhlaWdodCA9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIGFsdD1cInJlc3VsdC1pbWFnZVwiIG9iamVjdEZpdD1cImNvdmVyXCIvPiBcbiAgICAgIDxSc2VzdWx0VGFnPntyZXN1bHQubmFtZX08L1JzZXN1bHRUYWc+XG4gICAgICA8TG9jYXRpb25UZXh0PntyZXN1bHQuY29udGVudHN9PC9Mb2NhdGlvblRleHQ+XG4gICAgICA8Q2xpZW50U2lkZUxpbmsgaHJlZj1cIi9cIj4g7LKY7J2M7Jy866GcIDwvQ2xpZW50U2lkZUxpbms+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RSZXN1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==