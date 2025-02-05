import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1583104942808-c55e9f2aaece?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full flex flex-col justify-between pt-5">
        <img
          className="w-20 ml-7"
          src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        ></img>
        <div className="bg-white w-full h-36 flex flex-col px-3 gap-1">
          <h2 className="text-[30px] font-bold mt-2">Get Started with Uber</h2>
          <Link
            to="/login"
            className="text-center w-full bg-black text-amber-50 rounded-lg py-3 mt-2"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
