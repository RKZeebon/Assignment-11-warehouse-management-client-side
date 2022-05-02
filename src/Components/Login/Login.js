import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gLogo from '../../Assets/google-logo.ico'
import gitLogo from '../../Assets/git-logo.ico'
import auth from '../../Firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home';
    const [
        signInWithEmailAndPassword,
        passUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    let passErrorMsg;
    let resetErrormsg;


    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    let googleErrorMsgs;
    let gitErrorMsgs;

    const [user] = useAuthState(auth);


    if (error) {
        passErrorMsg = <div>
            <p className='text-red-600 font-bold text-center mt-8'> {error.message}</p>
        </div>
        googleErrorMsgs = '';
        gitErrorMsgs = '';
        resetErrormsg = '';
    }

    if (resetError) {
        resetErrormsg = <div>
            <p className='text-red-600 font-bold text-center mt-8'> {resetError.message}</p>
        </div>
        passErrorMsg = '';
        googleErrorMsgs = '';
        gitErrorMsgs = '';

    }

    if (googleError) {
        googleErrorMsgs = <div>
            <p className='text-red-600 font-bold text-center mt-8'> {googleError.message}</p>
        </div>
        passErrorMsg = '';
        gitErrorMsgs = '';
        resetErrormsg = '';
    }
    if (gitError) {
        gitErrorMsgs = <div>
            <p className='text-red-600 font-bold text-center mt-8'> {gitError.message}</p>
        </div>
        passErrorMsg = '';
        googleErrorMsgs = '';
        resetErrormsg = '';
    }



    if (loading || googleLoading || gitLoading) {
        return <p className='text-2xl text-center font-Roboto font-semibold min-h-[750px]'>Please Wait...</p>
    }

    if (passUser || googleUser || gitUser) {
        const url = 'https://guarded-gorge-33419.herokuapp.com/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.token)
                navigate(from, { replace: true })
            });




    }

    const handlesignin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const pass = event.target.pass.value;

        signInWithEmailAndPassword(email, pass)

    }
    const handleResetPass = () => {
        if (email) {
            sendPasswordResetEmail(email);
            toast('Email sent');
            setEmail('')
        }
        else {
            toast('Please enter your email');
        }
    }


    return (
        <div className='min-h-[850px]'>

            <div className='w-2/3 lg:w-1/3 mx-auto my-8 pt-5 pb-10 shadow-2xl shadow-blue-400 px-2 rounded-lg'>
                <h1 className='text-3xl font-Roboto font-semibold text-[royalblue] text-center'>Please login</h1>
                <form onSubmit={handlesignin}>
                    <div>
                        <input onChange={(e) => setEmail(e.target.value)} className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="email" name="email" id="email" placeholder='Enter Your Email' required />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="pass" id="password" placeholder='Enter Your Password' required />
                    </div>
                    {passErrorMsg}
                    <div className='bg-blue-400 text-center my-5 rounded-md hover:bg-[royalblue] hover:text-white cursor-pointer shadow-md shadow-[royalblue]'><input className='text-2xl font-Roboto font-semibold cursor-pointer w-full py-2' type="submit" value="Login" /></div>
                </form>
                <p className='text-lg text-center'>New Here? Please <Link className='text-[royalblue] font-semibold' to='/register'>Register</Link></p>
                {resetErrormsg}
                <p className='text-lg text-center'>Forget Password? <button onClick={handleResetPass} className='text-[royalblue] font-semibold'>Reset</button></p>
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
            <ToastContainer />
        </div>
    );
};

export default Login;