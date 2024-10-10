import React from 'react';
import { Flag, DollarSign, Target, Users, Award, Rocket } from 'lucide-react';

export default function ResponsiveTimeline() {
  const timelineItems = [
    {
      year: '2019',
      icon: Flag,
      title: 'Pioneering the Future',
      content: [
        "Started research on Legged Robots in Mobile Robotics Lab, IIT Kanpur - First Line of Code.",
      ]
    },
    {
      year: '2022',
      icon: DollarSign,
      title: 'Building the Dream Team',
      content: [
        "Assembled a core team for Legged Robotics Research.",
      ]
    },
    {
      year: 'January 2023',
      icon: Target,
      title: 'The First Step of Innovation',
      content: [
        "Took first steps of our lab prototype robot dog - SVAN M1.",
      ]
    },
    {
      year: 'March 2023',
      icon: Users,
      title: 'Official Launch of xTerra Robotics',
      content: [
        "Registered xTerra Robotics, incubating it in IIT Kanpur.",
      ]
    },
    {
      year: 'October 2023',
      icon: Award,
      title: 'India\'s First Industrial Quadruped Robot',
      content: [
        "SVAN M2 takes its first step.",
      ]
    },
    {
      year: 'Present',
      icon: Rocket,
      title: 'Ready for the World',
      content: [
        "SVAN M2 ready to face the world.",
      ]
    }
  ];

  return (
    <div className="font-almirego">
      <div className="flex flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-white">
        <div className="w-full max-w-6xl text-center px-4">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight text-[#050307] mb-8">
            Milestones in Motion
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-light text-[#050307] mb-16">
            From Concept to Creation, Explore the Key Moments that Shaped Our Robotic Innovations
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-[#050307] transform translate-y-8 hidden sm:block"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div key={item.year} className="flex flex-col sm:flex-row items-center">
                  <div className={`flex-1 order-2 sm:order-${index % 2 === 0 ? '1' : '3'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-8 sm:ml-0 sm:mr-8' : 'mr-8 sm:mr-0 sm:ml-8'}`}>
                      <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {item.content.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`order-1 sm:order-2 mb-4 sm:mb-0 ${index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
                    <div className="relative w-8 h-8 bg-[#050307] rounded-full flex items-center justify-center">
                      <item.icon className="text-white w-4 h-4" />
                      {/* Short vertical line starting below the icon - visible only on mobile */}
                      <div className="absolute w-0.5 bg-[#050307] h-8 top-full left-1/2 transform -translate-x-1/2 sm:hidden"></div>
                    </div>
                  </div>
                  <div className={`flex-1 order-3 ${index % 2 === 0 ? 'sm:order-3 text-left sm:text-right' : 'sm:order-1 text-left'} mt-2 sm:mt-0`}>
                    <div className="font-bold sm:hidden">{item.year}</div>
                    <div className="hidden sm:block font-bold">{item.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}