import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import BinaryQuestionAnswer from '../../components/BinaryQuestionAnswer'
import styled from 'styled-components'
import { createContext } from "react";
import useSwr from 'swr'
import {fetcher} from '../../utils/commons'
import { GlobalContext } from '../_app'

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
const answer1 = answers[0]
const answer2 = answers[1]
const answername1 = answer1.name
const answername2 = answer2.name
const answervalue1 = answer1.value
const answervalue2 = answer2.value
//    console.log("+++++++++++++++++++++++++++++++++++++++++"+answername1)

function updateResult(answerValues){
    return () => {
        if(questionNumber>=questions.length-1){
            router.push(`/test/result`)
        }else{        
            console.log(answerValues + "계산 전") 
            setValues(values+answerValues)
            console.log(answerValues + "계산 후") 
        }
        setQuestionNumber((prev) => prev + 1)
    }
}

    return (
        <>
        <BinaryQuestionAnswer number={question.id} question={question.name} answername1 ={answername1} answername2={answername2} answervalue1={updateResult(answervalue1)} answervalue2 ={updateResult(answervalue2)} />
        </>
    )
}

export default TestPage