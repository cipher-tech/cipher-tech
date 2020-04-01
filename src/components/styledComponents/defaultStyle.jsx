import { createGlobalStyle } from "styled-components"



const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }  
  html{
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px;
    @media only screen and (min-width: 1600px) {
      font-size: 70%; 
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
      font-size: 50%; 
    }
  }
  body {
    display: grid;
    
    justify-content: center;
    ${'' /* justify-items: center; */}
    align-content: center;
    box-sizing: border-box;
    min-height: 100vh;
    ${'' /* max-width: 150rem; */}
    color: ${props => props.theme.colorDark};
    font-family: montserrat, sans-serif;

    #root{
      ${'' /* justify-self: center;
    justify-content: center;
    justify-items: center; */}
    }
}
`
export default GlobalStyle  //DefaultStyle