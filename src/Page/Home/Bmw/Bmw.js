import React, { useEffect, useState } from 'react';
import BmwCard from './BmwCard/BmwCard';

const Bmw = () => {
    const [bmwCars, setBmwCar] = useState([]);
    useEffect(() =>{
        fetch('toyota.json')
        .then(res => res.json())
        .then(data => setBmwCar(data))
    }, [])
    return (
        <div>
            
            <div className='text-center'>
            <p className='text-lime-700 font-bold'>Our menu</p>
            <h2 className='text-5xl font-bold'> Reselling BMW Car</h2>
            <p className='lg:px-16'>Find the best deals on BMW cars from the trusted dealers and sellers in Bangladesh. Bikroy.com has the largest collection of BMW cars at the best price.</p>
        </div>
        <div className='grid gap-4 px-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    bmwCars.map(bmwCar => <BmwCard
                    key={bmwCar._id}
                    bmwCar={bmwCar}
                    ></BmwCard>)
                }
            </div>
        </div>
    );
};

export default Bmw;