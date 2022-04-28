import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='bg-blue-500 '>
            <div className='flex items-center justify-between lg:w-5/6 lg:mx-auto h-16 px-5'>
                <h1 className='text-2xl lg:text-4xl font-bold font-serif whitespace-nowrap'>RKZ Computer</h1>
                <div className='text-white text-3xl lg:hidden font-bold' onClick={() => setOpen(!open)}>
                    {open ? <div>✕</div> : <div>☳</div>}
                </div>
                <div className='lg:flex items-center hidden'>
                    <NavLink className='ml-4 text-lg py-1 px-2 hover:bg-amber-300 hover:rounded-md' to={'/home'}>Home</NavLink>
                    <NavLink className='ml-4 text-lg py-1 px-2 hover:bg-amber-300 hover:rounded-md' to={'/inventory'}>Inventory</NavLink>
                    <NavLink className='ml-4 text-lg py-1 px-2 hover:bg-amber-300 hover:rounded-md' to={'/login'}>Login</NavLink>
                    <div className='ml-4'>
                        <NavLink className=' text-lg py-1 px-2 hover:bg-amber-300 hover:rounded-md' to={'/manage-items'}>Manage Items</NavLink>
                        <NavLink className='ml-4 text-lg py-1 px-2 hover:bg-amber-300 hover:rounded-md' to={'/add-item'}>Add Item</NavLink>
                        <NavLink className='ml-4 text-lg py-1 px-2 hover:bg-amber-300 hover:rounded-md' to={'/my-items'}>My Items</NavLink>
                        <NavLink className='ml-4 text-lg py-1 px-2 hover:bg-amber-300 hover:rounded-md' to={'/'}>Logout</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
