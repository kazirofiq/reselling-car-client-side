import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({carToyota, setCarToyota}) => {
    const {title, resellPrice} = carToyota;

    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        // const slot = form.slot.value;
        const name = form.name.value;
        // const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value;
        
        
        const booking ={
            name,
            email,
            phone,
            resellPrice,
            
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
                setCarToyota(null);
                toast.success('Booking Confirmed')
                // refetch();
            }
            else{
                toast.error(data.message);
            }
        })

        
    }
    return (
        <>
           
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{title}</h3>
                    <form onSubmit={handleBooking}>
                    <input type="text" value={resellPrice} disabled className="input input-bordered my-2 w-full " />
                    
                    <input name='name' type="text"
                     defaultValue={user?.displayName} disabled 
                     placeholder="Your Name" className="input input-bordered my-2 w-full " />
                    <input name='email' type="email"
                     defaultValue={user?.email} disabled required
                     readOnly placeholder="Email Address" className="input input-bordered my-2 w-full " />
                    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered my-2
                     w-full " />
                     <br />
                     <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                     
                </div>
             </div> 
        </>
    );
};

export default BookingModal;