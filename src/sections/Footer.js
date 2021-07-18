import React from 'react'
import { Section, SectionPart as Part } from '../components/Section'
import style from './Footer.module.scss'

const Footer = () => {


    return (
        <div className={"block " + style.footer}>
            <div className="inner-content">
                <div className="row" style={{ paddingBottom: 0 }}>
                    <p>&copy; 2021 Yunis Huseynzade</p>
                </div>
            </div>
        </div>
    )
}

export default Footer