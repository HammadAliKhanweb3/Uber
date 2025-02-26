import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { captainDataContext } from "../context/captainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(captainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
    };

    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/captains/login-captain`,
        captainData
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.data;
          setCaptain(data);
          localStorage.setItem("token", data.token);
          navigate("/captain-home");
        }
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 pt-5 h-screen flex flex-col justify-between ">
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
          <h2 className="text-lg font-medium mt-3">Whats your email</h2>

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

          <button className="flex flex-center justify-center py-3 font-semibold text-white p-2 bg-black w-full rounded placeholder:text-base mt-5">
            Login
          </button>
          <p className="text-center mt-3 font-medium">
            Join a fleet?{" "}
            <Link className="text-blue-600" to="/captain-signup">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          className="flex flex-center justify-center font-semibold text-white p-2 py-3 bg-orange-400 w-full rounded placeholder:text-base mb-7"
          to="/login"
        >
          Sign in As User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
