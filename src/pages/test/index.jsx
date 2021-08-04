import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import BinaryQuestionAnswer from '../../components/BinaryQuestionAnswer'
import styled from 'styled-components'
import { createContext } from "react";
import useSwr from 'swr'
import {fetcher} from '../../utils/commons'
import { GlobalContext } from '../_app'

import Image from 'next/image'
import Timer from '../../components/Timer'
import { FlexContainerAlignCenter } from '../../styles/FlexContainer';


export const LeftAnswers = styled.div`
    font-weight: bold;
    font-size: 20;
`

const FlexContainerColumnForImg = styled.div`
    //display: inline-block;
    //display: flex;
    flex-flow: nowrap;
  
    
`


function TestPage() {

const { values, setValues } = useContext(GlobalContext)
const [ questionNumber, setQuestionNumber ] = useState(0)
const router = useRouter()

const { data: test, error } = useSwr(`/api/test/`, fetcher)
const isTestLoading = !test && ! error 

if (isTestLoading){
    return (
        <>
        로딩중...
        </>
    )
}

if(!test){
    return(
        <>
        test가 존재하지 않습니다. 
        </>
    )
}

const questions = test.questions
const question = questions[questionNumber]

if(!question){
    router.push(`/test/result`)
    return (
        <>
        결과 로딩중...
        </>
        )
}

const answers = question.answers

const onNextPage = (answerValues) =>{
            console.log("온다다온다")
        setValues(values+answerValues)

        if(questionNumber>=questions.length-1){
            router.push(`/test/result`)

        }     
            console.log(values+answerValues)
            console.log(values)
        setQuestionNumber((prev) => prev + 1)
}

    return (
        <>

        <FlexContainerColumnForImg>
        <Image src="/dustbin.png" alt="main-image" width="120" height="30" objectFit="cover" />
        </FlexContainerColumnForImg>
        <BinaryQuestionAnswer number={question.id} question={question.name} answers={answers} onNextPage={onNextPage}/>
        <Timer onTimeout={()=>router.push(`/test/timeout`)} seconds = {20}/>
        <LeftAnswers>남은 문제: {questions.length - question.id}</LeftAnswers> 

        </>
    )
}

export default TestPage

/*시간초과 후 '처음으로' 를 눌렀을 때 결과가 리셋되지 않음 --> link 대신 a tag를 사용하여 해결*/
// 버그 : 버튼 안에 글자가 세로로 출력됨. 