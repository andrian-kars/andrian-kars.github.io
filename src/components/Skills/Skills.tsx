import s from './Skills.module.scss'
import { AppStateType } from './../../redux/store'
import { connect } from 'react-redux'
import LightSaber from '../Animation/LightSaber/LightSaber'
import ShootingStars from './../Animation/ShootingStars/ShootingStars'
import { HardType, LanguagesType, SoftType } from '../../Types'
import { useState } from 'react'

type PropsType = {
    hard: Array<HardType>
    soft: Array<SoftType>
    languages: Array<LanguagesType>
}

const Skills: React.FC<PropsType> = ({hard, soft, languages}) => {
    const [activateSaber, setEditMode] = useState(false)
    
    const lightSabers = () => { setEditMode(!activateSaber) }

    const hardSkills = hard.map((it:any) => (
        <div key={it.skill} className={s.item}>
            {it.level === 3 && <LightSaber color='#eff222' colorText='#cccf14' activated={activateSaber} skill={it.skill} description={it.description} />}
            {it.level === 4 && <LightSaber color='#ed0000' colorText='#ed0000' activated={activateSaber} skill={it.skill} description={it.description} />}
            {it.level === 5 && <LightSaber color='#03cafc' colorText='#00b1dd' activated={activateSaber} skill={it.skill} description={it.description} />}
        </div>
    ))
    const softSkills = soft.map((it:any) => (
        <div key={it.description} className={s.item}>
            {<LightSaber color='#02d60d' colorText='#00c00a' activated={activateSaber} description={it.description} />}
        </div>
    ))
    const languagesMapped = languages.map((it:any) => (
        <div key={it.skill} className={s.item}>
            {it.level === 3 && <LightSaber color='#8d00c4' colorText='#8d00c4' activated={activateSaber} skill={it.skill} description={it.description} />}
            {it.level === 2 && <LightSaber color='#0000FF' colorText='#001F76' activated={activateSaber} skill={it.skill} description={it.description} />}
            {it.level === 1 && <LightSaber color='#fff' colorText='#000' activated={activateSaber} skill={it.skill} description={it.description} />}
        </div>
    ))
    return <div className={s.skills}>
        <ShootingStars />
        <h2>My Hard and Soft <span onClick={lightSabers}>Lightsabers</span></h2>
        <p>if you are Force-sensitive you might be able to activate them<br />(try to click them or "Lightsabers" to activate all)</p>
        <div className={s.content}>
            <div className={s.hardSkills}>{hardSkills}</div>
            <div>
                <div className={s.hardSkills}>{languagesMapped}</div>
                <div className={s.hardSkills}>{softSkills}</div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    hard: state.skills.hard,
    soft: state.skills.soft,
    languages: state.skills.languages
})

export default connect(mapStateToProps, {})(Skills)