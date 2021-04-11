import s from './Saber.module.scss'

const DarkSaber = () => {
    let darkCount = 0

    const darkSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        if (!darkCount) {
            lightsaber.style.width = "300px"
            lightsaber.style.boxShadow = "0 0 5px #000, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #fff"
            darkCount++
        } else {
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #000, 0 0 10px #fff, 0 0 15px #fff"
            darkCount--
        }
    }

    return <div>
        <input onClick={darkSaber} type="button" className={s.hilt}></input>
        <div className={s.saber}></div>
    </div>
}

export default DarkSaber