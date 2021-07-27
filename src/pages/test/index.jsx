import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { PrimaryButton } from '../../components/atoms/Button'
import ClientSideLink from '../../components/atoms/ClientSideLink'
import { Padding } from '../../components/atoms/Styles'
import BinaryQuestionAnswer from '../../components/BinaryQuestionAnswer'
import useGoToPage from '../../hooks/useGoToPage'
import styled from 'styled-components'
import { CenterPaddingH1, gradientBlueGreen } from './result'
import { createContext } from "react";
import useSwr from 'swr'
import FlexLayoutColumn from "../../styles/FlexLayout"
import {fetcher} from '../../utils/commons'

export const GlobalContext = createContext({
    answers: null,
    setAnswers: () => null,
})


function TestPage() {

const { answers, setAnswers } = useContext(GlobalContext)
//const goToHomePage = useGoToPage('/')
const [questionNumber, setQuestionNumber] = useState(0)
const router = useRouter()


const { data: test, error } = useSwr(`/api/test/`, fetcher)
const isTestLoading = !test && ! error 

useEffect(() => {
setAnswers(null)
}, [setAnswers])

if (isTestLoading){
    return (
        <>
        Loading...
        </>
    )
}

if(!test){
    return(
        <>
        test는 존재하지 않는다. 
        </>
    )
}

const question = test.name

    return (
        <>
        fad
        {test.name}
        {question}
        </>

    )
}

export default TestPage