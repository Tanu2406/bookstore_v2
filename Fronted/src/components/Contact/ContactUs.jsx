import React from 'react'
import Contact from '../Contact'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ContactUs = () => {
  return (
    <>
     <div className="flex flex-col min-h-screen">
            <Navbar />
          
           
            <div className="flex-grow flex justify-center items-center md:pt-20">
                <Contact />
            </div>

            <Footer />
        </div>
   </>
  )
}

export default ContactUs
