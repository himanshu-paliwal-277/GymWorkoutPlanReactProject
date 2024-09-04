import { useNavigate } from "react-router-dom";
import WeekWorkout from "../WeekWorkout/WeekWorkout";
import BackButton from "../BackButton/BackButton";

function BroSplitWorkoutPlan() {
    const BroSplit ={
        mon: "Chest",
        tue: "Biceps",
        wed: "Back",
        thu: "Triceps",
        fri: "Sholder",
        sat: "Leg",
        sun: "Rest",
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center py-3 mx-16 mt-6 text-lg font-semibold text-white bg-green-500 rounded-lg">
            <h2>Bro Split</h2>
            </div>
            <WeekWorkout workoutSplit={BroSplit} />

            <BackButton onClickHandler={() => navigate("/home")} />
        </>
    )
}

export default BroSplitWorkoutPlan;