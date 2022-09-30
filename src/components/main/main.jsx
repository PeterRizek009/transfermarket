import { React, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from '../table/tableData';
import './main.css'


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
        <Form.Select className='select w-50 mx-auto mt-5' value={league} onChange={handleChange} aria-label="Default select example">
          <option>Select the league</option>
          <option value={"en"}>England - Premier League</option>
          <option value={"es"}>Spain -La Liga</option>
          <option value={"de"}>Germany -Bundesliga</option>
          <option value={"it"}>Italy -Serie A</option>
          <option value={"fr"}>France -Ligue 1</option>
          <option value={"pt"}>Portugal -Liga</option>
          <option value={"nl"}>Netherland - Eredivisie</option>
        </Form.Select>

        <TableData transferData={transferData} />
      </div>
    </>
  );
}

export default Main;