import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/locationSearchPanel";
import VehiclePanel from "../components/vehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const panelOpenRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleOpenRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelOpenRef.current, {
        height: "70%",
        duration: 1,
        ease: "power2.out",
        //  borderRadius: "0px"
      }); // <-- automatically reverted
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelOpenRef.current, {
        height: "0%",
        duration: 1,
        ease: "power2.out",
        // borderRadius: "16px",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehicleOpenRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleOpenRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-amber-300">
      <img
        className="absolute z-0 w-20 left-3 top-2"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        alt=""
      />
      <div>
        <img
          className="h-screen w-full "
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6  bg-white relative ">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0  right-5 "
          >
            <i className="text-2xl font-bold ri-arrow-down-s-line "></i>
          </h5>
          <h4 className="text-2xl font-bold ">Find Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line h-18 w-1 bg-gray-900 rounded-full left-10 z-10 top-[65%] -translate-y-1/2 absolute"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="px-3 py-3 w-full bg-[#eee] mt-5 text-base rounded-lg placeholder:text-center"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="px-3 py-3 w-full bg-[#eee] mt-5 text-base rounded-lg placeholder:text-center "
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelOpenRef} className=" w-full h-0 overflow-hidden">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehicleOpenRef}
        className="fixed z-10 bottom-0 w-full flex justify-center p-2 flex-col translate-y-full bg-white "
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 w-full flex justify-center p-2 flex-col -translate-y-full bg-white "
      >
        <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 w-full flex justify-center p-2 flex-col -translate-y-full bg-white "
      >
        <LookingForDriver />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 w-full flex justify-center p-2 flex-col  bg-white "
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
       
      


    </div>
  );
};

export default Home;
