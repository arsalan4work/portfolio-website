'use client';

import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import TypewriterComponent from 'typewriter-effect'
import ParticlesHero from './ParticleHero';
import Link from 'next/link';

export default function Hero() {
  return (
    <div id='home'  className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <ParticlesHero/>
        <div className='relative z-10 flex flex-col items-center'>
            <Image
            src={'/images/s1-profile.png'}
            alt='Image Not Found!'
            width={170}
            height={170}
            className='rounded-full border-8 border-[#0c0c48aa]'
            data-aos="fade-up" data-aos-delay="50"
            />
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide'>Creating SaaS MVP&apos;s&#44; <br /> Brands&#44;
                <span className='text-cyan-200'> and Experiences.</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="300" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                Hi! I&apos;m Arsalan - A Passionate
                <span className='text-cyan-200 font-bold'>
                    <TypewriterComponent options={{
                        strings:[
                            ' Full Stack Developer',
                            ' Software Engineer',
                            ' Web Developer',
                            ' Tech Enthusiast'
                        ],
                        autoStart: true,
                        loop: true,
                        delay:75,
                        deleteSpeed:50,
                        wrapperClassName:'pl-2'
                    }} />
                </span>
            </h2>
            <Link href='/' data-aos="fade-up" data-aos-delay="400" className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer
            rounded-full text-lg font-medium'>
                <span>See My Work</span>
                <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
            </Link>
        </div>
    </div>
  )
}
