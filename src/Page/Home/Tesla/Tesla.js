import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../Category/BookingModal/BookingModal';
import BookingModalTesla from '../../Category/BookingModalTesla/BookingModalTesla';
import TeslaCard from './TeslaCard/TeslaCard';

const Tesla = () => {
    // const [teslaCars, setTeslaCar] = useState([]);
    const [carTesla, setCarTesla] = useState(null);

    const {data : teslaCars = []} = useQuery({
        queryKey: ['tesla'],
        queryFn: async() => {
            const res = await fetch('https://car-server-kazirofiq.vercel.app/tesla');
            const data = await res.json();
            return data;
        }
    })

    // useEffect(() =>{
    //     fetch('https://car-server-kazirofiq.vercel.app/tesla')
    //     .then(res => res.json())
    //     .then(data => setTeslaCar(data))
    // }, [])
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
                    setCarTesla={setCarTesla}
                    ></TeslaCard>)
                }
            </div>
            {
                carTesla &&
               <BookingModalTesla
               carTesla={carTesla}
               setCarTesla={setCarTesla}
               ></BookingModalTesla>
            }
        </div>
    );
};

export default Tesla;