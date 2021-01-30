import React, { useState } from 'react'
import style from './Contact.module.scss'
import { Section, SectionPart as Part } from '../components/Section'
import Loader from 'react-loader-spinner'
import { useToasts } from 'react-toast-notifications'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [loader, setLoader] = useState(false)

    const { addToast } = useToasts()

    const finalizeSubmit = (message, type) => {
        addToast(message, {
            appearance: type,
            autoDismiss: true,
            timeout: 500
        })
        setName('')
        setEmail('')
        setMessage('')
        setLoader(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true)
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, {
            name,
            email,
            message,
        }, process.env.REACT_APP_EMAILJS_USER)
            .then(() => finalizeSubmit('Message has been submitted', 'success'))
            .catch(e => finalizeSubmit(e.message, 'error'))

    }

    return (
        <Section id="contact" header="Contact">
            <Part aos="fade-right">
                <form className={style.contactForm} onSubmit={handleSubmit}>
                    <div className={style.formBody}>
                        <label htmlFor="name">Name</label>
                        <input required type="text" id="name" placeholder="Name..." value={name} onChange={(e) => { setName(e.target.value) }} />

                        <label htmlFor="email">E-mail</label>
                        <input required type="text" id="email" placeholder="E-mail..." value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        <label htmlFor="message">Message</label>
                        <textarea required rows={5} columns={20} type="text" id="message" placeholder="Message..." value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>

                        <button type="submit" className="btnPrimary">{
                            loader
                                ? <Loader
                                    type="TailSpin"
                                    color="#fff"
                                    height="28.8px"
                                    width="28.8px"
                                />

                                : "Submit"
                        }
                        </button>
                    </div>
                </form>
            </Part>
        </Section>
    )
}

export default Contact