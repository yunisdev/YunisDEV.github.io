import React from 'react'
import { FaMusic, FaMeteor, FaCompactDisc, FaSearch, FaChess } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiDjango, SiFlask, SiHtml5, SiJavascript, SiJquery, SiJupyter, SiPostgresql, SiPython, SiReact } from 'react-icons/si'
import { DiGulp, DiSass } from 'react-icons/di'


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