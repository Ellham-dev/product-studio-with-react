import React from 'react'
import HighlightWork from '/IntarestBenner.png'
import Logo1 from '/HighlightLogo.png'

const HighlightWorks = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="relative">
            <div className="">
              <img src={HighlightWork} alt="" className='h-[483px]' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/80">
              <div className="text-center absolute top-[112px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="mb-10 w-[60px]">
                  <img src={Logo1} alt="" className='w-full' /></div>
                <h2 className='text-[30px] font-semibold text-white mb-2.5.5'>Let us Bring your Ideas to Life in the Digital World.</h2>
                <p className='text-lg leading-[150%] text-[#E6E6E6] w-[896px] mb-10'>No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
                <div className="">
                  <button className='px-[18px] py-3 bg-[#9EFF00] text-sm leading-[150%] font-medium text-[#262626] rounded-lg'>Start Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HighlightWorks