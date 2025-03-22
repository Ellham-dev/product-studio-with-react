import React from 'react'
import HeroBenner from '/HeroBenner.png'
import Button from './Button'

const Hero = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className=" relative">
            <img src={HeroBenner} alt="" className='w-full h-[691px]'/>
            <div className="absolute top-[112px] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <h1 className='text-5xl font-semibold text-white mb-8 w-[510px] text-center'>A Digital Product Studio
                that will Work</h1>
              <div className="border px-[30px] py-[18px] bg-[#24242480] border-[#262626] w-[724px] mb-10">
                <p className='text-lg text-[#98989A] '>For<span className='bg-[#262626] px-2.5 py-2 rounded-lg text-white mx-2'>Startups</span>,  <span className='bg-[#262626] px-2.5 py-2 rounded-lg text-white mx-2'>Enterprise leaders</span>,<span className='bg-[#262626] px-2.5 py-2 rounded-lg text-white mx-2'>Media & Publishers</span>and<span className='bg-[#262626] px-2.5 py-2 rounded-lg text-white mx-2'>Social Good</span></p>
              </div>
              <div className="flex items-center gap-x-3">
                <Button/>
                <Button/>
              </div>

            </div>
            <div className="absolute top-[670px] right-[531px] pb-1.5">
              <h5 className='w-[220px] text-sm font-medium text-[#FDFFFA] bg-[#1A1A1A] border px-6 py-3.5 border-[#262626] rounded-4xl'>Trusted By 250+ Companies</h5>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero