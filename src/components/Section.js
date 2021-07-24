import React from 'react'
import { Element } from 'react-scroll'
import Dot from './Dot'

export const Section = ({ id, header, children, spaceDown = false, className = "", ...props }) => {
    return (
        <Element name={id} id={id} className={"block col-md-12" + (spaceDown ? " mb-4" : "") + " " + className} data-target="contentPart" data-head-name={header} {...props}>
            <div className="inner-content">
                <h1 data-aos="fade-right">{header}<Dot /></h1>
                <div className="row" style={{ paddingBottom: 0 }}>
                    {children}
                </div>
            </div>
        </Element>
    )
}

export const SectionPart = ({ children, title = false, className = [], aos = "", colSize = 12 }) => {
    return (
        <div className={`col-md-${colSize} ` + (className.join ? className.join(' ') : className)} data-aos={aos}>
            {title ? <h2 className="mb-2" data-aos="fade-right">{title}</h2> : null}
            {children}
        </div>
    )
}

export const SectionTextBox = ({ children }) => (
    <div className="col-md-9 mb-4" data-aos="fade-right">
        {children}
    </div>
)