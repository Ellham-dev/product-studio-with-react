import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[846px] mx-auto">
          <div className="flex items-center justify-between mb-[30px]">
            <div className="border px-[30px] py-[20px] border-[#262626] w-[348px] bg-[#242424] rounded-lg">
              <h6 className='text-lg leading-[150%] font-medium text-white mb-4'>Full Name</h6>
              <input type="text" placeholder='Type here' className='text-base leading-[150%] border-b outline-none pb-1.5 text-[#656567] border-[#333333] w-[288px]' />
            </div>
            <div className="border px-[30px] py-[20px] border-[#262626] w-[348px] bg-[#242424] rounded-lg">
              <h6 className='text-lg leading-[150%] font-medium text-white mb-4'>Full Name</h6>
              <input type="text" placeholder='Type here' className='text-base leading-[150%] border-b outline-none pb-1.5 text-[#656567] border-[#333333] w-[288px]' />
            </div>
          </div>
          <div className="">
            <h6></h6>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact