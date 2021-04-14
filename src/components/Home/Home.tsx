import s from './Home.module.scss'
import vader from './../../images/background/vader.png'
import ButtonTypeOne from './../Animation/ButtonTypeOne/ButtonTypeOne'
import NightSky from './../Animation/NightSky/NightSky'
import CV from './../../images/cv.pdf'

const Home = () => {
    return <div className={s.home}>
        <NightSky />
        <div className={s.content}>
            <h1>Hi,<br/>
                I'm <span>Andrian,</span><br />
                Software Engineer.</h1>
            <p>Frontend Developer / Dark Theme Programmer</p>
            <div className={s.buttons}>
                <ButtonTypeOne href={'https://www.linkedin.com/in/andrian-kars/'} content={'Get in touch'} />
                <ButtonTypeOne href={CV} content={'My CV'} />
            </div>
        </div>
        <div style={{ backgroundImage: `url('${vader}'` }} className={s.image}></div>
    </div>
}

export default Home