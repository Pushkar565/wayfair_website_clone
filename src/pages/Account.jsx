import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

const Account = () => {
  const { user, login, signup, logout } = useContext(AuthContext);
  const [formType, setFormType] = useState("login"); // "login" or "signup"
  const [name, setName] = useState(""); // Only used for sign up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === "login") {
      const success = await login(email, password);
      if (success) {
        navigate("/account");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } else {
      const success = await signup(name, email, password);
      if (success) {
        navigate("/account");
      } else {
        alert("Sign up failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        {user ? (
          <div>
            <h1 className="text-3xl font-bold mb-6">Account Details</h1>
            <p className="mb-2">Name: {user.name || "N/A"}</p>
            <p className="mb-4">Email: {user.email}</p>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="flex justify-center mb-4">
              <button
                className={`px-4 py-2 ${
                  formType === "login"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setFormType("login")}
              >
                Login
              </button>
              <button
                className={`ml-2 px-4 py-2 ${
                  formType === "signup"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setFormType("signup")}
              >
                Sign Up
              </button>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {formType === "login" ? "Login" : "Sign Up"}
              </h2>
              {formType === "signup" && (
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-2 rounded mb-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                {formType === "login" ? "Login" : "Sign Up"}
              </button>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Account;
