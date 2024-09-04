/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import WeekDay from "./WeekDay";

function WeekWorkout({workoutSplit}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-6 text-white">
        <WeekDay day={"Monday"} workout={workoutSplit.mon} onClickHandler={() => navigate("/" + workoutSplit.mon + "Workout")} />
        <WeekDay day={"Tuesday"} workout={workoutSplit.tue} onClickHandler={() => navigate("/" + workoutSplit.tue + "Workout")} />
        <WeekDay day={"Wednesday"} workout={workoutSplit.wed} onClickHandler={() => navigate("/" + workoutSplit.wed + "sWorkout")} />
        <WeekDay day={"Thursday"} workout={workoutSplit.thu} onClickHandler={() => navigate("/" + workoutSplit.thu + "Workout")} />
        <WeekDay day={"Friday"} workout={workoutSplit.fri} onClickHandler={() => navigate("/" + workoutSplit.fri + "Workout")} />
        <WeekDay day={"Saturday"} workout={workoutSplit.sat} onClickHandler={() => navigate("/" + workoutSplit.sat + "sWorkout")} />
        <WeekDay day={"Sunday"} workout={workoutSplit.sun} onClickHandler={() => navigate("/" + workoutSplit.sun)} />
      </div>
    </>
  );
}

export default WeekWorkout;
