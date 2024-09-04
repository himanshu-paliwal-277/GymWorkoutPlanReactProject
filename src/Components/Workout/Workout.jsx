/* eslint-disable react/prop-types */
function Workout({ image, workoutName }) {
    return (
        <>
            <div className="flex items-center justify-between px-2 rounded-lg boxShadow">
                <img className="w-20 h-20" src={image} alt="" />
                <p className="mr-3 w-[40%] text-center">{workoutName}</p>
            </div>
        </>
    )
}

export default Workout;