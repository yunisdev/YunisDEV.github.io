import React from 'react'
import style from './Card.module.scss'

const Card = ({ text, icon, delay=0 }) => {
    return (
        <div className={style.card} data-aos="flip-left" data-aos-delay={delay}>
            <div className={style.card__inner + " text-center"}>
                {icon}<br />{text}
            </div>
        </div>
    )
}

export default Card