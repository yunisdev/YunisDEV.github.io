import React from 'react'
import { Section, SectionPart as Part, SectionTextBox as TextBox } from '../components/Section'
import { CardList } from '../components/Card'
import { hobbies } from '../data'
import { isMobile } from 'react-device-detect'


const About = () => {
    return (
        <Section id="about" header="About Me">
            <TextBox>
                I am Yunis Huseynzade from Azerbaijan. I am a Web Developer and Co-Founder of Kritibytes. I love researching so much. I am interested in Programming, Designing, Music, Art and Popular science
                (especially Astronomy and Physics).
            </TextBox>
            <Part colSize={12} title="Hobbies">
                <CardList data={hobbies} delayConst={isMobile ? 0 : 100} />
            </Part>
        </Section>
    )
}

export default About