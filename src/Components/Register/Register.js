import React from 'react';
import gLogo from '../../Assets/google-logo.ico'
import gitLogo from '../../Assets/git-logo.ico'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let passError;
    const [updateProfile, updating] = useUpdateProfile(auth);

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



    if (loading || updating || googleLoading || gitLoading) {
        return <p>Loading...</p>;
    }

    if (user || googleUser || gitUser) {
        navigate('/')

    }

    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value;
        const pass = event.target.pass.value;
        const confirmPass = event.target.confirmPass.value

        if (pass === confirmPass) {
            await createUserWithEmailAndPassword(email, pass);
            await updateProfile({ displayName: name });

        }


    }

    return (
        <div className='min-h-[850px]'>

            <div className='w-2/3 lg:w-1/3 mx-auto my-8 pt-5 pb-10 shadow-2xl shadow-blue-400 px-2 rounded-lg'>
                <h1 className='text-3xl font-Roboto font-semibold text-[royalblue] text-center'>Please Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="text" name="name" id="name" placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="email" name="email" id="email" placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="pass" id="pass" placeholder='Enter Password' />
                    </div>
                    <div>
                        <input className='text-xl my-3 border-2 border-black w-full p-2 rounded-md' type="password" name="confirmPass" id="confirmPass" placeholder='Confirm Password' />
                    </div>
                    {passError}
                    <div className='bg-blue-400 text-center my-5 rounded-md hover:bg-[royalblue] hover:text-white cursor-pointer shadow-md shadow-[royalblue]'><input className='text-2xl font-Roboto font-semibold cursor-pointer w-full py-2' type="submit" value="Sign Up" /></div>
                </form>
                <p className='text-lg text-center'>Already have an account? <Link className='text-[royalblue] font-semibold' to='/login'>Login</Link></p>
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

export default Register;