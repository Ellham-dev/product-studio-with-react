import React from 'react'
import SponsorCard from '/SponsorCard.png'
import AmazonCard from '/AmazonCard.png'

const Sponsorship = () => {
  return (
    <>
    <section className='bg-[#1E1E1E]'>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-8">
        <img src={SponsorCard} alt="" />
        <img src={AmazonCard} alt="" />
        <img src={SponsorCard} alt="" />
        <img src={AmazonCard} alt="" />
        <img src={SponsorCard} alt="" />
        <img src={AmazonCard} alt="" />
      </div>
    </section>
    </>
  )
}

export default Sponsorship