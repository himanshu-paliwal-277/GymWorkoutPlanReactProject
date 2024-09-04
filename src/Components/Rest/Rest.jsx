import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";

function Rest() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
                <h1 className="text-xl font-semibold ">Rest</h1>
                <img className="w-[48%]" src="https://clipart-library.com/images_k/transparent-funny-gifs/transparent-funny-gifs-18.png" alt="rest" />
            </div>

            <BackButton onClickHandler={() => navigate("/pushPullLeg")} />
        </>
    )
}

export default Rest;