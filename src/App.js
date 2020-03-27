import React from 'react';
import { DefaultStyles, Container } from './components/styledComponents/index';
import Main from './pages/main/main';


const theme = {
  colorPrimary: "#2F89FC",
  colorSecondary: "#F5F5F5",
  colorDark: "#40514E",
  colorSuccess: "#30E3CA",
  colorRed: "#E24E4E",
  colorPurple: "#E049EA",
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
    <DefaultStyles>
      <Container>
        <Main/>
      </Container>
    </DefaultStyles>
  );
}

export default App;
