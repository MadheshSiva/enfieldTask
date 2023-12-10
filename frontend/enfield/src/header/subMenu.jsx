import React from "react";

const Submenu = ({datas,menuName,close}) => {
  console.log(menuName,"menuName")
return(
    <>
  {menuName == datas.name && close && <div className="border bg-[#0A0A0A] rounded-md shadow-[0_0_5px_2px_rgba(218,41,28,0.2)] text-white">
   {datas.types.map((subMenu) => ( <h1 className="text-sm border-b my-3 hover:text-[#DA291C] transition hover:translate-x-3 font-semibold hover:duration-150 mx-4 border-neutral-400 py-1 cursor-pointer">{subMenu}</h1>))}
</div> } 

</>
    
)

}

export default Submenu;