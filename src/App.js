import React, { useEffect, useState } from 'react'
import style from './App.module.scss'
import "aos/dist/aos.css";
import AOS from 'aos'
import { useDispatch } from 'react-redux'
import * as actions from './state/actions'

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

// Services
import { db } from './utils/firebase'

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [loaderShow, setLoaderShow] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
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
        fetchData().then(() => {
            setLoaderShow(false)
            AOS.init({
                once: true
            })
        })
    }, [dispatch]);
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