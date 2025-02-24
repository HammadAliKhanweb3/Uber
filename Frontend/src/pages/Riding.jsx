import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen w-screen">
      <Link
        to={"/Start"}
        className="fixed flex bg-white top-2 right-2 h-10 w-10 justify-center items-center rounded-full"
      >
        <i className="text-lg font-medium  ri-home-5-line"></i>
      </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="fixed z-10 bottom-0 w-full h-1/2 flex  p-2 flex-col  bg-white -mt-2.5">
        <div>
          <div className="flex justify-between items-center">
            <img
              className="w-36"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
              alt=""
            ></img>
            <div className="text-right">
              <h4 className="font-semibold text-lg">Hammad</h4>
              <h2 className="font-bold text-xl">WKD BD 0987</h2>
              <p className="text-gray-500 font-medium">Suzuki Alto 2024 </p>
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
              <div className="flex gap-5 items-center p-2 ">
                <i className="text-xl ri-currency-fill"></i>
                <div>
                  <h3 className="text-2xl font-medium">193.04</h3>
                  <p className="text-lg text-gray-500">cash cash</p>
                </div>
              </div>
              <button
                onClick={() => {}}
                className="bg-green-600 w-full p-2 rounded-lg text-white font-bold mb-2.5 mt-2 "
              >
                Confirm Ride
              </button>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default Riding;
