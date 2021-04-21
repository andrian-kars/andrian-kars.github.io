import { memo } from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { WorksType } from '../../Types'
import BucketOfBolts from '../Animation/BucketOfBolts/BucketOfBolts'
import s from './Works.module.scss'

export const Works: React.FC = memo(() => {
    const works: Array<WorksType> = useSelector((state: AppStateType) => state.works.works)

    const worksMapped = works.map(it => (
        <div key={it.name} style={{ backgroundImage: `url('${it.photo}'` }} className={s.work}>
            <a href={it.link} target='_blank' rel='noreferrer' className={s.workContent}>
                <h3>{it.name}</h3>
                <p>{it.technologies}</p>
                <p>{it.description}</p>
            </a>
        </div>
    ))
    
    return <div className={s.works}>
        <BucketOfBolts />
        <div className={s.content}>
            <div className={s.row}>
                {worksMapped[0]}
                {worksMapped[1]}
            </div>
            <div className={s.row}>
                {worksMapped[2]}
                {worksMapped[3]}
            </div>
        </div>
    </div>
})