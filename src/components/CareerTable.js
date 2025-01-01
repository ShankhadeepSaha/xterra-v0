"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, MapPin, Clock, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const JobCard = ({ job, onApply }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Job Badge & Title */}
      <div className="flex flex-col gap-4 mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 w-fit">
          {job.type}
        </span>
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={isExpanded ? 'Show less' : 'Show more'}
          >
            {isExpanded ? 
              <ChevronUp className="w-5 h-5" /> : 
              <ChevronDown className="w-5 h-5" />
            }
          </button>
        </div>
      </div>

      {/* Job Location - Always visible */}
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <MapPin className="w-5 h-5" />
        <span>{job.location}</span>
      </div>

      {/* Collapsible Content */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="space-y-4 mb-8">
          <p className="text-gray-600 leading-relaxed">
            {job.description}
          </p>

          {/* Requirements Section */}
          {job.requirements && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={() => onApply(job.title)}
        className="inline-flex items-center justify-center gap-2 bg-[#101820] text-white px-5 py-2 
          rounded-full text-sm font-medium hover:bg-[#2c3e50] transition-colors duration-300"
      >
        Apply Now
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

function CareerCards() {
  const router = useRouter();

  const jobs = [
    {
      title: 'Design Engineer',
      type: 'Internship',
      location: 'In-office',
      description: 'Conceiving, meticulously designing, and validating innovative mechanical systems to optimise the functionality and performance of our cutting-edge legged robotic solutions.',
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering or related field',
        'Experience with CAD software (preferably SolidWorks)',
        'Strong analytical and problem-solving skills',
        'Knowledge of manufacturing processes'
      ]
    },
    {
      title: 'Robotics Software Developer',
      type: 'Internship',
      location: 'In-office',
      description: 'Architecting, developing, and rigorously testing sophisticated software systems, thereby empowering the control mechanisms and augmenting the capabilities of our advanced legged robotic solutions.',
      requirements: [
        'Strong programming skills in C++ and Python',
        'Experience with ROS (Robot Operating System)',
        'Knowledge of control systems and robotics',
        'Good understanding of software architecture'
      ]
    },
    {
      title: 'Founder Office (Product Strategy Analyst)',
      type: 'Internship',
      location: 'In-office',
      description: 'Conceiving, meticulously designing, and validating innovative mechanical systems to optimise the functionality and performance of our cutting-edge legged robotic solutions.',
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering or related field',
        'Experience with CAD software (preferably SolidWorks)',
        'Strong analytical and problem-solving skills',
        'Knowledge of manufacturing processes'
      ]
    },    {
      title: 'Design Engineer',
      type: 'Internship',
      location: 'In-office',
      description: 'Conceiving, meticulously designing, and validating innovative mechanical systems to optimise the functionality and performance of our cutting-edge legged robotic solutions.',
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering or related field',
        'Experience with CAD software (preferably SolidWorks)',
        'Strong analytical and problem-solving skills',
        'Knowledge of manufacturing processes'
      ]
    }
  ];

  const handleApply = (jobTitle) => {
    router.push('https://form.jotform.com/231685424919465');
  };

  return (
    <section className="px-4 bg-white font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className='mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-600 leading-relaxed'>
            Join our team and help build the future of robotics. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onApply={handleApply}
            />
          ))}
        </div>

        {/* No Positions Notice */}
        {jobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No open positions at the moment. Please check back later!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CareerCards;