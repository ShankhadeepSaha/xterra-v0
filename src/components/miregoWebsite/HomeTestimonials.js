import React from 'react';

const TestimonialCard = ({ name, position, company, logo, quote }) => (
    <div className='w-full sm:w-1/2 lg:w-1/3 px-4 mb-8'>
      <div className="rounded-lg border border-black p-4 sm:p-6 flex flex-col h-full">
        <div className="flex-grow">
          <p className="mb-4 text-lg sm:text-xl lg:text-2xl font-almirego">{quote}</p>
        </div>
        <div className="mt-auto pt-8 sm:pt-12 lg:pt-16 flex items-center">
          {logo && (
            <img src={logo} alt={`${company} logo`} className="w-8 h-8 sm:w-10 sm:h-10 mr-3 object-contain" />
          )}
          <div>
            <p className="font-almirego font-semibold text-sm sm:text-base">{name}</p>
            <p className="font-almirego text-xs sm:text-sm">{position}</p>
            <p className="font-almirego text-xs sm:text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
);

const HomeTestimonials = () => {
  const testimonials = [
    {
      name: "Karan Bhangay",
      position: "Founder",
      company: "The Indian Luxury Expo",
      logo: "/images/dummyLogo.png",
      quote: "IM always has the fundamentals covered. They start painting the canvas only after understanding their customer's audience."
    },
    {
      name: "Garvit Singh Naruka",
      position: "Operations Manger",
      company: "DECATHLON",
      logo: "/images/dummyLogo.png",
      quote: "Integra Magna has shown a great example of delivering results after critically analyzing the need and understanding the scope of work in one go."
    },
    {
      name: "Anushree",
      position: "",
      company: "",
      logo: "/images/dummyLogo.png",
      quote: "branding li my brand. profession and the fir expectatic amazing jo"
    }
  ];

  return (
    <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className='text-2xl sm:text-3xl lg:text-4xl mb-16 sm:mb-24 lg:mb-32 font-almirego'>Testimonials</div>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;