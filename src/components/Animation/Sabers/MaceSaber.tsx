import s from './Saber.module.scss'

const MaceSaber = () => {
    let maceCount = 0

    const maceSaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        if (!maceCount) {
            lightsaber.style.width = "300px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #8d00c4, 0 0 20px #8d00c4, 0 0 35px #8d00c4, 0 0 40px #8d00c4"
            maceCount++
        } else {
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #8d00c4"
            maceCount--
        }
    }

    return <div>
        <input onClick={maceSaber} type="button" className={s.hilt}></input>
        <div className={s.saber}></div>
    </div>
}

export default MaceSaber