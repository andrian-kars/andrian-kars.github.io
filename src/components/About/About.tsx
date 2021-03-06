import s from './About.module.scss'
import DeathStar from '../Animation/DeathStar/DeathStar'
import { AppStateType } from '../../redux/store'
import { useSelector } from 'react-redux'
import { memo } from 'react'


export const About: React.FC = memo(() => {
    const aboutInfo = useSelector((state: AppStateType) => state.about.aboutInfo)
    const educationInfo = useSelector((state: AppStateType) => state.about.educationInfo)
    const experienceInfo = useSelector((state: AppStateType) => state.about.experienceInfo)

    const about = aboutInfo.map(it => (<div key={it.title} className={s.item}>
        <p className={s.titleAbout}>{it.title}<span className={s.descriptionAbout}>{it.description}</span></p>
    </div>))

    const education = educationInfo.map(it => (<div key={it.title} className={s.item}>
        <p className={s.title}>{it.title}<span className={s.time}>{it.time}</span></p>
        <p className={s.description}>{it.description}</p>
    </div>))

    const experience = experienceInfo.map(it => (<div key={it.title} className={s.item}>
        <p className={s.title}>{it.title}<span className={s.time}>{it.time}</span><a href={it.link} target='_blank' rel='noreferrer' className={s.link}>see here</a></p>
        <p className={s.description}>{it.description}</p>
    </div>))

    return <div className={s.about}>
        <DeathStar />
        <div className={s.content}>
            <div className={s.left}>
                <div className={`${s.section} ${s.sectionAbout}`}>
                    <h3>Me, Myself & I</h3>
                    {about}
                </div>
                <div className={s.section}>
                    <h3>Education</h3>
                    <div className={s.items}>
                        {education}
                    </div>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.section}>
                    <h3>Experience</h3>
                    <div className={s.items}>
                        {experience}
                    </div>
                </div>
            </div>
        </div>
    </div>
})