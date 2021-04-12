import s from './About.module.scss'
import DeathStar from '../Animation/DeathStar/DeathStar'
import { AppStateType } from '../../redux/store'
import { connect } from 'react-redux'
import { AboutType } from '../../Types'

type PropsType = {
    aboutInfo: Array<AboutType>
    educationInfo: Array<AboutType>
    experienceInfo: Array<AboutType>
}

const About: React.FC<PropsType> = ({ aboutInfo, educationInfo, experienceInfo}) => {
    const about = aboutInfo.map(it => <p className={s.aboutText}><span>{it.title}</span>{it.description}</p>)
    const education = educationInfo.map(it => <p className={s.text}><span>{it.title}</span>{it.description}</p>)
    const experience = experienceInfo.map(it => <p className={s.text}><span>{it.title}</span>{it.description}</p>)
    
    return <div className={s.about}>
        <DeathStar />
        <div className={s.content}>
            <div className={s.left}>
                <div className={s.item}>
                    <h3>Me, Myself & I</h3>
                    {about}
                </div>
                <div className={s.item}>
                    <h3>Education</h3>
                    {education}
                </div>
            </div>
            <div className={s.right}>
                <div className={s.item}>
                    <h3>Experience</h3>
                    {experience}
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    aboutInfo: state.about.aboutInfo,
    educationInfo: state.about.educationInfo,
    experienceInfo: state.about.experienceInfo
})

export default connect(mapStateToProps, {})(About)