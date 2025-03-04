import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faYoutube, faFacebookF } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <>
     <div className=" mt-8 p-8 bg-gray-100 w-full text-center">
     
      <ul className="flex justify-center items-center space-x-4 text-black font-bold">
        <li>About Us</li>
        <li>Contact</li>
        <li>Jobs</li>
        <li>Press Kit</li>
      </ul>
      <div className="flex justify-center items-center space-x-4 mt-4 text-xl">
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <div className="mt-4 text-sm">Copyright 2024-All right reserved by ACME industries ltd</div>
      </div>
     
      
    </>
   
  )
}

export default Footer
