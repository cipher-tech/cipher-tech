import styled, { keyframes } from "styled-components";
import React from 'react'
import icon from "../../images/triangleSvg.svg"


const movement = keyframes`
    0% {
        left: 0; 
    }
    50%{
        left: 2rem
    }
    100%{
        left: 0;
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
        transition: all 1s ease-in;
        animation: ${movement} 2s ease-in-out 0s infinite; 

    }
`


export default function TriangleSvg() {
    return (
        <SvgIcon>
            <img height="100%" width="100%" src={icon} alt="" />
        </SvgIcon>


    )
}
