import React from 'react';
import Logo from '../Assets/Logo_Black.png'

const NavigationBar = () => {
    return (
        <nav className="p-3 flex items-center justify-between">
            <div className="flex items-center">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-60"
                />
            </div>
            <div className="flex items-center">
                <a
                    href="#"
                    className="text-black hover:text-gray-400 mr-6"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-black hover:text-gray-400 mr-6"
                >
                    Services
                </a>
                <a
                    href="#"
                    className="text-black hover:text-gray-400 mr-6"
                >
                    Contact Us
                </a>
                <a
                    href="#"
                    className="text-white font-bold hover:bg-red-600 mr-6 bg-red-500 px-3 py-3 rounded-md"
                >
                    Get a Quote
                </a>
            </div>
        </nav>
    );
};

export default NavigationBar;