import React, { useState } from 'react'
import { Section, SectionPart as Part } from '../components/Section'
import Loader from 'react-loader-spinner'
import { useToasts } from 'react-toast-notifications'
import emailjs from 'emailjs-com'
import styled from 'styled-components'

const ContactForm = styled.form`
    width: 100%;
    @media (max-width: 770px) {
        > *{
            width: 100%!important;
        }
    }
`

const FormBody = styled.div`
    width: 500px;
    * {
        display: block;
        width: 100%;
    }
`

const TextArea = styled.textarea`
    padding: 7px 15px;
    background-color: ${props => props.theme.gray};
    margin-bottom: 20px;
    border: none;
    border-radius: 0.25rem;
`

const Input = styled.input`
    padding: 7px 15px;
    background-color: ${props => props.theme.gray};
    margin-bottom: 20px;
    border: none;
    border-radius: 0.25rem;
`

const Label = styled.label`
    padding: 5px 0px;
`

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
                <ContactForm onSubmit={handleSubmit}>
                    <FormBody>
                        <Label htmlFor="name">Name</Label>
                        <Input required type="text" id="name" placeholder="Name..." value={name} onChange={(e) => { setName(e.target.value) }} />

                        <Label htmlFor="email">E-mail</Label>
                        <Input required type="text" id="email" placeholder="E-mail..." value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        <Label htmlFor="message">Message</Label>
                        <TextArea required rows={5} columns={20} type="text" id="message" placeholder="Message..." value={message} onChange={(e) => { setMessage(e.target.value) }}></TextArea>

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
                    </FormBody>
                </ContactForm>
            </Part>
        </Section>
    )
}

export default Contact