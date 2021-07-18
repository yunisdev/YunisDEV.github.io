import React from 'react'
import style from './Hello.module.scss'
// import headerIllustration from '../images/header-illustration.svg'
import { FaArrowRight, FaTelegram } from 'react-icons/fa'
import { FaFacebookF, FaGithub, FaMediumM, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MyPhoto from '../images/myimage.jpg'

const Hello = () => {
    return (
        <header id="hello" className={style.header_container + " row"} data-aos="fade-down">
            <div className={style.header__image + " col-md-6 mb-md-4"} data-aos="fade-right" data-aos-delay={1000}>
                {/* <img src={headerIllustration} width="100%" alt="Header Illustration" /> */}
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="50%" id="blobSvg">
                    <pattern id="img1" width="1" height="1">
                        <image href={MyPhoto} x="-50" y="-50" width="100%" height="100%" />
                    </pattern>
                    <path id="blob" d="M431,287.5Q417,325,392.5,353Q368,381,338,405.5Q308,430,268,445.5Q228,461,177,462.5Q126,464,105,417.5Q84,371,63.5,332.5Q43,294,32,247.5Q21,201,58.5,169.5Q96,138,122,105.5Q148,73,186.5,44Q225,15,268,38.5Q311,62,364,63.5Q417,65,435,112.5Q453,160,449,205Q445,250,431,287.5Z" fill="url(#img1)"></path>
                </svg>
            </div>
            <div className={style.header__text + " col-md-6 mb-md-4"} data-aos="fade-left" data-aos-delay={1500}>
                <div className={style.header__text__inner}>
                    <p>My name is <span>Yunis.</span></p>
                    <p>I'm <span>Web Developer.</span></p>
                    <div className={style.socialButtons}>
                        <div name="telegram"><FaTelegramPlane color="white" /></div>
                        <div name="github"><FaGithub color="white"/></div>
                        <div name="linkedin"><FaLinkedinIn color="white" /></div>
                        <div name="medium"><FaMediumM color="white" /></div>
                        <div name="facebook"><FaFacebookF color="white" /></div>
                    </div>
                </div>
            </div>
            <div className={style.learn_more_container + " col-md-12 text-center"} data-aos="fade-up" data-aos-delay={2000}>
                <Link to="about" id="learnMoreButton" className={style.learn_more_btn + " btnPrimary"} spy={true} smooth={true} duration={1000}>Learn More <FaArrowRight /></Link>
            </div>
        </header>
    )
}

export default Hello