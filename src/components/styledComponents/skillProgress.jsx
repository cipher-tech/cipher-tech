import React from 'react'
import styled from 'styled-components'


const Container = styled.p`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 45rem;
    padding: .8rem 2rem;
    color: currentColor;
    font-size: 1.8rem;
    margin-top: 2rem;
    .skillSet-level--title{
        justify-items: flex-end;
        text-align: left;
        padding-left: 2rem;
    }
    span:nth-last-child(2){
        justify-items: flex-end;
        text-align: right;
        padding-right: 2rem;
    }

    progress[value] {
        margin-top: 1rem;
        grid-column: 1/-1;
        appearance: none;
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
        width: 35rem;
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
    return (
        <>
            <Container className="skillSet-level">
               <span className="skillSet-level--title">{title}</span>
               <span>
                  {level}%
               </span>
               <progress className="skillSet-progress" max="100" value={`${level}`}></progress>

            </Container>

        </>
    )
}
