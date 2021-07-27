(function() {
var exports = {};
exports.id = "pages/api/test";
exports.ids = ["pages/api/test"];
exports.modules = {

/***/ "./src/pages/api/index.js":
/*!********************************!*\
  !*** ./src/pages/api/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test": function() { return /* binding */ test; }
/* harmony export */ });
const test = [{
  id: '1',
  name: '삶이란 건'
}, {
  id: '2',
  name: '인생이란 건'
}];

/***/ }),

/***/ "./src/pages/api/test/index.js":
/*!*************************************!*\
  !*** ./src/pages/api/test/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./src/pages/api/index.js");


function TestQuestion(req, res) {
  const vtest = _api__WEBPACK_IMPORTED_MODULE_0__.test.find(obj => obj.id === '1');
  console.log(vtest + ": 테스트 객체");

  if (!vtest) {
    res.stauts(400).send(null);
  } else {
    // res.status(200).json({id: test.id, questions: test.questions})
    res.status(200).json({
      id: vtest.id,
      name: vtest.name
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TestQuestion);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/test/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL3BhZ2VzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL3BhZ2VzL2FwaS90ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRlc3QiLCJpZCIsIm5hbWUiLCJUZXN0UXVlc3Rpb24iLCJyZXEiLCJyZXMiLCJ2dGVzdCIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJzdGF1dHMiLCJzZW5kIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxJQUFJLEdBQUUsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsR0FETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURXLEVBS1g7QUFDRUQsSUFBRSxFQUFHLEdBRFA7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FMVyxDQUFaLEM7Ozs7Ozs7Ozs7Ozs7QUNBUDs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDM0IsUUFBTUMsS0FBSyxHQUFHTiwyQ0FBQSxDQUFXTyxHQUFELElBQU9BLEdBQUcsQ0FBQ04sRUFBSixLQUFTLEdBQTFCLENBQWQ7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQUssR0FBQyxVQUFsQjs7QUFFQSxNQUFHLENBQUNBLEtBQUosRUFBVTtBQUNSRCxPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixJQUFyQjtBQUNELEdBRkQsTUFFSztBQUNKO0FBQ0NOLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNaLFFBQUUsRUFBRUssS0FBSyxDQUFDTCxFQUFYO0FBQWVDLFVBQUksRUFBRUksS0FBSyxDQUFDSjtBQUEzQixLQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsK0RBQWVDLFlBQWYsRSIsImZpbGUiOiJwYWdlcy9hcGkvdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0ZXN0ID1bXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgIG5hbWU6ICfsgrbsnbTrnoAg6rG0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQgOiAnMicsXHJcbiAgICAgICAgICBuYW1lOiAn7J247IOd7J20656AIOqxtCdcclxuICAgICAgICB9XHJcbl1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge3Rlc3R9IGZyb20gJy4uLy4uL2FwaSdcclxuXHJcbmZ1bmN0aW9uIFRlc3RRdWVzdGlvbihyZXEscmVzKSB7XHJcbiAgICBjb25zdCB2dGVzdCA9IHRlc3QuZmluZCgob2JqKT0+b2JqLmlkPT09JzEnKVxyXG4gICAgY29uc29sZS5sb2codnRlc3QrXCI6IO2FjOyKpO2KuCDqsJ3ssrRcIilcclxuICAgIFxyXG4gICAgaWYoIXZ0ZXN0KXtcclxuICAgICAgcmVzLnN0YXV0cyg0MDApLnNlbmQobnVsbClcclxuICAgIH1lbHNle1xyXG4gICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtpZDogdGVzdC5pZCwgcXVlc3Rpb25zOiB0ZXN0LnF1ZXN0aW9uc30pXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtpZDogdnRlc3QuaWQsIG5hbWU6IHZ0ZXN0Lm5hbWV9KVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBUZXN0UXVlc3Rpb247XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==