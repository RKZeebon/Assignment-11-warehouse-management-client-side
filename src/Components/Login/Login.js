import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gLogo from '../../Assets/google-logo.ico'
import gitLogo from '../../Assets/git-logo.ico'
import auth from '../../Firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let passError;

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    let googleErrorMsgs;
    let gitErrorMsgs;
    if (error) {
        passError = <div>
            <p className='text-red-600 font-bold text-center mt-8'> {error.message}</p>
        </div>
        googleErrorMsgs = '';
        gitErrorMsgs = '';
    }

    if (googleError) {
        googleErrorMsgs = <div>
            <p className='text-red-600 font-bold text-center mt-8'> {googleError.message}</p>
        </div>
        passError = '';
        gitErrorMsgs = '';
    }
    if (gitError) {
        gitErrorMsgs = <div>
            <p className='text-red-600 font-bold text-center mt-8'> {gitError.message}</p>
        </div>
        passError = '';
        googleErrorMsgs = '';
    }



    if (loading || googleLoading || gitLoading) {
        return <p>Loading...</p>;
    }

    if (user || googleUser || gitUser) {
        navigate('/')

    }

    const handlesignin = async event => {
        event.preventDefault()
        const email = event.target.email.value;
        const pass = event.target.pass.value;

        await signInWithEmailAndPassword(email, pass)

    }


    return (
        <div className='min-h-[850px]'>

            <div className='w-2/3 lg:w-1/3 mx-auto my-8 pt-5 pb-10 shadow-2xl shadow-blue-400 px-2 rounded-lg'>
                <h1 className='text-3xl font-Roboto font-semibold text-[royalblue] text-center'>Please login</h1>
                <form onSubmit={handlesignin}>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="pass" id="password" placeholder='Enter Your Password' required />
                    </div>
                    {passError}
                    <div className='bg-blue-400 text-center my-5 rounded-md hover:bg-[royalblue] hover:text-white cursor-pointer shadow-md shadow-[royalblue]'><input className='text-2xl font-Roboto font-semibold cursor-pointer w-full py-2' type="submit" value="Login" /></div>
                </form>
                <p className='text-lg text-center'>New here? Please <Link className='text-[royalblue] font-semibold' to='/register'>Register</Link></p>
                <div className='flex items-center justify-center mt-8'>
                    <div className='bg-blue-400 h-[2px] mr-1 w-full'></div>
                    <p>Or</p>
                    <div className='bg-blue-400 h-[2px] ml-1 w-full'></div>
                </div>
                <div>
                    {googleErrorMsgs}
                    <div onClick={() => signInWithGoogle()} className='text-center bg-blue-400 my-3 rounded-md shadow-md shadow-[royalblue] hover:bg-[royalblue] hover:text-white cursor-pointer'>
                        <button className='text-xl font-semibold w-full py-2'> <img className='inline-block' src={gLogo} alt="" /> Continue With Google</button>
                    </div>
                    {gitErrorMsgs}
                    <div onClick={() => signInWithGithub()} className='text-center bg-blue-400 my-3  rounded-md shadow-md shadow-[royalblue] hover:bg-[royalblue] hover:text-white cursor-pointer'>
                        <button className='text-xl font-semibold w-full py-2'> <img className='inline-block' src={gitLogo} alt="" /> Continue With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;