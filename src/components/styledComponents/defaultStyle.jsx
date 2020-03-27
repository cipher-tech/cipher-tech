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
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
  }
  body {
    box-sizing: border-box;
    min-height: 100vh;
    color: ${props => props.theme.colorDark};
    font-family: montserrat, sans-serif;
}
`
export default GlobalStyle  //DefaultStyle