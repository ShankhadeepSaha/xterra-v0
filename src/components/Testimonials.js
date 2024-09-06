import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const testimonials = [
  {
    author: "Karan Bhangay",
    role: "Founder",
    company: "The Indian Luxury Expo",
    content: "IM always has the fundamentals covered. They start painting the canvas only after understanding their customer's audience. Furthermore, the team has built deep capabilities across all dimensions of brand communication, staying up to speed with the evolving landscape Channels.",
    logo: "/images/dummyLogo.png"
  },
  {
    author: "Garvit Singh Naruka",
    role: "Operations Manger",
    company: "Decathlon",
    content: "Integra Magna has shown a great example of delivering results after critically analyzing the need and understanding the scope of work in one go.",
    logo: "/images/dummyLogo.png"
  },
  {
    author: "Anushree",
    role: "Unknown",
    company: "Unknown",
    content: "I'm thrilled to see my brand grow into a professional entity, and the final outcome has exceeded my expectations. IM has done an amazing job.",
    logo: "/images/dummyLogo.png"
  }
];

const TestimonialCard = ({ author, role, company = "abc", content, logo  = "images/dummyLogo.png"}) => (
  <div className="bg-white p-6 rounded-lg shadow-md m-2 w-full md:w-1/2 flex-shrink-0">
    <p className="text-gray-600 mb-4">{content}</p>
    <div className="flex items-center">
      <img src="images/dummyLogo.png" className="w-10 h-10 mr-3" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;

    gsap.to(wrapper, { x: -currentIndex * carousel.offsetWidth / 2, duration: 0.5, ease: "power2.out" });

    Draggable.create(wrapper, {
      type: "x",
      edgeResistance: 0.65,
      bounds: carousel,
      inertia: true,
      onDragEnd: function() {
        const progress = -this.endX / (carousel.offsetWidth / 2);
        const newIndex = Math.round(progress);
        setCurrentIndex(Math.max(0, Math.min(newIndex, testimonials.length - 1)));
      }
    });
  }, [currentIndex]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Testimonial</h2>
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex" ref={wrapperRef}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;