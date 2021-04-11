import s from './Saber.module.scss'

const YodaSaber = () => {
    let yodaCount = 0

    const yodaSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        if (!yodaCount) {
            lightsaber.style.width = "300px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #02d60d, 0 0 20px #02d60d, 0 0 35px #02d60d, 0 0 40px #02d60d"
            yodaCount++
        } else {
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #02d60d"
            yodaCount--
        }
    }

    return <div>
        <input onClick={yodaSaber} type="button" className={s.hilt}></input>
        <div className={s.saber}></div>
    </div>
}

export default YodaSaber