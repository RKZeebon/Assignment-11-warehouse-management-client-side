import React from 'react';
import useProducts from '../../Hooks/UseProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts()
    return (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-5 my-8'>
            {
                products.map(p => <AllProducts
                    key={p._id}
                    product={p}
                ></AllProducts>)
            }
        </div>
    );
};

const AllProducts = ({ product }) => {
    const { name, img, price, quantity, supplier } = product;
    return (
        <div className='mt-4'>
            <div className='p-2 border-2 shadow-2xl shadow-blue-500/50 rounded-lg'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img} alt="" />
                <table className='w-full text-center'>
                    <tr className='border-2 border-black'>
                        <th className='text-xl border-r border-black'>Item</th>
                        <th className='text-xl border-r border-black'>Price</th>
                        <th className='text-xl border-r border-black'>Quantity</th>
                        <th className='text-xl border-r border-black'>Supplier</th>
                        <td className='bg-[#f70000] text-xl font-Roboto font-semibold cursor-pointer hover:bg-white hover:text-[#f70000]' rowspan="2">Delete</td>
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
}

export default ManageInventory;