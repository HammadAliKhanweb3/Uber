import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      email,
      password,
    });

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status == 200) {
      const data = response.data.data;
      setUser(data);
      console.log(data.token);

      localStorage.setItem("token", data.token);
      const check = localStorage.getItem("token")
      console.log(check);
      
      navigate("/start");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 pt-5 h-screen flex flex-col justify-between ">
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
          <h2 className="text-lg font-medium mt-5">Whats your email</h2>

          <input
            className="bg-[#eeeeee] w-full p-2 rounded border mt-2"
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h2 className="text-lg font-medium mt-7">Enter your Password</h2>
          <input
            className="bg-[#eeeeee] border rounded w-full p-2 placeholder:text-base mt-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="flex flex-center justify-center font-semibold text-white p-2 bg-black w-full rounded placeholder:text-base mt-5">
            Login
          </button>
          <p className="text-center mt-3 font-medium">
            New Here?{" "}
            <Link className="text-blue-600" to="/signup">
              Create New Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          className="flex flex-center justify-center font-semibold text-white p-2 bg-[#10b461] w-full rounded placeholder:text-base mb-7"
          to="/captain-login"
        >
          Sign in As Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
