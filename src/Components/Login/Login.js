import React from 'react';
import { Link } from 'react-router-dom';
import gLogo from '../../Assets/google-logo.ico'
import gitLogo from '../../Assets/git-logo.ico'
const Login = () => {
    return (
        <div className='min-h-[850px]'>

            <div className='w-2/3 lg:w-1/3 mx-auto my-8 py-5 shadow-2xl shadow-blue-400 px-2 rounded-lg'>
                <h1 className='text-3xl font-Roboto font-semibold text-[royalblue] text-center'>Please login</h1>
                <form>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="email" name="email" id="" placeholder='Enter your email' />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="pass" id="" placeholder='Enter your password' />
                    </div>
                    <div className='bg-blue-400 py-2 text-center my-5 rounded-md hover:bg-[royalblue] hover:text-white cursor-pointer shadow-md shadow-[royalblue]'><input className='text-2xl font-Roboto font-semibold cursor-pointer' type="submit" value="Login" /></div>
                </form>
                <p className='text-lg text-center'>New here? Please <Link className='text-[royalblue] font-semibold' to='/register'>Register</Link></p>
                <div className='flex items-center justify-center mt-8'>
                    <div className='bg-blue-400 h-[2px] mr-1 w-full'></div>
                    <p>Or</p>
                    <div className='bg-blue-400 h-[2px] ml-1 w-full'></div>
                </div>
                <div>
                    <div className='text-center bg-blue-400 my-3 py-2 rounded-md shadow-md shadow-[royalblue] hover:bg-[royalblue] hover:text-white cursor-pointer'>
                        <button className='text-xl font-semibold'> <img className='inline-block' src={gLogo} alt="" /> Continue With Google</button>
                    </div>
                    <div className='text-center bg-blue-400 my-3 py-2 rounded-md shadow-md shadow-[royalblue] hover:bg-[royalblue] hover:text-white cursor-pointer'>
                        <button className='text-xl font-semibold'> <img className='inline-block' src={gitLogo} alt="" /> Continue With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;