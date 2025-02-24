const ConfirmRide = ({ setVehicleFound, setConfirmRidePanel }) => {
  return (
    <div>
      <h5 className="font-bold text-3xl text-gray-200 w-full text-center">
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="font-bold text-2xl m-3 mt-2">Confirm your Ride</h2>

      <div className="flex flex-col justify-between items-center">
        <img
          className="w-52"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt=""
        ></img>
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
        <button
          onClick={() => {
            setVehicleFound(true);
            setConfirmRidePanel(false);
          }}
          className="bg-green-700 w-full p-2 rounded-lg text-white font-bold mb-3  mt-5 "
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
