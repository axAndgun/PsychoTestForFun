import React from 'react';
import styled from 'styled-components'
import {StyledButton} from './atoms/Button'

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

    <StyledButton onClick ={answervalue1}>  {answername1}</StyledButton>
    <StyledButton onClick ={answervalue2}>  {answername2}</StyledButton>

    </FlexContainerColumn>
    </GridContainer>
  );
}

export default BinaryQuestionAnswer;