import React from 'react'
import style from './Hello.module.scss'
// import headerIllustration from '../images/header-illustration.svg'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MyPhoto from '../images/myimage.jpg'
import SocialButton from '../components/SocialButton'
import BlobbedPhoto from '../components/BlobbedPhoto'
import { useSelector } from 'react-redux'

const Hello = () => {
    const socialData = useSelector(state => state.social)
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
                        {
                            socialData.map((value, index) => {
                                return (
                                    <SocialButton key={value.id} name={value.name} url={value.url} color={value.color}>
                                        <span dangerouslySetInnerHTML={{ __html: value.icon }}></span>
                                    </SocialButton>
                                )
                            })
                        }
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