import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen w-screen relative">
      <div className="fixed flex justify-between items-center w-full p-2">
        <img
          className="w-20 "
          src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        ></img>
        <Link
          to={"/Home"}
          className=" flex bg-white top-2.5  right-2 h-10 w-10 justify-center items-center rounded-full"
        >
          <i className="text-lg font-medium  ri-logout-circle-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 bg-amber-300 flex justify-between relative items-center px-6 pt-6">
        <h5
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className=" font-bold text-3xl text-gray-black-500 w-full text-center absolute top-0 left-0 rotate-180 "
        >
          <i className="ri-arrow-down-wide-line "></i>
        </h5>

        <h4 className="text-xl font-bold ">4 km away</h4>
        <button
          onClick={() => {}}
          className="bg-green-600 w-3/5 p-3 text-lg rounded-lg text-white font-bold "
        >
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 w-full  flex justify-center p-2 flex-col h-[88%] bg-white "
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
