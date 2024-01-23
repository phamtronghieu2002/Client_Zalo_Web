import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";


export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ auth: true, username: "" });
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();
  useEffect(() => {
    // axios
    //   .get("/getProfile")
    //   .then((response) => {
    //     const user = response.data;
    //     if (user) {
    //       const path = window.location.pathname;
    //       if (path === configs.paths.login) {
    //         login(user.username);
    //         return;
    //       }
    //       setUser({ auth: true, username: user.username });
    //       return;
    //     }
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error);
    //   });
  }, []);


  const login = (username) => {

  };
  const logout = () => {
 
  };
  const getUser = () => {
    return user;
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        getUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
