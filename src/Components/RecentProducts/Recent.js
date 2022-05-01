import React from 'react';
import useProducts from '../../Hooks/UseProducts';
import noImg from '../../Assets/noimage-found.png'

const Recent = () => {
    const { products } = useProducts()
    const recentProducts = products.map(p => p).reverse().slice(0, 5)
    return (
        <div className='w-5/6 mx-auto mt-24 mb-12 bg-blue-300 py-5 px-3 rounded-md'>
            <h1 className='text-center text-4xl font-semibold font-Roboto'>Most Recent Products</h1>
            <div className='md:grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-12 mt-2'>
                {
                    recentProducts.map(product => <RecentProduct
                        key={product._id}
                        product={product}
                    ></RecentProduct>)
                }

            </div>
        </div>
    );
};

const RecentProduct = ({ product }) => {
    const { name, img, price, quantity } = product;

    return (
        <div className='mt-8'>
            <div className='border-4 rounded-lg border-white p-2'>
                <img className='rounded-tl-lg rounded-tr-lg mb-2' src={img || noImg} alt="" />
                <h1 className='text-2xl text-center font-semibold'>{name}</h1>
                <h3 className='text-xl text-center font-semibold'>Price: ${price}</h3>
                <h4 className='text-lg text-center font-semibold'>Quantity: {quantity}</h4>
            </div>

        </div>
    )
}

export default Recent;