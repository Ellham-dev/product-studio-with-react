import React from 'react'
import AboutBenner from '/ServiceBenner.png'

const AboutHero = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={AboutBenner} alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className='text-[38px] font-semibold text-white mb-2.5'>About Us</h2>
                <p className='text-lg leading-[150%] text-[#E6E6E6] w-[780px]'>Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHero