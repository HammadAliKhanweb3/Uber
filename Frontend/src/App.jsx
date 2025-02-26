import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import UserLogin from "./pages/UserLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtectedWraper from "./pages/UserProtectedWraper";
import UserLougout from "./pages/UserLougout";
import CaptainProtectedWraper from "./pages/CaptainProtectedWraper";
import Riding from "./pages/Riding";
import CaptainHome from "./pages/CaptainHome";
import CaptainRiding from "./pages/CaptainRiding";
import "remixicon/fonts/remixicon.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/Riding" element={<Riding />} />
      <Route path="/captain-riding" element={<CaptainRiding />} />

      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signUp" element={<CaptainSignup />} />
      <Route
        path="/Home"
        element={
          <UserProtectedWraper>
            <Home />
          </UserProtectedWraper>
        }
      />
      <Route
        path="/user-logout"
        element={
          <UserProtectedWraper>
            <UserLougout />
          </UserProtectedWraper>
        }
      />
      <Route
        path="/captain-home"
        element={
          <CaptainProtectedWraper>
            <CaptainHome />
          </CaptainProtectedWraper>
        }
      ></Route>
    </Routes>
  );
};

export default App;
