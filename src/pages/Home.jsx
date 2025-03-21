import React from 'react'
import Hero from '../components/Hero'
import Sponsorship from '../components/Sponsorship'
import ServicePart from '../components/ServicePart'
import SquareUp from '../components/SquareUp'
import ClientsReview from '../components/ClientsReview'
import Question from '../components/Question'
import InterestPart from '../components/InterestPart'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
    <Hero/>
    <Sponsorship/>
    <ServicePart/>
    <SquareUp/>
    <ClientsReview/>
    <Question/>
    <InterestPart/>
    <Contact/>
    </>
  )
}

export default Home