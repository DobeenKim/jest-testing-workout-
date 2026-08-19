import { workProps } from "../../types/workout"

const workoutCard = ({workout,handleClick}:workProps) => {
    
    return (
        <div>
            <div data-testid="workout-card">
                <h3>{workout.name}</h3>
                <p data-testid="workout-time">Work time: {workout.workTime} seconds</p>
                <button  onClick={()=> handleClick(workout)}>Start Workout </button>
            </div>
        </div>
    )
}

export default workoutCard