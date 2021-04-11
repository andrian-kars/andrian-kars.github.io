import s from './Skills.module.scss'
import { AppStateType } from './../../redux/store'
import { connect } from 'react-redux'

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
            <div className={s.ability}>
                <p className={s.name}>{it.skill}</p>
                <p>{`${it.level}/5`}</p>
            </div>
            <p className={s.level}>{it.description}</p>
        </div>
    ))
    return <div className={s.skills}>
        <div className={s.content}>
            <div className={s.hardSkills}>{hardSkills}</div>

        </div>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    hard: state.skills.hard,
    soft: state.skills.soft,
    languages: state.skills.languages
})

export default connect(mapStateToProps, {})(Skills)