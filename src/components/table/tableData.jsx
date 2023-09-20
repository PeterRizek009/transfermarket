import { React } from 'react';
import './table.css'


const TableData = ({ transferData }) => {


    return (
        <>
            <div className="w-100 mt-5 mx-auto container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Player</th>
                            
                            <th>Left</th>
                            <th>Joined</th>
                            <th>Fees with k</th>
                            <th>Season</th>
                        </tr>
                    </thead>
                    {transferData?.map((player) => (
                        <tr key={player.id}>
                            <td>{player.id}</td>
                            <td>
                            {player.fromClubID}
                            </td>
                            <td> 
                            {player.toClubID}
                            </td>
                           <td>{player.transferFee.value / 1000} $</td> 
                           <td>{player.season}</td> 
                        </tr>
                    ))}

                </table>



            </div>
        </>
    );
}


export default TableData;