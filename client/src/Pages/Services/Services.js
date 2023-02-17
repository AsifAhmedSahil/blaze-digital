import React from 'react'

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <p className="inline-block px-3 text-2xl text-orange-600 animate-bounce py-px mb-4  font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
        OUR SERVICES
      </p>
    </div>
    <h2 className="max-w-lg mb-6 font-sans text-7xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      
      Provide Awesome Services
    </h2>
    <p className="text-base text-gray-700 md:text-lg">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque rem aperiam, eaque ipsa quae.
    </p>
  </div>
  

  
  <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
      <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-yellow-300">
      <p className="ml-4 text-2xl font-semibold italic mb-5">Strategy & Research</p>
        <p className="text-sm text-gray-900">
          Sportacus andrew weatherall goose Refined gentlemen super
          mario des lynam alpha trion zap rowsdower.
        </p>
      </div>
    </div>
    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
      <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-green-300">
      <p className="ml-4 text-2xl font-semibold italic mb-5">Web Delevlopment</p>
        <p className="text-sm text-gray-900">
          Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
    </div>
    <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
      <div className="h-full p-5 border border-l-0 rounded-r shadow-sm bg-pink-300">
      <p className="ml-4 text-2xl font-semibold italic mb-5">Social Media Marketing</p>
        <p className="text-sm text-gray-900">
          Bro ipsum dolor sit amet gaper backside single track, manny
          Bike epic clipless. Schraeder drop gondy.
        </p>
      </div>
    </div>
    
  </div>
  <div className="text-center">
    <a
      href="/"
      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    >
      Learn more
    </a>
  </div>
</div>
  )
}

export default Services