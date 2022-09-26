import { React, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Main = () => {
  const axios = require("axios");


  const data = [
    {
      date: "",
      player: "",
      from: "",
      to: ""
    }
  ]
  const [transferData, setTransferData] = useState([{}]);
  const [league, setLeague] = useState("");


  const handleChange = (e) => {
    console.log(e.target.value);
    setLeague(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://soccer-transfers.p.rapidapi.com/${league}`,
        {
          headers: {
            'X-RapidAPI-Key': '8706630ab5mshf3e9e2dba093881p114d78jsn3b69bb0ba508',
            'X-RapidAPI-Host': 'soccer-transfers.p.rapidapi.com'
          },
        })
      .then((response) => {
     
        (response.data).map((data) => setTransferData(data))
       
      })
      .catch((err) => console.log(err));
  }, [league]);


  console.log((transferData));
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ width: 300, mt: 5, mx: 50 }} >
          <InputLabel id="demo-simple-select-label" sx={{ width: 80 }}>{league}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={league}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"en"}>Premier League</MenuItem>
            <MenuItem value={"es"}>La Liga</MenuItem>
            <MenuItem value={"de"}>Bundesliga</MenuItem>
            <MenuItem value={"it"}>Serie A</MenuItem>
            <MenuItem value={"fr"}>Ligue 1</MenuItem>
            <MenuItem value={"pt"}>Liga</MenuItem>
            <MenuItem value={"nl"}>Eredivisie</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>);
}

export default Main;