import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import RidePopup from "../components/RidePopup";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(true);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen w-screen">
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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="fixed z-10 bottom-0 w-full h-2/5 flex gap-y-7 p-5  flex-col  bg-white">
        <CaptainDetail />
      </div>

      <div
        ref={ridePopupPanelRef}
        className="fixed z-10 bottom-0 w-full  flex justify-center p-2 flex-col  bg-white "
      >
        <RidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>

      <div
        ref={confirmRidePopupPanelRef}
        className="fixed z-10 h-screen bottom-0 w-full  flex justify-center p-2 flex-col  bg-white translate-y-full "
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
