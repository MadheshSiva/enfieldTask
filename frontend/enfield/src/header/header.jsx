import React from "react";
import Logo from "../image/logo.svg"
import Menu from "./menu";

const Header = () => {



return(
    <>
    <div className="bg-[#0A0A0A] flex justify-between items-center px-4 w-full h-20">
        <div className="w-1/5  ">
        <img src={Logo}  className="w-full h-20 my-auto"/>
        </div>
      <Menu/>
    </div>
    </>
)

}

export default Header;