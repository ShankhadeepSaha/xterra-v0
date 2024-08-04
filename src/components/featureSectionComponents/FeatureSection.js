import React from 'react';

const FeatureSection = () => {
  return (
    <div className=' min-h-screen flex items-center justify-center'>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-white text-black p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-600 mb-2">Innovative</h2>
          <h1 className="text-4xl font-bold mb-4">Transforming Robotics Solutions for a Better Future</h1>
          <p className="text-lg">At Xterra Robotics, we develop cutting-edge robotics solutions that revolutionize the way industries operate. Our advanced technology and expertise enable us to solve complex problems and enhance efficiency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-16 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Advanced Robotics Solutions</h3>
            <p className="text-gray-700">Our robotics solutions are designed to streamline processes, increase productivity, and reduce costs.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Innovative Design and Engineering</h3>
            <p className="text-gray-700">We combine creativity and technical expertise to develop robots that are efficient, reliable, and adaptable.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <div className="mb-4">
              <svg className="w-12 h-12 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Seamless Integration and Scalability</h3>
            <p className="text-gray-700">Our robotics solutions seamlessly integrate with existing systems and can be scaled to meet evolving needs.</p>
          </div>
        </div>
        <div className="flex justify-start mt-8">
          <button className="px-4 py-2 bg-gray-900 text-white font-semibold rounded hover:bg-gray-700">Learn More</button>
          <button className="ml-4 px-4 py-2 bg-transparent border border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white">
            Sign Up
          </button>      
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
