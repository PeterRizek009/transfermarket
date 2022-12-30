import { React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from '../table/tableData';
import Searchform from '../searchform/Searchform';
import './main.css'
import Savebtn from '../saveButton/savebtn';
import NoData from '../nodata/noData';


const Main = ({ league, handleChange, transferData, handleOnSelect, selected , isLoading }) => {
         
  
  return (
    <>
      <div className='mainpage'>
        <div className='control-bar'>
          <Searchform league={league} handleChange={handleChange} />
          <Savebtn transferData={transferData} selected={selected} />
        </div>
        
         
           {
          transferData.length > 0 ? 
          <TableData transferData={transferData} handleOnSelect={handleOnSelect} selected={selected} isLoading={isLoading}/>
           : 
           <NoData/>
          }
           
       
      </div>
    </>
  );
}

export default Main;