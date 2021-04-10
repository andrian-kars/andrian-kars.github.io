import s from './Buttons.module.scss'

type PropsType = {
    href: string
    content: string
}

const ButtonTypeOne: React.FC<PropsType> = ({ href, content }) => {
    
    return <a href={href} className={s.horizontal} target='_blank' rel='noreferrer'><span className={s.text}>{content}</span></a>
}

export default ButtonTypeOne
