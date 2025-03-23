import React from 'react'
import SquareUpBenner from '/SquareUpBenner.png'

const SquareUp = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="relative">
          <div className="max-w-[1280px] mx-auto">
            <img src={SquareUpBenner} alt="" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/80">
            <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className='text-[38px] font-semibold text-white'>Why Choose SquareUp?</h2>
              <p className='text-base leading-6 text-[#E6E6E6]'>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SquareUp