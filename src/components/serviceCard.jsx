import React from 'react'
import styled from 'styled-components'
import programmerSvg from "../images/servicesSvg.svg"

const Container = styled.div`
    .services-description{
        z-index: 10;
        margin: .3rem 1rem;
        background: white;
        display: grid;
        /* grid-column: 1/-1; */
        /* width: 33.3333%; */
        box-shadow: 0.3rem 0.3rem .7rem #ece7e773,
                -0.3rem -0.3rem .7rem rgba(94,104,121, .288);
        grid-template-columns: 1fr;
        justify-self: center;
        justify-items: center;
        font-size: 1.3rem;
        line-height: 1.5;

        &--svg{
            margin: 0rem;
            width: 16rem;
            height: 10rem;
            grid-column: 1/-1;
            }
        &--title{
            text-align: center;
            font-size: 1.5rem;
            grid-column: 1/-1;
            padding: 1rem;
            &-text{
                margin-top: 0;
            }
        }
        &--content{
            width: 80%;
            text-align: center;
        }
        &--subtitle{
            text-align: center;
            font-size: 1.5rem;
            grid-column: 1/-1;
            padding: 1rem;
            color: ${props => props.theme.colorPrimary}
        }
        &--tools{
            width: 80%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            padding:2rem;

            &-item{
                list-style-type: none;
            }
        }
    }
`
export default function card() {
    return (
        <Container>
            <div className="services-description">
                <img src={programmerSvg} alt="svg icon" className="services-description--svg" />

                <p className="services-description--title">
                    {/* <br/> */}
                    <span className="services-description--title-text">
                        Programmer and designer
                    </span>
                </p>
                <p className="services-description--content">
                    at sequi repellat, cum dictlestia olor,
                    sit amet consectetur
                    at sequi repellat, cum
                    at sequi repellat, cum dictlestia olor,
                    sit amet consectetur
                    at sequi repellat, cum
                </p>
                <p className="services-description--subtitle">
                    Things I Design
                </p>
                <p className="services-description--content">
                    at sequi repellat, cum dictlestia olor, sit amet consectetur
                    at sequi repellat, cum
                </p>
                <p className="services-description--subtitle">
                    Design Tools:
                </p>
                <ul className="services-description--tools">
                    <li className="services-description--tools-item">
                        sequi
                    </li>
                    <li className="services-description--tools-item">sequi </li>
                    <li className="services-description--tools-item">sequi </li>
                    <li className="services-description--tools-item">sequi </li>
                </ul>
            </div>
        </Container>
    )
}
