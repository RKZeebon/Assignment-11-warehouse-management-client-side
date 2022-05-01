import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { NavLink } from 'react-router-dom';
import auth from '../../../Firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [user] = useAuthState(auth);


    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='bg-blue-500 sticky top-0 z-50'>
            <div className='flex items-center justify-between lg:w-5/6 lg:mx-auto h-16 px-5'>
                <h1 className='text-2xl tracking-wider lg:text-4xl font-extrabold font-Anek whitespace-nowrap uppercase bg-clip-text text-transparent bg-gradient-to-t from-orange-400 to-white'>Computer City</h1>
                <div className='text-white text-3xl lg:hidden font-bold' onClick={() => setOpen(!open)}>
                    {open ? <div>✕</div> : <div>☳</div>}
                </div>
                <div className={`lg:flex items-center ${open ? 'absolute z-50 text-center lg:static block right-0 left-0 top-16 bg-blue-500 p-2' : 'hidden'}`}>
                    <div className={'my-2'} >
                        <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/home'}>Home</NavLink>
                    </div>
                    <div className={'my-2'} >
                        <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/inventory'}>Inventory</NavLink>
                    </div>
                    {
                        user ?
                            <div className='lg:flex items-center'>
                                <div className={'my-2'} >
                                    <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/manage-inventory'}>Manage Items</NavLink>
                                </div>
                                <div className={'my-2'} >
                                    <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/add-item'}>Add Item</NavLink>
                                </div>
                                <div className={'my-2'} >
                                    <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/my-items'}>My Items</NavLink>
                                </div>


                                <div onClick={logout} className={'my-2'} >
                                    <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/'}>Log Out</NavLink>
                                </div>
                            </div>
                            :
                            <div className={'my-2'} >
                                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/login'}>Login</NavLink>
                            </div>

                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;
