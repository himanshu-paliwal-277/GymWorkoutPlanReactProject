import { useState, useEffect } from "react";
import WeightGraphData from "../Components/Graph/weightGraphData";
import BackButton from "../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

function Report() {
  const [weightData, setWeightData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Only access localStorage in the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingData = JSON.parse(localStorage.getItem("weightData")) || [];
      setWeightData(existingData);
    }
  }, []);

  const addWeightDataToLocalStorage = (day, weight) => {
    const existingData = JSON.parse(localStorage.getItem("weightData")) || [];
    existingData.push({ day, weight });
    localStorage.setItem("weightData", JSON.stringify(existingData));
    setWeightData(existingData);
  };

  function inputHandler(event) {
    setInputValue(event.target.value);
  }

  function addWeight() {
    if (inputValue === "") {
      console.log("Enter your current weight");
    } else {
      let day = localStorage.getItem("day");
      day = day ? parseInt(day, 10) : 0;
      day += 1;
      addWeightDataToLocalStorage(String(day), inputValue);
      localStorage.setItem("day", day);
      setInputValue("");
    }
  }

  function deleteRecentlyAddedData() {
    let existingData = [...weightData];
    if (existingData.length > 0) {
      let obj = existingData.pop();
      let day = obj.day;
      setWeightData(existingData);

      let data = JSON.parse(localStorage.getItem("weightData")) || [];
      data = data.filter((entry) => entry.day !== day);
      localStorage.setItem("weightData", JSON.stringify(data));

      let dayValue = localStorage.getItem("day");
      dayValue = parseInt(dayValue, 10);
      dayValue -= 1;
      localStorage.setItem("day", dayValue);
    } else {
      console.log("No data to delete.");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-2xl font-semibold">Report</h1>
        <div className="flex items-center mt-12 mb-8 overflow-hidden rounded-full shadow-lg">
          <input
            onChange={inputHandler}
            value={inputValue}
            className="w-[200px] bg-gray-100 px-5 py-2  rounded-l-full"
            type="number"
            placeholder="Enter weight in kg"
          />
          <button
            onClick={addWeight}
            className="px-4 py-2 text-white bg-blue-600 active:bg-opacity-80"
          >
            Add
          </button>
        </div>
        <WeightGraphData data={weightData} />
        <button
          onClick={deleteRecentlyAddedData}
          className="px-4 py-2 text-white bg-red-500 rounded-lg active:bg-opacity-90"
        >
          Delete
        </button>
      </div>

      <BackButton onClickHandler={() => navigate("/home")} />
    </>
  );
}

export default Report;
