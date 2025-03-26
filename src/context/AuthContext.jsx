import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch("https://your-api.com/auth/validate", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser({ ...userData, token });
          } else {
            localStorage.removeItem("token");
            setUser(null);
          }
        } catch (error) {
          console.error("Token validation error:", error);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setLoading(false);
    };

    validateToken();
  }, []);

  // Login function using JWT
  const login = async (email, password) => {
    try {
      const response = await fetch("https://your-api.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const { token, user: userData } = await response.json();
      localStorage.setItem("token", token);
      setUser({ ...userData, token });
      return true;
    } catch (error) {
      console.error("Login error:", error.message);
      return false;
    }
  };

  // Sign-up function using JWT
  const signup = async (name, email, password) => {
    try {
      const response = await fetch("https://your-api.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign up failed");
      }

      const { token, user: userData } = await response.json();
      localStorage.setItem("token", token);
      setUser({ ...userData, token });
      return true;
    } catch (error) {
      console.error("Sign up error:", error.message);
      return false;
    }
  };

  // Logout clears token and resets user state
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
