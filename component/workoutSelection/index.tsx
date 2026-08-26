import { Workout } from "../../types/workout"
import {workouts} from "../../data/workouts"
import WorkoutCard from "../WorkoutCard"

interface workoutSelectionProps {
    onSelect : (workout:Workout)=> void
}


const WorkoutSelection = ({onSelect}:workoutSelectionProps) => {
    return (
        <div>
            <h2 className="text-xl text-center">choose your workout</h2>
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1020px] mx-auto" data-testid="workout-selection">
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