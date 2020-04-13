import React from 'react'
import styled from 'styled-components'
import { OffsetText, Triangle, XIcon } from './styledComponents'
import bgSvg from "../images/aboutMeCurve.svg"
import aboutPic from "../images/aboutPic.JPG"
import twitterSvg from "../images/twitter.svg"
import facebookSvg from "../images/facebook.svg"
import instagramSvg from "../images/instagram.svg"
import linkedinSvg from "../images/linkedin.svg"
import devStackSvg from "../images/devStack.svg"
import githubSvg from "../images/github.svg"
// import Text from './styledComponents/offsetText'


let Container = styled.div`
    background: white;
    position: relative;
    grid-column: col-start 2 / col-start 10;
    margin-top: -6rem;
    border-radius: 16px;
    z-index: 25;
    overflow: hidden;
    box-shadow: 0.3rem 0.3rem .7rem #ece7e773,
                -0.3rem -0.3rem .7rem rgba(94,104,121, .288) ;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr)) ;
    align-content: center;
    justify-content: center;
    justify-items: center;
    flex-direction: row-reverse; 
    align-items: center ;
    gap: 2rem;
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
       grid-column: 1/-1
    }

    .aboutMeSvg{
        position: absolute;
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
        max-height: 1800px !important;
        display: block;
        padding: 0;
        bottom: -20vh;
        @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
            bottom: -20rem;
            max-height: 1800px !important;
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLargest}) {
            bottom: -10rem;
            /* height: 50%; */
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            bottom: 0vh;
            height: 80%;
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            bottom: 0vh;
            height: 90%;
            
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
            bottom: 0vh;
            height: 100%;

        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            bottom: 0vh;
            height: 100%;

        }
    }
    .aboutMe-title{
        grid-column: 1/-1;
        width: 100%;
        position: relative;
    }
    .aboutMeImg{
        position: relative;
        align-self: flex-start;
        height: 32.4rem;
        width:23rem;
        margin: 5rem 1rem 1rem 1rem; 
        border: 1rem solid ${props => props.theme.colorPrimary};
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            grid-column: 1/-1;
        }
        &-SvgIcon{
            position: absolute;
            width: 2rem;
            height: 2rem;
            top: -4rem;
            right: -5rem;
        }
        &-SvgXIcon{
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            bottom: -4rem;
            left: -5rem;
        }
        &-photo{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            left: -3rem;
            top: -2.5rem;
            z-index: 35;
        }
    }
    .aboutMeTxt{
        align-self: flex-start;
        margin: 3rem 16rem 1rem 3rem;
        line-height: 1rem;
        width:100%;
        grid-column: 2/-1;
        max-width: 100rem;
        justify-self: center;
        justify-content: center;
        
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            grid-column: 1/-1;
            padding: 2rem 4rem;
            margin: auto;
        }
        &-title{
            text-align: center;
            color: ${props => props.theme.colorPrimary};
            font-size: 2.5rem;
            font-weight: 550;
            margin: 2rem;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                
            }
        }
        &-sub{
            font-size: 1.7rem;
            
            text-align: center;
            line-height: 1.6;
            margin: 3rem;
        }
        &-main{
            font-size: 1.5rem;
            line-height: 1.7;
            margin-bottom: 2rem;

            &--stack{
                color: ${props => props.theme.colorPrimary};
                font-size: 1.6rem;
                font-weight: 500;
                padding: 2rem .3rem 3rem 0rem ;
                display: flex;
                width: 100%;
                /* justify-content: space-between; */
                /* height: 3rem;  */
                img{
                    height: 2.5rem; 
                    padding-left: 1rem;
                }
            }
        }
        &-info{
            font-size: 1.6rem;
            line-height: 1.7;
            list-style-position: inside;
            margin-bottom: 1rem;
        }

    }
    .moreInfo{
        display: grid;
        grid-column: 1/-1;
        grid-template-columns: 1fr 1fr;
        z-index: 100;
        width: 100%;
        .aboutMeSocial{
        display: flex;
        
        justify-content: space-around;
        list-style-type: none;
        justify-items: left;
        padding: 1rem;
        width: 25rem;
        margin: 1rem 2rem 1rem 18rem;
        border-bottom: 5px solid ${props => props.theme.colorPrimary};
        @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
            margin: 1rem 2rem 1rem 10rem;
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            margin: 1rem 3rem;
            
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            margin: 1rem 3rem;
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            margin: 1rem 1rem;
            width: 20rem;
        }

        &-icons{
            
            
            width: auto;

            img{
                height: 3rem;
                cursor: pointer;
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                    height: 2rem;
                }

            }
        }
    }
    .CVDownload{
        display: flex;
        
        justify-content: center;
        border-radius: 1rem;
        align-content: center;
        text-align: center;
        align-self: center;
        border: none;
        cursor: pointer;
        justify-self: center;
        width: 17rem;
        padding: 1rem 2rem;
        font-size: 2rem;
        background: ${props => props.theme.colorPrimary};
        color: ${props => props.theme.colorLight};
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            justify-self: flex-end;
            margin: 1rem 3rem;
            font-size: 1.5rem;
            align-self: flex-end;
        }
    }
    }

`
function About(props) {
    return (
        <Container className="aboutMe">
            <OffsetText className="aboutMe-title" offset="About me">
                About me
            </OffsetText>
            <div className="aboutMeImg">
                <div className="aboutMeImg-SvgIcon">
                    <Triangle />
                </div>
                <div className="aboutMeImg-SvgXIcon">
                    <XIcon />
                </div>
                <img src={aboutPic} alt="about Pic" className="aboutMeImg-photo" />
            </div>
            <div className="aboutMeTxt">
                <p className="aboutMeTxt-title">Chibuikem Onubogu</p>
                <p className="aboutMeTxt-sub">
                    Programmer & Web Developer
                    Based In Nigeria
                </p>
                <p className="aboutMeTxt-main">
                I am a skilled programmer that likes writing modular codes that are easily 
                maintainable and supports continuous integration. 
                I'm skilled in the art of translating design mock-ups and prototypes 
                in tools like figma and adobeXD into responsive full fledged iweb apps. 
                I currently work at rapport tech as a front-end engineer, working on different 
                projects. In my spare time I work on my personal projects and study to get better.
                My hobbies include hanging out with friends, watching movies and playing video games.
                    <br/>
                    <span className="aboutMeTxt-main--stack">
                        My tech stack:  <img src={devStackSvg} alt="devStack svg"/>
                    </span>
                </p>
                <ul className="aboutMeTxt-info">
                    <li className="aboutMeTxt-info--items">
                        E-mail: nickchibuikem@gmail.com
                    </li>
                    <li className="aboutMeTxt-info--items">
                        Birthday: 29th April 1998
                    </li>
                    <li className="aboutMeTxt-info--items">
                        Phone: 08066060467
                    </li>
                    <li className="aboutMeTxt-info--items">
                        Freelance:
                    </li>
                    <li className="aboutMeTxt-info--items">
                        experience:
                    </li>
                    <li className="aboutMeTxt-info--items">
                        Residence:

                    </li>
                </ul>

            </div>
            <div className="moreInfo">
                <ul className="aboutMeSocial">
                    <li className="aboutMeSocial-icons">
                       <a href="/">
                           <img src={twitterSvg} alt="twitterSvg" />
                       </a>
                    </li>
                    <li className="aboutMeSocial-icons">
                       <a href="/">
                           <img src={facebookSvg} alt="facebookSvg" />
                       </a>
                    </li>
                    <li className="aboutMeSocial-icons">
                       <a href="/">
                           <img src={instagramSvg} alt="instagramSvg" />
                       </a>
                    </li>
                    <li className="aboutMeSocial-icons">
                       <a href="/">
                           <img src={linkedinSvg} alt="linkedinSvg" />
                       </a>
                    </li>
                    <li className="aboutMeSocial-icons">
                       <a href="/">
                           <img src={githubSvg} alt="githubSvg" />
                       </a>
                    </li>
                </ul>
                <button className="CVDownload">Download CV</button>
            </div>

            <img src={bgSvg} className="aboutMeSvg" alt="aboutSvg" />
        </Container>
    )
}

export default About
