import s from './Saber.module.scss'

type PropsType = {
    skill: string
    description: string
}

const VaderSaber: React.FC<PropsType> = (props) => {
    let vaderCount = 0

    const vaderSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        const text = lightsaber.children[0]
        if (!vaderCount) {
            lightsaber.style.width = "400px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ed0000, 0 0 20px #ed0000, 0 0 35px #ed0000, 0 0 40px #ed0000"
            setTimeout(() => {
                text.style.color = '#ed0000'
                text.style.visibility = 'visible'
                text.style.opacity = '1'
            }, 500);
            vaderCount++
        } else {
            text.style.visibility = 'hidden'
            text.style.opacity = '0'
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ed0000"
            vaderCount--
        }
    }

    return <div className={s.sabers}>
        <button onClick={vaderSaber} type="button" className={s.hilt}>{props.skill}</button>
        <div className={s.saber}><span>{props.description}</span></div>
    </div>
}

export default VaderSaber