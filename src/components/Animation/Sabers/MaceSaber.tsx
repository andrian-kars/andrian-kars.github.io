import s from './Saber.module.scss'

type PropsType = {
    skill: string
    description: string
}

const MaceSaber: React.FC<PropsType> = (props) => {
    let maceCount = 0

    const maceSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        const text = lightsaber.children[0]
        if (!maceCount) {
            lightsaber.style.width = "450px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #8d00c4, 0 0 20px #8d00c4, 0 0 35px #8d00c4, 0 0 40px #8d00c4"
            setTimeout(() => {
                text.style.color = '#8d00c4'
                text.style.visibility = 'visible'
                text.style.opacity = '1'
            }, 500);
            maceCount++
        } else {
            text.style.visibility = 'hidden'
            text.style.opacity = '0'
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #8d00c4"
            maceCount--
        }
    }

    return <div className={s.sabers}>
        <button onClick={maceSaber} type="button" className={s.hilt}>{props.skill}</button>
        <div className={s.saber}><span>{props.description}</span></div>
    </div>
}

export default MaceSaber