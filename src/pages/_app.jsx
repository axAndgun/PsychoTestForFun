import Homepage from "pages"
import { createContext, useState, useMemo } from "react"
import { BASIC_TEXT_COLOR, TABLET_MIN_WIDTH,PRIMARY_TEXT_COLOR } from "../models/constants"
import styled,{ createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ng'; 
    //src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/KoreanFrenchTypewriter.woff') format('woff');
    }   

    html,body{
      font-size: 40px;
     
   }

 @media screen and (max-width:1200px) { html,body{
      font-size: 40px;
     
   }}

@media screen and (max-width:768px) {  html,body{
    font-size: 40px;
     
   } }
@media screen and (max-width:480px) {  html,body{
      font-size: 20px;
     
   } }

 

   body {
        padding-top: 100px;
        padding: 0;
        background-color: #feda77;
        color: ${BASIC_TEXT_COLOR};
        font-family: "ng";
        
        line-height: normal;
        word-break: keep-all;
        text-align: center;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;

    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        list-style-type: none

    }

    a {
        color: ${PRIMARY_TEXT_COLOR};
        font-weight: 500;
        text-decoration: none;
        transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    :hover {
        color: ${BASIC_TEXT_COLOR};
        }
    }
`


const MaxWidth = styled.main`
    max-width: ${TABLET_MIN_WIDTH};
    margin: 0 auto;
`

export const GlobalContext = createContext({
    values: null,
    setValues: () => null,
})

function GlobalProvider({children}){
    const [values, setValues] = useState(0)

    const Gvalue = useMemo(
        ()=>({
            values,
            setValues
        }),
        [values]
    )

    return <GlobalContext.Provider value={Gvalue}>{children}</GlobalContext.Provider>
}

function PsychoTestForFun({Component, pageProps}){
    return(
        <>
        <head><meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1, user-scalable=yes,initial-scale=1.0" /></head>
        <GlobalStyle/>
        <GlobalProvider>
            <MaxWidth>
            <Component {...pageProps} />
            </MaxWidth>
        </GlobalProvider>
    

        </>
    )
}

export default PsychoTestForFun