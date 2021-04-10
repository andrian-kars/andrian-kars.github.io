import s from './Skills.module.scss'
import store from './../../redux/store'
const state = store.getState()
const skillsProps = state.skills

// type PropsType = {
//     hard: Array<{
//         skill: string
//         level: number
//         description: string
//     }>
//     soft: Array<{
//         skill: string
//     }>
//     languages: Array<{
//         skill: string
//         level: number
//         description: string
//     }>
// }

const Skills = () => {
    const hardSkills11 = skillsProps.hard.map(it => (
        <div className={s.item}>
            <div className={s.ability}>
                <p className={s.name}>{it.skill}</p>
                <p>{`${it.level}/5`}</p>
            </div>
            <p className={s.level}>{it.description}</p>
        </div>
    ))
    return <div className={s.home}>
        <div>{hardSkills11}</div>
        <div className={s.content}>
            <div className={s.hardSkills}>

            </div>

        </div>
    </div>
}

export default Skills