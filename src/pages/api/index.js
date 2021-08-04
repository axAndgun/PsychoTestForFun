export const test =[
      {
      id: '1',
      questions : [
        {
          id: '1',

          name: '퇴근 후 홀로 치맥을 했다. 치킨이 남았다.',
          answers : [
            {id: '1', name: '옆집에 사는 잘생긴 오빠를 부른다.', value: 20},
            {id: '2', name: '치킨은 남지 않아요.', value: 5}

          ]
        },
        {
          id : '2',

          name: ' 다음 중 분리수거 대상은?',
          answers : [
            {id: '1', name: '알코올 쓰레기 영희', value: 5},
            {id: '2', name: '맥주 캔', value: 10}

          ]
        },
        {
          id : '3',

          name: '다음 중 분리수거 대상이 아닌 것은?',

          answers : [
            {id: '1', name: '치킨뼈', value: 20},
            {id: '2', name: '알코올 쓰레기 철수', value: 10}
          ]
        },
        {
          id : '4',
          name: '다음 중 세계 환경의 날은?',
          answers : [
            {id: '1', name: '6월 5일', value: 10},
            {id: '2', name: '6월 25일', value: 0}
          ]
        },
        {
          id : '5',
          name: '길을 가다 바닥에 버려진 소주병이 보인다.',
          answers : [
            {id: '1', name: '자주 가는 술집으로 간다.', value: 0},
            {id: '2', name: '분리 수거를 한다.', value: 10}
          ]
        },
        {
          id : '6',
          name: '당신의 룸메이트는 분리수거를 하고 있다. 당신은...',
          answers : [
            {id: '1', name: '못 본척한다.', value: 0},
            {id: '2', name: '도와준다.', value: 10}
          ]
        },
        {
          id : '7',
          name: '다음 중 쓰레기는 무엇일까요?',
          answers : [
            {id: '1', name: '길에서 침 뱉는 사람', value: 10},
            {id: '2', name: '길에 버려진 피자박스', value: 10}
          ]
        },

      ],
      results: [
        {
          id: '1',

          name: '쓰레기 분별력이 매우 우수합니다.',

          condition: (value) =>{
            return value>60
          },
          imageUrl: '/happiest.jpg',
          contents: '언니, 오빠 최고!'
        },
        {
          id: '2',
          name: '쓰레기 구분 능력이 우수합니다.',
          condition: (value) =>{
            return 60>=value>=40
          },
          imageUrl: '/happy.jpg',
          contents: '주인님 멋있어요!'
        },
        {
          id: '3',
          name: '쓰레기를 구분할 수 있는 안목을 기르세요.',
          condition: (value) =>{
            return 40>value>0
          },
          imageUrl: '/sad.jpg',

          contents: '주변 청소부터 시작하면 도움이 될 겁니다.'

        },
      ]
    }
  ]




