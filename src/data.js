import React from 'react'
import { FaMusic, FaMeteor, FaCompactDisc, FaSearch, FaChess } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiDjango, SiFlask, SiHtml5, SiJavascript, SiJquery, SiJupyter, SiPostgresql, SiPython, SiReact } from 'react-icons/si'
import { DiGulp, DiSass } from 'react-icons/di'

export let educationData = [
    {
        name: 'Pragmatech Education and Development Center',
        date: 'August 2020 - January 2021',
        desc: 'I learned many programming skills and gained a lot of experience here. I also learned how to learn.'
    },
    {
        name: 'School no. 309',
        date: 'September 2010 - July 2021',
        desc: 'I learned first things in my education here.'
    }
]

export let workData = [
    {
        name: 'Support Team @ Pragmatech Education and Development Center',
        date: 'November 2021 - January 2021',
        desc: 'I helped students who has problems with lessons.'
    }
]

export let hobbies = [
    {
        name: 'Music',
        icon: <FaMusic />
    },
    {
        name: 'Astonomy',
        icon: <FaMeteor />
    },
    {
        name: 'DJing and Producing',
        icon: <FaCompactDisc />
    },
    {
        name: 'Researching',
        icon: <FaSearch />
    },
    {
        name: 'Chess',
        icon: <FaChess />
    }
]
export let skillsProgrammingLanguages = [
    {
        name: 'HTML5',
        icon: <SiHtml5 />
    },
    {
        name: 'CSS3',
        icon: <SiCss3 />
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript />
    },
    {
        name: 'Python',
        icon: <SiPython />
    }
]

export let skillsTechnologies = [
    {
        name: 'Bootstrap',
        icon: <SiBootstrap />
    },
    {
        name: 'Sass',
        icon: <DiSass />
    },
    {
        name: 'jQuery',
        icon: <SiJquery />
    },
    {
        name: 'React',
        icon: <SiReact />
    },
    {
        name: 'Gulp',
        icon: <DiGulp />
    },
    {
        name: 'Django',
        icon: <SiDjango />
    },
    {
        name: 'Flask',
        icon: <SiFlask />
    },
    {
        name: 'PostgreSQL',
        icon: <SiPostgresql />
    },
    {
        name: 'Jupyter Notebook',
        icon: <SiJupyter />
    }
]

export const jsPackages = [
    'yunisdev/templatit',
    'yunisdev/vanilla-counter'
]