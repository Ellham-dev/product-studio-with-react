import React from 'react'
import Logo from '/Logo.png'
import SquareUp from '/SquareUp.png'
import FBButton from '/FBButton.png'
import TWButton from '/TWButton.png'
import LDButton from '/LDButton.png'
import MassegeIcon from '/MAssageIcon.png'
import ContactIcon from '/ContactIcon.png'
import LocationIcon from '/LocationIcon.png'
import { Link, NavLink } from 'react-router'

const Footer = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="max-w-[1280px] mx-auto py-10">
          <div className=" flex items-center justify-between border-b border-[#333333] pb-10 mb-10">
            <div className="flex items-center gap-x-1.5 py-[22px] cursor-pointer">
              <Link to={"/"}><img src={Logo} alt="" /></Link>
              <Link to={"/"}><img src={SquareUp} alt="" /></Link>
            </div>
            <div className="text-[#E6E6E6] ">
              <ul className='flex items-center justify-center gap-x-6 text-sm leading-[150%] font-medium'>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? "" : "white", fontWeight: isActive ? "" : ""
                })} to="/">Home</NavLink></li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? "" : "white", fontWeight: isActive ? "medium" : ''
                })} to="service">Services</NavLink></li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? "" : "white", fontWeight: isActive ? "medium" : ''
                })} to="work">Work</NavLink></li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? "" : "white", fontWeight: isActive ? "medium" : ''
                })} to="process">Process</NavLink></li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? "" : "white", fontWeight: isActive ? "medium" : ''
                })} to="about">About</NavLink></li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? "" : "white", fontWeight: isActive ? "medium" : ''
                })} to="careers">Careers</NavLink></li>
                <li><NavLink style={({ isActive }) => ({
                  color: isActive ? "" : "white", fontWeight: isActive ? "medium" : ''
                })} to="contact">Contact</NavLink></li>
              </ul>
            </div>
            <div className="flex items-center gap-x-5 border border-[#333333] rounded-lg pr-2.5 pl-5 py-2.5">
              <h6 className='text-base leading-[150%] font-medium text-white'>Stay Connected</h6>
              <div className="flex items-center gap-x-2.5">
                <img src={FBButton} alt="" />
                <img src={TWButton} alt="" />
                <img src={LDButton} alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-[#333333] pb-10">
            <div className="flex items-center gap-x-[22px]">
              <div className="flex items-center gap-x-1.5 border-b border-[#333333] pb-3">
                <img src={MassegeIcon} alt="" />
                <p className='text-base leading-[150%] text-[#E6E6E6]'>hello@squareup.com</p>
              </div>
              <div className="flex items-center gap-x-1.5 border-b border-[#333333] pb-3">
                <img src={ContactIcon} alt="" />
                <p className='text-base leading-[150%] text-[#E6E6E6]'>+91 91813 23 2309</p>
              </div>
              <div className="flex items-center gap-x-1.5 border-b border-[#333333] pb-3">
                <img src={LocationIcon} alt="" />
                <p className='text-base leading-[150%] text-[#E6E6E6]'>Somewhere in the World</p>
              </div>
            </div>
            <p className='text-sm leading-[150%] text-[#98989A]'>© 2023 SquareUp. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer