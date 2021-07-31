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
    display: inline-block;
    flex-flow: wrap;
   
 
    
`


function TestPage() {

const { values, setValues } = useContext(GlobalContext)
const [questionNumber, setQuestionNumber] = useState(0)
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
const [answer1, answer2] =answers
// const answer1 = answers[0]
// const answer2 = answers[1]
const answername1 = answer1.name
const answername2 = answer2.name
const answervalue1 = answer1.value
const answervalue2 = answer2.value





function updateResult(answerValues){
    return () => {
        if(questionNumber>=questions.length-1){
            router.push(`/test/result`)

        }else{         
            setValues(values+answerValues)

            console.log(values)

        }
        setQuestionNumber((prev) => prev + 1)
    }
}

    return (
        <>

        <FlexContainerColumnForImg>
        <Image src="/dustbin.png" alt="main-image" width="120" height="30" objectFit="cover"/>
        </FlexContainerColumnForImg>

        <BinaryQuestionAnswer number={question.id} question={question.name} answername1 ={answername1} answername2={answername2} answervalue1={updateResult(answervalue1)} answervalue2 ={updateResult(answervalue2)} />

        <Timer onTimeout={()=>router.push(`/test/timeout`)} seconds = {60}/>
        <LeftAnswers>남은 문제: {questions.length - question.id}</LeftAnswers> 

        </>
    )
}

export default TestPage

/*시간초과 후 '처음으로' 를 눌렀을 때 결과가 리셋되지 않음 --> link 대신 a tag를 사용하여 해결*/
// 버그 : 버튼 안에 글자가 세로로 출력됨. 