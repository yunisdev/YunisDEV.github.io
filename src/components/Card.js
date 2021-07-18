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
        <svg height="0" width="0">
            <defs>
                <linearGradient id="DefaultGradient">
                    <stop offset="5%" stopColor={style.gradientFirst} />
                    <stop offset="95%" stopColor={style.gradientSecond} />
                </linearGradient>
            </defs>
        </svg>
    </div>
)

export const GithubRepoCard = ({ repo, delay }) => {
    return (
        <div data-aos="flip-left" data-aos-delay={delay} >
            <a href={"https://github.com/" + repo}><img style={{
                width: '100%',
                margin: 10,
                marginLeft: 0
            }} alt={repo + ' - Github'} src={"https://gh-card.dev/repos/" + repo + ".svg"} /></a>
        </div>
    )
}

export const GithubRepoCardList = ({ data, delayConst = 0 }) => (
    <div className={style.card_list} style={{
        paddingRight:10
    }} data-aos="fade-right">
        {
            data.map((value, index) => (
                <GithubRepoCard key={value} repo={value} delay={index * delayConst} />
            ))
        }
    </div>
)