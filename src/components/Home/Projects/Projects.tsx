import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Project data array
const projects = [
  {
    img: '/images/p1.png',
    title: 'Modern Finance Dashboard UI',
    category: 'SaaS App',
    link: 'https://ai-finan-smart.vercel.app/'
  },
  {
    img: '/images/p2.png',
    title: 'Pizza Bites E-commerce Website',
    category: 'E-Commerce',
    link: 'https://pizza-bites-tau.vercel.app/'
  },
  {
    img: '/images/p3.png',
    title: '3D Portfolio Website',
    category: 'Personal Website',
    link: 'https://arsalan-portfolio-website-swart.vercel.app/'
  },
  {
    img: '/images/p4.png',
    title: 'Travel Website for Booking and Planning',
    category: 'Travel Website',
    link: 'https://arsalan-travel-website-app.vercel.app/'
  },
  {
    img: '/images/p5.png',
    title: 'Personal Blog Website',
    category: 'Blog Website',
    link: 'https://arsalan-blog-website.vercel.app/'
  },
  {
    img: '/images/p6.png',
    title: 'Furniture E-commerce Website',
    category: 'Ecommerce Website',
    link: 'https://arsalan-ecommerce-website-hackaton.vercel.app/'
  },
]

export default function Projects() {
  return (
    <div id='works' data-aos="fade-up" data-aos-delay="50" className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
        A Small Selection of Recent <br />
        <span className='text-cyan-200'>Projects</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100}>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={650}
                className='rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition'
              />
            </Link>
            <h1 className='text-xl md:text-2xl font-bold text-white mt-5'>
              {project.title}
            </h1>
            <p className='text-gray-300 mt-2'>{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
