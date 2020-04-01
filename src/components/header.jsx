import React from 'react'
import styled, {css} from 'styled-components'
import logo from "../images/logo.jpg"
import personSvg from "../images/personSvg.svg"
import { Diamond, Triangle, Circle } from './styledComponents'
import breakPoint  from './breakPoints'

let Container = styled.div`
    background:  ${props => props.theme.colorSecondary} ;
    grid-column: 1/-1;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 65%;
    font-size: 1.6rem;
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-template-columns: minmax(30rem, 1fr) 50%;
        }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
        grid-template-columns: minmax(30rem, 1fr) 50%;
        }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
        grid-template-columns: minmax(30rem, 1fr) 32%;
        }
    .header--logo{
        height: 5.6rem;
        width: 5.6rem;
        margin: 1rem;
       
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .header-nav{
        grid-row: 1;
        grid-column: 2;
        justify-self: right;
        z-index: 10;
        width: auto;

        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            display: none;
        }
        .nav-wrapper{
            display: flex;
            width: 45rem;
            padding: 2rem;
            margin-right: 3rem;
            align-content: center;
            justify-content: space-around;
            flex-wrap: nowrap;
            /* flex-basis: 60rem; */
            
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                margin-right: 0rem;
                width: 35rem;
             }

            &--items{
                cursor: pointer;
                text-align: left;
                list-style: none;
                color: ${props => props.theme.colorInfo};
                text-align: left;
                transition: all .1s ease;

                &:hover{
                    border-bottom: 2px solid ${props => props.theme.colorInfo}
                }
            }
        }
    }
    .header-text{
        height: 50%;
        position:relative;
        min-width: 35rem;
        width: 90%;
        color: ${props => props.theme.colorDark};
        align-self: center;
        justify-self: center;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            align-self: center ;
            min-width: 25rem;
            align-self: flex-start;
            margin-top: 2rem;
        }
        
        &--svgIcon-1{
            width: 3rem;
            height: 3rem;
         
            position: absolute;
            top: -5rem;
            left: 7rem
        }
        &--svgIcon-2{
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 12rem;
            transform: translate(-50% -50%);
            right: -2rem
        }
        &--svgIcon-3{
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 32rem;
            left: 1rem;
            ${props =>{
                let style = css`
                    top: 33rem;
                `
               return breakPoint`
                900px
                ${style}
            `
            } }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                top: 20rem;
             }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                top: 20rem;
             }
            
            
        }

        h3{
            font-weight: 600;
            font-size: 3.5rem;
            text-shadow: 0 .15rem .2rem ${props => props.theme.colorDark};
            margin-bottom: 3rem;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-weight: 500;
                font-size: 2.5rem;
                margin-bottom: 2rem;
             }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                margin-bottom: 1rem;
            }
        }
        p{
            font-size: 1.9rem;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-size: 1.6rem;
             }

            span {
                display: inline-block;
                font-size: 2.3rem;
                margin-top: 5rem;

                @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-size: 1.9rem;
             }
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                    margin-top: 2rem;
                    margin-top: 2rem;
             }
             
        }
        }
        
    }
    .header-svg{
        background: ${props => props.theme.colorLight};
        grid-row: 1/ span 2;
        grid-column: 2;
        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
        &--person{
            height: 100%;
            width: 100%;
            padding-left: 4rem;
            padding-bottom: 4rem;

            
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                
                padding-left: 3.8rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                
                padding-left: 2.5rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                
                padding-left: 1.4rem;
            }
            
        }
    }
    
`
function Header(props) {
    return (
        <Container>
            <div className="header--logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header-text">
                <div className="header-text--svgIcon-1">
                    <Triangle />
                </div>
                <div className="header-text--svgIcon-2">
                    <Circle />
                </div>
                <div className="header-text--svgIcon-3">
                    <Diamond />
                </div>
                <h3>
                    Hi, <br />
                    I'm Onubogu Chibuikem
                </h3>
                <p>
                    I'm a Computer science graduate,
                    Programmer and web desinger
                    <br />
                    <span>
                        Nice to meet you
                    </span>
                </p>


            </div>
            <div className="header-nav nav">
                <ul className="nav-wrapper">
                    <li className="nav-wrapper--items">Home</li>
                    <li className="nav-wrapper--items">About</li>
                    <li className="nav-wrapper--items">Skills</li>
                    <li className="nav-wrapper--items">Projects</li>
                </ul>
            </div>
            <div className="header-svg">
                <img src={personSvg} alt="person svg" className="header-svg--person" />

            </div>
        </Container>
    )
}

export default Header
