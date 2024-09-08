import { useState } from "react";
import WorkoutPlan from "../Components/WorkoutPlan/WorkoutPlan";
import loaderImage from "../assets/loader.gif";

function Home() {
  const [loader, setLoader] = useState("");
  function loading() {
    setTimeout(() => {
      setLoader("hidden");
    }, 1600);
  }
  return (
    <>
      <div className={`absolute top-0 z-10 flex flex-col items-center justify-center w-full h-screen bg-white ${loader}`}>
        <h1 className="text-2xl font-bold">Fitness</h1>
        <img className="w-24 h-24" src={loaderImage} alt="loader" />
      </div>
      {loading()}
      <div className="flex justify-center py-4">
        <h1 className="text-2xl font-bold">Gym Workout Plan</h1>
      </div>
      <WorkoutPlan />
    </>
  );
}

export default Home;
