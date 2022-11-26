import React from 'react';

const BookingModal = () => {
    // const {title} = carToyota;
    return (
        <>
           
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">b</h3>
                    <form >
                    <input type="text"  className="input input-bordered my-2 w-full " />
                    <select name='slot' className="select select-bordered my-2 w-full">
                        
                        {/* {
                            slots.map((slot, i) => <option
                                 value={slot}
                                    key={i}
                                 >{slot}</option>)
                        } */}
                        </select>
                    <input name='name' type="text"
                    //  defaultValue={user?.displayName} disabled 
                     placeholder="Your Name" className="input input-bordered my-2 w-full " />
                    <input name='email' type="email"
                    //  defaultValue={user?.email} disabled 
                     readOnly placeholder="Email Address" className="input input-bordered my-2 w-full " />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered my-2
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