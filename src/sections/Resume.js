import React from 'react'
import style from './Resume.module.scss'
import { Section, SectionPart as Part } from '../components/Section'
import { useState, useEffect } from 'react'
import { db } from '../utils/firebase'

const Resume = () => {
    const [educationData, setEducationData] = useState([])
    const [workData,setWorkData] = useState([])

    useEffect(() => {
        db.collection('education').get().then((querySnapshot) => {
            let data = []
            querySnapshot.docs.map((doc) => {
                data.push({ id: parseInt(doc.id), ...doc.data() })
                return null
            })
            data.sort((a,b)=>b.id-a.id)
            setEducationData(data)
        })
        db.collection('work').get().then((querySnapshot) => {
            let data = []
            querySnapshot.docs.map((doc) => {
                data.push({ id: parseInt(doc.id), ...doc.data() })
                return null
            })
            data.sort((a,b)=>b.id-a.id)
            setWorkData(data)
        })
    }, [])

    return (
        <Section id="resume" header="Resume" className={style.resume}>
            <Part title="Education" className={[style.education, "mb-4"]} aos="fade-up">
                <ul>
                    {
                        educationData.flatMap((value, index, array) => {
                            let jsx = (
                                <li key={value.id} className={style.education__edu}>
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