import Mandalorian from '../Animation/Mandalorian/Mandalorian'
import s from './Contact.module.scss'
import NightSky from '../Animation/NightSky/NightSky'
import ButtonTypeTwo from '../Animation/ButtonTypeTwo/ButtonTypeTwo'
import { memo } from 'react'

export const Contact: React.FC = memo(() => {
    return <div className={s.contacts}>
        <NightSky />
        <Mandalorian />
        <div className={s.content}>
            <ButtonTypeTwo href={'https://www.linkedin.com/in/andrian-kars/'} content={'Get in touch'} />
        </div>
    </div>
})