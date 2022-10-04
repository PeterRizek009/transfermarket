import { React, useState } from 'react';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import './table.css'


const TableData = ({ transferData }) => {

    const [selected, setSelected] = useState([])

    // const [term, setTerm] = useState(' ')


    const handleOnSelect = (row, isSelect) => {
        if (isSelect) {
            setSelected([...selected, row.id]);
        } else {
            setSelected([...selected.filter(item => item !== row.id)])
        }
    }


    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        selected: selected,
        onSelect: handleOnSelect
    };




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
        {/* <div className='ms-5 w-25 mt-2'>
            <input
                type='text'
                className='form-control'
                id='exampleFormControlInput1'
                onChange={(e) => setTerm(e.target.value)}
                value={term}
            />
            </div> */}
            <div className="w-100 mt-5 mx-auto container">
                <BootstrapTable keyField='id' data={transferData}
                    columns={columns} selectRow={selectRow} pagination={paginationFactory()} />
            </div>
        </>
    );
}


export default TableData;