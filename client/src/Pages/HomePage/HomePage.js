import React from 'react';
import header_image from '../../Assets/header_image.png'
const HomePage = () => {
    return (
        <div>
            <section className='flex justify-between items-center mt-9'>
                <div className='w-1/2'>
                    <h1 className='text-gray-400'>Welcome to Blaze Digital</h1>
                    <p className='font-extrabold text-5xl'>IGNITE YOUR</p>
                    <p className='font-black text-8xl text-red-600 mb-0'>ONLINE PRESENCE</p>
                    <p className='text-gray-500 font-medium text-lg'>We are a Software Company with 2 years of experience in both Software and Marketing</p>
                    <button className='bg-red-600 text-white px-5 py-3 rounded-lg text-xl font-bold mt-6'>Learn More</button>
                </div>
                <div className='w-1/2 p-3'>
                    <img src={header_image} alt=""></img>
                </div>
            </section>
        </div>
    );
};

export default HomePage;