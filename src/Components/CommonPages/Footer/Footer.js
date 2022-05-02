import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../Assets/Social/facebook.jpg'
import instagram from '../../../Assets/Social/instagram.png'
import linkedin from '../../../Assets/Social/linkedin.png'
import twitter from '../../../Assets/Social/twitter.png'

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='lg:w-4/6 lg:mx-auto p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl mb-2'>Connect:</h1>
                        <div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8 rounded' src={facebook} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Facebook</p>
                            </div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8' src={instagram} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Instagram</p>
                            </div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8' src={linkedin} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Linkedin</p>
                            </div>
                            <div className='mb-2 flex items-center cursor-pointer bg-white p-2 rounded-lg'>
                                <img className='w-8' src={twitter} alt="" />
                                <p className='ml-2 text-black font-semibold text-lg'>Twitter</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl mb-2'>Useful Links:</h1>
                        <div>
                            <Link className='ml-2 text-lg block' to='/inventory'>Inventory</Link>
                            <Link className='ml-2 text-lg block' to='/blogs'>Blogs</Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <h1>Copyright Ⓒ RKZ Computer City 2022</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;