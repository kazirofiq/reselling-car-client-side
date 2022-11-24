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
            <h2>BMW</h2>
            <div className='text-center'>
            <p className='text-lime-700 font-bold'>Our menu</p>
            <h2 className='text-5xl font-bold'>Popular Dishes</h2>
            <p className='lg:px-16'>Nullam laoreet arcu eu massa euismod, quis dictum massa sodales. Proin eget scelerisque dui. Phasellus id enim lobortis, porta orci at, viverra turpis. Phasellus et odio ac velit eleifend condimentum vel at purus. Ut lobortis sed felis vitae luctus.</p>
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