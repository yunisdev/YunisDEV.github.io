import React, { useEffect, useState } from 'react'
import style from './App.module.scss'
import "aos/dist/aos.css";
import AOS from 'aos'
import axios from 'axios'

// Parts
import Nav from './sections/Nav'
import Hello from './sections/Hello'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Blog from './sections/Blog'
import Resume from './sections/Resume';
import Footer from './sections/Footer';

// Providers
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
    const [loaderShow, setLoaderShow] = useState(true)
    console.log(loaderShow)
    useEffect(() => {
        AOS.init({
            once: true
        })
        setLoaderShow(false)
        axios.get('https://gh-pinned-repos.now.sh/?username=yunisdev')
            .then(({ data }) => {
                console.log(data)
            })

    }, []);
    return (
        <ToastProvider placement="bottom-right">
            <div className={style.container}>
                <Nav />
                <Hello />
                <div className="ctr">
                    <About />
                    <Resume />
                    <Skills />
                    <Projects />
                    <Blog />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </ToastProvider>
    )
}

export default App