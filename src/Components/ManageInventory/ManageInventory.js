
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Allproducts from './AllProducts/Allproducts';

const ManageInventory = () => {
    const [openModal, setOpenModal] = useState(false)
    const [id, setId] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://guarded-gorge-33419.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleYes = () => {
        setOpenModal(false)

        const url = ` https://guarded-gorge-33419.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        const restProducts = products.filter(p => p._id !== id)
        setProducts(restProducts)
        toast('Item Removed')
    }

    const handleNo = () => {
        setOpenModal(false)
    }
    const handleDelete = id => {
        setId(id)
        setOpenModal(true)


    }


    return (
        <div>

            <div className='w-5/6 mx-auto min-h-[850px] pt-8'>
                <div className='text-center text-3xl'>
                    <Link to='/add-item' className='font-bold font-poppins bg-blue-400 py-2 px-5 rounded-lg hover:bg-[royalblue] hover:text-white'>+ Add New Item</Link>
                </div>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 my-8'>
                    {
                        products.map(p => <Allproducts
                            key={p._id}
                            product={p}
                            handleDelete={handleDelete}
                        ></Allproducts>)
                    }
                </div>
                <div className='my-12 text-center text-3xl'>
                    <Link to='/add-item' className='font-bold font-poppins bg-blue-400 py-2 px-5 rounded-lg hover:bg-[royalblue] hover:text-white'>+ Add New Item</Link>
                </div>

            </div>
            {
                openModal && <div className='sticky top-0 bottom-0 z-40 left-0 right-0 bg-gray-500/75 flex items-center justify-center h-screen'>
                    <div className='bg-white h-48 w-[500px] rounded-lg p-5 relative'>
                        <p className='text-center text-2xl font-poppins'>Are you sure, You want to <span className='text-red-500 font-semibold'>Remove</span>?</p>

                        <div className='absolute bottom-5 left-5 right-5 flex justify-center gap-5'>
                            <div onClick={handleYes} className='bg-red-400 w-full text-center rounded-lg hover:bg-red-600'><button className='w-full py-2 font-semibold text-xl '>Yes</button></div>
                            <div onClick={handleNo} className='bg-green-400 w-full text-center rounded-lg hover:bg-green-500'><button className='w-full py-2 font-semibold text-xl '>No</button></div>
                        </div>
                    </div>
                </div>
            }
            <ToastContainer />
        </div>
    );
};



export default ManageInventory;