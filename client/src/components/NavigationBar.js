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
                <h1 className="text-white text-xl font-medium ml-4">
                    Company Name
                </h1>
            </div>
            <div className="flex items-center">
                <a
                    href="#"
                    className="text-black hover:text-gray-400 mr-4"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-black hover:text-gray-400 mr-4"
                >
                    About
                </a>
                <a
                    href="#"
                    className="text-black hover:text-gray-400 mr-4"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default NavigationBar;