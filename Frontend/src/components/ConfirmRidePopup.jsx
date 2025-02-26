import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = ({ setConfirmRidePopupPanel, setRidePopupPanel }) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

  };
  return (
    <div className="h-full">
      <div>
        <h5
          onClick={() => {
            setRidePopupPanel(false);
          }}
          className="font-bold text-3xl text-gray-200 w-full text-center"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h2 className="font-bold text-2xl m-3 mt-2">Confirm To Start Ride</h2>
        <div className="flex justify-between items-center border-2 border-amber-300  p-2 rounded-lg">
          <div className="flex items-center gap-2">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s"
              alt=""
            ></img>
            <h2 className="font-bold text-xl">Hammad</h2>
          </div>
          <div className="text-right">
            <h2 className="font-semibold text-2xl">2.2km</h2>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex gap-5 items-center p-2 border-b-2">
              <i className="text-xl ri-map-pin-user-line"></i>
              <div>
                <h3 className="text-2xl font-medium">0724/29-B</h3>
                <p className="text-lg text-gray-500">Air University Kamra</p>
              </div>
            </div>
            <div className="flex gap-5 items-center p-2 border-b-2">
              <i className="text-xl ri-map-pin-fill"></i>
              <div>
                <h3 className="text-2xl font-medium">0724/29-B</h3>
                <p className="text-lg text-gray-500">Air University Kamra</p>
              </div>
            </div>
            <div className="flex gap-5 items-center p-2 ">
              <i className="text-xl ri-currency-fill"></i>
              <div>
                <h3 className="text-2xl font-medium">193.04</h3>
                <p className="text-lg text-gray-500">cash cash</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <form onSubmit={(e) => {
              submitHandler(e)
            }}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                id=""
                className="bg-[#eeeeee] w-full p-2 rounded border mt-2 font-mono text-lg"
              />
              <Link
                to={"/captain-riding"}
                onClick={() => {
                  setConfirmRidePopupPanel(true);
                }}
                className="bg-green-600 w-full flex justify-center p-2 py-3 rounded-lg text-white font-bold mb-3  mt-5 "
              >
                Confirm Ride
              </Link>
              <button
                onClick={() => {
                  setRidePopupPanel(true);
                  setConfirmRidePopupPanel(true);
                }}
                className="bg-red-500  w-full p-2 py-3 rounded-lg text-white font-bold mb-7  "
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
