'use client'
import { useState, useEffect} from "react"

interface startTimeProps {
    startTime: number
}

const Timer = ({startTime}:startTimeProps) => {
    const [isStarted, setIsStarted] = useState<boolean>(false) //사용자가 시작 버튼을 눌렀는가?
    const [time, setTime] = useState(startTime) //남은시간
    const [victory, setVictory] = useState<boolean>(false)

    useEffect(()=> {
        if(!isStarted || time <= 0) return
        const timer = setTimeout(() => {
            setTime((prev) => prev -1 )
        },1000)

        return ()=> clearTimeout(timer)
    },[isStarted,time])

    const handleReset = () => {
        if(time === 0){
            setTime(startTime)
            setIsStarted(false)
        } else {
            setIsStarted(true)
        }
    }

    const getButtonText = (): string => {
    if (time === 0) return "RESET"
    if (isStarted) return "LETS GO!"
    return "start";
    }

    const getButtonColor = () => {
        if (time === 0) {
            return "rounded-xl bg-amber-300 p-3 cursor-pointer text-white"
        }
        if (isStarted) {
            return "text-amber-300 font-bold"
        }
        return "rounded-xl bg-amber-300 p-3 cursor-pointer text-white"
            
    }

    return (
        <div className="flex flex-col gap-4">
            <span className="text-amber-300 text-5xl p-5 rounded-full border-6 border-amber-300 w-35 h-35 flex justify-center items-center mx-auto">{time}</span>
            {time === 0 && <p className="text-2xl text-green-500 font-bold">YOU DID IT!</p>}
            <button className={`text-xl p-3 mx-auto ${getButtonColor()}`} onClick={handleReset}>{getButtonText()}</button>
        </div>
    )
}

export default Timer