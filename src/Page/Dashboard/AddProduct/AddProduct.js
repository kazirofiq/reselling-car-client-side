import React from 'react';

const AddProduct = () => {
    return (
        <div className='w-96 p-8'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Specialty</span></label>
                        <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }

                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {required: "Your Photo is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.img && <p className='text-red-600' role="alert">{errors.img?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' type="submit" value='Add Doctor'/>
                    
                    </form>
        </div>
    );
};

export default AddProduct;