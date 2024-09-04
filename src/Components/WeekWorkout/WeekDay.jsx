// eslint-disable-next-line react/prop-types
function WeekDay({ day, workout, onClickHandler }) {
  return (
    <>
      <button className="w-[85%] bg-gray-300 active:scale-95 flex justify-between rounded overflow-hidden" onClick={onClickHandler}>
        <span className={`py-3 font-semibold ${day === "Sunday" ? "bg-red-400" : "bg-blue-400"} w-[45%] text-center`}>{day}</span>
        <span className="py-3 font-bold text-black mr-7">{workout}</span>
      </button>
    </>
  );
}

export default WeekDay;
