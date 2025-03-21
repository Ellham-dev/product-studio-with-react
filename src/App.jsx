import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import Process from './pages/Process'
import Careers from './pages/Careers'
import About from './pages/About'
import Service from './pages/Services'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="work" element={<Work />} />
          <Route path="process" element={<Process />} />
          <Route path="careers" element={<Careers />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App