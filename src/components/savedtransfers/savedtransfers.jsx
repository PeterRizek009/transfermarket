import React , {useState , useEffect}from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import './../table/table.css';
import './savedsearch.css'

const Savedtransfers = ({transferData , selected }) => {

   
    let  selectedData = (transferData.filter((el, index) => el.id === selected[index]));


    
   

    const columns = [{
        dataField: 'date',
        text: 'Date',
        sort: true
    }, {
        dataField: 'player',
        text: 'Player Name',
        sort: true

    }, {
        dataField: 'from',
        text: 'Previous Club',
        sort: true

    }, {
        dataField: 'to',
        text: 'New Club',
        sort: true
    }

    ];


    return (
    <>
        <h1 className="text-center mt-5 title"><span>Saved</span>Transfers</h1>
        <div className="w-100 mt-5 mx-auto container">
            <BootstrapTable keyField='id' 
                columns={columns} data={selectedData}/>
        </div>
    </>);
}

export default Savedtransfers;