import React from 'react'
import Logo from '/Logo.png'
import SquareUp from '/SquareUp.png'
import Button from './Button'
import { NavLink } from 'react-router'

const Header = () => {
    return (
        <>
            <section className='bg-[#1E1E1E]'>
                <div className="">
                    <div className="max-w-[1280px] mx-auto flex items-center justify-between border-b border-[#262626]">
                        <div className="flex items-center gap-x-1.5 py-[22px] ">
                            <img src={Logo} alt="" />
                            <img src={SquareUp} alt="" />
                        </div>
                        <div className="text-[#E6E6E6]">
                            <ul className='flex items-center gap-x-6 text-sm leading-[150%] font-medium'>
                            <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "white", fontWeight: isActive ? "" : ""
                                })} to="/">Home</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "white", fontWeight: isActive ? "medium" :''
                                })} to="service">Services</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "white", fontWeight: isActive ? "medium" :''
                                })} to="work">Work</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "white", fontWeight: isActive ? "medium" :''
                                })} to="process">Process</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "white", fontWeight: isActive ? "medium" :''
                                })} to="about">About</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "white", fontWeight: isActive ? "medium" :''
                                })} to="careers">Careers</NavLink></li>
                            </ul>
                        </div>
                        <div className="">
                            <Button />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header