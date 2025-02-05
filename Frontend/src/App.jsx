import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import UserLogin from "./pages/UserLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext";

const App = () => {
  const userData = useContext(UserDataContext)
  console.log(userData);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signUp" element={<CaptainSignup />} />
    </Routes>
  );
};

export default App;
