import React from 'react'
import styled from 'styled-components'

let Container = styled.div`
    background: teal;
    grid-column: 1/-1
`
function Footer() {
    return (
        <Container>
            Footer
        </Container>
    )
}

export default Footer
