import React, { useEffect, useState } from 'react'
import "aos/dist/aos.css";
import AOS from 'aos'
import { useDispatch } from 'react-redux'

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
import Loader from './components/Loader'

// Providers
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components'

// Services
import { db } from './utils/firebase'
import { fetchData } from './data'

import AppContainer from './components/AppContainer'
import theme from './theme'

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [loaderShow, setLoaderShow] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchData(dispatch, db).then(() => {
            setLoaderShow(false)
            AOS.init({
                once: true
            })
        })
    }, [dispatch]);
    return (
        <ThemeProvider theme={theme}>
            <ToastProvider placement="bottom-right">
                {loaderShow && <Loader />}
                <AppContainer>
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
                </AppContainer>
            </ToastProvider>
        </ThemeProvider>
    )
}

export default App