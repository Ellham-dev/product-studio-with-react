import React from 'react'
import SquareUpBenner from '/SquareUpBenner.png'
import SquareUpIcon from '/SquareUpIcon.png'

const SquareUp = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={SquareUpBenner} alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className='text-[38px] font-semibold text-white'>Why Choose SquareUp?</h2>
                <p className='text-base leading-6 text-[#E6E6E6]'>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
              </div>
            </div>
          </div>
          {/* SquareUpIcon_part */}
          <div className="flex items-center flex-wrap justify-between">
            <div className="w-[639.5px] p-[60px] border border-[#262626]">
              <div className="flex items-center gap-x-3.5 mb-[30px]">
                <img src={SquareUpIcon} alt="" />
                <h6 className='text-xl leading-[150%] font-medium text-white'>Expertise</h6>
              </div>
              <p className='text-base leading-[150%] text-[#E6E6E6]'>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
            </div>
            <div className="w-[639.5px] p-[60px] border border-[#262626]">
              <div className="flex items-center gap-x-3.5 mb-[30px]">
                <img src={SquareUpIcon} alt="" />
                <h6 className='text-xl leading-[150%] font-medium text-white'>Expertise</h6>
              </div>
              <p className='text-base leading-[150%] text-[#E6E6E6]'>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
            </div>
            <div className="w-[639.5px] p-[60px] border border-[#262626]">
              <div className="flex items-center gap-x-3.5 mb-[30px]">
                <img src={SquareUpIcon} alt="" />
                <h6 className='text-xl leading-[150%] font-medium text-white'>Expertise</h6>
              </div>
              <p className='text-base leading-[150%] text-[#E6E6E6]'>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
            </div>
            <div className="w-[639.5px] p-[60px] border border-[#262626]">
              <div className="flex items-center gap-x-3.5 mb-[30px]">
                <img src={SquareUpIcon} alt="" />
                <h6 className='text-xl leading-[150%] font-medium text-white'>Expertise</h6>
              </div>
              <p className='text-base leading-[150%] text-[#E6E6E6]'>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SquareUp