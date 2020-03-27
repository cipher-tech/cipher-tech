import styled, { keyframes, css } from "styled-components";
import React from 'react'
import icon from "../../images/diamondSvg.svg"

const movement = keyframes`
    0% {
        transform: rotateX(0deg)
    }
    50%{
        transform: rotateX(180deg)

    }
    100%{
        transform: rotateX(0deg)

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
        animation: ${movement} 3s ease-in-out 0s infinite; 

    }
`


export default function DiamondSvg() {
    return (
        <SvgIcon>
            <img height="100%" width="100%" src={icon} alt="svg" />

        </SvgIcon>


    )
}
