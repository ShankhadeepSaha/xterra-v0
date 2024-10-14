import React, { useState } from "react";
import { X } from "lucide-react";

function VideoHero() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[680px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/m2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

function ImageCard({ 
  bgImage, 
  title, 
  subtitle, 
  description, 
  learnMoreLink, 
  buyLink,
  titleStyle = {},
  subtitleStyle = {},
  descriptionStyle = {},
  learnMoreStyle = {},
  buyStyle = {},
  details
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`${bgImage} h-[400px] sm:h-[500px] md:h-[680px] w-full bg-cover bg-center`}>
      <div className='flex flex-col items-center h-full p-4 pt-16 sm:pt-24 md:pt-32 text-center'>
        <div className={`text-3xl sm:text-4xl md:text-5xl font-semibold font-sans mb-2`} style={titleStyle}>
          {title}
        </div>
        <div className={`text-sm sm:text-base md:text-lg font-light mb-1`} style={subtitleStyle}>
          {subtitle}
        </div>
        <div className={`text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8`} style={descriptionStyle}>
          {description}
        </div>
        <div className='flex gap-4 mt-auto mb-8'>
          <button
            onClick={() => setIsModalOpen(true)}
            className='px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors'
            style={learnMoreStyle}
          >
            Learn more
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-white text-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-purple-900">{title}</h2>
          <p className="text-lg mb-6">{details.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(details.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-gray-200 py-2">
                <span className="text-gray-600">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}


function ActuatorsProducts() {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="sm:px-4">
        <VideoHero />
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 sm:px-3 md:px-4 w-full">
        <ImageCard
          bgImage="bg-[url('/actuator/a1.png')]"
          title="QDD A1"
          subtitle="SERIES 1"
          description="Our Quasi Direct Drive actuator."
          learnMoreLink="/svan-m1"
          buyLink="/buy-svan-m1"
          titleStyle={{ color: "#4E148C" }}
          subtitleStyle={{ color: "black" }}
          descriptionStyle={{ color: "black" }}
          learnMoreStyle={{ backgroundColor: "#4E148C", color: "white" }}
          buyStyle={{
            backgroundColor: "white",
            color: "#4E148C",
            border: "2px solid #4E148C",
          }}
          details={{
            description:
              "Our Quasi Direct Drive actuator, QDD A1, comes with an FOC motor driver with torque control and high responsiveness. Our precision engineering ensures efficient power utilization for the latest robotic applications.",
            specs: {
              "Weight (g)": "350",
              "Peak torque (Nm)": "3.78",
              "Voltage input (V)": "10-24",
              "Peak power (W)": "450",
              "Control mode": "FOC",
              "Control rate (kHz)": "15-30",
              "Outer diameter (mm)": "64",
              "Thickness (mm)": "66",
              "Power connector": "2x XT-30",
              "Data connector": "2x JST PH-3",
            },
          }}
        />
        <ImageCard
          bgImage="bg-[url('/actuator/a2.png')]"
          title="QDD A2"
          subtitle="SERIES 2"
          description="Our next-generation of QDD actuators."
          learnMoreLink="/svan-m2"
          buyLink="/buy-svan-m2"
          titleStyle={{ color: "#4E148C" }}
          subtitleStyle={{ color: "white" }}
          descriptionStyle={{ color: "white" }}
          learnMoreStyle={{ backgroundColor: "#4E148C", color: "white" }}
          buyStyle={{
            backgroundColor: "white",
            color: "#4E148C",
            border: "2px solid #4E148C",
          }}
          details={{
            description:
              "Our next-generation of QDD actuators, QDD A2, are optimized for maximum torque in its weight category, achieving high-efficiency and boast of more than 3x output torque when compared against QDD A1. This actuator is ideal for small size quadruped robots, and small-size industrial robots.",
            specs: {
              "Weight (g)": "550",
              "Peak torque (Nm)": "12",
              "Voltage input (V)": "10-24",
              "Peak power (W)": "500",
              "Control mode": "FOC",
              "Control rate (kHz)": "15-30",
              "Outer diameter (mm)": "77",
              "Thickness (mm)": "50",
              "Power connector": "2x XT-30",
              "Data connector": "2x JST PH-3",
            },
          }}
        />
        <ImageCard
          bgImage="bg-[url('/actuator/a3.png')]"
          title="QDD A3"
          subtitle="SERIES 3"
          description="Optimized for maximum torque."
          learnMoreLink="/svan-m3"
          titleStyle={{ color: "#4E148C" }}
          subtitleStyle={{ color: "black" }}
          descriptionStyle={{ color: "black" }}
          learnMoreStyle={{ backgroundColor: "#4E148C", color: "white" }}
          details={{
            description:
              "QDD A3 comes with an FOC motor driver that boasts exceptional torque control and responsiveness. QDD A3 is optimized for maximum torque in its weight category, achieving high-efficiency and boasting of more than 10x output torque when compared against QDD A1. Our precision engineering ensures efficient power utilization for the latest robotic applications.",
            specs: {
              "Weight (g)": "960",
              "Peak torque (Nm)": "40.57",
              "Voltage input (V)": "10-24",
              "Peak power (W)": "1250",
              "Control mode": "FOC",
              "Control rate (kHz)": "15-30",
              "Outer diameter (mm)": "110",
              "Thickness (mm)": "58",
              "Power connector": "2x XT-30",
              "Data connector": "2x JST PH-3",
            },
          }}
        />
      </div>
    </div>
  );
}

export default ActuatorsProducts;
