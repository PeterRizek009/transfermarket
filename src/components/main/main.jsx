import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from '../table/tableData';
import Searchform from '../searchform/Searchform';
import './main.css'
import Navbar from '../navbar/nav';
import Footer from '../footer/footer';


const Main = () => {
  const axios = require("axios");

  const [transferData, setTransferData] = useState([{}]);
  const [league, setLeague] = useState("");

  transferData.forEach((item, i) => {
    item.id = i + 1;
  });

  
  const handleChange = (e) => {
    setLeague(e.target.value);
  };

  useEffect(() => {
    const search = async () => {
      await axios.get(`https://soccer-transfers.p.rapidapi.com/${league}`,
        {
          headers: {
            'X-RapidAPI-Key': '8706630ab5mshf3e9e2dba093881p114d78jsn3b69bb0ba508',
            'X-RapidAPI-Host': 'soccer-transfers.p.rapidapi.com'
          },
        })
        .then((response) => {
          setTransferData(response.data)
        })
        .catch((err) => console.log(err));
    }
    search();
  }, [league]);



  return (
    <>
      <div>
        <Navbar transferData={transferData} setTransferData={setTransferData}/>
         <Searchform league={league} handleChange={handleChange} />
        <TableData transferData={transferData} />
        <Footer/>
      </div>
    </>
  );
}

export default Main;