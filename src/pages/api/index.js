export const test =[
      {
      id: '1',
      questions : [
        {
          id: '1',
          name: '삶은',
          answers : [
            {id: '1', name: '계란', value: 10},
            {id: '2', name: '예술', value: 10}
          ]
        },
        {
          id : '2',
          name: '인생은',
          answers : [
            {id: '1', name: '하..', value: 20},
            {id: '2', name: '하하', value: 20}
          ]
        },
        {
          id : '3',
          name: '그대의',
          answers : [
            {id: '1', name: '연예인이 되어.', value: 10},
            {id: '2', name: '짐', value: 10}
          ]
        }
      ],
      results: [
        {
          id: '1',
          name: '돌아이',
          condition: (value) =>{
            return value>=80
          },
          imageUrl: '',
          contents: '당신은 미쳤습니다.'
        },
        {
          id: '2',
          name: '정상인',
          condition: (value) =>{
            return value>=50
          },
          imageUrl: '',
          contents: '당신도 미쳤습니다.'
        },
        {
          id: '1',
          name: '나약인',
          condition: (value) =>{
            return value>=20
          },
          imageUrl: '',
          contents: '당신은 아픕니다.'
        },
      ]
    }
  ]





