import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const img = event.target.img.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const email = user.email;

        fetch('https://guarded-gorge-33419.herokuapp.com/product', {
            method: 'POST',
            body: JSON.stringify({
                name,
                img,
                supplier,
                price,
                quantity,
                description,
                email
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => json);
        event.target.reset()
        toast("Item added successfully")
    }
    return (
        <div className='w-3/4 md:w-1/3 mx-auto p-5 min-h-[850px]'>
            <form onSubmit={handleAddItem}>
                <h1 className='text-center text-2xl font-semibold font-Roboto mb-3 mt-5 bg-blue-400 py-2 rounded-lg'>Please fill out the form</h1>
                <div className='mb-2 text-lg'>
                    <input className='rounded-lg p-2 w-full border-2 border-black' type="text" name="name" id="" placeholder='Item Name' required />
                </div>
                <div className='mb-2 text-lg'>
                    <input className='rounded-lg p-2 w-full border-2 border-black' type="url" name="img" id="" placeholder='Image Url' pattern="https?://.+" />
                </div>
                <div className='mb-2 text-lg'>
                    <input className='rounded-lg p-2 w-full border-2 border-black' type="text" name="supplier" id="" placeholder='Supplier' />
                </div>
                <div className='mb-2 text-lg'>
                    <input className='rounded-lg p-2 w-full border-2 border-black' type="number" name="price" id="" placeholder='Price' required />
                </div>
                <div className='mb-2 text-lg'>
                    <input className='rounded-lg p-2 w-full border-2 border-black' type="number" name="quantity" id="" placeholder='Quantity' required />
                </div>
                <div className='mb-2 text-lg'>
                    <textarea className='rounded-lg p-2 w-full border-2 border-black' name="description" id="" cols="30" rows="5" placeholder='Description'></textarea>
                </div>
                <div className='text-center bg-blue-400 rounded-lg hover:bg-[royalblue] hover:text-white cursor-pointer'><input className=' text-2xl py-2 font-semibold font-Roboto cursor-pointer w-full' type="submit" value="Add Item" /></div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItem;