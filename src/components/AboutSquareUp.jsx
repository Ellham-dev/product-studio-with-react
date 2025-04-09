import React from 'react'
import AboutSquareUPImg from '/AboutSquareUPImg.png'

const AboutSquareUp = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between px-[150px] py-[100px]">
            <div className="w-[598px]">
              <h2 className='text-5xl font-semibold text-white mb-5'>About SquareUp</h2>
              <p className='text-xl leading-[150%] text-[#E6E6E6]'>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
            </div>
            <div className="w-[598px]">
              <img src={AboutSquareUPImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSquareUp