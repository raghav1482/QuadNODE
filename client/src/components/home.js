import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./style.css";
import Nav from './Nav';
import Headstrip from './Headstrip';
import Table from './Table';
function Home() {
    const [data , setData] = useState([]);
    const [one,setOne] = useState();
    const [two,settwo] = useState();
    const [three,setthree] = useState();
    const [four,setfour] = useState();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('https://quad-api.onrender.com/fetchdata');
            setOne(Math.random())
            settwo(Math.random())
            setthree(Math.random())
            setfour(Math.random())
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        const intervalId = setInterval(() => {
          fetchData();
        }, 60000);
        return () => clearInterval(intervalId);
      }, []);
  return (
    <div>
        <Nav/>
        <Headstrip one={parseFloat(one).toFixed(2)} two={parseFloat(two).toFixed(2)} three={parseFloat(3+three*10).toFixed(2)}  four={parseFloat(four*10).toFixed(2)} best={data[0]?data[0].sell:""}/>
        <Table data={data}/>
      
    </div>
  )
}

export default Home
