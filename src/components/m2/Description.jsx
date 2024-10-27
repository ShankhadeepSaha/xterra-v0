import React, { useState } from 'react';
import { Move, Gamepad, Wifi, ChevronDown, ChevronUp, Download, Cpu } from "lucide-react"

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
)

const StairsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M354.38 53.422V168.726H226.378V284.03H98.38V399.334H0V458.578H157.62V343.274H285.622V227.97H413.625V112.666H512V53.422H354.38Z"
    />
  </svg>
);

const features = [
  {
    icon: <Move className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "Omnidirectional Movement"
  },
  {
    icon: <StairsIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "Moves on stairs and slopes"
  },
  {
    icon: <Gamepad className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "Remote controllable using joystick"
  },
  {
    icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "IMU and joint encoders for proprioception"
  },
  {
    icon: <Wifi className="w-6 h-6 sm:w-8 sm:h-8 text-purple-900" />,
    description: "Built-in 2.4 GHz WiFi network"
  }
]

const specifications = {
  "Weight (kg)": 11,
  "Payload (kg)": "~5",
  "L x W x H (cm)": "41.2 x 40 x 41.2",
  "Actuated DoF": 12,
  "Actuator type": "QDD A2",
  "Max speed (m/s)": 1.0,
  "Battery (Wh)": "240 (Li-polymer)",
  "Onboard computer": "RPi 4B, 8GB RAM",
  "Middleware": "ROS",
  "Operating Temp (C)": "-5 to 40"
}

const additionalDetails = [
  {
    title: "Software Specification",
    details: [
      "Onboard computer",
      "ROS-compatible, extensible software stack",
      "Push recovery via active compliance",
      "User-friendly API for motion programming"
    ]
  },
  {
    title: "Performance",
    details: [
      "A payload capacity of 5.2 kg",
      "Endurance of 60 mins",
      "Top speed of 1 m/s",
      "Moves on slopes up to 15°"
    ]
  },
  {
    title: "Applications",
    details: [
      "Robotics based research, development and training",
      "Industrial inspection and data collection for predictive maintenance",
      "Security and surveillance of urban establishments"
    ]
  }
]

export default function Component() {
  const [showMore, setShowMore] = useState(false);

  const handleDownload = () => {
    const pdfUrl = '/pdf/Svan_M2_Brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Svan_M2_Brochure.pdf';
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
  )
}