import React from 'react'
import styled from 'styled-components'
import { OffsetText } from './styledComponents'
// import Text from './styledComponents/offsetText'


let Container = styled.div`
    background: white;
    grid-column: col-start 2 / col-start 10;
    margin-top: -6rem;
    border-radius: 16px;
    z-index: 25;
    /* width:  */
    /* grid-row: min-Content; */
    box-shadow: 0.3rem 0.3rem .7rem #ece7e773,
                -0.3rem -0.3rem .7rem rgba(94,104,121, .288) ;
    display: grid;
    grid-template-rows: min-content 60vh;
    grid-template-columns: repeat(3, minmax(min-content, 1fr)) ;
    align-content: center;
    justify-content: center;
    align-items: center;

    .aboutMe-title{
        grid-column: 2/3
    }

`
function About(props) {
    return (
        <Container className="aboutMe">
            {/* <p>ferythtrhrsgbwsrsfsd</p> */}
            {/* <Text offset="About me"> About me</Text> */}
            <OffsetText className="aboutMe-title" offset="About me">
                About me
            </OffsetText>
            {/* <p>fsfdsfsdfdsfdsfdsfk</p> */}
            <p>f gvergvetgfngegrregregrek</p>
        </Container>
    )
}

export default About
