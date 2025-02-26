
const CaptainDetail = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s"
            alt=""
          ></img>
          <h2 className="font-bold text-xl">Hammad</h2>
        </div>
        <div className="text-right">
          <h2 className="font-semibold text-2xl">
            <span>
              <i className="ri-money-pound-circle-line"></i>
            </span>
            295.03
          </h2>
          <p className="text-gray-500 font-medium text-left">Earned</p>
        </div>
      </div>

      <div className="flex mt-6 justify-around items-center bg-gray-100 p-3 rounded-xl">
        <div className="text-center">
          <i className="text-3xl font-semi-bold ri-timer-2-line"></i>
          <h4 className="font-medium text-xl">14.5</h4>
          <p className="font-medium text-gray-500">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-semi-bold ri-speed-up-line"></i>
          <h4 className="font-medium text-xl">14.5</h4>
          <p className="font-medium text-gray-500">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-semi-bold ri-booklet-fill"></i>
          <h4 className="font-medium text-xl">14.5</h4>
          <p className="font-medium text-gray-500">Hours Online</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetail
