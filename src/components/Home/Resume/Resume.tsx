import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

export default function Resume() {
  return (
    <div data-aos="zoom-in" data-aos-delay="50" className='pt-20 pb-16'>
        <div className='w-[90$] sm:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ' data-aos="zoom-in" data-aos-delay="300">
            {/* Work */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>My Work <span className='text-cyan-200'>Experience</span></h1>
                <div className='mt-10'>
                    <ResumeCard Icon={FaCodepen} role="Full-Stack Developer"/>
                    <ResumeCard Icon={FaReact} role="Frontend Developer"/>
                    <ResumeCard Icon={BsDatabase} role="Backend Developer"/>
                </div>
                
            </div>
            {/* Education */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>My <span className='text-cyan-200'>Education</span></h1>
                <div className='mt-10'>
                    <ResumeCard Icon={BiBadge} role="Self Learning Certificates" date="Jan 2023 - Dec 2024"/>
                    <ResumeCard Icon={FaReact} role="Governor Sindh Initiatve AI" date="Jan 2023 - Dec 2024"/>
                    <ResumeCard Icon={BsDatabase} role="Intermediate" date="Jan 2023 - Dec 2024"/>
                </div>
            </div>
        </div>
    </div>
  )
}
