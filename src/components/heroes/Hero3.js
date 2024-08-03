import React from 'react'

function Hero() {
  return (
    <div className="bg-gray-900 bg-opacity-50 text-white relative">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 h-screen flex items-center">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                    Discover Our Innovative Robotics Solutions
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Explore our cutting-edge products and experience the future of robotics.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Learn More
                        </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                            Request Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero
