import React from 'react';

const ImageCardSolution2 = () => {
    return (
        <div className='flex items-center justify-center pb-32 bg-white p-6'>
            <div className="max-w-7xl bg-white text-black p-8 flex flex-wrap">
                <div className="mb-8 py-32 lg:w-1/2 pe-8">
                    <h1 className="text-4xl font-bold mb-4">Empowering the Future of Robotics with Innovative Solutions</h1>
                    <p className="text-lg mb-4">Xterra Robotics is proud to have achieved remarkable milestones and made a significant impact in the field of robotics. Our team of highly skilled and passionate engineers is dedicated to developing world-class solutions that solve the locomotion problem and drive technological advancements.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="">
                            <h2 className="text-3xl font-bold mb-2">50% Growth</h2>
                            <p className="text-gray-700">Increase in Robotics Market Share in the Past Year</p>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-bold mb-2">50% Success Rate</h2>
                            <p className="text-gray-700">Successful Implementation of Cutting-Edge Robotic Solutions</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 flex bg-slate-100 justify-center">
                    <img className="object-cover" src="images/svanM2IITK.jpeg" alt="xTerra Robotics" />
                </div>
            </div>
        </div>
    );
};

export default ImageCardSolution2;
