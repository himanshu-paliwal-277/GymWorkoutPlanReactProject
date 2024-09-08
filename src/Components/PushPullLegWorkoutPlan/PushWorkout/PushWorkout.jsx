import { useNavigate } from "react-router-dom";
import BackButton from "../../BackButton/BackButton";
import Workout from "../../Workout/Workout";
import pushWorkoutExercises from "./PushWorkoutExercises";

function PushWorkout() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="py-3 mx-16 mt-6 text-lg font-bold text-center text-white bg-green-500 rounded-lg">Push Workout</h1>
            <div className="flex flex-col gap-3 px-6 py-8">
                <p className="font-bold text-center ">Chest</p>
                <Workout image={pushWorkoutExercises[0].imageUrl} workoutName={pushWorkoutExercises[0].name} />
                <Workout image={pushWorkoutExercises[1].imageUrl} workoutName={pushWorkoutExercises[1].name} />
                <Workout image={pushWorkoutExercises[2].imageUrl} workoutName={pushWorkoutExercises[2].name} />
                <Workout image={pushWorkoutExercises[3].imageUrl} workoutName={pushWorkoutExercises[3].name} />
                <p className="font-bold text-center ">Shoulder</p>
                <Workout image={pushWorkoutExercises[4].imageUrl} workoutName={pushWorkoutExercises[4].name} />
                <Workout image={pushWorkoutExercises[5].imageUrl} workoutName={pushWorkoutExercises[5].name} />
                <Workout image={pushWorkoutExercises[6].imageUrl} workoutName={pushWorkoutExercises[6].name} />
                <Workout image={pushWorkoutExercises[7].imageUrl} workoutName={pushWorkoutExercises[7].name} />
                <p className="font-bold text-center ">Triceps</p>
                <Workout image={pushWorkoutExercises[8].imageUrl} workoutName={pushWorkoutExercises[8].name} />
                <Workout image={pushWorkoutExercises[9].imageUrl} workoutName={pushWorkoutExercises[9].name} />
                {/* <Workout image={pushWorkoutExercises[10].imageUrl} workoutName={pushWorkoutExercises[10].name} /> */}
            </div>

            <BackButton onClickHandler={() => navigate("/pushPullLeg")} />
        </>
    )
}

export default PushWorkout;