import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/img/logo.png";

export default function HeaderHome() {
  const navgationStyle =
    "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent font-[900] text-black hover:text-dark-purple hover:dark:border-violet-400 transition-none";

  const activeNavigationStyle = "text-dark-purple dark:border-violet-400";

  const buttonStyle =
    "self-center px-8 py-3 rounded-md hover:border-solid hover:border-black border-2";

  return (
    <header className="p-4 bg-white px-8 sticky top-0 z-10 shadow-md">
      <div className="flex justify-between h-12 w-full  text-base">
        <NavLink to="/home" className="flex items-center p-2">
          <img src={logo} alt="..." width={175} />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className={navgationStyle}
              activeClassName={activeNavigationStyle}
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className={navgationStyle}
              activeClassName={activeNavigationStyle}
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className={navgationStyle}
              activeClassName={activeNavigationStyle}
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to={"/login"}
            className={`${buttonStyle} bg-light-purple text-[#191e32]`}
          >
            Login
          </NavLink>
          <NavLink
            to={"/register"}
            className={`${buttonStyle} bg-purple ml-3 text-white`}
          >
            Register
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
