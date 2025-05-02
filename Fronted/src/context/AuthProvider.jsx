import React, { createContext, useContext, useState,useEffect } from "react";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("User", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("User");
    }
  }, [authUser]);
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);