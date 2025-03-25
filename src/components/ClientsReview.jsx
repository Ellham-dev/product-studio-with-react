import React from 'react'
import ClintPartBenner from '/AboutBenner.png'

const ClientsReview = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={ClintPartBenner} alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className='text-[38px] font-semibold text-white'>What our Clients say About us</h2>
                <p className='text-base leading-6 text-[#E6E6E6]'>At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <h6 className=''>SquareUp has been Instrumental in Transforming our Online Presence.</h6>
              <p className=''>Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientsReview