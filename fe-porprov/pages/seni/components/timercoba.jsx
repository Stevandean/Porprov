import { useContext, useEffect, useRef, useState } from "react";
import { globalState } from "../../../context/context";

const formatTIme = (time) => {
    let minutes = Math.floor (time / 60)
    let seconds = Math.floor (time - minutes * 60)

    if (minutes <= 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds
    return minutes + ':' + seconds
}

export default function countDown({second}) {
    const [countdown, setCountdown] = useState(second)
    const timerId = useRef()

    useEffect(() => {
        timerId.current = setInterval(()=> {
            setCountdown(prev => prev - 1)
        },1000)
        return () => clearInterval(timerId.current)
    },[])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval (timerId.current)
        }
    }, [countdown])

    return (
        <>
        <span className="text-xl font-bold">
            {formatTIme(countdown)}
        </span>
        </>
    )
}