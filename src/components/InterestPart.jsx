import React from 'react'
import Intarest from '/IntarestBenner.png'

const InterestPart = () => {
  return (
    <>
      <section>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={Intarest} alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className='text-[38px] font-semibold text-white mb-2.5'>Why Choose SquareUp?</h2>
                <p className='text-base leading-6 text-[#E6E6E6] w-[780px]'>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InterestPart