import s from './Saber.module.scss'

const VaderSaber = () => {
    let vaderCount = 0

    const vaderSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        if (!vaderCount) {
            lightsaber.style.width = "300px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ed0000, 0 0 20px #ed0000, 0 0 35px #ed0000, 0 0 40px #ed0000"
            vaderCount++
        } else {
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ed0000"
            vaderCount--
        }
    }

    return <div>
        <input onClick={vaderSaber} type="button" className={s.hilt}></input>
        <div className={s.saber}></div>
    </div>
}

export default VaderSaber