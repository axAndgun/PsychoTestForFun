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
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    text-align:\xA0center;\n    font-size: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    margin:\xA01rem;\n    font-weight:\xA0bold;\n    text-align:\xA0center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var LocationText = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.h3(_templateObject());
var RsesultTag = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(LocationText)(_templateObject2());

function TestResult() {
  _s();

  var _useSwr = (0,swr__WEBPACK_IMPORTED_MODULE_4__.default)("/api/test/", _utils_commons__WEBPACK_IMPORTED_MODULE_5__.fetcher),
      test = _useSwr.data,
      error = _useSwr.error; //const { data: test, error } = useSwr(`/api/result/`, fetcher)


  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      values = _useContext.values; //const resultIndex = test.results.findIndex((result)=>result.condition(values))
  //const result = test.results[resultIndex] ?? test.results[0]


  var results = test.results;
  var result = results[0]; // let 재할당

  if (values > 60) {
    result = results[0];
  } else if (values >= 40) {
    result = results[1];
  } else {
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
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StartEffectTag, {
      children: result.contents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(TestResult, "S4pMQb9ebRfPs3S2gH4DJwehGvs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = TestResult;
/* harmony default export */ __webpack_exports__["default"] = (TestResult);

var _c;

$RefreshReg$(_c, "TestResult");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvcmVzdWx0LmpzeCJdLCJuYW1lcyI6WyJMb2NhdGlvblRleHQiLCJzdHlsZWQiLCJSc2VzdWx0VGFnIiwiVGVzdFJlc3VsdCIsInVzZVN3ciIsImZldGNoZXIiLCJ0ZXN0IiwiZGF0YSIsImVycm9yIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJ2YWx1ZXMiLCJyZXN1bHRzIiwicmVzdWx0IiwiaW1hZ2VVcmwiLCJjb250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MseURBQUgsbUJBQWxCO0FBTUEsSUFBTUMsVUFBVSxHQUFHRCwwREFBTSxDQUFDRCxZQUFELENBQVQsb0JBQWhCOztBQU1BLFNBQVNHLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxnQkFDU0MsNENBQU0sZUFBZUMsbURBQWYsQ0FEZjtBQUFBLE1BQ1BDLElBRE8sV0FDYkMsSUFEYTtBQUFBLE1BQ0RDLEtBREMsV0FDREEsS0FEQyxFQUV0Qjs7O0FBRnNCLG9CQUlEQyxpREFBVSxDQUFDQywrQ0FBRCxDQUpUO0FBQUEsTUFJYkMsTUFKYSxlQUliQSxNQUphLEVBS3RCO0FBQ0E7OztBQUVDLE1BQU1DLE9BQU8sR0FBR04sSUFBSSxDQUFDTSxPQUFyQjtBQUNBLE1BQUlDLE1BQU0sR0FBR0QsT0FBTyxDQUFDLENBQUQsQ0FBcEIsQ0FUcUIsQ0FTRzs7QUFFeEIsTUFBR0QsTUFBTSxHQUFDLEVBQVYsRUFBYTtBQUNWRSxVQUFNLEdBQUdELE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQ0YsR0FGRCxNQUVNLElBQUlELE1BQU0sSUFBRSxFQUFaLEVBQWU7QUFDbEJFLFVBQU0sR0FBR0QsT0FBTyxDQUFDLENBQUQsQ0FBaEI7QUFDRixHQUZLLE1BRUQ7QUFDRkMsVUFBTSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUFoQjtBQUNGOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUdDLE1BQU0sQ0FBQ0MsUUFBcEI7QUFBOEIsWUFBTSxFQUFFLEtBQXRDO0FBQTRDLFdBQUssRUFBQyxLQUFsRDtBQUF3RCxTQUFHLEVBQUMsY0FBNUQ7QUFBMkUsZUFBUyxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGNBQUQ7QUFBQSxnQkFBaUJELE1BQU0sQ0FBQ0U7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFNRDs7R0F6QlFaLFU7VUFDc0JDLHdDOzs7S0FEdEJELFU7QUEyQlQsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC9yZXN1bHQuMWE0MTg1NTcxMGFiYTRmNmYxMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9fYXBwJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXG5pbXBvcnQge2ZldGNoZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbnMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7Zm9jdXNJbkV4cGFuZEZ3ZH0gZnJvbSAnLi4vLi4vc3R5bGVzL1NwZWNpYWxFZmZlY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdMKgTG9jYXRpb25UZXh0wqA9wqBzdHlsZWQuaDNgXG4gICAgbWFyZ2luOsKgMXJlbTtcbiAgICBmb250LXdlaWdodDrCoGJvbGQ7XG4gICAgdGV4dC1hbGlnbjrCoGNlbnRlcjtcbmBcblxuY29uc3TCoFJzZXN1bHRUYWfCoD3CoHN0eWxlZChMb2NhdGlvblRleHQpYFxuICAgIHRleHQtYWxpZ246wqBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuYFxuXG5cbmZ1bmN0aW9uIFRlc3RSZXN1bHQoKSB7XG4gY29uc3TCoHvCoGRhdGE6wqB0ZXN0LCBlcnJvcsKgfcKgPcKgdXNlU3dyKGAvYXBpL3Rlc3QvYCzCoGZldGNoZXIpXG4vL2NvbnN0wqB7wqBkYXRhOsKgdGVzdCwgZXJyb3LCoH3CoD3CoHVzZVN3cihgL2FwaS9yZXN1bHQvYCzCoGZldGNoZXIpXG5cbiBjb25zdCB7wqB2YWx1ZXMgfcKgID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxuLy9jb25zdCByZXN1bHRJbmRleCA9IHRlc3QucmVzdWx0cy5maW5kSW5kZXgoKHJlc3VsdCk9PnJlc3VsdC5jb25kaXRpb24odmFsdWVzKSlcbi8vY29uc3QgcmVzdWx0ID0gdGVzdC5yZXN1bHRzW3Jlc3VsdEluZGV4XSA/PyB0ZXN0LnJlc3VsdHNbMF1cbiBcbiBjb25zdCByZXN1bHRzID0gdGVzdC5yZXN1bHRzXG4gbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF0gLy8gbGV0IOyerO2VoOuLuVxuXG4gaWYodmFsdWVzPjYwKXtcbiAgICByZXN1bHQgPSByZXN1bHRzWzBdXG4gfWVsc2UgaWYgKHZhbHVlcz49NDApe1xuICAgIHJlc3VsdCA9IHJlc3VsdHNbMV1cbiB9ZWxzZXtcbiAgICByZXN1bHQgPSByZXN1bHRzWzJdXG4gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZSBzcmMgPXtyZXN1bHQuaW1hZ2VVcmx9IGhlaWdodCA9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIGFsdD1cInJlc3VsdC1pbWFnZVwiIG9iamVjdEZpdD1cImNvdmVyXCIvPiBcbiAgICAgIDxTdGFydEVmZmVjdFRhZz57cmVzdWx0LmNvbnRlbnRzfTwvU3RhcnRFZmZlY3RUYWc+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RSZXN1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==