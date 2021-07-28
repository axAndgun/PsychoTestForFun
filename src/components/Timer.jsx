import { useState, useEffect, useRef } from "react";
import styled from 'styled-components'

export const TimerLayout = styled.div`
    font-weight: bold;
    color: ${props=>props.time>15? 'blue' : 'red'};
    font-size: 20;
`

function Timer({onTimeout, seconds}) {
  const [counter, setCounter] = useState(seconds ?? 60)
  const timer = useRef()
  useEffect(()=>{
      if(counter > 0){
          timer.current =setTimeout(()=>{
            setCounter(counter -1)
          },1000)
      }else{
          if(onTimeout){
              onTimeout()
          }
      }

  },[counter, onTimeout])

      
  
  useEffect(()=>{
    return () =>{
         if(timer.current){
             clearTimeout(timer.current)
         }
     }
 },[])

 

    return (
    <TimerLayout time={counter}>
        남은시간: {counter}
    </TimerLayout>
  );
}

export default Timer;