import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
 navigate("/signup");
  }
  return (
    <>
    <div className="container  mx-auto flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-8 mt-10 md:mt-24 gap-6 md:gap-12  md:m-12">
      
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 max-w-[90%] sm:max-w-[600px]">

        {/* Heading & Description */}
       
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-4">
          <span className="text-pink-700">Welcome</span>, Your literary journey begins here!
        </h1>
        <p className="mt-4 text-gray-600 max-w-[600px] text-sm sm:text-base mb-4">
          A book is more than just pages filled with words; it's a portal to new worlds, 
          a mirror reflecting our own lives, and a trusted companion that can transport 
          us through time and space with each turn of the page.
        </p>
       

        {/* Input Field */}
        <input 
          className="mt-4 mb-4 border border-gray-300 rounded-xl p-2 w-full max-w-[400px]"  
          type="email" 
          placeholder="Enter your email"
        />

        {/* Button */}
        <button className="mt-4 mb-4 !bg-pink-400 text-white px-6 py-2 rounded-lg hover:!bg-pink-300" onClick={handleClick}>
          Get Started
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center mt-10">
        <img 
          className="w-full max-w-[300px] md:max-w-[500px] h-auto object-cover rounded-lg shadow-lg" 
         src="/card4.jpg"
          alt="hero img"
        />
      </div>

    </div>
    
    </>
  );
}

export default Hero;