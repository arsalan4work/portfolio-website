import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <div data-aos="fade-right" data-aos-delay="300" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl lg:text-5xl text-white font-bold'>Collaborate with Non-Tech <br /> Founders to create <br /> impactful results</h1>
        <div data-aos="fade-right" data-aos-delay="500" className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 items-center'>
            <div>
                <ServiceCard icon="/images/s1.png" name="UI & UX" description="Design interfaces that are intuitive, efficient, and enjoyable to use."/> 
            </div>
            <div>
                <ServiceCard icon="/images/s2.png" name="Web & SaaS" description="Design interfaces that are intuitive, efficient, and enjoyable to use."/> 
            </div>
            <div>
                <ServiceCard icon="/images/s3.png" name="Custom Website" description="Design interfaces that are intuitive, efficient, and enjoyable to use."/> 
            </div>
            <div>
                <ServiceCard icon="/images/s4.png" name="Development" description="Design interfaces that are intuitive, efficient, and enjoyable to use."/> 
            </div>
        </div>
    </div>
  )
}
