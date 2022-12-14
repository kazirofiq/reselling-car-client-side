import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../Category/BookingModal/BookingModal';
import ToyotaCard from './ToyotaCard/ToyotaCard';

const Toyota = () => {
    // const [toyotaCars, setToyotaCar] = useState([]);
    const [carToyota, setCarToyota] = useState(null);
    
    const {data:toyotaCars = []} = useQuery({
        queryKey: ['toyota'],
        queryFn:() => fetch('https://car-server-kazirofiq.vercel.app/toyota')
        .then(res => res.json())
    })    
    
    // useEffect(() =>{
    //     fetch('https://car-server-kazirofiq.vercel.app/toyota')
    //     .then(res => res.json())
    //     .then(data => setToyotaCar(data))
    // }, [])
    return (
        <section>
            
            <div className='text-center'>
            <h2 className='text-5xl font-bold '>Car toyota in Bangladesh</h2>
            <p className='lg:px-16'>Toyota has car models that offer something for everyone. Whether you’re looking for a compact car for commuting to work, a fun sports car, or a family vehicle to safely transport your loved ones wherever they need to go, you can rely on Toyota.</p>
        </div>
        <div className='grid gap-4 px-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    toyotaCars.map(toyotaCar => <ToyotaCard
                    key={toyotaCar._id}
                    toyotaCar={toyotaCar}
                    setCarToyota={setCarToyota}
                    ></ToyotaCard>)
                }
            </div>
            {
                carToyota &&
                <BookingModal
                carToyota={carToyota}
                setCarToyota={setCarToyota}
                ></BookingModal>
            }
        </section>
    );
};

export default Toyota;