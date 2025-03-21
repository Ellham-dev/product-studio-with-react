import React from 'react'
import HeroBenner from '/HeroBenner.png'

const Hero = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="w-full">
            <img src={HeroBenner} alt="" />
            <div className="">
              <h1 className='text-5xl font-semibold text-white mb-8'>A Digital Product Studio
                that will Work</h1>
              <p className='text-lg text-[#98989A] '>For  <span className='bg-[#262626] px-2.5 py-2 rounded-lg text-white'>Startups</span>  ,  <span>Enterprise leaders</span>  ,  <span>Media & Publishers</span>and<span>Social Good</span></p>

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero