import React from 'react';

const CallToAction = () => {
    return (
        <div className='flex items-center pb-32 justify-center'>
            <div className="lg:w-[80rem] px-8 bg-white text-black">
                <h1 className="text-4xl font-bold mb-4">Discover Our Innovative Robotics Solutions</h1>
                <p className="text-lg mb-8">Explore our cutting-edge products and experience the future of robotics.</p>
                <div className="flex justify-start space-x-4">
                    <button className="px-4 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-700">Learn More</button>
                    <button className="ml-4 px-4 py-2 bg-transparent border border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white">
                        Sign Up
                    </button>      
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
