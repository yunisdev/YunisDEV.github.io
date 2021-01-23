import React from 'react'
import style from './About.module.scss'
import { Section, SectionPart as Part, SectionTextBox as TextBox } from '../components/Section'
import { CardList } from '../components/Card'
import { educationData, hobbies } from '../data'
import { isMobile } from 'react-device-detect'

const About = () => {
    return (
        <Section id="about" header="About Me">
            <TextBox>
                I am Yunis Huseynzade from Azerbaijan. I am a Web Developer. I love researching so much. I am interested in Programming, Designing, Music, Art and Popular science
                (especially Astronomy and Physics).
            </TextBox>
            <Part title="Education" className={[style.education, "mb-4"]} aos="fade-up">
                <ul>
                    {
                        educationData.flatMap((value, index, array) => {
                            let jsx = <li key={value.name} className={style.education__edu}>{value.name} <span>{value.date}</span></li>
                            return array.length - 1 !== index
                                ? [jsx, <li key={value.name + "_divider"} className={style.education__divider} />]
                                : jsx
                        })
                    }
                </ul>
            </Part>

            <Part title="Hobbies">
                <CardList data={hobbies} delayConst={isMobile ? 0 : 100} />
            </Part>
        </Section>
    )
}

export default About