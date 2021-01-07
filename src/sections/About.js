import React from 'react'
import style from './About.module.scss'
import Section from '../components/Section'
import Card from '../components/Card'
import { FaMusic, FaMeteor, FaCompactDisc, FaSearch, FaChess } from "react-icons/fa";

const About = () => {
    console.log([<li className={style.education__edu}>Pragmatech Education and Development Center <span>Aug. 2020 - Present</span></li>,
    <li className={style.education__edu}>School no. 309<span>Sep. 2010 - Present</span></li>]
        .join(<li className={style.education__divider} />))
    return (
        <Section id="about" header="About Me">
            <div className="col-md-6 about-me mb-4" data-aos="fade-right">
                I am Yunis Huseynzade from Azerbaijan. I am a Web Developer. I love researching so much. I am interested in Programming, Designing, Music, Art and Popular science
                (especially Astronomy and Physics).
                    </div>
            <div className={style.education + " col-md-12 mb-4"} data-aos="fade-up">
                <h2>Education</h2>
                <ul>
                    {
                        [<li className={style.education__edu}>Pragmatech Education and Development Center <span>Aug. 2020 - Present</span></li>,
                        <li className={style.education__edu}>School no. 309<span>Sep. 2010 - Present</span></li>]
                            .join(<li className={style.education__divider} />)
                    }
                </ul>
            </div>
            <div className="col-md-12">
                <h2 className="mb-2" data-aos="fade-right">Hobbies</h2>
                <div className={style.hobbies_list} data-aos="fade-right">
                    <Card text="Music" icon={<FaMusic />} />
                    <Card text="Astronomy" icon={<FaMeteor />} delay={150} />
                    <Card text="DJing and Producing" icon={<FaCompactDisc />} delay={300} />
                    <Card text="Researching" icon={<FaSearch />} delay={450} />
                    <Card text="Chess" icon={<FaChess />} delay={600} />
                </div>
            </div>
        </Section>
    )
}

export default About