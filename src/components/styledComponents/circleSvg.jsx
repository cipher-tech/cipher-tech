import styled, { keyframes } from "styled-components";
import React from 'react'
import icon from "../../images/circleSvg.svg"

const movement = keyframes`
    0% {
        transform: scale(.8)
    }
    25%{
        transform: scale(1.1)
    }
    50%{
        transform: scale(.8)
    }
    100%{
        transform: scale(1.1s)

    }
`

let SvgIcon = styled.div`
     height: 100%;
    width: 100%;
    position: relative;

    img{
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: visible;
        /* transform: rotateX('angle') */
        transition: all 2s ease-in;
        animation: ${movement} 1.3s ease-in-out 0s infinite; 

    }
`

export default function CircleSvg() {
    return (
        <SvgIcon>
            <img height="100%" width="100%" src={icon} alt="svg" />

        </SvgIcon>


    )
}
