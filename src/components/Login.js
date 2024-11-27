import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute '>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
          alt="logo"
        />
      </div>
      <form className='absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input
          type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-700'
        />}
        <input
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-800'
        />
        <input
          type='passward'
          placeholder='Passward'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? " New to Netflix?Sign up now" : "Already Registered,Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login
