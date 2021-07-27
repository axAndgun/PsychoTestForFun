import {test} from '../../api'

function TestQuestion(req,res) {
    const vtest = test.find((obj)=>obj.id==='1')
    console.log(vtest+": 테스트 객체")
    
    if(!vtest){
      res.stauts(400).send(null)
    }else{
     // res.status(200).json({id: test.id, questions: test.questions})
      res.status(200).json({id: vtest.id, name: vtest.name})
    }
  }
  
  export default TestQuestion;
  