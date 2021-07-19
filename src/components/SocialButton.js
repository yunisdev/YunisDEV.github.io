import React from 'react'
import styled from 'styled-components'

const SocialButtonWrapper = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    padding: 10px;
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover{
        transform: scale(1.1)!important;
        box-shadow: 0px 0px 10px ${props => props.color};
    }
    border-radius: 10px!important;
    background-color: ${props => props.color}
`

const SocialButton = ({ children, name, color, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer" title={name}>
            <SocialButtonWrapper color={color}>
                {children}
            </SocialButtonWrapper>
        </a>
    );
}

export default SocialButton;