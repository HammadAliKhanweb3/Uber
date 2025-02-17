import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import UserLogin from "./pages/UserLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtectedWraper from "./pages/UserProtectedWraper";
import UserLougout from "./pages/UserLougout";
import CaptainStart from "./pages/CaptainStart";
import CaptainProtectedWraper from "./pages/CaptainProtectedWraper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signUp" element={<CaptainSignup />} />
      <Route
        path="/start"
        element={
          <UserProtectedWraper>
            <Start />
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
        path="/captain-start"
        element={
          <CaptainProtectedWraper>
            <CaptainStart />
          </CaptainProtectedWraper>
        }
      ></Route>
    </Routes>
  );
};

export default App;
