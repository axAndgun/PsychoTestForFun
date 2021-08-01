import { GlobalContext } from '../_app'
import { useContext } from 'react'
import useSwr from 'swr'
import {fetcher} from '../../utils/commons'
import Image from 'next/image'
import styled from 'styled-components'
import {FlexContainerAlignCenter} from '../../styles/FlexContainer'
//import { fadeIn } from '../../styles/SpecialEffect'
//import { test } from '../../models/BinaryQuestionResults'


const FadeIn=styled.div`

@keyframes fadeIn{
  0% {
      opacity:0;
  }
  35% {
      opacity:1;
  }
  70% {
      opacity:0;
  }
  100% {
      opacity:1;
  }
}

  animation-name: fadeIn; //이게 있어야 됩니다.
  animation-duration:2s;
  animation-duration: leaner;
  animation-iteration-count:3;
  animation-direction:alternate;
  animation-fill-mode: forwards;  

`

const FlexContainerColumnCenter = styled(FlexContainerAlignCenter)`
    flex-flow: column nowrap;
    text-align: center;
    margin: 1rem 0;
  `
  
const FlexContainerColumnCenterBold = styled(FlexContainerColumnCenter)`
    font-weight: bold;
   
 @media screen and (max-width:1200px) { 
      font-size: 35px;
     
   }

@media screen and (max-width:768px) {  
    font-size: 45px;
     
}
@media screen and (max-width:480px) {  
      font-size: 26px;
     
 }
`

function TestResult() {
 const { data: test, error } = useSwr(`/api/test/`, fetcher) //빌드시 undefined 에러 발생!!! 
//const { data: test, error } = useSwr(`/api/result/`, fetcher) 

const isTestLoading = !test && ! error 

if (isTestLoading){  // 이 코드를 추가하니 undefined 에러가 해결되었다. 
    return (
        <>
        로딩중...
        </>
    )
}





 const { values }  = useContext(GlobalContext)
//const resultIndex = test.results.findIndex((result)=>result.condition(values))
//const result = test.results[resultIndex] ?? test.results[0]
 
 const results = test.results //빌드시 undefined 에러 발생!!! (해결책 line num: 27 --> isTestLoading)
 
 let result =results[0]// let 재할당

 if(values>=60){
   result =results[0]
 }else if(values>=40&&values<60){
   result =results[1]
 }else{
  result =results[2]
}

  return (
    <>
      <Image src ={result.imageUrl} height ="200" width="200" alt="result-image" objectFit="cover"/> 
      <FlexContainerColumnCenterBold>{result.name}</FlexContainerColumnCenterBold>
      <FlexContainerColumnCenter><FadeIn>{result.contents}</FadeIn></FlexContainerColumnCenter>
      <br></br>
      <a href="/"> 처음으로 </a>
    </>
  );
}

export default TestResult;

