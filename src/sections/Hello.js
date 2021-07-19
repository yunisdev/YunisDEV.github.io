import React from 'react'
import style from './Hello.module.scss'
// import headerIllustration from '../images/header-illustration.svg'
import { FaArrowRight, FaFacebookF, FaGithub, FaMediumM, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MyPhoto from '../images/myimage.jpg'
import SocialButton from '../components/SocialButton'
import BlobbedPhoto from '../components/BlobbedPhoto'

const Hello = () => {
    return (
        <header id="hello" className={style.header_container + " row"} data-aos="fade-down">
            <div className={style.header__image + " col-md-6 mb-md-4"} data-aos="fade-right" data-aos-delay={1000}>
                {/* <img src={headerIllustration} width="100%" alt="Header Illustration" /> */}
                <BlobbedPhoto photo={MyPhoto} />
            </div>
            <div className={style.header__text + " col-md-6 mb-md-4"} data-aos="fade-left" data-aos-delay={1500}>
                <div className={style.header__text__inner}>
                    <p>My name is <span>Yunis.</span></p>
                    <p>I'm <span>Web Developer.</span></p>
                    <div className={style.socialButtons}>
                        <SocialButton name="Telegram" url="https://t.me/yunisdev" color="#0088CC">
                            <FaTelegramPlane color="white" />
                        </SocialButton>
                        <SocialButton name="Github" url="https://github.com/yunisdev" color="#211F1F">
                            <FaGithub color="white" />
                        </SocialButton>
                        <SocialButton name="Linkedin" url="https://www.linkedin.com/in/yunisdev/" color="#2867B2">
                            <FaLinkedinIn color="white" />
                        </SocialButton>
                        <SocialButton name="Medium" url="https://yunisdev.medium.com/" color="#000000">
                            <FaMediumM color="white" />
                        </SocialButton>
                        <SocialButton name="Facebook" url="https://www.facebook.com/yunisdev" color="#4267b2">
                            <FaFacebookF color="white" />
                        </SocialButton>
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