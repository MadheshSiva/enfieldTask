
import React from "react";
import BarChart from "./BarChart";
import DataTable from "./Table";
import LandingCard from "./card";
import Himalayan from "../image/himalaya.jpg";
import classic from "../image/classic.jpeg"
const Main = () => {

return(
    <div className="container mx-auto w-full h-full broder border-red-200">
       <BarChart/>
       <div className="flex gap-4 container">
        <div className="w-1/2 grid grid-flow-row gap-4 h-20">
           <LandingCard  src={Himalayan} price={'2,69,000'} cc={'452cc'} speed={'30kmpl'} weight={'199kg'} name={'Himalayan'}  />
           <LandingCard src={classic}price={'1,93,000'} cc={'349cc'} speed={'35kmpl'} weight={'195kg'}  name={'Classic'} />
        </div>
        <div className="w-1/2">
        <DataTable/>
        </div>
        
       </div>
    </div>
)

}

export default Main;