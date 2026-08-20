import Header from "@/component/Header";
import WorkoutCard from "@/component/WorkoutCard";
import WorkoutSelection from "@/component/workoutSelection";
import { workouts } from "@/data/workouts";
import { types } from "../types/workout";

export default function Home() {
  return (
    <div className="">
      <Header />
      <WorkoutCard />
    </div>
  );
}
