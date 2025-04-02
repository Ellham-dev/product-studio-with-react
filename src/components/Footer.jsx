import React from 'react'
import Logo from '/Logo.png'
import SquareUp from '/SquareUp.png'
import FBButton from '/FBButton.png'
import TWButton from '/TWButton.png'
import LDButton from '/LDButton.png'
import { Link, NavLink } from 'react-router'

const Footer = () => {
  return (
    <>
      <section className='bg-[#1E1E1E]'>
        <div className="">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between border-b border-[#262626]">
            <div className="flex items-center gap-x-1.5 py-[22px] ">
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
            <div className="flex items-center gap-x-5">
              <h6 className='text-base leading-[150%] font-medium text-white'>Stay Connected</h6>
              <div className="flex items-center gap-x-2.5">
                <img src={FBButton} alt="" />
                <img src={TWButton} alt="" />
                <img src={LDButton} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer