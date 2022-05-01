import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [myItems, setMyItems] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [id, setId] = useState('')



    useEffect(() => {
        const url = `https://guarded-gorge-33419.herokuapp.com/userProducts?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))

    }, [user])
    const handleYes = () => {
        setOpenModal(false)

        const url = ` https://guarded-gorge-33419.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE',
        })
        const restItems = myItems.filter(p => p._id !== id)
        setMyItems(restItems)
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

            <div className='min-h-[850px] w-5/6 mx-auto my-12'>
                {myItems.length < 1 ?
                    <p className='text-center text-2xl font-Roboto font-medium'>You haven't added any item yet.</p>
                    :
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                        {
                            myItems.map(p => <MyItem
                                key={p._id}
                                product={p}
                                handleDelete={handleDelete}
                            ></MyItem>)
                        }
                    </div>
                }
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
        </div>
    );
};

export default MyItems;