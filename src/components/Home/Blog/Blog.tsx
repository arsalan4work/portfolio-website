import React from "react";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div data-aos="fade-right" data-aos-delay="300" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white">
        My Latest <br />
        <span className="text-cyan-200"> Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-10 items-center mt-16">
        <div><BlogCard image="/images/b1.jpg" title="Hello Blog 1"/></div>
        <div><BlogCard image="/images/b2.jpg" title="Hello Blog 2"/></div>
        <div><BlogCard image="/images/b3.jpg" title="Hello Blog 3"/></div>
        <div><BlogCard image="/images/b1.jpg" title="Hello Blog 4"/></div>
        <div><BlogCard image="/images/b2.jpg" title="Hello Blog 5"/></div>
        <div><BlogCard image="/images/b3.jpg" title="Hello Blog 6"/></div>
      </div>
    </div>
  );
}
