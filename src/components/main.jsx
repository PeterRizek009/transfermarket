import { React, useEffect , useState } from 'react';
import { axios } from 'axios';

const Main = () => {

     const initialData = {
        query : 'chelsea',
        domain : 'de'  
     };

     const axios = require("axios");



    useEffect(() => {
          axios
            .get(`https://soccer-transfers.p.rapidapi.com/en`,
                  { headers: {
                'X-RapidAPI-Key': '8706630ab5mshf3e9e2dba093881p114d78jsn3b69bb0ba508',
                'X-RapidAPI-Host': 'soccer-transfers.p.rapidapi.com'
                 },
                })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, );


  
    return (<>
    </>);
}

export default Main;