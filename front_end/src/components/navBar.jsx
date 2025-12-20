// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 hover:text-teal-500 cursor-pointer"
      >
        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold italic">
          U
        </div>
        <h1 className="text-xl font-bold text-gray-800">UniConnect</h1>
      </Link>

      {/* Menu Links */}
      <div className="hidden md:flex gap-6 text-gray-600 font-medium">
        <Link
          to="/"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          Acceuil
        </Link>
        <Link
          to="/colocations"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          Colocations
        </Link>
        <Link
          to="/revisions"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          Révisions
        </Link>
        <Link
          to="/entraide"
          className="hover:text-teal-500 transition-colors duration-200"
        >
          Entraide
        </Link>
      </div>

      {/* Login Button */}

      <div className="flex items-center gap-3">
        <Link
          to="/profile"
          className="bg-teal-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-teal-700 transition"
        >
          <FaUserCircle className="text-2xl" />
        </Link>

        <Link
          to="/login"
          className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition"
        >
          Connexion
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
