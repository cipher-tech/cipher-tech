import styled from "styled-components";
import React from 'react'
// import Container from "./worksCard";

let Container = styled.div`
        display: grid;
        /* width:100%; */
        grid-template-rows: 1fr min-content max-content;
        /* grid-template-rows:  */
        justify-items: center;
        align-items: center;

        .mainContent-imgContainer{
            width:100%;
            display: flex;
            justify-content: center;
            &--avater{
                height: 8rem;
                width: 8rem;
                border-radius: 1.5rem;
                margin: 2rem 0; 
        }
        }
        .mainContent--text{
            font-size: 1.7rem;
            width: 80%;
            text-align: center;
            line-height: 1.5;
        }
        .mainContent--profile{
            display: flex;
            justify-content: center;
            width: 80%;
            align-self: flex-start;
            padding: 2rem 1rem;
            /* text-align: center; */
            font-size: 1.5rem; 
            font-weight: 600;
            height: 3rem;
        }
`

// export default testimonialComp;
export default function TestimonialComp({img}) {
    return (
        
            <Container className="mainContent">
                <div className="mainContent-imgContainer">
                    <img className="mainContent-imgContainer--avater" src={img} alt="testimonial pic" />
                </div>
                <p className="mainContent--text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                    </p>
                <p className="mainContent--profile">
                    -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
            </Container>
    
    )
}