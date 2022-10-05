import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from '../table/tableData';
import Searchform from '../searchform/Searchform';
import './main.css'
import Savebtn from '../saveButton/savebtn';


const Main = ({ league, handleChange, transferData, handleOnSelect, selected , setSelected}) => {


  return (
    <>
      <div>
        <div className='control-bar'>
          <Searchform league={league} handleChange={handleChange} />
          <Savebtn transferData={transferData} selected={selected} />
        </div>
        <TableData transferData={transferData} handleOnSelect={handleOnSelect} selected={selected} />
      </div>
    </>
  );
}

export default Main;