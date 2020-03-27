import React from 'react'
import styled from 'styled-components'

let Container = styled.div`
    background: orangered;
    grid-column: 1/-1
`
function About() {
    return (
        <Container>
            About
        </Container>
    )
}

export default About
