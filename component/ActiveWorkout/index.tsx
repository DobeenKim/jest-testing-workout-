import { Workout } from "typescript"
import Timer from "../Timer";

interface ActiveWorkoutProps {
    workout :Workout;
    goBack : () => void;
}

const ActiveWorkout = ({workout,goBack}:ActiveWorkoutProps) => {
    return (
        <div>
            <p>{workout.name}</p>
            <Timer startTime={workout.workTime} />
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default ActiveWorkout