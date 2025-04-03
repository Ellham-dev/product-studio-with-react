import React from 'react'
import ServiceBenner from '/ServiceBenner.png'

const SVhero = () => {
  return (
    <>
    <section className='bg-[#1E1E1E]'>
      <div className="max-w-[1280px] mx-auto">
        <div className="relative">
                  <div className="">
                    <img src={ServiceBenner} alt="" />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/80">
                    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <h2 className='text-[38px] font-semibold text-white mb-2.5'>Our Services</h2>
                      <p className='text-base leading-6 text-[#E6E6E6] w-[780px]'>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
                    </div>
                  </div>
                </div>
      </div>
    </section>
    </>
  )
}

export default SVhero