import s from './Saber.module.scss'

type PropsType = {
    skill: string
    description: string
}

const ReySaber: React.FC<PropsType> = (props) => {
    let reyCount = 0

    const reySaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        const text = lightsaber.children[0]
        if (!reyCount) {
            lightsaber.style.width = "350px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #eff222, 0 0 20px #eff222, 0 0 35px #eff222, 0 0 40px #eff222"
            setTimeout(() => {
                text.style.color = '#cccf14'
                text.style.visibility = 'visible'
                text.style.opacity = '1'
            }, 500);
            reyCount++
        } else {
            text.style.visibility = 'hidden'
            text.style.opacity = '0'
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #eff222"
            reyCount--
        }
    };

    return <div className={s.sabers}>
        <button onClick={reySaber} type="button" className={s.hilt}>{props.skill}</button>
        <div className={s.saber}><span>{props.description}</span></div>
    </div>
}

export default ReySaber