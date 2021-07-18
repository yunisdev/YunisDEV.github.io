import React from 'react'
import style from './Resume.module.scss'
import { Section, SectionPart as Part } from '../components/Section'
import { educationData, workData } from '../data'


const Resume = () => {
    return (
        <Section id="resume" header="Resume">
            <Part title="Education" className={[style.education, "mb-4"]} aos="fade-up">
                <ul>
                    {
                        educationData.flatMap((value, index, array) => {
                            let jsx = (
                                <li key={value.name} className={style.education__edu}>
                                    <div><span>{value.name}</span> <span>{value.date}</span></div>
                                    <div>
                                        {value.desc}
                                    </div>
                                </li>
                            )
                            return array.length - 1 !== index
                                ? [jsx, <li key={value.name + "_divider"} className={style.education__divider} />]
                                : jsx
                        })
                    }
                </ul>
            </Part>
            <Part title="Work" className={[style.education, "mb-4"]} aos="fade-up">
                <ul>
                    {
                        workData.flatMap((value, index, array) => {
                            let jsx = (
                                <li key={value.name} className={style.education__edu}>
                                    <div><span>{value.name}</span> <span>{value.date}</span></div>
                                    <div>
                                        {value.desc}
                                    </div>
                                </li>
                            )
                            return array.length - 1 !== index
                                ? [jsx, <li key={value.name + "_divider"} className={style.education__divider} />]
                                : jsx
                        })
                    }
                </ul>
            </Part>

        </Section>
    )
}

export default Resume