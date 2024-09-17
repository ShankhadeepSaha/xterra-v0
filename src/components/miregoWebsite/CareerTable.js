import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


function CareerTable() {
    const router = useRouter(); // Use if using Next.js, otherwise you can use window.location

    const [openJobIndex, setOpenJobIndex] = useState(null);

    const jobs = [
        { 
            title: 'Design Engineer', 
            type: 'Internship', 
            location: 'In-office',
            description: 'Conceiving, meticulously designing, and validating innovative mechanical systems to optimise the functionality and performance of our cutting-edge legged robotic solutions.'
        },
        { 
            title: 'Robotics Software Developer', 
            type: 'Internship', 
            location: 'In-office',
            description: 'Architecting, developing, and rigorously testing sophisticated software systems, thereby empowering the control mechanisms and augmenting the capabilities of our advanced legged robotic solutions.'
        },
        // { 
        //     title: 'Software Developer', 
        //     type: 'Internship', 
        //     location: 'In-office',
        //     description: 'We are seeking a talented Software Developer to work on exciting projects...'
        // },
    ];

    const toggleDropdown = (index) => {
        setOpenJobIndex(openJobIndex === index ? null : index);
    };

    const handleApply = (jobTitle) => {
        // Replace with your actual form URL
        router.push(`https://form.jotform.com/231685424919465`);
        // If not using Next.js, use: window.location.href = `/apply?job=${encodeURIComponent(jobTitle)}`;
    };

    return (
        <div className="container mx-auto p-4 my-8 sm:my-16 md:my-24 lg:my-32 font-almirego">
            {jobs.map((job, index) => (
                <div key={index} className="mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
                        <span className="w-full sm:w-1/4 mb-2 sm:mb-0 font-bold text-lg sm:text-xl">{job.title}</span>
                        <span className="w-full sm:w-1/4 mb-2 sm:mb-0 font-bold text-lg sm:text-xl">{job.type}</span>
                        <span className="w-full sm:w-1/4 mb-2 sm:mb-0 font-bold text-lg sm:text-xl">{job.location}</span>
                        <button 
                            onClick={() => toggleDropdown(index)} 
                            className="w-full sm:w-1/4 text-left sm:text-center font-bold text-xl sm:text-2xl focus:outline-none"
                        >
                            {openJobIndex === index ? '-' : '+'}
                        </button>
                    </div>
                    {openJobIndex === index && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                            <p className="mb-4 text-lg">{job.description}</p>
                            <button 
                                onClick={() => handleApply(job.title)}
                                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CareerTable;