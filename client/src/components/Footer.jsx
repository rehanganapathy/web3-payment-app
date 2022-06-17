import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      
      
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center text-3xl">
      <div className="pl-5 flex items-center justify-center" >
        <img src={logo} alt="logo" className="w-40" />
      </div>
       Usher in the next leap of growth </p>
       <br/>
       <Link to="/about" className="text-white text-sm text-center text-3xl">
        About Us
       </Link>
       <br />
      
      <p className="text-white text-sm text-center font-medium mt-2">info@decage.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@decage2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;