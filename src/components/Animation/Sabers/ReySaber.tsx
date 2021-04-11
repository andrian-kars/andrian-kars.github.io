import s from './Saber.module.scss'

const ReySaber = () => {
    let reyCount = 0

    const reySaber = (e: any) => {
        const lightsaber = e.currentTarget.parentElement.children[1]
        if (!reyCount) {
            lightsaber.style.width = "300px"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #eff222, 0 0 20px #eff222, 0 0 35px #eff222, 0 0 40px #eff222"
            reyCount++
        } else {
            lightsaber.style.width = "0"
            lightsaber.style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #eff222"
            reyCount--
        }
    };

    return <div>
        <input onClick={reySaber} type="button" className={s.hilt}></input>
        <div className={s.saber}></div>
    </div>
}

export default ReySaber