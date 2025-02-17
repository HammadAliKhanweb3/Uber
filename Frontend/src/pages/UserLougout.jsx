import axios from "axios";

import { useNavigate } from "react-router-dom";

const UserLougout = () => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);

    await axios
      .get(`${import.meta.env.VITE_BASE_URL}`, {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  };

  return (
    <div className="px-3 flex flex-col justify-center items-center h-screen w-full">
      <div className="w-full">
        <button
          onClick={(e) => {
            handleLogout(e);
          }}
          className="w-full bg-black text-white py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserLougout;
