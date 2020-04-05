import React from 'react'
import styled from 'styled-components'
import { OffsetText } from './styledComponents'
import SkillProgress from './styledComponents/skillProgress'

let Container = styled.div`
    background: ${props => props.theme.colorPrimary};
    /* height: 50vh; */
    grid-column: 1/-1;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, minmax(30rem, 1fr));
    gap: 1rem 10rem;
    .title{
        grid-column: 1/-1;
    }
    .skillSet{
        display: grid;
        grid-template-columns: 2fr;
        justify-items: flex-end;
        align-items: flex-start;
        /* height: 100% ; */
        padding: 3rem 4rem;
        color: ${props => props.theme.colorLight};

        &-heading{
            justify-self: center;
            font-size: 1.9rem
        }
    }
    .skillSet:last-child{
        justify-items: flex-start;
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

                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />

            </div>
            <div className="skillSet">
                <h5 className="skillSet-heading">Frame-Works</h5>

                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />
                <SkillProgress title="Python" level="75" />

            </div>
        </Container>
    )
}

export default Skills
