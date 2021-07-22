import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'


const CardWrapper = styled.div`
    @media only screen and (max-width: 790px) {
        width:100%!important;
    }
    height: 150px;
    border-radius: 20px;
    margin: 10px;
    margin-left: 0;
    padding: 20px;
    box-sizing: border-box;
    display: table;
    cursor: pointer;
    background: ${props => props.theme.gray};
`

const CardInner = styled.div`
    background: ${props => props.theme.defaultGradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 700;
    font-size: 20px;
    width: 100%;
    height: 100%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    & svg {
        fill: url(#DefaultGradient) !important;
    }
`

export const Card = ({ text, icon, delay = 0 }) => {
    return (
        <CardWrapper data-aos="flip-left" data-aos-delay={delay}>
            <CardInner className="text-center">
                {icon}<br />{text}
            </CardInner>
        </CardWrapper>
    )
}

const CardListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
`

export const CardList = ({ data, delayConst = 0 }) => {
    const theme = useContext(ThemeContext)

    return (
        <CardListWrapper data-aos="fade-right">
            {
                data.map((value, index) => (
                    <Card key={value.name} text={value.name} icon={value.icon} delay={index * delayConst} />
                ))
            }
            <svg height="0" width="0">
                <defs>
                    <linearGradient id="DefaultGradient">
                        <stop offset="5%" stopColor={theme.blue} />
                        <stop offset="95%" stopColor={theme.purple} />
                    </linearGradient>
                </defs>
            </svg>
        </CardListWrapper>
    )
}