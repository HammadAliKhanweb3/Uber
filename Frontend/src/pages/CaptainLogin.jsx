import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email,
      password,
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

          <button className="flex flex-center justify-center font-semibold text-white p-2 bg-black w-full rounded placeholder:text-base mt-5">
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
          className="flex flex-center justify-center font-semibold text-white p-2 bg-orange-300 w-full rounded placeholder:text-base mb-7"
          to="/login"
        >
          Sign in As User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
