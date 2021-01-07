import React from 'react'

const Section = ({id,header,children}) => {
    return (
        <div id={id} className="block mb-4 col-md-12" data-target="contentPart" data-head-name={header}>
            <div className="inner-content">
                <h1 data-aos="fade-right">{header}<span className="dot">.</span></h1>
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Section