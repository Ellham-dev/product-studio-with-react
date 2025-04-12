import React from 'react'
import CarrersBenner from '/ServiceBenner.png'

const CareersHero = () => {
  return (
    <>
    <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={CarrersBenner} alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className='text-[48px] font-semibold text-white mb-2.5'>Join Our Team at SquareUp</h2>
                <p className='text-lg leading-6 text-[#E6E6E6]'>Unlock your potential and join our team of innovators and problem solvers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareersHero