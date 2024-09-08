import { useState } from "react";
import WorkoutPlan from "../Components/WorkoutPlan/WorkoutPlan";
import loaderImage from "../assets/loader.gif";
import { useNavigate } from "react-router-dom";

function Home() {
  const [loader, setLoader] = useState("");
  const navigate = useNavigate();
  function loading() {
    setTimeout(() => {
      setLoader("hidden");
    }, 1600);
  }

  function handleClick() {
    navigate("/Report");
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
      <div className="flex justify-center mt-8">
        <button onClick={handleClick} className="px-6 py-3 text-white bg-gray-400 rounded active:bg-opacity-90">Report</button>
      </div>
    </>
  );
}

export default Home;
