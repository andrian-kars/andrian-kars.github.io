import s from './Saber.module.scss'

type PropsType = {
    skill: string
}

const YodaSaber: React.FC<PropsType> = (props) => {
    let yodaCount = 0

    const yodaSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        const text = lightsaber.children[0]
        if (!yodaCount) {
            lightsaber.style.width = "450px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #02d60d, 0 0 20px #02d60d, 0 0 35px #02d60d, 0 0 40px #02d60d"
            setTimeout(() => {
                text.style.color = '#00c00a'
                text.style.visibility = 'visible'
                text.style.opacity = '1'
            }, 500);
            yodaCount++
        } else {
            text.style.visibility = 'hidden'
            text.style.opacity = '0'
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #02d60d"
            yodaCount--
        }
    }

    return <div className={s.sabers}>
        <button onClick={yodaSaber} type="button" className={s.hilt}>&#10026;</button>
        <div className={s.saber}><span>{props.skill}</span></div>
    </div>
}

export default YodaSaber