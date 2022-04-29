import React from 'react';
import useProducts from '../../Hooks/UseProducts';

const Shortage = () => {
    const [products] = useProducts()
    const shortProducts = products.filter(p => p.quantity < 10)
    console.log(shortProducts);
    return (
        <div className='w-5/6 mx-auto mt-24 mb-5 bg-blue-300 p-4 rounded-md'>
            <h1 className='text-center text-4xl font-Roboto font-semibold mt-2'>Shortage Products</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {
                    shortProducts.map(p => <ShortProduct
                        key={p._id}
                        product={p}
                    ></ShortProduct>)
                }
            </div>
        </div>
    );
};

const ShortProduct = ({ product }) => {
    const { name, img, quantity } = product;

    return (
        <div className='mt-8 bg-white rounded-md'>
            <div className='border-4 rounded-lg border-white p-2'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img} alt="" />
                <h1 className='text-3xl text-center font-semibold'>{name}</h1>
                <h4 className='text-xl text-center font-semibold'>Quantity: {quantity}</h4>
            </div>

        </div>
    )
}
export default Shortage;