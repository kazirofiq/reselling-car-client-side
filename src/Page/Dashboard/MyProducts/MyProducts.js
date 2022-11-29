import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Share/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Share/Loading/Loading';

const MyProducts = () => {

    const [deletingCar, setDeletingCar] = useState(null);

    const closeModal = () => {
        setDeletingCar(null);
    }


    const {data: cars, isLoading, refetch} = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            try{
                const res = await fetch('https://car-server-kazirofiq.vercel.app/cars', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    });
    const handleDeleteCar = car => {
        fetch(`https://car-server-kazirofiq.vercel.app/cars/${car._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`car ${car.name} deleted successfully`)
            }
        })
    }
    if(isLoading){
        return<Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">My Products:
             {cars?.length}
             </h2>
            <div className="overflow-x-auto">
             <table className="table w-full">
                
                <thead>
                <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cars?.map((car, i )=>  <tr key={car._id}
                        >
                            <th>{i+1}</th>
                            <td><div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={car.image} alt='' />
                                </div>
                            </div></td>
                            <td>{car.name}</td>
                            <td>{car.email}</td>
                            <td>{car.price}</td>
                            <td>
                            <label
                            
                             onClick={() => setDeletingCar(car)} 

                             htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete
                             </label>
                                </td>
                        </tr>)
                    }
                </tbody>
             </table>
            </div>
            {
                deletingCar && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`if you delete ${deletingCar.name}. It cannot be undone`}
                successAction={handleDeleteCar}
                modalData = {deletingCar}
                successButtonName="Delete"
                closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;