import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [newUser, setNewUser] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setNewUser({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    });

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register-user`,
      newUser
    );
  

    if (response.status === 200) {
      const data = response.data.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/start");
    }

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
          src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        ></img>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h2 className="text-lg font-medium mt-5">Whats your name</h2>
          <div className="flex gap-3">
            <input
              className="bg-[#eeeeee] w-1/2 p-2 rounded text-lg mt-2 placeHolder:base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              className="bg-[#eeeeee] w-1/2 p-2  mt-2 text-lg placeHolder:base"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <h2 className="text-lg font-medium mt-5">Whats your email</h2>

          <input
            className="bg-[#eeeeee] w-full p-2 rounded  mt-2  text-lg placeHolder:base"
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h2 className="text-lg font-medium mt-7">Enter your Password</h2>
          <input
            className="bg-[#eeeeee]  rounded w-full p-2  text-lg  placeholder:base mt-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="flex flex-center justify-center font-semibold text-white p-2 bg-black w-full rounded placeholder:text-base mt-8">
            Create Account
          </button>
          <p className="text-center mt-3 font-medium">
            Already Have a Account?{" "}
            <Link className="text-blue-600" to="/login">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="leading-tight text-gray-500 text-xs">
          By proceeding, you consent to get calls, Whatsapp or SMS messages,
          including by automated means, from Uber and affiliates to the number
          provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
