import { useEffect, useState } from 'react'
import s from './Saber.module.scss'

type PropsType = {
    skill?: string
    description: string
    color: string
    colorText: string
    activated: boolean
}

const LightSaber: React.FC<PropsType> = (props) => {
    const [activateSaber, setEditMode] = useState(props.activated)
    useEffect(() => {
        setEditMode(props.activated)
    }, [props.activated])
    const lightSaber = () => { setEditMode(!activateSaber) }

    return <div className={s.sabers}>
        <button onClick={lightSaber} type="button" className={s.hilt}>{props.skill ? props.skill : 'o' }</button>
        <div style={activateSaber
            ? { boxShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px ${props.color}, 0 0 20px ${props.color}, 0 0 35px ${props.color}, 0 0 40px ${props.color}` }
            : { boxShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px ${props.color}` }}
            className={activateSaber ? `${s.saber} ${s.activated}` : s.saber}>
            <span style={{ color: props.colorText }}>
                {props.description}
            </span>
        </div>
    </div>
}

export default LightSaber