import s from './Skills.module.scss'
import { AppStateType } from './../../redux/store'
import { connect } from 'react-redux'
import ReySaber from '../Animation/Sabers/ReySaber'
import VaderSaber from '../Animation/Sabers/VaderSaber'
import LukeSaber from '../Animation/Sabers/LukeSaber'
import YodaSaber from '../Animation/Sabers/YodaSaber'
import AhsokaSaber from '../Animation/Sabers/AhsokaSaber'
import MaceSaber from '../Animation/Sabers/MaceSaber'
import DarkSaber from '../Animation/Sabers/DarkSaber'

type PropsType = {
    hard: Array<{
        skill: string
        level: number
        description: string
    }>
    soft: Array<{
        skill: string
    }>
    languages: Array<{
        skill: string
        level: number
        description: string
    }>
}

const Skills: React.FC<PropsType> = ({hard, soft, languages}) => {
    const hardSkills = hard.map((it:any) => (
        <div key={it.skill} className={s.item}>
            {it.level === 3 && <ReySaber skill={it.skill} description={it.description} />}
            {it.level === 4 && <VaderSaber skill={it.skill} description={it.description} />}
            {it.level === 5 && <LukeSaber skill={it.skill} description={it.description} />}
        </div>
    ))
    const softSkills = soft.map((it:any) => (
        <div key={it.skill} className={s.item}>
            {<YodaSaber skill={it.skill} />}
        </div>
    ))
    const languagesMapped = languages.map((it:any) => (
        <div key={it.skill} className={s.item}>
            {it.level === 3 && <MaceSaber skill={it.skill} description={it.description} />}
            {it.level === 2 && <AhsokaSaber skill={it.skill} description={it.description} />}
            {it.level === 1 && <DarkSaber skill={it.skill} description={it.description} />}
        </div>
    ))
    return <div className={s.skills}>
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