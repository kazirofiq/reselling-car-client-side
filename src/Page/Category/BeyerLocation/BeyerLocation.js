import React, { useEffect, useState } from 'react';
import BokkingModalBmw from '../BokkingModalBmw/BokkingModalBmw';

const BeyerLocation = () => {
    const [locationOptions, setLocationOption] = useState([]);
    useEffect(() =>{
        fetch('location.json')
        .then(res => res.json())
        .then(data => setLocationOption(data))
    }, [])
    return (
        <div>
            {/* {
               locationOptions &&
                locationOptions?.map(locationOption => <BokkingModalBmw
                key= {locationOption._id}
                locationOption={locationOption}
                ></BokkingModalBmw>)
            } */}
            <div>
                
            </div>
        </div>
    );
};

export default BeyerLocation;