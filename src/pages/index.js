import {StyledButton} from '../components/atoms/Button'
import styled from 'styled-components'
import ClientSideLink from 'components/atoms/ClientSideLink'
import {FlexContainerAlignCenter} from '../styles/FlexContainer'
import {focusInExpandFwd} from '../styles/SpecialEffect'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useGotoPage from '../hooks/useGotoPage'
import {useState} from 'react'



export const SquareFrame = styled.div`
  position: relative;
`
const GridContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const LocationText = styled.h3`
    margin: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
`


const FlexContainerColumnCenter = styled(FlexContainerAlignCenter)`
    flex-flow: column nowrap;
    margin: 1rem 0;
`

const StartEffectTag = styled(LocationText)`
    animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.42, 0.0, 0.58, 0.10) both;
    text-align: center;
    /* :hover{
      color: #dd2a7b;
    } */
`

const Padding = styled.div`
    padding: 2rem 0;
`


function GoToTest({children, onClick}){

  return children
}

function Homepage() {

  return (
    <>
    <Padding>
    <FlexContainerColumnCenter>
      <ClientSideLink href="/test">
      <Image src="/dustbin.png" alt="main-image" width="600" height="150" objectFit="cover"/>
      <StartEffectTag>쓰레기 처리 능력 테스트</StartEffectTag>
      </ClientSideLink>
    </FlexContainerColumnCenter>
    </Padding>
    </>
    );
}


export default Homepage;
