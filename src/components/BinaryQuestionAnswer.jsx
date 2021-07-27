import React from 'react';
import styled from 'styled-components'
import {PrimaryButton} from './atoms/Button'

const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const FlexContainerColumn = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

function BinaryQuestionAnswer({number, question, answername1, answername2, answervalue1, answervalue2}) {
  return (
    <GridContainer> 
        {number}. {question} 
    <FlexContainerColumn>
    <PrimaryButton onClick ={answervalue1}>  {answername1}</PrimaryButton>
    <PrimaryButton onClick ={answervalue2}>  {answername2}</PrimaryButton>
    </FlexContainerColumn>
    </GridContainer>
  );
}

export default BinaryQuestionAnswer;