const VehiclePanel = ({ setVehiclePanel, setConfirmRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="font-bold text-3xl text-gray-400 w-full text-center"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="font-semibold text-2xl m-3 mt-0">Choose a vehicle</h2>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex justify-around px-1.5 items-center border-gray-300  active:border-black border-2 rounded-xl bg-white my-1 py-1.5"
      >
        <img
          className="w-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt=""
        />

        <div className="flex flex-col w-1/2">
          <h4 className="text-base font-medium mb-0">
            UberGo
            <span>
              <i className="m-2 mr-1 ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-normal">2 mins away</h5>
          <p className="text-gray-500 font-sm">Affordable, compact rides</p>
        </div>
        <h2 className="font-medium text-xl ">$193.03</h2>
      </div>

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false)
        }}
        className="flex justify-around px-1.5 items-center border-gray-300  active:border-black border-2 rounded-xl bg-white my-1 py-1.5 "
      >
        <img
          className="w-24"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />

        <div className="flex flex-col w-1/2">
          <h4 className="text-base font-medium mb-0">
            UberGo
            <span>
              <i className="m-2 mr-1 ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium">2 mins away</h5>
          <p className="text-gray-500 font-sm">Affordable, compact rides</p>
        </div>
        <h2 className="font-medium text-xl ">$100.03</h2>
      </div>

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false)
        }}
        className="flex justify-between px-1.5 items-center border-gray-300  active:border-black border-2 rounded-xl bg-white my-1  py-1.5"
      >
        
        <img
          className="w-24 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
          alt=""
        />
        <div className="flex flex-col w-1/2 bg-green">
          <h4 className="text-base font-medium mb-0">
            UberGo
            <span>
              <i className="m-2 mr-1 ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium">2 mins away</h5>
          <p className="text-gray-500 font-sm">Affordable, compact rides</p>
        </div>
        <h2 className="font-medium text-xl ">$65.003</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
