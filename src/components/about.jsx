import React from 'react'
import styled from 'styled-components'
import { OffsetText } from './styledComponents'
import bgSvg from "../images/aboutMeCurve.svg"
import aboutPic from "../images/aboutPic.JPG"
import twitterSvg from "../images/twitter.svg"
import facebookSvg from "../images/facebook.svg"
import instagramSvg from "../images/instagram.svg"
import linkedinSvg from "../images/linkedin.svg"
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
    align-items: center;
    gap: 2rem;
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
       grid-column: 1/-1
    }

    .aboutMeSvg{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        padding: 0;
        bottom: -20vh;
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
            font-size: 1.6rem;
            line-height: 1.7;
            margin-bottom: 2rem;
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
                <img src={aboutPic} alt="about Pic" className="aboutMeImg-photo" />
            </div>
            <div className="aboutMeTxt">
                <p className="aboutMeTxt-title">Chibuikem Onubogu</p>
                <p className="aboutMeTxt-sub">
                    Programmer & Web Developer
                    Based In Nigeria
                </p>
                <p className="aboutMeTxt-main">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut optio eligendi quis unde placeat sequi repellat, cum dictlestia olor,
                    sit amet consectetur adipisicing elit. Aut optio eligendi quis unde placeat
                    sequi repellat.
                    sit amet consectetur adipisicing elit. Aut optio eligendi quis unde placeat
                    sequi repellat.
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
                    <img src={twitterSvg} alt="twitterSvg" />
                </li>
                <li className="aboutMeSocial-icons">
                    <img src={facebookSvg} alt="facebookSvg" />
                </li>
                <li className="aboutMeSocial-icons">
                    <img src={instagramSvg} alt="instagramSvg" />
                </li>
                <li className="aboutMeSocial-icons">
                    <img src={linkedinSvg} alt="linkedinSvg" />
                </li>
                <li className="aboutMeSocial-icons">
                    <img src={githubSvg} alt="githubSvg" />
                </li>
            </ul>
            <button className="CVDownload">Download CV</button>
            </div>

            <img src={bgSvg} className="aboutMeSvg" alt="aboutSvg" />
        </Container>
    )
}

export default About
