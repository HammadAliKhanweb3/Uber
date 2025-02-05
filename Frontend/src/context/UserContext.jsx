import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: "Hammad Ali",
      lastname: "Khan",
    },
    email: "hammad@gmail.com",
    password: "123",
  });

  return (
    <div>
      <UserDataContext.Provider value={user}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
