import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MyPhoto from '../images/myimage.jpg'
import SocialButton from '../components/SocialButton'
import BlobbedPhoto from '../components/BlobbedPhoto'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import headerWave from '../images/wave.svg'

const Header = styled.header`
    height: calc(100vh - 100px);
    background: url(${headerWave});
    background-size: cover;
    background-position: -600px 0px;
    background-repeat: no-repeat;
    padding: 180px 20px 0px 20px;
    @media (max-width: 770px) {
        flex-direction: column;
        align-content: space-between !important;
        padding-top: 100px;
    }
    box-sizing: border-box !important;
    > div {
        box-sizing: border-box !important;
    }
`

const HeaderImage = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50%;
    img {
        width: 100%;
    }
    @media (max-width: 770px) {
        height: fit-content;
        justify-content: center;
        margin: 20px;
        img {
            width: 90%;
        }
    }
`

const HeaderText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50%;
    @media (max-width: 770px) {
        height: fit-content;
        justify-content: center;
    }
`

const HeaderTextInner = styled.div`
    p {
        font-size: 2.5rem;
        margin: 0;
        @media only screen and (max-width: 670px) {
            font-size: 2rem !important;
        }
        @media only screen and (max-width: 390px) {
            font-size: 1.7rem !important;
        }
        @media only screen and (max-width: 350px) {
            font-size: 1.5rem !important;
        }
        span {
            font-weight: 800 !important;
            background: ${props => props.theme.defaultGradient};
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`

const LearnMoreContainer = styled.div`
    height: fit-content;
    position: absolute !important;
    left: 0;
    bottom: 50px;
    @media (max-width: 770px) {
        bottom: 50px;
    }
`

const LearnMoreButton = styled(Link)`
    color: white !important;
    text-decoration: none !important;
    cursor: pointer;
    svg {
        transition: all ease 0.3s;
    }
    &:hover {
        svg {
            transform: rotateZ(90deg);
        }
    }
`

const SocialButtonWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

const Hello = () => {
    const socialData = useSelector(state => state.social)
    return (
        <Header id="hello" className="row" data-aos="fade-down">
            <HeaderImage className="col-md-6 mb-md-4" data-aos="fade-right" data-aos-delay={1000}>
                <BlobbedPhoto photo={MyPhoto} />
            </HeaderImage>
            <HeaderText className="col-md-6 mb-md-4" data-aos="fade-left" data-aos-delay={1500}>
                <HeaderTextInner>
                    <p>My name is <span>Yunis.</span></p>
                    <p>I'm <span>Web Developer.</span></p>
                    <SocialButtonWrapper>
                        {
                            socialData.map((value, index) => {
                                return (
                                    <SocialButton key={value.id} name={value.name} url={value.url} color={value.color}>
                                        <span dangerouslySetInnerHTML={{ __html: value.icon }}></span>
                                    </SocialButton>
                                )
                            })
                        }
                    </SocialButtonWrapper>
                </HeaderTextInner>
            </HeaderText>
            <LearnMoreContainer className="col-md-12 text-center" data-aos="fade-up" data-aos-delay={2000}>
                <LearnMoreButton to="about" id="learnMoreButton" className="btnPrimary" spy={true} smooth={true} duration={1000}>Learn More <FaArrowRight /></LearnMoreButton>
            </LearnMoreContainer>
        </Header>
    )
}

export default Hello