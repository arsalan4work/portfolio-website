"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SiCalendly } from "react-icons/si";

// Zod schema for validation
const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("Message sent successfully!");
      reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contact" data-aos="fade-left" data-aos-delay="100" className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div data-aos="fade-right" data-aos-delay="200">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let&apos;s see how I can help you achieve your
            goals.
          </p>

          <div className="mt-7" data-aos="fade-left" data-aos-delay="300">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="text-cyan-300 w-9 h-9" />
              <p className="text-xl font-bold text-gray-400">+92 331-2499-496</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="text-cyan-300 w-9 h-9" />
              <p className="text-xl font-bold text-gray-400">arsalanwork4@gmail.com</p>
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
            <Link href="https://www.facebook.com/Arsalanservices"> <SocialIcon icon={<FaFacebookF />} color="hover:bg-blue-800" /> </Link>
            <Link href="https://www.linkedin.com/in/muhammadarsalan-dev/"> <SocialIcon icon={<FaLinkedinIn />} color="hover:bg-blue-500" /> </Link>
            <Link href="https://x.com/m_arsalan_dev"> <SocialIcon icon={<FaTwitter />} color="hover:bg-cyan-600" /> </Link>
            <Link href="https://github.com/arsalan4work"> <SocialIcon icon={<FaGithub />} color="hover:bg-blue-800" /> </Link>
            <Link href="https://calendly.com/m-arsalan-dev/60min"> <SocialIcon icon={<SiCalendly />} color="hover:bg-blue-500" /> </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:p-10 p-5 bg-[#131332] rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              type="text"
              placeholder="First Name"
              error={errors.firstName?.message}
              {...register("firstName")}
            />
            <InputField
              type="text"
              placeholder="Last Name"
              error={errors.lastName?.message}
              {...register("lastName")}
            />
            <InputField
              type="email"
              placeholder="name@example.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <InputField
              type="text"
              placeholder="+1 312 123456"
              error={errors.phone?.message}
              {...register("phone")}
            />
            <TextareaField
              placeholder="Your Notes"
              error={errors.message?.message}
              {...register("message")}
            />

            <button
              disabled={isSubmitting}
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 
                         transition-all duration-300 text-white py-3.5 rounded-md cursor-pointer font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Reusable Input
const InputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { error?: string }
>(({ error, ...props }, ref) => (
  <div className="mt-6 first:mt-0">
    <input
      ref={ref}
      {...props}
      className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70
                 focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
    />
    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
  </div>
));
InputField.displayName = "InputField";

// Reusable Textarea
const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }
>(({ error, ...props }, ref) => (
  <div className="mt-6">
    <textarea
      ref={ref}
      {...props}
      className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70
                 focus:ring-2 focus:ring-cyan-400 transition-all duration-200 h-[10rem]"
    ></textarea>
    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
  </div>
));
TextareaField.displayName = "TextareaField";

// Social Icon Component
const SocialIcon = ({ icon, color }: { icon: React.ReactElement; color: string }) => (
  <div
    className={`w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer
                ${color} transition-all duration-300 shadow-md`}
  >
    {React.isValidElement(icon) &&
  React.cloneElement(icon as React.ReactElement<any>, {
    className: "text-white w-6 h-6"
  })}
  </div>
);
