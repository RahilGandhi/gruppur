import { createContext, useState, useEffect } from "react";
import { loginUser } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      console.log(response)
      setUser(response.data.token);
      localStorage.setItem('token', response?.data?.token)
      return response.data;
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
