"use client";

import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaGitAlt, FaGithub, FaNode } from 'react-icons/fa'
import { GrStripe } from 'react-icons/gr'
import { IoLockClosedSharp, IoLogoFirebase } from 'react-icons/io5'
import { RiNextjsLine } from 'react-icons/ri'
import {SiClerk, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name:'TypeScript',
        icon: <SiTypescript/>,
        percentage:80,
    },
    {
        name:'Next.js',
        icon: <RiNextjsLine/>,
        percentage:89,
    },
    {
        name:'Tailwind CSS',
        icon: <SiTailwindcss/>,
        percentage:90,
    },
    {
        name:'Node.js',
        icon: <FaNode/>,
        percentage:80,
    },
    {
        name:'Clerk',
        icon: <SiClerk/>,
        percentage:80,
    },
    {
        name:'Auth',
        icon: <IoLockClosedSharp/>,
        percentage:80,
    },
    {
        name:'Postgresql',
        icon: <BiLogoPostgresql/>,
        percentage:80,
    },
    {
        name:'Firebase',
        icon: <IoLogoFirebase/>,
        percentage:80,
    },
    {
        name:'Git',
        icon: <FaGitAlt/>,
        percentage:80,
    },
    {
        name:'Github',
        icon: <FaGithub/>,
        percentage:80,
    },
    {
        name:'Stripe',
        icon: <GrStripe/>,
        percentage:80,
    },
]

export default function Skills() {
  return (
    <div data-aos="fade-left" data-aos-delay="200" className='text-white pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold'>
            My <span className='text-cyan-200'>Skills</span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skill) => {
                return <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                    <div className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col 
                    items-center justify-center shadow-lg transition hover:scale-105'>
                        <div className='text-5xl mb-4 text-gray-300'>
                            {skill.icon}
                        </div>
                        <p className='text-2xl font-semibold'>{skill.percentage}%</p>
                        <p className='text-purple-400 mt-1'>{skill.name}</p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
  )
}
