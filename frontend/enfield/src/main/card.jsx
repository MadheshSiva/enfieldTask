import React from "react";
import Himalayan from "../image/himalaya.jpg"
const  LandingCard = ({name,src,price,cc,speed,weight,}) => {

return(
    <>
    <div className="w-4/5 mx-auto flex items-center gap-4 border border-neutral-500 rounded-lg shadow-[0_0_4px_2px_rgba(218,41,28,0.5)] ">
        <div className="w-4/5"><img src={src} className="w-full my-auto rounded-md"/></div>
        <div className="w-3/4 p-1 ">
            <h1 className="text-xl font-bold">Royal Enfield {name}</h1>
            <div className="flex items-center">
                <h1 className="border-r border-neutral-500 px-2 text-neutral-700 text-sm font-semibold">{cc}</h1>
                <h1 className="border-r border-neutral-500 px-2 text-neutral-700 text-sm font-semibold">{speed}</h1>
                <h1 className=" px-2 text-neutral-700 text-sm font-semibold">{weight}</h1>
                
            </div>
              <div className="my-3">
                <h1 className="text-2xl font-bold"><sup>₹</sup>{price}</h1>
                <h1 className="text-neutral-500 text-sm mt-3">Avg Ex-showroom Price</h1>
              </div>
        </div>
    </div>
    </>
)

}

export default LandingCard