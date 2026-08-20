import { Workout } from "../../types/workout"
import {workouts} from "../../data/workouts"
import WorkoutCard from "../WorkoutCard"

interface workoutSelectionProps {
    onSelect : (workout:Workout)=> void
}


const WorkoutSelection = ({onSelect}:workoutSelectionProps) => {
    return (
        <div>
            <h2>choose your workout</h2>
            <div data-testid="workout-selection">
                {workouts.map((data) => (
                    <WorkoutCard 
                    key={data.id}
                    workout={data}
                    handleClick={onSelect}
                    />
                ))}
            </div>
        </div>
    )
}

export default WorkoutSelection