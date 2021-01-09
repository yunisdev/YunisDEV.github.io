import React from 'react'

export const Section = ({ id, header, children }) => {
    return (
        <div id={id} className="block col-md-12" data-target="contentPart" data-head-name={header}>
            <div className="inner-content">
                <h1 data-aos="fade-right">{header}<span className="dot">.</span></h1>
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}

export const SectionPart = ({ children, title, className = [], aos = "" }) => {
    return (
        <div className={"col-md-12 " + className.join(' ')} data-aos={aos}>
            <h2 className="mb-2" data-aos="fade-right">{title}</h2>
            {children}
        </div>
    )
}

export const SectionTextBox = ({ children }) => (
    <div className="col-md-6 mb-4" data-aos="fade-right">
        {children}
    </div>
)