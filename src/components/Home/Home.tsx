import s from './Home.module.scss'
import vader from './../../images/background/vader.png'
import ButtonTypeOne from './../Animation/ButtonTypeOne/ButtonTypeOne'
import NightSky from './../Animation/NightSky/NightSky'

const Home = () => {
    return <div className={s.home}>
        <NightSky />
        <div className={s.content}>
            <h1>Hi,<br/>
                I'm <span>Andrian,</span><br />
                Software Engineer.</h1>
            <p>Frontend Developer / Dark Theme Programmer</p>
            <ButtonTypeOne href={'https://www.linkedin.com/in/andrian-kars/'} content={'Get in touch'} />
        </div>
        <div style={{ backgroundImage: `url('${vader}'` }} className={s.image}></div>
    </div>
}

export default Home