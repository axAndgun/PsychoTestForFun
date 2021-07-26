import {StyledButton} from '../components/atoms/Button'
import useGoToPage from '../hooks/useGotoPage';


function Homepage() {
  const goToTestsPage = useGoToPage('/tests')
  
  return (
    <>
    <h1>
    <StyledButton onclick={goToTestsPage}> 심리테스트 시작 </StyledButton>
    </h1>
    </>
    );
}


export default Homepage;
