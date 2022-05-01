import React from 'react';
import gLogo from '../../Assets/google-logo.ico'
import gitLogo from '../../Assets/git-logo.ico'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading || updating) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        );
    }

    // const handleRegister = event => {
    //     event.preventDefault()
    //     const email = event.target.email.value;
    //     const pass = event.target.pass.value;
    //     console.log(email, pass);
    //     createUserWithEmailAndPassword(email, pass)
    // }
    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value;
        const pass = event.target.pass.value;
        const confirmPass = event.target.confirmPass.value

        if (pass === confirmPass) {
            await createUserWithEmailAndPassword(email, pass);
            navigate('/')
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
                    <div className='bg-blue-400 text-center my-5 rounded-md hover:bg-[royalblue] hover:text-white cursor-pointer shadow-md shadow-[royalblue]'><input className='text-2xl font-Roboto font-semibold cursor-pointer w-full py-2' type="submit" value="Sign Up" /></div>
                </form>
                <p className='text-lg text-center'>Already have an account? <Link className='text-[royalblue] font-semibold' to='/login'>Login</Link></p>
                <div className='flex items-center justify-center mt-8'>
                    <div className='bg-blue-400 h-[2px] mr-1 w-full'></div>
                    <p>Or</p>
                    <div className='bg-blue-400 h-[2px] ml-1 w-full'></div>
                </div>
                <div>
                    <div className='text-center bg-blue-400 my-3 rounded-md shadow-md shadow-[royalblue] hover:bg-[royalblue] hover:text-white cursor-pointer'>
                        <button className='text-xl font-semibold w-full py-2'> <img className='inline-block' src={gLogo} alt="" /> Continue With Google</button>
                    </div>
                    <div className='text-center bg-blue-400 my-3  rounded-md shadow-md shadow-[royalblue] hover:bg-[royalblue] hover:text-white cursor-pointer'>
                        <button className='text-xl font-semibold w-full py-2'> <img className='inline-block' src={gitLogo} alt="" /> Continue With Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;