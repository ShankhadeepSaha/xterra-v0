import React from 'react'

const Founder = ({ name, title, image, description }) => (
  <div className="w-full md:w-1/2 p-4">
    <div className="bg-gray-100 rounded-3xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-100 object-cover" />
    </div>
    <h3 className="text-3xl font-bold mt-4 mb-1 font-poppins text-[#050307]">{name}</h3>
    <p className="text-sm text-gray-600 mb-3 font-poppins">{title}</p>
    <p className="text-sm leading-relaxed font-poppins text-[#050307]">{description}</p>
  </div>
);

function Team() {
  const founders = [
    {
      name: "Nimesh Khandelwal",
      title: "Co-Founder & Vice President Software",
      image: "/images/nimesh.jpeg",
      description: "IIT Kanpur Ph.D. Scholar and PMRF Fellow, specializing in Learning-Based Control. Graduated with a B.Tech in 2020 from MNIT Jaipur."
    },
    {
      name: "Avinash Bhashkar",
      title: "Co-Founder & Vice President Hardware",
      image: "/images/avinash.jpeg",
      description: "IIT Kanpur Ph.D. Scholar specializing in Hardware Design & Analysis. Gold Medalist from the M.Tech. Batch of 2021 at CAS Lucknow, with further academic experience at IISc Bangalore."
    },
    {
      name: "Amritanshu Manu",
      title: "Co-Founder & Vice President Research",
      image: "/images/manu.jpeg",
      description: "IIT Kanpur Ph.D. Scholar and PMRF Fellow specializing in Planning & Control. Holder of a B.Tech-M.Tech Dual Degree from the 2021 batch at IIT Kanpur."
    },
    {
      name: "Aditya Rajawat",
      title: "Co-Founder & CEO",
      image: "/images/apsr.jpeg",
      description: "ADAS Engineer at Jaguar Land Rover, India (2020-23), specializing in Planning & Control. Holds a B.Tech-M.Tech Dual Degree from the 2020 batch of IIT Kanpur."
    },
    {
      name: "Mangal Kothari",
      title: "Advisor",
      image: "/images/mangal.jpeg",
      description: "Professor in the Department of Aerospace Engineering at IIT Kanpur. Co-Founder of EndureAir Systems Pvt. Ltd. and Founder of Dronavyuh Systems Pvt. Ltd., specializing in end-to-end product development."
    },
    {
      name: "Shakti S. Gupta",
      title: "Chairman",
      image: "/images/ssg.jpeg",
      description: "Professor in the Department of Mechanical Engineering at IIT Kanpur with three decades of teaching and project experience in DRDO and academia. Expert in end-to-end product development."
    }
  ];

  return (
    <div className="flex flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-white">
      <div className="w-full max-w-6xl text-center px-4">
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight font-poppins text-[#050307] mb-8">
          Meet Our Team:
          <br />
          Innovators Behind the Robots
        </div>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-light font-poppins text-[#050307] mb-16">
        We are a dynamic team of like-minded innovators, brought together by a shared passion for robotics. Our team combines youthful energy with the wisdom and guidance of experienced mentors, creating a powerful force dedicated to building the future of robotics.
        </div>
        <div className="flex flex-wrap -mx-4">
          {founders.map((founder, index) => (
            <Founder key={index} {...founder} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team