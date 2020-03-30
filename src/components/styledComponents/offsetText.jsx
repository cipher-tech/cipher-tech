import styled from "styled-components";

let StyledText = styled.h4`
    text-align: center;
    position: relative;
    display: flex;
    place-content: center;
    font-size: 3.5rem;
    font-weight: bold;
    font-family: "Mongolian Baiti";
    padding-top: 3rem;
    text-decoration: underline;
    color: ${props => props.theme.colorPrimary};

    &::after{
        content: "About me"; /* ${props => props.offset} */
        position: absolute;
        top: .3rem;
        opacity: .1;
        left: 3.5rem;
        /* transform: translate(-50%, 50%); */
        font-size: 5rem;

    }
`

export default  StyledText