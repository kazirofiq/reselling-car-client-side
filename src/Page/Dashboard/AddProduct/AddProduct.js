import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
    

    const handleAddProduct = data =>{
        console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
            })
            .then((res) => res.json())
            .then(imgData =>{
                if(imgData.success){
                    const car = {
                        name: data.name,
                        email: data.email,
                        price: data.price,
                        image:imgData.data.url
                    }
                    //  save cars information to the database
                    fetch('https://car-server-kazirofiq.vercel.app/cars',{
                        method: 'POST',
                        headers: {
                            'content-type' : 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(car)
                    })
                    .then(res => res.json())
                    .then(result =>{
                        console.log(result);
                        toast.success(`${data.name} is added successfully`);
                        navigate('/dashboard/myproducts');
                       
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    return (
        <div className='w-96 p-8'>
            <h2 className="text-4xl">Add A Product</h2>
            <form
             onSubmit={handleSubmit(handleAddProduct)}
             >
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {required: "Your Name is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {required: "Email Address is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input type="number" {...register("price", {required: "Price" })} className="input input-bordered w-full max-w-xs " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Specialty</span></label>
                        {/* <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }

                        </select> */}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {required: "Your Photo is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' type="submit" value='Add Product'/>
                    
                    </form>
        </div>
    );
};

export default AddProduct;