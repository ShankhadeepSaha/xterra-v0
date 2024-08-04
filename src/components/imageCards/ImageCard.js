import React from 'react'

function ImageCard() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg overflow-hidden flex">
                <div className="p-8 py-32 w-1/2">
                    <p className="text-gray-500 uppercase tracking-wide text-sm font-bold">Innovative</p>
                    <h1 className="mt-2 text-3xl font-bold text-gray-900">Solving the Locomotion Problem with Cutting-Edge Technology</h1>
                    <p className="mt-4 text-gray-600">
                        At Xterra Robotics, we are dedicated to developing world-class solutions that address the complex challenges of locomotion.
                        Our cutting-edge technology is revolutionizing the way robots move, providing innovative solutions for industries such as
                        manufacturing, logistics, and healthcare.
                    </p>
                    <div className="mt-6">
                        <button className="px-4 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-700">Learn More</button>
                        <button className="ml-4 px-4 py-2 bg-transparent border border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white">
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        <p>Image Placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
