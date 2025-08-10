import Image from 'next/image'
import React from 'react'

type Props ={
    image:string,
    title:string,
}

export default function BlogCard({image, title}: Props) {
  return (
    <div className='bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center p-6 hover:bg-gray-700 cursor-pointer'>
        <Image
        src={image}
        alt='Image Not Found'
        width={500}
        height={500}
        className='object-cover'
        />
        <p className='text-gray-500 font-medium mt-2 lg:text-xl'>Aug 2025</p>
        <h1 className='mt-3 text-xl text-white font-bold lg:text-2xl hover:underline 
        hover:text-cyan-300 cursor-pointer transition-all duration-300'>{title}</h1>
        <div className='mt-4 flex gap-2 items-center'>
            <p className='px-3 py-1 bg-blue-950 text-white text-sm md:text-md font-bold rounded-full'>Reactjs</p>
            <p className='px-3 py-1 bg-blue-950 text-white text-sm md:text-md font-bold rounded-full'>Nextjs</p>
            <p className='px-3 py-1 bg-blue-950 text-white text-sm md:text-md font-bold rounded-full'>TypeScript</p>
        </div>
    </div>
  )
}
