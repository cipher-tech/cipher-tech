import React from 'react'
import styled from 'styled-components'
// import {useSpring, animated} from 'react-spring';

const Container = styled.p`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 55rem;
    padding: .8rem 2rem;
    color: currentColor;
    font-size: 1.8rem;
    margin-top: 2rem;
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
        width: 55rem;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpxxLarge}) {
        width: 45rem;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
        width: 35rem;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        width: 35rem;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
        width: 45rem;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
        width: 40rem;
        padding: .8rem .2rem;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpxSmall}) {
        width: 30rem;
        padding: .8rem .2rem;
    }
    .skillSet-level--title{
        justify-items: center;
        text-align: left;
        padding-left: 2rem;
    }
    span:nth-last-child(2){
        justify-items: flex-start;
        text-align: end;
        padding-right: 1rem;
    }

    progress[value] {
        margin-top: 1rem;
        grid-column: 1/-1;
        appearance: none;
        width: 100%;
        /* width: 35rem; */
        height: 1.2rem;
        border-radius: 1rem;
        background: #FFFFFF61;
        position: relative;
        border: none;
        /* &::before{
            content: '90%';
            position: absolute;
            right: 1rem;
            top: -125%;
            color: #FFF;
            border-radius: 1rem;
        } */
    }
    progress[value]::-webkit-progress-bar{
        appearance: none;
        width: 100%;
        height: 1.2rem;
        border-radius: 1rem;
        background: #FFFFFF61;
        position: relative;
        border: none;;
    }
    progress[value]::-webkit-progress-value{
        background: #FFFFFF;
        position: relative;
        border-radius: 1rem;
    }
    progress[value]::-moz-progress-bar{
        border-radius: 1rem;
        position: relative;
        background: #FFFFFF; 
        &::before{
            content: '90%';
            position: absolute;
            right: 1rem;
            top: -125%;
            color: #FFF;
        }
}
`
export default function SkillProgress({title, level}) {
    // const spring = useSpring({
    //     from: {opacity: 0},
    //     opacity: 1
    // })
    // console.log(spring.opacity.interpolate(x => x));
    return (
        <>
            <Container className="skillSet-level"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                >
               <span className="skillSet-level--title">{title}</span>
               <span>
                  {level}%
               </span>
               <progress className="skillSet-progress" max="100" value={`${level}`}></progress>

            </Container>

        </>
    )
}
