import './App.css';
import { React, useEffect, useState } from 'react';
import Main from './components/main/main.jsx';
import About from './components/about/about';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Navbar from './components/navbar/nav';
import Savedtransfers from './components/savedtransfers/savedtransfers';
import NoData from './components/nodata/noData';


function App() {
  const axios = require("axios");

  const [transferData, setTransferData] = useState([]);
  const [league, setLeague] = useState("");
  const [selected, setSelected] = useState([])

  const [isLoading, setIsLoading] = useState(false);

  // const handleOnSelect = (row, isSelect) => {

  //   if (isSelect) {
  //     setSelected([...selected, row.id]);
  //   } else {
  //     setSelected([...selected.filter(item => item !== row.id)])
  //   }

  // }
  // transferData.forEach((item, i) => {
  //   item.id = i + 1;
  // });


  const handleChange = (e) => {
    setLeague(e.target.value);
  };

  const getData = async () => {
    setIsLoading(true);
    await axios.get(`https://transfermarkt-db.p.rapidapi.com/v1/transfers/list`,
      {
        params: {
          locale: 'JP',
          page_number: '0',
          top_transfers_first: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '8706630ab5mshf3e9e2dba093881p114d78jsn3b69bb0ba508',
          'X-RapidAPI-Host': 'transfermarkt-db.p.rapidapi.com'
        }
      })
      .then((response) => {
       
        setTransferData(response.data.data)
        console.log(response.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }



  useEffect(() => {
    setTimeout(() => {
       setIsLoading(true);
      getData();
    }, 2000);

  }, []);






  return (
    <div className="App">
  <Navbar transferData={transferData} setTransferData={setTransferData} />
      {transferData ?
        <Routes>
          <Route path="/" element={<Main league={league} handleChange={handleChange}
            transferData={transferData} selected={selected} setSelected={setSelected} isLoading={isLoading} />} />
          <Route path="/about" element={<About />} />
          <Route path="/savedtransfers" element={<Savedtransfers selected={selected} transferData={transferData} />} />
        </Routes>
        :
        <NoData />
      } 

      <Footer />
    </div>
  );
}

export default App;
