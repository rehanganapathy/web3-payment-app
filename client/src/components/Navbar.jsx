import React from "react";


import logo from "../../images/logo.png";



const Navbar = () => {


  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className=" flex-initial ">
        <img src={logo} alt="logo" className="w-32 cursor-pointer object-cover h-30 w-60" />
      </div>
    </nav>
  );
};

export default Navbar;