import { useNavigate } from "react-router-dom";
import Workout from "../../Workout/Workout";
import LegsWorkoutExercises from "./LegsWorkoutExercises";
import BackButton from "../../BackButton/BackButton";

function LegsWorkout() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="py-3 mx-16 mt-6 text-lg font-bold text-center text-white bg-green-500 rounded-lg">Legs Workout</h1>
            <div className="flex flex-col gap-3 px-6 py-8">
                <p className="font-bold text-center ">Legs</p>
                <Workout image={LegsWorkoutExercises[0].imageUrl} workoutName={LegsWorkoutExercises[0].name} />
                <Workout image={LegsWorkoutExercises[1].imageUrl} workoutName={LegsWorkoutExercises[1].name} />
                <Workout image={LegsWorkoutExercises[2].imageUrl} workoutName={LegsWorkoutExercises[2].name} />
                <Workout image={LegsWorkoutExercises[3].imageUrl} workoutName={LegsWorkoutExercises[3].name} />
                <Workout image={LegsWorkoutExercises[4].imageUrl} workoutName={LegsWorkoutExercises[4].name} />
                {/* <Workout image={LegsWorkoutExercises[5].imageUrl} workoutName={LegsWorkoutExercises[5].name} /> */}
                {/* <Workout image={LegsWorkoutExercises[6].imageUrl} workoutName={LegsWorkoutExercises[6].name} /> */}
            </div>

            <BackButton onClickHandler={() => navigate("/pushPullLeg")} />
        </>
    )
}

export default LegsWorkout;