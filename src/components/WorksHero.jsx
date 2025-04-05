import React from 'react'
import ServiceBenner from '/ServiceBenner.png'

const WorksHero = () => {
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
                <h2 className='text-[38px] font-semibold text-white mb-2.5'>Our Works</h2>
                <p className='text-lg leading-[150%] text-[#E6E6E6] w-[780px]'>Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorksHero