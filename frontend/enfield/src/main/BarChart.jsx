import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import axios from "axios"
const BarChart = () => {
  const [bikeRes, setRespon] = useState([])
  const [price,setPrice] = useState([])
  useEffect(() => {
    const getingData = async () => {

      await axios.get(`http://localhost:3060/getData`).then((response) => setRespon(response.data)).catch((err) => console.log(err))

    }
    getingData()

  }, [])
  //console.log(bikeRes, "respon")
  return (
    <>
      <div className="w-1/2 mx-auto my-5">
        <Bar
          data={{
            labels: bikeRes.map((res) => res.bikeName),
            datasets: [
              {
                label: "Mileage",
                data: bikeRes.map( (res) => res.mileage),
                backgroundColor:['#686868','#B1B6A5','#B1B6A5','#F7B91A','#8D0E0A']
              },
            ], 
            
          }}
      
        />
      </div>
    </>
  );
};

export default BarChart;
