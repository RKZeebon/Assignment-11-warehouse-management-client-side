import React from 'react';
import useProducts from '../../../Hooks/UseProducts';
import noImg from '../../../Assets/noimage-found.png'

const Allproducts = ({ product }) => {
    const [products, setProducts] = useProducts()

    const { name, img, price, quantity, supplier, _id } = product;
    const HandleRemove = (id) => {
        // const url = ` https://guarded-gorge-33419.herokuapp.com/product/${id}`
        // console.log(url);
        // fetch(url, {
        //     method: 'DELETE',
        // })

    }

    return (
        <div className='mt-4'>
            <div className='p-2 border-2 shadow-2xl shadow-blue-500/50 rounded-lg'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img || noImg} alt="" />
                <table className='w-full text-center'>
                    <tr className='border-2 border-black'>
                        <th className='text-xl border-r border-black'>Item</th>
                        <th className='text-xl border-r border-black'>Price</th>
                        <th className='text-xl border-r border-black'>Quantity</th>
                        <th className='text-xl border-r border-black'>Supplier</th>
                        <td className='bg-[#f70000] text-xl font-Roboto font-semibold cursor-pointer text-red-200 hover:text-[#f70000] hover:bg-red-200' rowSpan="2" onClick={() => HandleRemove(_id)}>Remove</td>
                    </tr>
                    <tr className='border-2 border-black'>
                        <td className='text-lg border-r border-black'>{name}</td>
                        <td className='text-lg border-r border-black'>${price}</td>
                        <td className='text-lg border-r border-black'>{quantity}</td>
                        <td className='text-lg border-r border-black'>{supplier}</td>
                    </tr>

                </table>
            </div>

        </div>
    )
};

export default Allproducts;