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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_FlexContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/FlexContainer */ "./src/styles/FlexContainer.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\parkgundo\\Documents\\GitHub\\PsychoTestForFun\\src\\pages\\test\\result.jsx",
    _s = $RefreshSig$();

function _templateObject4() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    font-weight: bold;\n   \n @media screen and (max-width:1200px) { \n      font-size: 35px;\n     \n   }\n\n@media screen and (max-width:768px) {  \n    font-size: 45px;\n     \n}\n@media screen and (max-width:480px) {  \n      font-size: 26px;\n     \n }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    flex-flow:\xA0column\xA0nowrap;\n    text-align: center;\n    margin:\xA01rem\xA00;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n\n@keyframes fadeIn{\n  0% {\n      opacity:0;\n  }\n  35% {\n      opacity:1;\n  }\n  70% {\n      opacity:0;\n  }\n  100% {\n      opacity:1;\n  }\n}\n\n  animation-name: fadeIn; //\uC774\uAC8C \uC788\uC5B4\uC57C \uB429\uB2C8\uB2E4.\n  animation-duration:2s;\n  animation-duration: leaner;\n  animation-iteration-count:3;\n  animation-direction:alternate;\n  animation-fill-mode: forwards;  \n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    padding:\xA02rem\xA00;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 //import { fadeIn } from '../../styles/SpecialEffect'
//import { test } from '../../models/BinaryQuestionResults'

var Padding = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div(_templateObject());
_c = Padding;
var FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.div(_templateObject2());
_c2 = FadeIn;
var FlexContainerColumnCenter = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(_styles_FlexContainer__WEBPACK_IMPORTED_MODULE_7__.FlexContainerAlignCenter)(_templateObject3());
_c3 = FlexContainerColumnCenter;
var FlexContainerColumnCenterBold = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.default)(FlexContainerColumnCenter)(_templateObject4());
_c4 = FlexContainerColumnCenterBold;

function TestResult() {
  _s();

  var _useSwr = (0,swr__WEBPACK_IMPORTED_MODULE_4__.default)("/api/test/", _utils_commons__WEBPACK_IMPORTED_MODULE_5__.fetcher),
      test = _useSwr.data,
      error = _useSwr.error; //빌드시 undefined 에러 발생!!! 
  //const { data: test, error } = useSwr(`/api/result/`, fetcher) 


  var isTestLoading = !test && !error;

  if (isTestLoading) {
    // 이 코드를 추가하니 undefined 에러가 해결되었다. 
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "\uB85C\uB529\uC911..."
    }, void 0, false);
  }

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_app__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      values = _useContext.values; //글로벌 변수를 가져옴. 
  //const resultIndex = test.results.findIndex((result)=>result.condition(values))
  //const result = test.results[resultIndex] ?? test.results[0]


  var results = test.results; //빌드시 undefined 에러 발생!!! (해결책 line num: 27 --> isTestLoading)

  var result = results[0]; // let 재할당

  if (values >= 60) {
    result = results[0];
  } else if (values >= 40 && values < 60) {
    result = results[1];
  } else {
    result = results[2];
  }

  results.filter(function (result) {
    return values >= 60 ? result : values >= 40 ? result : result;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Padding, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
        src: result.imageUrl,
        height: "200",
        width: "200",
        alt: "result-image",
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexContainerColumnCenterBold, {
        children: result.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexContainerColumnCenter, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FadeIn, {
          children: result.contents
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 34
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/",
        children: " \uCC98\uC74C\uC73C\uB85C "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_s(TestResult, "S4pMQb9ebRfPs3S2gH4DJwehGvs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c5 = TestResult;
/* harmony default export */ __webpack_exports__["default"] = (TestResult);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Padding");
$RefreshReg$(_c2, "FadeIn");
$RefreshReg$(_c3, "FlexContainerColumnCenter");
$RefreshReg$(_c4, "FlexContainerColumnCenterBold");
$RefreshReg$(_c5, "TestResult");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvcmVzdWx0LmpzeCJdLCJuYW1lcyI6WyJQYWRkaW5nIiwic3R5bGVkIiwiRmFkZUluIiwiRmxleENvbnRhaW5lckNvbHVtbkNlbnRlciIsIkZsZXhDb250YWluZXJBbGlnbkNlbnRlciIsIkZsZXhDb250YWluZXJDb2x1bW5DZW50ZXJCb2xkIiwiVGVzdFJlc3VsdCIsInVzZVN3ciIsImZldGNoZXIiLCJ0ZXN0IiwiZGF0YSIsImVycm9yIiwiaXNUZXN0TG9hZGluZyIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwidmFsdWVzIiwicmVzdWx0cyIsInJlc3VsdCIsImZpbHRlciIsImltYWdlVXJsIiwibmFtZSIsImNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLDBEQUFILG1CQUFiO0tBQU1ELE87QUFJTixJQUFNRSxNQUFNLEdBQUNELDBEQUFELG9CQUFaO01BQU1DLE07QUEwQk4sSUFBTUMseUJBQXlCLEdBQUdGLDBEQUFNLENBQUNHLDJFQUFELENBQVQsb0JBQS9CO01BQU1ELHlCO0FBTU4sSUFBTUUsNkJBQTZCLEdBQUdKLDBEQUFNLENBQUNFLHlCQUFELENBQVQsb0JBQW5DO01BQU1FLDZCOztBQWtCTixTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBQUEsZ0JBQ1NDLDRDQUFNLGVBQWVDLG1EQUFmLENBRGY7QUFBQSxNQUNQQyxJQURPLFdBQ2JDLElBRGE7QUFBQSxNQUNEQyxLQURDLFdBQ0RBLEtBREMsRUFDdUM7QUFDN0Q7OztBQUVBLE1BQU1DLGFBQWEsR0FBRyxDQUFDSCxJQUFELElBQVMsQ0FBRUUsS0FBakM7O0FBRUEsTUFBSUMsYUFBSixFQUFrQjtBQUFHO0FBQ2pCLHdCQUNJO0FBQUE7QUFBQSxxQkFESjtBQUtIOztBQVpxQixvQkFrQkRDLGlEQUFVLENBQUNDLCtDQUFELENBbEJUO0FBQUEsTUFrQmJDLE1BbEJhLGVBa0JiQSxNQWxCYSxFQWtCeUI7QUFFL0M7QUFDQTs7O0FBRUMsTUFBTUMsT0FBTyxHQUFHUCxJQUFJLENBQUNPLE9BQXJCLENBdkJxQixDQXVCUTs7QUFHN0IsTUFBSUMsTUFBTSxHQUFFRCxPQUFPLENBQUMsQ0FBRCxDQUFuQixDQTFCcUIsQ0EwQkM7O0FBRXRCLE1BQUdELE1BQU0sSUFBRSxFQUFYLEVBQWM7QUFDWkUsVUFBTSxHQUFFRCxPQUFPLENBQUMsQ0FBRCxDQUFmO0FBQ0QsR0FGRCxNQUVNLElBQUdELE1BQU0sSUFBRSxFQUFSLElBQVlBLE1BQU0sR0FBQyxFQUF0QixFQUF5QjtBQUM3QkUsVUFBTSxHQUFFRCxPQUFPLENBQUMsQ0FBRCxDQUFmO0FBQ0QsR0FGSyxNQUVEO0FBQ0pDLFVBQU0sR0FBRUQsT0FBTyxDQUFDLENBQUQsQ0FBZjtBQUNEOztBQUVEQSxTQUFPLENBQUNFLE1BQVIsQ0FBZSxVQUFBRCxNQUFNO0FBQUEsV0FBS0YsTUFBTSxJQUFFLEVBQVIsR0FBWUUsTUFBWixHQUFxQkYsTUFBTSxJQUFFLEVBQVIsR0FBWUUsTUFBWixHQUFvQkEsTUFBOUM7QUFBQSxHQUFyQjtBQUdFLHNCQUNFO0FBQUEsMkJBQ0EsOERBQUMsT0FBRDtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQU8sV0FBRyxFQUFHQSxNQUFNLENBQUNFLFFBQXBCO0FBQThCLGNBQU0sRUFBRSxLQUF0QztBQUE0QyxhQUFLLEVBQUMsS0FBbEQ7QUFBd0QsV0FBRyxFQUFDLGNBQTVEO0FBQTJFLGlCQUFTLEVBQUM7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsNkJBQUQ7QUFBQSxrQkFBZ0NGLE1BQU0sQ0FBQ0c7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMseUJBQUQ7QUFBQSwrQkFBMkIsOERBQUMsTUFBRDtBQUFBLG9CQUFTSCxNQUFNLENBQUNJO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURGO0FBV0Q7O0dBbERRZixVO1VBQ3NCQyx3Qzs7O01BRHRCRCxVO0FBb0RULCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QvcmVzdWx0LmY2OWRiYjdmMmZiZjJlOTIxZDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vX2FwcCdcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcclxuaW1wb3J0IHtmZXRjaGVyfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25zJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtGbGV4Q29udGFpbmVyQWxpZ25DZW50ZXJ9IGZyb20gJy4uLy4uL3N0eWxlcy9GbGV4Q29udGFpbmVyJ1xyXG4vL2ltcG9ydCB7IGZhZGVJbiB9IGZyb20gJy4uLy4uL3N0eWxlcy9TcGVjaWFsRWZmZWN0J1xyXG4vL2ltcG9ydCB7IHRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvQmluYXJ5UXVlc3Rpb25SZXN1bHRzJ1xyXG5cclxuY29uc3TCoFBhZGRpbmfCoD3CoHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOsKgMnJlbcKgMDtcclxuYFxyXG5cclxuY29uc3QgRmFkZUluPXN0eWxlZC5kaXZgXHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbntcclxuICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MDtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47IC8v7J206rKMIOyeiOyWtOyVvCDrkKnri4jri6QuXHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogbGVhbmVyO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MztcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOmFsdGVybmF0ZTtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgIFxyXG5cclxuYFxyXG5cclxuY29uc3TCoEZsZXhDb250YWluZXJDb2x1bW5DZW50ZXLCoD3CoHN0eWxlZChGbGV4Q29udGFpbmVyQWxpZ25DZW50ZXIpYFxyXG4gICAgZmxleC1mbG93OsKgY29sdW1uwqBub3dyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46wqAxcmVtwqAwO1xyXG4gIGBcclxuICBcclxuY29uc3TCoEZsZXhDb250YWluZXJDb2x1bW5DZW50ZXJCb2xkwqA9wqBzdHlsZWQoRmxleENvbnRhaW5lckNvbHVtbkNlbnRlcilgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkgeyBcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgIFxyXG4gICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7ICBcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ4MHB4KSB7ICBcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgIFxyXG4gfVxyXG5gXHJcblxyXG5mdW5jdGlvbiBUZXN0UmVzdWx0KCkge1xyXG4gY29uc3TCoHvCoGRhdGE6wqB0ZXN0LCBlcnJvcsKgfcKgPcKgdXNlU3dyKGAvYXBpL3Rlc3QvYCzCoGZldGNoZXIpIC8v67mM65Oc7IucIHVuZGVmaW5lZCDsl5Drn6wg67Cc7IOdISEhIFxyXG4vL2NvbnN0wqB7wqBkYXRhOsKgdGVzdCwgZXJyb3LCoH3CoD3CoHVzZVN3cihgL2FwaS9yZXN1bHQvYCzCoGZldGNoZXIpIFxyXG5cclxuY29uc3QgaXNUZXN0TG9hZGluZyA9ICF0ZXN0ICYmICEgZXJyb3IgXHJcblxyXG5pZiAoaXNUZXN0TG9hZGluZyl7ICAvLyDsnbQg7L2U65Oc66W8IOy2lOqwgO2VmOuLiCB1bmRlZmluZWQg7JeQ65+s6rCAIO2VtOqysOuQmOyXiOuLpC4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAg66Gc65Sp7KSRLi4uXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gY29uc3Qge8KgdmFsdWVzIH3CoCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCkgLy/quIDroZzrsowg67OA7IiY66W8IOqwgOyguOyYtC4gXHJcblxyXG4vL2NvbnN0IHJlc3VsdEluZGV4ID0gdGVzdC5yZXN1bHRzLmZpbmRJbmRleCgocmVzdWx0KT0+cmVzdWx0LmNvbmRpdGlvbih2YWx1ZXMpKVxyXG4vL2NvbnN0IHJlc3VsdCA9IHRlc3QucmVzdWx0c1tyZXN1bHRJbmRleF0gPz8gdGVzdC5yZXN1bHRzWzBdXHJcbiBcclxuIGNvbnN0IHJlc3VsdHMgPSB0ZXN0LnJlc3VsdHMgLy/ruYzrk5zsi5wgdW5kZWZpbmVkIOyXkOufrCDrsJzsg50hISEgKO2VtOqysOyxhSBsaW5lIG51bTogMjcgLS0+IGlzVGVzdExvYWRpbmcpXHJcblxyXG5cclxuIGxldCByZXN1bHQgPXJlc3VsdHNbMF0vLyBsZXQg7J6s7ZWg64u5XHJcblxyXG4gaWYodmFsdWVzPj02MCl7XHJcbiAgIHJlc3VsdCA9cmVzdWx0c1swXVxyXG4gfWVsc2UgaWYodmFsdWVzPj00MCYmdmFsdWVzPDYwKXtcclxuICAgcmVzdWx0ID1yZXN1bHRzWzFdXHJcbiB9ZWxzZXtcclxuICByZXN1bHQgPXJlc3VsdHNbMl1cclxufVxyXG5cclxucmVzdWx0cy5maWx0ZXIocmVzdWx0ID0+ICh2YWx1ZXM+PTYwPyByZXN1bHQgOiB2YWx1ZXM+PTQwPyByZXN1bHQ6IHJlc3VsdCkpXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxQYWRkaW5nPlxyXG4gICAgICA8SW1hZ2Ugc3JjID17cmVzdWx0LmltYWdlVXJsfSBoZWlnaHQgPVwiMjAwXCIgd2lkdGg9XCIyMDBcIiBhbHQ9XCJyZXN1bHQtaW1hZ2VcIiBvYmplY3RGaXQ9XCJjb3ZlclwiLz4gXHJcbiAgICAgIDxGbGV4Q29udGFpbmVyQ29sdW1uQ2VudGVyQm9sZD57cmVzdWx0Lm5hbWV9PC9GbGV4Q29udGFpbmVyQ29sdW1uQ2VudGVyQm9sZD5cclxuICAgICAgPEZsZXhDb250YWluZXJDb2x1bW5DZW50ZXI+PEZhZGVJbj57cmVzdWx0LmNvbnRlbnRzfTwvRmFkZUluPjwvRmxleENvbnRhaW5lckNvbHVtbkNlbnRlcj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxhIGhyZWY9XCIvXCI+IOyymOydjOycvOuhnCA8L2E+XHJcbiAgICAgIDwvUGFkZGluZz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RSZXN1bHQ7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9