import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import WeekWorkout from "../WeekWorkout/WeekWorkout";

function PushPullLegWorkoutPlan() {
    const pushPullLeg ={
        mon: "Push",
        tue: "Pull",
        wed: "Leg",
        thu: "Push",
        fri: "Pull",
        sat: "Leg",
        sun: "Rest",
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center py-3 mx-16 mt-6 text-lg font-semibold text-white bg-green-500 rounded-lg">
                Push Pull Leg
            </div>
            <WeekWorkout workoutSplit={pushPullLeg} />

            <BackButton onClickHandler={() => navigate("/home")} />
        </>
    )
}

export default PushPullLegWorkoutPlan;