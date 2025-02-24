const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  const locations = [
    "Air University Aerosapce and Aviation Campus Kamra",
    "Air University main campus Islamabad",
    "Air University Engneering Multan campus",
  ];

  return (
    <div className="bg-white w-full px-5 pb-46 pt-0.5">
      {locations.map((elem, idx) => (
        <div
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
          key={idx}
          className="flex justify-around items-center  my-4 w-full border-gray-200 gap-5 border-2 rounded-xl py-4 px-0.5 active:border-black"
        >
          <h2 className="bg-[#eee] rounded-full m-w-14 h-8 flex items-center justify-center ml-5">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-semibold">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
