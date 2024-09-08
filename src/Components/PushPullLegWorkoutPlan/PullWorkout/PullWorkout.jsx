import { useNavigate } from "react-router-dom";
import Workout from "../../Workout/Workout";
import pullWorkoutExercises from "./pullWorkoutExercises";
import BackButton from "../../BackButton/BackButton";

function PullWorkout() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="py-3 mx-16 mt-6 text-lg font-bold text-center text-white bg-green-500 rounded-lg">Pull Workout</h1>
            <div className="flex flex-col gap-3 px-6 py-8">
                <p className="font-bold text-center ">Back</p>
                <Workout image={pullWorkoutExercises[0].imageUrl} workoutName={pullWorkoutExercises[0].name} />
                <Workout image={pullWorkoutExercises[1].imageUrl} workoutName={pullWorkoutExercises[1].name} />
                <Workout image={pullWorkoutExercises[2].imageUrl} workoutName={pullWorkoutExercises[2].name} />
                <Workout image={pullWorkoutExercises[3].imageUrl} workoutName={pullWorkoutExercises[3].name} />
                <Workout image={pullWorkoutExercises[4].imageUrl} workoutName={pullWorkoutExercises[4].name} />
                <p className="font-bold text-center ">Biceps</p>
                <Workout image={pullWorkoutExercises[5].imageUrl} workoutName={pullWorkoutExercises[5].name} />
                <Workout image={pullWorkoutExercises[6].imageUrl} workoutName={pullWorkoutExercises[6].name} />
                <Workout image={pullWorkoutExercises[7].imageUrl} workoutName={pullWorkoutExercises[7].name} />
                <Workout image={pullWorkoutExercises[8].imageUrl} workoutName={pullWorkoutExercises[8].name} />
                {/* <Workout image={pullWorkoutExercises[9].imageUrl} workoutName={pullWorkoutExercises[9].name} /> */}
            </div>

            <BackButton onClickHandler={() => navigate("/pushPullLeg")} />
        </>
    )
}

export default PullWorkout;