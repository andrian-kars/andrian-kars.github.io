import s from './Saber.module.scss'

const AhsokaSaber = () => {
    let ahsokaCount = 0

    const ahsokaSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        if (!ahsokaCount) {
            lightsaber.style.width = "300px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 35px #fff, 0 0 40px #fff"
            ahsokaCount++
        } else {
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff"
            ahsokaCount--
        }
    }

    return <div>
        <input onClick={ahsokaSaber} type="button" className={s.hilt}></input>
        <div className={s.saber}></div>
    </div>
}

export default AhsokaSaber