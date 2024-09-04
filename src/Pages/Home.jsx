import WorkoutPlan from "../Components/WorkoutPlan/WorkoutPlan";

function Home() {
  return (
    <>
      <div className="flex justify-center py-4">
        <h1 className="text-2xl font-bold">Gym Workout Plan</h1>
      </div>
      <WorkoutPlan />
    </>
  );
}

export default Home;
