import { useNavigate } from "react-router-dom";


function WorkoutPlan() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center mx-8 mt-4 text-white bg-green-300 ">
                <button onClick={() => navigate("/pushPullLeg")}   className="w-full bg-green-500 active:scale-[0.96] font-semibold cursor-pointer py-4 rounded-lg">Push Pull Leg</button>
            </div>
            <div className="flex justify-center mx-8 mt-4 text-white bg-green-300 ">
                <button onClick={() => navigate("/broSplit")}   className="w-full bg-green-500 active:scale-[0.96] font-semibold cursor-pointer py-4 rounded-lg">Bro Split</button>
            </div>
        </>
    )
}

export default WorkoutPlan;