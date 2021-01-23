import React from 'react'
import { Section, SectionPart as Part } from '../components/Section'
import { CardList } from '../components/Card'
import { skillsProgrammingLanguages, skillsTechnologies } from '../data'
import { isMobile } from 'react-device-detect'

const Skills = () => {
    return (
        <Section id="skills" header="Skills">
            <Part title="Languages">
                <CardList data={skillsProgrammingLanguages} delayConst={isMobile ? 0 : 150} />
            </Part>
            <Part title="Technologies">
                <CardList data={skillsTechnologies} delayConst={isMobile ? 0 : 100} />
            </Part>
        </Section>
    )
}

export default Skills