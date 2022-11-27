import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
  const {user} = useContext(AuthContext);
  const url = `https://car-server-kazirofiq.vercel.app/bookings?email=${user?.email}`;

  const {data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
      });
      const data = await res.json();
      return data;
    }
  })
    return (
        <div>
            <h3 className='text-3xl mb-4'>My Orders</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>LOcation</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      
            {
                bookings &&
                bookings?.map((booking, i) => <tr key={booking._id}>
                <th>{i+1}</th>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td></td>

                <td>{booking.resellPrice}</td>
                <td>
                  {
                    // booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                    //   <button
                    //       className='btn btn-primary btn-sm'>PAY
                    //    </button>
                    // </Link>
                  }
                  {/* {
                    booking.price && booking.paid && <span className='text-primary'>Paid</span>
                  } */}
                  </td>
              </tr>)
            }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;