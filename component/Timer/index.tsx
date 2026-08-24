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
        if(isStarted) { 
            setInterval(()=> {//몇초마다 반복할지
                setTime((prev) => prev - 1)
            },1000)
        }
    },[isStarted])

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
    if (isStarted) return "LETS GO"
    return "start";
    }

    return (
        <div>
            <span>{time}</span>
            {time === 0 && <p>YOU DID IT!</p>}
            <button onClick={handleReset}>{getButtonText()}</button>
        </div>
    )
}

export default Timer