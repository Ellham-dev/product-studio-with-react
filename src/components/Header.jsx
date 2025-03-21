import React from 'react'
import Logo from '/Logo.png'
import SquareUp from '/SquareUp.png'
import Button from './Button'

const Header = () => {
    return (
        <>
            <section className='bg-[#1E1E1E]'>
                <div className="max-w-[1280px] mx-auto flex items-center justify-between border-b border-[#262626]">
                    <div className="flex items-center gap-x-1.5 py-[22px] ">
                        <img src={Logo} alt="" />
                        <img src={SquareUp} alt="" />
                    </div>
                    <div className="text-[#E6E6E6]">
                        <ul className='flex items-center gap-x-6 text-sm leading-[150%] font-medium'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Work</li>
                            <li>Process</li>
                            <li>About</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="">
                        <Button/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header