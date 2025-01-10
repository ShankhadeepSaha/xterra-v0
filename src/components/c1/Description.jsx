import React, { useState } from 'react';
import { Move, Cpu, Wifi, ChevronDown, ChevronUp, Download, Settings, Drill } from "lucide-react";

const CircleIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

const features = [
  {
    icon: <Move className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "5-Axis Robotic Arm"
  },
  {
    icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "RPi 4B with ROS Middleware"
  },
  {
    icon: <Wifi className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "WiFi Connectivity"
  },
  {
    icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "Customizable Grippers"
  },
  {
    icon: <Drill className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "Easy Maintenance"
  }
];

const specifications = {
  "Weight": "2.3 kg",
  "Payload": "400g",
  "Maximum Reach": "81 cm",
  "Mounting Position": "Floor/Desired Angle",
  "Operating Temperature": "-5°C to 40°C",
  "Voltage": "24V",
  "Peak Current": "20A",
  "Onboard Computer": "RPi 4B, 8GB RAM",
  "Middleware": "ROS",
  "Actuators": "QDD A2 with 8:1 Reduction"
};

const additionalDetails = [
  {
    title: "Applications",
    details: [
      "Pick and Place Operations",
      "Assembly Line Automation",
      "Educational and Research Purposes",
      "Light Industrial Tasks"
    ]
  }
];

export default function Component() {
  const [showMore, setShowMore] = useState(false);

  const handleDownload = () => {
    const pdfUrl = '/pdf/Cobot_C1_Product_Brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Cobot_C1_Product_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col p-4 sm:p-6 md:p-8 overflow-auto">
      <div className="flex-grow flex flex-col justify-center max-w-4xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Features</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-3 sm:p-4 rounded-lg mb-2 sm:mb-3">
                {feature.icon}
              </div>
              <p className="text-xs sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 mt-6">Specifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {Object.entries(specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b border-gray-200 py-2">
              <span className="text-gray-600 text-sm sm:text-base">{key}</span>
              <span className="font-medium text-sm sm:text-base">{value}</span>
            </div>
          ))}
        </div>

        {showMore && (
          <div className="mt-6">
            {additionalDetails.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">{section.title}</h3>
                <ul className="list-disc list-inside">
                  {section.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm sm:text-base mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 text-center flex justify-center space-x-4">
        <button 
          onClick={() => setShowMore(!showMore)}
          className="bg-purple-900 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors"
        >
          {showMore ? "Show Less" : "Show More"}
          {showMore ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
        <button 
          onClick={handleDownload}
          className="bg-purple-900 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-purple-800 transition-colors"
        >
          Download Brochure
          <Download className="ml-2" />
        </button>
      </div>
    </div>
  );
}