'use client'
import Header from "../component/Header";
import ActiveWorkout from "../component/ActiveWorkout";
import WorkoutSelection from "../component/workoutSelection";
import { useState } from "react";
import { Workout } from "@/types/workout";


export default function Home() {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null)

  return (
    <div className="">
      <Header />
      {!selectedWorkout && (
          <WorkoutSelection onSelect={(workout => setSelectedWorkout(workout))} />
      )}
      {selectedWorkout && (
        <ActiveWorkout workout={selectedWorkout} goBack={() => setSelectedWorkout(null)}/>
      )}
    </div>
  );
}
