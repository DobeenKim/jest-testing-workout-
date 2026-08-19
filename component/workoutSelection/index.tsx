import { Workout } from "../../types/workout"
import workouts from "../../data/workouts"
import workoutCard from "../../component/workoutCard"

interface workoutSelectionProps {
    handleClick : (workout: Workout) => void
}

const WorkoutSelection = ({handleClick}:workoutSelectionProps) => {
    return (
        <div>
            <h2>choose your workout</h2>
            <div data-testid="workout-selection">
        {workouts.map((workout) => (
            <WorkoutCard 
            key={workout.id}
            workout={workout}
            handleClick={handleClick}
            />
        ))}
            </div>
        </div>
    )
}

export default WorkoutSelection