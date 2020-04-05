import styled, { keyframes } from "styled-components";
import React from 'react'
import icon from "../../images/XIcon.svg"


const movement = keyframes`
    0% {
        transform: rotate(0deg); 
    }
    20% {
        transform: rotate(180deg); 
    }
    100% {
        transform: rotate(360deg); 
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


export default function XSvg() {
    return (
        <SvgIcon>
            <img height="100%" width="100%" src={icon} alt="" />
        </SvgIcon>


    )
}
