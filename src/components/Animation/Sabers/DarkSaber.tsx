import s from './Saber.module.scss'

type PropsType = {
    skill: string
    description: string
}

const DarkSaber: React.FC<PropsType> = (props) => {
    let darkCount = 0

    const darkSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        const text = lightsaber.children[0]
        if (!darkCount) {
            lightsaber.style.width = "350px"
            lightsaber.style.boxShadow = "0 0 5px #000, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #fff"
            setTimeout(() => {
                text.style.color = '#fff'
                text.style.fontSize = '13px'
                text.style.visibility = 'visible'
                text.style.opacity = '1'
            }, 500);
            darkCount++
        } else {
            text.style.visibility = 'hidden'
            text.style.opacity = '0'
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #000, 0 0 10px #fff, 0 0 15px #fff"
            darkCount--
        }
    }

    return <div className={s.sabers}>
        <button onClick={darkSaber} type="button" className={s.hilt}>{props.skill}</button>
        <div className={`${s.saber} ${s.darkSaber}`}><span>{props.description}</span></div>
    </div>
}

export default DarkSaber