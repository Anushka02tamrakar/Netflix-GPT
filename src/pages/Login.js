import React, { useState } from 'react'
import Header from '../coomponents/Header';


const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm)

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_small.jpg' alt='img' />

            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg' >
                <h1
                    className='"font-bold text-4xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        type='text'
                        placeholder='Username'
                        className='p-4 my-4 w-full bg-transparent border border-4 border-600'
                    />
                )}
                <input
                    type='text'
                    placeholder='Email or mobile number'
                    className='p-4 my-4 w-full bg-transparent border border-4 border-600' />
                <input
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-transparent border border-4 border-600' />
                <button
                    className='p-4 my-4 bg-red-700 w-full'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign in now"}</p>
            </form>


        </div>
    )
}

export default Login