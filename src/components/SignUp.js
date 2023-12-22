import React, { useState } from 'react';

import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { RiAccountBoxFill } from 'react-icons/ri';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img2 from '../asserts/jocke-wulcan-KLOW1bD616Y-unsplash.jpg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => 
    ({ ...prev, 
      [name]: value
     }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log(formData);
    setFormData({
      fullName: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='h-full relative'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <img
            src={img2}
            alt=''
            className='h-screen w-full object-cover'
          />
          <p className='absolute top-1/3 p-20 text-white text-4xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam a
          </p>
        </div>

        <div className='grid place-items-center'>
          <div className='form-container w-3/4 grid gap-4'>
            <h1 className='font-bold text-3xl flex justify-items-center justify-center gap-2'>
              <span className='border-b-4 border-green-600'>Create</span>{' '}
              Account
              <RiAccountBoxFill className='text-green-600 text-4xl group' />
            </h1>
            <form onSubmit={handleSubmit}>
              <div className='input-group'>
                <FaUser className='absolute ml-2 w-6 text-green-600' />
                <input
                  className='pl-8'
                  type='text'
                  name='fullName' 
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <FaEnvelope className='absolute ml-2 w-6 text-green-600' />
                <input
                  className='pl-8'
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <FaLock className='absolute ml-2 w-6 text-green-600' />
                <input
                  className='pl-8'
                  type='password'
                  name='password' 
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type='submit'
                className='bg-green-600 w-full p-2 text-white text-xl rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out'>
                Sign Up
              </button>
            </form>
          </div>

          <div className='w-full h-full capitalize font-bold text-lg font-mono'>
            <h3>
              do you have an account?{' '}
              <span className='text-xl uppercase border-b-2  border-t-2  border-green-600 cursor-pointer'>
                LogIn
              </span>{' '}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
