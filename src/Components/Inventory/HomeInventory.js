import React from 'react';

const HomeInventory = ({ product }) => {
    const { name, img, description, price, quantity, supplier } = product;
    return (
        <div className='mt-4'>
            <div className='border-l-4 border-r-4 border-t-4 border-[royalblue] p-2 rounded-tl-lg rounded-tr-lg'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img} alt="" />
                <h1 className='text-3xl font-semibold'>Item: {name}</h1>
                <h3 className='text-2xl font-semibold'>Price: ${price}</h3>
                <h4 className='text-xl font-semibold'>Quantity: {quantity}</h4>
                <p className='text-lg'><span className='font-semibold'>Supplier:</span> {supplier}</p>
                <p className='text-lg'><span className='font-semibold'>Description:</span> {description.slice(0, 250) + ' .....'}</p>
            </div>
            <div className='bg-[royalblue] text-center text-2xl py-2 hover:text-white hover:bg-blue-800'>
                <button className='font-semibold'>Update Stock</button>
            </div>
        </div>
    );
};

export default HomeInventory;