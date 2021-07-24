import React from 'react'
import { Section, SectionPart as Part } from '../components/Section'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import resumeWave from '../images/wave-back.svg'

const ResumeWrapper = styled(Section).attrs(props => ({ ...props, id: "resume", header: "Resume" }))`
    background: url(${resumeWave});
    background-repeat: no-repeat;
    background-size: cover;
`

const ResumePart = styled(Part)`
    padding-top: 20px;
`

const ResumeItem = styled.li`
    width: 100%;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        span:nth-child(1) {
            font-weight: 700;
        }
        span:nth-child(2) {
            color: ${props => props.theme.darkGray};
        }
        @media only screen and (max-width: 790px) {
            flex-direction: column;
            justify-content: flex-start;
        }
    }
    div:nth-child(2) {
        margin-top: 10px;
        margin-bottom: 20px;
    }
    display: block;
`

const Divider = styled.li`
    height: 1px;
    width: 100%;
    background-color: ${props => props.theme.midGray};
`

const Resume = () => {
    const educationData = useSelector(state => state.education)
    const workData = useSelector(state => state.work)

    return (
        <ResumeWrapper>
            <ResumePart title="Education" className="mb-4" aos="fade-up">
                <ul>
                    {
                        educationData.flatMap((value, index, array) => {
                            let jsx = (
                                <ResumeItem key={value.id}>
                                    <div><span>{value.name}</span> <span>{value.date}</span></div>
                                    <div>
                                        {value.desc}
                                    </div>
                                </ResumeItem>
                            )
                            return array.length - 1 !== index
                                ? [jsx, <Divider key={value.name + "_divider"} />]
                                : jsx
                        })
                    }
                </ul>
            </ResumePart>
            <ResumePart title="Work" className="mb-4" aos="fade-up">
                <ul>
                    {
                        workData.flatMap((value, index, array) => {
                            let jsx = (
                                <ResumeItem key={value.name}>
                                    <div><span>{value.name}</span> <span>{value.date}</span></div>
                                    <div>
                                        {value.desc}
                                    </div>
                                </ResumeItem>
                            )
                            return array.length - 1 !== index
                                ? [jsx, <Divider key={value.name + "_divider"} />]
                                : jsx
                        })
                    }
                </ul>
            </ResumePart>

        </ResumeWrapper>
    )
}

export default Resume