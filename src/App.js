import React, { useEffect, useState } from 'react'
import style from './App.module.scss'
import Nav from './components/Nav'
import "aos/dist/aos.css";
import AOS from 'aos'
import axios from 'axios'

const App = () => {
    const [loaderShow, setLoaderShow] = useState(true)
    console.log(loaderShow)
    useEffect(() => {
        AOS.init()
        setLoaderShow(false)
        axios.get('https://gh-pinned-repos.now.sh/?username=yunisdev')
            .then(({data})=>{
                console.log(data)
            })
    }, []);
    return (
        <div className={style.container}>
            <Nav />
        </div>
    )
}

export default App