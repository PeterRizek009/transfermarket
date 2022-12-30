import React from 'react'
import './noData.css'


const NoData = () => {
    return (
        <div className='nodataBox'>
            <div className="nodata bg-wihte">
                <div className="item">
                    <h2 className="mx-3">Sorry !! </h2>
                    <p className="mx-auto pt-5">Cannot retrive data from API<br></br> try after a few minutes </p>
                </div>
            </div>
            </div>
      );
}

export default NoData;