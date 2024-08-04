import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-white text-black p-8 pb-32 text-center">
      <div className="mb-4">
        <div className="flex justify-center mb-4">
          <div className="text-yellow-500 my-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.278 3.938a1 1 0 00.95.69h4.146c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.278 3.938c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.84-.197-1.54-1.118l1.278-3.938a1 1 0 00-.364-1.118L2.537 9.365c-.784-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.278-3.938z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-xl font-semibold mb-2">Xterra Robotics has revolutionized the way we approach locomotion. Their solutions are truly remarkable.</p>
        <div className="flex flex-wrap gap-y-8 my-8 justify-center items-center">
            <div className='flex'>
                {/* <img className="w-12 h-12 rounded-full mr-4" src="path-to-john-doe-image.jpg" alt="John Doe" /> */}
                <div className="w-12 h-12 bg-gray-500 rounded-full mr-4" />
                <div className="text-left">
                    <p className="font-bold">John Doe</p>
                    <p className="text-sm text-gray-600">CEO, Tech Solutions Inc.</p>
                </div>
            </div>
          {/* <img className="w-16 h-16 ml-4" src="path-to-webflow-logo.png" alt="Webflow" /> */}
          <div className="bg-gray-400 w-48 h-16 ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
