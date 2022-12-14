import React from 'react';

const BmwCard = ({bmwCar, setCarBmwBooking}) => {
    const { img, resellPrice, title, description, originalPrice, location, used, time, facility} = bmwCar;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 w-full md:h-56 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{facility[0].name}</h2>
                <h2 className="card-title">{title}</h2>
                <p>{used}</p>
                <p className='text-3xl'>Location: {location}</p>
                <p>Resell Price: {resellPrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>{time}</p>
                <p>{description}</p>
                <div className="card-actions">
                <label
                    //  disabled={slots.length === 0}
                     htmlFor="booking-modal" 
                     className="btn btn-primary w-full uppercase text-white"
                     onClick={() => setCarBmwBooking(bmwCar)}
                     >Book now</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BmwCard;