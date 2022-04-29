import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='bg-blue-500 '>
            <div className='flex items-center justify-between lg:w-5/6 lg:mx-auto h-16 px-5'>
                <h1 className='text-2xl tracking-wider underline lg:text-4xl font-bold font-Roboto whitespace-nowrap uppercase'>Computer City</h1>
                <div className='text-white text-3xl lg:hidden font-bold' onClick={() => setOpen(!open)}>
                    {open ? <div>✕</div> : <div>☳</div>}
                </div>
                <div onClick={() => setOpen(false)} className={`lg:flex items-center ${open ? 'absolute lg:static block right-0 left-0 top-16 bg-blue-500 p-2' : 'hidden'}`}>
                    <div className={'my-2'} >
                        <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/home'}>Home</NavLink>
                    </div>
                    <div className={'my-2'} >
                        <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/inventory'}>Inventory</NavLink>
                    </div>
                    <div className={'my-2'} >
                        <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/login'}>Login</NavLink>
                    </div>
                    <div className='lg:flex items-center'>
                        <div className={'my-2'} >
                            <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/manage-items'}>Manage Items</NavLink>
                        </div>
                        <div className={'my-2'} >
                            <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/add-item'}>Add Item</NavLink>
                        </div>


                        <div className={'my-2'} >
                            <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/my-items'}>My Items</NavLink>
                        </div>


                        <div className={'my-2'} >
                            <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/'}>Log Out</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
