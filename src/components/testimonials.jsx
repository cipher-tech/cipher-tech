import React from 'react'
import styled from 'styled-components'
import bg2 from "../images/p3-3.jpg"
import { OffsetText } from './styledComponents'
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"

let Container = styled.div`
    /* background: orange; */
    grid-column: 2/10;
    margin:5rem;

    .swiper-wrapper{
        /* height: 30rem; */
        /* justify-content: center;
        align-content: center; */
        /* margin: 4rem; */
        padding: 2rem 2rem;

        &-mainContent{
            display: grid;
            /* width:100%; */
            grid-template-rows: repeat(3, 1fr);
            /* grid-template-rows:  */
            justify-items: center;
            align-items: center;

            &--avater{
                height: 8rem;
                width: 8rem;
                border-radius: 1.5rem;
                margin: 2rem
            }
            &--text{
                font-size: 1.7rem;
                width: 80%;
                line-height: 1.5;
            }
            &--profile{
                align-self: flex-start;
                font-size: 1.5rem; 
                font-weight: 600;
            }
        }
    }
`
function Testimonials() {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: false,
        // effect: 'fade',
        // cssMode: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }
    return (
        <Container>
            <OffsetText offset="Kind Words">
                Testimonials
            </OffsetText>

            <Swiper {...params} className="swiper-wrapper">
                <div className="swiper-wrapper-mainContent">
                    <img className="swiper-wrapper-mainContent--avater" src={bg2} alt="testimonial pic" />
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                        totam amet in,
                        soluta ex! Alias qui laborum, ex quia vel suscipit.
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <img className="swiper-wrapper-mainContent--avater" src={bg2} alt="testimonial pic" />
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                        totam amet in,
                        soluta ex! Alias qui laborum, ex quia vel suscipit.
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <img className="swiper-wrapper-mainContent--avater" src={bg2} alt="testimonial pic" />
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                        totam amet in,
                        soluta ex! Alias qui laborum, ex quia vel suscipit.
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                {/* <div className="swiper-wrapper-mainContent">
                    <img className="swiper-wrapper-mainContent--avater" src={bg2} alt="testimonial pic" />
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                        totam amet in,
                        soluta ex! Alias qui laborum, ex quia vel suscipit.
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div> */}
               
            </Swiper>
        </Container>
    )
}

export default Testimonials



// slidesPerView: 1,
// spaceBetween: 30,
// // centeredSlides: false,
// // effect: 'fade',
// // cssMode: true,
// loop: true,

// navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
// },
// pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
// },