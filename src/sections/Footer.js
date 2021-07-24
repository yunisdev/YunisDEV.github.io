import React from 'react'
import styled from 'styled-components'
import footerWave from '../images/footer-wave.svg'

const FooterWrapper = styled.div`
    background: url(${footerWave});
    height: 50vh;
    width: 100%;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    background-size: cover;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    p {
        transform: translateY(15px);
        background: ${props => props.theme.defaultGradient};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        width: 100%;
       font-size: large;
    } 
`

const Footer = () => {
    return (
        <FooterWrapper className={"block"}>
            <div className="inner-content">
                <div className="row" style={{ paddingBottom: 0 }}>
                    <p>&copy; 2021 Yunis Huseynzade</p>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer