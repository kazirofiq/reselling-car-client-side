import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BokkingModalBmw = ({carBmwBooking, setCarBmwBooking, refetch}) => {
    
    const {title, resellPrice}= carBmwBooking;

    const {user} = useContext(AuthContext);
    
    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        // const slot = form.slot.value;
        const name = form.name.value;
        // const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const title = form.title.value;
        
        
        
        const booking ={
            name,
            email,
            phone,
            resellPrice,
            title,
            
           
        }
        
        fetch('https://car-server-kazirofiq.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                setCarBmwBooking(null);
                toast.success('Booking Confirmed')
                // refetch();
            }
            else{
                toast.error(data.message);
            }
        })

        
    }
    
    return (
        <div>
            
            <>
           
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
           <div className="modal">
           <div className="modal-box relative">
               <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="text-lg font-bold text-center">{title}</h3>
               <form onSubmit={handleBooking}>
               <input type="text" name='title' value={title} disabled className="input input-bordered my-2 w-full " />
               <input type="text" name='price' value={resellPrice} disabled className="input input-bordered my-2 w-full " />
               
               <input name='name' type="text"
                defaultValue={user?.displayName} disabled 
                placeholder="Your Name" className="input input-bordered my-2 w-full " />
               <input name='email' type="email"
                defaultValue={user?.email} disabled readOnly 
                 placeholder="Email Address" className="input input-bordered my-2 w-full " />
               <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered my-2
                w-full " />
                <br />
                <input className='btn btn-accent w-full' type="submit" value="Submit" />
               </form>
                
           </div>
        </div> 
   </>
        </div>
    );
};

export default BokkingModalBmw;