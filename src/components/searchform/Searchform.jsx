import { React } from 'react';
import Form from 'react-bootstrap/Form';


const Searchform = ({ league, handleChange }) => {

    return (
        <div>
            <Form.Select className='select px-3 py-2' value={league} onChange={handleChange} aria-label="Default select example">
                <option >Select the league</option>
                <option value={"en"} >England - Premier League</option>
                <option value={"es"}>Spain -La Liga</option>
                <option value={"de"}>Germany -Bundesliga</option>
                <option value={"it"}>Italy -Serie A</option>
                <option value={"fr"}>France -Ligue 1</option>
                <option value={"pt"}>Portugal -Liga</option>
                <option value={"nl"}>Netherland - Eredivisie</option>
            </Form.Select>
        </div>
    );
}

export default Searchform;