export const test =[
      {
      id: '1',
      questions : [
        {
          id: '1',

          name: '일개미 영희는 퇴근하고 집에서 치킨을 시켰어요. 치킨이 남았네요?',
          answers : [
            {id: '1', name: '옆집 근육개미 철수를 집으로 부른다.', value: -10},
            {id: '2', name: '치킨뼈는 일반쓰레기에 버리고 고기는 먹어서 없앤다.', value: 10}

          ]
        },
        {
          id : '2',

          name: '오늘도 니코틴을 냠냠 먹은 영희. 영희의 담배 꽁초는 어디로 가야할까요?',
          answers : [
            {id: '1', name: '자연 속으로', value: -10},
            {id: '2', name: '잘생긴 수거함 오빠에게', value: 10}

          ]
        },
        {
          id : '3',

          name: '벌컥벌컥. 키햐아아. 영희가 보리 물(?)을 마셔요. 이 초록캔 어떡하지?',
          answers : [
            {id: '1', name: '잘생긴 수퍼빈 회수로봇에게', value: 10},
            {id: '2', name: '발로 사뿐히 밟아주어요', value: -10}
          ]
        },
        {
          id : '4',
          name: '영희는 오랜만에 모교를 찾아갔아요. 저 멀리 있는 하얗고 각진 건 뭐지?',
          answers : [
            {id: '1', name: '담탱이', value: -10},
            {id: '2', name: '수퍼루키', value: 10}
          ]
        },
        {
          id : '5',
          name: '일개미 영희는 오늘도 치킨을 시켜먹었어요. 남은 치킨은?',
          answers : [
            {id: '1', name: '치킨은 남지 않아요.', value: 0},
            {id: '2', name: '치킨은 남지 않아요.', value: 0}
          ]
        },
        {
          id : '6',
          name: '영희의 룸메이트 지숙이 분리수거를 하고 있네요. 영희는',
          answers : [
            {id: '1', name: '못 본척한다.', value: 10},
            {id: '2', name: '도와준다.', value: -10}
          ]
        },
        {
          id : '7',
          name: '다음 중 쓰레기는 무엇일까요?',
          answers : [
            {id: '1', name: '술에 떡이 된 영희', value: 10},
            {id: '2', name: '치킨뼈', value: 10}
          ]
        },
        {
          id : '8',
          name: '다음 중 분리수거 해야하는 것은 무엇일까요?',
          answers : [
            {id: '1', name: '라떼는 말이야...', value: 10},
            {id: '2', name: '투명 생수병', value: 10}
          ]
        },

      ],
      results: [
        {
          id: '1',

          name: '인류의 미래는 당신 손에!!!',
          condition: (value) =>{
            return value>60
          },
          imageUrl: '/happiest.jpg',
          contents: '수퍼빈과 함께 깨끗한 미래를 만들어 갈 주인공은 바로 당신!'
        },
        {
          id: '2',
          name: '주인님이 최고에요.',
          condition: (value) =>{
            return 60>=value>=40
          },
          imageUrl: '/happy.jpg',
          contents: '강아지도 웃는 세상을 만드는 당신! 훌륭하오!'
        },
        {
          id: '3',
          name: '저런, 몽키 하우스에 오신 걸 환..영합니다...',
          condition: (value) =>{
            return 40>value>0
          },
          imageUrl: '/sad.jpg',
          contents: '세상을 바꾸기 전 주변 청소부터 좀 해야겠네요...'

        },
      ]
    }
  ]




