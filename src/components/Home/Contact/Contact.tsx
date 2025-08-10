import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div data-aos="fade-left" data-aos-delay="100" className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div data-aos="fade-right" data-aos-delay="200">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let&apos;s see how I can help you achieve your
            goals.
          </p>
          {/* Info */}
          <div className="mt-7" data-aos="fade-left" data-aos-delay="300">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="text-cyan-300 w-9 h-9" />
              <p className="text-xl font-bold text-gray-400">+1 312 123456</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="text-cyan-300 w-9 h-9" />
              <p className="text-xl font-bold text-gray-400">Hello@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="text-cyan-300 w-9 h-9" />
              <p className="text-xl font-bold text-gray-400">
                Karachi, Pakistan
              </p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-3">
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer 
                            flex-col hover:bg-blue-800 transition-all duration-300"
            >
              <FaFacebookF className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer 
                            flex-col hover:bg-blue-500 transition-all duration-300"
            >
              <FaLinkedinIn className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer 
                            flex-col hover:bg-cyan-600 transition-all duration-300"
            >
              <FaTwitter className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="md:p-10 p-5 bg-[#131332] rounded-lg">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none
            rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
            rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            placeholder="name@example.com"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
            rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="text"
            placeholder="+1 312 123456"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
            rounded-md w-full placeholder:text-white/70"
          />
          <textarea placeholder="Your Notes" className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
            rounded-md w-full placeholder:text-white/70 h-[10rem]"></textarea>
            <button className="w-full mt-8 bg-blue-950 hover:bg-blue-800 transition-all duration-300 text-white py-3.5 rounded-md cursor-pointer">Send Message</button>
        </div>
      </div>
    </div>
  );
}
