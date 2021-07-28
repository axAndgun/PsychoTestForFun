import {test} from '../../api'

function TestQuestion(req,res) {
    const vtest = test.find((obj)=>obj.id==='1')
    console.log(vtest+": 테스트 객체")
    
    if(!vtest){
      res.stauts(400).send(null)
    }else{
      res.status(200).json({questions : vtest.questions, results: vtest.results})
    }
  }
  
  export default TestQuestion;
  