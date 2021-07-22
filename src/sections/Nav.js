import React, { useState } from 'react'
import style from './Nav.module.scss'
import { Link as ScrollLink } from 'react-scroll'
import Dot from '../components/Dot'
import styled, { css } from 'styled-components'
import Toggler from '../components/NavbarToggler'

export const Link = ({ to, children }) => <ScrollLink activeClass={style.nav_link__active} className={style.nav_link} to={to} spy={true} hashSpy={true} smooth={true} duration={1000}>{children}</ScrollLink>


const NavBrand = styled.a`
    font-weight: 800 !important;
    color: rgba(0, 0, 0, 0.9) !important;
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    text-decoration:none!important;
`

const NavBar = styled.nav`
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 10px;
    width: calc(100% - 20px);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
    position: fixed!important;
    box-sizing: border-box!important;
    top: 0!important;
    left:0!important;
    z-index: 999;
`

const NavItemsList = styled.ul`
    @media (min-width:992px){
        min-height: 40px;
        align-items: center;
    }
`

const Nav = () => {
    return (
        <NavBar className="navbar navbar-expand-md navbar-light bg-light" data-aos="fade-down" data-aos-delay={500}>
            <NavBrand href="/">yunisdev<Dot /></NavBrand>
            <Toggler />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavItemsList className="ml-auto navbar-nav">
                    <li className="nav-item">
                        <Link to="hello">Hello</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact">Contact</Link>
                    </li>
                </NavItemsList>
            </div>
        </NavBar>
    )
}

export default Nav