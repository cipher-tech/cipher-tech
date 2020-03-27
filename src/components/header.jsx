import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo.jpg"
import personSvg from "../images/personSvg.svg"
import { Diamond, Triangle, Circle } from './styledComponents'

let Container = styled.div`
    background: #eee; /* ${props => props.theme.colorSecondary} */;
    grid-column: 1/-1;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 65%;
    font-size: 1.6rem;
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

        .nav-wrapper{
            display: flex;
            width: 52rem;
            padding: 2rem;
            align-content: center;
            justify-content: space-around;
            flex-wrap: nowrap;
            /* flex-basis: 60rem; */

            &--items{
                text-align: left;
                list-style: none;
                color: ${props => props.theme.colorInfo};
                text-align: left;
            }
        }
    }
    .header-text{
        height: 50%;
        position:relative;
        width: 80%;
        color: ${props => props.theme.colorDark};
        align-self: center;
        justify-self: center;
        
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
            top: 40%;
            transform: translate(-50% -50%);
            right: -2rem
        }
        &--svgIcon-3{
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 80%;
            left: 1rem
        }

        h3{
            font-weight: 600;
            font-size: 3.5rem;
            text-shadow: 0 .15rem .2rem ${props => props.theme.colorDark};
            margin-bottom: 3rem;
        }
        p{
            font-size: 1.9rem;
            margin-bottom: 2rem;
        }
        span {
            font-size: 2.3rem;
            margin-top: 2rem;
        }
    }
    .header-svg{
        background: ${props => props.theme.colorLight};
        grid-row: 1/ span 2;
        grid-column: 2;
        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
        /* padding-left: rem; */
        &--person{
            height: 100%;
            width: 100%;
            
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
                    <Triangle/>
                </div>
                <div className="header-text--svgIcon-2">
                    <Circle/>
                </div>
                <div className="header-text--svgIcon-3">
                <Diamond/>
                </div>
                <h3>
                    Hi <br />
                    I'm Onubogu Chibuikem 
                </h3>
                <p>
                    I'm a Computer science graduate,
                    Programmer and web desinger
                    <br />

                </p>

                <span>
                    Nice to meet you
                </span>
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
