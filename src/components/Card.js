import React from 'react'
import style from './Card.module.scss'

export const Card = ({ text, icon, delay = 0 }) => {
    return (
        <div className={style.card} data-aos="flip-left" data-aos-delay={delay}>
            <div className={style.card__inner + " text-center"}>
                {icon}<br />{text}
            </div>
        </div>
    )
}

export const CardList = ({ data, delayConst = 0 }) => (
    <div className={style.card_list} data-aos="fade-right">
        {
            data.map((value, index) => (
                <Card key={value.name} text={value.name} icon={value.icon} delay={index * delayConst} />
            ))
        }
        <svg>
            <defs>
                <linearGradient id="DefaultGradient">
                    <stop offset="5%" stopColor={style.gradientFirst} />
                    <stop offset="95%" stopColor={style.gradientSecond} />
                </linearGradient>
            </defs>
        </svg>
    </div>
)