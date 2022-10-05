import React from 'react'


const Savebtn = ({handleOnReset}) => {
    return (<>
        <div>
            <button type="button" className="btn btn-success mx-3 px-5">Reset</button>
            <button type="button" className="btn btn-success mx-3 px-5">Confirm Save</button>
        </div>
    </>);
}

export default Savebtn;


