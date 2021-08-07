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
  questions: [{
    id: '1',
    name: '퇴근 후 홀로 치맥을 했다. 치킨이 남았다.',
    answers: [{
      id: '1',
      name: '옆집에 사는 잘생긴 오빠를 부른다.',
      value: 20
    }, {
      id: '2',
      name: '치킨은 남지 않아요.',
      value: 5
    }]
  }, {
    id: '2',
    name: ' 다음 중 분리수거 대상은?',
    answers: [{
      id: '1',
      name: '알코올 쓰레기 영희',
      value: 5
    }, {
      id: '2',
      name: '맥주 캔',
      value: 10
    }]
  }, {
    id: '3',
    name: '다음 중 분리수거 대상이 아닌 것은?',
    answers: [{
      id: '1',
      name: '치킨뼈',
      value: 20
    }, {
      id: '2',
      name: '알코올 쓰레기 철수',
      value: 10
    }]
  }, {
    id: '4',
    name: '다음 중 세계 환경의 날은?',
    answers: [{
      id: '1',
      name: '6월 5일',
      value: 10
    }, {
      id: '2',
      name: '6월 25일',
      value: 0
    }]
  }, {
    id: '5',
    name: '길을 가다 바닥에 버려진 소주병이 보인다.',
    answers: [{
      id: '1',
      name: '자주 가는 술집으로 간다.',
      value: 0
    }, {
      id: '2',
      name: '분리 수거를 한다.',
      value: 10
    }]
  }, {
    id: '6',
    name: '당신의 룸메이트는 분리수거를 하고 있다. 당신은...',
    answers: [{
      id: '1',
      name: '못 본척한다.',
      value: 0
    }, {
      id: '2',
      name: '도와준다.',
      value: 10
    }]
  }, {
    id: '7',
    name: '다음 중 쓰레기는 무엇일까요?',
    answers: [{
      id: '1',
      name: '길에서 침 뱉는 사람',
      value: 10
    }, {
      id: '2',
      name: '길에 버려진 피자박스',
      value: 10
    }]
  }],
  results: [{
    id: '1',
    name: '쓰레기 분별력이 매우 우수합니다.',
    condition: value => {
      return value > 60;
    },
    imageUrl: '/happiest.jpg',
    contents: '언니, 오빠 최고!'
  }, {
    id: '2',
    name: '쓰레기 구분 능력이 우수합니다.',
    condition: value => {
      return 60 >= value >= 40;
    },
    imageUrl: '/happy.jpg',
    contents: '주인님 멋있어요!'
  }, {
    id: '3',
    name: '쓰레기를 구분할 수 있는 안목을 기르세요.',
    condition: value => {
      return 40 > value > 0;
    },
    imageUrl: '/sad.jpg',
    contents: '주변 청소부터 시작하면 도움이 될 겁니다.'
  }]
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
    res.status(200).json({
      questions: vtest.questions,
      results: vtest.results
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL3BhZ2VzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL3BhZ2VzL2FwaS90ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRlc3QiLCJpZCIsInF1ZXN0aW9ucyIsIm5hbWUiLCJhbnN3ZXJzIiwidmFsdWUiLCJyZXN1bHRzIiwiY29uZGl0aW9uIiwiaW1hZ2VVcmwiLCJjb250ZW50cyIsIlRlc3RRdWVzdGlvbiIsInJlcSIsInJlcyIsInZ0ZXN0Iiwib2JqIiwiY29uc29sZSIsImxvZyIsInN0YXV0cyIsInNlbmQiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLElBQUksR0FBRSxDQUNiO0FBQ0FDLElBQUUsRUFBRSxHQURKO0FBRUFDLFdBQVMsRUFBRyxDQUNWO0FBQ0VELE1BQUUsRUFBRSxHQUROO0FBR0VFLFFBQUksRUFBRSwwQkFIUjtBQUlFQyxXQUFPLEVBQUcsQ0FDUjtBQUFDSCxRQUFFLEVBQUUsR0FBTDtBQUFVRSxVQUFJLEVBQUUscUJBQWhCO0FBQXVDRSxXQUFLLEVBQUU7QUFBOUMsS0FEUSxFQUVSO0FBQUNKLFFBQUUsRUFBRSxHQUFMO0FBQVVFLFVBQUksRUFBRSxhQUFoQjtBQUErQkUsV0FBSyxFQUFFO0FBQXRDLEtBRlE7QUFKWixHQURVLEVBV1Y7QUFDRUosTUFBRSxFQUFHLEdBRFA7QUFHRUUsUUFBSSxFQUFFLGlCQUhSO0FBSUVDLFdBQU8sRUFBRyxDQUNSO0FBQUNILFFBQUUsRUFBRSxHQUFMO0FBQVVFLFVBQUksRUFBRSxZQUFoQjtBQUE4QkUsV0FBSyxFQUFFO0FBQXJDLEtBRFEsRUFFUjtBQUFDSixRQUFFLEVBQUUsR0FBTDtBQUFVRSxVQUFJLEVBQUUsTUFBaEI7QUFBd0JFLFdBQUssRUFBRTtBQUEvQixLQUZRO0FBSlosR0FYVSxFQXFCVjtBQUNFSixNQUFFLEVBQUcsR0FEUDtBQUdFRSxRQUFJ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LENBQVlILEtBQUssR0FBQyxVQUFsQjs7QUFFQSxNQUFHLENBQUNBLEtBQUosRUFBVTtBQUNSRCxPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixJQUFyQjtBQUNELEdBRkQsTUFFSztBQUVITixPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDbEIsZUFBUyxFQUFHVyxLQUFLLENBQUNYLFNBQW5CO0FBQThCSSxhQUFPLEVBQUVPLEtBQUssQ0FBQ1A7QUFBN0MsS0FBckI7QUFFRDtBQUNGOztBQUVELCtEQUFlSSxZQUFmLEUiLCJmaWxlIjoicGFnZXMvYXBpL3Rlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGVzdCA9W1xyXG4gICAgICB7XHJcbiAgICAgIGlkOiAnMScsXHJcbiAgICAgIHF1ZXN0aW9ucyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEnLFxyXG5cclxuICAgICAgICAgIG5hbWU6ICfth7Tqt7wg7ZuEIO2ZgOuhnCDsuZjrp6XsnYQg7ZaI64ukLiDsuZjtgqjsnbQg64Ko7JWY64ukLicsXHJcbiAgICAgICAgICBhbnN3ZXJzIDogW1xyXG4gICAgICAgICAgICB7aWQ6ICcxJywgbmFtZTogJ+yYhuynkeyXkCDsgqzripQg7J6Y7IOd6ri0IOyYpOu5oOulvCDrtoDrpbjri6QuJywgdmFsdWU6IDIwfSxcclxuICAgICAgICAgICAge2lkOiAnMicsIG5hbWU6ICfsuZjtgqjsnYAg64Ko7KeAIOyViuyVhOyalC4nLCB2YWx1ZTogNX1cclxuXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZCA6ICcyJyxcclxuXHJcbiAgICAgICAgICBuYW1lOiAnIOuLpOydjCDspJEg67aE66as7IiY6rGwIOuMgOyDgeydgD8nLFxyXG4gICAgICAgICAgYW5zd2VycyA6IFtcclxuICAgICAgICAgICAge2lkOiAnMScsIG5hbWU6ICfslYzsvZTsmKwg7JOw66CI6riwIOyYge2drCcsIHZhbHVlOiA1fSxcclxuICAgICAgICAgICAge2lkOiAnMicsIG5hbWU6ICfrp6Xso7wg7LqUJywgdmFsdWU6IDEwfVxyXG5cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkIDogJzMnLFxyXG5cclxuICAgICAgICAgIG5hbWU6ICfri6TsnYwg7KSRIOu2hOumrOyImOqxsCDrjIDsg4HsnbQg7JWE64uMIOqyg+ydgD8nLFxyXG5cclxuICAgICAgICAgIGFuc3dlcnMgOiBbXHJcbiAgICAgICAgICAgIHtpZDogJzEnLCBuYW1lOiAn7LmY7YKo67yIJywgdmFsdWU6IDIwfSxcclxuICAgICAgICAgICAge2lkOiAnMicsIG5hbWU6ICfslYzsvZTsmKwg7JOw66CI6riwIOyyoOyImCcsIHZhbHVlOiAxMH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkIDogJzQnLFxyXG4gICAgICAgICAgbmFtZTogJ+uLpOydjCDspJEg7IS46rOEIO2ZmOqyveydmCDrgqDsnYA/JyxcclxuICAgICAgICAgIGFuc3dlcnMgOiBbXHJcbiAgICAgICAgICAgIHtpZDogJzEnLCBuYW1lOiAnNuyblCA17J28JywgdmFsdWU6IDEwfSxcclxuICAgICAgICAgICAge2lkOiAnMicsIG5hbWU6ICc27JuUIDI17J28JywgdmFsdWU6IDB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZCA6ICc1JyxcclxuICAgICAgICAgIG5hbWU6ICfquLjsnYQg6rCA64ukIOuwlOuLpeyXkCDrsoTroKTsp4Qg7IaM7KO867OR7J20IOuztOyduOuLpC4nLFxyXG4gICAgICAgICAgYW5zd2VycyA6IFtcclxuICAgICAgICAgICAge2lkOiAnMScsIG5hbWU6ICfsnpDso7wg6rCA64qUIOyIoOynkeycvOuhnCDqsITri6QuJywgdmFsdWU6IDB9LFxyXG4gICAgICAgICAgICB7aWQ6ICcyJywgbmFtZTogJ+u2hOumrCDsiJjqsbDrpbwg7ZWc64ukLicsIHZhbHVlOiAxMH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkIDogJzYnLFxyXG4gICAgICAgICAgbmFtZTogJ+uLueyLoOydmCDro7jrqZTsnbTtirjripQg67aE66as7IiY6rGw66W8IO2VmOqzoCDsnojri6QuIOuLueyLoOydgC4uLicsXHJcbiAgICAgICAgICBhbnN3ZXJzIDogW1xyXG4gICAgICAgICAgICB7aWQ6ICcxJywgbmFtZTogJ+uquyDrs7jsspntlZzri6QuJywgdmFsdWU6IDB9LFxyXG4gICAgICAgICAgICB7aWQ6ICcyJywgbmFtZTogJ+uPhOyZgOykgOuLpC4nLCB2YWx1ZTogMTB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZCA6ICc3JyxcclxuICAgICAgICAgIG5hbWU6ICfri6TsnYwg7KSRIOyTsOugiOq4sOuKlCDrrLTsl4fsnbzquYzsmpQ/JyxcclxuICAgICAgICAgIGFuc3dlcnMgOiBbXHJcbiAgICAgICAgICAgIHtpZDogJzEnLCBuYW1lOiAn6ri47JeQ7IScIOy5qCDrsYnripQg7IKs656MJywgdmFsdWU6IDEwfSxcclxuICAgICAgICAgICAge2lkOiAnMicsIG5hbWU6ICfquLjsl5Ag67KE66Ck7KeEIO2UvOyekOuwleyKpCcsIHZhbHVlOiAxMH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgXSxcclxuICAgICAgcmVzdWx0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMScsXHJcblxyXG4gICAgICAgICAgbmFtZTogJ+yTsOugiOq4sCDrtoTrs4TroKXsnbQg66ek7JqwIOyasOyImO2VqeuLiOuLpC4nLFxyXG5cclxuICAgICAgICAgIGNvbmRpdGlvbjogKHZhbHVlKSA9PntcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlPjYwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW1hZ2VVcmw6ICcvaGFwcGllc3QuanBnJyxcclxuICAgICAgICAgIGNvbnRlbnRzOiAn7Ja464uILCDsmKTruaAg7LWc6rOgISdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICBuYW1lOiAn7JOw66CI6riwIOq1rOu2hCDriqXroKXsnbQg7Jqw7IiY7ZWp64uI64ukLicsXHJcbiAgICAgICAgICBjb25kaXRpb246ICh2YWx1ZSkgPT57XHJcbiAgICAgICAgICAgIHJldHVybiA2MD49dmFsdWU+PTQwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW1hZ2VVcmw6ICcvaGFwcHkuanBnJyxcclxuICAgICAgICAgIGNvbnRlbnRzOiAn7KO87J2464uYIOupi+yeiOyWtOyalCEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgICAgbmFtZTogJ+yTsOugiOq4sOulvCDqtazrtoTtlaAg7IiYIOyeiOuKlCDslYjrqqnsnYQg6riw66W07IS47JqULicsXHJcbiAgICAgICAgICBjb25kaXRpb246ICh2YWx1ZSkgPT57XHJcbiAgICAgICAgICAgIHJldHVybiA0MD52YWx1ZT4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaW1hZ2VVcmw6ICcvc2FkLmpwZycsXHJcblxyXG4gICAgICAgICAgY29udGVudHM6ICfso7zrs4Ag7LKt7IaM67aA7YSwIOyLnOyeke2VmOuptCDrj4Tsm4DsnbQg65CgIOqygeuLiOuLpC4nXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge3Rlc3R9IGZyb20gJy4uLy4uL2FwaSdcclxuXHJcbmZ1bmN0aW9uIFRlc3RRdWVzdGlvbihyZXEscmVzKSB7XHJcbiAgICBjb25zdCB2dGVzdCA9IHRlc3QuZmluZCgob2JqKT0+b2JqLmlkPT09JzEnKVxyXG4gICAgY29uc29sZS5sb2codnRlc3QrXCI6IO2FjOyKpO2KuCDqsJ3ssrRcIilcclxuICAgIFxyXG4gICAgaWYoIXZ0ZXN0KXtcclxuICAgICAgcmVzLnN0YXV0cyg0MDApLnNlbmQobnVsbClcclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3F1ZXN0aW9ucyA6IHZ0ZXN0LnF1ZXN0aW9ucywgcmVzdWx0czogdnRlc3QucmVzdWx0c30pXHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBUZXN0UXVlc3Rpb247XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==