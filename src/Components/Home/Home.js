import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeInventory from '../Inventory/HomeInventory';
import Recent from '../RecentProducts/Recent';
import Shortage from '../ShortageProducts/Shortage';

const Home = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const url = `https://guarded-gorge-33419.herokuapp.com/sixproducts`
            const response = await fetch(url);
            const Data = await response.json();
            setProducts(Data)
        };

        fetchData();
    }, []);
    if (products.length <= 0) {
        return <p className='text-2xl text-center font-Roboto font-semibold min-h-[750px]'>Please Wait...</p>
    }

    return (
        <div className='min-h-[850px]'>
            <Banner />
            <div className='my-16'>
                <h1 className='text-5xl text-center text-[royalblue] font-poppins font-bold'>ᵒᴼᵒ Inventory ᵒᴼᵒ</h1>
                <div className='w-5/6 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 mt-5'>
                    {
                        products.map(product => <HomeInventory
                            key={product._id}
                            product={product}
                        ></HomeInventory>)
                    }
                </div>
                <div className='my-5 text-center text-3xl'>
                    <Link to='/manage-inventory' className='font-bold font-poppins text-[royalblue] hover:underline'>Manage Inventory ⪼</Link>
                </div>
            </div>

            <Recent />
            <Shortage />
        </div>
    );
};

export default Home;