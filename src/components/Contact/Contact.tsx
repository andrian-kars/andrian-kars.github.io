import Mandalorian from '../Animation/Mandalorian/Mandalorian'
import s from './Contact.module.scss'
import NightSky from '../Animation/NightSky/NightSky'
import ButtonTypeTwo from '../Animation/ButtonTypeTwo/ButtonTypeTwo'

const Contact = () => {
    return <div className={s.contacts}>
        <NightSky />
        <Mandalorian />
        <div className={s.content}>
            <ButtonTypeTwo href={'https://www.linkedin.com/in/andrian-kars/'} content={'Get in touch'} />
        </div>
    </div>
}

export default Contact