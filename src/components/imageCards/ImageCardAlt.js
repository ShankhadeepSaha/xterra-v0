import React from 'react'

function ImageCard({ isFirst = false, titleTopic, titleText, description }) {
    return (
        <div className={`flex items-center justify-center ${isFirst ? "pt-32" : ""} pb-32 bg-gray-100 p-6`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg overflow-hidden flex flex-wrap">
                <div className="w-full lg:w-1/2 bg-gray-300 self-stretch flex items-center justify-center">
                    <div className="h-full text-gray-500 text-center">
                        {/* <div className="text-gray-500 text-center"> */}
                        <img className="object-cover h-full" src="images/svanM2IITK.jpeg" alt="xTerra Robotics" />
                        {/* </div> */}
                    </div>
                </div>
                <div className="p-8 py-32 w-full lg:w-1/2">
                    <p className="text-gray-500 uppercase tracking-wide text-sm font-bold">{titleTopic}</p>
                    <h1 className="mt-2 text-3xl font-bold text-gray-900">{titleText}</h1>
                    <p className="mt-4 text-gray-600">
                        {description}
                    </p>
                    <div className="mt-6">
                        <button className="px-4 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-700">Learn More</button>
                        <button className="ml-4 px-4 py-2 bg-transparent border border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
