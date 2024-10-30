"use client"
import React, { useEffect, useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Lenis from "lenis";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ContactInfoCard = ({ icon: Icon, title, details }) => {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl border border-gray-100">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-gray-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      {Array.isArray(details) ? (
        details.map((detail, index) => (
          <p key={index} className="text-gray-600 text-sm leading-relaxed">
            {detail}
          </p>
        ))
      ) : (
        <p className="text-gray-600 text-sm leading-relaxed">{details}</p>
      )}
    </div>
  );
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });


  const contactInfo = [
    {
      icon: MapPin,
      title: "Find us Here",
      details: ["G-508/11, Avas Vikas No. 1,", "Kalyanpur, Kanpur-208017"]
    },
    {
      icon: Phone,
      title: "Get In touch",
      details: ["+91 94540 07163", "info@xterrarobotics.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon- Fri: 9am- 8pm", "Saturday: 10am-4pm"]
    }
  ];

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        // Reset form
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-48 flex flex-col w-full">
      <Navbar />

      {/* Title Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 font-almirego">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight max-w-2xl">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <ContactInfoCard key={index} {...info} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-almirego">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600">
            We are here for you. How can we help you?
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900"
                  placeholder="Enter your email"
                />
              </div>

              {/* Company Field (Optional) */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            {/* Status Message */}
            {status.message && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 bg-[#101820] text-white font-medium rounded-lg 
                  hover:bg-[#2c3e50] transition-colors duration-300 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center gap-2`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-almirego font-normal text-[#101820] mb-6">
            Our Location
          </h2>
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14284.828689084382!2d80.26806799999999!3d26.487898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37f2bf0633d1%3A0x9624971835a3adef!2sAwas%20Vikas%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1692627458965!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}