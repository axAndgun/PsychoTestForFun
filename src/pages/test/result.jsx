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

const RsesultTag = styled(LocationText)`
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
   //setResult(results[0])
   result =results[0]
 }else if(values>=40&&values<60){
   //setResult(results[1])
   result =results[1]
 }else{
  // setResult(results[2]) 
  result =results[2]
}

  return (
    <>
      <Image src ={result.imageUrl} height ="200" width="200" alt="result-image" objectFit="cover"/> 
      <RsesultTag>{result.name}</RsesultTag>
      <LocationText>{result.contents}</LocationText>
      <ClientSideLink href="/"> 처음으로 </ClientSideLink>
    </>
  );
}

export default TestResult;

