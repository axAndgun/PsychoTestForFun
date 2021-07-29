import { GlobalContext } from '../_app'
import { useContext,useState } from 'react'
import useSwr from 'swr'
import {fetcher} from '../../utils/commons'
import Image from 'next/image'
import {focusInExpandFwd} from '../../styles/SpecialEffect'
import styled from 'styled-components'
import ClientSideLink from '../../components/atoms/ClientSideLink'

const LocationText = styled.h3`
    margin: 1rem;
    text-align: center;
    font-size: 20px;
`

const ResultTag = styled(LocationText)`
    font-weight: bold;
    font-size: 40px;
`


function TestResult() {
 const { data: test, error } = useSwr(`/api/test/`, fetcher)
//const { data: test, error } = useSwr(`/api/result/`, fetcher)

 const { values }  = useContext(GlobalContext)
//const resultIndex = test.results.findIndex((result)=>result.condition(values))
//const result = test.results[resultIndex] ?? test.results[0]
 
 const results = test.results
 //const [result,setResult] = useState(results[0]) //too much re-render error occurred.
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
      <ResultTag> 점수: {values} </ResultTag>
      <ResultTag>{result.name}</ResultTag>
      <LocationText>{result.contents}</LocationText>
      <a href="/"> 처음으로 </a>
    </>
  );
}

export default TestResult;

