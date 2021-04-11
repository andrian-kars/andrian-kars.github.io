import s from './Saber.module.scss'

const LukeSaber = () => {
    let lukeCount = 0

    const lukeSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        if (!lukeCount) {
            lightsaber.style.width = "300px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #03cafc, 0 0 20px #03cafc, 0 0 35px #03cafc, 0 0 40px #03cafc"
            lukeCount++
        } else {
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #03cafc"
            lukeCount--
        }
    }
    
    return <div>
        <input onClick={lukeSaber} type="button" className={s.hilt}></input>
        <div className={s.saber}></div>
    </div>
}

export default LukeSaber