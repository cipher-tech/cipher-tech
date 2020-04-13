import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* align-items: center; */
    background-image: linear-gradient(to right bottom, rgba(0,0,0, .6),rgba(0,0,0, .6)), 
        url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    .title{
        display: flex;
        width: 100%;
        font-size: 2rem;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .text{
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        /* width: 100%; */
        font-size: 1.5rem;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 2.5rem;
        color: #fff;
    }
`
export default Container

export function WorksCardS(props) {
    return (
        <Container>
            <p className="swiper-slide--text">
                Project Name
            </p>
        </Container>
    )
}
