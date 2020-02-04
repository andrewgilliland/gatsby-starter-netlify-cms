import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo-sm.jpg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  function toggleKeyPress() {
    setOpen(!isOpen);
  }

  return (
    <nav
      className="text-cyan-500 bg-black border-t-4 border-cyan-500 font-semibold"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="sm:flex sm:justify-between sm:items-center lg:max-w-4xl mx-auto">
        <div className="container flex items-center justify-between px-10 py-5">
          <Link to="/" title="Logo">
            <img
              className="w-24 rounded-lg border-2 border-cyan-400"
              src={logo}
              alt="Exellent Tech Solutions"
            />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggle}
              onKeyPress={toggleKeyPress}
              type="button"
              className="text-cyan-500 hover:bg-blue-grey-900 focus:bg-blue-grey-900 rounded-full focus:outline-none p-1"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navMenu"
          className={`px-5 pb-4 sm:pb-0 sm:flex ${isOpen ? "block" : "hidden"}`}
        >
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 focus:outline-none focus:bg-blue-grey-900 rounded"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 focus:outline-none focus:bg-blue-grey-900 rounded"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 focus:outline-none focus:bg-blue-grey-900 rounded"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
