import React from 'react'
import AboutSquareUPImg from '/AboutSquareUPImg.png'
import Number1 from '/ProcessNumber.png'
import Number2 from '/Number2.png'
import Number3 from '/Number3.png'
import Number4 from '/Number4.png'
import Number5 from '/Number5.png'
import Number6 from '/Number6.png'

const AboutSquareUp = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between px-[100px] py-[80px] border border-[#333333]">
            <div className="w-[490px]">
              <h2 className='text-[38px] font-semibold text-white mb-4'>About SquareUp</h2>
              <p className='text-base leading-[150%] text-[#E6E6E6]'>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
            </div>
            <div className="w-[490px]">
              <img src={AboutSquareUPImg} alt="" />
            </div>
          </div>

          <div className="border border-[#333333] px-[50px] py-20 text-white">
            <h3 className='text-5xl font-semibold'>Our Story</h3>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[640px] px-10 py-20 border border-[#333333]">
              <div className="flex items-center gap-x-3.5 mb-10">
                <img src={Number1} alt="" />
                <h6 className='text-[26px] font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Design</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.</p>
            </div>
            <div className="w-[640px] px-10 py-20 border border-[#333333]">
              <div className="flex items-center gap-x-3.5 mb-10">
                <img src={Number2} alt="" />
                <h6 className='text-[26px] font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Engineering</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.</p>
            </div>
            <div className="w-[640px] px-10 py-20 border border-[#333333]">
              <div className="flex items-center gap-x-3.5 mb-10">
                <img src={Number3} alt="" />
                <h6 className='text-[26px] font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Project Management</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.</p>
            </div>
            <div className="w-[640px] px-10 py-20 border border-[#333333]">
              <div className="flex items-center gap-x-3.5 mb-10">
                <img src={Number4} alt="" />
                <h6 className='text-[26px] font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Collaboration</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.</p>
            </div>
            <div className="w-[640px] px-10 py-20 border border-[#333333]">
              <div className="flex items-center gap-x-3.5 mb-10">
                <img src={Number5} alt="" />
                <h6 className='text-[26px] font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Client-Centric Approach</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.</p>
            </div>
            <div className="w-[640px] px-10 py-20 border border-[#333333]">
              <div className="flex items-center gap-x-3.5 mb-10">
                <img src={Number6} alt="" />
                <h6 className='text-[26px] font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Driving Success</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSquareUp