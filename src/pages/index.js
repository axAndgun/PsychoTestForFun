import {StyledButton} from '../components/atoms/Button'
import Template from '../components/Template'
import styled from 'styled-components'
import ClientSideLink from 'components/atoms/ClientSideLink'


export const CenterPaddingH1 = styled.h1`
padding: 3rem 1rem;
text-align: center;
`

function Homepage() {

  return (
    <>
    <Template>
    <CenterPaddingH1>
    <ClientSideLink href="/test"> 심리테스트 시작</ClientSideLink>
    </CenterPaddingH1>
    </Template>
    </>
    );
}


export default Homepage;
