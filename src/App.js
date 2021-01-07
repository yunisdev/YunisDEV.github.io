import React, { useEffect, useState } from 'react'
import style from './App.module.scss'
import "aos/dist/aos.css";
import AOS from 'aos'
import axios from 'axios'

// Components
import Nav from './sections/Nav'
import Hello from './sections/Hello'
import About from './sections/About'

const App = () => {
    const [loaderShow, setLoaderShow] = useState(true)
    console.log(loaderShow)
    useEffect(() => {
        AOS.init({
            once:true
        })
        setLoaderShow(false)
        axios.get('https://gh-pinned-repos.now.sh/?username=yunisdev')
            .then(({ data }) => {
                console.log(data)
            })

        
        
    }, []);
    return (
        <div className={style.container}>
            <Nav />
            <Hello />
            <div className="ctr">
                <About />
            </div>
        </div>
    )
}

export default App