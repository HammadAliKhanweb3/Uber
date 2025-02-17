import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { captainDataContext } from "../context/captainContext";
import axios from "axios";

const CaptainProtectedWraper = ({ children }) => {
  const { captain, setCaptain } = useContext(captainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [navigate, token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }) // Start from here and and request to get profile and validate.
    .then((response) => {
      if (response.status === 200) {
        const data = response.data.data;
        setCaptain(data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWraper;
