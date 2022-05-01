import React from 'react';
import noImg from '../../../Assets/noimage-found.png'

const Allproducts = ({ product, handleDelete }) => {
    const { name, img, price, quantity, supplier, _id } = product;

    return (

        <div className='mt-4'>
            <div className='p-2 border-2 shadow-2xl shadow-blue-500/50 rounded-lg'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img || noImg} alt="" />
                <table className='w-full text-center'>
                    <thead>
                        <tr className='border-2 border-black'>
                            <th className='text-xl border-r border-black'>Item</th>
                            <th className='text-xl border-r border-black'>Price</th>
                            <th className='text-xl border-r border-black'>Quantity</th>
                            <th className='text-xl border-r border-black'>Supplier</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-2 border-black'>
                            <td className='text-lg border-r border-black'>{name}</td>
                            <td className='text-lg border-r border-black'>${price}</td>
                            <td className='text-lg border-r border-black'>{quantity}</td>
                            <td className='text-lg border-r border-black'>{supplier}</td>
                        </tr>
                    </tbody>

                </table>
                <div className='bg-[#f70000] text-xl text-center cursor-pointer text-red-200 mt-2 rounded-br-lg rounded-bl-lg hover:text-[#f70000] hover:bg-red-200' onClick={() => handleDelete(_id)}><button className='py-2 w-full font-semibold'>Remove</button></div>
            </div>


        </div>
    )
};

export default Allproducts;