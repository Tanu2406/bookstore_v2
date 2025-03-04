import React, { useEffect, useState } from "react";
import book from "../assets/book.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  
  const navItem = (
    <>
    <li >
      <a href="/">Home</a>
    </li>
    <li >
      <a href="/course">Course</a>
    </li>
    <li >
      <a  href="/contact" >Contact</a>
    </li>
    <li >
      <a href="/about">About</a>
    </li>
    </>
  );
  const [authUser,setAuthUser] = useAuth(); // ✅ Correct way

  const [isOpen, setIsOpen] = useState(false);
  const [showMyModal,setShowMyModal] = useState(false);
  const handleOnClose = ()=>setShowMyModal(false);
  
  return (
    <>
  
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center ml-2">
            {/* Hamburger Menu (Visible on small screens) */}
            <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon className="text-xl" icon={faBars} />
            </div>

            {/* Logo */}
            <img src={book} className="md:w-[4rem] md:h-[4rem] w-8 h-8 ml-2" alt="Book Logo" />
            <p className="font-bold text-2xl  ml-2 cursor-pointer">BookStore</p>
          </div>

          {/* Right Section (Menu + Icons) */}
          <div className="flex items-center space-x-6">
            {/* Menu Items (Hidden on small screens, visible on large screens) */}
            <ul className="hidden lg:flex flex-row space-x-6 ">
              {navItem}
            </ul>

            {/* Search Input (Hidden on small screens) */}
            <div className="hidden lg:flex items-center space-x-2  border border-gray-100  outline-none rounded-md px-2 py-2">
              <input  type="search" placeholder="Search" />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            
         {/* Search Icon (For Small Screens) */}  <div className="lg:hidden text-xl">   
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div> 
            {/* Moon Icon */}
            <FontAwesomeIcon className="text-xl" icon={faMoon} onClick={()=>setTheme(theme==="light"?"dark":"light")} />

            {authUser ? (
                    <Logout />
                  
                  ) : (
                    <button className="!bg-black font-bold !text-white px-4 py-2 rounded mt-1 hover:!bg-gray-600" onClick={() => setShowMyModal(true)}>
                      Login
                    </button>
                  )}

          </div>
        </div>

        {/* Mobile Menu (Only visible when isOpen is true) */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center">
            <ul className="space-y-4 text-center ">
                   {navItem}
            </ul>
           
          </div>
        )}
          <Login onClose={handleOnClose} visible={showMyModal}/>
        
         
      </nav>
    </>
  );
};

export default Navbar;
