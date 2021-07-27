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

function BinaryQuestionAnswer({number, question, onYes, onNo}) {
  return (
    <GridContainer> 
        {number}. {question} 
    <FlexContainerColumn>
        <PrimaryButton onClick={onYes}>네</PrimaryButton>
        <PrimaryButton onClick={onNo}>아니요</PrimaryButton>
    </FlexContainerColumn>
    </GridContainer>
  );
}

export default BinaryQuestionAnswer;