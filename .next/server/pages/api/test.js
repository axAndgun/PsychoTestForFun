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
    name: '일개미 영희는 퇴근하고 집에서 치킨을 시켰어요. 치킨이 남았네요?',
    answers: [{
      id: '1',
      name: '옆집 근육개미 철수를 집으로 부른다.',
      value: -10
    }, {
      id: '2',
      name: '치킨뼈는 일반쓰레기에 버리고 고기는 먹어서 없앤다.',
      value: 10
    }]
  }, {
    id: '2',
    name: '오늘도 니코틴을 냠냠 먹은 영희. 영희의 담배 꽁초는 어디로 가야할까요?',
    answers: [{
      id: '1',
      name: '자연 속으로',
      value: -10
    }, {
      id: '2',
      name: '잘생긴 수거함 오빠에게',
      value: 10
    }]
  }, {
    id: '3',
    name: '벌컥벌컥. 키햐아아. 영희가 보리 물(?)을 마셔요. 이 초록캔 어떡하지?',
    answers: [{
      id: '1',
      name: '잘생긴 수퍼빈 회수로봇에게',
      value: 10
    }, {
      id: '2',
      name: '발로 사뿐히 밟아주어요',
      value: -10
    }]
  }, {
    id: '4',
    name: '영희는 오랜만에 모교를 찾아갔아요. 저 멀리 있는 하얗고 각진 건 뭐지?',
    answers: [{
      id: '1',
      name: '담탱이',
      value: -10
    }, {
      id: '2',
      name: '수퍼루키',
      value: 10
    }]
  }, {
    id: '5',
    name: '일개미 영희는 오늘도 치킨을 시켜먹었어요. 남은 치킨은?',
    answers: [{
      id: '1',
      name: '치킨은 남지 않아요.',
      value: 0
    }, {
      id: '2',
      name: '치킨은 남지 않아요.',
      value: 0
    }]
  }, {
    id: '6',
    name: '영희의 룸메이트 지숙이 분리수거를 하고 있네요. 영희는',
    answers: [{
      id: '1',
      name: '못 본척한다.',
      value: 10
    }, {
      id: '2',
      name: '도와준다.',
      value: -10
    }]
  }, {
    id: '7',
    name: '다음 중 쓰레기는 무엇일까요?',
    answers: [{
      id: '1',
      name: '술에 떡이 된 영희',
      value: 10
    }, {
      id: '2',
      name: '치킨뼈',
      value: 10
    }]
  }, {
    id: '8',
    name: '다음 중 분리수거 해야하는 것은 무엇일까요?',
    answers: [{
      id: '1',
      name: '라떼는 말이야...',
      value: 10
    }, {
      id: '2',
      name: '투명 생수병',
      value: 10
    }]
  }],
  results: [{
    id: '1',
    name: '인류의 미래는 당신 손에!!!',
    condition: value => {
      return value > 60;
    },
    imageUrl: '/happiest.jpg',
    contents: '수퍼빈과 함께 깨끗한 미래를 만들어 갈 주인공은 바로 당신!'
  }, {
    id: '2',
    name: '주인님이 최고에요.',
    condition: value => {
      return 60 >= value >= 40;
    },
    imageUrl: '/happy.jpg',
    contents: '강아지도 웃는 세상을 만드는 당신! 훌륭하오!'
  }, {
    id: '3',
    name: '저런, 몽키 하우스에 오신 걸 환..영합니다...',
    condition: value => {
      return 40 > value > 0;
    },
    imageUrl: '/sad.jpg',
    contents: '세상을 바꾸기 전 주변 청소부터 좀 해야겠네요...'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL3BhZ2VzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3ljaG90ZXN0Ly4vc3JjL3BhZ2VzL2FwaS90ZXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInRlc3QiLCJpZCIsInF1ZXN0aW9ucyIsIm5hbWUiLCJhbnN3ZXJzIiwidmFsdWUiLCJyZXN1bHRzIiwiY29uZGl0aW9uIiwiaW1hZ2VVcmwiLCJjb250ZW50cyIsIlRlc3RRdWVzdGlvbiIsInJlcSIsInJlcyIsInZ0ZXN0Iiwib2JqIiwiY29uc29sZSIsImxvZyIsInN0YXV0cyIsInNlbmQiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLElBQUksR0FBRSxDQUNiO0FBQ0FDLElBQUUsRUFBRSxHQURKO0FBRUFDLFdBQVMsRUFBRyxDQUNWO0FBQ0VELE1BQUUsRUFBRSxHQUROO0FBRUVFLFFBQUksRUFBRSxzQ0FGUjtBQUdFQyxXQUFPLEVBQUcsQ0FDUjtBQUFDSCxRQUFFLEVBQUUsR0FBTDtBQUFVRSxVQUFJLEVBQUUsc0JBQWhCO0FBQXdDRSxXQUFLLEVBQUUsQ0FBQztBQUFoRCxLQURRLEVBRVI7QUFBQ0osUUFBRSxFQUFFLEdBQUw7QUFBVUUsVUFBSSxFQUFFLDhCQUFoQjtBQUFnREUsV0FBSyxFQUFFO0FBQXZELEtBRlE7QUFIWixHQURVLEVBU1Y7QUFDRUosTUFBRSxFQUFHLEdBRFA7QUFFRUUsUUFBSSxFQUFFLDBDQUZSO0FBR0VDLFdBQU8sRUFBRyxDQUNSO0FBQUNILFFBQUUsRUFBRSxHQUFMO0FBQVVFLFVBQUksRUFBRSxRQUFoQjtBQUEwQkUsV0FBSyxFQUFFLENBQUM7QUFBbEMsS0FEUSxFQUVSO0FBQUNKLFFBQUUsRUFBRSxHQUFMO0FBQVVFLFVBQUksRUFBRSxjQUFoQjtBQUFnQ0UsV0FBSyxFQUFFO0FBQXZDLEtBRlE7QUFIWixHQVRVLEVBaUJWO0FBQ0VKLE1BQUUsRUFBRyxHQURQ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LEdBQVMsQ0FBaEI7QUFDRCxLQUxIO0FBTUVHLFlBQVEsRUFBRSxVQU5aO0FBT0VDLFlBQVEsRUFBRTtBQVBaLEdBbkJPO0FBcEVULENBRGEsQ0FBWixDOzs7Ozs7Ozs7Ozs7O0FDQVA7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsR0FBdEIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQzNCLFFBQU1DLEtBQUssR0FBR2IsMkNBQUEsQ0FBV2MsR0FBRCxJQUFPQSxHQUFHLENBQUNiLEVBQUosS0FBUyxHQUExQixDQUFkO0FBQ0FjLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLEdBQUMsVUFBbEI7O0FBRUEsTUFBRyxDQUFDQSxLQUFKLEVBQVU7QUFDUkQsT0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckI7QUFDRCxHQUZELE1BRUs7QUFDSE4sT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ2xCLGVBQVMsRUFBR1csS0FBSyxDQUFDWCxTQUFuQjtBQUE4QkksYUFBTyxFQUFFTyxLQUFLLENBQUNQO0FBQTdDLEtBQXJCO0FBQ0Q7QUFDRjs7QUFFRCwrREFBZUksWUFBZixFIiwiZmlsZSI6InBhZ2VzL2FwaS90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlc3QgPVtcbiAgICAgIHtcbiAgICAgIGlkOiAnMScsXG4gICAgICBxdWVzdGlvbnMgOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJzEnLFxuICAgICAgICAgIG5hbWU6ICfsnbzqsJzrr7gg7JiB7Z2s64qUIO2HtOq3vO2VmOqzoCDsp5Hsl5DshJwg7LmY7YKo7J2EIOyLnOy8sOyWtOyalC4g7LmY7YKo7J20IOuCqOyVmOuEpOyalD8nLFxuICAgICAgICAgIGFuc3dlcnMgOiBbXG4gICAgICAgICAgICB7aWQ6ICcxJywgbmFtZTogJ+yYhuynkSDqt7zsnKHqsJzrr7gg7LKg7IiY66W8IOynkeycvOuhnCDrtoDrpbjri6QuJywgdmFsdWU6IC0xMH0sXG4gICAgICAgICAgICB7aWQ6ICcyJywgbmFtZTogJ+y5mO2CqOu8iOuKlCDsnbzrsJjsk7DroIjquLDsl5Ag67KE66as6rOgIOqzoOq4sOuKlCDrqLnslrTshJwg7JeG7JWk64ukLicsIHZhbHVlOiAxMH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZCA6ICcyJyxcbiAgICAgICAgICBuYW1lOiAn7Jik64qY64+EIOuLiOy9lO2LtOydhCDrg6Drg6Ag66i57J2AIOyYge2drC4g7JiB7Z2s7J2YIOuLtOuwsCDqvYHstIjripQg7Ja065SU66GcIOqwgOyVvO2VoOq5jOyalD8nLFxuICAgICAgICAgIGFuc3dlcnMgOiBbXG4gICAgICAgICAgICB7aWQ6ICcxJywgbmFtZTogJ+yekOyXsCDsho3snLzroZwnLCB2YWx1ZTogLTEwfSxcbiAgICAgICAgICAgIHtpZDogJzInLCBuYW1lOiAn7J6Y7IOd6ri0IOyImOqxsO2VqCDsmKTruaDsl5DqsownLCB2YWx1ZTogMTB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQgOiAnMycsXG4gICAgICAgICAgbmFtZTogJ+uyjOy7peuyjOy7pS4g7YKk7ZaQ7JWE7JWELiDsmIHtnazqsIAg67O066asIOusvCg/KeydhCDrp4jshZTsmpQuIOydtCDstIjroZ3supQg7Ja065ah7ZWY7KeAPycsXG4gICAgICAgICAgYW5zd2VycyA6IFtcbiAgICAgICAgICAgIHtpZDogJzEnLCBuYW1lOiAn7J6Y7IOd6ri0IOyImO2NvOu5iCDtmozsiJjroZzrtIfsl5DqsownLCB2YWx1ZTogMTB9LFxuICAgICAgICAgICAge2lkOiAnMicsIG5hbWU6ICfrsJzroZwg7IKs67+Q7Z6IIOuwn+yVhOyjvOyWtOyalCcsIHZhbHVlOiAtMTB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQgOiAnNCcsXG4gICAgICAgICAgbmFtZTogJ+yYge2drOuKlCDsmKTrnpzrp4zsl5Ag66qo6rWQ66W8IOywvuyVhOqwlOyVhOyalC4g7KCAIOupgOumrCDsnojripQg7ZWY7JaX6rOgIOqwgeynhCDqsbQg662Q7KeAPycsXG4gICAgICAgICAgYW5zd2VycyA6IFtcbiAgICAgICAgICAgIHtpZDogJzEnLCBuYW1lOiAn64u07YOx7J20JywgdmFsdWU6IC0xMH0sXG4gICAgICAgICAgICB7aWQ6ICcyJywgbmFtZTogJ+yImO2NvOujqO2CpCcsIHZhbHVlOiAxMH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZCA6ICc1JyxcbiAgICAgICAgICBuYW1lOiAn7J286rCc66+4IOyYge2drOuKlCDsmKTripjrj4Qg7LmY7YKo7J2EIOyLnOy8nOuoueyXiOyWtOyalC4g64Ko7J2AIOy5mO2CqOydgD8nLFxuICAgICAgICAgIGFuc3dlcnMgOiBbXG4gICAgICAgICAgICB7aWQ6ICcxJywgbmFtZTogJ+y5mO2CqOydgCDrgqjsp4Ag7JWK7JWE7JqULicsIHZhbHVlOiAwfSxcbiAgICAgICAgICAgIHtpZDogJzInLCBuYW1lOiAn7LmY7YKo7J2AIOuCqOyngCDslYrslYTsmpQuJywgdmFsdWU6IDB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQgOiAnNicsXG4gICAgICAgICAgbmFtZTogJ+yYge2drOydmCDro7jrqZTsnbTtirgg7KeA7IiZ7J20IOu2hOumrOyImOqxsOulvCDtlZjqs6Ag7J6I64Sk7JqULiDsmIHtnazripQnLFxuICAgICAgICAgIGFuc3dlcnMgOiBbXG4gICAgICAgICAgICB7aWQ6ICcxJywgbmFtZTogJ+uquyDrs7jsspntlZzri6QuJywgdmFsdWU6IDEwfSxcbiAgICAgICAgICAgIHtpZDogJzInLCBuYW1lOiAn64+E7JmA7KSA64ukLicsIHZhbHVlOiAtMTB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQgOiAnNycsXG4gICAgICAgICAgbmFtZTogJ+uLpOydjCDspJEg7JOw66CI6riw64qUIOustOyXh+ydvOq5jOyalD8nLFxuICAgICAgICAgIGFuc3dlcnMgOiBbXG4gICAgICAgICAgICB7aWQ6ICcxJywgbmFtZTogJ+yIoOyXkCDrlqHsnbQg65CcIOyYge2drCcsIHZhbHVlOiAxMH0sXG4gICAgICAgICAgICB7aWQ6ICcyJywgbmFtZTogJ+y5mO2CqOu8iCcsIHZhbHVlOiAxMH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZCA6ICc4JyxcbiAgICAgICAgICBuYW1lOiAn64uk7J2MIOykkSDrtoTrpqzsiJjqsbAg7ZW07JW87ZWY64qUIOqyg+ydgCDrrLTsl4fsnbzquYzsmpQ/JyxcbiAgICAgICAgICBhbnN3ZXJzIDogW1xuICAgICAgICAgICAge2lkOiAnMScsIG5hbWU6ICfrnbzrlrzripQg66eQ7J207JW8Li4uJywgdmFsdWU6IDEwfSxcbiAgICAgICAgICAgIHtpZDogJzInLCBuYW1lOiAn7Yis66qFIOyDneyImOuzkScsIHZhbHVlOiAxMH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmVzdWx0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgICBuYW1lOiAn7J2466WY7J2YIOuvuOuemOuKlCDri7nsi6Ag7IaQ7JeQISEhJyxcbiAgICAgICAgICBjb25kaXRpb246ICh2YWx1ZSkgPT57XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU+NjBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGltYWdlVXJsOiAnL2hhcHBpZXN0LmpwZycsXG4gICAgICAgICAgY29udGVudHM6ICfsiJjtjbzruYjqs7wg7ZWo6ruYIOq5qOuBl+2VnCDrr7jrnpjrpbwg66eM65Ok7Ja0IOqwiCDso7zsnbjqs7XsnYAg67CU66GcIOuLueyLoCEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgIG5hbWU6ICfso7zsnbjri5jsnbQg7LWc6rOg7JeQ7JqULicsXG4gICAgICAgICAgY29uZGl0aW9uOiAodmFsdWUpID0+e1xuICAgICAgICAgICAgcmV0dXJuIDYwPj12YWx1ZT49NDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGltYWdlVXJsOiAnL2hhcHB5LmpwZycsXG4gICAgICAgICAgY29udGVudHM6ICfqsJXslYTsp4Drj4Qg7JuD64qUIOyEuOyDgeydhCDrp4zrk5zripQg64u57IugISDtm4zrpa3tlZjsmKQhJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICBuYW1lOiAn7KCA65+wLCDrqr3tgqQg7ZWY7Jqw7Iqk7JeQIOyYpOyLoCDqsbgg7ZmYLi7smIHtlanri4jri6QuLi4nLFxuICAgICAgICAgIGNvbmRpdGlvbjogKHZhbHVlKSA9PntcbiAgICAgICAgICAgIHJldHVybiA0MD52YWx1ZT4wXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbWFnZVVybDogJy9zYWQuanBnJyxcbiAgICAgICAgICBjb250ZW50czogJ+yEuOyDgeydhCDrsJTqvrjquLAg7KCEIOyjvOuzgCDssq3shozrtoDthLAg7KKAIO2VtOyVvOqyoOuEpOyalC4uLidcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gIF1cblxuXG5cblxuIiwiaW1wb3J0IHt0ZXN0fSBmcm9tICcuLi8uLi9hcGknXG5cbmZ1bmN0aW9uIFRlc3RRdWVzdGlvbihyZXEscmVzKSB7XG4gICAgY29uc3QgdnRlc3QgPSB0ZXN0LmZpbmQoKG9iaik9Pm9iai5pZD09PScxJylcbiAgICBjb25zb2xlLmxvZyh2dGVzdCtcIjog7YWM7Iqk7Yq4IOqwneyytFwiKVxuICAgIFxuICAgIGlmKCF2dGVzdCl7XG4gICAgICByZXMuc3RhdXRzKDQwMCkuc2VuZChudWxsKVxuICAgIH1lbHNle1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3F1ZXN0aW9ucyA6IHZ0ZXN0LnF1ZXN0aW9ucywgcmVzdWx0czogdnRlc3QucmVzdWx0c30pXG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBUZXN0UXVlc3Rpb247XG4gICJdLCJzb3VyY2VSb290IjoiIn0=