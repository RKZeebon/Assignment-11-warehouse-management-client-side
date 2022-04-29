import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeInventory from '../Inventory/HomeInventory';
import Recent from '../RecentProducts/Recent';
import Shortage from '../ShortageProducts/Shortage';

const Home = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://guarded-gorge-33419.herokuapp.com/sixproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='min-h-[850px]'>
            <Banner />
            <div className='my-16'>
                <h1 className='text-5xl text-center text-[royalblue] font-poppins font-bold'>Inventory</h1>
                <div className='w-5/6 mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-5'>
                    {
                        products.map(product => <HomeInventory
                            key={product._id}
                            product={product}
                        ></HomeInventory>)
                    }
                </div>
                <div className='my-5 text-center text-3xl'>
                    <button onClick={() => navigate('/inventory')} className='font-bold font-poppins text-[royalblue] hover:underline'>Manage Inventory ⪼</button>
                </div>
            </div>

            <Recent />
            <Shortage />
        </div>
    );
};

export default Home;