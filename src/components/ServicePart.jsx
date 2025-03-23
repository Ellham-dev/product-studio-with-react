import React from 'react'
import ServiceBenner from '/ServiceBenner.png'
import Serviceicon from '/ServiceIcon.png'

const ServicePart = () => {
  return (
    <section className='bg-[#1E1E1E]'>
      <div className="max-w-[1280px] mx-auto">
        <div className="relative">
          <div className="">
            <img src={ServiceBenner} alt="" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/80">
            <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className='text-[38px] font-semibold text-white'>Our Services</h2>
              <p className='text-base leading-6 text-[#E6E6E6]'>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
        <div className="border border-[#262626] p-10 w-[426.67px]">
          <img src={Serviceicon} alt="" className='mb-[30px]'/>
          <h3 className='text-2xl leading-[150%] font-semibold text-white mb-3.5'>Design</h3>
          <p className='text-base leading-[150%] text-[#E6E6E6] mb-[84px]'>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
          <button className='border w-full py-[14px]  border-[#262626] text-white'>Learn More</button>
        </div>
        <div className="border border-[#262626] p-10 w-[426.67px]">
          <img src={Serviceicon} alt="" className='mb-[30px]'/>
          <h3 className='text-2xl leading-[150%] font-semibold text-white mb-3.5'>Design</h3>
          <p className='text-base leading-[150%] text-[#E6E6E6] mb-[84px]'>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
          <button className='border w-full py-[14px]  border-[#262626] text-white'>Learn More</button>
        </div>
        <div className="border border-[#262626] p-10 w-[426.67px]">
          <img src={Serviceicon} alt="" className='mb-[30px]'/>
          <h3 className='text-2xl leading-[150%] font-semibold text-white mb-3.5'>Design</h3>
          <p className='text-base leading-[150%] text-[#E6E6E6] mb-[84px]'>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
          <button className='border w-full py-[14px]  border-[#262626] text-white'>Learn More</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePart