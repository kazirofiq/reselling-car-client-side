import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='text-center p-10 my-20'>
            <h2 className='text-4xl text-green-500 font-bold my-6'>Reselling <span className='text-red-700'>Car</span> Category</h2>
            <Link className='text-sky-700 text-xl my-4' to='/toyota'><h3>Car toyota in Bangladesh</h3></Link>
            <Link className='text-sky-700 text-xl my-4' to='/tesla'><h3>Reselling BMW Car</h3></Link>
            <Link className='text-sky-700 text-xl my-4' to='/bmw'><h3>Reselling Tesla Cars</h3></Link>
        </div>
    );
};

export default Category;