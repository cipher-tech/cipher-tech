import styled from "styled-components"

let Layout = styled.div`
    display: grid;

    grid-template-rows: 90vh repeat(7, min-content);
    grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end] )
`

export default Layout