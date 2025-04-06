import React from 'react'
import SquareUpImage1 from '/SquareUpImage1.png'
import OpenButton from '/OpenButton.png'

const SquareUpSection = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto">
          <div className="border-x border-[#333333] px-10 pt-20 pb-10">
            <h2 className='text-[38px] font-semibold mb-2.5 text-white'>At SquareUp</h2>
            <p className='text-base leading-[150%] text-[#E6E6E6] mb-10 w-[950px]'>We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
            <span className='text-lg bg-[#262626] p-2.5 w-[362px] rounded-lg text-white'>Here are ten examples of our notable works:</span>
          </div>
          <div className="">
            <div className="flex flex-wrap justify-between items-center">
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>E-Commerce Platform for Fashion Hub</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>Chic Boutique</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Mobile App for Food Delivery Service</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>HungryBites</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Booking and Reservation System for Event Management</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>EventMasters</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Custom Software for Workflow Automation</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>ProTech Solutions</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Web Portal for Real Estate Listings</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>Dream Homes Realty</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Mobile App for Fitness Tracking</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>FitLife Tracker</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Custom Software for Workflow Automation</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>ProTech Solutions</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Custom Software for Workflow Automation</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>ProTech Solutions</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Custom Software for Workflow Automation</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>ProTech Solutions</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
            </div>
            <div className="w-[640px]">
              <h6 className='text-xl font-medium border border-[#333333] px-10 py-6 w-[640px] text-[#98989A]'>Custom Software for Workflow Automation</h6>
            <div className="px-10 pt-[30px] pb-20 border border-[#333333]">
              <img src={SquareUpImage1} alt="" className='mb-6' />
              <div className="flex items-center justify-between mb-6">
                <div className="">
                  <h4 className='text-lg leading-[150%] font-medium text-[#E6E6E6] mb-2.5'>ProTech Solutions</h4>
                  <span className='text-base leading-[150%] bg-[#262626] px-3 py-2 w-[239px] rounded-lg text-[#98989A]'>Here are ten examples of our notable works:</span>
                </div>
                <img src={OpenButton} alt="" />
              </div>
              <p className='text-base leading-[150%] text-[#98989A]'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SquareUpSection