import React from 'react'
import HighlightProcessBG from '/IntarestBenner.png'
import Logo1 from '/HighlightLogo.png'
import Contact from './Contact'

const HighlightProcess = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={HighlightProcessBG} alt="" className='h-[483px]' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-[112px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="mb-10 w-[60px]">
                  <img src={Logo1} alt="" className='w-full' /></div>
                <h2 className='text-[30px] font-semibold text-white mb-2.5.5'>Thank you for your Interest in SquareUp.</h2>
                <p className='text-base leading-6 text-[#E6E6E6] w-[780px] mb-10'>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
                <div className="">
                  <button className='px-[18px] py-3 bg-[#9EFF00] text-sm leading-[150%] font-medium text-[#262626] rounded-lg'>Start Project</button>
                </div>
              </div>
            </div>
          </div>
          <Contact/>
        </div>
      </section>
    </>
  )
}

export default HighlightProcess