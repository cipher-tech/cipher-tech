import React from 'react'
import styled from 'styled-components'
import { OffsetText } from './styledComponents'
import SkillProgress from './styledComponents/skillProgress'

let Container = styled.div`
    background: ${props => props.theme.colorPrimary};
    /* height: 50vh; */
    grid-column: 1/-1;
    display: grid;
        overflow: hidden;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
        grid-template-columns: repeat(2, minmax(40rem, 1fr));

        }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLargest}) {
        grid-template-columns: repeat(2, minmax(30rem, 1fr));
        overflow: hidden;
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
        overflow: hidden;
    }
    gap: 1rem 10rem;
    .title{
        grid-column: 1/-1;
    }
    .skillSet{
        display: grid;
        grid-template-columns: 2fr;
        justify-items: center;
        align-items: flex-start;
        /* height: 100% ; */
        padding: 3rem 4rem;
        color: ${props => props.theme.colorLight};

        @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
            padding: 2rem 1rem;
        }
        &-heading{
            display: flex;
            justify-self: center;
            font-size: 1.9rem;
            width: 100%,
        }
    }
    .skillSet:last-child{
        justify-items: center;
    }
`
function Skills() {
    return (
        <Container>
            <OffsetText className="title" offset="Skills" white>
                Skills
            </OffsetText>

            <div className="skillSet">
                <h5 className="skillSet-heading">Programming Skills</h5>

                <SkillProgress title="HTML & CSS" level="95" />
                <SkillProgress title="JavaScript" level="95" />
                <SkillProgress title="NodeJS" level="90" />
                <SkillProgress title="Python" level="80" />
                <SkillProgress title="PHP" level="80" />
            </div>
            <div className="skillSet">
                <h5 className="skillSet-heading">FrameWorks</h5>

                <SkillProgress title="React" level="95" />
                <SkillProgress title="Laravel" level="85" />
                <SkillProgress title="Express" level="85" />
                <SkillProgress title="Apollo" level="80" />
                <SkillProgress title="Python" level="75" />

            </div>
        </Container>
    )
}

export default Skills
