import React, { useState } from "react";
import Submenu from "./subMenu";
import {ExpandLess} from "@material-ui/icons"

const Menu = () => {
    const [menu,setMenu] = useState("")
    const [close,setclose] = useState(false)
const submenu = [
   {
   "name": "MoterCycle",  
   "types" : ["New Himalayan", "Bullet 350", "Super Meteor 650", "Hunter 350","Scram 411","Classic 350",]},
   {
    "name":"Service", 
    "types": ["Campian","Value Added Services"]
   } ,
   {"name": "Book_now",
   "types": ['New Vehicle',"Cancellation","service Appointment"]} 
 ]

const submit = (menuList) => {
    setMenu(menuList.name)
    //console.log(menuList.name,"menuList")
    setclose(true)
}

return(
    <>
    <div className="flex items-center w-1/2 justify-between">
        {submenu.map((menuList) => (
            <div className="relative text-white border-[#]">
                <div className="flex items-center gap-2">
            <h1 className="text-white cursor-pointer" onClick={() => submit(menuList)}>{menuList.name}</h1>
            {close &&  menu == menuList.name ? <h1 className="cursor-pointer" onClick={() =>setclose(false)}><ExpandLess/></h1>:""}
            </div>
            <div className="absolute top-14 w-48 text-black z-50">
            <Submenu datas={menuList} menuName={menu} close={close}/>
            </div>
            
            </div>
        ))}
        
  
    
    </div>
   
    <h1 className="text-white">log in</h1>
    </>
)

}

export default Menu;