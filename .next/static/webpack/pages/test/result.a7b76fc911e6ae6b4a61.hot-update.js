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
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    margin:\xA01rem;\n    \n    text-align:\xA0center;\n    font-size: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var LocationText = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.h3(_templateObject());
_c = LocationText;
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

_s(TestResult, "S4pMQb9ebRfPs3S2gH4DJwehGvs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c2 = TestResult;
/* harmony default export */ __webpack_exports__["default"] = (TestResult);

var _c, _c2;

$RefreshReg$(_c, "LocationText");
$RefreshReg$(_c2, "TestResult");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvcmVzdWx0LmpzeCJdLCJuYW1lcyI6WyJMb2NhdGlvblRleHQiLCJzdHlsZWQiLCJSc2VzdWx0VGFnIiwiVGVzdFJlc3VsdCIsInVzZVN3ciIsImZldGNoZXIiLCJ0ZXN0IiwiZGF0YSIsImVycm9yIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJ2YWx1ZXMiLCJyZXN1bHRzIiwicmVzdWx0IiwiaW1hZ2VVcmwiLCJjb250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MseURBQUgsbUJBQWxCO0tBQU1ELFk7QUFPTixJQUFNRSxVQUFVLEdBQUdELDBEQUFNLENBQUNELFlBQUQsQ0FBVCxvQkFBaEI7O0FBTUEsU0FBU0csVUFBVCxHQUFzQjtBQUFBOztBQUFBLGdCQUNTQyw0Q0FBTSxlQUFlQyxtREFBZixDQURmO0FBQUEsTUFDUEMsSUFETyxXQUNiQyxJQURhO0FBQUEsTUFDREMsS0FEQyxXQUNEQSxLQURDLEVBRXRCOzs7QUFGc0Isb0JBSURDLGlEQUFVLENBQUNDLCtDQUFELENBSlQ7QUFBQSxNQUliQyxNQUphLGVBSWJBLE1BSmEsRUFLdEI7QUFDQTs7O0FBRUMsTUFBTUMsT0FBTyxHQUFHTixJQUFJLENBQUNNLE9BQXJCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUFwQixDQVRxQixDQVNHOztBQUV4QixNQUFHRCxNQUFNLEdBQUMsRUFBVixFQUFhO0FBQ1ZFLFVBQU0sR0FBR0QsT0FBTyxDQUFDLENBQUQsQ0FBaEI7QUFDRixHQUZELE1BRU0sSUFBSUQsTUFBTSxJQUFFLEVBQVosRUFBZTtBQUNsQkUsVUFBTSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUFoQjtBQUNGLEdBRkssTUFFRDtBQUNGQyxVQUFNLEdBQUdELE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQ0Y7O0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBR0MsTUFBTSxDQUFDQyxRQUFwQjtBQUE4QixZQUFNLEVBQUUsS0FBdEM7QUFBNEMsV0FBSyxFQUFDLEtBQWxEO0FBQXdELFNBQUcsRUFBQyxjQUE1RDtBQUEyRSxlQUFTLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsWUFBRDtBQUFBLGdCQUFlRCxNQUFNLENBQUNFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0dBekJRWixVO1VBQ3NCQyx3Qzs7O01BRHRCRCxVO0FBMkJULCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QvcmVzdWx0LmE3Yjc2ZmM5MTFlNmFlNmI0YTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vX2FwcCdcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJ1xuaW1wb3J0IHtmZXRjaGVyfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25zJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQge2ZvY3VzSW5FeHBhbmRGd2R9IGZyb20gJy4uLy4uL3N0eWxlcy9TcGVjaWFsRWZmZWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3TCoExvY2F0aW9uVGV4dMKgPcKgc3R5bGVkLmgzYFxuICAgIG1hcmdpbjrCoDFyZW07XG4gICAgXG4gICAgdGV4dC1hbGlnbjrCoGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG5gXG5cbmNvbnN0wqBSc2VzdWx0VGFnwqA9wqBzdHlsZWQoTG9jYXRpb25UZXh0KWBcbiAgICBmb250LXdlaWdodDrCoGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuYFxuXG5cbmZ1bmN0aW9uIFRlc3RSZXN1bHQoKSB7XG4gY29uc3TCoHvCoGRhdGE6wqB0ZXN0LCBlcnJvcsKgfcKgPcKgdXNlU3dyKGAvYXBpL3Rlc3QvYCzCoGZldGNoZXIpXG4vL2NvbnN0wqB7wqBkYXRhOsKgdGVzdCwgZXJyb3LCoH3CoD3CoHVzZVN3cihgL2FwaS9yZXN1bHQvYCzCoGZldGNoZXIpXG5cbiBjb25zdCB7wqB2YWx1ZXMgfcKgID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxuLy9jb25zdCByZXN1bHRJbmRleCA9IHRlc3QucmVzdWx0cy5maW5kSW5kZXgoKHJlc3VsdCk9PnJlc3VsdC5jb25kaXRpb24odmFsdWVzKSlcbi8vY29uc3QgcmVzdWx0ID0gdGVzdC5yZXN1bHRzW3Jlc3VsdEluZGV4XSA/PyB0ZXN0LnJlc3VsdHNbMF1cbiBcbiBjb25zdCByZXN1bHRzID0gdGVzdC5yZXN1bHRzXG4gbGV0IHJlc3VsdCA9IHJlc3VsdHNbMF0gLy8gbGV0IOyerO2VoOuLuVxuXG4gaWYodmFsdWVzPjYwKXtcbiAgICByZXN1bHQgPSByZXN1bHRzWzBdXG4gfWVsc2UgaWYgKHZhbHVlcz49NDApe1xuICAgIHJlc3VsdCA9IHJlc3VsdHNbMV1cbiB9ZWxzZXtcbiAgICByZXN1bHQgPSByZXN1bHRzWzJdXG4gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZSBzcmMgPXtyZXN1bHQuaW1hZ2VVcmx9IGhlaWdodCA9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIGFsdD1cInJlc3VsdC1pbWFnZVwiIG9iamVjdEZpdD1cImNvdmVyXCIvPiBcbiAgICAgIDxMb2NhdGlvblRleHQ+e3Jlc3VsdC5jb250ZW50c308L0xvY2F0aW9uVGV4dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFJlc3VsdDsiXSwic291cmNlUm9vdCI6IiJ9