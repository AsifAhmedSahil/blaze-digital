import React from 'react';
import header_image from '../../Assets/header_image.png'
import madcartz from '../../Assets/madcartz.png'
import creatus from '../../Assets/creatus.png'
const HomePage = () => {
    return (
        <div className=''>
            <section className='flex justify-between items-center mt-9'>
                <div className='w-1/2'>
                    <h1 className='text-gray-400'>Welcome to Blaze Digital</h1>
                    <p className='font-extrabold text-5xl'>IGNITE YOUR</p>
                    <p className='font-black text-8xl text-red-600 mb-0'>ONLINE PRESENCE</p>
                    <p className='text-gray-500 font-medium text-md w-4/5'>We are a Software Company with 2 years of experience in both Software and Marketing</p>
                    <button className='bg-red-600 text-white px-5 py-3 rounded-md text-xl font-bold mt-6'>Learn More</button>
                </div>
                <div className='w-1/2 p-5'>
                    <img src={header_image} alt=""></img>
                </div>
            </section>
            <section className='p-3 my-10'>
                <div className='flex justify-between items-center'>
                    <hr class="w-1/3 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200" />
                    <h3 className='text-center text-red-600 text-4xl font-bold w-1/3'>Our Gold Clients</h3>
                    <hr class="w-1/3 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200" />
                </div>
                <div className='my-12 flex justify-between items-center opacity-70'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/East_Delta_University_logo.png" alt="" className='h-14' />
                    <img src="https://supervisorsolutions.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f69ac50f.png&w=384&q=75" alt="" className='h-14' />
                    <img src="http://t3.gstatic.com/images?q=tbn:ANd9GcT74VziUoREkiC0vNNbf7JdWXtxy4-Pixs2-XawCFbbjnCxzVRp" alt="" className='h-14 p-3' />
                    <img src={madcartz} alt="" className='h-14' />
                    <img src={creatus} alt="" className='h-14 p-2' />
                </div>
            </section>

        </div>
    );
};

export default HomePage;