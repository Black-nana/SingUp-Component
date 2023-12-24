import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { RiAccountBoxFill } from 'react-icons/ri';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import img2 from '../asserts/jocke-wulcan-KLOW1bD616Y-unsplash.jpg';

const validationSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Must be 8 characters or more')
    .required('Password is required'),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset: Reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    Reset();
  };
  return (
    <div>
      <div className='grid grid-cols-2 max-md:grid'>
        <div className='h-full relative max-md:hidden'>
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

        <div className='grid place-items-center w-full max-md:absolute h-screen'>
          <div className='form-container w-3/4 grid gap-4 h-3/4'>
            <h1 className='font-bold text-3xl flex justify-items-center justify-center gap-2 max-md:h-14'>
              <span className='border-b-4 border-green-600'>Create</span>{' '}
              Account
              <RiAccountBoxFill className='text-green-600 text-4xl group' />
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className={`input-group relative ${
                  errors.fullName ? 'border-red-500' : ''
                }`}>
                <FaUser className='absolute top-4 ml-2 w-6 text-green-600' />
                <div className='w-full'>
                  <input
                    className='pl-8 border-b focus:outline-none'
                    type='text'
                    placeholder='Full Name'
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <p className='text-sm text-red-500 m-0 p-0'>
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`input-group relative ${
                  errors.email ? 'border-red-500' : ''
                }`}>
                <FaEnvelope className='absolute top-4 ml-2 w-6 text-green-600' />
                <div className='w-full'>
                  <input
                    className='pl-8 border-b focus:outline-none'
                    type='email'
                    placeholder='Email Address'
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className='text-sm text-red-500 m-0 p-0'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`input-group relative ${
                  errors.password ? 'border-red-500' : ''
                }`}>
                <FaLock className='absolute top-4 ml-2 w-6 text-green-600' />
                <div className='w-full'>
                  <input
                    className='pl-8 border-b focus:outline-none'
                    type='password'
                    placeholder='Password'
                    {...register('password')}
                  />
                  {errors.password && (
                    <p className='text-sm text-red-500 m-0 p-0'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
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
              <span className='text-xl uppercase border-b-2 border-t-2 border-green-600 cursor-pointer'>
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
