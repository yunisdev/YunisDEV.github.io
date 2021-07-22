import React from 'react'
import { FaMusic, FaMeteor, FaCompactDisc, FaSearch, FaChess } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiDjango, SiFlask, SiHtml5, SiJavascript, SiJquery, SiJupyter, SiPostgresql, SiPython, SiReact } from 'react-icons/si'
import { DiGulp, DiSass } from 'react-icons/di'

import * as actions from './state/actions'
export async function fetchData(dispatch,db) {
    // Fetch Education data
    var educationQ = await db.collection('education').get()
    let educationData = []
    educationQ.docs.map((doc) => {
        educationData.push({ id: parseInt(doc.id), ...doc.data() })
        return null
    })
    educationData.sort((a, b) => b.id - a.id)
    dispatch(actions.setEducation(educationData))

    // Fetch Work data
    var workQ = await db.collection('work').get()
    let workData = []
    workQ.docs.map((doc) => {
        workData.push({ id: parseInt(doc.id), ...doc.data() })
        return null
    })
    workData.sort((a, b) => b.id - a.id)
    dispatch(actions.setWork(workData))

    // Fetch Social data
    var socialQ = await db.collection('social').get()
    let socialData = []
    socialQ.docs.map((doc) => {
        socialData.push({ id: parseInt(doc.id), ...doc.data() })
        return null
    })
    socialData.sort((a, b) => a.id - b.id)
    dispatch(actions.setSocial(socialData))
}

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