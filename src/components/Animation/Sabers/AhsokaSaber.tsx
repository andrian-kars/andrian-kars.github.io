import s from './Saber.module.scss'

type PropsType = {
    skill: string
    description: string
}

const AhsokaSaber: React.FC<PropsType> = (props) => {
    let ahsokaCount = 0

    const ahsokaSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        const text = lightsaber.children[0]
        if (!ahsokaCount) {
            lightsaber.style.width = "400px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #fff"
            setTimeout(() => {
                text.style.color = '#000'
                // text.style.fontSize = '13px'
                text.style.visibility = 'visible'
                text.style.opacity = '1'
            }, 500);
            ahsokaCount++
        } else {
            text.style.visibility = 'hidden'
            text.style.opacity = '0'
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff"
            ahsokaCount--
        }
    }

    return <div className={s.sabers}>
        <button onClick={ahsokaSaber} type="button" className={s.hilt}>{props.skill}</button>
        <div className={s.saber}><span>{props.description}</span></div>
    </div>
}

export default AhsokaSaber