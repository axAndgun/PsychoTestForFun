(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/atoms/Button.jsx":
/*!*****************************************!*\
  !*** ./src/components/atoms/Button.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": function() { return /* binding */ StyledButton; },
/* harmony export */   "PrimaryButton": function() { return /* binding */ PrimaryButton; },
/* harmony export */   "SecondaryButton": function() { return /* binding */ SecondaryButton; },
/* harmony export */   "FixedButton": function() { return /* binding */ FixedButton; }
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/constants */ "./src/models/constants.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_0__.Button)`
margin: 1rem 0;
padding: 0.8rem;
height: auto;
border-radius: 0.3rem;
font-size: 1rem;
font-weight: 500;

`;
const PrimaryButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(StyledButton)`
background: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_BACKGROUND_COLOR};
border: 1px solid ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_BACKGROUND_COLOR};
color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.BASIC_TEXT_COLOR};

:focus {
background: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_BACKGROUND_COLOR};
border-color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_BACKGROUND_COLOR};
color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.BASIC_TEXT_COLOR};
}

:active,

:hover {
background: #fff;
border-color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_TEXT_COLOR};
color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.PRIMARY_TEXT_COLOR};
}

`;
const SecondaryButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(StyledButton)`
background: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.SECONDARY_BACKGROUND_COLOR};
border: 1px solid ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.SECONDARY_BACKGROUND_COLOR};
color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.BASIC_TEXT_COLOR};

:focus {
background: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.SECONDARY_BACKGROUND_COLOR};
border-color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.SECONDARY_BACKGROUND_COLOR};
color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.BASIC_TEXT_COLOR};
}

:active,

:hover {
background: #fff;
border-color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.SECONDARY_TEXT_COLOR};
color: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.SECONDARY_TEXT_COLOR};
}

`;
const FixedButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(PrimaryButton)`

position: fixed !important;
bottom: 0;
z-index: 1;
width: calc(100% - 1rem);
max-width: ${_models_constants__WEBPACK_IMPORTED_MODULE_1__.TABLET_MIN_WIDTH};
margin: 0.5rem;

`;

/***/ }),

/***/ "./src/hooks/useGotoPage.js":
/*!**********************************!*\
  !*** ./src/hooks/useGotoPage.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function useGotoPage(url) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const goToPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    e.stopPropagation();
    router.push(url);
  }, [router, url]);
  return goToPage;
}

/* harmony default export */ __webpack_exports__["default"] = (useGotoPage);

/***/ }),

/***/ "./src/models/constants.js":
/*!*********************************!*\
  !*** ./src/models/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MOBILE_MIN_WIDTH": function() { return /* binding */ MOBILE_MIN_WIDTH; },
/* harmony export */   "TABLET_MIN_WIDTH": function() { return /* binding */ TABLET_MIN_WIDTH; },
/* harmony export */   "DESKTOP_MIN_WIDTH": function() { return /* binding */ DESKTOP_MIN_WIDTH; },
/* harmony export */   "TOP_HEADER_HEIGHT": function() { return /* binding */ TOP_HEADER_HEIGHT; },
/* harmony export */   "HEADER_HEIGHT": function() { return /* binding */ HEADER_HEIGHT; },
/* harmony export */   "PRIMARY_BACKGROUND_COLOR": function() { return /* binding */ PRIMARY_BACKGROUND_COLOR; },
/* harmony export */   "PRIMARY_TEXT_COLOR": function() { return /* binding */ PRIMARY_TEXT_COLOR; },
/* harmony export */   "PRIMARY_ACHROMATIC_BACKGROUND_COLOR": function() { return /* binding */ PRIMARY_ACHROMATIC_BACKGROUND_COLOR; },
/* harmony export */   "SECONDARY_BACKGROUND_COLOR": function() { return /* binding */ SECONDARY_BACKGROUND_COLOR; },
/* harmony export */   "SECONDARY_TEXT_COLOR": function() { return /* binding */ SECONDARY_TEXT_COLOR; },
/* harmony export */   "SECONDARY_ACHROMATIC_COLOR": function() { return /* binding */ SECONDARY_ACHROMATIC_COLOR; },
/* harmony export */   "BASIC_TEXT_COLOR": function() { return /* binding */ BASIC_TEXT_COLOR; }
/* harmony export */ });
const MOBILE_MIN_WIDTH = '280px';
const TABLET_MIN_WIDTH = '560px';
const DESKTOP_MIN_WIDTH = '1024px';
const TOP_HEADER_HEIGHT = '3.5rem';
const HEADER_HEIGHT = '4rem';
const PRIMARY_BACKGROUND_COLOR = '#FFEA80';
const PRIMARY_TEXT_COLOR = '#AD9100';
const PRIMARY_ACHROMATIC_BACKGROUND_COLOR = '';
const SECONDARY_BACKGROUND_COLOR = '#F86363';
const SECONDARY_TEXT_COLOR = '#E70C0C';
const SECONDARY_ACHROMATIC_COLOR = '';
const BASIC_TEXT_COLOR = '#333333';

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/atoms/Button */ "./src/components/atoms/Button.jsx");
/* harmony import */ var _hooks_useGotoPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGotoPage */ "./src/hooks/useGotoPage.js");


var _jsxFileName = "C:\\Users\\parkgundo\\Documents\\GitHub\\PsychoTestForFun\\src\\pages\\index.js";



function Homepage() {
  const goToTestsPage = (0,_hooks_useGotoPage__WEBPACK_IMPORTED_MODULE_2__.default)('/tests');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_1__.StyledButton, {
        onclick: goToTestsPage,
        children: " \uC2EC\uB9AC\uD14C\uC2A4\uD2B8 \uC2DC\uC791 "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL2NvbXBvbmVudHMvYXRvbXMvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL2hvb2tzL3VzZUdvdG9QYWdlLmpzIiwid2VicGFjazovL3BzeWNob3Rlc3QvLi9zcmMvbW9kZWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3BzeWNob3Rlc3QvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vcHN5Y2hvdGVzdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcHN5Y2hvdGVzdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHN5Y2hvdGVzdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3BzeWNob3Rlc3QvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIlByaW1hcnlCdXR0b24iLCJQUklNQVJZX0JBQ0tHUk9VTkRfQ09MT1IiLCJCQVNJQ19URVhUX0NPTE9SIiwiUFJJTUFSWV9URVhUX0NPTE9SIiwiU2Vjb25kYXJ5QnV0dG9uIiwiU0VDT05EQVJZX0JBQ0tHUk9VTkRfQ09MT1IiLCJTRUNPTkRBUllfVEVYVF9DT0xPUiIsIkZpeGVkQnV0dG9uIiwiVEFCTEVUX01JTl9XSURUSCIsInVzZUdvdG9QYWdlIiwidXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub1BhZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwdXNoIiwiTU9CSUxFX01JTl9XSURUSCIsIkRFU0tUT1BfTUlOX1dJRFRIIiwiVE9QX0hFQURFUl9IRUlHSFQiLCJIRUFERVJfSEVJR0hUIiwiUFJJTUFSWV9BQ0hST01BVElDX0JBQ0tHUk9VTkRfQ09MT1IiLCJTRUNPTkRBUllfQUNIUk9NQVRJQ19DT0xPUiIsIkhvbWVwYWdlIiwiZ29Ub1Rlc3RzUGFnZSIsInVzZUdvVG9QYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHQyx3REFBTSxDQUFDQyx3Q0FBRCxDQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSTztBQVVBLE1BQU1DLGFBQWEsR0FBR0Ysd0RBQU0sQ0FBQ0QsWUFBRCxDQUFlO0FBQ2xELGNBQWNJLHVFQUF5QjtBQUN2QyxvQkFBb0JBLHVFQUF5QjtBQUM3QyxTQUFTQywrREFBaUI7QUFDMUI7QUFDQTtBQUNBLGNBQWNELHVFQUF5QjtBQUN2QyxnQkFBZ0JBLHVFQUF5QjtBQUN6QyxTQUFTQywrREFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCQyxpRUFBbUI7QUFDbkMsU0FBU0EsaUVBQW1CO0FBQzVCO0FBQ0E7QUFDQSxDQW5CTztBQXFCQSxNQUFNQyxlQUFlLEdBQUdOLHdEQUFNLENBQUNELFlBQUQsQ0FBZTtBQUNwRCxjQUFjUSx5RUFBMkI7QUFDekMsb0JBQW9CQSx5RUFBMkI7QUFDL0MsU0FBU0gsK0RBQWlCO0FBQzFCO0FBQ0E7QUFDQSxjQUFjRyx5RUFBMkI7QUFDekMsZ0JBQWdCQSx5RUFBMkI7QUFDM0MsU0FBU0gsK0RBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQkksbUVBQXFCO0FBQ3JDLFNBQVNBLG1FQUFxQjtBQUM5QjtBQUNBO0FBQ0EsQ0FuQk87QUFxQkEsTUFBTUMsV0FBVyxHQUFHVCx3REFBTSxDQUFDRSxhQUFELENBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhUSwrREFBaUI7QUFDOUI7QUFDQTtBQUNBLENBVE8sQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFUDtBQUNBOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3hCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUVDLGtEQUFXLENBQ3ZCQyxDQUFDLElBQUU7QUFDQ0EsS0FBQyxDQUFDQyxlQUFGO0FBQ0FMLFVBQU0sQ0FBQ00sSUFBUCxDQUFZUCxHQUFaO0FBQ0gsR0FKc0IsRUFLdkIsQ0FBQ0MsTUFBRCxFQUFRRCxHQUFSLENBTHVCLENBQTNCO0FBUUUsU0FBT0csUUFBUDtBQUNIOztBQUVELCtEQUFlSixXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJPLE1BQU1TLGdCQUFnQixHQUFHLE9BQXpCO0FBQ0EsTUFBTVYsZ0JBQWdCLEdBQUcsT0FBekI7QUFDQSxNQUFNVyxpQkFBaUIsR0FBRyxRQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLFFBQTFCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLE1BQXRCO0FBQ0EsTUFBTXBCLHdCQUF3QixHQUFHLFNBQWpDO0FBQ0EsTUFBTUUsa0JBQWtCLEdBQUcsU0FBM0I7QUFDQSxNQUFNbUIsbUNBQW1DLEdBQUcsRUFBNUM7QUFDQSxNQUFNakIsMEJBQTBCLEdBQUcsU0FBbkM7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUE3QjtBQUNBLE1BQU1pQiwwQkFBMEIsR0FBRyxFQUFuQztBQUNBLE1BQU1yQixnQkFBZ0IsR0FBRyxTQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFA7QUFDQTs7QUFHQSxTQUFTc0IsUUFBVCxHQUFvQjtBQUNsQixRQUFNQyxhQUFhLEdBQUdDLDJEQUFXLENBQUMsUUFBRCxDQUFqQztBQUVBLHNCQUNFO0FBQUEsMkJBQ0E7QUFBQSw2QkFDQSw4REFBQyxrRUFBRDtBQUFjLGVBQU8sRUFBRUQsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREY7QUFPRDs7QUFHRCwrREFBZUQsUUFBZixFOzs7Ozs7Ozs7OztBQ2pCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydMKge8KgQnV0dG9uwqB9wqBmcm9twqAnYW50ZCdcclxuXHJcbmltcG9ydMKge1xyXG5CQVNJQ19URVhUX0NPTE9SLFxyXG5QUklNQVJZX0JBQ0tHUk9VTkRfQ09MT1IsXHJcblBSSU1BUllfVEVYVF9DT0xPUixcclxuU0VDT05EQVJZX0JBQ0tHUk9VTkRfQ09MT1IsXHJcblNFQ09OREFSWV9URVhUX0NPTE9SLFxyXG5UQUJMRVRfTUlOX1dJRFRIXHJcbn3CoGZyb23CoCcuLi8uLi9tb2RlbHMvY29uc3RhbnRzJ1xyXG5cclxuaW1wb3J0wqBzdHlsZWTCoGZyb23CoCdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydMKgY29uc3TCoFN0eWxlZEJ1dHRvbsKgPcKgc3R5bGVkKEJ1dHRvbilgXHJcbm1hcmdpbjrCoDFyZW3CoDA7XHJcbnBhZGRpbmc6wqAwLjhyZW07XHJcbmhlaWdodDrCoGF1dG87XHJcbmJvcmRlci1yYWRpdXM6wqAwLjNyZW07XHJcbmZvbnQtc2l6ZTrCoDFyZW07XHJcbmZvbnQtd2VpZ2h0OsKgNTAwO1xyXG5cclxuYFxyXG5cclxuZXhwb3J0wqBjb25zdMKgUHJpbWFyeUJ1dHRvbsKgPcKgc3R5bGVkKFN0eWxlZEJ1dHRvbilgXHJcbmJhY2tncm91bmQ6wqAke1BSSU1BUllfQkFDS0dST1VORF9DT0xPUn07XHJcbmJvcmRlcjrCoDFweMKgc29saWTCoCR7UFJJTUFSWV9CQUNLR1JPVU5EX0NPTE9SfTtcclxuY29sb3I6wqAke0JBU0lDX1RFWFRfQ09MT1J9O1xyXG5cclxuOmZvY3VzwqB7XHJcbmJhY2tncm91bmQ6wqAke1BSSU1BUllfQkFDS0dST1VORF9DT0xPUn07XHJcbmJvcmRlci1jb2xvcjrCoCR7UFJJTUFSWV9CQUNLR1JPVU5EX0NPTE9SfTtcclxuY29sb3I6wqAke0JBU0lDX1RFWFRfQ09MT1J9O1xyXG59XHJcblxyXG46YWN0aXZlLFxyXG5cclxuOmhvdmVywqB7XHJcbmJhY2tncm91bmQ6wqAjZmZmO1xyXG5ib3JkZXItY29sb3I6wqAke1BSSU1BUllfVEVYVF9DT0xPUn07XHJcbmNvbG9yOsKgJHtQUklNQVJZX1RFWFRfQ09MT1J9O1xyXG59XHJcblxyXG5gXHJcblxyXG5leHBvcnTCoGNvbnN0wqBTZWNvbmRhcnlCdXR0b27CoD3CoHN0eWxlZChTdHlsZWRCdXR0b24pYFxyXG5iYWNrZ3JvdW5kOsKgJHtTRUNPTkRBUllfQkFDS0dST1VORF9DT0xPUn07XHJcbmJvcmRlcjrCoDFweMKgc29saWTCoCR7U0VDT05EQVJZX0JBQ0tHUk9VTkRfQ09MT1J9O1xyXG5jb2xvcjrCoCR7QkFTSUNfVEVYVF9DT0xPUn07XHJcblxyXG46Zm9jdXPCoHtcclxuYmFja2dyb3VuZDrCoCR7U0VDT05EQVJZX0JBQ0tHUk9VTkRfQ09MT1J9O1xyXG5ib3JkZXItY29sb3I6wqAke1NFQ09OREFSWV9CQUNLR1JPVU5EX0NPTE9SfTtcclxuY29sb3I6wqAke0JBU0lDX1RFWFRfQ09MT1J9O1xyXG59XHJcblxyXG46YWN0aXZlLFxyXG5cclxuOmhvdmVywqB7XHJcbmJhY2tncm91bmQ6wqAjZmZmO1xyXG5ib3JkZXItY29sb3I6wqAke1NFQ09OREFSWV9URVhUX0NPTE9SfTtcclxuY29sb3I6wqAke1NFQ09OREFSWV9URVhUX0NPTE9SfTtcclxufVxyXG5cclxuYFxyXG5cclxuZXhwb3J0wqBjb25zdMKgRml4ZWRCdXR0b27CoD3CoHN0eWxlZChQcmltYXJ5QnV0dG9uKWBcclxuXHJcbnBvc2l0aW9uOsKgZml4ZWTCoCFpbXBvcnRhbnQ7XHJcbmJvdHRvbTrCoDA7XHJcbnotaW5kZXg6wqAxO1xyXG53aWR0aDrCoGNhbGMoMTAwJcKgLcKgMXJlbSk7XHJcbm1heC13aWR0aDrCoCR7VEFCTEVUX01JTl9XSURUSH07XHJcbm1hcmdpbjrCoDAuNXJlbTtcclxuXHJcbmAiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIHVzZUdvdG9QYWdlKHVybCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgZ29Ub1BhZ2UgPXVzZUNhbGxiYWNrKFxyXG4gICAgICBlPT57XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCh1cmwpXHJcbiAgICAgIH0sXHJcbiAgICAgIFtyb3V0ZXIsdXJsXVxyXG4gIClcclxuXHJcbiAgICByZXR1cm4gZ29Ub1BhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlR290b1BhZ2U7IiwiZXhwb3J0wqBjb25zdMKgTU9CSUxFX01JTl9XSURUSMKgPcKgJzI4MHB4J1xyXG5leHBvcnTCoGNvbnN0wqBUQUJMRVRfTUlOX1dJRFRIwqA9wqAnNTYwcHgnXHJcbmV4cG9ydMKgY29uc3TCoERFU0tUT1BfTUlOX1dJRFRIwqA9wqAnMTAyNHB4J1xyXG5leHBvcnTCoGNvbnN0wqBUT1BfSEVBREVSX0hFSUdIVMKgPcKgJzMuNXJlbSdcclxuZXhwb3J0wqBjb25zdMKgSEVBREVSX0hFSUdIVMKgPcKgJzRyZW0nXHJcbmV4cG9ydMKgY29uc3TCoFBSSU1BUllfQkFDS0dST1VORF9DT0xPUsKgPcKgJyNGRkVBODAnXHJcbmV4cG9ydMKgY29uc3TCoFBSSU1BUllfVEVYVF9DT0xPUsKgPcKgJyNBRDkxMDAnXHJcbmV4cG9ydMKgY29uc3TCoFBSSU1BUllfQUNIUk9NQVRJQ19CQUNLR1JPVU5EX0NPTE9SwqA9wqAnJ1xyXG5leHBvcnTCoGNvbnN0wqBTRUNPTkRBUllfQkFDS0dST1VORF9DT0xPUsKgPcKgJyNGODYzNjMnXHJcbmV4cG9ydMKgY29uc3TCoFNFQ09OREFSWV9URVhUX0NPTE9SwqA9wqAnI0U3MEMwQydcclxuZXhwb3J0wqBjb25zdMKgU0VDT05EQVJZX0FDSFJPTUFUSUNfQ09MT1LCoD3CoCcnXHJcbmV4cG9ydMKgY29uc3TCoEJBU0lDX1RFWFRfQ09MT1LCoD3CoCcjMzMzMzMzJ1xyXG4iLCJpbXBvcnQge1N0eWxlZEJ1dHRvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9hdG9tcy9CdXR0b24nXHJcbmltcG9ydCB1c2VHb1RvUGFnZSBmcm9tICcuLi9ob29rcy91c2VHb3RvUGFnZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XHJcbiAgY29uc3QgZ29Ub1Rlc3RzUGFnZSA9IHVzZUdvVG9QYWdlKCcvdGVzdHMnKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGgxPlxyXG4gICAgPFN0eWxlZEJ1dHRvbiBvbmNsaWNrPXtnb1RvVGVzdHNQYWdlfT4g7Ius66as7YWM7Iqk7Yq4IOyLnOyekSA8L1N0eWxlZEJ1dHRvbj5cclxuICAgIDwvaDE+XHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9