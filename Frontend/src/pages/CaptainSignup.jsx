import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { captainDataContext } from "../context/captainContext";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  //const [captainData, setCaptainData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(captainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType,
      },
    };

    console.log(captainData);

    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data;
          setCaptain(data);
          localStorage.setItem("token", data.token);
          navigate("/captain-start");
        }
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 pt-5  h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-20"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        ></img>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h2 className="text-lg font-medium mt-5">
            What's our Captain's name
          </h2>
          <div className="flex gap-3">
            <input
              className="bg-[#eeeeee] w-1/2 p-2 rounded text-lg mt-2 placeHolder:text-base"
              required
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              className="bg-[#eeeeee] w-1/2 p-2  mt-2 text-lg placeHolder:text-base"
              required
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <h2 className="text-lg font-medium mt-4">
            What's our Captain's email
          </h2>

          <input
            className="bg-[#eeeeee] w-full p-2 rounded  mt-2  text-lg placeHolder:text-base"
            required
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h2 className="text-lg font-medium mt-4">Enter your Password</h2>
          <input
            className="bg-[#eeeeee]  rounded w-full p-2  text-lg  placeholder:text-base mt-2"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <h2 className="mt-4 mb-2 text-lg font-medium">
            Vehicle's Information
          </h2>

          <div className="flex gap-3 w-full ">
            <input
              required
              className="w-1/2  rounded bg-[#eeeeee] p-2 placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="w-1/2 rounded bg-[#eeeeee] p-2 placeholder:text-base"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              type="text"
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-3 mt-3">
            <input
              required
              className="w-1/2 rounded bg-[#eeeeee] p-2 placeholder:text-base"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              type="number"
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              className="w-1/2 bg-[#eeeeee] rounded placeholder:text-base p-2"
              required
              name=""
              id=""
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="flex flex-center justify-center font-semibold text-white p-2 bg-black w-full rounded placeholder:text-base mt-6">
            Create Captain Account
          </button>
          <p className="text-center mt-3 font-medium">
            Already Have a Account?{" "}
            <Link className="text-blue-600" to="/captain-login">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="leading-tight text-gray-500 text-xs mt-10  mb-10">
          By proceeding, you consent to get calls, Whatsapp or SMS messages,
          including by automated means, from Uber and affiliates to the number
          provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
