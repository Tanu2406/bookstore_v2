import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import About from '../About'

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    
   
    <div className="flex-grow flex justify-center items-center pt-18 md:pt-24">
        <About/>
    </div>

    <Footer />
</div>
  )
}

export default AboutUs
