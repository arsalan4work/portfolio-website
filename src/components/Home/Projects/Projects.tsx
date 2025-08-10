import Image from 'next/image'
import React from 'react'

export default function Projects() {
  return (
    <div data-aos="fade-up" data-aos-delay="50" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white'>
            A Small Selection of Recent <br />
            <span className='text-cyan-200'>Projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* 1st Project */}
            <div data-aos="fade-up" data-aos-delay="200">
                <Image
                src={'/images/p1.jpg'}
                alt='Image Not Found'
                width={800}
                height={650}
                className='rounded-lg shadow-lg'
                />
                <h1 className='text-xl md:text-2xl font-bold text-white mt-5'>Modern Finance Dashboard UI</h1>
                <p className='text-gray-300 mt-2'>SaaS App</p>
            </div>
            {/* 2nd Project */}
            <div data-aos="fade-up" data-aos-delay="300">
                <Image
                src={'/images/p2.jpg'}
                alt='Image Not Found'
                width={800}
                height={650}
                className='rounded-lg shadow-lg'
                />
                <h1 className='text-xl md:text-2xl font-bold text-white mt-5'>Modern Finance Dashboard UI</h1>
                <p className='text-gray-300 mt-2'>SaaS App</p>
            </div>
            {/* 3rd Project */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Image
                src={'/images/p3.jpg'}
                alt='Image Not Found'
                width={800}
                height={650}
                className='rounded-lg shadow-lg'
                />
                <h1 className='text-xl md:text-2xl font-bold text-white mt-5'>Modern Finance Dashboard UI</h1>
                <p className='text-gray-300 mt-2'>SaaS App</p>
            </div>
            {/* 4th Project */}
            <div data-aos="fade-up" data-aos-delay="500">
                <Image
                src={'/images/p4.jpg'}
                alt='Image Not Found'
                width={800}
                height={650}
                className='rounded-lg shadow-lg'
                />
                <h1 className='text-xl md:text-2xl font-bold text-white mt-5'>Modern Finance Dashboard UI</h1>
                <p className='text-gray-300 mt-2'>SaaS App</p>
            </div>
        </div>
    </div>
  )
}
