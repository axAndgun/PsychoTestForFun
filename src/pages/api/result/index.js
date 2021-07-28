import {test} from '../../api'

function Result(req,res) {
    const rtest = test.find((obj)=>obj.id==='1')
    console.log(rtest+": 결과 객체")
    
    if(!vtest){
      res.stauts(400).send(null)
    }else{
      res.status(200).json({results : rtest.results})
    }
  }
  
  export default Result;
  