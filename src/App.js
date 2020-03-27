import React from 'react';
import { DefaultStyles, Container } from './components/styledComponents/index';
import Main from './pages/main/main';
import { ThemeProvider } from 'styled-components';


const theme = {
  colorPrimary: "#2F89FC",
  colorSecondary: "#F5F5F5",
  colorDark: "#707070",
  colorSuccess: "#30E3CA",
  colorRed: "#E24E4E",
  colorPurple: "#E049EA",
  colorLight: "#F8F8FF",
  colorInfo: "#83C1FD",
  font: {
    xlarge: "15rem",
    large: "10rem",
    medium: "5rem",
    small: "4rem",
    xsmall: "3rem",

    mainFont: "Montserrat",
    extra: "Segoe UI",
    offSet: "Mongolian Baiti"
  }
}

function App() {
  return (

    <ThemeProvider theme={theme}>
      <DefaultStyles/>
        <Container>
          <Main />
        </Container>
    </ThemeProvider>

  );
}

export default App;
