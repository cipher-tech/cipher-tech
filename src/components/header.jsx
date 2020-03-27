import React from 'react'
import styled from 'styled-components'

let Container = styled.div`
    background: blue;
    grid-column: 1/-1
`
function Header() {
    return (
        <Container>
            Hello
        </Container>
    )
}

export default Header
