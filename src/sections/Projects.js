import React from 'react'
import { Section, SectionPart as Part } from '../components/Section'
import { GithubRepoCardList } from '../components/Card'
import { jsPackages } from '../data'
import { isMobile } from 'react-device-detect'
import style from './Projects.module.scss'

const Projects = () => {
    return (
        <Section id="projects" header="Projects" className={style.projects}>
            <Part title="Javascript Packages">
                <GithubRepoCardList data={jsPackages} delayConst={isMobile ? 0 : 150} />
            </Part>
        </Section>
    )
}

export default Projects