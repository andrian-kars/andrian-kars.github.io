import s from './Saber.module.scss'

type PropsType = {
    skill: string
    description: string
}

const LukeSaber: React.FC<PropsType> = (props) => {
    let lukeCount = 0

    const lukeSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        const text = lightsaber.children[0]
        if (!lukeCount) {
            lightsaber.style.width = "450px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #03cafc, 0 0 20px #03cafc, 0 0 35px #03cafc, 0 0 40px #03cafc"
            setTimeout(() => {
                text.style.color = '#00b1dd'
                text.style.visibility = 'visible'
                text.style.opacity = '1'
            }, 500);
            lukeCount++
        } else {
            text.style.visibility = 'hidden'
            text.style.opacity = '0'
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #03cafc"
            lukeCount--
        }
    }
    
    return <div className={s.sabers}>
        <button onClick={lukeSaber} type="button" className={s.hilt}>{props.skill}</button>
        <div className={s.saber}><span>{props.description}</span></div>
    </div>
}

export default LukeSaber