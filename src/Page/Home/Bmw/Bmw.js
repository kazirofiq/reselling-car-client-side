import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Share/Loading/Loading';
import BokkingModalBmw from '../../Category/BokkingModalBmw/BokkingModalBmw';
import BookingModal from '../../Category/BookingModal/BookingModal';
import BmwCard from './BmwCard/BmwCard';

const Bmw = () => {
    // const [bmwCars, setBmwCar] = useState([]);
    const [carBmwBooking, setCarBmwBooking] = useState(null);

    const {data:bmwCars = [], isLoading} = useQuery({
        queryKey: ['bmw'],
        queryFn:() => fetch('http://localhost:5000/bmw')
        .then(res => res.json())
    }) 

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() =>{
    //     fetch('http://localhost:5000/bmw')
    //     .then(res => res.json())
    //     .then(data => setBmwCar(data))
    // }, [])
    
    return (
        <div>
            
            <div className='text-center'>
            <p className='text-lime-700 font-bold'>Our menu</p>
            <h2 className='text-5xl font-bold my-8'> Reselling BMW Car</h2>
            <p className='lg:px-16'>Find the best deals on BMW cars from the trusted dealers and sellers in Bangladesh. Bikroy.com has the largest collection of BMW cars at the best price.</p>
        </div>
        <div className='grid gap-4 px-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    bmwCars.map(bmwCar => <BmwCard
                    key={bmwCar._id}
                    bmwCar={bmwCar}
                    setCarBmwBooking={setCarBmwBooking}
                    ></BmwCard>)
                }
            </div>
            {
                carBmwBooking &&
                <BokkingModalBmw
                    carBmwBooking={carBmwBooking}
                    setCarBmwBooking={setCarBmwBooking}
                ></BokkingModalBmw>
            }
        </div>
    );
};

export default Bmw;