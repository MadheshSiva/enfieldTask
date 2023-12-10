import  React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';




export default function DataTable() {
    const [bikeRes, setRespon] = useState([])
    const [price,setPrice] = useState([])
    
    useEffect(() => {
      const getingData = async () => {
  
        await axios.get(`http://localhost:3060/getData`).then((response) => setRespon(response.data)).catch((err) => console.log(err))
  
      }
      getingData()
  
    }, [])
    const rows = [
        { id: 1, mileage: bikeRes[0]?.mileage, Bike: bikeRes[0]?.bikeName, Price: bikeRes[0]?.price, speed:bikeRes[0]?.speed },
        { id: 2, mileage: bikeRes[1]?.mileage, Bike:bikeRes[1]?.bikeName, Price: bikeRes[1]?.price,speed:bikeRes[1]?.speed},
        { id: 3, mileage: bikeRes[2]?.mileage, Bike: bikeRes[2]?.bikeName, Price: bikeRes[2]?.price,speed:bikeRes[2]?.speed},
        { id: 4, mileage: bikeRes[3]?.mileage, Bike: bikeRes[3]?.bikeName, Price: bikeRes[3]?.price,speed:bikeRes[3]?.speed},
        { id: 5, mileage: bikeRes[4]?.mileage, Bike: bikeRes[4]?.bikeName, Price: bikeRes[4]?.price,speed:bikeRes[4]?.speed},
      
      ];
      const columns  = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Bike', headerName: 'Bike Name', width: 130 },
        { field: 'mileage', headerName: 'mileage', width: 130 },
        {
          field: 'Price',
          headerName: 'Price',
          type: 'number',
          width: 90,
        },
        {
          field: 'speed',
          headerName: 'Speed',
          width: 160,
          
        },
      ];
  return (
    <div style={{ height: 400, width: '100%' }}>
     {bikeRes && <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />} 
    </div>
  );
}