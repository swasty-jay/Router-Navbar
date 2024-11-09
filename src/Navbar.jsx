// Navbar.js (with responsive mobile toggle)
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { MenuIcon, XIcon } from "@heroicons/react"; // Use Heroicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          MySite
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* {isOpen ? (
            // <XIcon className="h-6 w-6 text-white" />
          ) : (
            // <MenuIcon className="h-6 w-6 text-white" />
          )} */}
        </div>

        {/* Links */}
        <div
          className={`lg:flex space-x-4 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <Link
            to="/"
            className="text-white hover:text-gray-200 block lg:inline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 block lg:inline"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-200 block lg:inline"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 block lg:inline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
