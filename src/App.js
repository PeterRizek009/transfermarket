import './App.css';
import { React, useEffect, useState } from 'react';
import Main from './components/main/main.jsx';
import About from './components/about/about';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Navbar from './components/navbar/nav';
import Savedtransfers from './components/savedtransfers/savedtransfers';

function App() {
  const axios = require("axios");

  const [transferData, setTransferData] = useState([{}]);
  const [league, setLeague] = useState("");
  const [selected, setSelected] = useState([])

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelected([...selected, row.id]);
    } else {
      setSelected([...selected.filter(item => item !== row.id)])
    }
    console.log(selected);
  }
  transferData.forEach((item, i) => {
    item.id = i + 1;
  });

 
  const handleChange = (e) => {
    setLeague(e.target.value);
  };

  const getData = async () => {
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


  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
    }, 1200);
  }, [league]);

  return (
    <div className="App">
      <Navbar transferData={transferData} setTransferData={setTransferData} />
      <Routes>
        <Route path="/home" element={<Main league={league} handleChange={handleChange}
          transferData={transferData} handleOnSelect={handleOnSelect} selected={selected} setSelected={setSelected} />} />
        <Route path="/about" element={<About />} />
        <Route path="/savedtransfers" element={<Savedtransfers selected={selected}  transferData={transferData}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
