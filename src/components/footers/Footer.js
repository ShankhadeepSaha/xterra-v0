import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black flex items-center justify-center'>
            <div className="lg:w-[80rem] bg-black text-white p-8">
                <div className="my-16 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="h-16 bg-black" src="/images/xTerra-White-1.png" alt="xTerra Robotics" />
                    </div>
                    <div className="flex flex-col w-3/4 lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                        <div className='lg:w-1/3'>
                            <h3 className="font-bold mb-2">Column One</h3>
                            <ul className="space-y-1">
                                <li><a href="#">Link One</a></li>
                                <li><a href="#">Link Two</a></li>
                                <li><a href="#">Link Three</a></li>
                                <li><a href="#">Link Four</a></li>
                                <li><a href="#">Link Five</a></li>
                            </ul>
                        </div>
                        <div className='lg:w-1/3'>
                            <h3 className="font-bold mb-2">Column Two</h3>
                            <ul className="space-y-1">
                                <li><a href="#">Link Six</a></li>
                                <li><a href="#">Link Seven</a></li>
                                <li><a href="#">Link Eight</a></li>
                                <li><a href="#">Link Nine</a></li>
                                <li><a href="#">Link Ten</a></li>
                            </ul>
                        </div>
                        <div className='lg:w-1/3'>
                            <h3 className="font-bold mb-2">Subscribe</h3>
                            <p className="mb-4">Join our newsletter to stay up to date on features and releases.</p>
                            <form className="flex flex-wrap gap-y-4 sm:flex-row space-y-2">
                                <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto" />
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition duration-300 w-full sm:w-auto">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-4 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    <p className="text-gray-200">&copy; 2024 xTerra. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-200">Privacy Policy</a>
                        <a href="#" className="text-gray-200">Terms of Service</a>
                        <a href="#" className="text-gray-200">Cookies Settings</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-200"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24H22.23A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.13 20.55H3.64V9.06h3.49v11.49zm-1.75-13.1a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zm15.37 13.1h-3.48v-5.63c0-1.34-.48-2.25-1.67-2.25-.91 0-1.45.61-1.68 1.2-.09.22-.11.52-.11.83v5.85h-3.48s.05-9.5 0-10.49h3.48v1.48a3.45 3.45 0 013.11-1.71c2.27 0 3.97 1.48 3.97 4.67v6.05z" /></svg></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
