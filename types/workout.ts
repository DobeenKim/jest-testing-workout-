export interface Workout {
  id: number,
  name: string,
  workTime: number, 
}

export interface WorkoutSelection {
  handleClick : () => void
}