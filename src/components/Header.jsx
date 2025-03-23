// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Wayfair Clone
        </Link>
        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for furniture, decor & more..."
            className="w-full border rounded py-1 px-3 focus:outline-none focus:ring"
          />
        </div>
        {/* Account & Cart Links */}
        <div className="flex items-center space-x-4">
          <Link to="/signin" className="text-gray-700 hover:text-blue-600">
            Sign In
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
