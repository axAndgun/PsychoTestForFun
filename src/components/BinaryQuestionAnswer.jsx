import React from 'react';
import styled from 'styled-components'


export const StyledButton = styled.button`
  font-family: "ng";
  font-size:1rem;
  border-color: #8134af;
  background-color: white;
  //margin: 0.2rem 10rem; 이녀석때문에 버튼이 세로로 출력된다.
  padding: 0.4rem;
  border-style: dashed;
  text-align: center;


  :hover{
      background: #dd2a7b;
      color: white;
  } 

`
const FlexContainer = styled.div`
    display: flex;
    flex-flow: wrap; // 줄넘김 처리
    display: inline-block;
    white-space : wrap; //줄넘김 처리
    
`
const FlexContainerColumn = styled.div` 
    display: flex;
    flex-flow: column nowrap;
    //display: inline-block;
   // white-space : nowrap;
    
`

function BinaryQuestionAnswer({number, question, answers, onNextPage}) {
  
  return (
    <>
  <FlexContainer>{number}. {question}</FlexContainer>
  <FlexContainerColumn>
   {answers.map(answer =>(<StyledButton key={answer.id} onClick={() => {onNextPage(answer.value)}}>{answer.name}</StyledButton>))} 
  </FlexContainerColumn>
    </>

   
  );
}

export default BinaryQuestionAnswer;