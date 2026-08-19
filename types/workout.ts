export interface Workout {
  id: number,
  name: string,
  workTime: number, 
}

export interface workProps {
    workout: Workout,
    handleClick:(workout:Workout) => void
}