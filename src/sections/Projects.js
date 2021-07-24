import React from 'react'
import { Section, SectionPart as Part } from '../components/Section'
import styled from 'styled-components'
import projectWave from '../images/wave-back-2.svg'

const ProjectsWrapper = styled(Section)`
    background: url(${projectWave});
    background-repeat: no-repeat;
    background-size: cover;
`

const Projects = () => {
    return (
        <ProjectsWrapper id="projects" header="Projects">
            <Part title="Javascript Packages">

            </Part>
        </ProjectsWrapper>
    )
}

export default Projects