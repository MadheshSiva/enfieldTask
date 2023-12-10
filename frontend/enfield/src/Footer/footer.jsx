import React from "react";
import FooterList from "./FooterList";
import {Facebook, Instagram, YouTube, Twitter} from "@material-ui/icons"

const Footer = () => {

return(
    <>
    <div className="container mx-auto  w-full ">
        <div className="flex items-center justify-end gap-3 border-b border-neutral-500 py-2">
            <h1>Join the conversation</h1>
            <div>
            <Facebook /> <Instagram/> <YouTube/> <Twitter/>
            </div>
            
        </div>
        <div className="p-3 border-b border-neutral-500">
        <FooterList/>
        </div>
        
        <div className="flex items-center justify-between p-3">
            <h1 className="text-[10px]">&#169; 2023. Royal Enfield | Images Shown here may differ from the actual product</h1>
            <div className="flex items-center">
            <h1 className="text-[10px] hover:text-[#DA291C] cursor-pointer border-r border-neutral-700 px-2">Privacy</h1>
            <h1 className="text-[10px] hover:text-[#DA291C] cursor-pointer border-r border-neutral-700 px-2">Terms & Conditions</h1>
            <h1 className="text-[10px] hover:text-[#DA291C] cursor-pointer  mx-2">Cookies</h1>
            </div>
            
        </div>
    </div>
    </>
)


}

export default Footer;