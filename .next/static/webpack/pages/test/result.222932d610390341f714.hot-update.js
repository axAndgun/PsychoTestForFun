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
/* harmony import */ var C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_app */ "./src/pages/_app.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_commons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/commons */ "./src/utils/commons.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_SpecialEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/SpecialEffect */ "./src/styles/SpecialEffect.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\parkgundo\\Documents\\GitHub\\PsychoTestForFun\\src\\pages\\test\\result.jsx",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    font-weight:\xA0bold;\n    font-size: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    margin:\xA01rem;\n    text-align:\xA0center;\n    font-size: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var LocationText = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.h3(_templateObject());
_c = LocationText;
var RsesultTag = (0,styled_components__WEBPACK_IMPORTED_MODULE_9__.default)(LocationText)(_templateObject2());
_c2 = RsesultTag;

function TestResult() {
  _s();

  var _useSwr = (0,swr__WEBPACK_IMPORTED_MODULE_5__.default)("/api/test/", _utils_commons__WEBPACK_IMPORTED_MODULE_6__.fetcher),
      test = _useSwr.data,
      error = _useSwr.error; //const { data: test, error } = useSwr(`/api/result/`, fetcher)


  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext),
      values = _useContext.values; //const resultIndex = test.results.findIndex((result)=>result.condition(values))
  //const result = test.results[resultIndex] ?? test.results[0]


  var results = test.results;

  var _useState = useState(),
      _useState2 = (0,C_Users_parkgundo_Documents_GitHub_PsychoTestForFun_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1]; // let 재할당


  if (values > 50) {
    result.current = results[0];
  } else if (values >= 30) {
    result.current = results[1];
  } else {
    result.current = results[2];
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
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
  return [swr__WEBPACK_IMPORTED_MODULE_5__.default];
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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rlc3QvcmVzdWx0LmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sIm5hbWVzIjpbIkxvY2F0aW9uVGV4dCIsInN0eWxlZCIsIlJzZXN1bHRUYWciLCJUZXN0UmVzdWx0IiwidXNlU3dyIiwiZmV0Y2hlciIsInRlc3QiLCJkYXRhIiwiZXJyb3IiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInZhbHVlcyIsInJlc3VsdHMiLCJ1c2VTdGF0ZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImN1cnJlbnQiLCJpbWFnZVVybCIsIm5hbWUiLCJjb250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBSCxtQkFBbEI7S0FBTUQsWTtBQU1OLElBQU1FLFVBQVUsR0FBR0QsMERBQU0sQ0FBQ0QsWUFBRCxDQUFULG9CQUFoQjtNQUFNRSxVOztBQU1OLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQSxnQkFDU0MsNENBQU0sZUFBZUMsbURBQWYsQ0FEZjtBQUFBLE1BQ1BDLElBRE8sV0FDYkMsSUFEYTtBQUFBLE1BQ0RDLEtBREMsV0FDREEsS0FEQyxFQUV0Qjs7O0FBRnNCLG9CQUlEQyxpREFBVSxDQUFDQywrQ0FBRCxDQUpUO0FBQUEsTUFJYkMsTUFKYSxlQUliQSxNQUphLEVBS3RCO0FBQ0E7OztBQUVDLE1BQU1DLE9BQU8sR0FBR04sSUFBSSxDQUFDTSxPQUFyQjs7QUFScUIsa0JBU01DLFFBQVEsRUFUZDtBQUFBO0FBQUEsTUFTZEMsTUFUYztBQUFBLE1BU1BDLFNBVE8sa0JBU2dCOzs7QUFFckMsTUFBR0osTUFBTSxHQUFDLEVBQVYsRUFBYTtBQUNWRyxVQUFNLENBQUNFLE9BQVAsR0FBaUJKLE9BQU8sQ0FBQyxDQUFELENBQXhCO0FBQ0YsR0FGRCxNQUVNLElBQUlELE1BQU0sSUFBRSxFQUFaLEVBQWU7QUFDbEJHLFVBQU0sQ0FBQ0UsT0FBUCxHQUFpQkosT0FBTyxDQUFDLENBQUQsQ0FBeEI7QUFDRixHQUZLLE1BRUQ7QUFDRkUsVUFBTSxDQUFDRSxPQUFQLEdBQWlCSixPQUFPLENBQUMsQ0FBRCxDQUF4QjtBQUNGOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUdFLE1BQU0sQ0FBQ0csUUFBcEI7QUFBOEIsWUFBTSxFQUFFLEtBQXRDO0FBQTRDLFdBQUssRUFBQyxLQUFsRDtBQUF3RCxTQUFHLEVBQUMsY0FBNUQ7QUFBMkUsZUFBUyxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLFVBQUQ7QUFBQSxpQkFBYUgsTUFBTSxDQUFDSSxJQUFwQixxQkFBK0JQLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsWUFBRDtBQUFBLGdCQUFlRyxNQUFNLENBQUNLO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBT0Q7O0dBMUJRaEIsVTtVQUNzQkMsd0M7OztNQUR0QkQsVTtBQTRCVCwrREFBZUEsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRGU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnVFO0FBQ1k7QUFDWTtBQUN0QjtBQUMxRDtBQUNmLFNBQVMsa0ZBQWMsU0FBUyx3RkFBb0IsWUFBWSw4RkFBMEIsWUFBWSxtRkFBZTtBQUNySCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjJFO0FBQzVEO0FBQ2Y7QUFDQSxvQ0FBb0Msb0ZBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixvRkFBZ0I7QUFDdEcsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZXN0L3Jlc3VsdC4yMjI5MzJkNjEwMzkwMzQxZjcxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL19hcHAnXG5pbXBvcnQgeyB1c2VDb250ZXh0LHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXG5pbXBvcnQge2ZldGNoZXJ9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbnMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7Zm9jdXNJbkV4cGFuZEZ3ZH0gZnJvbSAnLi4vLi4vc3R5bGVzL1NwZWNpYWxFZmZlY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdMKgTG9jYXRpb25UZXh0wqA9wqBzdHlsZWQuaDNgXG4gICAgbWFyZ2luOsKgMXJlbTtcbiAgICB0ZXh0LWFsaWduOsKgY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbmBcblxuY29uc3TCoFJzZXN1bHRUYWfCoD3CoHN0eWxlZChMb2NhdGlvblRleHQpYFxuICAgIGZvbnQtd2VpZ2h0OsKgYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG5gXG5cblxuZnVuY3Rpb24gVGVzdFJlc3VsdCgpIHtcbiBjb25zdMKge8KgZGF0YTrCoHRlc3QsIGVycm9ywqB9wqA9wqB1c2VTd3IoYC9hcGkvdGVzdC9gLMKgZmV0Y2hlcilcbi8vY29uc3TCoHvCoGRhdGE6wqB0ZXN0LCBlcnJvcsKgfcKgPcKgdXNlU3dyKGAvYXBpL3Jlc3VsdC9gLMKgZmV0Y2hlcilcblxuIGNvbnN0IHvCoHZhbHVlcyB9wqAgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpXG4vL2NvbnN0IHJlc3VsdEluZGV4ID0gdGVzdC5yZXN1bHRzLmZpbmRJbmRleCgocmVzdWx0KT0+cmVzdWx0LmNvbmRpdGlvbih2YWx1ZXMpKVxuLy9jb25zdCByZXN1bHQgPSB0ZXN0LnJlc3VsdHNbcmVzdWx0SW5kZXhdID8/IHRlc3QucmVzdWx0c1swXVxuIFxuIGNvbnN0IHJlc3VsdHMgPSB0ZXN0LnJlc3VsdHNcbiBjb25zdCBbcmVzdWx0LHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpLy8gbGV0IOyerO2VoOuLuVxuXG4gaWYodmFsdWVzPjUwKXtcbiAgICByZXN1bHQuY3VycmVudCA9IHJlc3VsdHNbMF1cbiB9ZWxzZSBpZiAodmFsdWVzPj0zMCl7XG4gICAgcmVzdWx0LmN1cnJlbnQgPSByZXN1bHRzWzFdXG4gfWVsc2V7XG4gICAgcmVzdWx0LmN1cnJlbnQgPSByZXN1bHRzWzJdXG4gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZSBzcmMgPXtyZXN1bHQuaW1hZ2VVcmx9IGhlaWdodCA9XCIyMDBcIiB3aWR0aD1cIjIwMFwiIGFsdD1cInJlc3VsdC1pbWFnZVwiIG9iamVjdEZpdD1cImNvdmVyXCIvPiBcbiAgICAgIDxSc2VzdWx0VGFnPntyZXN1bHQubmFtZX0g7KCQ7IiYOiB7dmFsdWVzfTwvUnNlc3VsdFRhZz5cbiAgICAgIDxMb2NhdGlvblRleHQ+e3Jlc3VsdC5jb250ZW50c308L0xvY2F0aW9uVGV4dD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFJlc3VsdDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9