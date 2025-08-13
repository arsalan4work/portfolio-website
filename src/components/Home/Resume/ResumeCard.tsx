import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  role: string,
  Icon: IconType,
  company: string,
  from: string,
  to: string,
  description: string
}

export default function ResumeCard({ Icon, role, company, from, to, description }: Props) {
  return (
    <div className='mb-6'>
      <div className='flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md'>
        
        {/* Icon */}
        <div className='sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center'>
          <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white'/>
        </div>

        {/* Content */}
        <div className='flex-1'>
          <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold'>{role}</h1>
          <p className='text-gray-400 text-sm sm:text-base font-medium mt-2'>{company}</p>
          <h2 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full mt-2 bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold'>
            {from} - {to}
          </h2>
          <p className='text-gray-300 text-sm sm:text-base pt-3'>{description}</p>
        </div>

      </div>
    </div>
  )
}
