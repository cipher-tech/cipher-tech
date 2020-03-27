import React from 'react'
import styled from 'styled-components'

let Container = styled.div`
    background: purple;
    grid-column: 1/-1
`
function Contacts() {
    return (
        <Container>
            Hello
        </Container>
    )
}
   
export default Contacts
