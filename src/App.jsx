import { Route, Routes } from "react-router-dom";
import BroSplitWorkoutPlan from "./Components/BroSplitWorkoutPlan/BroSplitWorkoutPlan";
import PushPullLegWorkoutPlan from "./Components/PushPullLegWorkoutPlan/PushPullLegWorkoutPlan";
import Home from "./Pages/Home";
import PushWorkout from "./Components/PushPullLegWorkoutPlan/PushWorkout/PushWorkout";
import PullWorkout from "./Components/PushPullLegWorkoutPlan/PullWorkout/PullWorkout";
import LegsWorkout from "./Components/PushPullLegWorkoutPlan/LegWorkout/LegsWorkout";
import Rest from "./Components/Rest/Rest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pushPullLeg" element={<PushPullLegWorkoutPlan />} />
        <Route path="/broSplit" element={<BroSplitWorkoutPlan />} />
        <Route path="/PushWorkout" element={<PushWorkout />} />
        <Route path="/PullWorkout" element={<PullWorkout />} />
        <Route path="/LegsWorkout" element={<LegsWorkout />} />
        <Route path="/Rest" element={<Rest />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
