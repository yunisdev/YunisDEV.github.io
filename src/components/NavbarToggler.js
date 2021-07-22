import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const togglerOpened = css`
    path:nth-child(1) {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
    path:nth-child(2) {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
    }
    path:nth-child(3) {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }
`
const togglerClosed = css`
    path:nth-child(1) {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
    path:nth-child(2) {
        stroke-dasharray: 60 60;
        stroke-width: 6;
    }
    path:nth-child(3) {
        stroke-dasharray: 60 207;
        stroke-width: 6;
    }
`

const Toggler = styled.button`
    @media (min-width: 768px){
        display:none!important;
    }
    background-color: transparent!important;
    border: none!important;
    cursor: pointer;
    svg {
        width: 40px;
        height: 40px;
    }
    outline: none !important;
    padding:0!important;
    color: rgba(0,0,0,.5);
    border-radius: .25rem;
    font-size: 1.25rem;
    line-height: 1;
    path{
        fill: none;
        stroke: ${props => props.theme.black};
        stroke-width: 6;
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    ${props => props.opened
        ? togglerOpened
        : togglerClosed

    }
`

const NavbarToggler = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <Toggler opened={menuOpened} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={menuOpened} aria-label="Toggle navigation" onClick={() => { setMenuOpened(!menuOpened) }}>
            <svg viewBox="0 0 100 100">
                <path d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path d="M 20,50 H 80" />
                <path d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </Toggler>
    );
}

export default NavbarToggler