import React, { useEffect, useState } from 'react';
import TeslaCard from './TeslaCard/TeslaCard';

const Tesla = () => {
    const [teslaCars, setTeslaCar] = useState([]);
    useEffect(() =>{
        fetch('toyota.json')
        .then(res => res.json())
        .then(data => setTeslaCar(data))
    }, [])
    return (
        <div>
            
            <div className='text-center'>
            <p className='text-lime-700 font-bold'>Our menu</p>
            <h2 className='text-5xl font-bold'>Reselling Tesla Cars</h2>
            <p className='lg:px-16'>Trusted China Suppliers Verified by SGS. China Electric Car. Send Inquiry Now! China’s B2B Impact Award. Quality China Products. SGS Audited Suppliers. Leading B2B Portal. Amenities: China’s B2B Impact Award, Leading B2B Portal, SGS Audited Suppliers.
            </p>
        </div>
        <div className='grid gap-4 px-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    teslaCars.map(teslaCar => <TeslaCard
                    key={teslaCar._id}
                    teslaCar={teslaCar}
                    ></TeslaCard>)
                }
            </div>
        </div>
    );
};

export default Tesla;