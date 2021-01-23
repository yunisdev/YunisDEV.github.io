import React from 'react'

const HeaderSvg = ({children}) => {
    return (
        <svg data-aos="fade-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{
            height: 700,
            position: 'absolute',
            top: -150,
            left: -200,
            zIndex: -1,
            opacity: 0.4,
        }}>
            {children}
        </svg>
    )
}


export default HeaderSvg