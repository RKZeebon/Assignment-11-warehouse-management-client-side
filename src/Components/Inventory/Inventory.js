import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/UseProducts';
import noImg from '../../Assets/noimage-found.png'
const Inventory = () => {
    const [products] = useProducts()

    return (
        <div>
            <div className='min-h-[850px] my-8 w-5/6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(p => <AllProducts
                        key={p._id}
                        product={p}
                    ></AllProducts>)
                }
            </div>
            <div className='my-5 text-center text-3xl'>
                <Link to='/manage-inventory' className='font-bold font-poppins text-[royalblue] hover:underline'>Manage Inventory ⪼</Link>
            </div>
        </div>
    );
};

const AllProducts = ({ product }) => {
    const navigate = useNavigate()
    const { name, img, description, price, quantity, supplier, _id } = product;
    const handleUpdate = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='mt-4'>
            <div className='border-l-4 border-r-4 border-t-4 border-[royalblue] p-2 rounded-tl-lg rounded-tr-lg md:min-h-[550px]'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img || noImg} alt="" />
                <h1 className='text-2xl font-semibold'>Item: {name}</h1>
                <h3 className='text-xl font-semibold'>Price: ${price}</h3>
                <h4 className='text-lg font-semibold'>Quantity: {quantity}</h4>
                <p className='text-md'><span className='font-semibold'>Supplier:</span> {supplier}</p>
                <p className='text-md'><span className='font-semibold'>Description:</span> {description.slice(0, 300) + ' .....'}</p>
            </div>
            <div onClick={() => handleUpdate(_id)} className='bg-[royalblue] text-center text-2xl py-2 hover:text-white hover:bg-blue-800 cursor-pointer'>
                <button className='font-semibold'>Update Stock</button>
            </div>
        </div>
    )
}
export default Inventory;