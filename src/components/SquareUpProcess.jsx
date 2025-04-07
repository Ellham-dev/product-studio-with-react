import React from 'react'
import Number1 from '/ProcessNumber.png'
import Number2 from '/Number2.png'
import Number3 from '/Number3.png'
import Number4 from '/Number4.png'
import Number5 from '/Number5.png'
import Number6 from '/Number6.png'
import Number7 from '/Number7.png'
import Number8 from '/Number8.png'

const SquareUpProcess = () => {
  return (
    <>
    <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="border-x border-[#333333] px-10 pt-20 pb-10">
            <h2 className='text-[38px] font-semibold mb-2.5 text-white'>At SquareUp</h2>
            <p className='text-base leading-[150%] text-[#E6E6E6] mb-10 w-[950px]'>We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
            <span className='text-lg bg-[#262626] p-2.5 w-[341px] rounded-lg text-white'>Here's an overview of our typical process:</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number1} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Discovery</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.</p>
            </div>
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number2} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Planning and Strategy</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.</p>
            </div>
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number3} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Design</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.</p>
            </div>
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number4} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Development</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.</p>
            </div>
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number5} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Testing and Quality Assurance</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.</p>
            </div>
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number6} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Deployment and Launch</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.</p>
            </div>
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number7} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Post-Launch Support</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.</p>
            </div>
            <div className="w-[640px] border border-[#333333] px-10 py-20">
              <div className="flex items-center gap-x-6 mb-10">
                <img src={Number8} alt="" />
                <h6 className='text-6 font-medium text-[#98989A] border-b pb-5 border-[#333333] w-[437px]'>Continuous Improvement</h6>
              </div>
              <p className='text-base leading-[150%] text-[#98989A] w-[560px]'>We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.</p>
            </div>
          </div>
          </div>
          </section>

    </>
  )
}

export default SquareUpProcess