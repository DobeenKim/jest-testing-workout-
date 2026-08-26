import { Workout } from "../../types/workout"
import Timer from "../Timer";

interface ActiveWorkoutProps {
    workout :Workout;
    goBack : () => void;
}

const ActiveWorkout = ({workout,goBack}:ActiveWorkoutProps) => {
    return (
        <div className="w-full px-4">
            <div className="w-full max-w-[400px] flex flex-col bg-white shadow-lg border border-gray-100 rounded-2xl mx-auto px-6 pb-6 pt-3 sm:p-8 gap-4">
                <button className="text-left text-amber-500 cursor-pointer text-[14px]" onClick={goBack}>Go back</button>
                <div className="text-center flex flex-col gap-5">
                    <p className="text-2xl font-bold">{workout.name}</p>
                    <Timer startTime={workout.workTime} />
                </div>
            </div>
        </div>
    )
}

export default ActiveWorkout