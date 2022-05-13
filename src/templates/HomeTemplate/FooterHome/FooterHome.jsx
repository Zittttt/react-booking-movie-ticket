import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

export default function FooterHome() {
  return (
    <footer className="bg-[#141B21] w-full">
      <div className=" text-white flex justify-evenly container mx-auto py-16">
        <div>
          <img src={logo} alt="..." width={200} className="logo mb-10" />
          <div className="address ">
            <p className="text-white text-[16px] mb-10">
              66 Prescot Street
              <br />
              London
              <br />
              E1 8NN
              <br />
              United Kingdom
            </p>
          </div>
          <div className="contact">
            <div>
              <NavLink to={"#"}>020 3388 8999</NavLink>
              <br />
              <NavLink to={"#"}>co@e9ine.com</NavLink>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[#F65374] text-[20px] font-[600] mb-5">
            USEFUL LINKS
          </h3>
          <ul className="text-[16px] mb-5">
            <li>
              <NavLink to={"/#"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/#"}>Out Now</NavLink>
            </li>
            <li>
              <NavLink to={"/#"}>Coming Soon</NavLink>
            </li>
            <li>
              <NavLink to={"/#"}>Reviews</NavLink>
            </li>
            <li>
              <NavLink to={"/#"}>Contact</NavLink>
            </li>
          </ul>
          <h3 className="text-[#F65374] text-[20px] font-[600] mb-5">
            SOCIAL LINKS
          </h3>
          <ul className="social flex gap-5">
            <NavLink to={"#"}>
              <img
                src="https://cinemas-online.co.uk/includes/images/facebook.png"
                alt="..."
                width={40}
              />
            </NavLink>
            <NavLink to={"#"}>
              <img
                src="https://cinemas-online.co.uk/includes/images/twitter.png"
                alt="..."
                width={40}
              />
            </NavLink>
            <NavLink to={"#"}>
              <img
                src="https://cinemas-online.co.uk/includes/images/linkedin.png"
                alt="..."
                width={40}
              />
            </NavLink>
            <NavLink to={"#"}>
              <img
                src="https://cinemas-online.co.uk/includes/images/instagram.png"
                alt="..."
                width={40}
              />
            </NavLink>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F65374] text-[20px] font-[600]">SPONSORED</h3>
        </div>
      </div>
    </footer>
  );
}
