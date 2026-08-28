'use client'
import { useState, useEffect} from "react"

interface startTimeProps {
    startTime: number
}

const Timer = ({startTime}:startTimeProps) => {
    const [isStarted, setIsStarted] = useState<boolean>(false) //사용자가 시작 버튼을 눌렀는가?
    const [time, setTime] = useState(startTime) //남은시간

    useEffect(()=> {
        if(!isStarted || time <= 0) return
        const timer = setTimeout(() => {
            setTime((prev) => prev -1 )
        },1000)

        return ()=> clearTimeout(timer)
    },[isStarted,time])

    const progressPercent = ((startTime - time) /startTime) *100

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
        <div className="flex flex-col gap-4 w-full">
            <div
                className="relative flex items-center justify-center mx-auto rounded-full p-2 transition-all duration-1000 ease-linear"
                role="progressbar"
                style={{
                    width: "160px",
                    height: "160px",
                    background: `conic-gradient(#fcd34d ${progressPercent}%, #e2e8f0 0%)`,
                }}
            >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <span className="text-5xl font-bold text-amber-400">
                        {time}
                    </span>
                </div>
            </div>
            {time === 0 && <p className="text-2xl text-green-500 font-bold">YOU DID IT!</p>}
            <button className={`text-xl p-3 mx-auto ${getButtonColor()}`} onClick={handleReset}>{getButtonText()}</button>
        </div>
    )
}

export default Timer