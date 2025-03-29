import React from 'react'
import QuestionBenner from '/QuestionBenner.png'
const Question = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={QuestionBenner} alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className='text-[38px] font-semibold text-white mb-2.5'>Frequently Asked Questions</h2>
                <p className='text-base leading-6 text-[#E6E6E6] w-[780px]'>Still you have any questions? Contact our Team via hello@squareup.com</p>
              </div>
            </div>
          </div>

        </div>
        <div className="">
        </div>
      </section>
    </>
  )
}

export default Question