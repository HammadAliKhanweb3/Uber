const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
    <div>
      <h5
        onClick={()=>{
            setWaitingForDriver(false)
        }}
       className="font-bold text-3xl text-gray-200 w-full text-center">
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex justify-between items-center mt-2">
        <img
          className="w-36"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
          alt=""
        ></img>
        <div className="text-right">
          <h4 className="font-semibold text-lg">Hammad</h4>
          <h2 className="font-bold text-xl -mt-1">WKD BD 0987</h2>
          <p className="text-gray-500 font-medium -mt-1">Suzuki Alto 2024 </p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex gap-5 items-center p-2 border-b-2">
            <i className="text-xl ri-map-pin-fill"></i>
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
          <div className="flex gap-5 items-center p-2 mb-8">
            <i className="text-xl ri-currency-fill"></i>
            <div>
              <h3 className="text-2xl font-medium">193.04</h3>
              <p className="text-lg text-gray-500">cash cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
