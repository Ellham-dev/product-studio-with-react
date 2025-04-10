import React from 'react'
import HighlightLogo from '/HighlightLogo.png'

const HighlightAbout = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="p-[60px] border border-[#333333] ">
            <div className="flex items-center gap-x-[30px] mb-10">
              <img src={HighlightLogo} alt="" className='w-[100px]'/>
              <div className="">
                <h5 className='text-6 font-medium text-[#98989A] mb-3.5'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h5>
                <p className='text-base leading-[150%] text-[#98989A] w-[1029.53px]'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between border border-[#333333] px-[30px] py-5 bg-[#24242480] rounded-lg">
              <p className='text-lg text-[#98989A]'>Welcome to SquareUp</p>
              <span className='text-base leading-[150%] text-white bg-[#262626] px-3.5 py-2.5 w-[743px]'>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span>
              <button className='px-[20px] py-3.5 bg-[#9EFF00] text-sm leading-[150%] font-medium text-[#262626] rounded-lg'>Start Project</button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HighlightAbout