import React from 'react';

const ImageCardSolution = () => {
    return (
        <div className='flex items-center justify-center pb-32 bg-white p-6'>
            <div className="max-w-7xl bg-white text-black p-8 flex flex-wrap">
                <div className="mb-8 py-32 lg:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Experience the Power of Xterra Robotics' Solutions for Various Industries</h1>
                    <p className="text-lg mb-4">Discover how Xterra Robotics' cutting-edge technology is revolutionizing industries across the board.</p>
                    <ul className="list-none space-y-4">
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Increase efficiency with our advanced automation solutions.
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Optimize operations with our intelligent robotic systems.
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Enhance productivity with our innovative AI-powered tools.
                        </li>
                    </ul>
                </div>
                <div className="lg:w-1/2 flex bg-slate-100 justify-center">
                    <img className="object-cover" src="images/svanM2IITK.jpeg" alt="xTerra Robotics" />
                </div>
            </div>
        </div>
    );
};

export default ImageCardSolution;
