import { workProps } from "../../types/workout"

const WorkoutCard = ({workout,handleClick}:workProps) => {
    
    return (
            <div className="bg-white m-5 p-5 rounded-2xl flex flex-col gap-5 
                shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                border border-gray-100" 
                data-testid="workout-card">
                <div className="flex flex-col gap-2">
                    <h3 className="text-l font-semibold">{workout.name}</h3>
                    <p data-testid="workout-time">Work time: {workout.workTime} seconds</p>
                </div>
                <button onClick={()=> handleClick(workout)} className="p-2.5 bg-yellow-300 rounded-xl cursor-pointer">Start Workout</button>
            </div>
    )
}

export default WorkoutCard