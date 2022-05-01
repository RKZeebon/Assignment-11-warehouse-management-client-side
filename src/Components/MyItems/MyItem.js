import React from 'react';
import noImg from '../../Assets/noimage-found.png'

const MyItem = ({ product }) => {
    const { name, img, description, price, quantity, supplier, _id } = product;
    return (
        <div className='mt-4'>
            <div className='relative p-2 rounded-lg  md:min-h-[550px] shadow-xl shadow-blue-400'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img || noImg} alt="" />
                <h1 className='text-2xl font-semibold'>Item: {name}</h1>
                <h3 className='text-xl font-semibold'>Price: ${price}</h3>
                <h4 className='text-lg font-semibold'>Quantity: {quantity}</h4>
                <p className='text-md'><span className='font-semibold'>Supplier:</span> {supplier}</p>
                <p className='text-md'><span className='font-semibold'>Description:</span> {description.length > 200 ? description.slice(0, 200) + ' .....' : description}</p>
                <div className='bg-red-200 absolute left-0 right-0 bottom-0 rounded-br-lg rounded-bl-lg text-2xl text-center text-red-600 hover:bg-[#f70000] hover:text-red-200'><button className='font-semibold w-full py-3'>Remove</button></div>
            </div>

        </div>
    );
};

export default MyItem;