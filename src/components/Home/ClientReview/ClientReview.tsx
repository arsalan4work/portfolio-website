"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

// Review data array
const reviews = [
  {
    image: "/images/c1.png",
    name: "Janny Doe",
    role: "CEO, Landscape",
    review:
      "Absolutely fantastic work! Delivered ahead of schedule and exceeded all expectations."
  },
  {
    image: "/images/c2.png",
    name: "John Smith",
    role: "Founder, Creative Studio",
    review:
      "Absolutely fantastic work! Delivered ahead of schedule and exceeded all expectations."
  },
  {
    image: "/images/c3.png",
    name: "Sophia Lee",
    role: "Marketing Manager",
    review:
      "A wonderful experience from start to finish. Highly professional and creative."
  },
  {
    image: "/images/c4.png",
    name: "Michael Brown",
    role: "CTO, Tech Innovators",
    review:
      "Brought our vision to life perfectly."
  },
  {
    image: "/images/c4.png",
    name: "Sarah Johnson",
    role: "Product Designer",
    review:
      "Great communication and top-quality design work. Highly recommended!"
  }
];

// Carousel responsiveness
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

export default function ClientReview() {
  return (
    <div id="testimonials" data-aos="fade-up" data-aos-delay="200" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white">
        Kind Words from Satisfied <br />
        <span className="text-cyan-200"> Clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          responsive={responsive}
          showDots={false}
          autoPlaySpeed={2000}
          autoPlay={true}
          infinite={true}
        >
          {reviews.map((review, index) => (
            <ClientReviewCard
              key={index}
              image={review.image}
              name={review.name}
              role={review.role}
              review={review.review}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
