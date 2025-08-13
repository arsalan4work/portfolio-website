import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

// Work Experience Data
const workData = [
  {
    Icon: FaCodepen,
    role: "Full-Stack Developer",
    company: "Freelance",
    from: "Oct 2022",
    to: "Present",
    description: "Developing and maintaining full-stack SaaS MVP's applications using modern frameworks, ensuring scalability and performance."
  },
  {
    Icon: FaReact,
    role: "Frontend Developer",
    company: "Imerge Solutions",
    from: "Jan 2025",
    to: "Mar 2025",
    description: "Worked remotely for 3 months creating pixel-perfect UIs for SaaS applications, improving load times and accessibility."
  },
  {
    Icon: BsDatabase,
    role: "Backend Developer",
    company: "Freelance",
    from: "Sep 2023",
    to: "Feb 2024",
    description: "Implemented REST APIs, database schemas, and authentication flows using Next.js and PostgreSQL."
  }, 
]

// Education Data
const educationData = [
  {
    Icon: BiBadge,
    role: "Self Learning Certificates",
    company: "Multiple Platforms (Linkedin, Google, Simplilearn)",
    from: "Feb 2025",
    to: "Present",
    description: "Completed certifications in full-stack web development, and AI"
  },
  {
    Icon: FaReact,
    role: "Certified Agentic AI Engineer",
    company: "Government of Sindh Inititative",
    from: "Feb 2024",
    to: "Present",
    description: "Studing artificial intelligence, agentic ai, and prompt engineering as part of the government-led program."
  },
  {
    Icon: BsDatabase,
    role: "Intermediate",
    company: "Board of Intermediate Education",
    from: "Jan 2021",
    to: "Dec 2022",
    description: "Completed college studies in Computer Science."
  }
]

export default function Resume() {
  return (
    <div id='resume' data-aos="zoom-in" data-aos-delay="50" className='pt-20 pb-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10' data-aos="zoom-in" data-aos-delay="300">
        
        {/* Work */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My Work <span className='text-cyan-200'>Experience</span>
          </h1>
          <div className='mt-10'>
            {workData.map((item, index) => (
              <ResumeCard
                key={index}
                Icon={item.Icon}
                role={item.role}
                company={item.company}
                from={item.from}
                to={item.to}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My <span className='text-cyan-200'>Education</span>
          </h1>
          <div className='mt-10'>
            {educationData.map((item, index) => (
              <ResumeCard
                key={index}
                Icon={item.Icon}
                role={item.role}
                company={item.company}
                from={item.from}
                to={item.to}
                description={item.description}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
